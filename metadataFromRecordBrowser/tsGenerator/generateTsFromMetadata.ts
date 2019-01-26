// TODO: 
//  * read only fields ?
//  * get createDate will return a string not a date ... we could solve this returning a type nsDate = 'string' and then providing a utility to convert to Date 

import { readFileSync, writeFileSync } from 'fs';
import { RecordMetadata } from './metadataTypes';
import { generateRecord } from './generateRecord';
import { ls, mkdir } from 'shelljs';
import { join, resolve, basename } from 'path';
import { indent } from './util';

interface ProjectConfig { inputFolder: string, outputFolder: string, typedRecordImportBase: string }

export function generateProject(config: ProjectConfig) {
  const { inputFolder, outputFolder, typedRecordImportBase } = config
  const recordIds: string[] = []
  mkdir('-p', outputFolder)
  ls('-R', inputFolder).map(f => join(resolve(inputFolder), f)).filter(f => f.endsWith('.json')).forEach(f => {
    try {
      const data: RecordMetadata = JSON.parse(readFileSync(f).toString())
      const { output } = generateFile({ data, typedRecordImportBase })
      writeFileSync(join(outputFolder, basename(f, '.json')+'.ts'), output)
      recordIds.push(data.id)
    } catch (error) { // invalid json
    }

    writeFileSync(join(outputFolder, 'recordConstructor.ts'), generateRecordConstructor({ recordIds, typedRecordImportBase }))

    writeFileSync(join(outputFolder, 'index.ts'), generateIndex({ recordIds, typedRecordImportBase }))
  })

}


function generateIndex(config: { recordIds: string[], typedRecordImportBase: string }) {
  return `${config.recordIds.map(id=>`export * from './${id}';`).join(`\n`)}
  `
}

function generateRecordConstructor(config: { recordIds: string[], typedRecordImportBase: string }) {
  return `
import { ${config.recordIds.map(id => `${id}RecordImpl`).concat(config.recordIds.map(id => `${id}Record`)).join(', ')} } from './index';
import { StringKeyOf, ValueOfStringKey, checkThrow } from '${config.typedRecordImportBase}../../misc/misc';
import * as record from 'N/record';
import { RecordId } from '${config.typedRecordImportBase}../recordRef';

export type recordTypes = {
  ${config.recordIds.map(id => `
'${id}': ${id}RecordImpl
`.trim()).join(`,\n${indent()}`)}
}
export type recordConstructors = {
  ${config.recordIds.map(id => `
'${id}': (r: record.Record) => ${id}Record
`.trim()).join(`,\n${indent()}`)}
}
const recordConstructorsImpl: recordConstructors = {
  ${config.recordIds.map(id => `
  '${id}': (r: record.Record) => new ${id}RecordImpl(r) 
  `.trim()).join(`,\n${indent()}`)}
}
export function load<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> | undefined {
  const r = record.load(options)
  return r ? recordConstructorsImpl[options.type](r) : undefined as any
}
export function loadOrThrow<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> {
  const r = load(options)
  return checkThrow(r, \`record \${options.id},\${options.type} not found\`)
}
export function create<T extends StringKeyOf<recordTypes>>(options: { type: T }): ValueOfStringKey<recordTypes, T> {
  const r = record.create(options)
  return recordConstructorsImpl[options.type](r) as any
}
`
}
export interface FileConfig { data: RecordMetadata, typedRecordImportBase: string }

export function generateFile(config: FileConfig): { output: string } {
  const output = `// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '${config.typedRecordImportBase}typedRecord';
import { Record } from 'N/record';

${generateRecord({ data: config.data })}
`
  return { output }
}
