import { FileConfig, ProjectConfig, readMetadata, getMetadataFilePathForRecord } from '../generateProject';
import { indent } from '../util';
import { getType } from '../getType';
import { fieldTypeOperatorMetadata } from "../sharedTypes";
import { writeFileSync } from 'fs';
import { join } from 'path';

export function generateAfter(config: ProjectConfig & { recordIds: string[] }) {
  const { inputFolder, outputFolder, typedRecordImportBase, recordIds } = config
  writeFileSync(join(outputFolder, 'searchTypesOperatorsSupport.ts'),
    generateSearchTypesOperatorsSupport({ ...config, recordIds }).output)
  writeFileSync(join(outputFolder, 'TypedSearchFilterTypes.ts'),
    generateTypedSearchFilterTypes({ ...config, recordIds }).output)
  writeFileSync(join(outputFolder, 'TypedSearchColumnTypes.ts'),
    generateTypedSearchColumnTypes({ ...config, recordIds }).output)
  writeFileSync(join(outputFolder, 'TypedSearchColumnNames.ts'),
    generateTypedSearchColumnNames({ ...config, recordIds }).output)
  writeFileSync(join(outputFolder, 'TypedSearchFilterNames.ts'),
    generateTypedSearchFilterNames({ ...config, recordIds }).output)
  writeFileSync(join(outputFolder, 'TypedSearchFilterTypes.ts'),
    generateTypedSearchFilterTypes({ ...config, recordIds }).output)
  writeFileSync(join(outputFolder, 'TypedSearchJoinTypes.ts'),
    generateTypedSearchJoinTypes({ ...config, recordIds }).output)

}


function generateSearchTypesOperatorsSupport(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
/** Field Search Operator Support type definitions,. */
export interface SearchTypesOperatorsSupport {${fieldTypeOperatorMetadata.map(id => {
    return `
${indent()}${id.fieldType}?: ${id.operators.map(o => `'${o}'`).join(' | ')};
`.trim()
  }).join(`\n${indent()}`)}
}`.trim()
  return { output }
}


function generateTypedSearchFilterTypes(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
import { ${config.recordIds.map(id => `${id}SearchFilterTypes`).join(', ')} } from './index';
/** Record Type - Field Search Filter type definitions. */
export interface TypedSearchFilterTypes {
  ${config.recordIds.map(id => `
${indent()}${id}: ${id}SearchFilterTypes;
`.trim()
  ).join(`\n${indent()}`)}
}`.trim()
  return { output }
}

function generateTypedSearchJoinTypes(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
import { ${config.recordIds.map(id => `${id}SearchJoinTypes`).join(', ')} } from './index';
/** Record Type - Field Search Join type definitions. */
export interface TypedSearchJoinTypes {
  ${config.recordIds.map(id => `
${indent()}${id}: ${id}SearchJoinTypes;
`.trim()
  ).join(`\n${indent()}`)}
}`.trim()
  return { output }
}

function generateTypedSearchColumnTypes(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
import { ${config.recordIds.map(id => `${id}SearchColumn`).join(', ')} } from './index';
/** Record Type - Field Search Column type definitions. */
export interface TypedSearchColumnTypes {
  ${config.recordIds.map(id => `
${indent()}${id}: ${id}SearchColumn;
`.trim()
  ).join(`\n${indent()}`)}
}`.trim()
  return { output }
}

function generateTypedSearchColumnNames(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
import { ${config.recordIds.map(id => `${id}SearchColumn `).join(', ')} } from './index';
/** Record Type - Field Search Column names definitions. */
export interface TypedSearchColumnNames {
${config.recordIds.map(id => {
    return `
${indent()}${id}: Required<${id}SearchColumn>;
`.trim()
  }).join(`\n${indent()}`)}
}`.trim()
  return { output }
}


function generateTypedSearchFilterNames(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
import { ${config.recordIds.map(id => `${id}SearchFilter`).join(', ')} } from './index';
/** Record Type - Field Search Filter names definitions. */
export interface TypedSearchFilterNames {
${config.recordIds.map(id => `
${indent()}${id}: Required<${id}SearchFilter>;
`.trim()
  ).join(`\n${indent()}`)}
}`.trim()
  return { output }
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

