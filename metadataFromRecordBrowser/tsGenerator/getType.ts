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


// TODO: verify here https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3005172.html


export type Type = 'text' | 'integer' | 'checkbox' | 'date' | 'textarea' | 'select' | 'float' | 'richtext' | 'image' | 'period'|'currency'|'datetime'|'percent'|'currency2'|'multiselect'

export type JsType = 'string' | 'number' | 'boolean' | 'Date'

export type SearchFieldOperatorText = "contains" | "doesNotContain" | "doesNotStartWith" | "empty" | "hasKeywords" | "is" | "isNot" | "notEmpty" | "startsWith"
export const SearchFieldOperatorTextValues: SearchFieldOperators[] = ["contains", "doesNotContain", "doesNotStartWith", "empty", "hasKeywords", "is", "isNot", "notEmpty", "startsWith"]

export type SearchFieldOperatorNumber = "between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo"

export const SearchFieldOperatorNumberValues: SearchFieldOperators[] = ["between", "empty", "equalTo", "greaterThan", "greaterThanOrEqualTo", "lessThan", "lessThanOrEqualTo", "notBetween", "notEmpty", "notEqualTo", "notGreaterThan", "notGreaterThanOrEqualTo", "notLessThan", "notLessThanOrEqualTo"]

export type SearchFieldOperatorDate = 'after' | 'before' | 'isEmpty' | 'isNotEmpty' | 'notAfter' | 'notBefore' | 'notOnOrAfter' | 'notOnOrBefore' | 'notWithin' | 'on' | 'onOrAfter' | 'onOrBefore' | 'within'

export const SearchFieldOperatorDateValues: SearchFieldOperatorDate[] = ['after', 'before', 'isEmpty', 'isNotEmpty', 'notAfter', 'notBefore', 'notOnOrAfter', 'notOnOrBefore', 'notWithin', 'on', 'onOrAfter', 'onOrBefore', 'within']


export const fieldTypeOperatorMetadata: { fieldType: Type, jsType: JsType, operators: SearchFieldOperators[] }[] = [
  { fieldType: 'text', jsType: 'string', operators: SearchFieldOperatorTextValues },
  { fieldType: 'integer', jsType: 'number', operators: SearchFieldOperatorNumberValues },
  { fieldType: 'checkbox', jsType: 'boolean', operators: ['equalTo', 'is'] },
  { fieldType: 'date', jsType: 'Date', operators: SearchFieldOperatorDateValues },
  { fieldType: 'textarea', jsType: 'string', operators: SearchFieldOperatorTextValues },
  { fieldType: 'select', jsType: 'string', operators: ["anyOf", "noneOf"] },
  { fieldType: 'float', jsType: 'number', operators: SearchFieldOperatorNumberValues },
  { fieldType: 'richtext', jsType: 'string', operators: SearchFieldOperatorTextValues },
  { fieldType: 'image', jsType: 'string', operators: ["anyOf", "noneOf"] },
  { fieldType: 'currency', jsType: 'number', operators: SearchFieldOperatorNumberValues },
  { fieldType: 'datetime', jsType: 'Date', operators: SearchFieldOperatorDateValues },
  { fieldType: 'period', jsType: 'Date', operators: SearchFieldOperatorDateValues },
  { fieldType: 'percent', jsType: 'number', operators: SearchFieldOperatorNumberValues },
  { fieldType: 'currency2', jsType: 'number', operators: SearchFieldOperatorNumberValues },
  { fieldType: 'multiselect', jsType: 'number', operators: ['allOf', 'anyOf', 'noneOf', 'notAllOf']},

  //, clobtext,
// email, mmyydate, ccnumber
]

const fieldTypeToJsTypeMap: { [s: string]: JsType } = {}
fieldTypeOperatorMetadata.forEach(t => { fieldTypeToJsTypeMap[t.fieldType] = t.jsType })

export type SearchFieldOperators = "after" | "before" | "notAfter" | "notBefore" | "notOn" | 'notAllOf'| 'allOf'|"notOnOrAfter" | "notOnOrBefore" | "notWithin" | "on" | "onOrAfter" | "onOrBefore" | 'is' | "within" | "between" | "greaterThan" | "greaterThanOrEqualTo" | "lessThanOrEqualTo" | 'equalTo' | "notGreaterThan" | "notLessThanOrEqualTo" | "anyOf" | "noneOf" | "between" | "greaterThan" | "greaterThanOrEqualTo" | "lessThanOrEqualTo" | "notGreaterThan" | "notLessThanOrEqualTo" | "anyOf" | "noneOf" | "doesNotContain" | "doesNotStartWith" | "hasKeywords" | "isNot" | "between" | "greaterThan" | "greaterThanOrEqualTo" | "lessThanOrEqualTo" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo" | 'isEmpty' | 'isNotEmpty' | 'notEmpty' | 'startsWith' | 'contains' | 'empty' | 'lessThan' | 'notBetween';
