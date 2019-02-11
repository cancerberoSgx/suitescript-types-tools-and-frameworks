import { RecordFieldEditorInputProps } from './recordFields';
import * as React from 'react';
import styled from 'react-emotion';

interface E {
  value: string;
}
type P = RecordFieldEditorInputProps<string>;

export class RichTextFieldInputContentEditableSpan extends React.Component<P, E> {
  constructor(p: P, e: E) {
    super(p, e);
    this.props.valueInquirer.getValue = () => this.state.value;
  }
  render() {
    const f = this.props.field;
    return <RichTextEditorStyle contentEditable={!f.isReadonly}
      dangerouslySetInnerHTML={{ __html: f.value + '' }}
      onFocus={e => {
        this.props.onChangeFocus(true);
      }}
      onBlur={e => {
        this.props.onChangeFocus(true);
      }}
      onChange={e => this.setState({ ...this.state, value: e.currentTarget.innerHTML })}
    ></RichTextEditorStyle>
  }
}

const RichTextEditorStyle = (styled('span')`
border: 3px solid blue;
width: 100%;
min-height: 60px;
max-height: 100px;
display: block;
overflow: scroll
`)
