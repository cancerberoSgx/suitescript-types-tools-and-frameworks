import { ReactLike } from "../../jsx/createElement";
import { StatelessComponent } from '../../jsx/StatelessComponent';
import { getSearchRecordTypes } from '../../search/getSearchRecordTypes';
import { Select } from '../../jsx/util/Select';
import { RouteHandlerParams } from '../app';
import { Bind } from '../../jsx/util/Bind';
import { PageRange } from 'N/search'
import { array } from '../../misc/misc';
import { ClassRule, Styles, Style } from '../../jsx/Style';

interface Props extends RouteHandlerParams {
  type?: string
  columns: Column[]
  column?: string
  filters: Filter[]
  filter?: string
  userColumns?: string[]
  userFilters?: string[]
  results?: Result[]
  pageSize?: number
  pageRanges?: PageRange[]
  currentPage?: number
  pageCount?: number
}
interface Column extends ColumnValue {
  name: string
}
interface Filter extends FilterValue {
  name: string
}
interface Result { id: string, columns: string[] }
export interface ColumnValue { id: string, type: string, label: string }
export interface FilterValue { id: string, type: string, label: string }



const results: ClassRule = {
  textAlign: 'left'
}
const resultColumns: ClassRule = {
  selectorPostfix: ' td',
  borderRightStyle: 'solid',
  borderRightColor: '#ededed'
}
const pagination: ClassRule = {
}
const { styles, classes } = Styles({ results, resultColumns, pagination })



export class SearchView extends StatelessComponent<Props> {
  render() {

    return <div>

      <Style classes={styles}></Style>

      <script>{getUserColumns.toString()};{search.toString()}</script>

      <Bind name="SearchView" data={{ ...this.props, columns: [], filters: [], results: [] }}></Bind>

      <div>
        Search Type: <Select selected={this.props.type} options={getSearchRecordTypes()} firstOption="Select Record Type" onChange={type => {
          if (!type) { return }
          const props = getBindDataOrThrow<Props>('SearchView')
          window.location.href = buildRouteUrl({ routeName: 'searchView', params: { ...props.currentParams, type } });
        }}></Select>
      </div>
      {/* <div>
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
      </div> */}


      Columns:
        <ul>
        {(this.props.userColumns || []).map((c, i) =>
          <li>
            <Select select-attrs={{ 'data-user-column': i + '' }} selected={c} options={this.props.columns} firstOption={`Select ${this.props.type} Column`}></Select>
          </li>)}
      </ul>
      <button onClick={e => {
        const selects = document.querySelectorAll<HTMLSelectElement>('[data-user-column]')
        if (selects.length === 0) { return }
        const select = selects.item(selects.length - 1)
        const li = select.parentElement!
        li.parentElement!.appendChild(li.cloneNode(true))
      }}>Add Column</button>


      Filters:
        <ul>
        {(this.props.userFilters || []).map((c, i) =>
          <li>
            <Select select-attrs={{ 'data-user-filter': i + '' }} selected={c} options={this.props.filters} firstOption={`Select ${this.props.type} filter`}></Select>
          </li>)}
      </ul>
      <button onClick={e => {
        const selects = document.querySelectorAll<HTMLSelectElement>('[data-user-filter]')
        if (selects.length === 0) { return }
        const select = selects.item(selects.length - 1)
        const li = select.parentElement!
        li.parentElement!.appendChild(li.cloneNode(true))
      }}>Add Filter</button>


      <div>
        <button onClick={search}>Search</button>
      </div>

      <div className={classes.pagination}>
        <label>Page Size: <input type="number" id="searchViewPageSize" value={this.props.pageSize || 10}></input></label>

        {/* Page count: {this.props.pageCount||0} */}

        <Select select-attrs={{ 'data-current-page': "" }} selected={this.props.currentPage + ''} options={array(this.props.pageCount || 0).map(i => ({ id: i + '', name: `Page ${i} of ${this.props.pageCount||0}` }))} onChange={search} firstOption="Current Page"></Select>
      </div>


      {this.props.results ? <div>
        Results
        <table className={`${classes.results} ${classes.resultColumns}`}>
          <thead><tr><th>id</th>{this.props.userColumns!.map(c => <th>{c}</th>)}</tr></thead>
          <tbody>{this.props.results!.map(r => <tr>
            <td>{r.id}</td>
            {r.columns.map(c => <td>{c}</td>)}
          </tr>)}</tbody>
        </table>
      </div>
      : ''}

    </div>

  }
}

function search() {
  const userColumns: string[] = getUserColumns()
  const pageSize = document.querySelector<HTMLInputElement>(`#searchViewPageSize`)!.value

  const currentPageS = document.querySelector<HTMLSelectElement>('[data-current-page]')!
  const currentPage = currentPageS.selectedOptions.length ? currentPageS.selectedOptions[0].value : '0'
  document.querySelectorAll<HTMLSelectElement>('[data-user-column]')
  window.location.href = buildRouteUrl({
    routeName: 'searchView', params: {
      ...getBindDataOrThrow<Props>('SearchView').currentParams,
      userColumns,
      pageSize,
      currentPage,
    }
  });
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




