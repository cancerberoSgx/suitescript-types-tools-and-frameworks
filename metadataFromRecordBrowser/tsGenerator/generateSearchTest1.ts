import { generateProject } from './generateProject';
import { generateFile } from './search/generateFile';

// generateSearchColumn({

// })
generateProject({
  // inputFolder: './extracted-small1', 
  inputFolder: './extracted', 
  outputFolder: './generated-search-test1', 
  typedRecordImportBase: '../', 
  cleanOutput: true,
  generateAfter: ()=>{}, 
  generateFile, 
  throwOnError: true
})
