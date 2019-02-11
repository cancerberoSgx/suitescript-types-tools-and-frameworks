import { Theme, Breakpoints } from './theme/definition';
import { css } from 'emotion'

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
export function media<K extends { [k in keyof Theme['breakpoints']]: (...args: any[]) => string }>(props: { theme: Theme } | Breakpoints): K {
  const breakpoints: Breakpoints = (props as any).theme ? (props as any).theme.breakpoints : props as Breakpoints;

  return Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args: any[]) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `
    return acc
  }, {} as K)
}
