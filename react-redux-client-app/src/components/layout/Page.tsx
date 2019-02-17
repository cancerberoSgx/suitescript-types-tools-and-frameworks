import { minWidth } from '../../styles/media';
import { styled } from '../../styles/theme';
import * as React from 'react'


export const PagePaddingTopLeft = styled.div`
  padding: ${props => props.theme.paddings.small.container} 0 0 ${props => props.theme.paddings.small.container};
  // ${props => minWidth(props).md`padding: ${props.theme.paddings.large.container} 0 0 ${props.theme.paddings.large.container}`};
  `

export const PagePadding = styled(PagePaddingTopLeft)`
  padding-bottom: ${props => props.theme.paddings.small.container}
  padding-right: ${props => props.theme.paddings.small.container}
  ${props => minWidth(props).md`
  padding-bottom: ${props.theme.paddings.large.container};
  padding-right: ${props.theme.paddings.large.container};
`};
    `

    export    function Page(props: any) {

        return (
          <PagePadding className="page" css={{
            display: 'flex',
            'flex-direction': 'row',
            padding: 'props.theme.paddings.small.container 0 0 props.theme.paddings.small.container',
            flex: '1 1 auto'}}>
            {props.children}
          </PagePadding>
        )
      }

// export const Page = styled(PagePadding)`
//   display: flex;
//   flex-direction: row;
//   flex: 1 1 auto;

// `
