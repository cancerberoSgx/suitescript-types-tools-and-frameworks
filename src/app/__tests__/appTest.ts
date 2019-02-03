import { ServerRequest, ServerResponse } from 'N/http';
import { find, list } from '../../search/typedSearch/typedSearchOperations';
import { App } from '../app';
import { renderMainPage, renderListCategories } from './appTestUI';

export function appTest(request: ServerRequest, response: ServerResponse) {

  // This app will have a home page at that renders a html app that will let user do ajax calls to another route 
  const app = new App()
  app.addRoute({
    name: 'mainPage',
    handler(o) {
      return renderMainPage({
        userName: o.params.name, categories: [],
      })
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
      return renderListCategories({
        cats: cats.map(c => ({
          name: c.getValue('name'), id: c.id, parent: c.getValue('primaryparent'), url: c.getValue('fullurl')
        }))
      })
    }
  })


  app.dispatch({ request, response })
}