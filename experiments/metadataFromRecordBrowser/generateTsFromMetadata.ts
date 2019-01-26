// TODO: 
//  * read only fields ?
//  * get createDate will return a string not a date ... we could solve this returning a type nsDate = 'string' and then providing a utility to convert to Date 

import { readFileSync, writeFileSync } from 'fs';
import { mkdir } from 'shelljs';

interface RecordMetadata {
  id: string
  label: string
  supportCustomFields: boolean
  fields: RecordField[]
  sublists: Sublist[]
  searchFilters: AbstractField[]
  searchColumns: AbstractField[]
}
interface AbstractField {
  type: Type,
  id: string,
  label: string
}
interface SublistField extends AbstractField {
  required: boolean
  help: string
}
interface RecordField extends SublistField {
  nlapiSubmitField: boolean
}
interface Sublist {
  id: string
  label: string
  fields: SublistField[]
}
type Type = 'text' | 'integer' | 'checkbox' | 'date' | 'textarea' | 'select' | 'float' | 'richtext' | 'image'

var types = {
  text: 'string',
  integer: 'number',
  checkbox: 'boolean',
  date: 'Date',
  textarea: 'string',
  select: 'string',
  float: 'number',
  richtext: 'string',
  image: 'string'
}
function getType(t: Type): string {
  if (types[t]) {
    return types[t]
  }
  else {
    console.log('type not recognized: ' + t)
    return 'string'
  }
}

export function generateRecord(config : {file: string, typedRecordImportBase: string} ): string{
  const data: RecordMetadata = JSON.parse(readFileSync(config.file).toString())
return `
// This file is auto generated, do not edit it. 
import {TypedRecord} from '${config.typedRecordImportBase}/TypedRecord'
${generateFields(data)}
`
}


function generateFields(data: RecordMetadata) {
  const interfaceMembers: string[] = []
  const classMembers: string[] = []
  data.fields.forEach(field => {
    const type = getType(field.type)

    interfaceMembers.push(`
  /** ${field.help} */
  ${field.id}: ${type}${field.required ? '' : ' | undefined'};`.trim())

    classMembers.push(`
  public get ${field.id}(): ${type}${field.required ? '' : ' | undefined'} {
    return this.typedRecord.nsRecord.getValue('${field.id}') as any;
  }
  public set ${field.id}(value: ${type}${field.required ? '' : ' | undefined'}) {
    this.typedRecord.nsRecord.setValue('${field.id}', value as any)
  }
  `.trim())
  })

  return `
/** 
 * ${data.label} Fields Definition.
 * Record's Internal Id: ${data.id}. 
 * Supports Custom Fields: ${data.supportCustomFields} 
 */
export interface ${data.id}Fields {
${interfaceMembers.join(`\n${indent()}`)}
}

export class ${data.id}FieldsImpl implements ${data.id}Fields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  ${classMembers.join(`\n${indent()}`)}
}
`
}




 
export function array<T=number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}
export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}
export function indent(i: number=1, tabSize=2): string {
  return repeat(i*tabSize, ' ')
}





// tests
mkdir('-p', 'generated')
writeFileSync('generated/commercecategory.ts', generateRecord({
  file: './extracted/commercecategory.json', 
  typedRecordImportBase: '../../../src/record/typedRecord'}))
// console.log(generateRecord({file: './categoriesMetadata.json', typedRecordImportBase: '../typedRecord'}))