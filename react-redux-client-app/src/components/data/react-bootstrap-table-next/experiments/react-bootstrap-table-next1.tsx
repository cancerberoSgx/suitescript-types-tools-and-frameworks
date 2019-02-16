import * as React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { array } from '../../../../utils/misc';

const products = array(20).map(i => ({ id: i, name: Math.random() + '', price: Math.random }))
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

export const BootstrapTable1 = () =>
  <div>
    <BootstrapTable keyField='id' data={products} columns={columns} />
  </div>
