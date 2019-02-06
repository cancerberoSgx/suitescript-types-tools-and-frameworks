import { ReactLike } from "../../jsx/createElement";
import { ReactLikeChild } from '../../jsx/jsx';
import { RenderLinkOptions, RenderFragmentOptions } from "../browserCode";
import { StoreData } from '../../jsx/util/StoreData';
import { App, Route } from '../app';
import { Bind } from '../../jsx/util/Bind';

interface MainPageProps {
  userName: String
  categories: { name: string, id: string }[]
  renderLink(config: RenderLinkOptions): string
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



export function mainPageRoute(app: App): Route {
  return {
    name: 'mainPage',
    handler(o) {
      return ReactLike.render(<MainPage userName={o.params.userName} categories={[]} renderLink={app.renderLink.bind(app)}></MainPage>);
    }
  };
}






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