import { RenderLinkOptions } from "../browserCode";
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';
import { isDate } from 'N/util';
import { formatDate } from '../../misc/dateUtil';
import { ValuedField, Props } from "./recordViewTypes";
import { ReactLike } from "../../jsx/createElement";


declare function buildRouteUrl(config: RenderLinkOptions): string;
declare function getBindInputValue<T extends string | number | Date = string>(listenerEl: HTMLElement, config?: {
  dateAsString?: boolean;
}): T | undefined;
declare function getStoreData<T>(listenerEl: HTMLElement): T | undefined;

export const FieldEditor = (props: {
  field: ValuedField;
} & Props) => {
  const f = props.field;
  if ((f.type === 'text' || f.type === 'date') && typeof f.value !== 'boolean') {
    return <span>
      
      <BindInputValue bindInputId={`data-field-id${f.id}`}>
        {(f.type === 'date' && isDate(f.value)) ?
          <input type="date" value={formatDate(f.value as any, 'YYYY-MM-DD')}></input> :
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
