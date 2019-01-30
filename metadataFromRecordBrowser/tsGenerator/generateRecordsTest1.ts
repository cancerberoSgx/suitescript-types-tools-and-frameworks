import { generateAfter, generateFile } from './record/generateProject';
import { generateProject } from './generateProject';

generateProject({
  // inputFolder: './extracted-small1', 
  // inputFolder: './extractMetadataFromZip/extracted-few', 
  inputFolder: './extractMetadataFromZip/extracted', 
  outputFolder: '../src/record/typedRecord/generated', 
  // outputFolder: './extractMetadataFromZip/generated-few/record', 
  typedRecordImportBase: '../', 
  generateAccessorsApi: false,
  cleanOutput: true,
  generateAfter, 
  generateFile
})
