import { RecordFieldEditorInputProps } from './recordFields';
import * as React from 'react';

interface E {
  value: string;
}
type P = RecordFieldEditorInputProps<string>;

export class TextAreaFieldInput extends React.Component<P, E> {
  constructor(p: P, e: E) {
    super(p, e);
    this.props.valueInquirer.getValue = () => this.state.value;
  }
  render() {
    const f = this.props.field;
    return <textarea onFocus={e => {
      this.props.onChangeFocus(true);
    }}
      onBlur={e => {
        this.props.onChangeFocus(true);
      }}
      onChange={e => this.setState({ ...this.state, value: e.currentTarget.value })}
      disabled={f.isReadonly}
      defaultValue={f.value + ''}>
    </textarea>;
  }
}
