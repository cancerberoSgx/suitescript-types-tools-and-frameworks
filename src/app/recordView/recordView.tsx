import { ReactLike } from "../../jsx/createElement";
import { FieldEditor } from './fieldEditor';
import { RecordViewProps, ValuedField, ValuedSublist } from './recordViewTypes';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';

export const RecordView = (props: RecordViewProps) => {
  const { fields, sublists, id, name } = props.record

  const commonParams = { id: props.record.id, type: props.record.type, }

  const showValuesToggleLink = props.seeValues ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, seeValues: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, seeValues: 'true' } })

  const showAllFieldsToggleLink = props.showAllFields ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showAllFields: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showAllFields: 'true' } })

  const showSublistLinesToggleLink = props.showSublistLines ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showSublistLines: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showSublistLines: 'true' } })

  return <div>

    {props.messageFromRedirect ? <p style={{ border: '2px solid green' }}>{props.messageFromRedirect}</p> : <span></span>}

    <a href={props.renderLink({ routeName: 'mainPage', params: { ...commonParams } })}>Go back to Main Page</a>

    <h1>Record {name}, id: {id}</h1>
    <a href={showValuesToggleLink}>{props.seeValues ? 'Hide Field Values' : 'Show Field Values'}</a>
    <br></br>
    <a href={showAllFieldsToggleLink}>{props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields '}</a>
    <br></br>
    <a href={showSublistLinesToggleLink}>{props.showSublistLines ? 'Hide Sublists lines' : 'Show Sublists lines'}</a>

    <div>
      <h3>Fields:</h3>
      <ul>
        {fields.map(f => <li><Field field={f} {...props}></Field></li>)}
      </ul>
    </div>
    <div>
      <h3>Sublists:</h3>
      <ul>
        {sublists.map(s => <li><Sublist sublist={s} {...props}></Sublist></li>)}
      </ul>
    </div>
  </div>
}

export const Field = (props: { field: ValuedField } & RecordViewProps) => {
  return <span>
    <strong>{props.field.name ? `${props.field.name}` : ''}</strong> - <em>{props.field.id}</em>{props.field.type ? `(${props.field.type})` : ''}{props.field.isReadonly ? ` - readonly` : ''}{props.field.isMandatory ? ` - mandatory` : ''}{props.seeValues ? <span>: <FieldEditor {...props}></FieldEditor></span> : <span></span>
    }
  </span>
}

export const Sublist = (props: { sublist: ValuedSublist } & RecordViewProps) => {
  return <span>
    {props.sublist.id} {props.sublist.name ? `, name: ${props.sublist.name}` : ''}
    , lines: #{props.sublist.lineCount}
    {props.sublist.fields.length ? <span>

      {props.showSublistLines ? <span>
        <SublistLinesEditor {...props}></SublistLinesEditor> </span> :
        <span>
          Line fields:
  <ul style={{ display: 'inline' }}>{props.sublist.fields.map(f => <li>{f.name} id: {f.id}{f.type ? `, type: ${f.type}` : ''}{f.isMandatory ? `, Mandatory: ${f.isMandatory}` : ''}{f.isReadonly ? `, Readonly: ${f.isReadonly}` : ''}
          </li>)}</ul>
        </span>}
    </span>
      : <blockquote>No sublist fields found</blockquote>}
  </span>
}


const SublistLinesEditor = (props: { sublist: ValuedSublist } & RecordViewProps) => {
  return <table>
    <thead><tr>{props.sublist.fields.map(f => <th>{f.id}{f.type ? ` (${f.type})` : ''}</th>)}</tr></thead>
    <tbody>
      {props.sublist.lines.map(line => <tr>
        {line.rows.map(row => {
          const input =<span>            {row.text}{row.value == row.text ? ` ${row.value}` : ''}
          <BindInputValue bindInputId={`data-sublist-field-${props.sublist.id}-${line}-${row.field.id}`}>
          <input value={row.value+''}></input>
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
        </span> 
          return (<td>
          {input}
          {row.field.type === 'select' ?
              <a href={props.renderLink({ routeName: 'findRecord', params: { id: row.value as any, type: row.field.id } })}>&nbsp;(find)</a> : ''}
              </td>)
        }
        )}
      </tr>
      )}
    </tbody>
  </table>
}



