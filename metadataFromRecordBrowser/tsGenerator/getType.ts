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
const notRecognized: {[k: string]: boolean} = {}


const fieldTypeToJsTypeMap: { [s: string]: JsType } = {}
fieldTypeOperatorMetadata.forEach(t => { fieldTypeToJsTypeMap[t.fieldType] = t.jsType })
