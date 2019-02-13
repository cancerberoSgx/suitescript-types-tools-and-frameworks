import { Theme, Breakpoints } from './theme/definition';
import { css } from '@emotion/core'
import { ClassNames } from '@emotion/core';
import { themeCommon } from './theme/themeCommon';

/**
Shortcut to write media queries with emotion. Supports emotion css() mode or plain CSS string.

Example in styled components

 ```
export const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  // for large screen we show fixed width container
  ${props => maxWidth(props).xl`max-width: ${props.theme.widths.xl};`}
  ${props => maxWidth(props).lg`max-width: ${props.theme.widths.lg};`}
`
```

Examples with <Global>:

```

import { Global, css } from '@emotion/core'
import { maxWidth, minWidth } from './media';
import { withTheme } from 'emotion-theming';
import { normalize } from './normalize';

class C extends React.Component<{ theme?: Theme }> {
  render() {
  // HEADS UP: when using maxWidth with global styles we need to output plain CSS code,
  // this is why asText is passed to its config:
    const p = { theme: this.props.theme!, asText: true }
    return <Global styles={css`
${normalizeCss}
ul {
  ${maxWidth(p).md`padding-left: 0;`};
}
a {
  color: ${p.theme.colors.body};
}`
    }/>
  }
}
export const ThemeGlobals = withTheme(C)
```
 */


interface MediaConfig {
  theme: Theme
  asText?: boolean
}

type BreakpointBuilder = { [k in keyof Theme['breakpoints']]: (...args: any[]) => string }
type QueryMap = { [type: string]: { text: BreakpointBuilder, className: BreakpointBuilder } }
let queryMap: QueryMap | undefined

export function maxWidth(props: { theme: Theme, asText?: boolean }): BreakpointBuilder {
  return queryMapWidthCss(props.theme)['max-width'][props.asText ? 'text' : 'className']
}

export function minWidth(props: MediaConfig): BreakpointBuilder {
  return queryMapWidthCss(props.theme)['min-width'][props.asText ? 'text' : 'className']
}

function queryMapWidthCss(theme: Theme): BreakpointBuilder {
  if (!queryMap) {
    const breakpoints: Breakpoints = theme && (theme as Theme).breakpoints || theme
    const types = ['max-width', 'min-width']
    queryMap = {}
    types.forEach(type => {
      queryMap![type] = queryMap![type] || {}
      queryMap![type].className = Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args: any[]) => css(`
@media (${type}: ${breakpoints[label]}) {
  ${css(...args)}
}
        `.trim())
        // debugger
        return acc
      }, {} as BreakpointBuilder)
      queryMap![type].text = Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args: any[]) => `
@media (${type}: ${breakpoints[label]}) {
  ${args.join('\n')}
}
        `.trim()
        return acc
      }, {} as BreakpointBuilder)
    })
  }

  return queryMap as any
}



// const facepaint = require('facepaint').default
// debugger
// const mq = facepaint(Object.keys(themeCommon.breakpoints).map(k => `@media(min-width: ${themeCommon.breakpoints[k]})`))

// console.log(mq)

// const myClassName = css(mq({
//   backgroundColor: 'hotpink',
//   textAlign: 'center',
//   width: ['25%', '50%', '75%', '100%'],
//   '& .foo': {
//     color: ['red', 'green', 'blue', 'darkorchid'],
//     '& img': {
//       height: [10, 15, 20, 25]
//     }
//   }
// }))


// console.log(myClassName.styles);
