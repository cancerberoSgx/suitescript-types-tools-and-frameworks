import {Record} from 'N/record'
import * as ReactLike from '../jsx/createElement'

export function printRecordFields(r: Record) {
  return <ul>
    {r.getFields().map(fieldId=>r.getField({fieldId})).filter(f=>f&&f.label).map(f=><li>
      <strong>{f.label}</strong> <em>{f.id}</em> ({f.type}), value: {r.getText({fieldId: f.id})}
    </li>)}
  </ul>
}

 