import { RecordOrRef, asRecord, asRecordOrThrow } from '../record/recordRef';
import * as record from 'N/record'
import { Sublist as NSSublist, Field as NSField } from 'N/ui/serverWidget'
import { TODO } from '../misc';

// untyped record  - i.e basically the info that is in xml=T without the values
interface Record {
  fields: Field[]
  sublists: Sublist[]
}

// enum FieldType { 'string', 'boolean', }// TODO - is there a record for extracting this ? 
// interface Sublists { [sublistId: string]: Sublist }

interface Base {
  id: string,
}
interface Field extends Base {

  type: string
}
interface Sublist extends Base {
  fields: Field[]
}

class RecordBuilder {
  // record! : Record
  // fields: Field[] = []
  // sublists: Sublist[] = []
  constructor(public r: record.Record) {
  }
  extract(): Record {
    const fields = this.r.getFields().map(fieldId => this.extractField(this.r.getField({ fieldId })))
    const sublists = this.r.getSublists().map(sublistId => this.extractSublist(this.r.getSublist({ sublistId }), sublistId))
    return {
      fields, sublists
    }
  }
  extractSublist(s: NSSublist, sublistId: string): Sublist {
    const fields = this.r.getSublistFields({ sublistId }).map(fieldId => {
      return this.extractSublistField(s, sublistId, s.getField({ id: fieldId }), fieldId)
    })
    return {
      id: sublistId,
      fields
    }
  }
  extractSublistField(s: NSSublist, sublistId: string, f: NSField, fieldId: string): Field {
    // return this.r.getSublistFields({ sublistId }).map(fieldId => {
      // const f = s.getField({ id: f.id })
      return {
        id: fieldId,
        type: f.type.toString()
      }
    // })
  }
  extractField(f: record.Field): Field {
    // const f = t
    return {
      id: f.id,
      type: f.type
    }
  }
}
export function getRecordTypeMetadata(rr: RecordOrRef): Record | undefined {
  const r = asRecord(rr)
  if (!r) { return }
  const builder = new RecordBuilder(r)
  return builder.extract()

}