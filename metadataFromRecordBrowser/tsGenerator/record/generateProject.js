"use strict";
// TODO: 
//  * read only fields ?
//  * get createDate will return a string not a date ... we could solve this returning a type nsDate = 'string' and then providing a utility to convert to Date 
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const generateRecord_1 = require("./generateRecord");
const path_1 = require("path");
const util_1 = require("../util");
function generateAfter(config) {
    const { inputFolder, outputFolder, typedRecordImportBase, recordIds } = config;
    fs_1.writeFileSync(path_1.join(outputFolder, 'recordConstructor.ts'), generateRecordConstructor({ recordIds, typedRecordImportBase }));
}
exports.generateAfter = generateAfter;
function generateRecordConstructor(config) {
    return `
import { ${config.recordIds.map(id => `${id}RecordImpl`).concat(config.recordIds.map(id => `${id}Record`)).join(', ')} } from './index';
import { StringKeyOf } from '${config.typedRecordImportBase}../../misc/misc';
import * as record from 'N/record';

export type recordTypes = {
  ${config.recordIds.map(id => `
'${id}': ${id}RecordImpl
`.trim()).join(`,\n${util_1.indent()}`)}
}

export type RecordType = StringKeyOf<recordTypes>

export type recordConstructors = {
  ${config.recordIds.map(id => `
'${id}': (r: record.Record) => ${id}Record
`.trim()).join(`,\n${util_1.indent()}`)}
}

export const recordConstructorsImpl: recordConstructors = {
  ${config.recordIds.map(id => `
  '${id}': (r: record.Record) => new ${id}RecordImpl(r) 
  `.trim()).join(`,\n${util_1.indent()}`)}
}
`;
}
function generateFile(config) {
    const output = `// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '${config.typedRecordImportBase}typedRecord';
import { Record } from 'N/record';

${generateRecord_1.generateRecord({ data: config.data })}
`;
    return { output };
}
exports.generateFile = generateFile;
