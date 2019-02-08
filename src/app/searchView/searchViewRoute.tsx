import { App, Route } from '../app';
import { renderInHTMLDocument } from '../../jsx/renderInHtml';
import { typedSearchColumnValues } from '../../search/typedSearch/generated/TypedSearchColumnValues';
import { typedSearchFilterValues } from '../../search/typedSearch/generated/TypedSearchFilterValues';
import { create, CreateSearchColumnOptions } from 'N/search';
import { printNativeError, tryTo } from '../../misc/misc';
import {  SearchView, Filter, ColumnValue } from './searchView';
import { ReactLike } from "../../jsx/createElement";
import { SearchTypesOperatorSupportValues } from '../../search/typedSearch/generated';


export function searchViewRoute(app: App): Route {
  return {
    name: 'searchView',
    handler(o) {
      const { type } = o.params;
      const pageSize = parseInt(o.params.pageSize || '10') || 0;
      const currentPage = parseInt(o.params.currentPage || '1') || 1;
      try {

        const columns = ((type ? ((typedSearchColumnValues as any)[type] || []) : []) as ColumnValue[]).map(c => ({ ...c, name: `${c.id} - ${c.label}` })).sort((a, b) => a.name.localeCompare(b.name));
        
        // SearchTypesOperatorSupportValues
        const userColumns: CreateSearchColumnOptions[] = ((o.params.userColumns || '').trim().split(',') as string[])
        .map(f => (f === '__new__' && columns.length) ? columns[0].id : f).filter(f => !!f).map(name => ({ name }))
        
        const filters: Filter[] = ((type ? ((typedSearchFilterValues as any)[type] || []) : []) as Filter[]).map(c => ({ ...c, name: `${c.id} - ${c.label}` })).sort((a, b) => a.name.localeCompare(b.name))

        const userFilters: Filter[] =(tryTo(()=>JSON.parse(o.params.userFilters || '[]'))||[])


        // .map(f => (f.id === '__new__' && filters.length) ? {...filters[0], operator: } : f)
        // .filter(f => !!f).map(name => {
          // const filter = filters.find(f=>f.name===name)
          // if(!filter){return}
          // const operatorTypes = (SearchTypesOperatorSupportValues as any)[filter.id] as string[]
          // if(!operatorTypes){
            // return 
          // }


          // return 
          // { id: name, name: name, operator: filter, value: '' }
        // })

        if (type) {

          const resultSet = create({ type, columns: userColumns}).runPaged({ pageSize });
          const resultSetData = resultSet.fetch({ index: currentPage }).data;
          const results = resultSetData.map(r => ({
            id: r.id + '',
            columns: userColumns.map(c => r.getValue(c) + '')
          }));

          return renderInHTMLDocument(
            <SearchView {...o.params} columns={columns} filters={filters} userFilters={userFilters}
              userColumns={userColumns.map(c=>c.name)} results={results} pageSize={pageSize}
              pageRanges={resultSet.pageRanges} currentPage={currentPage} pageCount={resultSet.pageRanges.length}></SearchView>
          );
        }
        else {
          return renderInHTMLDocument(
            <SearchView {...o.params} columns={columns} filters={filters}></SearchView>
          );
        }

      }
      catch (error) {
        return `${printNativeError(error).replace(/\n/gmi, '<br/>')}`;
      }
    }
  };
}
