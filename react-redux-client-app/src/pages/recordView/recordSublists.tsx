import * as React from 'react';
import { DataTable } from '../../components/data/DataTable';
import { Count, I, Link } from '../../components/misc';
import { FetchRecordOptions, SublistRow as SublistRowModel } from '../../store/recordView';
import { decodeOptions } from '../../utils/routeUrl/urlOptions';
import { RecordViewAllProps } from './recordView';

type RecordSublistsProps = RecordViewAllProps & { setRecord(v: FetchRecordOptions): void }
interface S { }


export class RecordSublists extends React.Component<RecordSublistsProps> {
  render() {
    const record = this.props.record
    if (!record) { return <div></div> }
    return <ul >
      {record.sublists.map(s => <li key={s.id}>
        <h3>
          {s.name && s.name != s.id ? `${s.name} (${s.id})` : s.id} {s.lineCount ? <Count>{s.lineCount} lines</Count> : ''}
        </h3>
        <div className="container-overflow-x">
          <DataTable columns={s.fields.map(f => `${f.id} (${f.type})`)}>
            {this.props.showSublistLines && s.lines.map((line, i) => <tr key={s.id + i}>
              {line.rows.map(r => <td key={s.id + i + r.field.id}><SublistRow {...this.props} row={r}></SublistRow></td>)}
            </tr>)}
          </DataTable>
        </div>
      </li>)}
    </ul>;
  }
}


type P = RecordSublistsProps & { row: SublistRowModel }

class SublistRow extends React.Component<P, S> {
  constructor(p: P, s: S) { super(p, s) }
  render() {
    const r = this.props.row
    return <I>{r.value || r.text}
      {r.field.type === 'select' &&
        <Link to={`/recordView/${r.field.id}/${r.value}`}
          options={{ ...decodeOptions(this.props.match.params.options), findRecord: true }}>
          &nbsp;(find)</Link>
      }
    </I>
  }

}


