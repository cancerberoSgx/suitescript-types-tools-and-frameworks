import * as React from 'react';
import { formatDate, formatDateTime } from '../../../utils/formatDate';
import { RecordFieldEditorInputProps } from "./recordField";
import { RecordFieldInputEditorBase } from '../RecordViewStyles';
import { styled, Theme } from '../../../styles/theme';
import { ValuedField } from '../../../store/recordView';

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
    const inputType = this.getTypeForInput(f);
    const inputValue = this.getValueForInput(f);

    return <RecordFieldInputInputEl defaultValue={f.type !== 'checkbox' ? inputValue : ''} disabled={f.isReadonly} type={inputType} defaultChecked={f.type === 'checkbox' && !!f.value}
      name={f.id}
      // checked={f.type === 'checkbox' && !!f.value}
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

  private getTypeForInput(f: ValuedField) {
    return f.type === 'date' ? 'date' :
      f.type === 'datetime' ? 'datetime-local' :
        ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' :
          f.type === 'checkbox' ? 'checkbox' : 'text';
  }

  private getValueForInput(f: ValuedField): string {
    return (typeof f.value === 'undefined' || f.value === null) ? '' :
      f.type === 'date' ? formatDate(f.value as any, 'YYYY-MM-DD') :
        f.type === 'datetime' ? formatDateTime(f.value as any, 'YYYY-MM-DDTHH:MMZ') :
          ((f.value || f.text) + '');
  }
}


const RecordFieldInputInputEl = styled.input`
${props => RecordFieldInputEditorBase(props)}
`

// export const RecordFieldInputInputEl = (props: { theme: Theme }) => <RecordFieldInputEditorBase as="input" {...props}></RecordFieldInputEditorBase>
// styled.input`

// ${props => RecordFieldInputEditorBase(props as any).styles};
// width: ${props => (props as any).type === 'checkbox' ? 'auto' : 'inherit'}
// `

// styled(RecordFieldInputEditorBase.withComponent('input'))`
//   width: ${props => (props as any).type === 'checkbox' ? 'auto' : 'inherit'}
// `
