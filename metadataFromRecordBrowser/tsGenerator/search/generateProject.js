"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const getType_1 = require("../getType");
const fs_1 = require("fs");
const path_1 = require("path");
function generateAfter(config) {
    const { inputFolder, outputFolder, typedRecordImportBase, recordIds } = config;
    fs_1.writeFileSync(path_1.join(outputFolder, 'searchTypesOperatorsSupport.ts'), generateSearchTypesOperatorsSupport(Object.assign({}, config, { recordIds })).output);
    fs_1.writeFileSync(path_1.join(outputFolder, 'TypedSearchFilterTypes.ts'), generateTypedSearchFilterTypes(Object.assign({}, config, { recordIds })).output);
    fs_1.writeFileSync(path_1.join(outputFolder, 'TypedSearchColumnTypes.ts'), generateTypedSearchColumnTypes(Object.assign({}, config, { recordIds })).output);
    fs_1.writeFileSync(path_1.join(outputFolder, 'TypedSearchColumnNames.ts'), generateTypedSearchColumnNames(Object.assign({}, config, { recordIds })).output);
    fs_1.writeFileSync(path_1.join(outputFolder, 'TypedSearchFilterNames.ts'), generateTypedSearchFilterNames(Object.assign({}, config, { recordIds })).output);
    fs_1.writeFileSync(path_1.join(outputFolder, 'TypedSearchFilterTypes.ts'), generateTypedSearchFilterTypes(Object.assign({}, config, { recordIds })).output);
    fs_1.writeFileSync(path_1.join(outputFolder, 'TypedSearchJoinTypes.ts'), generateTypedSearchJoinTypes(Object.assign({}, config, { recordIds })).output);
}
exports.generateAfter = generateAfter;
function generateSearchTypesOperatorsSupport(config) {
    // const { inputFolder, outputFolder, typedRecordImportBase, recordIds } = config
    const output = `
/** Field Search Operator Support type definitions,. */
export interface SearchTypesOperatorsSupport {${getType_1.fieldTypeOperatorMetadata.map(id => {
        return `
${util_1.indent()}${id.fieldType}?: ${id.operators.map(o => `'${o}'`).join(' | ')};
`.trim();
    }).join(`\n${util_1.indent()}`)}
}`.trim();
    return { output };
}
function generateTypedSearchFilterTypes(config) {
    const output = `
import { ${config.recordIds.map(id => `${id}SearchFilterTypes`).join(', ')} } from './index';
/** Record Type - Field Search Filter type definitions. */
export interface TypedSearchFilterTypes {
  ${config.recordIds.map(id => `
${util_1.indent()}${id}: ${id}SearchFilterTypes;
`.trim()).join(`\n${util_1.indent()}`)}
}`.trim();
    return { output };
}
function generateTypedSearchJoinTypes(config) {
    const output = `
import { ${config.recordIds.map(id => `${id}SearchJoinTypes`).join(', ')} } from './index';
/** Record Type - Field Search Join type definitions. */
export interface TypedSearchJoinTypes {
  ${config.recordIds.map(id => `
${util_1.indent()}${id}: ${id}SearchJoinTypes;
`.trim()).join(`\n${util_1.indent()}`)}
}`.trim();
    return { output };
}
function generateTypedSearchColumnTypes(config) {
    const output = `
import { ${config.recordIds.map(id => `${id}SearchColumn`).join(', ')} } from './index';
/** Record Type - Field Search Column type definitions. */
export interface TypedSearchColumnTypes {
  ${config.recordIds.map(id => `
${util_1.indent()}${id}: ${id}SearchColumn;
`.trim()).join(`\n${util_1.indent()}`)}
}`.trim();
    return { output };
}
function generateTypedSearchColumnNames(config) {
    const output = `
import { ${config.recordIds.map(id => `${id}SearchColumn `).join(', ')} } from './index';
/** Record Type - Field Search Column names definitions. */
export interface TypedSearchColumnNames {${config.recordIds.map(id => {
        return `
${util_1.indent()}${id}: Required<${id}SearchColumn>;
`.trim();
    }).join(`\n${util_1.indent()}`)}
}`.trim();
    return { output };
}
function generateTypedSearchFilterNames(config) {
    const output = `
import { ${config.recordIds.map(id => `${id}SearchFilter`).join(', ')} } from './index';
/** Record Type - Field Search Filter names definitions. */
export interface TypedSearchFilterNames {${config.recordIds.map(id => `
${util_1.indent()}${id}: Required<${id}SearchFilter>;
`.trim()).join(`\n${util_1.indent()}`)}
}`.trim();
    return { output };
}
// export interface TypedSearchFilterTypes {
//   item: itemSearchFilterTypes; // ETC
// }
// export interface TypedSearchColumnTypes {
//   item: itemSearchColumnTypes; // ETC
// }
// export interface TypedSearchColumnNames {
//   item: Required<itemSearchColumn>; // ETC
// }
// export interface TypedSearchFilterNames {
//   item: Required<itemSearchFilter>; // ETC
// }
// export interface TypedSearchJoinTypes {
//   item: itemSearchJoin; // ETC
// }
// export interface TypedSearchJoinTypes {
//   item: itemSearchJoin; // ETC
// }
// export type GetSelectValueFilterOperator = ("contains" | "is" | "startsWith");
// export type SearchDateFieldOperator = ("after" | "before" | "empty" | "notAfter" | "notBefore" | "notEmpty" | "notOn" | "notOnOrAfter" | "notOnOrBefore" | "notWithin" | "on" | "onOrAfter" | "onOrBefore" | "within");
// export type SearchDoubleFieldOperator = ("between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo");
// export type SearchEnumMultiSelectFieldOperator = ("anyOf" | "noneOf");
// export type SearchLongFieldOperator = ("between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo");
// export type SearchMultiSelectFieldOperator = ("anyOf" | "noneOf");
// export type SearchStringFieldOperator = ("contains" | "doesNotContain" | "doesNotStartWith" | "empty" | "hasKeywords" | "is" | "isNot" | "notEmpty" | "startsWith");
// export type SearchTextNumberFieldOperator = ("between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo");
