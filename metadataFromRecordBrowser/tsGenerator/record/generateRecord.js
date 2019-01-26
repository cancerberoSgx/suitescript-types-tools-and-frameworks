"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getType_1 = require("../getType");
const util_1 = require("../util");
function generateRecord(config) {
    const { data } = config;
    return `

${generateFields(data)}

/** 
 * ${data.label} Record Definition.
 * Record's Internal Id: ${data.id}. 
 * Supports Custom Fields: ${data.supportCustomFields} 
 */
export interface ${data.id}Record extends TypedRecord<${data.id}Fields> {

}

export class ${data.id}RecordImpl extends TypedRecordImpl<${data.id}Fields> implements ${data.id}Record {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new ${data.id}FieldsImpl(this);
    // this._sublists = ${data.id}new FieldsImpl(this)
  }
}

`;
}
exports.generateRecord = generateRecord;
function generateFields(data) {
    const interfaceMembers = [];
    const classMembers = [];
    data.fields.forEach(field => {
        const type = getType_1.getType(field.type);
        interfaceMembers.push(`
  /** ${field.help} */
  ${field.id}: ${type}${field.required ? '' : ' | undefined'};`.trim());
        classMembers.push(`
  public get ${field.id}(): ${type}${field.required ? '' : ' | undefined'} {
    return this.typedRecord.nsRecord.getValue('${field.id}') as any;
  }
  public set ${field.id}(value: ${type}${field.required ? '' : ' | undefined'}) {
    this.typedRecord.nsRecord.setValue('${field.id}', value as any)
  }
  `.trim());
    });
    return `
/** 
 * ${data.label} Fields Definition.
 * Record's Internal Id: ${data.id}. 
 * Supports Custom Fields: ${data.supportCustomFields} 
 */
export interface ${data.id}Fields {
${interfaceMembers.join(`\n${util_1.indent()}`)}
}

export class ${data.id}FieldsImpl implements ${data.id}Fields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  ${classMembers.join(`\n${util_1.indent()}`)}
}
`;
}
