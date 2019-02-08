import { ReactLike } from "../../jsx/createElement";
import { StatelessComponent } from '../../jsx/StatelessComponent';
import { getSearchRecordTypes } from '../../search/getSearchRecordTypes';
import { Select } from '../../jsx/util/Select';
import { RouteHandlerParams, App, Route } from '../app';
import { Bind } from '../../jsx/util/Bind';
import { renderInHTMLDocument } from '../../jsx/renderInHTMLDocument';
import { typedSearchColumnValues, } from '../../search/typedSearch/generated/TypedSearchColumnValues';
import { typedSearchFilterValues } from '../../search/typedSearch/generated/TypedSearchFilterValues';
import { create, CreateSearchColumnOptions } from 'N/search'
import { map, toArray } from '../../search/results';
import { printNativeError } from '../../misc/misc';

interface Props extends RouteHandlerParams {
  type?: string
  columns: Column[]
  column?: string
  filters: Filter[]
  filter?: string
  userColumns?: string[]
  results?: Result[]
}
interface Column extends ColumnValue {
  name: string
}
interface Filter extends FilterValue {
  name: string
}
interface Result { id: string , columns: string[]}
interface ColumnValue { id: string, type: string, label: string }
interface FilterValue { id: string, type: string, label: string }
export class SearchView extends StatelessComponent<Props> {
  render() {

    return <div>
      <script>{getUserColumns.toString()}</script>
      <Bind name="SearchView" data={{ ...this.props, columns: [], filters: [], results: [] }}></Bind>

      <div>
        Search Type2: <Select selected={this.props.type} options={getSearchRecordTypes()} firstOption="Select Record Type" onChange={type => {
          if (!type) { return }
          const props = getBindDataOrThrow<Props>('SearchView')
          window.location.href = buildRouteUrl({ routeName: 'searchView', params: { ...props.currentParams, type } });
        }}></Select>
      </div>

      <div>
        Columns: <Select selected={this.props.column} options={this.props.columns} firstOption={`Select ${this.props.type} Column`} onChange={column => {
          if (!column) { return }
          window.location.href = buildRouteUrl({ routeName: 'searchView', params: { ...getBindDataOrThrow<Props>('SearchView').currentParams, column } });
        }}></Select>
      </div>

      <div>
        Filters: <Select selected={this.props.filter} options={this.props.filters} firstOption={`Select ${this.props.type} Filter`} onChange={filter => {
          if (!filter) { return }
          window.location.href = buildRouteUrl({ routeName: 'searchView', params: { ...getBindDataOrThrow<Props>('SearchView').currentParams, filter } });
        }}></Select>
      </div>

      This search columns:
<ul>
        {(this.props.userColumns || []).map((c, i) =>
          <li>
            <Select select-attrs={{'data-user-column': i+''}} selected={c} options={this.props.columns} firstOption={`Select ${this.props.type} Column`} onChange={column => {
              
            }}></Select>
          </li>)}
        <button onClick={e => {
const select =           document.querySelectorAll<HTMLSelectElement>('[data-user-column]').item(0)
select.parentElement!.appendChild(select.cloneNode(true))
        // const userColumns: string[] = getUserColumns();
        //   window.location.href = buildRouteUrl({ routeName: 'searchView', params: { ...getBindDataOrThrow<Props>('SearchView').currentParams, userColumns: [...(userColumns || []), '__new__'] } });
        }}>Add Column</button>


      </ul>
      {<button onClick={e => {
        const userColumns: string[] = getUserColumns()
        window.location.href = buildRouteUrl({ routeName: 'searchView', params: { ...getBindDataOrThrow<Props>('SearchView').currentParams, userColumns } });
      }}>Search</button>}


      Results: <ul>
        {(this.props.results || []).map(r => <li>{r.id}, columns: [{r.columns.join(', ')}]</li>)}
      </ul>
    </div>

  }
}


function getUserColumns() {
  const userColumns: string[] = [];
  document.querySelectorAll<HTMLSelectElement>('[data-user-column]').forEach(e => {
    if (e.selectedOptions && e.selectedOptions.length) {
      userColumns.push(e.selectedOptions[0].value);
    }
  });
  return userColumns;
}



export function searchViewRoute(app: App): Route {
  return {
    name: 'searchView',
    handler(o) {
      const { type } = o.params;
      const columns = ((type ? ((typedSearchColumnValues as any)[type] || []) : []) as ColumnValue[]).map(c => ({ ...c, name: `${c.id} - ${c.label}` })).sort((a, b) => a.name.localeCompare(b.name))
      const filters = ((type ? ((typedSearchFilterValues as any)[type] || []) : []) as FilterValue[]).map(c => ({ ...c, name: `${c.id} - ${c.label}` })).sort((a, b) => a.name.localeCompare(b.name))
      const userColumns = ((o.params.userColumns || '').trim().split(',') as string[]).filter(f=>!!f)
      // console.log('userColumns'+JSON.stringify(userColumns)+'<br/><br/>');
      let finalColumns: CreateSearchColumnOptions[] = userColumns.filter(n=>n!=='__new__').map(name=>({name}))
      let results: Result[] = []
      if (type && finalColumns.length) {
        // console.log('finalColumns'+JSON.stringify(finalColumns)+'<br/><br/>');
        // finalColumns = []
        try {
          results = toArray(create({ type, columns: finalColumns }).run(), 10)
          .map(r => ({ id: r.id + '', columns: finalColumns.map(c=>r.getValue(c)+'') }))
          // console.log('results: ' +JSON.stringify(results)+'<br/><br/>');
        } catch (error) {
          return `${printNativeError(error).replace(/\n/gmi, '<br/>')}`
        }
       

        
      }
      return renderInHTMLDocument(<SearchView {...o.params} columns={columns} filters={filters} userColumns={userColumns} results={results}></SearchView>)
    }
  }
};
