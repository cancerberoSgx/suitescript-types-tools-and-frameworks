import { ServerRequest, ServerResponse } from 'N/http';
import { ReactLike } from "../../jsx/createElement";
import { list, filter } from '../../search/typedSearch/typedSearchOperations';
import { App, Route } from '../app';
import { recordViewRoute } from '../recordView/recordViewRoute';
import { setFieldValueRoute } from '../routes/setFieldValueRoute';
import { MainPage } from './appTestUI';
import { findRecordRoute } from '../searchView/findRecordRoute';
import { ListRecordTypes } from '../searchView/listRecordTypesView';
import { listRecordTypesRoute } from "../searchView/listRecordTypesRoute";


export function appTest(request: ServerRequest, response: ServerResponse) {

  // This app will have a home page at that renders a html app that will let user do ajax calls to another route 
  const app = new App()


  app.addRoute({
    name: 'mainPage',
    handler(o) {
      return ReactLike.render(<MainPage userName={o.params.userName} categories={[]} renderLink={app.renderLink.bind(app)}></MainPage>)
    }
  })


  app.addRoute(findRecordRoute(app))

  // app.addRoute(listCategoriesRoute(app))

  app.addRoute(recordViewRoute(app))

  app.addRoute(listRecordTypesRoute(app))

  app.addRoute(setFieldValueRoute(app))


  app.dispatch({ request, response })
}




// function listCategoriesRoute(app: App): Route {
//   return {
//     name: 'listCategories',
//     handler(o) {
//       const cats = list({
//         type: 'commercecategory',
//         columns: ['name', 'primaryparent', 'fullurl'],
//       })
//         .map(c => ({
//           name: c.getValue('name'), id: c.id, parent: c.getValue('primaryparent'), url: c.getValue('fullurl')
//         }));
//       return ReactLike.render(<CategoryList cats={cats} renderLink={app.renderLink.bind(app)}></CategoryList>);
//     }
//   };
// }





