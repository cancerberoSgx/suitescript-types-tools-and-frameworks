import { ReactLike } from "../../jsx/createElement";
import * as record from 'N/record'
import { getRecordTypeMetadata, Record, Field, Sublist } from '../../introspection/recordMetadata';
import { RenderLinkOptions } from '../app';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';
import { Data } from '../../jsx/util/StoreData';

interface ValuedField extends Field {
  value?: string
}
interface RecordV extends Record {
  fields: ValuedField[]
}
interface Props {
  record: RecordV
  seeValues: boolean
  renderLink(config: RenderLinkOptions): string
  currentUrl: string
}

export const RecordView = (props: Props) => {
  const { fields, sublists, id, name } = props.record
  return <div>
    <h1>{name} id: {id}</h1>
    <a href={props.seeValues ? props.renderLink({ routeName: 'recordView', params: { id: props.record.id, type: props.record.type, seeValues: '' } }) : props.renderLink({ routeName: 'recordView', params: { id: props.record.id, type: props.record.type, seeValues: 'true' } })}>{props.seeValues ? 'Hide Values' : 'See values'}</a>
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
  return <div>
    <strong>{props.field.id}</strong> {props.field.type ? `, type: ${props.field.type}` : ''} {props.field.name ? `, name: ${props.field.name}` : ''}{props.field.isReadonly ? `, Readonly` : ''}{props.field.isMandatory ? `, Mandatory` : ''}
    {props.seeValues ? <blockquote><strong>value</strong>
      {!props.field.isReadonly ? <FieldEditor {...props}></FieldEditor> : <span>${props.field.value + ''} (read only)</span>}</blockquote> : <span></span>}
  </div>
}

const Sublist = (props: { sublist: Sublist }) => {
  return <div>
    {props.sublist.id} {props.sublist.name ? `, name: ${props.sublist.name}` : ''}
    {props.sublist.fields.length ? <div>
      Sublist fields:
  <ul>{props.sublist.fields.map(f => <li>{f.name} id: {f.id}{f.type ? `, type: ${f.type}` : ''}{f.isMandatory ? `, Mandatory: ${f.isMandatory}` : ''}{f.isReadonly ? `, Readonly: ${f.isReadonly}` : ''}</li>)}</ul>
    </div>
      : <blockquote>No sublist fields found</blockquote>}
  </div>
}

declare function buildRouteUrl(config: RenderLinkOptions): string
declare function getBindInputValue(listenerEl: HTMLElement): string | undefined
declare function getStoreData<T>(listenerEl: HTMLElement): T|undefined

const FieldEditor = (props: { field: ValuedField } & Props) => {
  const f = props.field
  if (f.type === 'text') {
    return <div>
      <BindInputValue bindInputId={`data-field-id${f.id}`} ><input value={f.value}></input></BindInputValue>



      <BindInputValueAndStoreData 
      bindListenerId={`data-field-id${f.id}`}
        data={{
          routeName: 'setFieldValue',
          params: {
            recordId: props.record.id,
            recordType: props.record.type,
            fieldId: f.id,
            redirect: encodeURIComponent(props.currentUrl)
          }
        } as RenderLinkOptions}>
        <button 
        // data-field-id={f.id} data-partial-link={props.renderLink({
        //   routeName: 'setFieldValue', params: {
        //     recordId: props.record.id, recordType: props.record.type,
        //     fieldId: f.id, redirect: encodeURIComponent(props.currentUrl)
        //   }
        // })}
          onClick={e => {
            const fieldValue = getBindInputValue(e.currentTarget)
            const data = getStoreData<RenderLinkOptions>(e.currentTarget)
            if(!data||fieldValue===undefined){return}
            data.params = {...data.params, fieldValue}
            const url = buildRouteUrl(data)
            // alert(url)
            // debugger
            window.location.href=url
            // const fieldId = e.currentTarget.getAttribute('data-field-id')
            // const input = document.querySelector<HTMLInputElement>('input[data-field-id="' + fieldId + '"]')
            // const value = input!.value
            // const partialLink = e.currentTarget.getAttribute('data-partial-link')
            // const link = partialLink + '&fieldValue=' + value
            // window.location.href = link
          }}>Edit2</button> 
        </BindInputValueAndStoreData>

      <a href={props.renderLink({
        routeName: 'setFieldValue', params: {
          recordId: props.record.id, recordType: props.record.type,
          fieldId: f.id,
          fieldValue: f.value + '',
          redirect: encodeURIComponent(props.currentUrl)
        }
      })}>Edit</a>
    </div>
  }
  return <span></span>
}


export function buildRecordViewModel(r: record.Record, seeValues: boolean): RecordV {
  const record = getRecordTypeMetadata(r) as RecordV
  if (!record) { throw 'record not found' }
  record.fields = record.fields
    .filter(f => f.id)
    .map(f => {
      let value = ''
      try {
        value = r.getText(f.id) + ''
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