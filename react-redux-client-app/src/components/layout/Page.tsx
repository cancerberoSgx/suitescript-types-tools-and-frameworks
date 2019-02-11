import styled from '../../styles/theme/definition'
import { em, modularScale, stripUnit } from 'polished';
import { minWidth } from '../../styles/media';


export const PagePaddingTopLeft = styled.div`
padding: 0.6em 0 0 0.4px;
  ${props => minWidth(props).md`padding: ${props.theme.containerPadding} 0 0 ${props.theme.containerPadding}`};
  `

export const PagePadding = styled(PagePaddingTopLeft)`
  padding-bottom: 0.3em;
  padding-right: 0.3em
  ${props => minWidth(props).md`
  padding-bottom: ${props.theme.containerPadding};
  padding-right: ${props.theme.containerPadding};
`};
    `

export const Page = styled(PagePadding)`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;

`
