import { generateProject } from './generateProject';
import { generateFile } from './search/generateFile';
import { generateAfter } from './search/generateProject';

// generateSearchColumn({

// })
generateProject({
  inputFolder: './extracted-small1', 
  // inputFolder: './extracted', 
  // outputFolder: './generated-search-test1', 
  outputFolder: '../src/search/typedSearch/generated', 
  typedRecordImportBase: '../', 
  cleanOutput: true,
  generateAfter,
  generateFile, 
  throwOnError: true
})
