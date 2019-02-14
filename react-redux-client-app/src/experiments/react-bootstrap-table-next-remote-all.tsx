import * as React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter, Comparator } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { array } from '../utils/misc';
import PropTypes from 'prop-types';
import overlayFactory from 'react-bootstrap-table2-overlay';


let products: any = array(200).map(i => ({ id: i, name: Math.random() + '', price: '$$' + Math.random() }))

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter({
    defaultValue: '8'
  }),
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter(),
  sort: true
}];

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

const cellEditProps = {
  mode: 'click'
};

const NoDataIndication = () => (
  <div className="spinner">
    NO DATA

  <p>No dataaaaa</p>
  </div>
);

const RemoteAll = (props: BootstrapTableProps) => {

  const { data, page, sizePerPage, onTableChange, totalSize, loading } = props
  return <div>
    <BootstrapTable
      remote
      keyField="id"
      loading={loading}
      data={data}
      columns={columns}
      defaultSorted={defaultSorted}
      filter={filterFactory()}
      pagination={paginationFactory({ page, sizePerPage, totalSize })}
      cellEdit={cellEditFactory(cellEditProps)}
      onTableChange={onTableChange}
      overlay={overlayFactory({ spinner: true, background: 'rgba(112,192,152,0.3)', })}
      noDataIndication={() => <NoDataIndication />}
    />
  </div>
}

RemoteAll.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  totalSize: PropTypes.number.isRequired,
  sizePerPage: PropTypes.number.isRequired,
  onTableChange: PropTypes.func.isRequired
};

export class RemoteAllTestContainer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 1,
      loading: false,
      data: products.slice(0, 10),
      totalSize: products.length,
      sizePerPage: 10
    };
    this.handleTableChange = this.handleTableChange.bind(this);
  }

  handleTableChange = (type: any, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }: any) => {
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      // Handle cell editing
      if (type === 'cellEdit') {
        const { rowId, dataField, newValue } = cellEdit;
        products = products.map((row: any) => {
          if (row.id === rowId) {
            const newRow = { ...row };
            newRow[dataField] = newValue;
            return newRow;
          }
          return row;
        });
      }
      let result = products;

      // Handle column filters
      result = result.filter((row: any) => {
        let valid = true;
        for (const dataField in filters) {
          const { filterVal, filterType, comparator } = filters[dataField];

          if (filterType === 'TEXT') {
            if (comparator === Comparator.LIKE) {
              valid = row[dataField].toString().indexOf(filterVal) > -1;
            } else {
              valid = row[dataField] === filterVal;
            }
          }
          if (!valid) break;
        }
        return valid;
      });
      // Handle column sort
      if (sortOrder === 'asc') {
        result = result.sort((a: any, b: any) => {
          if (a[sortField] > b[sortField]) {
            return 1;
          } else if (b[sortField] > a[sortField]) {
            return -1;
          }
          return 0;
        });
      } else {
        result = result.sort((a: any, b: any) => {
          if (a[sortField] > b[sortField]) {
            return -1;
          } else if (b[sortField] > a[sortField]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState(() => ({
        page,
        loading: false,
        data: result.slice(currentIndex, currentIndex + sizePerPage),
        totalSize: result.length,
        sizePerPage
      }));
    }, 2000);
    this.setState({ loading: true })
  }

  render() {
    const { data, sizePerPage, page, loading }: any = this.state;
    return (
      <RemoteAll
        data={data}
        page={page}
        loading={loading}
        sizePerPage={sizePerPage}
        totalSize={(this.state as any).totalSize}
        onTableChange={this.handleTableChange}
      />
    );
  }
}
