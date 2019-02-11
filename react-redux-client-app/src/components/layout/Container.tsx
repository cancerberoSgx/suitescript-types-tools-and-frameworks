import styled, { Theme } from '../../styles/theme/definition'
import { maxWidth } from '../../styles/media';

export const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;

  ${props => maxWidth(props).xl`max-width: ${props.theme.widths.xl};`}

  ${props => maxWidth(props).lg`max-width: ${props.theme.widths.lg};`}

  ${props => maxWidth(props).md`

  overflow-x: hidden;

  & > div:first-child {
    overflow-x: scroll;
  }

  `}

`
