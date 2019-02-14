import { ReactLike } from "../../jsx/createElement";
import { ReactLikeChild } from '../../jsx/jsx';
import { Bind } from '../../jsx/util/Bind';
import { App, Route, RouteHandlerParams } from '../app';
import { ServerRequest, ServerResponse } from 'N/http';
import { recordViewRoute, recordViewJsonRoute } from '../recordView/recordViewRoute';
import { setFieldValueRoute } from '../routes/setFieldValueRoute';
import { findRecordRoute } from '../routes/findRecordRoute';
import { listRecordTypesRoute, listRecordTypesResultRoute, listRecordTypesJsonRoute } from "../searchView/listRecordTypesRoute";
import { setSublistFieldValueRoute } from '../routes/setSublistFieldValueRoute';
import { debuggerRoute, addMiniDebuggerRoutes } from './miniDebuggerApp';
import { renderInHTMLDocument } from '../../jsx/renderInHtml';
import { searchViewRoute, searchViewJsonRoute } from "../searchView/searchViewRoute";
import { serveFileRoute } from '../routes/serveFileRoute';
import { serveSPAIndexRoute } from '../routes/serveSPAIndexRoute';

// example application using ./app framework. It implements a simple MainPage route (see appTestMainPage and then uses built in routes like recordView and searchView)
export function miniNetSuiteApp(request: ServerRequest, response: ServerResponse) {

  const app = new App()

  app.addRoute(mainPageRoute(app))

  app.addRoute(findRecordRoute(app))

  app.addRoute(recordViewRoute(app))
  app.addRoute(recordViewJsonRoute(app))

  app.addRoute(listRecordTypesRoute(app))
  app.addRoute(listRecordTypesResultRoute(app))
  app.addRoute(listRecordTypesJsonRoute(app))

  app.addRoute(setFieldValueRoute(app))

  app.addRoute(setSublistFieldValueRoute(app))

  app.addRoute(searchViewRoute(app))
  app.addRoute(searchViewJsonRoute(app))

  addMiniDebuggerRoutes(app)
  app.addRoute(serveFileRoute(app))

  app.addRoute(serveSPAIndexRoute(app))
  

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

        <a target="_blank" href={props.renderLink({
          routeName: 'recordViewJson',
          params: { id: '7',  type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false }
        })}>record json link</a>

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

        &nbsp; and &nbsp;

        <a target="_blank" href={props.renderLink({
          routeName: 'listRecordTypesJson',
          params: { type: 'item' },
        })}>listRecordTypesJson</a>

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


      <li>
        <a target="_blank" href={props.renderLink({
          routeName: 'serveFile',
          params: { fileId: 88491 },
        })}>serveFile with id 88491</a><br></br>

        <a target="_blank" href={props.renderLink({
          routeName: 'serveFile',
          params: { name: 'app.js', folderId: 28898 },
        })}>serveFile named app.js in folder 28898</a><br></br>

        <a target="_blank" href={props.renderLink({
          routeName: 'serveFile',
          params: { name: 'app.js', folderId: 28898, outputMode: 'url' },
        })}>serveFile print url of file named app.js in folder 28898</a><br></br>

        <a target="_blank" href={props.renderLink({
          routeName: 'serveFile',
          params: { name: 'app.js', folderId: 28898, outputMode: 'redirectToUrl' },
        })}>serveFile redirect to url of file named app.js in folder 28898</a>
      </li>

      <li>
        <a target="_blank" href={props.renderLink({
          routeName: 'serveSPAIndex',
          params: { 
            cssFiles: encodeURIComponent(JSON.stringify([`https://172.20.10.7:8080/src.7ed060e2.css`])), 
            jsFiles: encodeURIComponent(JSON.stringify([`https://127.0.0.1:8080/src.7ed060e2.js`])), 
          },
        })}>serve SPA dummy index.html passing <a href="https://127.0.0.1:8080/src.7ed060e2.js">.js</a> and <a href="https://172.20.10.7:8080/src.7ed060e2.css">.css</a> file urls as params</a><br></br>

        <a target="_blank" href={props.renderLink({
          routeName: 'serveSPAIndex',
          params: { 
            cssFiles: encodeURIComponent(JSON.stringify([`http://172.20.10.7:8080/src.7ed060e2.css`])), 
            jsFiles: encodeURIComponent(JSON.stringify([`http://127.0.0.1:8080/src.7ed060e2.js`])), 
          },
        })}>same as before but loading from unsecure <a href="http://127.0.0.1:8080/src.7ed060e2.js">.js</a> and <a href="http://172.20.10.7:8080/src.7ed060e2.css">.css</a> file urls as params</a>

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



