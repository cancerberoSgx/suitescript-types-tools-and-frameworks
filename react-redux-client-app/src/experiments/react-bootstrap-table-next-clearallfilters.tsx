import * as React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { array } from '../utils/misc';

const products = array(200).map(i => ({ id: i, name: Math.random() + '', price: '$' + Math.random(), inStockDate: new Date(Math.random() * 1000000) }))

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
      pagination={paginationFactory()}
      columns={columns}
      filter={filterFactory()}
    />
  </div>
);
