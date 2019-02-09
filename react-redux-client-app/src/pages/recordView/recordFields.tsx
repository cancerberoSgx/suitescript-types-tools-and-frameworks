import * as React from 'react';
import DataTable from '../../components/layout/DataTable';
import { RecordViewState, Field, ValuedField } from '../../store/recordView';

export class RecordFields extends React.Component<RecordViewState> {
  render() {
    if (!this.props.record) { return <div></div> }
    return <div>
      <DataTable columns={[...['fieldId', 'label', 'type', 'flags'], ...(this.props.seeValues ? ['value'] : []), ...['help']]}>
        {this.props.record.fields.map(f => <tr>
          <td>{f.id}</td>
          <td>{f.name}</td>
          <td>{f.type}</td>
          <td>{f.isDisplay && 'display '}{f.isMandatory && 'mandatory '}{f.isReadonly && 'readonly '}{f.isVisible && 'visible'}
          </td>
          {this.props.seeValues && <td><RecordFieldEditor {...{ ...this.props, field: f }}></RecordFieldEditor></td>}
          <td>TODO</td>
        </tr>)}

      </DataTable>
    </div>;
  }
}

export class RecordFieldEditor extends React.Component<RecordViewState & { field: ValuedField }> {
  render() {
    const f = this.props.field
    if (!this.props.record) { return <div></div> }
    return <div>
      {f.value}
    </div>;
  }
}
