
import * as React from 'react';
import { DataTable } from '../../components/data/DataTable';
import { RecordViewState } from '../../store/recordView';
import { RecordFieldEditor } from './fields/recordField';

/** implements recordview field table and delegate to RecordFieldEditor in the case of the value */
export class RecordFields extends React.Component<RecordViewState> {
  render() {
    if (!this.props.record) { return <div></div> }
    return <div className="container-overflow-x">
      <DataTable className="record-fields" showFilter={true} columns={[
        ...['fieldId'],
        ...(this.props.seeValues ? ['value'] : []),
        ...['label', 'type', 'flags']
      ]}
        widths={this.props.seeValues ? ['10%', '50%', '20%', '10%', '10%'] : ['10%', '50%', '20%', '20%']}
      >
        {this.props.record.fields.map(f => <tr key={f.id} className="field">
          <td>{f.id}</td>
          {this.props.seeValues && <td>fields<RecordFieldEditor {...{ ...this.props, field: f }} />
          </td>}
          <td>{f.name}</td>
          <td>{f.type}</td>
          <td>{f.isDisplay && 'display '}{f.isMandatory && 'mandatory '}{f.isReadonly && 'readonly '}{f.isVisible && 'visible'}
          </td>
        </tr>)}
      </DataTable>
    </div >;
  }
}


