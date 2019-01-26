import { writeFileSync } from 'fs';
import { mkdir } from 'shelljs';
import { generateProject } from './generateTsFromMetadata';
// import { generateRecord } from "./generateRecord";
// const test = 1;
// // tests
// mkdir('-p', 'generated');
// writeFileSync('generated/commercecategory.ts', generateFile({
//   file: './extracted/commercecategory.json',
//   typedRecordImportBase: '../'
// }));

generateProject({inputFolder: './extracted', outputFolder: './generated', typedRecordImportBase: '../'})