import { SearchColumn } from '../../../pages/search/searchView';
import { typeIsNumeric } from './types';
import { CellValue, Cell } from './searchResults';
const sort = 1;
type sortFunction<T extends CellValue> = (a: Cell<T>, b: Cell<T>, order: "asc" | "desc", rowA?: RowT<any, string>, rowB?: RowT<any, string>) => number;
export function getSortFunctionFor(c: SearchColumn): sortFunction<CellValue> {
  if (typeIsNumeric(c.type)) {
    return numberSortFunction as any;
  }
  else {
    return stringSortFunction as any;
  }
}
const stringSortFunction: sortFunction<CellValue> = (a, b, order: "asc" | "desc") => (a.value + '').localeCompare(b.value + '');
const numberSortFunction: sortFunction<number> = (a, b, order: "asc" | "desc") => (order === 'asc') ?
  ((a.value < b.value) ? -1 : 1) : ((a.value < b.value) ? 1 : -1);
