import { tryTo } from './misc';



/*

# What

tiny library that performs safe eval() using sandboxed iframes, as described here: https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/

# Usage:

```
import {safeEval} from 'eval-iframe-sandbox'
(async () => {
  const { result, error } = await safeEval<number>(`Math.random()*Math.random()`)
  console.log(`safe eval result: `, result, 'error: ', error)

  // alternatively instead promises you can also use callback functions
  safeEval<any>((`Math.random()*Math.random()`),
    ({ result, error }) => console.log(`safe eval result: `, result, 'error: ', error))
})()

with TS / React:
```
import { safeEval } from 'eval-iframe-sandbox';
const Evaluator = (props: {}) => <div>
  <textarea id="code">{`
({
  a: alert('hacker msg') || 'alert not shown',
  b: 2
})
 `.trim()}
  </textarea>
  <button onClick={async e => {
    const code = document.querySelector<HTMLTextAreaElement>('#code')!.value
    const { result, error } = await safeEval<any>(code)
    console.log(`safe eval result:`, result, 'error:', error)
  }}>eval</button>
</div>

``
*/

interface Error { message?: string, asString: string, stack?: string, name?: string }
interface Result<T> { result?: T, error?: Error }

let counter = 0
export async function safeEval<T=any>(code: string, callback?: (result: T) => void): Promise<Result<T>> {
  await install()
  uniqueCallback = callback
  const p = new Promise<T>(resolve => {
    uniquePromiseResolve = resolve
  })
  if (frame && frame.contentWindow) {
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
        parsed = JSON.parse(e.data)
      } catch (ex) {
        parsed = { error: { message: ex.message, stack: ex.stack, asString: ex + '', name: ex.name } }
      }
      uniqueCallback && uniqueCallback(parsed)
      uniquePromiseResolve && uniquePromiseResolve(parsed)
    }
    else {
      console.warn('WARNING: safeEval security checking not passed for message id', e.data.id, 'Message:', e)
    }
  })
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
      result = { result: eval(e.data.code) }
    }
    catch (ex) {
      console.error('safeEval error while evaluating expression ' + e.data.code, 'Error: ', ex)
      result = { error: { message: ex.message, stack: ex.stack, asString: ex + '', name: ex.name } }
    }
    let transferable: string
    try {
      transferable = JSON.stringify(result)
    } catch (ex) {
      result = { error: { message: ex.message, stack: ex.stack, asString: ex + '', name: ex.name } }
      transferable = JSON.stringify(result)
    }
    mainWindow && mainWindow.postMessage(transferable, e.origin as any)
  })
}
