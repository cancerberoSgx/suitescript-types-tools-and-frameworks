import * as React from 'react';
import { formatDate, formatDateTime } from '../../utils/formatDate';
import { RecordFieldEditorInputProps } from "./recordField";
import { RecordFieldInputEditorBase } from './RecordViewStyles';
import { styled } from '../../styles/theme';

type Type = string | Date | boolean | number
interface E<T extends Type> {
  value: T;
}
type P<T extends Type> = RecordFieldEditorInputProps<T>;

export class RecordFieldInputInput<T extends Type> extends React.Component<P<T>, E<T>> {
  constructor(p: P<T>, e: E<T>) {
    super(p, e);
    this.props.valueInquirer.getValue = () => this.state.value;
  }
  render() {
    const f = this.props.field;

    const inputType = f.type === 'date' ? 'date' :
      f.type === 'datetime' ? 'datetime-local' :
        ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' :
          f.type === 'checkbox' ? 'checkbox' : 'text';

    const inputValue = (typeof f.value === 'undefined' || f.value === null) ? '' :
      f.type === 'date' ? formatDate(f.value as any, 'YYYY-MM-DD') :
        f.type === 'datetime' ? formatDateTime(f.value as any, 'YYYY-MM-DDTHH:MMZ') :
          ((f.value || f.text) + '');

    return <RecordFieldInputInputEl defaultValue={inputValue} disabled={f.isReadonly} type={inputType}
      name={f.id}
      checked={f.type === 'checkbox' && !!f.value}
      onFocus={e => this.props.onChangeFocus(e)}
      onBlur={e => this.props.onChangeFocus(e)}
      onChange={e => {
        let value: Type
        if (e.currentTarget.type === 'date') {
          value = e.currentTarget.valueAsDate
        }
        else if (e.currentTarget.type === 'number') {
          value = e.currentTarget.valueAsNumber
        }
        else if (e.currentTarget.type === 'checkbox') {
          value = !!e.currentTarget.checked
        }
        else {
          value = e.currentTarget.value
        }
        this.setState({ ...this.state, value: value as T })
      }}
    >
    </RecordFieldInputInputEl>
  }
}


export const RecordFieldInputInputEl = styled(RecordFieldInputEditorBase.withComponent('input'))`
  width: ${props => (props as any).type === 'checkbox' ? 'auto' : 'inherit'}
`
