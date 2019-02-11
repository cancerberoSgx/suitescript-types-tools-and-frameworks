import styled, { Theme } from '../../styles/theme/definition'
import { maxWidth } from '../../styles/media';

export const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  & > div .container-overflow-x{
    overflow-x: hidden;
  }
  & > div .container-overflow-x:hover {
    overflow-x: scroll;
  }

  ${props => maxWidth(props).xl`max-width: ${props.theme.widths.xl};`}

  ${props => maxWidth(props).lg`max-width: ${props.theme.widths.lg};`}

  ${props => maxWidth(props).md`

  `}

`
