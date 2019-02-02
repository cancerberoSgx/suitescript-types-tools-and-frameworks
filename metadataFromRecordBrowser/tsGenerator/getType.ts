import { Type, JsType, fieldTypeOperatorMetadata } from './sharedTypes';

export function getType(t: Type): string {
  if (fieldTypeToJsTypeMap[t]) {
    return fieldTypeToJsTypeMap[t];
  }
  else {
    if(!notRecognized[t]){
      console.log('type not recognized: ' + t);
      notRecognized[t] = true
    }
    return 'string';
  }
}
export function getTypeForSearchValue(t: Type): string {
  let tt:string
  if (fieldTypeToJsTypeMap[t]) {
    tt= fieldTypeToJsTypeMap[t];
  }
  else {
    if(!notRecognized[t]){
      console.log('type not recognized: ' + t);
      notRecognized[t] = true
    }
    tt= 'string';
  }

  return tt==='boolean' ? tt : 'string'
}
const notRecognized: {[k: string]: boolean} = {}


const fieldTypeToJsTypeMap: { [s: string]: JsType } = {}
fieldTypeOperatorMetadata.forEach(t => { fieldTypeToJsTypeMap[t.fieldType] = t.jsType })
