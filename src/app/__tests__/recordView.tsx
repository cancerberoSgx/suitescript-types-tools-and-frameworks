import { ReactLike } from "../../jsx/createElement";
import * as record from 'N/record'
import { getRecordTypeMetadata, Record, Field, Sublist } from '../../introspection/recordMetadata';

export const RecordView = (props: { record: Record }) => {
  const { fields, sublists, id, name } = props.record
  return <div>
    <h1>${name} id: ${id}</h1>
    <div>
      <h3>Fields:</h3>
      <ul>
        {fields.map(f => <li><Field field={f}></Field></li>)}
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

const Field = (props: { field: Field }) => {
  return <div>
    {props.field.id} {props.field.type ? `, type: ${props.field.type}` : ''} {props.field.name ? `, name: ${props.field.name}` : ''}
  </div>
}

const Sublist = (props: { sublist: Sublist }) => {
  return <div>
    {props.sublist.id} {props.sublist.name ? `, name: ${props.sublist.name}` : ''}
    {props.sublist.fields.length ? <div>
      Sublist fields:
  <ul>{props.sublist.fields.map(f => <li>{f.name} id: {f.id}, type: {f.type}</li>)}</ul>
    </div>
      : <div>No sublist fields found</div>}
  </div>
}


export function buildRecordViewModel(r: record.Record): Record {
  const record = getRecordTypeMetadata(r)
  if(!record){throw 'record not found'}
  record.fields = record.fields.sort((a, b)=>a.id.localeCompare(b.id))
  record.sublists = record.sublists.sort((a, b)=>a.id.localeCompare(b.id))
  return record
}