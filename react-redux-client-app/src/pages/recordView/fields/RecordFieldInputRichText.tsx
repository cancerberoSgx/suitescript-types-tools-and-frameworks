import { RecordFieldEditorInputProps } from "./recordField";
import * as React from 'react';
import { styled } from '../../../styles/theme'
import { MultiLineTextEditor } from '../RecordViewStyles';
interface E {
  value: string;
}
type P = RecordFieldEditorInputProps<string>;

export class RecordFieldInputRichText extends React.Component<P, E> {
  constructor(p: P, e: E) {
    super(p, e);
    this.props.valueInquirer.getValue = () => this.state.value;
  }
  render() {
    const f = this.props.field;
    return <RichTextEditorStyle contentEditable={!f.isReadonly}
      dangerouslySetInnerHTML={{ __html: f.value + '' }}
      onFocus={e => {
        this.props.onChangeFocus(e);
      }}
      onBlur={e => {
        this.props.onChangeFocus(e);
        this.setState({ ...this.state, value: e.currentTarget.innerHTML })
      }}
      onKeyUp={e => {
        this.setState({ ...this.state, value: e.currentTarget.innerHTML })
      }}
      onPaste={e => {
        this.setState({ ...this.state, value: e.currentTarget.innerHTML })
      }}
      onInput={e => {
        this.setState({ ...this.state, value: e.currentTarget.innerHTML })
      }}

    // onChange={e => { debugger; this.setState({ ...this.state, value: e.currentTarget.innerHTML }) }}

    ></RichTextEditorStyle>
  }
}

const RichTextEditorStyle = styled.span`
${props => MultiLineTextEditor(props).styles};
width: ${props => (props as any).type === 'checkbox' ? 'auto' : 'inherit'}
`
