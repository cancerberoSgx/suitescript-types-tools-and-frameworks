import { css } from 'react-emotion'
import { media } from './media';
import { defaultBreakpoints } from './theme/commonValues';
// import { defaultBreakpoints } from './theme/commonValues';

export default css`
  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  a {
    color: inherit;
    text-decoration: none;

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

  h4 {
    ${media(defaultBreakpoints).md`margin-bottom: 6px`}
  }
  h5 {
    font-size: 1.09em;
    ${media(defaultBreakpoints).md`margin-bottom: 4px`}
  }

  ul {
    ${media(defaultBreakpoints).md`padding-left: 0`}
  }

`
