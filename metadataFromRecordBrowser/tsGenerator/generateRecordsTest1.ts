import { generateAfter, generateFile } from './record/generateProject';
import { generateProject, ProjectConfig } from './generateProject';

export function generateRecordsMetadata(){

  generateProject({
    // inputFolder: './extracted-small1', 
    // inputFolder: './extractMetadataFromZip/extracted-few', 
    inputFolder: './extractMetadataFromZip/extracted_18_1', 
    outputFolder: '../src/record/typedRecord/generated', 
    // outputFolder: './extractMetadataFromZip/generated-few/record', 
    typedRecordImportBase: '../', 
    generateAccessorsApi: false,
    cleanOutput: true,
    generateAfter, 
    generateFile
  })
  
}