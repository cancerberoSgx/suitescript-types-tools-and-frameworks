import { SearchColumn } from '../../../pages/search/searchView';
import { CellValue, Cell } from './searchResults';
type formatter<T extends CellValue = CellValue> = (cell: Cell<T>, row: any, rowIndex: number, formatExtraData: any) => string;
const stringFormatter: formatter<string> = (cell, row, rowIndex, formatExtraData) => {
  return typeof cell === 'undefined' ? '' : typeof cell.label === 'undefined' ? typeof cell.value === 'undefined' ? `${cell}` : `${cell.value}` : `${cell.label}`;
};
export function getFormatterFor(c: SearchColumn): formatter {
  return stringFormatter as any;
}
