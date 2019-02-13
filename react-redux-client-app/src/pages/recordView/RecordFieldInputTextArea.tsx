import * as React from 'react';
import { RecordFieldEditorInputProps } from './recordFields';
import { MultiLineTextEditor } from './RecordViewStyles';

interface E {
  value: string;
}
type P = RecordFieldEditorInputProps<string>;

export class RecordFieldInputTextArea extends React.Component<P, E> {
  constructor(p: P, e: E) {
    super(p, e);
    this.props.valueInquirer.getValue = () => this.state.value;
  }
  render() {
    const f = this.props.field;
    return <TextAreaEditorStyle onFocus={e => {
      this.props.onChangeFocus(true);
    }}
      onBlur={e => {
        this.props.onChangeFocus(true);
      }}
      onChange={e => this.setState({ ...this.state, value: e.currentTarget.value })}
      disabled={f.isReadonly}
      defaultValue={f.value + ''}>
    </TextAreaEditorStyle>;
  }
}

const TextAreaEditorStyle = MultiLineTextEditor.withComponent('textarea')
