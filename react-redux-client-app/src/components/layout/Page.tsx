import styled from '../../styles/theme/definition'
import { em, modularScale, stripUnit } from 'polished';

const Page = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.containerPadding};
    // padding: ${props => parseInt(stripUnit(props.theme.containerPadding) + '') * .3};
  }
  // @media (min-width: ${props => props.theme.breakpoints.xl}) {
    // padding: ${props => props.theme.containerPadding};
    // padding: ${props => parseInt(stripUnit(props.theme.containerPadding) + '') * .3};
  // }


  // padding:0;// ${props => props.theme.containerPadding};

  padding-bottom: 3rem;
`

export default Page
