import { ReactLike } from "../../jsx/createElement";
import { FieldEditor } from './fieldEditor';
import { Props, ValuedField, ValuedSublist } from './recordViewTypes';

export const RecordView = (props: Props) => {
  const { fields, sublists, id, name } = props.record

  const commonParams = { id: props.record.id, type: props.record.type, }

  const showValuesToggleLink = props.seeValues ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, seeValues: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, seeValues: 'true' } })

  const showAllFieldsToggleLink = props.showAllFields ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showAllFields: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showAllFields: 'true' } })

  const showSublistLinesToggleLink = props.showSublistLines ?
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showSublistLines: '' } }) :
    props.renderLink({ routeName: 'recordView', params: { ...commonParams, showSublistLines: 'true' } })

  return <div>

    {props.messageFromRedirect ? <p style={{ border: '2px solid green' }}>{props.messageFromRedirect}</p> : <span></span>}

    <a href={props.renderLink({ routeName: 'mainPage', params: { ...commonParams } })}>Go back to Main Page</a>

    <h1>Record {name}, id: {id}</h1>
    <a href={showValuesToggleLink}>{props.seeValues ? 'Hide Field Values' : 'Show Field Values'}</a>
    <br></br>
    <a href={showAllFieldsToggleLink}>{props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields'}</a>
    <br></br>
    <a href={showSublistLinesToggleLink}>{props.showSublistLines ? 'Hide Sublists lines' : 'Show Sublists lines'}</a>

    <div>
      <h3>Fields:</h3>
      <ul>
        {fields.map(f => <li><Field field={f} {...props}></Field></li>)}
      </ul>
    </div>
    <div>
      <h3>Sublists:</h3>
      <ul>
        {sublists.map(s => <li><Sublist sublist={s} {...props}></Sublist></li>)}
      </ul>
    </div>
  </div>
}

export const Field = (props: { field: ValuedField } & Props) => {
  return <span>
    <strong>{props.field.id}</strong> {props.field.type ? `, type: ${props.field.type}` : ''} {props.field.name ? `, name: ${props.field.name}` : ''}{props.field.isReadonly ? `, Readonly` : ''}{props.field.isMandatory ? `, Mandatory` : ''}
    {props.seeValues ? <span>. Value ({typeof props.field.value}) :
      {!props.field.isReadonly ?
        <FieldEditor {...props}></FieldEditor> :
        <span>${props.field.value + ''} (read only)</span>}</span> :
      <span></span>}
  </span>
}

export const Sublist = (props: { sublist: ValuedSublist } & Props) => {
  return <span>
    {props.sublist.id} {props.sublist.name ? `, name: ${props.sublist.name}` : ''}
    , lines: #{props.sublist.lineCount}
    {props.sublist.fields.length ? <span>

      {props.showSublistLines ? <span>
        <SublistLinesEditor {...props}></SublistLinesEditor> </span> :
        <span>
          Line fields:
  <ul style={{ display: 'inline' }}>{props.sublist.fields.map(f => <li>{f.name} id: {f.id}{f.type ? `, type: ${f.type}` : ''}{f.isMandatory ? `, Mandatory: ${f.isMandatory}` : ''}{f.isReadonly ? `, Readonly: ${f.isReadonly}` : ''}
          </li>)}</ul>
        </span>}
    </span>
      : <blockquote>No sublist fields found</blockquote>}
  </span>
}


const SublistLinesEditor = (props: { sublist: ValuedSublist } & Props) => {
  return <table>
    <thead><tr>{props.sublist.fields.map(f => <th>{f.id}{f.type ? ` (${f.type})` : ''}</th>)}</tr></thead>
    <tbody>
      {props.sublist.lines.map(line => <tr>
        {line.rows.map((row, i) =>
          <td>{row.text} {row.value} {row.field.type === 'select' ?
            <a href={props.renderLink({ routeName: 'findRecord', params: { id: row.value as any, type: row.field.id } })}>find</a> : ''}</td>
        )}
      </tr>
      )}
    </tbody>
  </table>
}



