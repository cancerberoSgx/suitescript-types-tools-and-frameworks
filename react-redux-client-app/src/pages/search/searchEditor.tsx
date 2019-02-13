import * as React from 'react';
import { SearchViewAllProps } from './searchView';

type P = SearchViewAllProps & {
  type: string,
  columns: Column[]
  filters: Filter[]
}
interface S {
  type: string
  userColumns: Column[]
  userFilter: Column[]
}

interface Column {
  id: string
}
interface Filter {
  id: string
}

export class SearchEditor extends React.Component<P, S> {
  constructor(p: P, s: S) {
    super(p, s)
    this.state = { type: p.type, userColumns: [], userFilter: [] }
  }
  render() {
    const { userColumns } = this.state
    return <div>
      <h3>Type: {this.state.type}</h3>
      <h3>Columns</h3>

      <button onClick={e => {
        this.setState({ ...this.state, userColumns: [...userColumns, { ...this.props.columns[0] }] })
      }}>New Column</button>

      <ul>{userColumns.map(c =>
        <li>
          <ColumnEditor {...this.props} column={c} />
        </li>)}
      </ul>
    </div>
  }
}


export class ColumnEditor extends React.Component<P & { column: Column }, {}> {
  constructor(p: P & { column: Column }, s: S) {
    super(p, s)
    this.state = {}
  }
  render() {
    return <div>{this.props.column.id}</div>
  }
}
