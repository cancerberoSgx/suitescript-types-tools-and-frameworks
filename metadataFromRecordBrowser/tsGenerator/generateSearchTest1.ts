import { generateProject } from './generateProject';
import { generateFile } from './search/generateFile';
import { generateAfter } from './search/generateProject';

// generateSearchColumn({

// })
generateProject({
  // inputFolder: './extractMetadataFromZip/extracted', 
  inputFolder: './extractMetadataFromZip/extracted', 
  // inputFolder: './extracted', 
  // outputFolder: './generated/search', 
  outputFolder: '../src/search/typedSearch/generated', 
  typedRecordImportBase: '../', 
  cleanOutput: true,
  generateAfter,
  generateFile, 
  throwOnError: true
})
