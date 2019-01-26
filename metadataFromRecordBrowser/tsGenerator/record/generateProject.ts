// TODO: 
//  * read only fields ?
//  * get createDate will return a string not a date ... we could solve this returning a type nsDate = 'string' and then providing a utility to convert to Date 

import { writeFileSync } from 'fs';
import { RecordMetadata } from '../metadataTypes';
import { generateRecord } from './generateRecord';
import { join } from 'path';
import { indent } from '../util';
import { ProjectConfig, FileConfig } from '../generateProject';


export function generateAfter(config: ProjectConfig&{recordIds: string[]}){
  const { inputFolder, outputFolder, typedRecordImportBase, recordIds } = config
  writeFileSync(join(outputFolder, 'recordConstructor.ts'), generateRecordConstructor({ recordIds, typedRecordImportBase }))
  writeFileSync(join(outputFolder, 'index.ts'), generateIndex({ recordIds, typedRecordImportBase }))
}

function generateIndex(config: { recordIds: string[], typedRecordImportBase: string }) {
  return `${config.recordIds.map(id=>`export * from './${id}';`).join(`\n`)}`
}

function generateRecordConstructor(config: { recordIds: string[], typedRecordImportBase: string }) {
  return `
import { ${config.recordIds.map(id => `${id}RecordImpl`).concat(config.recordIds.map(id => `${id}Record`)).join(', ')} } from './index';
import { StringKeyOf } from '${config.typedRecordImportBase}../../misc/misc';
import * as record from 'N/record';

export type recordTypes = {
  ${config.recordIds.map(id => `
'${id}': ${id}RecordImpl
`.trim()).join(`,\n${indent()}`)}
}

export type RecordType = StringKeyOf<recordTypes>

export type recordConstructors = {
  ${config.recordIds.map(id => `
'${id}': (r: record.Record) => ${id}Record
`.trim()).join(`,\n${indent()}`)}
}

export const recordConstructorsImpl: recordConstructors = {
  ${config.recordIds.map(id => `
  '${id}': (r: record.Record) => new ${id}RecordImpl(r) 
  `.trim()).join(`,\n${indent()}`)}
}
`
}

export function generateFile(config: FileConfig): { output: string } {
  const output = `// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '${config.typedRecordImportBase}typedRecord';
import { Record } from 'N/record';

${generateRecord({ data: config.data })}
`
  return { output }
}
