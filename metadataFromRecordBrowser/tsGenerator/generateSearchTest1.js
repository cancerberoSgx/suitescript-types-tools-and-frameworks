"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateProject_1 = require("./generateProject");
const generateFile_1 = require("./search/generateFile");
const generateProject_2 = require("./search/generateProject");
// generateSearchColumn({
// })
generateProject_1.generateProject({
    // inputFolder: './extracted-small1', 
    inputFolder: './extracted',
    outputFolder: './generated-search-test1',
    typedRecordImportBase: '../',
    cleanOutput: true,
    generateAfter: generateProject_2.generateAfter,
    generateFile: generateFile_1.generateFile,
    throwOnError: true
});
