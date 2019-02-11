import * as React from 'react'
import styled from '../../styles/theme/definition'
import { maxWidth, minWidth } from '../../styles/media';

interface DataTableProps {
  columns: string[]
  widths?: string[]
}

const DataTable: React.SFC<DataTableProps> = ({ children, widths, columns }) => (
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
    <tbody>{children}</tbody>
  </Wrapper>
)

export default DataTable

const Wrapper = styled('table')`
  margin-bottom: 0;
  border-top: 1px solid ${props => props.theme.colors.borders};
  border-bottom: 1px solid ${props => props.theme.colors.borders};

  thead {
    tr {
      th {
        text-align: left;
        border-bottom: 2px solid ${props => props.theme.colors.borders};
        // padding: 1rem;

        padding: ${props => props.theme.containerPadding};
        ${props => maxWidth(props).md`padding: 2px`}

        // @media (max-width: ${props => props.theme.breakpoints.md}) {
        //   padding: 0;
        //   // padding: ${props => props.theme.containerPadding};
        // }
      }
    }
  }

  tbody {
    tr {
      border-top: 1px solid ${props => props.theme.colors.borders};

      &:nth-child(even) {
        background: ${props => props.theme.colors.tableOdd};
      }

      td {
        ${props => maxWidth(props).md`
          padding: 0.1em;
          font-size: 0.81rem;`}
        ${props => minWidth(props).md`padding: 0.5em;
        font-size: 0.89rem;`}
      }
    }
  }

`
