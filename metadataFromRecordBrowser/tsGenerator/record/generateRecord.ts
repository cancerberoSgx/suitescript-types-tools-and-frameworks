import { getType } from '../getType';
import { RecordMetadata } from '../metadataTypes';
import { indent } from '../util';

interface Config {
  data: RecordMetadata;
  generateAccessorsApi?: boolean
}
export function generateRecord(config: Config): string {
  const { data } = config;
  return `

${generateFields(config)}

${generateSublists(config)}

${config.generateAccessorsApi ? `
/** 
 * ${data.label} Record Definition.
 * Record's Internal Id: ${data.id}. 
 * Supports Custom Fields: ${data.supportCustomFields} 
 */
export interface ${data.id}Record extends TypedRecord<${data.id}Fields> {

}
` : ``}

${config.generateAccessorsApi ? `
export class ${data.id}RecordImpl extends TypedRecordImpl<${data.id}Fields> implements ${data.id}Record {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new ${data.id}FieldsImpl(this);
    // this._sublists = ${data.id}new FieldsImpl(this)
  }
}
` : ``}
`;
}

function generateFields(config: Config) {
  const {data} = config
  const interfaceMembers: string[] = [];
  const classMembers: string[] = [];
  data.fields.forEach(field => {
    const type = getType(field.type);
    interfaceMembers.push(`
  /** ${field.help} */
  ${field.id}${field.required ? '' : '?'}: ${type};`.trim());

  if(config.generateAccessorsApi){
    classMembers.push(`
  public get ${field.id}(): ${type}${field.required ? '' : ' | undefined'} {
    return this.typedRecord.nsRecord.getValue('${field.id}') as any;
  }
  public set ${field.id}(value: ${type}${field.required ? '' : ' | undefined'}) {
    this.typedRecord.nsRecord.setValue('${field.id}', value as any)
  }
  `.trim());
  }
  })
  return `
/** 
 * ${data.label} Fields Definition.
 * Record's Internal Id: ${data.id}. 
 * Supports Custom Fields: ${data.supportCustomFields} 
 */
export interface ${data.id}Fields {
${interfaceMembers.join(`\n${indent()}`)}
}

${config.generateAccessorsApi ? `
export class ${data.id}FieldsImpl implements ${data.id}Fields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  ${classMembers.join(`\n${indent()}`)}
}
`: ``}
`;
}



function generateSublists(config: Config) {
  const {data} = config
  // const interfaceMembers: string[] = [];
  // const classMembers: string[] = [];
  // data.sublists.forEach(s => {
  //   // const type = getType(s.type);
  //   interfaceMembers.push(`
  // /** ${s.id}: ${s.label} */
  // ${s.id}: `.trim());

  return `
/** 
 * ${data.label} Sublists Definition.
 * Record's Internal Id: ${data.id}. 
 * Supports Custom Fields: ${data.supportCustomFields} 
 */
export interface ${data.id}Sublists {
  ${data.sublists.map(s => `
  /** ${s.id}: ${s.label} */
  ${s.id}: {${s.fields.map(f => `
    /** ${f.id} - ${f.label} ${f.help} */
    ${f.id}${f.required? '?': ''}: ${getType(f.type)};`).join('')}
  }`).join('\n')}
}`

}


