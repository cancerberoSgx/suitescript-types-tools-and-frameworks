import { RecordViewSettings, RecordViewState, ValuedField } from '../../store/recordView';
import { tryTo } from '../../utils/misc';
import * as React from 'react';
import { RecordFieldInputInput } from './RecordFieldInputInput';
import { RecordFieldInputRichText } from './RecordFieldInputRichText';
import { RecordFieldInputTextArea } from './RecordFieldInputTextArea';
import { RecordFieldInputSelect } from './RecordFieldInputSelect';
import { RecordFieldInputEditorBase, RecordFieldInputEditorContainer } from './RecordViewStyles';
const recordField = 1;
type FEProps = RecordViewState & {
  field: ValuedField;
};
type FEState = RecordViewSettings & {
  focused?: boolean;
};

/** implements a single record field editor and delegate the UI to concrete editor widget
 * implementations like RecordFieldInput* classes. Responsible of define a common RecordFieldInput*
 * focus and value interface. Responsible to know to which RecordFieldInput* implementation delegate
 * each record type . Also responsible of showing "save inline" button. */
export class RecordFieldEditor<T> extends React.Component<FEProps, FEState> {
  state: FEState = {};
  render() {
    const f = this.props.field;
    if (!this.props.record) {
      return <div></div>;
    }
    return <RecordFieldInputEditorContainer>
      {this.state.focused && this.props.inlineEdit &&
        <button data-type="save-button" onClick={e => { alert(`Saving ${this.getValue()}`); }}>Save</button>}
      {this.getEditorInput(f)}
    </RecordFieldInputEditorContainer>;
  }
  getValue(): T {
    return null as any;
  }
  getEditorInput(f: ValuedField) {
    let input: JSX.Element | undefined;
    const inputProps: RecordFieldEditorInputProps<any> = {
      field: f,
      onChangeFocus: (e) => this.setState({ ...this.state, focused: e.type === 'focus' || e.relatedTarget && (e.relatedTarget as HTMLElement).getAttribute && (e.relatedTarget as HTMLElement).getAttribute('data-type') === 'save-button' }),
      valueInquirer: this as any
    };
    if ((f.type === 'select' || f.type === 'multiselect')) {
      input = <RecordFieldInputSelect {...inputProps} />
    }
    else if (f.type === 'textarea') {
      input =
        <RecordFieldInputTextArea {...inputProps} />;
    }
    else if (f.type === 'richtext') {
      input = <RecordFieldInputRichText {...inputProps} />;
    }
    else {
      input = <RecordFieldInputInput {...inputProps} />
    }
    return input;
  }
}
export interface RecordFieldEditorInputProps<T> {
  field: ValuedField;
  onChangeFocus(e: React.FocusEvent<HTMLElement>): void;
  valueInquirer: {
    getValue: () => T;
  };
}

