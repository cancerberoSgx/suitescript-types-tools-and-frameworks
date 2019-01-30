// TODO: 
//  * read only fields ?
//  * get createDate will return a string not a date ... we could solve this returning a type nsDate = 'string' and then providing a utility to convert to Date 

import { writeFileSync } from 'fs';
import { generateRecord } from './generateRecord';
import { join } from 'path';
import { indent } from '../util';
import { ProjectConfig, FileConfig } from '../generateProject';

export function generateAfter(config: ProjectConfig&{recordIds: string[], generateAccessorsApi?: boolean}){
  const { inputFolder, outputFolder, typedRecordImportBase, recordIds } = config
  writeFileSync(join(outputFolder, 'recordConstructor.ts'), generateRecordConstructor({ recordIds, typedRecordImportBase }))
}

function generateRecordConstructor(config: { recordIds: string[], typedRecordImportBase: string,  generateAccessorsApi?: boolean }) {
  return `
import { ${(config.generateAccessorsApi ? config.recordIds.map(id => `${id}RecordImpl' : ''}`) : []).concat(config.recordIds.map(id => `${id}Fields`)).concat(config.recordIds.map(id => `${id}Sublists`)).join(', ')} } from './index';
import { StringKeyOf } from '${config.typedRecordImportBase}../../misc/misc';
import * as record from 'N/record';

${config.generateAccessorsApi ? `
export type recordTypes = {
  ${config.recordIds.map(id => `
'${id}': ${id}Record${config.generateAccessorsApi ? 'Impl':''}
`.trim()).join(`,\n${indent()}`)}
}
` : ``}

export type recordFieldTypes = {
  ${config.recordIds.map(id => `
'${id}': ${id}Fields
`.trim()).join(`,\n${indent()}`)}
}

export type recordSublistsTypes = {
  ${config.recordIds.map(id => `
'${id}': ${id}Sublists
`.trim()).join(`,\n${indent()}`)}
}

${config.generateAccessorsApi ? `
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
` : ``}
`
}

export function generateFile(config: FileConfig): { output: string } {
  const output = `// This file is auto generated, do not edit it. 

${generateRecord({ data: config.data })}
`
  return { output }
}
