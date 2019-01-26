export function getType(t: Type): string {
  if (types[t]) {
    return types[t];
  }
  else {
    console.log('type not recognized: ' + t);
    return 'string';
  }
}
var types = {
  text: 'string',
  integer: 'number',
  checkbox: 'boolean',
  date: 'Date',
  textarea: 'string',
  select: 'string',
  float: 'number',
  richtext: 'string',
  image: 'string'
};
export type Type = 'text' | 'integer' | 'checkbox' | 'date' | 'textarea' | 'select' | 'float' | 'richtext' | 'image';
