import { RecordOrRef, asRecord, asRecordOrThrow } from '../record/recordRef';
import * as record from 'N/record'
import { TODO } from "../misc/typesUtil";
import { log } from "../log/log";
import { getObjectKeys } from './objectExplorer';

// untyped record  - i.e basically the info that is in xml=T without the values
export interface Record extends Base {
  fields: Field[]
  sublists: Sublist[]
  type: string
}

// enum FieldType { 'string', 'boolean', }// TODO - is there a record for extracting this ? 
// interface Sublists { [sublistId: string]: Sublist }

interface Base {
  id: string,
  name?: string
}
export interface Field extends Base {
  // id: string,
  // label: string
  isReadonly: boolean,
  isMandatory: boolean
  type: string
}
export interface Sublist extends Base {
  fields: Field[]
  // name: string
}

interface ExtractConfig {
  record: record.Record
  fieldPredicate?: (id: string) => boolean
  excludeSublists?: (id: string) => boolean
  debug?: boolean
  /** perform record.getSublistField() to try getting sublist fields information like type ? */
  callGetSublistField?: boolean
}
class RecordBuilder {
  config: ExtractConfig | undefined;

  extractRecord(config: ExtractConfig): Record {
    this.config = config
    const r = config.record
    const fields = this.extractFields(config)
    const sublists = this.extractSublists(config)
    return {
      id: r.id + '',
      name: r.type + '',
      fields,
      sublists,
      type: r.type + ''
    }
  }

  extractFields(config: ExtractConfig): Field[] {
    const r = config.record
    return r.getFields()
      .filter(f => config.fieldPredicate && config.fieldPredicate(f))
      .map(fieldId => this.extractField(config, fieldId))
      .filter(f => !!f) as Field[]
  }

  extractField(config: ExtractConfig, fieldId: string): Field | undefined {
    const r = config.record
    if (fieldId.indexOf('sys_') === 0) {
      return {
        id: fieldId, type: 'text', isReadonly: false, isMandatory: false,
      }
    }
    const field = r.getField({ fieldId })
    if (field) {
      return { id: field.id + '', name: field.label + '', isReadonly: !!field.isReadOnly, isMandatory: !!field.isMandatory, type: field.type + '', }
    }
    else {
      this.log('Cannot get record field (getField) with id ' + fieldId)
    }
  }

  log(s: string): any {
    if (this.config && this.config.debug) {
      log(s)
    }
  }

  extractSublists(config: ExtractConfig): Sublist[] {
    const r = config.record
    return r.getSublists()
      .map(sublistId => this.extractSublist(config, sublistId))
      .filter(s => !!s) as Sublist[]
  }

  extractSublist(config: ExtractConfig, sublistId: string): Sublist {
    const r = config.record
    let name: string | undefined
    try {
      const s = r.getSublist({ sublistId })
      name = s && s.name
    } catch (error) {

    }
    const fields = this.extractSublistFields(config, sublistId)
    return {
      id: sublistId, fields, name
    }
  }

  extractSublistFields(config: ExtractConfig, sublistId: string): Field[] {
    const r = config.record
    let sublistFields: string[] = []
    try {
      sublistFields = r.getSublistFields({ sublistId })
    } catch (error) {
      this.log('Exception when r.getSublistFields({ sublistId }) for sublistId==' + sublistId)
    }
    return sublistFields
      .filter(f => f.indexOf('sys_') !== 0)
      .map(fieldId => this.extractSublistField(config, sublistId, fieldId))
  }

  extractSublistField(config: ExtractConfig, sublistId: string, fieldId: string): any {
    let type: string|undefined
    if (config.callGetSublistField) {
      try {
        const lineCount = config.record.getLineCount({ sublistId })
        if (lineCount > 0) {
          const f = config.record.getSublistField({ sublistId, fieldId, line: 0 })
          // console.log({${f.}});
          type=f.type
        }
      } catch (error) {

      }
    }
    return {
      id: fieldId,
      type
    }
  }

}


export function getRecordTypeMetadata(config: ExtractConfig): Record | undefined {
  const builder = new RecordBuilder()
  return builder.extractRecord(config)
}