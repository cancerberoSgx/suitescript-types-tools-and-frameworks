import { SearchColumn } from '../../../pages/search/searchView';
import { typeIsNumeric, typeIsDateLike } from './types';
import { CellValue, Cell } from './searchResults';
const sort = 1;
type sortFunction<T extends CellValue> = (a: Cell<T>, b: Cell<T>, order: "asc" | "desc", rowA?: RowT<any, string>, rowB?: RowT<any, string>) => number;
export function getSortFunctionFor(c: SearchColumn): sortFunction<CellValue> {
  if (typeIsNumeric(c.type)) {
    return numberSortFunction as any;
  }
  else if(typeIsDateLike(c.type)){
    return dateSortFunction as any
  }
  else {
    return stringSortFunction
  }
}
const stringSortFunction: sortFunction<CellValue> = (a, b, order) => {
  const r =  (a.value + '').localeCompare(b.value + '');
  return order==='asc' ? r : (r*-1)
}

const dateSortFunction: sortFunction<Date> = (a, b, order) => {
  const r = (a.value && a.value.getTime && a.value.getTime()||0)>(b.value && b.value.getTime && b.value.getTime()||0)? 1: -1
  return order==='asc' ? r : (r*-1)
}
const numberSortFunction: sortFunction<number> = (a, b, order: "asc" | "desc") => (order === 'asc') ?
  ((a.value < b.value) ? -1 : 1) : ((a.value < b.value) ? 1 : -1);
