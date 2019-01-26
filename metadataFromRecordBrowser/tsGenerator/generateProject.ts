

import { readFileSync, writeFileSync } from 'fs';
import { RecordMetadata } from './metadataTypes';
import { ls, mkdir, rm } from 'shelljs';
import { join, resolve, basename } from 'path';

export interface ProjectConfig {
  inputFolder: string,
  outputFolder: string,
  typedRecordImportBase: string,
  cleanOutput?: boolean
  generateFile(config: FileConfig): { output: string }
  generateAfter(config: ProjectConfig & { recordIds: string[] }): void
  throwOnError?: boolean
}

export interface FileConfig {
  data: RecordMetadata,
  typedRecordImportBase: string
}

export function generateProject(config: ProjectConfig) {
  if (config.cleanOutput) {
    rm('-rf', config.outputFolder);
  }
  const { inputFolder, outputFolder, typedRecordImportBase } = config;
  const recordIds: string[] = [];
  mkdir('-p', outputFolder);
  ls('-R', inputFolder).map(f => join(resolve(inputFolder), f))
    .filter(f => f.endsWith('.json')).forEach(f => {
      const data: RecordMetadata = readMetadata(f, config)
      recordIdFilePaths[data.id] = f
      const { output } = config.generateFile({ data, typedRecordImportBase });
      const outputFile = join(outputFolder, basename(f, '.json') + '.ts')
      writeFileSync(outputFile, output);
      recordIds.push(data.id);

      config.generateAfter({ ...config, recordIds });
    });

  writeFileSync(join(outputFolder, 'index.ts'), generateIndex({ ...config, recordIds }))
}

const recordIdFilePaths : {[s:string]:string}= {}
export function getMetadataFilePathForRecord(id:string){
  return recordIdFilePaths[id]
}

function generateIndex(config: { recordIds: string[] }& ProjectConfig) {
  return ls('-R', config.outputFolder)//.map(f => join(resolve(config.outputFolder), f))
    .filter(f => f.endsWith('.ts'))
    .map(f=> `export * from './${basename(f, '.ts')}';`).join(`\n`)
}

export function readMetadata(f: string, config?: ProjectConfig): RecordMetadata {
  const empty: RecordMetadata = { id: 'empty', label: 'empty', supportCustomFields: false, searchFilters: [], searchJoins: [], searchColumns: [], fields: [], sublists: [], }
  try {
    return {
      ...empty,
      ...JSON.parse(readFileSync(f).toString())
    }
  } catch (error) { // invalid json
    console.log('ERROR in generateFile: ' + error);
    if (config && config.throwOnError) {
      throw error
    }
  }
  return empty
}