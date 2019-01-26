

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
      try {
        const data: RecordMetadata = {
          searchJoins: [], searchColumns: [], fields: [], sublists: [],
          ...JSON.parse(readFileSync(f).toString())
        };

        const { output } = config.generateFile({ data, typedRecordImportBase });
        const outputFile = join(outputFolder, basename(f, '.json') + '.ts')
        writeFileSync(outputFile, output);
        recordIds.push(data.id);
      }
      catch (error) { // invalid json
        console.log('ERROR in generateFile: ' + error);
        if(config.throwOnError){
          throw error
        }  
      }
      config.generateAfter({ ...config, recordIds });
    });
}
