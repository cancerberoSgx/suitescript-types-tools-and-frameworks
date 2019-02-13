import { styled } from '../../styles/theme'
import { maxWidth, minWidth } from '../../styles/media';

export const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  & > div .container-overflow-x{
    overflow-x: scroll;
  }

  ${props => maxWidth(props).xl`max-width: ${props.theme.widths.xl};`}

  ${props => maxWidth(props).lg`max-width: ${props.theme.widths.lg};`}

  ${props => minWidth(props).md`

  overflow-x: hidden;
  & > div .container-overflow-x{
    overflow-x: hidden;
  }
  & > div .container-overflow-x:hover, & > div .container-overflow-x:focus {
    overflow-x: scroll;
  }

  `}

`
