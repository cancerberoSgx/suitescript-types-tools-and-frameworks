import { ReactLike } from "../../jsx/createElement"
import { App, Route } from '../app'
import { ServerRequest, ServerResponse } from 'N/http'
import { getCurrentUser } from 'N/runtime'
import { sampleCode } from './miniDebuggerSampleCode'
import { Debugger, DebuggerExecutionResults } from './miniDebuggerUI';
import { printSource } from '../../introspection/printThisScopeSource';
import { evalCode } from './miniDebuggerEvalCode';

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



export function debuggerRoute(app: App): Route {
  return {
    name: 'debugger',
    handler(o) {
      const code = o.params.code ? decodeURIComponent(o.params.code) : sampleCode.trim()
      // const evaluatedCode = o.params.evaluatedCode ? decodeURIComponent(o.params.evaluatedCode) : ''
      const refreshOnExecute = typeof o.params.refreshOnExecute === 'undefined' ? true : false

      const { logs, errors, evaluatedCode } = evalCode(code)

      const commonProps = {
        ...o.params, logs, errors, code, evaluatedCode,//: encodeURIComponent(evaluatedCode),
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

// const availableFunctions = [
//   {
//     name: 'LOG', 
//     doc: 'prints given arguments pretty and push them into the log array so they are available in the results page', 
//     params: [{name: '...args', 
//     type: 'any[]'}], 
//     returns: {value: 'void'}
//   },
//   {
//     name: 'printValueForLog', 
//     doc: 'returns a pretty representation of given value, used by LOG()', 
//     params: [{
//     name: 'value', 
//     type: 'any'}], returns: {value: 'string'}
//   },
// ]



