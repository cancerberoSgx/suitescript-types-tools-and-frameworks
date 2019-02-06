import { ReactLike } from "../../jsx/createElement";
import { FieldEditor } from './fieldEditor';
import { RecordViewProps, ValuedField, ValuedSublist } from './recordViewTypes';
import { SublistLinesEditor } from './sublistLineEditor';

export const RecordView = (props: RecordViewProps) => {
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
    <a href={showAllFieldsToggleLink}>{props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields '}</a>
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

export const Field = (props: { field: ValuedField } & RecordViewProps) => {
  return <div>
    <strong>{props.field.name ? `${props.field.name}` : ''}</strong> - <em>{props.field.id}</em>{props.field.type ? `(${props.field.type})` : ''}{props.field.isReadonly ? ` - readonly` : ''}{props.field.isMandatory ? ` - mandatory` : ''}{props.seeValues ?<FieldEditor {...props}></FieldEditor> : <span></span>
    }
  </div>
}

export const Sublist = (props: { sublist: ValuedSublist } & RecordViewProps) => {
  return <div>
    {props.sublist.id}{props.sublist.name ? `, name: ${props.sublist.name}` : ''}
    , lines: #{props.sublist.lineCount}
      {props.showSublistLines ?
        <SublistLinesEditor {...props}></SublistLinesEditor> :
        <span></span>
      }
  </div>
}


