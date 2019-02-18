import * as React from 'react';
import { RecordViewSettings, RecordViewState, ValuedField } from '../../../store/recordView';
import { RecordFieldInputInput } from './RecordFieldInputInput';
import { RecordFieldInputRichText } from './RecordFieldInputRichText';
import { RecordFieldInputSelect } from './RecordFieldInputSelect';
import { RecordFieldInputTextArea } from './RecordFieldInputTextArea';
import { ReactNodeLike } from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { styled } from '../../../styles/theme'



export interface RecordFieldEditorInputProps<T> {
  field: ValuedField;
  onChangeFocus(e: React.FocusEvent<HTMLElement>): void;
  valueInquirer: {
    getValue: () => T;
  };
}
interface FEProps<T> extends RecordViewState {
  field: ValuedField;
  extraFieldEditorControls?: ((props: Partial<RecordFieldEditorInputProps<T>>) => ReactNodeLike)[]
};
type FEState = RecordViewSettings & {
  focused?: boolean;
};


/** implements a single record field editor and delegate the UI to concrete editor widget
 * implementations like RecordFieldInput* classes. Responsible of define a common RecordFieldInput*
 * focus and value interface. Responsible to know to which RecordFieldInput* implementation delegate
 * each record type . Also responsible of showing "save inline" button. */
export class RecordFieldEditor<T> extends React.Component<FEProps<T>, FEState> {
  state: FEState = {};
  render() {
    const f = this.props.field;
    if (!this.props.record) {
      return <div></div>;
    }
    return <RecordFieldInputEditorContainer className="field-editor">
      {this.state.focused &&
        <div data-type="record-field-editor-control">
          {this.props.inlineEdit && <button onClick={e => {
            alert(`Saving ${this.getValue()}`);
          }}>
            Save</button>}
          {this.props.extraFieldEditorControls && this.props.extraFieldEditorControls.map(c => c({ ...this.props, ...this.getInputProps(f) }))}
        </div>}
      {this.getEditorInput(f)}
    </RecordFieldInputEditorContainer>;
  }
  getValue(): T {
    return null as any;
  }
  getEditorInput(f: ValuedField) {
    let input: JSX.Element | undefined;
    const inputProps: RecordFieldEditorInputProps<any> = this.getInputProps(f);
    if ((f.type === 'select' || f.type === 'multiselect')) {
      input = <RecordFieldInputSelect {...inputProps} />
    }
    else if (f.type === 'textarea') {
      input = <RecordFieldInputTextArea {...inputProps} />;
    }
    else if (f.type === 'richtext') {
      input = <RecordFieldInputRichText {...inputProps} />;
    }
    else {
      input = <RecordFieldInputInput {...inputProps} />
    }
    return input;
  }

  private getInputProps(f: ValuedField): RecordFieldEditorInputProps<any> {
    return {
      field: f,
      onChangeFocus: (e) => this.setState({
        ...this.state,
        focused: e.type === 'focus' ||
          (e.relatedTarget && !!(e.relatedTarget as HTMLElement).closest('[data-type="record-field-editor-control"]'))
      }),
      valueInquirer: this as any
    };
  }
}

const RecordFieldInputEditorContainer = styled.div`width: 100%`
