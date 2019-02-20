import * as React from 'react';
import { formatDate, formatDateTime } from '../../../utils/formatDate';
import { RecordFieldEditorInputProps } from "./recordField";
import { RecordFieldInputEditorBase, MultiLineTextEditor } from '../RecordViewStyles';
import { styled } from '../../../styles/theme';
import { tryTo } from '../../../utils/misc';
import { Value } from '../../../store/recordView';
import { RecordFieldInputInput } from './RecordFieldInputInput';
import { FieldValueType } from '../../../store/commonTypes';
type Type = string | string[]
interface E {
  value: Type;
}
type P = RecordFieldEditorInputProps<Type>;

export class RecordFieldInputSelect extends React.Component<P, E> {
  constructor(p: P, e: E) {
    super(p, e);
    this.props.valueInquirer.getValue = () => this.state.value;
    const f = this.props.field;
    const values = (f.selectOptions || []).map(o => o.value)
    // Value[] = (Array.isArray(f.value) ? f.value : f.value
    this.state = { value: values }
  }
  render() {
    const f = this.props.field;
    if ((f.type === 'multiselect' || f.type === 'select') && f.selectOptions && f.selectOptions.length) {
      const values: Value[] = (Array.isArray(f.value) ? f.value : [f.value]).filter(v => v)
      const multiple = f.type === 'multiselect'

      return <RecordFieldInputSelectEl
        multiple={multiple}
        disabled={f.isReadonly}
        defaultValue={multiple ? values.map(v => v + '') : values[0] + ''}
        onFocus={e => this.props.onChangeFocus(e)}
        onBlur={e => this.props.onChangeFocus(e)}
        onChange={e => {
          const value = multiple ? Array.from(e.currentTarget.selectedOptions).map(o => o.value) : e.currentTarget.selectedOptions.length ? e.currentTarget.selectedOptions[0].value : ''
          this.setState({ ...this.state, value })
        }}
      >
        {(typeof f.value === 'undefined' || f.value === null) ?
          <option key="0">Not Defined</option> :
          f.selectOptions.map(o =>
            <option key={o.value} value={o.value}>
              {Array.isArray(o.text) ? o.text.join(', ') : o.text || (o.value && tryTo(() => o.value.toString()))}
            </option>)}
      </RecordFieldInputSelectEl>
    }
    else {
      // return <input></input>
      return <RecordFieldInputInput<string> {...{ ...this.props as any, value: Array.isArray(this.state.value) ? this.state.value.join(',') : this.state.value }}></RecordFieldInputInput>
    }
  }
}


export const RecordFieldInputSelectEl = styled.select`
  resize: ${props => (props as any).multiple ? 'both' : 'inherit'};
  ${props => (props as any).multiple ? MultiLineTextEditor : RecordFieldInputEditorBase};
`
