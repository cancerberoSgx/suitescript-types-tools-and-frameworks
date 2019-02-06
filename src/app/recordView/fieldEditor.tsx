import { isDate } from 'N/util';
import { ReactLike } from "../../jsx/createElement";
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { formatDate } from '../../misc/dateUtil';
import { RenderLinkOptions } from "../browserCode";
import { RecordViewProps, ValuedField } from "./recordViewTypes";
import { getObjectKeysTypesAndValues } from '../../introspection/objectExplorer';
import { tryTo } from '../../misc/misc';


export const FieldEditor = (props: {
  field: ValuedField;
} & RecordViewProps) => {

  const f = props.field;
  let input: JSX.Element | undefined
  if (!f) {
    return <span>UNDEFINED FIELD ERROR </span>
  }
  else if ((f.type === 'select') && f.selectOptions && f.selectOptions.length) {
    input = <select
      disabled={f.isReadonly}>
      {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> : ''}
      {f.selectOptions.map(o =>
        <option
          selected={Array.isArray(f.value) ? (f.value as any[]).indexOf(o.value) !== -1 : f.value === o.value}
          value={o.value}>
          {o.text || (o.value && tryTo(() => o.value.toString()))}
        </option>)}
    </select>
  }
  else if (f.type === 'multiselect' && f.selectOptions && f.selectOptions.length) {
    input = <select
    multiple={true}
      disabled={f.isReadonly}>
      {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> : ''}
      {/* <option>{JSON.stringify(f.value)}</option> */}
      {f.selectOptions.map(o =>
        <option
          selected={(f.value as any[]).indexOf(o.value) !== -1}
          value={o.value}>
          {Array.isArray(o.text) ? o.text.join(', ') : o.text || (o.value && tryTo(() => o.value.toString()))}
        </option>)}
    </select>
  }

  else {
    const inputType = f.type === 'date' ? 'date' : f.type === 'datetime' ? 'datetime-local' : ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' : f.type === 'checkbox' ? 'checkbox' : 'text'
    const inputValue = f.type === 'date' ? formatDate(f.value as any, 'YYYY-MM-DD') : (f.value + '')
    input = <input
      multiple={false}
      disabled={f.isReadonly}
      type={inputType}
      value={inputValue}
      checked={f.type === 'checkbox' && !!f.value}>
    </input>
  }

  return <span>

    <BindInputValue bindInputId={`data-field-id${f.id}`}>
      {input}
    </BindInputValue>

    <BindInputValueAndStoreData bindListenerId={`data-field-id${f.id}`} data={{
      routeName: 'setFieldValue',
      params: {
        recordId: props.record.id,
        recordType: props.record.type,
        fieldType: f.type,
        fieldId: f.id,
        redirect: encodeURIComponent(props.currentUrl)
      }
    }}>
      <button onClick={e => {
        const data = getStoreData<RenderLinkOptions>(e.currentTarget);
        let fieldValue = getBindInputValue<string>(e.currentTarget, {asString: true});
        if (!data || typeof fieldValue === 'undefined') {
          return;
        }
        // alert(`fieldValue ${fieldValue} ${JSON.stringify(fieldValue)}`);
        
        data.params = { ...data.params, fieldValue };
        window.location.href = buildRouteUrl(data);
      }}>
        Change!</button>
    </BindInputValueAndStoreData>

  </span>


};
