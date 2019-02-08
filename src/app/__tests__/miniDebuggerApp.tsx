import { ReactLike } from "../../jsx/createElement"
import { App, Route } from '../app'
import { ServerRequest, ServerResponse } from 'N/http'
import { getCurrentUser } from 'N/runtime'
import { sampleCode, examples } from './miniDebuggerSampleCode'
import { Debugger, DebuggerExecutionResults, DebuggerAvailableObject } from './miniDebuggerUI';
import { printSource } from '../../introspection/printThisScopeSource';
import { evalCode } from './miniDebuggerEvalCode';
import { availableObjects } from './miniDebuggerAvailableObjects';
import { renderInHTMLDocument } from '../../jsx/renderInHtml';

export function miniNetSuiteApp(request: ServerRequest, response: ServerResponse) {

  const app = new App()

  addMiniDebuggerRoutes(app);
  
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



export function addMiniDebuggerRoutes(app: App) {
  app.addRoute(debuggerRoute(app));
  app.addRoute(debuggerAvailableObjectRoute(app));
}

export function debuggerRoute(app: App): Route {
  return {
    name: 'debugger',
    handler(o) {
     const example = examples.find(e=>e.name===o.params.selectedExample)
      const code = example ? example.code : o.params.code ? decodeURIComponent(o.params.code) : sampleCode.trim()
     
      const refreshOnExecute = typeof o.params.refreshOnExecute === 'undefined' ? true : false

      const { logs, errors, evaluatedCode } = evalCode(code)

      const commonProps = {
        ...o.params, logs, errors, code, evaluatedCode,
        username: o.params.userName || (getCurrentUser().name + ' (' + getCurrentUser().email + ')'),
        exampleName: example ? example.name : undefined,
        exampleDescription: example ? example.description : undefined,
      }
      if (refreshOnExecute) {
        return renderInHTMLDocument(<Debugger {...commonProps}></Debugger>)
      }
      else {
        return ReactLike.render(<DebuggerExecutionResults {...commonProps}></DebuggerExecutionResults>)
      }
    }
  }
}

function debuggerAvailableObjectRoute(app: App): Route {
  return {
    name: 'debuggerAvailableObject',
    handler(o) {
      const objectName = o.params.objectName
      const object = availableObjects.find(obj=>obj.name==objectName)
      if(!object){
        return ReactLike.render(<div>Object not found with name "{objectName}"</div>)
      }
      else {
        return ReactLike.render(<DebuggerAvailableObject object={object}></DebuggerAvailableObject>)
      }
    }
  }
}


