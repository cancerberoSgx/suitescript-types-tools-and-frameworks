import * as React from 'react';
import DataTable from '../../components/layout/DataTable';
import { RecordViewState, Field, ValuedField, RecordViewSettings } from '../../store/recordView';
import { tryTo } from '../../utils/misc';
import { formatDate, formatDateTime } from '../../utils/formatDate';
import styled from '../../styles/theme/definition';
import { TextAreaFieldInput } from './RecordFieldInputTextArea';
import { RichTextFieldInputContentEditableSpan } from './RichTextFieldInputContentEditableSpan';

export class RecordFields extends React.Component<RecordViewState> {
  render() {
    if (!this.props.record) { return <div></div> }
    return <div>
      <DataTable columns={[...['fieldId'], ...(this.props.seeValues ? ['value'] : []), ...['label', 'type', 'flags']]}>
        {this.props.record.fields.map(f => <tr key={f.id}>
          <td>{f.id}</td>
          {this.props.seeValues && <td><RecordFieldEditor {...{ ...this.props, field: f }}></RecordFieldEditor></td>}
          <td>{f.name}</td>
          <td>{f.type}</td>
          <td>{f.isDisplay && 'display '}{f.isMandatory && 'mandatory '}{f.isReadonly && 'readonly '}{f.isVisible && 'visible'}
          </td>
        </tr>)}
      </DataTable>
    </div>;
  }
}

type FEProps = RecordViewState & { field: ValuedField }
type FEState = RecordViewSettings & { focused?: boolean }

export class RecordFieldEditor<T> extends React.Component<FEProps, FEState> {

  state: FEState = {}

  render() {
    const f = this.props.field
    if (!this.props.record) { return <div></div> }
    return <div>

      {this.state.focused && this.props.inlineEdit &&
        <button onClick={e => { alert(`Saving ${this.getValue()}`) }}>Save</button>
      }
      {this.getEditorInput(f)}
    </div>;
  }

  getValue(): T {
    return null as any
  }
  getEditorInput(f: ValuedField) {

    let input: JSX.Element | undefined
    const inputProps: RecordFieldEditorInputProps<any> = {
      field: f,
      onChangeFocus: focused => this.setState({ ...this.state, focused }),
      valueInquirer: this as any
    }

    if ((f.type === 'select') && f.selectOptions && f.selectOptions.length) {
      input = <select
        multiple={false}
        disabled={f.isReadonly}>
        {(typeof f.value === 'undefined' || f.value === null) ?
          <option>Not Defined</option> :
          f.selectOptions.map(o =>
            <option
              selected={Array.isArray(f.value) ? (f.value as any[]).indexOf(o.value) !== -1 : f.value === o.value}
              value={o.value}>
              {o.text || (o.value && tryTo(() => o.value.toString()))}
            </option>)
        }
      </select>
    }

    else if (f.type === 'multiselect' && f.selectOptions && f.selectOptions.length) {
      input = <select
        multiple={true}
        disabled={f.isReadonly}>
        {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> :
          f.selectOptions.map(o =>
            <option
              selected={(f.value as any[]).indexOf(o.value) !== -1}
              value={o.value}>
              {Array.isArray(o.text) ? o.text.join(', ') : o.text || (o.value && tryTo(() => o.value.toString()))}
            </option>)
        }
      </select>
    }

    else if (f.type === 'textarea') {
      input =
        <TextAreaFieldInput {...inputProps} />
    }

    else if (f.type === 'richtext') {
      input = <RichTextFieldInputContentEditableSpan {...inputProps} />
    }

    else {
      input = <InputElementEditor field={f}></InputElementEditor>
    }

    return input
  }
}

export interface RecordFieldEditorInputProps<T> {
  field: ValuedField
  onChangeFocus(focused: boolean): void
  valueInquirer: { getValue: () => T }
}


function InputElementEditor(props: any) {
  const f = props.field

  const inputType = f.type === 'date' ? 'date' : f.type === 'datetime' ? 'datetime-local' : ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' : f.type === 'checkbox' ? 'checkbox' : 'text';


  const inputValue = (typeof f.value === 'undefined' || f.value === null) ? '' : f.type === 'date' ? formatDate(f.value as any, 'YYYY-MM-DD') : f.type === 'datetime' ? formatDateTime(f.value as any, 'YYYY-MM-DDTHH:MMZ') : ((f.value || f.text) + '');

  // if (f.value && (f.type === 'date' || f.type === 'datetime')) {
  //   console.log(f.type, f.value, formatDateTime(f.value as any, 'YYYY-MM-DDTHH:MMZ'), inputValue);
  // }

  return <input disabled={f.isReadonly} type={inputType} value={inputValue} checked={f.type === 'checkbox' && !!f.value}>
  </input>;
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
