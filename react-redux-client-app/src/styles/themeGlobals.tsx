
import { Global, css } from '@emotion/core'
import * as React from 'react';
import { Theme } from './theme/definition';
import { maxWidth } from './media';
import { withTheme } from 'emotion-theming';

class C extends React.Component<{ theme?: Theme }> {
  render() {

    const p = { theme: this.props.theme!, asText: true }
    // const g = maxWidth(p).sm`border: 0`
    // const g2 = maxWidth({ ...p, asText: true }).sm`border: 0`
    // debugger

    // const s = `${maxWidth(p).md`margin-bottom: 6px`}`

    // const m = maxWidth

    return <Global
      styles={css`
h3 {
  ${maxWidth(p).md`margin-bottom: 8px`};
}

h4 {
  ${maxWidth(p).md`margin-bottom: 6px`};
}

h5 {
  font-size: 1.09em;
  ${maxWidth(p).md`margin-bottom: 4px`};
}

ul {
  ${maxWidth(p).md`
  padding-left: 0;
  `};
}

a {
  color: ${p.theme.colors.body};
}

body {
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

a {
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

img {
  max-width: 100%;
  position: relative;
  vertical-align: middle;
}

figure {
  margin: 2rem 0;
}

figcaption {
  font-size: 80%;
}

table {
  width: 100%;
  font-size: 85%;
  border-collapse: collapse;
}


`}
    />

  }
}

export const ThemeGlobals = withTheme(C)
