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

  const app = new App()

  app.addRoute({
    name: 'mainPage',
    handler(o) {
      return ReactLike.render(<MainPage userName={o.params.userName} categories={[]} renderLink={app.renderLink.bind(app)}></MainPage>)
    }
  })

  app.addRoute(findRecordRoute(app))

  app.addRoute(recordViewRoute(app))

  app.addRoute(listRecordTypesRoute(app))

  app.addRoute(setFieldValueRoute(app))


  app.dispatch({ request, response })
}




