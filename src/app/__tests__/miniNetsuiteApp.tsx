import { ReactLike } from "../../jsx/createElement";
import { ReactLikeChild } from '../../jsx/jsx';
import { Bind } from '../../jsx/util/Bind';
import { App, Route, RouteHandlerParams } from '../app';
import { ServerRequest, ServerResponse } from 'N/http';
import { recordViewRoute } from '../recordView/recordViewRoute';
import { setFieldValueRoute } from '../routes/setFieldValueRoute';
import { findRecordRoute } from '../routes/findRecordRoute';
import { listRecordTypesRoute, listRecordTypesResultRoute } from "../searchView/listRecordTypesRoute";
import { setSublistFieldValueRoute } from '../routes/setSublistFieldValueRoute';
import { debuggerRoute, addMiniDebuggerRoutes } from './miniDebuggerApp';
import { renderInHTMLDocument } from '../../jsx/renderInHTMLDocument';
import { searchViewRoute } from "../searchView/searchViewRoute";

// example application using ./app framework. It implements a simple MainPage route (see appTestMainPage and then uses built in routes like recordView and searchView)
export function miniNetSuiteApp(request: ServerRequest, response: ServerResponse) {

  const app = new App()

  app.addRoute(mainPageRoute(app))

  app.addRoute(findRecordRoute(app))

  app.addRoute(recordViewRoute(app))

  app.addRoute(listRecordTypesRoute(app))
  app.addRoute(listRecordTypesResultRoute(app))

  app.addRoute(setFieldValueRoute(app))

  app.addRoute(setSublistFieldValueRoute(app))


  app.addRoute(searchViewRoute(app))
  
  addMiniDebuggerRoutes(app)

  // also we set a default route that redirects to main page in case the url doesn't have any route or unknown one (alternatively we could show 404 page)  
  const defaultRoute: Route = {
    name: 'redirectToMainPage',
    handler(o) {
      app.redirect({ redirect: app.renderLink({ routeName: 'mainPage', params: {} }) });
    }
  }
  app.setNoRouteParamRoute(defaultRoute)
  app.setNoRouteFoundRoute(defaultRoute)


  // finally we call dispatch() so the framework calls the routes implementation that matches request's url
  app.dispatch({ request, response })
}


interface MainPageProps extends RouteHandlerParams {
  userName: String
}

export const MainPage = (props: MainPageProps, children: ReactLikeChild[]) => {
  return <article>

    {/* we call <Bind> and other custom tags so their scripts are embedded in the main html - if not they won't be present for embedded pages that use new ones */}
    <Bind name="dummy123"></Bind>

    <h1>Welcome {props.userName}</h1>

    This is an experiment of mine (Sebastián Gurin) using JSX &amp; TypeScript technologies to render server side pages. Try to use the buttons and links below to see some pages:

    <ul>

      <li>
        <a href={props.renderLink({
          routeName: 'recordView',
          params: { id: '7', type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false }
        })}>record view link</a>

        &nbsp; and &nbsp;

        <button onClick={e => fetchAndRenderHtml({
          routeName: 'recordView',
          params: { id: '7', type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false },
          selector: '#mainView'
        })}>record view embedded</button>
      </li>

      <li>
        <a href={props.renderLink({
          routeName: 'listRecordTypes',
          params: { type: 'item' },
        })}>listRecordTypes view link</a>

        &nbsp; and &nbsp;

        <button onClick={e => fetchAndRenderHtml({
          routeName: 'listRecordTypes',
          params: { dynamicResultsRender: true, type: 'item' },
          selector: '#mainView'
        })}>listRecordTypes view embedded</button>
      </li>

      <li>
        <a href={props.renderLink({
          routeName: 'debugger',
          params: {},
        })}>debugger</a>

        &nbsp; and &nbsp;

        <button onClick={e => fetchAndRenderHtml({
          routeName: 'debugger',
          params: { dynamicResultsRender: true },
          selector: '#mainView'
        })}>debugger embedded</button>
      </li>
      <li>
        <a href={props.renderLink({
          routeName: 'searchView',
          params: {},
        })}>searchView</a>
        </li>
    </ul>

    <div id="mainView"></div>

  </article>
}



export function mainPageRoute(app: App): Route {
  return {
    name: 'mainPage',
    handler(o) {
      return renderInHTMLDocument(<MainPage {...o.params} userName={o.params.userName}></MainPage>);
    }
  };
}



