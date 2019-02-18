import { tryTo } from './misc';
import { IS_JSDOM } from './getUrlApiMock';



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

const DONT_REUTILIZE_FRAME= false
export async function safeEval<T=any>(code: string, callback?: (result: T) => void): Promise<Result<T>> {
  if(IS_JSDOM) {
    return Promise.resolve(tryTo(()=>JSON.parse(doEval(code))))
  }
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
  if (!DONT_REUTILIZE_FRAME && frame) { return Promise.resolve() }
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
      console.warn('WARNING: safeEval security checking not passed for message id', e.data.id, 'Message:', e, ` e.origin === "null": `,  e.origin === "null", ` e.source === frame.contentWindow: ${ e.source === frame.contentWindow}, frame.getAttribute('sandbox') === 'allow-scripts': ${frame.getAttribute('sandbox') === 'allow-scripts'}, frame.getAttribute('srcdoc') === frameHtml: ${frame.getAttribute('srcdoc') === frameHtml}, !frame.contentDocument: ${!frame.contentDocument}`)
    }
  })
}

let uniquePromiseResolve: ((result: any) => void) | undefined
let uniqueCallback: ((this: void, result: any) => void) | undefined
let frame: HTMLIFrameElement

function buildIframe(): Promise<HTMLIFrameElement> {
  return new Promise<HTMLIFrameElement>(resolve => {
    const old = document.getElementById('safe-eval-iframe')
    if(old){
      old.remove()
    }
    const iframe = document.createElement('iframe')
    iframe.srcdoc = frameHtml
    iframe.style.display = 'none'
    iframe.setAttribute('sandbox', 'allow-scripts')
    iframe.setAttribute('id', 'safe-eval-iframe')
    iframe.onload = e => { resolve(iframe) }
    document.head.appendChild(iframe)
  })
}

const frameHtml = `
<!DOCTYPE html>
<html>
 <head>
   <title></title>
   <script>
   ${doEval.toString()}
    ${frameFn.toString()}
    frameFn()
   </script>
 </head>
</html>`

function frameFn() {
  window.addEventListener('message', function (e) {
    var mainWindow = e.source
    var transferable = doEval(e.data.code)
    mainWindow && mainWindow.postMessage(transferable, e.origin as any)
  })
}
function doEval(code: string) {
  var result: any;
  try {
    result = { result: eval(`${code}`) };
  }
  catch (ex) {
    console.error('safeEval error while evaluating expression ' + code, 'Error: ', ex);
    result = { error: { message: ex.message, stack: ex.stack, asString: ex + '', name: ex.name } };
  }
  let transferable: string
    try {
      transferable = JSON.stringify(result)
    } catch (ex) {
      result = { error: { message: ex.message, stack: ex.stack, asString: ex + '', name: ex.name } }
      transferable = JSON.stringify(result)
    }
    return transferable
}

