import * as React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { array } from '../../../../utils/misc';
import { Column } from 'react-bootstrap-table-next';

const products = array(200).map(i => ({ id: i, name: Math.random() + '', price: '$' + Math.random(), inStockDate: new Date(Math.random() * 1000000) }))

let nameFilter: any;
let priceFilter: any;
let stockDateFilter: any;

const columns: Column[] = [
  {
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name',
    filter: textFilter({
      getFilter: filter => {
        nameFilter = filter;
      }
    })
  } as Column

  , {
    dataField: 'price',
    text: 'Price',
    filter: textFilter({
      getFilter: filter => {
        priceFilter = filter;
      }
    })
  }, {
    dataField: 'inStockDate',
    text: 'InStock Date',
    formatter: cell => cell.toString(),
    filter: dateFilter({
      getFilter: (filter: any) => {
        stockDateFilter = filter;
      }
    })
  }] as Column[]

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
      pagination={paginationFactory({sizePerPage: 5})}
      columns={columns}
      filter={filterFactory()}
    />

    <BootstrapTable
      keyField="id"
      data={products}
      columns={columns}
      pagination={paginationFactory({sizePerPage: 5})}
      cellEdit={cellEditFactory({
        mode: 'click',
        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
        beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
        afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!'); }
      })}
    />


  </div>
);
