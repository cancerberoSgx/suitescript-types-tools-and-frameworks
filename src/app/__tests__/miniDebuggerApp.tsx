import { ReactLike } from "../../jsx/createElement"
import { ReactLikeChild } from '../../jsx/jsx'
import { Bind } from '../../jsx/util/Bind'
import { App, Route, RouteHandlerParams } from '../app'
import { RenderLinkOptions } from "../browserCode"


import { ServerRequest, ServerResponse } from 'N/http'
import { getCurrentUser } from 'N/runtime'
import { ClassRule, Styles, Style } from '../../jsx/Style'
import { printNativeError } from '../../misc/misc'
import { sampleCode } from './miniDebuggerSampleCode'

export function miniNetSuiteApp(request: ServerRequest, response: ServerResponse) {

  const app = new App()

  app.addRoute(debuggerRoute(app))
  const redirectToDebugger: Route = {
    name: 'redirectToDebugger',
    handler(o) {
      app.redirect({ redirect: app.renderLink({ routeName: 'debugger', params: {} }) });
    }
  }
  app.setNoRouteParamRoute(redirectToDebugger)
  app.setNoRouteFoundRoute(redirectToDebugger)

  app.dispatch({ request, response })
}




const editor: ClassRule = {
  border: '1px solid #aaaaaa',
  width: '100%',
  height: '500px'
}
const { styles, classes } = Styles({ editor })




interface DebuggerProps extends RouteHandlerParams {
  userName?: string
  logs?: string[]
  errors?: string[]
  code: string
  refreshOnExecute?: boolean
  // refreshOnExecute?: boolean
}

export const Debugger = (props: DebuggerProps, children: ReactLikeChild[]) => {
  return <article>

    <Style classes={styles}></Style>

    <h1>Poor man's SuiteScript debugger </h1>
    <p>Hello dear {props.userName}! Welcome to my poor man's SuiteScript debugger.</p>
    <p>
      This is an experiment of mine (Sebastián Gurin) using JSX &amp; TypeScript and a sall server side pages application framework.
    </p>

    <Bind name="debugger-editor">
      <textarea className={classes.editor}>{props.code}</textarea>
    </Bind>

    <Bind name="debugger-editor" data={{ currentParams: props.currentParams }}>
      <button id="dataKnower" onClick={e => {
        const code = getBindInputValue(e.currentTarget) || ''
        const currentParams = getBindDataOrThrow<DebuggerProps>(e.currentTarget)
        const params = { ...currentParams, code: encodeURIComponent(code) }

        if (params.refreshOnExecute) {
          location.href = buildRouteUrl({
            routeName: 'debugger',
            params: { ...params, refreshOnExecute: true }
          })
        }
        else {
          fetchAndRenderHtml({
            routeName: 'debugger',
            params: { ...params, refreshOnExecute: false },
            selector: '#debuggerExecutionResults'
          })
        }
      }}>Execute</button>
    </Bind>

    <button>Reset code</button>

    <input type="checkbox" checked={!props.refreshOnExecute} onChange={e => {
      const currentParams = getBindDataOrThrow<DebuggerProps>(document.querySelector<HTMLElement>('#dataKnower')!)
      location.href = buildRouteUrl({
        routeName: 'debugger',
        params: { ...currentParams, refreshOnExecute: e.currentTarget.checked }
      })
    }}>Refresh page on execute?</input>

    <DebuggerExecutionResults {...props}></DebuggerExecutionResults>

  </article>
}

const DebuggerExecutionResults = (props: DebuggerProps) => <div id="debuggerExecutionResults">
  <table>
    <tr><td>Logs: <ul>{props.logs && props.logs.map(l => <li>{l}</li>)}
    </ul></td>
      <td>Errors: <ul>{props.errors && props.errors.map(l => <li>{l}</li>)}
      </ul></td></tr>
  </table>
</div>


var _logs: string[] = []
var _errors: string[] = []
function _print(s: any): string {
  return (typeof s === 'undefined') ? 'undefined' :
    ['number', 'boolean', 'string'].indexOf(typeof s) !== -1 ? s :
      Array.isArray(s) ? `[${s.map(_print).join(', ')}]` :
        (Object.getPrototypeOf(s) === Object.prototype) ? `{${Object.keys(s).map(k => `${k}:${_print(s[k])}`).join(', ')}}` :
          //@ts-ignore
          (s.name || toString(s) || (s + ''))
}
function LOG(...args: any[]): void {
  _logs.push(args.map(_print).join(', '))
}
function LOG_getLogs() {
  return _logs
}


export function debuggerRoute(app: App): Route {
  return {
    name: 'debugger',
    handler(o) {
      const code = o.params.code ? decodeURIComponent(o.params.code) : sampleCode.trim()
      const refreshOnExecute = typeof o.params.refreshOnExecute === 'undefined' ? true : false
      try {
        eval(code)
      } catch (error) {
        _errors.push(printNativeError(error))
      }
      const commonProps = {
        ...o.params, logs: LOG_getLogs(), errors: _errors, code,
        username: o.params.userName || (getCurrentUser().name + ' (' + getCurrentUser().email + ')')
      }
      if (refreshOnExecute) {
        return ReactLike.render(<Debugger {...commonProps}></Debugger>)
      }
      else {
        return ReactLike.render(<DebuggerExecutionResults {...commonProps}></DebuggerExecutionResults>)
      }
    }
  }
}