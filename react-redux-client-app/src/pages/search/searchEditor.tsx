import * as React from 'react';
import { SearchViewAllProps } from './searchView';

type P = SearchViewAllProps & { type: string }
interface S {
  type: string
  columns: Column[]
  filters: Filter[]
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
    this.state = { type: p.type, columns: [], filters: [] }
  }
  render() {
    const { columns, filters } = this.state
    return <div>
      <h3>Type: {this.state.type}</h3>
      <h3>Columns</h3>
      <button onClick={e => {
        this.setState({ ...this.state, columns: [...columns, { id: '__new__', }] })
      }}>New Column</button>
      <ul>{columns.map(c => <li><ColumnEditor {...this.props} column={c}></ColumnEditor></li>)}
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
