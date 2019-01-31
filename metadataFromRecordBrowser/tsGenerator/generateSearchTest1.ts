import { generateProject, ProjectConfig } from './generateProject';
import { generateFile } from './search/generateFile';
import { generateAfter } from './search/generateProject';

export function generateSearchMetadata(){

  generateProject({
    // inputFolder: './extractMetadataFromZip/extracted', 
    inputFolder: './extractMetadataFromZip/extracted_18_1', 
    // inputFolder: './extracted', 
    // outputFolder: './generated/search', 
    outputFolder: '../src/search/typedSearch/generated', 
    typedRecordImportBase: '../', 
    cleanOutput: true,
    generateAfter,
    generateFile, 
    throwOnError: true
  })
  
}