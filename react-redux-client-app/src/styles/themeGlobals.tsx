
import { Global, css } from '@emotion/core'
import * as React from 'react';
import { Theme } from './theme/definition';
import { maxWidth, minWidth } from './media';
import { withTheme } from 'emotion-theming';
import { normalize } from './normalize';

class C extends React.Component<{ theme?: Theme }> {
  render() {

    const p = { theme: this.props.theme!, asText: true }

    return <Global
      styles={css`

${normalize}

body {
  width: 100%;
  overflow-x: hidden;
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

h3 {
  ${maxWidth(p).md(`margin-bottom: 8px`)};
}

h4 {
  ${maxWidth(p).md(`margin-bottom: 6px`)};
}

h5 {
  font-size: 1.09em;
  ${maxWidth(p).md(`margin-bottom: 4px`)};
}

ul {
  margin-left: ${p.theme.paddings.large.container};
  ${maxWidth(p).md(`padding-left: 0;`)};
  ${minWidth(p).md(`padding-left: 0.7em;`)};
}

li {
  ${maxWidth(p).md(`padding: ${p.theme.paddings.small.li};`)};
}

a {
  color: ${p.theme.colors.body};
}

`}
    />

  }
}

export const ThemeGlobals = withTheme(C)
