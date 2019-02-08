import { ReactLike } from "../../jsx/createElement"
import { App, Route } from '../app'
import { filter } from '../../search/typedSearch/typedSearchOperations'
import { ListRecordTypes, ListRecordTypesResult } from './listRecordTypesView'

export function listRecordTypesRoute(app: App): Route {
  return {
    name: 'listRecordTypes',
    handler(o) {
      const { type } = o.params
      const pageSize = parseInt(o.params.pageSize || '20', 10)
      // const dynamicResultsRender = !!o.params.dynamicResultsRender
      // if (!type) {
      //   return ReactLike.render(<ListRecordTypes pageSize={pageSize} {...o.params}></ListRecordTypes>)
      // }
      let counter = 0
      const results = type? filter({
        type: type as any,
        columns: []
      }, r => (((counter++) > pageSize) || !r) ? false : true) : []

      return ReactLike.render(<ListRecordTypes pageSize={pageSize} {...o.params} type={type} results={results} 
      // dynamicResultsRender={dynamicResultsRender}
      >
      </ListRecordTypes>)
    }
  }
}
export function listRecordTypesResultRoute(app: App): Route {
  return {
    name: 'listRecordTypesResult',
    handler(o) {
      const { type } = o.params
      const pageSize = parseInt(o.params.pageSize || '20', 10)
      // const dynamicResultsRender = !!o.params.dynamicResultsRender
      // if (!type) {
      //   return ReactLike.render(<ListRecordTypes pageSize={pageSize} {...o.params}></ListRecordTypes>)
      // }
      let counter = 0
      const results = type? filter({
        type: type as any,
        columns: []
      }, r => (((counter++) > pageSize) || !r) ? false : true) : []
      
      return ReactLike.render(<ListRecordTypesResult pageSize={pageSize} {...o.params} type={type} results={results} ></ListRecordTypesResult>)
    }
  }
}
