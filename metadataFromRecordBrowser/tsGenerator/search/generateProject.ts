import { FileConfig, ProjectConfig, readMetadata, getMetadataFilePathForRecord } from '../generateProject';
import { indent } from '../util';
import { getType } from '../getType';
import { fieldTypeOperatorMetadata } from "../sharedTypes";
import { writeFileSync, appendFileSync } from 'fs';
import { join } from 'path';

export function generateAfter(config: ProjectConfig & { recordIds: string[] }) {
  writeFileSync(join(config.outputFolder, 'searchTypesOperatorsSupport.ts'),
    generateSearchTypesOperatorsSupport(config).output)
  writeFileSync(join(config.outputFolder, 'TypedSearchFilterTypes.ts'),
    generateTypedSearchFilterTypes(config).output)
  writeFileSync(join(config.outputFolder, 'TypedSearchColumnTypes.ts'),
    generateTypedSearchColumnTypes(config).output)
  writeFileSync(join(config.outputFolder, 'TypedSearchColumnNames.ts'),
    generateTypedSearchColumnNames(config).output)
  writeFileSync(join(config.outputFolder, 'TypedSearchFilterNames.ts'),
    generateTypedSearchFilterNames(config).output)
  writeFileSync(join(config.outputFolder, 'TypedSearchFilterTypes.ts'),
    generateTypedSearchFilterTypes(config).output)
  writeFileSync(join(config.outputFolder, 'TypedSearchJoinTypes.ts'),
    generateTypedSearchJoinTypes(config).output)
}

export function generateFinal(config: ProjectConfig & { recordIds: string[] }) {
  appendFileSync(join(config.outputFolder, 'TypedSearchColumnValues.ts'),
    generateTypedSearchColumnValues(config).output)
  appendFileSync(join(config.outputFolder, 'TypedSearchFilterValues.ts'),
    generateTypedSearchFilterValues(config).output)
  appendFileSync(join(config.outputFolder, 'TypedSearchJoinValues.ts'),
    generateTypedSearchJoinValues(config).output)
}


function generateSearchTypesOperatorsSupport(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
/** Field Search Operator Support type definitions,. */
export interface SearchTypesOperatorsSupport {${fieldTypeOperatorMetadata.map(id => `
${indent()}${id.fieldType}?: ${id.operators.map(o => `'${o}'`).join(' | ')};
`.trim()
  ).join(`\n${indent()}`)}
}

export const SearchTypesOperatorSupportValues: {[name:string]: string[]} = {${fieldTypeOperatorMetadata.map(id => `
${indent()}${id.fieldType}: [${id.operators.map(o => `'${o}'`).join(', ')}]
`.trim()
  ).join(`,\n${indent()}`)}
};
`.trim()
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



function generateTypedSearchColumnValues(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
/** Field Search Column values definitions so they can be consumed dynamically not only as types. */
export const typedSearchColumnValues:  {[name: string]:{id: string, type: string ,label: string}[]}= {
${config.recordIds.map(id => `
${indent()}${id}: ${id}SearchColumnValues
`.trim()
  ).join(`,\n${indent()}`)}
};
`
  return { output }
}

function generateTypedSearchFilterValues(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
/** Field Search Filter values definitions so they can be consumed dynamically not only as types. */
export const typedSearchFilterValues:  {[name: string]:{id: string, type: string ,label: string}[]} = {
${config.recordIds.map(id => `
${indent()}${id}: ${id}SearchFilterValues
`.trim()
  ).join(`,\n${indent()}`)}
};
`
  return { output }
}

function generateTypedSearchJoinValues(config: ProjectConfig & { recordIds: string[] }) {
  const output = `
/** Field Search Join values definitions so they can be consumed dynamically not only as types. */
export const typedSearchJoinValues: {[name: string]:{id: string, description: string ,actualName: string}[]}  = {
${config.recordIds.map(id => `
${indent()}${id}: ${id}SearchJoinValues
`.trim()
  ).join(`,\n${indent()}`)}
};
`
  return { output }
}
