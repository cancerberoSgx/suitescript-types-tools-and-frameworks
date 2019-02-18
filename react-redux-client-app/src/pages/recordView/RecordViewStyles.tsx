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

const dynamicStyle = (props: { color: string, theme: Theme }) => css`
  color: ${props.theme.colors.brand};
`

export const Container22 = styled.div`
  background: black;
  ${dynamicStyle};
  font-weight: 'bolder';
`
