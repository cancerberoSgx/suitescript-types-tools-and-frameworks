/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { styled, Theme } from '../../styles/theme'


export const RecordFieldInputEditorBase = (props: { theme: Theme, as?: string }) => css({ width: '100%' })

export const MultiLineTextEditor = (props: { theme: Theme, as?: string }) => css`
height: 50px;
resize: both;
overflow: auto;
border: 1px solid ${props.theme.colors.borders};
`
//   {...props}
// ></RecordFieldInputEditorBase>

// export const RecordFieldInputEditorBase = (props: { theme: Theme }) => css`
// width: 100%;
// `

// export const MultiLineTextEditor = (props: { theme: Theme }) => css`
// ${};
// height: 50px;
// resize: both;
// overflow: auto;
// border: 1px solid ${props.theme.colors.borders};
// `



// export const RecordFieldInputEditorContainer = css`
// width: 100%;
// `

const dynamicStyle = (props: { color: string, theme: Theme }) =>
  css`
    color: ${props.theme.colors.brand};
  `

export const Container22 = styled.div`
background: black;
  ${dynamicStyle};
  font-weight: 'bolder';
`


// import styled2 from '@emotion/styled'

// const Button = styled.button`
//   color: hotpink;
// `

// const c = <Button
//   as="a"
//   href="https://github.com/emotion-js/emotion"
// >
//   Emotion on GitHub
//   </Button>
