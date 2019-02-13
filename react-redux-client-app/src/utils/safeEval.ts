import { tryTo } from './misc';

// tiny library that performs safe eval() using sandboxed iframes, like described here: https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/

// TODO :make this a separate project
// TODO: synchronize messages and callbacks/promises


// Usage:

// <textarea id="code">1+1</textarea>
// <button onClick={async e => {
//   // @ts-ignore
//   const { result, error } = await safeEval<any>(document.querySelector<HTMLTextAreaElement>('#code').value)
//   console.log(`safe eval result 1 ${result} error: ${error && error.message}`)
//   // alternatively to promises you can also use callback functions
//   safeEval<any>(document.querySelector<HTMLTextAreaElement>('#code')!.value,
//     ({ result, error }) => console.log(`safe eval result 2 ${result} error: ${error && error.message}`))

// }}>safe eval text area code</button>
// <button onClick={async e => {
//   const { result, error } = await safeEval<number>(`Math.random()*Math.random()`)
//   console.log(`safe eval result 3 ${result} error: ${error && error.message}`)
// }}>safe eval Math.random()*Math.random()</button>


let counter = 0
export async function safeEval<T=any>(code: string, callback?: (result: T) => void): Promise<{ result?: T, error?: { message: string, asString: string, stack: string } }> {
  await install()
  uniqueCallback = callback
  const p = new Promise<T>(resolve => {
    uniquePromiseResolve = resolve
  })
  if (frame && frame.contentWindow) {
    // debugger
    frame.contentWindow.postMessage({ code, id: counter++ }, '*')
  }
  return p
}

async function install(): Promise<void> {
  if (frame) { return Promise.resolve() }
  frame = await buildIframe()
  window.addEventListener('message', function (e) {
    if (
      e.origin === "null" &&
      e.source === frame.contentWindow &&
      frame.getAttribute('sandbox') === 'allow-scripts' &&
      frame.getAttribute('srcdoc') === frameHtml &&
      !frame.contentDocument
    ) {
      let parsed: any
      try {
        // debugger
        parsed = JSON.parse(e.data)
      } catch (ex) {
        parsed = { error: { message: ex.message, stack: ex.stack, asString: ex + '' } }
      }
      uniqueCallback && uniqueCallback(parsed)
      uniquePromiseResolve && uniquePromiseResolve(parsed)
    }
    else {
      console.log('WARNING: safeEval security checking not passed for message id', e.data.id, 'Message:', e)
    }
  })

  // // we perform a first eval to make sure following work OK

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve()
  //   }, 200);
  // })
}

let uniquePromiseResolve: ((result: any) => void) | undefined
let uniqueCallback: ((this: void, result: any) => void) | undefined
let frame: HTMLIFrameElement

function buildIframe(): Promise<HTMLIFrameElement> {
  return new Promise<HTMLIFrameElement>(resolve => {
    const iframe = document.createElement('iframe')
    iframe.srcdoc = frameHtml
    iframe.style.display = 'none'
    iframe.setAttribute('sandbox', 'allow-scripts')
    iframe.onload = e => { resolve(iframe) }
    document.body.appendChild(iframe)
  })
}

const frameHtml = `
<!DOCTYPE html>
<html>
 <head>
   <title></title>
   <script>
    ${frameFn.toString()}
    frameFn()
   </script>
 </head>
</html>`

function frameFn() {
  window.addEventListener('message', function (e) {
    var mainWindow = e.source
    var result: any
    try {
      // debugger
      result = { result: eval(e.data.code) }
    }
    catch (ex) {
      result = { error: { message: ex.message, stack: ex.stack, asString: ex + '' } }
    }
    let transferable: string
    try {
      transferable = JSON.stringify(result)
    } catch (ex) {
      result = { error: { message: ex.message, stack: ex.stack, asString: ex + '' } }
      transferable = JSON.stringify(result)
    }
    mainWindow && mainWindow.postMessage(transferable, e.origin as any)
  })
}
