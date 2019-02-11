import { Theme, Breakpoints } from './theme/definition';
import { css } from 'emotion'
import { ClassNames } from '@emotion/core';

/**
 * Shortcut to write media queries. Example:

 ```
const Container = styled('div')`
  margin: 0 auto;
  width: 100%;

  ${props => media(props.theme).xl`
    max-width: ${props.theme.widths.xl};`}

  ${props => media(props.theme).lg`
    max-width: ${props.theme.widths.lg};`}

  ${props => media(props.theme).md`
    max-width: 100%;
    overflow: scroll;`}
`
```
 */


interface MediaConfig {
  // type: 'max-width' | 'min-width'
  theme: Theme
  asText?: boolean
}

export function maxWidth(props: { theme: Theme, asText?: boolean }): BreakpointBuilder {
  const q = queryMapWidthCss(props.theme)
  // debugger
  return q['max-width'][props.asText ? 'text' : 'className']
}

export function minWidth(props: MediaConfig): BreakpointBuilder {
  const q = queryMapWidthCss(props.theme)
  // debugger
  return q['min-width'][props.asText ? 'text' : 'className']
}



type BreakpointBuilder = { [k in keyof Theme['breakpoints']]: (...args: any[]) => string }
type QueryMap = { [type: string]: { text: BreakpointBuilder, className: BreakpointBuilder } }
let queryMap: QueryMap | undefined


function queryMapWidthCss(theme: Theme): BreakpointBuilder {
  if (!queryMap) {
    const breakpoints: Breakpoints = theme && (theme as Theme).breakpoints || theme
    const types = ['max-width', 'min-width']
    queryMap = {}
    types.forEach(type => {
      queryMap![type] = queryMap![type] || {}
      queryMap![type].className = Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args: any[]) => css`
          @media (${type}: ${breakpoints[label]}) {
            ${css(...args)}
          }
        `
        return acc
      }, {} as BreakpointBuilder)
      queryMap![type].text = Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args: any[]) => `
          @media (${type}: ${breakpoints[label]}) {
            ${args.join('\n')}
          }
        `
        return acc
      }, {} as BreakpointBuilder)
    })

  }

  return queryMap as any
}
