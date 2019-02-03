import { ReactLike } from "../../jsx/createElement";
import * as record from 'N/record'
import { getRecordTypeMetadata, Record, Field, Sublist } from '../../introspection/recordMetadata';
import { RenderLinkOptions } from "../browserCode";
import { FieldEditor } from './fieldEditor';
import { array } from '../../misc/misc';

type Value = string | boolean | number | Date
export interface ValuedField extends Field {
  value?: Value
}
interface SublistLine {
  rows: { fieldId: string, value: Value }[]
}
interface ValuedSublist extends Sublist {
  lines: SublistLine[]
  lineCount: number
}
interface RecordV extends Record {
  fields: ValuedField[]
  sublists: ValuedSublist[]
}
export interface Props {
  record: RecordV
  seeValues: boolean
  renderLink(config: RenderLinkOptions): string
  currentUrl: string
  showAllFields: boolean
  messageFromRedirect?: string
  showSublistLines?: boolean
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

  const showSublistLinesToggleLink = props.showSublistLines ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showSublistLines: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showSublistLines: 'true' } })

  return <div>

    {props.messageFromRedirect ? <p style={{ border: '2px solid green' }}>{props.messageFromRedirect}</p> : <span></span>}

    <a href={props.renderLink({ routeName: 'mainPage', params: { ...commonParams } })}>Go back to Main Page</a>

    <h1>Record {name}, id: {id}</h1>
    <a href={showValuesToggleLink}>{props.seeValues ? 'Hide Field Values' : 'Show Field Values'}</a>
    <br></br>
    <a href={showAllFieldsToggleLink}>{props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields'}</a>
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

const Field = (props: { field: ValuedField } & Props) => {
  return <span>
    <strong>{props.field.id}</strong> {props.field.type ? `, type: ${props.field.type}` : ''} {props.field.name ? `, name: ${props.field.name}` : ''}{props.field.isReadonly ? `, Readonly` : ''}{props.field.isMandatory ? `, Mandatory` : ''}
    {props.seeValues ? <span>. Value ({typeof props.field.value}) :
      {!props.field.isReadonly ?
        <FieldEditor {...props}></FieldEditor> :
        <span>${props.field.value + ''} (read only)</span>}</span> :
      <span></span>}
  </span>
}

const Sublist = (props: { sublist: ValuedSublist } & Props) => {
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


const SublistLinesEditor = (props: { sublist: ValuedSublist } & Props) => {
  return <table>
    <thead><tr>{props.sublist.fields.map(f => <th>{f.id}</th>)}</tr></thead>
    <tbody>
      {props.sublist.lines.map((line, index) => <tr>
        {line.rows.map((row, i) =>
          <td>{row.value}</td>
        )}
      </tr>
      )}
    </tbody>
  </table>
}



export function buildRecordViewModel(r: record.Record, seeValues: boolean, showAllFields: boolean): RecordV {
  const record = getRecordTypeMetadata({
    record: r,
    fieldPredicate: showAllFields ? f => true : internalFilterPredicate,
    debug: false
  }) as RecordV
  if (!record) { 
    throw 'record not found' 
  }

  record.fields = record.fields
    .filter(f => f.id)
    .map(f => {
      if (!seeValues) {
        return f
      }
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

  record.sublists = record.sublists
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(s => {
      s.fields = s.fields.sort((a, b) => a.id.localeCompare(b.id))
      s.lineCount = r.getLineCount({ sublistId: s.id })
      s.lines = []
      for (let line = 0; line < s.lineCount; line++) {
        s.lines[line] = { rows: [] }
        s.fields.forEach(f => {
          const value = r.getSublistText({ sublistId: s.id, fieldId: f.id, line })
          s.lines[line].rows.push({ fieldId: f.id, value })
        })
      }
      return s
    })
  return record
}

function internalFilterPredicate(f: string): boolean {
  return f.indexOf('_') !== 0 && f.indexOf('sys_') !== 0 && f.indexOf('nsapi') !== 0
}