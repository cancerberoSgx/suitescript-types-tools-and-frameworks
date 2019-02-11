import * as React from 'react';
import DataTable from '../../components/layout/DataTable';
import { RecordViewState, Field, ValuedField, RecordViewSettings } from '../../store/recordView';
import { tryTo } from '../../utils/misc';
import { formatDate } from '../../utils/formatDate';
import styled from '../../styles/theme/definition';

export class RecordFields extends React.Component<RecordViewState> {
  render() {
    if (!this.props.record) { return <div></div> }
    return <div>
      <DataTable columns={[...['fieldId'], ...(this.props.seeValues ? ['value'] : []), ...['label', 'type', 'flags']]}>
        {this.props.record.fields.map(f => <tr>
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
      {this.getEditorInput(f)}
    </div>;
  }

  getValue(): T {
    return null as any
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
      return <div>
        {this.state.focused && this.props.inlineEdit && <button onClick={e => { alert(`Saving ${this.getValue()}`) }}>Save</button>}
        <TextAreaFieldInput field={f}
          onChangeFocus={focused => this.setState({ ...this.state, focused })}
          valueInquirer={this as any}
        ></TextAreaFieldInput>
      </div>
    }

    // else if (f.type === 'richtext') {
    //   return <RichTextEditor onChangeFocus={focused => this.setState({ ...this.state, focused })} field={f}></RichTextEditor>
    // }

    else {
      return <InputElementEditor field={f}></InputElementEditor>
    }
  }
}

export interface RecordFieldEditorInputProps<T> {
  field: ValuedField
  onChangeFocus(focused: boolean): void
  valueInquirer: { getValue: () => T }
  // getValue():T
}

interface E { value: string }
type P = RecordFieldEditorInputProps<string>
export class TextAreaFieldInput extends React.Component<P, E> {
  constructor(p: P, e: E) {
    super(p, e)
    this.props.valueInquirer.getValue = () => this.state.value
  }
  render() {
    const f = this.props.field
    return <textarea
      onFocus={e => {
        this.props.onChangeFocus(true)
      }}
      onBlur={e => {
        this.props.onChangeFocus(true)
      }}
      onChange={e => this.setState({ ...this.state, value: e.currentTarget.value })}
      disabled={f.isReadonly}
      defaultValue={f.value + ''}>
    </textarea>
  }
}

function InputElementEditor(props: any) {
  const f = props.field
  const inputType = f.type === 'date' ? 'date' : f.type === 'datetime' ? 'datetime-local' : ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' : f.type === 'checkbox' ? 'checkbox' : 'text';
  const inputValue = (typeof f.value === 'undefined' || f.value === null) ? '' : (f.type === 'date' && typeof (f.value as any).getDay !== 'undefined') ? formatDate(f.value as any, 'YYYY-MM-DD') : (f.value + '');
  // debugger
  return <input disabled={f.isReadonly} type={inputType} value={inputValue} checked={f.type === 'checkbox' && !!f.value}>
  </input>;
}

function RichTextEditor(props: RecordFieldEditorInputProps<String>) {
  return <RichTextEditorStyle contentEditable={!props.field.isReadonly} dangerouslySetInnerHTML={{ __html: props.field.value + '' }}></RichTextEditorStyle>
}
const RichTextEditorStyle = (styled('span')`
border: 3px solid blue;
width: 100%;
height: 200px;
display: block;
overflow: scroll
`)

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
