import { ServerRequest, ServerResponse, } from 'N/http';
import { redirect as Redirect } from 'N/redirect';
import { find, list } from '../../search/typedSearch/typedSearchOperations';
import { find as Find } from '../../misc/misc'
import { App } from '../app';
import { MainPage, CategoryList } from './appTestUI';
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
      return ReactLike.render(<CategoryList cats={cats} renderLink={app.renderLink.bind(app)}   ></CategoryList>)
    }
  })



  app.addRoute({
    name: 'recordView',
    handler(o) {
      const { id, type } = o.params;
      const seeValues = !!o.params.seeValues
      if (!id || !type) {
        return 'Cannot open record view without an id or type, given id, type: ' + `${id}, ${type}`
      }
      const record = load({ id, type })
      if (!record) {
        return 'Record id, type: ' + `${id}, ${type} not be found`
      }

      return ReactLike.render(<RecordView record={buildRecordViewModel(record, seeValues)} seeValues={seeValues} renderLink={app.renderLink.bind(app)} currentUrl={app.getCurrentRealUrlSearchFragment()}></RecordView>)
    }
  })

  

  app.addRoute({
    name: 'setFieldValue',
    handler(o) {
      const { recordId, recordType, fieldId, fieldValue } = o.params;
      const redirect = decodeURIComponent(o.params.redirect)
      if (!recordId || !recordType || !fieldId || !fieldValue) {
        return 'Invalid call - !id|| !type || !fieldId || ! fieldValue must apply ' + `${recordId}, ${recordType}, ${fieldId},${fieldValue}`
      }
      const record = load({ id: recordId, type: recordType })
      if (!record) {
        return 'Record id, type: ' + `${recordId}, ${recordType} not found`
      }
      if (!Find(record.getFields(), f => f === fieldId)) {
        return 'Record id, type: ' + `${recordId}, ${recordType} does not have fieldId ${fieldId}`
      }
      record.setValue({ fieldId, value: fieldValue })
      record.save()
      if (redirect) {
        Redirect({ url: redirect })
      }
      else {
        return console.log('record field changed to ' + `${recordId}, ${recordType}, ${fieldId},${fieldValue}`)
      }
    }
  })


  app.dispatch({ request, response })
}