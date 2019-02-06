import { isDate } from 'N/util';
import { ReactLike } from "../../jsx/createElement";
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { formatDate } from '../../misc/dateUtil';
import { RenderLinkOptions } from "../browserCode";
import { Props, ValuedField } from "./recordViewTypes";


export const FieldEditor = (props: {
  field: ValuedField;
} & Props) => {
  const f = props.field;
  if ((f.type === 'text' || f.type === 'date') && typeof f.value !== 'boolean') {
    return <span>
      
      <BindInputValue bindInputId={`data-field-id${f.id}`}>
        {(f.type === 'date' && isDate(f.value)) ?
          <input disabled={f.isReadonly} type="date" value={formatDate(f.value as any, 'YYYY-MM-DD')}></input> :
          <input value={f.value + ''}></input>}
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
          let fieldValue = getBindInputValue<string>(e.currentTarget, { dateAsString: true });
          if (!data || fieldValue === undefined) {
            return;
          }
          data.params = { ...data.params, fieldValue };
          window.location.href = buildRouteUrl(data);
        }}>
          Change!</button>
      </BindInputValueAndStoreData>
    </span>;
  }
  return <span></span>;
};
