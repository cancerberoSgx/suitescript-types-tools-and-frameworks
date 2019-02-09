import * as React from 'react';
import DataTable from '../../components/layout/DataTable';
import { RecordViewState, Field, ValuedField } from '../../store/recordView';
import { tryTo } from '../../utils/misc';
import { formatDate } from '../../utils/formatDate';

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
      {this.getEditorInput(f)}
    </div>;
  }

  getEditorInput(f: ValuedField) {
    if ((f.type === 'select') && f.selectOptions && f.selectOptions.length) {
      return <select
        multiple={false}
        disabled={f.isReadonly}>

        {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> : ''}
        {f.selectOptions.map(o =>
          <option
            selected={Array.isArray(f.value) ? (f.value as any[]).indexOf(o.value) !== -1 : f.value === o.value}
            value={o.value}>
            {o.text || (o.value && tryTo(() => o.value.toString()))}
          </option>)}
      </select>
    }
    else if (f.type === 'multiselect' && f.selectOptions && f.selectOptions.length) {
      return <select
        multiple={true}
        disabled={f.isReadonly}>
        {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> : ''}
        {f.selectOptions.map(o =>
          <option
            selected={(f.value as any[]).indexOf(o.value) !== -1}
            value={o.value}>
            {Array.isArray(o.text) ? o.text.join(', ') : o.text || (o.value && tryTo(() => o.value.toString()))}
          </option>)}
      </select>
    }

    else if (f.type === 'textarea') {
      return <textarea
        disabled={f.isReadonly}
        defaultValue={f.value + ''}>
      </textarea>
    }

    else if (f.type === 'richtext') {
      return <span contentEditable={!f.isReadonly} style={{ border: '3px solid blue', width: '100%', height: '200px', display: 'block', overflow: 'scroll' }} dangerouslySetInnerHTML={{ __html: f.value + '' }}></span>
    }
    else {
      const inputType = f.type === 'date' ? 'date' : f.type === 'datetime' ? 'datetime-local' : ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' : f.type === 'checkbox' ? 'checkbox' : 'text'
      const inputValue = (typeof f.value === 'undefined' || f.value === null) ? '' : (f.type === 'date' && typeof (f.value as any).getDay !== 'undefined') ? formatDate(f.value as any, 'YYYY-MM-DD') : (f.value + '')
      return <input
        disabled={f.isReadonly}
        type={inputType}
        value={inputValue}
        checked={f.type === 'checkbox' && !!f.value}>
      </input>
    }
  }
}



//   return <span>

//     <Bind name={`data-field-id${f.id}`}>
//       {input}
//     </Bind>
//     <br></br>
//     <Bind name={`data-field-id${f.id}`} data={{
//       routeName: 'setFieldValue',
//       params: {
//         recordId: props.record.id,
//         recordType: props.record.type,
//         fieldType: f.type,
//         fieldId: f.id,
//         redirect: encodeURIComponent(props.currentUrl)
//       }
//     }}>
//       <button onClick={e => {
//         const data = getBindData<RenderLinkOptions>(e.currentTarget);
//         let fieldValue = getBindInputValue<string>(e.currentTarget, { asString: true });
//         if (!data || typeof fieldValue === 'undefined') {
//           return;
//         }
//         data.params = { ...data.params, fieldValue };
//         window.location.href = buildRouteUrl(data);
//       }}>Change</button>
//     </Bind>

//   </span>

// }
