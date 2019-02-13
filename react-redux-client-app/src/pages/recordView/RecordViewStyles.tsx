import { styled } from '../../styles/theme'



export const RecordFieldInputEditorBase = styled('span')`
width: 100%;
`
export const RecordFieldInputEditorContainer = styled('span')`
width: 100%;
`

export const MultiLineTextEditor = styled(RecordFieldInputEditorBase)`
height: 50px;
resize: both;
overflow: auto;
border: 1px solid ${props => props.theme.colors.borders};
`
