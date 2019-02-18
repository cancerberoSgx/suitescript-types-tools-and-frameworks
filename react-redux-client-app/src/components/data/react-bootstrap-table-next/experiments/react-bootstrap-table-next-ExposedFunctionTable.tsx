import * as React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { array } from '../../../../utils/misc';

const columns = [
  {
    dataField: 'id',
    text: 'Product ID'
  },
  {
    dataField: 'name',
    text: 'Product Name'
  },
  {
    dataField: 'price',
    text: 'Product Price'
  }
];

const products = array(200).map(i => ({ id: i, name: Math.random() + '', price: '$' + Math.random() }))

export class ExposedFunctionTable extends React.Component {
  node: any
  handleGetCurrentData = () => {
    console.log(this.node.table.props.data);
  }

  handleGetSelectedData = () => {
    console.log(this.node.selectionContext.state.selected);
  }

  handleGetExpandedData = () => {
    console.log(this.node.rowExpandContext.state.expanded);
  }

  handleGetCurrentPage = () => {
    console.log(this.node.paginationContext.currPage);
  }

  handleGetCurrentSizePerPage = () => {
    console.log(this.node.paginationContext.currSizePerPage);
  }

  handleGetCurrentSortColumn = () => {
    console.log(this.node.sortContext.state.sortColumn);
  }

  handleGetCurrentSortOrder = () => {
    console.log(this.node.sortContext.state.sortOrder);
  }

  handleGetCurrentFilter = () => {
    console.log(this.node.filterContext.currFilters);
  }

  render() {
    const expandRow = {
      renderer: (row: any) => (
        <div>
          <p>.....</p>
          <p>You can render anything here, also you can add additional data on every row object</p>
          <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
      ),
      showExpandColumn: true
    };
    return (
      <div>
        <button className="btn btn-default" onClick={this.handleGetCurrentData}>Get Current Display Rows</button>
        <button className="btn btn-default" onClick={this.handleGetSelectedData}>Get Current Selected Rows</button>
        <button className="btn btn-default" onClick={this.handleGetExpandedData}>Get Current Expanded Rows</button>
        <button className="btn btn-default" onClick={this.handleGetCurrentPage}>Get Current Page</button>
        <button className="btn btn-default" onClick={this.handleGetCurrentSizePerPage}>Get Current Size Per Page</button>
        <button className="btn btn-default" onClick={this.handleGetCurrentSortColumn}>Get Current Sort Column</button>
        <button className="btn btn-default" onClick={this.handleGetCurrentSortOrder}>Get Current Sort Order</button>
        <button className="btn btn-default" onClick={this.handleGetCurrentFilter}>Get Current Filter Information</button>
        <BootstrapTable
          bootstrap4
          ref={(n: any) => this.node = n}
          keyField="id"
          data={products}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory()}
          selectRow={{ mode: 'checkbox', clickToSelect: true }}
          expandRow={expandRow}
        />
        {/* <Code>{sourceCode}</Code> */}
      </div>
    );
  }
}
