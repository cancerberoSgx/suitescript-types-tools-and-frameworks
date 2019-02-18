import * as React from 'react';
import { DataTable } from '../../components/data/DataTable';
import { Count, I, Link, F } from '../../components/misc';
import { FetchRecordOptions, SublistRow as SublistRowModel } from '../../store/recordView';
import { decodeOptions } from '../../utils/routeUrl/urlOptions';
import { RecordViewAllProps } from './recordView';
import { RecordFieldEditor } from './fields/recordField';
// import { Container22 } from './RecordViewStyles';

type RecordSublistsProps = RecordViewAllProps & { setRecord(v: FetchRecordOptions): void }
interface S { }


export class RecordSublists extends React.Component<RecordSublistsProps> {
  render() {
    const record = this.props.record
    if (!record) { return <div></div> }
    return <ul >
      {record.sublists.map(s => <li key={s.id}>
        <h3>
          {/* <Container22 color="red">skjdhfksjdfh</Container22> */}
          {s.name && s.name != s.id ? `${s.name} (${s.id})` : s.id} {s.lineCount ? <Count>{s.lineCount} lines</Count> : ''}
        </h3>
        <div className="container-overflow-x">
          <DataTable className="sublist" columns={s.fields.map(f => `${f.id} (${f.type})`)}>
            {this.props.showSublistLines && s.lines.map((line, i) =>
            <tr className="line" key={s.id + i}>
              {line.rows.map(r =>
              <td  className="field"  key={s.id + i + r.field.id}>
              <SublistRow {...this.props} row={r}></SublistRow>
              </td>)}
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
    return <RecordFieldEditor {...this.props} field={{ ...r.field, value: r.value || r.text, text: r.text || r.value + '' }}
      extraFieldEditorControls={
        r.field.type === 'select' ?
          [
            props => <Link to={`/recordView/${r.field.id}/${r.value}/${JSON.stringify({ ...decodeOptions(this.props.match.params.options), findRecord: true })}`}
              // options={{ ...decodeOptions(this.props.match.params.options), findRecord: true }}
              >
              &nbsp;(find)</Link>
          ] :
          []
      } />
  }

}


