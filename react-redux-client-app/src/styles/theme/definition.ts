import styledEmotion, { CreateStyled } from '@emotion/styled'

export interface Theme {
  colors: {
    background: string
    body: string
    headings: string
    borders: string
    tableOdd: string
    brand: string
    black: string
    white: string
    attrs: {
      str: string
      agi: string
      int: string
    }
  }
  fonts: {
    body: string
    headings: string
    monospace: string
  }
  fontSizes: {
    h1: string
    h2: string
    h3: string
    h4: string
  }
  breakpoints: Breakpoints
  widths: {
    md: string
    lg: string
    xl: string
  }
  heights: {
    header: string
  }
  paddings: {
    small: Paddings
    large: Paddings
  }
}

export const styled: CreateStyled<Theme> = styledEmotion

interface Paddings {
  li: string
  container: string
}
export interface Breakpoints {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}


