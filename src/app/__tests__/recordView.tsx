import { ReactLike } from "../../jsx/createElement";
import * as record from 'N/record'
import { getRecordTypeMetadata, Record, Field, Sublist } from '../../introspection/recordMetadata';
import { RenderLinkOptions } from '../app';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';
import { isDate } from 'N/util';
import { formatDate } from '../../misc/dateUtil';
// import { format, Type,Timezone } from 'N/format';
// import { formatDate } from '../../misc/dateUtil';

interface ValuedField extends Field {
  value?: string | boolean | number | Date
}
interface RecordV extends Record {
  fields: ValuedField[]
}
interface Props {
  record: RecordV
  seeValues: boolean
  renderLink(config: RenderLinkOptions): string
  currentUrl: string
  showAllFields: boolean
  messageFromRedirect?: string
}

export const RecordView = (props: Props) => {
  const { fields, sublists, id, name } = props.record

  const commonParams = { id: props.record.id, type: props.record.type, }

  const showValuesToggleLink = props.seeValues ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, seeValues: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, seeValues: 'true' } })

  const showAllFieldsToggleLink = props.showAllFields ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showAllFields: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showAllFields: 'true' } })

  return <div>
    {props.messageFromRedirect ? <p style={{border: '2px solid green'}}>{props.messageFromRedirect}</p> : <span></span>}
    <a href={props.renderLink({ routeName: 'mainPage', params: { ...commonParams } })}>Go back to Main Page</a>
    <h1>Record {name}, id: {id}</h1>
    <a href={showValuesToggleLink}>{props.seeValues ? 'Hide Values' : 'See Values'}</a>
    <br></br>
    <a href={showAllFieldsToggleLink}>{props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields'}</a>
    <div>
      <h3>Fields:</h3>
      <ul>
        {fields.map(f => <li><Field field={f} {...props}></Field></li>)}
      </ul>
    </div>
    <div>
      <h3>Sublists:</h3>
      <ul>
        {sublists.map(s => <li><Sublist sublist={s}></Sublist></li>)}
      </ul>
    </div>
  </div>
}

const Field = (props: { field: ValuedField } & Props) => {
  return <span>
    <strong>{props.field.id}</strong> {props.field.type ? `, type: ${props.field.type}` : ''} {props.field.name ? `, name: ${props.field.name}` : ''}{props.field.isReadonly ? `, Readonly` : ''}{props.field.isMandatory ? `, Mandatory` : ''}
    {props.seeValues ? <span>. Value ({typeof props.field.value}) :  
      {!props.field.isReadonly ? <FieldEditor {...props}></FieldEditor> : <span>${props.field.value + ''} (read only)</span>}</span> : <span></span>}
  </span>
}

const Sublist = (props: { sublist: Sublist }) => {
  return <span>
    {props.sublist.id} {props.sublist.name ? `, name: ${props.sublist.name}` : ''}
    {props.sublist.fields.length ? <span>
      Sublist fields:
  <ul>{props.sublist.fields.map(f => <li>{f.name} id: {f.id}{f.type ? `, type: ${f.type}` : ''}{f.isMandatory ? `, Mandatory: ${f.isMandatory}` : ''}{f.isReadonly ? `, Readonly: ${f.isReadonly}` : ''}</li>)}</ul>
    </span>
      : <blockquote>No sublist fields found</blockquote>}
  </span>
}


declare function buildRouteUrl(config: RenderLinkOptions): string
declare function getBindInputValue<T extends string|number|Date = string>(listenerEl: HTMLElement, config?: {dateAsString?: boolean}): T | undefined
declare function getStoreData<T>(listenerEl: HTMLElement): T | undefined
// declare function formatDate(date: Date, format: 'YYYY-MM-DD'|'MM/DD/YYYY'): string

const FieldEditor = (props: { field: ValuedField } & Props) => {
  const f = props.field
  if ((f.type === 'text'||f.type==='date') && typeof f.value !=='boolean' ) {
    return <span>

      {/* heads up! using BindInputValue in this input we are able to retrieve its value from next <button> onClick handler. The button uses BindInputValueAndStoreData to retrieve the value and also to store data in the dom needed to build the link to edit the field.   */}

      {/* iniin: <input type="date" value="11/22/2018"></input> */}


{/* <p>{(f.type==='date' && isDate(f.value)) ? <input type="date" value={'2012-08-22'}></input> : ''} </p> */}
      <BindInputValue bindInputId={`data-field-id${f.id}`} >
        {(f.type==='date' && isDate(f.value)) ? <input type="date" value={formatDate(f.value as any, 'YYYY-MM-DD')}></input> : <input value={f.value+''}></input>}
      </BindInputValue>

      <BindInputValueAndStoreData
        bindListenerId={`data-field-id${f.id}`}
        data={{
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
          const data = getStoreData<RenderLinkOptions>(e.currentTarget)
          // if(!data){
          //   return
          // }
          let fieldValue= getBindInputValue<string>(e.currentTarget, {dateAsString: true})

          // if(data.params.fieldType==='date'){
          //   const val = getBindInputValue<string>(e.currentTarget, {dateAsString: true})
          //   // if(val){
          //   //   fieldValue = dateToInputValue(val, 'MM/DD/YYYY')
          //   // }
          // }
          // else {
          //   fieldValue = getBindInputValue<string>(e.currentTarget)||''
          // }
          // new Intl.DateTimeFormat('en-US').format(d)
          // const fieldValue = getBindInputValue(e.currentTarget)
          if (!data || fieldValue === undefined) { return }
          data.params = { ...data.params, fieldValue }
          const url = buildRouteUrl(data)
          window.location.href = url
        }}>
          Change!</button>

      </BindInputValueAndStoreData>

    </span>
  }
  return <span></span>
}


function internalFilterPredicate(f: string): boolean { return f.indexOf('_') !== 0 && f.indexOf('sys_') !== 0 && f.indexOf('nsapi') !== 0 }

export function buildRecordViewModel(r: record.Record, seeValues: boolean, showAllFields: boolean): RecordV {
  const record = getRecordTypeMetadata({
    record: r,
    fieldPredicate: showAllFields ? f => true : internalFilterPredicate,
    debug: false
  }) as RecordV
  if (!record) { throw 'record not found' }
  record.fields = record.fields
    .filter(f => f.id)
    .map(f => {
      let value: any
      try {
        //@ts-ignore     
        value = r.getValue(f.id)
      }
      catch (error) {
        value = "ERROR " + f.id
      }
      return {
        ...f,
        value: seeValues ? value : ''
      }
    })
    .sort((a, b) => a.id.localeCompare(b.id))
  record.sublists = record.sublists.sort((a, b) => a.id.localeCompare(b.id))
  return record
}