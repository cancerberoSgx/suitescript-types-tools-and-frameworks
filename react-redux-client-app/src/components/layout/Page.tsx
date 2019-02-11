import styled from '../../styles/theme/definition'
import { em, modularScale, stripUnit } from 'polished';
import { minWidth } from '../../styles/media';


export const PagePadding = styled.div`
padding: 0.6em 0 2em 0;
  ${props => minWidth(props).md`padding: ${props.theme.containerPadding};`};
  `

export const Page = styled(PagePadding)`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;

`
