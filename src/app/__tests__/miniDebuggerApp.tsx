import { ReactLike } from "../../jsx/createElement";
import { ReactLikeChild } from '../../jsx/jsx';
import { Bind } from '../../jsx/util/Bind';
import { App, Route, RouteHandlerParams } from '../app';
import { RenderLinkOptions } from "../browserCode";


import { ServerRequest, ServerResponse } from 'N/http';
import { getCurrentUser} from 'N/runtime';

// example application using ./app framework. It implements a simple MainPage route (see appTestMainPage and then uses built in routes like recordView and searchView)
export function miniNetsuiteApp(request: ServerRequest, response: ServerResponse) {

  const app = new App()

  app.addRoute({
      name: 'mainPage',
      handler(o) {
        return ReactLike.render(<MainPage {...o.params} userName={getCurrentUser().name}></MainPage>);
      }
    })

    const redirectToMainPage : Route = {
        name: 'redirectToMainPage',
        handler(o) {
          app.redirect({ redirect: app.renderLink({ routeName: 'mainPage', params: {} }) });
        }
      }
  // also we set a default route that redirects to main page in case the url doesn't have any route or unknown one (alternatively we could show 404 page)  
  app.setNoRouteParamRoute(redirectToMainPage)
  app.setNoRouteFoundRoute(redirectToMainPage)

  // finally we call dispatch() so the framework calls the routes implementation that matches request's url
  app.dispatch({ request, response })
}



interface MainPageProps extends RouteHandlerParams{
  userName: String
  // renderLink(config: RenderLinkOptions): string
}

export const MainPage = (props: MainPageProps, children: ReactLikeChild[]) => {
  return <article>

    <MainPageInit></MainPageInit>
    
    <h1>Welcome {props.userName}</h1>

    This is an experiment of mine (Sebastián Gurin) using JSX &amp; TypeScript technologies to render server side pages. Try to use the buttons and links below to see some pages:

    <ul>

      <li>
        <a href={props.renderLink({
          routeName: 'recordView',
          params: { id: '7', type: 'commercecategory' , showSublistLines: true, seeValues: true, showAllFields: false}
        })}>record view link</a> 
        
        &nbsp; and &nbsp; 

        <button onClick={e => fetchAndRenderHtml({
          routeName: 'recordView',
          params: { id: '7', type: 'commercecategory' , showSublistLines: true, seeValues: true , showAllFields: false},
          selector: '#mainView'
        })}>record view embedded</button>
      </li>

      <li>
        <a  href={props.renderLink({
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
      
    </ul>
    
    <div id="mainView"></div>

  </article>
}

/** we call custom tags so they get initialized and their scripts are embedded in the main html - if not they won't be present when complex pages are rendered inside dynamically using fetchAndRenderHtml */
 const MainPageInit = () => <span>
  <Bind></Bind>
</span>



// export function mainPage(app: App): Route {
//   return {
//     name: 'mainPage',
//     handler(o) {
//       return ReactLike.render(<MainPage userName={o.params.userName}></MainPage>);
//     }
//   };
// }






// interface Class extends Partial<CSSStyleDeclaration> { }
// interface IClasses {
//   [k: string]: Class
//   button: Class,
//   primaryButton: Class
// }
// function getStyles() {
//   const button: Class = {
//     border: '2px solid pink',
//     padding: '5px'
//   };
//   // this class extends another:
//   const primaryButton: Class = {
//     ...button,
//     color: 'red',
//     fontWeight: 'bolder'
//   };
//   const styles: IClasses = {
//     button,
//     primaryButton
//   };
//   return styles;
// }


// interface Category {
//   name?: string, parent?: string, url?: string, id?: string
// }
// interface CategoryList {
//   renderLink(config: RenderLinkOptions): string
//   cats: Category[]
// }
// export const CategoryList = (props: CategoryList) => <ul>
//   {props.cats.map(c => <li>
//     {c.name} {c.url} parent: {c.parent} id: {c.id}
//     <a href={props.renderLink({ routeName: 'recordView', params: { id: c.id + '', type: 'commercecategory' } })}>link</a>
//   </li>)}
// </ul>