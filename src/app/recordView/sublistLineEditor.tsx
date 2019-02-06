import { RecordViewProps, ValuedSublist } from './recordViewTypes';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';
import { ReactLike } from "../../jsx/createElement";


export const SublistLinesEditor = (props: {
  sublist: ValuedSublist;
} & RecordViewProps) => {
  try {
    return <div>
      <table>
        <thead><tr>{props.sublist.fields.map(f => <th>{f.id}{f.type ? ` (${f.type})` : ''}</th>)}</tr></thead>
        <tbody>
          {props.sublist.lines.map(line => <tr>
            {line.rows.map(row => {
              const input = (<span>            {row.text}{row.value == row.text ? ` ${row.value}` : ''}
                <BindInputValue bindInputId={`data-sublist-field-${props.sublist.id}-${line}-${row.field.id}`}>
                  <input value={row.value + ''}></input>
                </BindInputValue>

                <BindInputValueAndStoreData bindListenerId={`data-sublist-field-${props.sublist.id}-${line}-${row.field.id}`} data={{
                  routeName: 'setSublistFieldValue',
                  params: {
                    recordId: props.record.id,
                    recordType: props.record.type,
                    fieldType: row.field.type,
                    fieldId: row.field.id,
                    sublistId: props.sublist.id,
                    line,
                    redirect: encodeURIComponent(props.currentUrl)
                  }
                }}>
                  <button onClick={e => {
                    const data = getStoreData<RenderLinkOptions>(e.currentTarget);
                    let fieldValue = getBindInputValue<string>(e.currentTarget, { asString: true });
                    if (!data || typeof fieldValue === 'undefined') {
                      return;
                    }
                    data.params = { ...data.params, fieldValue };
                    window.location.href = buildRouteUrl(data);
                  }}>
                    Change!</button>
                </BindInputValueAndStoreData>
              </span>);
              // const input = <FieldEditor {...props} field={{...row.field, isReadonly: false, isDisplay: false, isMandatory: false, isVisible: false}}></FieldEditor>
              return (<td>
                {input}
                {row.field.type === 'select' ?
                  <a href={props.renderLink({ routeName: 'findRecord', params: { id: row.value as any, type: row.field.id } })}>&nbsp;(find)</a> : ''}
              </td>);
            })}
          </tr>)}
        </tbody>
      </table>

      <span>
        Line fields:
  <ul style={{ display: 'inline' }}>{props.sublist.fields.map(f => <li>{f.name} id: {f.id}{f.type ? `, type: ${f.type}` : ''}{f.isMandatory ? `, Mandatory: ${f.isMandatory}` : ''}{f.isReadonly ? `, Readonly: ${f.isReadonly}` : ''}
        </li>)}</ul>
      </span>}
    </div>
  }
  catch (error) {
    console.log(`$error ${error}`);
    return <span>error {error}</span>;
  }
};
