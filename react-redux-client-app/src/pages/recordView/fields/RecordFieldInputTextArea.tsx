import * as React from 'react';
import { RecordFieldEditorInputProps } from "./recordField";
import { MultiLineTextEditor } from '../RecordViewStyles';
import { styled } from '../../../styles/theme';

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
    return <TextAreaEditorStyle
      onFocus={e => {
        this.props.onChangeFocus(e);
      }}
      onBlur={e => {
        this.props.onChangeFocus(e);
      }}
      onChange={e => this.setState({ ...this.state, value: e.currentTarget.value })}
      disabled={f.isReadonly}
      defaultValue={f.value + ''}

      // {...this.props}
      />
  }
}

// const TextAreaEditorStyle = MultiLineTextEditor

const TextAreaEditorStyle = styled.textarea`
${props => MultiLineTextEditor(props)}
`

// ${MultiLineTextEditor};
