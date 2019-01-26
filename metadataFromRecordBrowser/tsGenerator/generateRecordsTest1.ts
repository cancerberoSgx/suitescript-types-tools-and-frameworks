import { generateAfter, generateFile } from './record/generateProject';
import { generateProject } from './generateProject';

generateProject({
  inputFolder: './extracted-small1', 
  // inputFolder: './extracted', 
  outputFolder: '../src/record/typedRecord/generated', 
  typedRecordImportBase: '../', 
  cleanOutput: true,
  generateAfter, 
  generateFile
})
