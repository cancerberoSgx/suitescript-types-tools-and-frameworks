import { styled } from '../../styles/theme'

export const MultiLineTextEditor = (styled('span')`
width: 100%;
height: 50px;
display: block;
resize: both;
overflow: auto;
border: 1px solid ${props => props.theme.colors.borders};
`)
