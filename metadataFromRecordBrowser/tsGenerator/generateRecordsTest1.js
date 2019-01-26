"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateProject_1 = require("./record/generateProject");
const generateProject_2 = require("./generateProject");
generateProject_2.generateProject({
    inputFolder: './extracted-small1',
    // inputFolder: './extracted', 
    outputFolder: '../src/record/typedRecord/generated',
    typedRecordImportBase: '../',
    cleanOutput: true,
    generateAfter: generateProject_1.generateAfter,
    generateFile: generateProject_1.generateFile
});
