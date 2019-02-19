import { SearchColumn } from '../../../pages/search/searchView';

export function typeIsNumeric(t: string): boolean {
  return ['number', 'integer', 'float', 'select'].includes(t) || typeIsCurrency(t);
}
function typeIsCurrency(t: string): boolean {
  return ['currency', 'currency2'].includes(t);
}
export function getJsTypeNameFor(c: SearchColumn): string {
  if (typeIsNumeric(c.type)) {
    return 'number';
  }
  else if (typeIsDateLike(c.type)) {
    return 'Date';
  }
  //TODO: boolean, etc
  else
    return 'string';
}
export function typeIsDateLike(t: string): boolean {
  return ['date', 'datetime'].includes(t);
}
