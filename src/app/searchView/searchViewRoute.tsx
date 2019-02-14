import { App, Route, RouteHandlerParams, RouterHandlerOptions } from '../app';
import { renderInHTMLDocument } from '../../jsx/renderInHtml';
import { typedSearchColumnValues } from '../../search/typedSearch/generated/TypedSearchColumnValues';
import { typedSearchFilterValues } from '../../search/typedSearch/generated/TypedSearchFilterValues';
import { create, CreateSearchColumnOptions, PageRange } from 'N/search';
import { printNativeError, tryTo, printNativeErrorStack } from '../../misc/misc';
import { SearchView, Filter, ColumnValue } from './searchView';
import { ReactLike } from "../../jsx/createElement";
import { SearchTypesOperatorSupportValues } from '../../search/typedSearch/generated';


export function searchViewRoute(app: App): Route {
  return {
    name: 'searchView',
    handler(o) {
      const { type, error, columns, filters, userFilters, userColumns, results, pageSize, pageRanges, currentPage, pageCount } = getSearchResults(o)
      if (error) {
        return error.errorAsHtmlString
      }
      else if (!type) {
        return renderInHTMLDocument(
          <SearchView {...o.params} columns={columns || [] as any} filters={filters || []}></SearchView>
        );
      }
      else {
        return renderInHTMLDocument(
          <SearchView {...o.params} columns={columns || [] as any} filters={filters || []} userFilters={userFilters}
            userColumns={userColumns} results={results} pageSize={pageSize}
            pageRanges={pageRanges} currentPage={currentPage} pageCount={pageCount}></SearchView>
        );
      }
    }
  };
}

export function searchViewJsonRoute(app: App): Route {
  return {
    name: 'searchViewJson',
    contentType: 'json',
    handler(o) {
      const result = getSearchResults(o)
      return result
    }
  };
}


interface SearchResult { columns?: CreateSearchColumnOptions[], filters?: Filter[], userFilters?: Filter[], userColumns?: string[], results?: { id: string, columns: string[] }[], pageSize?: number, pageRanges?: PageRange[], currentPage?: number, pageCount?: number, error?: SearchError, type?: string }

function getSearchResults(o: RouterHandlerOptions): SearchResult {
  const { type } = o.params;
  const pageSize = parseInt(o.params.pageSize || '10') || 0;
  const currentPage = parseInt(o.params.currentPage || '1') || 1;
  try {

    const columns = ((type ? ((typedSearchColumnValues as any)[type] || []) : []) as ColumnValue[])
      .map(c => ({ ...c, name: `${c.id} - ${c.label}` }))
      .sort((a, b) => a.name.localeCompare(b.name));

    const userColumns: CreateSearchColumnOptions[] = ((o.params.userColumns || '')
      .trim().split(',') as string[])
      .map(f => (f === '__new__' && columns.length) ? columns[0].id : f)
      .filter(f => !!f).map(name => ({ name }))

    const filters: Filter[] = ((type ? ((typedSearchFilterValues as any)[type] || []) : []) as Filter[])
      .map(c => ({ ...c, name: `${c.id} - ${c.label}` }))
      .sort((a, b) => a.name.localeCompare(b.name))

    const userFilters: Filter[] = (tryTo(() => JSON.parse(o.params.userFilters || '[]')) || [])


    // .map(f => (f.id === '__new__' && filters.length) ? {...filters[0], operator: } : f)
    // .filter(f => !!f).map(name => {
    // const filter = filters.find(f=>f.name===name)
    // if(!filter){return}
    // const operatorTypes = (SearchTypesOperatorSupportValues as any)[filter.id] as string[]
    // if(!operatorTypes){
    // return 
    // }

    if (type) {
      const resultSet = create({ type, columns: userColumns }).runPaged({ pageSize });
      const resultSetData = resultSet.fetch({ index: currentPage }).data;
      const results = resultSetData.map(r => ({
        id: r.id + '',
        recordType: r.recordType,
        columns: userColumns.map(c => r.getValue(c) + '')
      }));
      return {
        ...o.params, columns, filters, userFilters,
        userColumns: userColumns.map(c => c.name), results, pageSize,
        pageRanges: resultSet.pageRanges, currentPage,
        pageCount: resultSet.pageRanges.length, type
      }
    }
    else {
      return { ...o.params, columns, filters }
    }
  }
  catch (error) {
    return { error: { errorAsHtmlString: `${printNativeError(error).replace(/\n/gmi, '<br/>')}`, message: error.message, type: error.type, name: error.name, stack: printNativeErrorStack(error) } }
  }
}

interface SearchError {
  errorAsHtmlString: string, message: string, type: string, name: string, stack: string
}