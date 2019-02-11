import styled, { Theme } from '../../styles/theme/definition'
import { media } from '../../styles/media';

const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;

  ${props => media(props).xl`max-width: ${props.theme.widths.xl};`}

  ${props => media(props).lg`max-width: ${props.theme.widths.lg};`}

  ${props => media(props).md`overflow-x: hidden;`}

  & > div {
    overflow-x: scroll;
  }
`

export default Container
