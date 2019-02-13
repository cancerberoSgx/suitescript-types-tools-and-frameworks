import * as React from 'react';
import { formatDate, formatDateTime } from '../../utils/formatDate';
import { RecordFieldEditorInputProps } from "./recordField";
import { RecordFieldInputEditorBase } from './RecordViewStyles';
import { styled } from '../../styles/theme';
import { tryTo } from '../../utils/misc';
import { Value } from '../../store/recordView';
import { RecordFieldInputInput } from './RecordFieldInputInput';

type Type = string | Date | boolean | number
interface E<T extends Type> {
  value: T;
}
type P<T extends Type> = RecordFieldEditorInputProps<T>;

export class RecordFieldInputSelect<T extends Type> extends React.Component<P<T>, E<T>> {
  constructor(p: P<T>, e: E<T>) {
    super(p, e);
    this.props.valueInquirer.getValue = () => this.state.value;
  }
  render() {
    const f = this.props.field;

    // if ((f.type === 'select') && f.selectOptions && f.selectOptions.length) {
    //   return <select multiple={false} disabled={f.isReadonly}>
    //     {(typeof f.value === 'undefined' || f.value === null) ?          <option>Not Defined</option> :
    //       f.selectOptions.map(o => <option selected={Array.isArray(f.value) ? (f.value as any[]).indexOf(o.value) !== -1 : f.value === o.value} value={o.value}>
    //         {o.text || (o.value && tryTo(() => o.value.toString()))}
    //       </option>)}
    //   </select>;
    // }
    if ((f.type === 'multiselect' || f.type === 'select') && f.selectOptions && f.selectOptions.length) {
      const values: Value[] = (Array.isArray(f.value) ? f.value : [f.value]).filter(v => v)
      return <RecordFieldInputSelectEl multiple={f.type === 'multiselect'} disabled={f.isReadonly}>
        {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> :
          f.selectOptions.map(o => <option selected={values.indexOf(o.value) !== -1} value={o.value}>
            {Array.isArray(o.text) ? o.text.join(', ') : o.text || (o.value && tryTo(() => o.value.toString()))}
          </option>)}
      </RecordFieldInputSelectEl>;
    }
    else {
      return <RecordFieldInputInput {...this.props}></RecordFieldInputInput>
    }
  }
}


export const RecordFieldInputSelectEl = styled(RecordFieldInputEditorBase.withComponent('select'))`
resize: ${props => (props as any).multiple ? 'both' : 'inherit'}
`
