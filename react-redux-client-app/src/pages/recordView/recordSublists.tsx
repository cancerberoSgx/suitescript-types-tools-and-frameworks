import * as React from 'react';
import DataTable from '../../components/layout/DataTable';
import { Count, I, Props } from '../../components/misc';
import { RecordViewState, SublistRow as SublistRowModel, FetchRecordOptions } from '../../store/recordView';
import SearchResults from '../../components/search/SearchResults';
import { Link as RLink, LinkProps } from 'react-router-dom';
import recordView, { RecordViewAllProps } from '.';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';
import { decodeOptions, encodeOptions } from '../../utils/urlUtil';

type RecordSublistsProps = RecordViewAllProps & { setRecord(v: FetchRecordOptions): void }
interface S { }


export class RecordSublists extends React.Component<RecordSublistsProps> {
  render() {
    const record = this.props.record
    if (!record) { return <div></div> }
    return <ul>
      {record.sublists.map(s => <li key={s.id}>
        <h3>
          {s.name && s.name != s.id ? `${s.name} (${s.id})` : s.id} {s.lineCount ? <Count>{s.lineCount} lines</Count> : ''}
        </h3>
        {/* <SearchResults {...this.props} dispatch={() => null as any} columns={s.fields.map(f => ({ id: f.id, type: f.type, label: f.name || f.id }))} type={record.id} results={s.lines.map((line, i) => ({ id: i + '', type: "line", columns: line.rows.map(r => r.value + '') }))}></SearchResults> */}

        <DataTable columns={s.fields.map(f => `${f.id} (${f.type})`)}>
          {s.lines.map((line, i) => <tr key={s.id + i}>
            {line.rows.map(r => <td key={s.id + i + r.field.id}><SublistRow {...this.props} row={r}></SublistRow></td>)}
          </tr>)}
        </DataTable>
      </li>)}
    </ul>;
  }
}

function Link<O={}>(props: { options: O } & LinkProps & Props) {
  const to = `${props.to}/${encodeOptions(props.options)}`
  return <RLink to={to}>{props.children}</RLink>
}

type P = RecordSublistsProps & { row: SublistRowModel }
class SublistRow extends React.Component<P, S> {
  constructor(p: P, s: S) { super(p, s) }
  render() {
    const r = this.props.row
    // if (r.field.type === 'select') {
    // return <Link to={`/recordView/${r.field.id}/${r.value}/${}`}>{r.value || r.text}</Link>
    return <I>{r.value || r.text}
      {r.field.type === 'select' &&
        <I>
          {/* <Link to={`/recordView/${r.field.id}/${r.value}/${}`}>{r.value || r.text}</Link> */}

          <Link to={`/recordView/${r.field.id}/${r.value}`} options={{ ...decodeOptions(this.props.match.params.options), findRecord: true }}>findd</Link>

          <button onClick={e => {
            this.props.setRecord({ id: r.value + '', type: r.field.id, findRecord: true })
            // this.props.fetchRecord({ id: r.value + '', type: r.field.id, findRecord: true })
          }}>find?</button>

        </I>
      }
    </I>
    // }
    // return <I>{r.value || r.text}</I>
  }

  public getRouteOptionNames() {
    return recordView.prototype.getRouteOptionNames()
  }

}


