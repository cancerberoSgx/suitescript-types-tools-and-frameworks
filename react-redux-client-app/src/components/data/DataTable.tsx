import * as React from 'react'
import { styled } from '../../styles/theme'
import { maxWidth, minWidth } from '../../styles/media';
import { ReactNodeArray } from 'prop-types';

interface DataTableProps extends React.HTMLAttributes<HTMLTableElement> {
  columns: string[]
  widths?: string[]
  children: React.ReactNode
  showFilter?: boolean
}
interface S {
  filter?: string
}

export class DataTable extends React.Component<DataTableProps, S>{
  state: S = {}
  render() {
    const { columns, widths, showFilter } = this.props
    const children: ReactNodeArray = asNodeArray(this.props.children)
    return <div>
      {showFilter && <label>Filter: <input value={this.state.filter} onChange={e => {
        this.setState({ ...this.state, filter: e.currentTarget.value })
      }}></input></label>}
      <Wrapper>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i} style={widths && widths[i] ? { width: widths[i] } : undefined}>
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{this.state.filter ? children.filter(c => extractText(c).toLowerCase().includes(this.state.filter!)) : children}</tbody>
      </Wrapper>

    </div>
  }
}
function asNodeArray(c: React.ReactNode) {
  return Array.isArray(c) ? c : [c]
}
function extractText(c: React.ReactNode): string {
  // debugger
  if (!c) {
    return ''
  }
  else if (typeof c === 'string') {
    return c
  }
  else if (Array.isArray(c)) {
    return c.map(extractText).join(' ')
  }
  else if ((c as any).props && (c as any).props.children) {
    return asNodeArray((c as any).props.children).map(extractText).join(' ')
  }
  else {
    return ''
    // return 'OTHEROTHEROTHEROTHER' + typeof c + c + Object.keys(c)
  }
  // return typeof c === 'string' ? c : !c ? '' : asNodeArray(c).map(extractText).join(' ') + ' ' + ((c as any).props && (c as any).props.children) ? asNodeArray((c as any).props.children).map(extractText).join(' ') : ''
}

const Wrapper = styled('table')`
margin-bottom: 0;
  border-top: 1px solid ${props => props.theme.colors.borders};
  border-bottom: 1px solid ${props => props.theme.colors.borders};

  thead {
    tr {
      th {
        text-align: left;
        border-bottom: 2px solid ${props => props.theme.colors.borders};
        padding: 0.9em;
        ${props => maxWidth(props).md`padding: 0.1em; font-size: 0.81rem;`}
        ${props => minWidth(props).md`padding: 0.5em; font-size: 0.89rem;`}
      }
    }
  }

  tbody {
    tr {
      border-top: 1px solid ${props => props.theme.colors.borders};
      // &:nth-child(even) {
      //   background: ${props => props.theme.colors.tableOdd};
      // }
      td {
        ${props => maxWidth(props).md`padding: 0.1em; font-size: 0.81rem;`}
        ${props => minWidth(props).md`padding: 0.5em; font-size: 0.89rem;`}
      }
    }
  }

`
