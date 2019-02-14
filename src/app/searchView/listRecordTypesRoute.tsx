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
      let counter = 0
      const results = type ? filter({
        type: type as any,
        columns: []
      }, r => (((counter++) > pageSize) || !r) ? false : true) : []

      return ReactLike.render(<ListRecordTypes pageSize={pageSize} {...o.params} type={type} results={results}
      ></ListRecordTypes>)
    }
  }
}
export function listRecordTypesJsonRoute(app: App): Route {
  return {
    name: 'listRecordTypesJson',
    contentType: 'json',
    handler(o) {
      const { type, columns } = o.params
      const pageSize = parseInt(o.params.pageSize || '20', 10)
      let counter = 0
      const results = type ? filter({
        type: type as any,
        columns: []
      }, r => (((counter++) > pageSize) || !r) ? false : true) : []

      return {
        results: results.map(r => ({
          id: r.id,
          recordType: r.recordType,

        }))
      }
      // return ReactLike.render(<ListRecordTypes pageSize={pageSize} {...o.params} type={type} results={results}
      // ></ListRecordTypes>)
    }
  }
}
export function listRecordTypesResultRoute(app: App): Route {
  return {
    name: 'listRecordTypesResult',
    handler(o) {
      const { type } = o.params
      const pageSize = parseInt(o.params.pageSize || '20', 10)
      let counter = 0
      const results = type ? filter({
        type: type as any,
        columns: []
      }, r => (((counter++) > pageSize) || !r) ? false : true) : []

      return ReactLike.render(<ListRecordTypesResult pageSize={pageSize} {...o.params} type={type} results={results} ></ListRecordTypesResult>)
    }
  }
}
