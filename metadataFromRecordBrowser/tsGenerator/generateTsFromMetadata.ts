// TODO: 
//  * read only fields ?
//  * get createDate will return a string not a date ... we could solve this returning a type nsDate = 'string' and then providing a utility to convert to Date 

import { readFileSync, writeFileSync } from 'fs';
import { RecordMetadata } from './metadataTypes';
import { generateRecord } from './generateRecord';
import { ls, mkdir, rm } from 'shelljs';
import { join, resolve, basename } from 'path';
import { indent } from './util';

interface ProjectConfig { inputFolder: string, outputFolder: string, typedRecordImportBase: string, cleanOutput?: boolean }

export function generateProject(config: ProjectConfig) {
  if(config.cleanOutput){
    rm('-rf', config.outputFolder)
  }
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
export interface FileConfig { data: RecordMetadata, typedRecordImportBase: string }

export function generateFile(config: FileConfig): { output: string } {
  const output = `// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '${config.typedRecordImportBase}typedRecord';
import { Record } from 'N/record';

${generateRecord({ data: config.data })}
`
  return { output }
}
