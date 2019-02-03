import { ServerRequest, ServerResponse } from 'N/http';
import { find, list } from '../../search/typedSearch/typedSearchOperations';
import { App } from '../app';
import {  MainPage, CategoryList } from './appTestUI';
import { ReactLike } from "../../jsx/createElement";
import { load } from 'N/record';
import { RecordView, buildRecordViewModel } from './recordView';


export function appTest(request: ServerRequest, response: ServerResponse) {

  // This app will have a home page at that renders a html app that will let user do ajax calls to another route 
  const app = new App()


  app.addRoute({
    name: 'mainPage',
    handler(o) {
      return ReactLike.render(<MainPage userName={o.params.userName} categories={[]} renderLink={app.renderLink.bind(app)}></MainPage>)
    }
  })


  app.addRoute({
    name: 'findCategory',
    contentType: 'json',
    handler(o) {
      const categoryName = o.params.categoryName
      if (!categoryName) {
        return app.notFound(o, 'Category name not provided')
      }
      const cat = find({
        type: 'commercecategory',
        columns: ['name'],
        filters: [{ name: 'name', values: categoryName, operator: 'contains' }]
      }, r => true)
      if (!cat) {
        return app.notFound(o, 'Category not found: ' + categoryName)
      }
      return { name: categoryName, id: cat.id }
    }
  })

  app.addRoute({
    name: 'listCategories',
    handler(o) {
      const cats = list({
        type: 'commercecategory',
        columns: ['name', 'primaryparent', 'fullurl'],
      })
      .map(c => ({
        name: c.getValue('name'), id: c.id, parent: c.getValue('primaryparent'), url: c.getValue('fullurl')
      }))
      return ReactLike.render(<CategoryList cats={cats}     ></CategoryList>)
    }
  })



  app.addRoute({
    name: 'recordView',
    handler(o) {
      const {id, type} = o.params;
      if(!id|| !type) {
        return 'Cannot open record view without an id or type, given id, type: '+`${id}, ${type}`
      }
      const record = load({id, type})
      if(!record) {
        return 'Record id, type: '+`${id}, ${type} not be found`
      }
      return ReactLike.render(<RecordView record={buildRecordViewModel(record)}    ></RecordView>)
    }
  })


  app.dispatch({ request, response })
}