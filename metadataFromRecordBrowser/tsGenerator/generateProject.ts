

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
  ls('-R', inputFolder).map(f => join(resolve(inputFolder), f)).filter(f => f.endsWith('.json')).forEach(f => {
    try {
      const data: RecordMetadata = JSON.parse(readFileSync(f).toString());
      const { output } = config.generateFile({ data, typedRecordImportBase });
      writeFileSync(join(outputFolder, basename(f, '.json') + '.ts'), output);
      recordIds.push(data.id);
    }
    catch (error) { // invalid json
    }
    config.generateAfter({ ...config, recordIds });
  });
}
