import { generateProject } from './generateTsFromMetadata';

generateProject({
  inputFolder: './extracted-small1', 
  outputFolder: '../src/record/typedRecord/generated', 
  typedRecordImportBase: '../', 
  cleanOutput: true
})

