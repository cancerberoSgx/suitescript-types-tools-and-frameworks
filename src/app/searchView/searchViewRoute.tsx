import { App, Route } from '../app';
import { renderInHTMLDocument } from '../../jsx/renderInHTMLDocument';
import { typedSearchColumnValues } from '../../search/typedSearch/generated/TypedSearchColumnValues';
import { typedSearchFilterValues } from '../../search/typedSearch/generated/TypedSearchFilterValues';
import { create, CreateSearchColumnOptions } from 'N/search';
import { printNativeError } from '../../misc/misc';
import { ColumnValue, FilterValue, SearchView } from './searchView';
import { ReactLike } from "../../jsx/createElement";


export function searchViewRoute(app: App): Route {
  return {
    name: 'searchView',
    handler(o) {
      const { type } = o.params;
      const pageSize = parseInt(o.params.pageSize || '10');
      const currentPage = parseInt(o.params.currentPage || '1');
      const columns = ((type ? ((typedSearchColumnValues as any)[type] || []) : []) as ColumnValue[]).map(c => ({ ...c, name: `${c.id} - ${c.label}` })).sort((a, b) => a.name.localeCompare(b.name));
      const filters = ((type ? ((typedSearchFilterValues as any)[type] || []) : []) as FilterValue[]).map(c => ({ ...c, name: `${c.id} - ${c.label}` })).sort((a, b) => a.name.localeCompare(b.name));
      const userColumns = ((o.params.userColumns || '').trim().split(',') as string[]).filter(f => !!f);
      let finalColumns: CreateSearchColumnOptions[] = userColumns.map(name => ({ name }));
      if (type && finalColumns.length) {
        try {
          const resultSet = create({ type, columns: finalColumns }).runPaged({ pageSize });
          const resultSetData = resultSet.fetch({ index: currentPage }).data;
          const results = resultSetData.map(r => ({
            id: r.id + '',
            columns: finalColumns.map(c => r.getValue(c) + '')
          }));
          return renderInHTMLDocument(
            <SearchView {...o.params} columns={columns} filters={filters}
              userColumns={userColumns} results={results} pageSize={pageSize}
              pageRanges={resultSet.pageRanges} currentPage={currentPage} pageCount={resultSet.pageRanges.length}></SearchView>
          );
        }
        catch (error) {
          return `${printNativeError(error).replace(/\n/gmi, '<br/>')}`;
        }
      }
    }
  };
}
