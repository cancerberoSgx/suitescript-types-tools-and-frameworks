import { dateFilter, numberFilter, selectFilter, textFilter } from 'react-bootstrap-table2-filter';
import { SearchColumn } from '../../../pages/search/searchView';
import { typeIsNumeric, typeIsDateLike } from './types';
const filter = 1;
export function getFilterFor(c: SearchColumn): any {
  if (!c) {
    return undefined;
  }
  if (['text', 'textarea'].includes(c.type)) {
    return textFilter();
  }
  else if (typeIsDateLike(c.type)) {
    return dateFilter();
  }
  else if (['checkbox'].includes(c.type)) {
    return selectFilter({ options: [{ value: 'true', label: 'true' }, { value: 'false', label: 'false' }], withoutEmptyOption: true });
  }
  else if (typeIsNumeric(c.type)) {
    return numberFilter();
  }
  else if (['multiselect'].includes(c.type)) {
    return textFilter();
  }
  else {
    console.warn('SEARCHRESULTS2 - unknwon column type: ' + c.type);
    return textFilter();
  }
}
