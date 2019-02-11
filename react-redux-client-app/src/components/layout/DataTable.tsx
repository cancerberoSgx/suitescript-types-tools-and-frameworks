import * as React from 'react'
import styled from '../../styles/theme/definition'
import { media } from '../../styles/media';

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
        ${props => media(props).md`padding: 2px`}

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
        // padding: 0.5rem 1rem;
        padding: ${props => props.theme.containerPadding};
        ${props => media(props).md`padding: 2px`}
        // @media (max-width: ${props => props.theme.breakpoints.md}) {
          // padding: 0;
          // padding: ${props => props.theme.containerPadding};
        // }
        font-size: 0.85rem;
      }
    }
  }

`
