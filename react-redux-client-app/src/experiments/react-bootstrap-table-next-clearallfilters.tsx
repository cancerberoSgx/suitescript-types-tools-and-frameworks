import * as React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import '../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import '../../node_modules/react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import '../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.css';
import { array } from '../utils/misc';

const products = array(200).map(i => ({ id: i, name: Math.random() + '', price: Math.random, inStockDate: new Date(Math.random() * 1000000) }))

let nameFilter: any;
let priceFilter: any;
let stockDateFilter: any;

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter({
    getFilter: (filter: any) => {
      nameFilter = filter;
    }
  })
}, {
  dataField: 'price',
  text: 'Price',
  filter: textFilter({
    getFilter: (filter: any) => {
      priceFilter = filter;
    }
  })
}, {
  dataField: 'inStockDate',
  text: 'InStock Date',
  formatter: (cell: any) => cell.toString(),
  filter: dateFilter({
    getFilter: (filter: any) => {
      stockDateFilter = filter;
    }
  })
}];

const handleClick = () => {
  nameFilter('');
  priceFilter('');
  stockDateFilter();
};

export const ClearAllFilters = () => (
  <div>
    <button className="btn btn-lg btn-primary" onClick={handleClick}> Clear all filters </button>
    <BootstrapTable
      keyField="id"
      data={products}
      columns={columns}
      filter={filterFactory()}
    />
  </div>
);
