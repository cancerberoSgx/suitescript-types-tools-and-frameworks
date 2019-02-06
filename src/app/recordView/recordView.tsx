import { ReactLike } from "../../jsx/createElement";
import { FieldEditor } from './fieldEditor';
import { RecordViewProps, ValuedField, ValuedSublist } from './recordViewTypes';
import { SublistLinesEditor } from './sublistLineEditor';
import { Styles, Style, ClassRule } from '../../jsx/Style';

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


  const fieldTable: ClassRule = {
    selectorPostfix: ' td',
    border: '1px solid #aaaaaa',
    padding: '2px'
  }
  const sublistFieldTable: ClassRule = {
    ...fieldTable,
    fontSize: '0.95em',
    border: '1px solid #ededed'
  }
  const messageFromRedirect: ClassRule = {
    border: '2px solid green'
  }
  const { styles, classes } = Styles({ fieldTable, sublistFieldTable, messageFromRedirect })

  return <div>

    <Style classes={styles}></Style>

    {props.messageFromRedirect ? <p className={classes.messageFromRedirect}>{props.messageFromRedirect}</p> : <span></span>}

    <a href={props.renderLink({ routeName: 'mainPage', params: { ...commonParams } })}>Go back to Main Page</a>
    <a href={props.renderLink({ routeName: 'recordView', params: { ...commonParams } })}>As JSON</a>

    <h1>Record {name}, id: {id}</h1>
    <a href={showValuesToggleLink}>{props.seeValues ? 'Hide Field Values' : 'Show Field Values'}</a>
    <br></br>
    <a href={showAllFieldsToggleLink}>{props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields '}</a>
    <br></br>
    <a href={showSublistLinesToggleLink}>{props.showSublistLines ? 'Hide Sublists lines' : 'Show Sublists lines'}</a>

    <div>
      <h3>Fields</h3>
      <table className={classes.fieldTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Label</th>
            <th>Type</th>
            <th>Modifiers</th>
            {props.seeValues ? <th>Value Editor</th> : ''}
            {props.seeValues ? <th>Value Text</th> : ''}
          </tr>
        </thead>
        <tbody>
          {fields.map(f => <tr>
            <td>{f.id}</td>
            <td>{f.name}</td>
            <td>{f.type}</td>
            <td>{f.isReadonly ? ` readonly` : ''}{f.isMandatory ? ` mandatory` : ''}</td>
            {props.seeValues ? <td>
              <FieldEditor {...props} field={f}></FieldEditor>
            </td> : ''}
            {props.seeValues ? <td>
              {f.text}
            </td> : ''}
          </tr>)}
        </tbody>
      </table>
    </div>
    <div>
      <h3>Sublists:</h3>
      <ul className={classes.sublistFieldTable}>
        {sublists.map(s => <li><Sublist sublist={s} {...props}></Sublist></li>)}
      </ul>
    </div>
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




