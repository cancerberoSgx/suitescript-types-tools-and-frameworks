import { RecordOrRef, asRecord, asRecordOrThrow } from '../record/recordRef';
import * as record from 'N/record'
import { TODO } from '../misc';
import { log } from "../log/log";
import { getObjectKeys } from './objectExplorer';

// untyped record  - i.e basically the info that is in xml=T without the values
interface Record {
  fields: Field[]
  sublists: Sublist[]
}

// enum FieldType { 'string', 'boolean', }// TODO - is there a record for extracting this ? 
// interface Sublists { [sublistId: string]: Sublist }

interface Base {
  id: string,
  name?: string
}
interface Field extends Base {
  type: string
  // id: string,
  // label: string
}
interface Sublist extends Base {
  fields: Field[]
  // name: string
}

class RecordBuilder {

  extractRecord(r: record.Record): Record {
    const fields = this.extractFields(r)
    const sublists = this.extractSublists(r)
    return {
      fields,
      sublists
    }
  }

  extractFields(r: record.Record): Field[] {
    return r.getFields()
      .map(fieldId => this.extractField(r, fieldId))
      .filter(f => !!f) as Field[]
  }

  extractField(r: record.Record, fieldId: string): Field | undefined {
    if(fieldId.indexOf('sys_')===0){
      return {
        id: fieldId, type: 'text'
      }
    }
    const field = r.getField({ fieldId })
    if (field) {
      return { id: field.id, name: field.label, type: field.type }
    }
    else {
      this.log('Cannot get record field (getField) with id ' + fieldId)
    }
  }

  log(s: string): any {
    log(s)
  }

  extractSublists(r: record.Record): Sublist[] {
    return r.getSublists()
      .map(sublistId => this.extractSublist(r, sublistId))
      .filter(s => !!s) as Sublist[]
  }

  extractSublist(r: record.Record, sublistId: string): Sublist {
    let name: string | undefined
    try {
      const s = r.getSublist({ sublistId })
      name = s && s.name
    } catch (error) {

    }
    const fields = this.extractSublistFields(r, sublistId)
    return {
      id: sublistId, fields, name
    }
  }

  extractSublistFields(r: record.Record, sublistId: string): Field[] {
    let sublistFields: string[] = []
    try {
      sublistFields = r.getSublistFields({ sublistId })
    } catch (error) {
      this.log('Exception when r.getSublistFields({ sublistId }) for sublistId=='+sublistId)
    }
    return sublistFields  
      .filter(f => f.indexOf('sys_') !== 0)
      .map(fieldId => this.extractSublistField(r, sublistId, fieldId))
  }
  extractSublistField(r: record.Record, sublistId: string, fieldId: string): any {
    return {
      id: fieldId
    }
    // let name:string|undefined, type: string|undefined
    // try {
    //   const f = 
    // } catch (error) {

    // }
    // throw new Error('Method not implemented.');
  }
  // .filter(f>=!!f) as Field[]

  //   const c = s.getColumn({ fieldId })
  // log('FIELDKSD' + fieldId)
  // if (c) {
  //   return {
  //     id: c.id,
  //     label: c.label,
  //     type: c.type
  //   }
  // }

  // })
  // try {
  //    const s = r.getSublist({ sublistId })
  //    if(s){
  //    }
  // } catch (error) {

  // }
  // const s = r.getSublist({ sublistId })
  // if (s) {
  //   return this.extractSublist(r, s, sublistId)
  // }
  // else {
  //   this.log('Cannot get record sublist (getSublist) with id ' + sublistId)
  // }
  // // const fieldBlackList = ['sys_id']
  // const fields: Field[] = r.getSublistFields({ sublistId })
  //   .filter(f => f.indexOf('sys_') !== 0)
  //   .map((fieldId, i) => {
  //     // log(`s=${getObjectKeys(s)}`)
  //     const c = s.getColumn({ fieldId })
  //     log('FIELDKSD' + fieldId)
  //     if (c) {
  //       return {
  //         id: c.id,
  //         label: c.label,
  //         type: c.type
  //       }
  //     }
  //     else {
  //       this.log(`Error extracting sublist column (getColumn()) sublistId: ${sublistId}, fieldId: ${fieldId}`)
  //     }
  //   })
  //   .filter(f => !!f) as Field[]
  //   return {
  //     id: sublistId,
  //     name: s.name,
  //     fields
  //   }
  // }
}
export function getRecordTypeMetadata(rr: RecordOrRef): Record | undefined {
  // if (!r) { return }
  const builder = new RecordBuilder()
  const r = asRecordOrThrow(rr)
  return builder.extractRecord(r)

}