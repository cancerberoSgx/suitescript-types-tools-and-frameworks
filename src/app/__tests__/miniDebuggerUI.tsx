import { ReactLikeChild } from '../../jsx/jsx';
import { Bind } from '../../jsx/util/Bind';
import { RouteHandlerParams } from '../app';
import { ClassRule, Styles, Style } from '../../jsx/Style';
import { printSource } from '../../introspection/printThisScopeSource';
import { ReactLike } from "../../jsx/createElement"
import { StatelessComponent } from '../../jsx/StatelessComponent';
import { StatefulComponent } from '../../jsx/StatefulComponent';
import { AvailableObject, availableObjects } from './miniDebuggerAvailableObjects';
import { DebuggerExample, sampleCode, examples } from './miniDebuggerSampleCode';

const editor: ClassRule = {
  border: '1px solid #aaaaaa',
  width: '100%',
  height: '300px'
};
const evaluatedCode: ClassRule = {
  border: '1px solid green',
  width: '100%',
  height: '200px'
};
const executionResults: ClassRule = {
  border: '1px solid blue',
  width: '100%',
  height: '300px',
  overflow: 'scroll',
  display: 'block'
};
const { styles, classes } = Styles({ editor, evaluatedCode, executionResults });

interface DebuggerProps extends RouteHandlerParams {
  userName?: string
  logs?: string[]
  errors?: string[]
  code: string
  evaluatedCode?: string
  refreshOnExecute?: boolean
}

export const Debugger = (props: DebuggerProps, children: ReactLikeChild[]) => {
  return <article>

    <Style classes={styles}></Style>

    <h1>Poor man's SuiteScript debugger </h1>
    <p>Hello dear {props.userName}! Welcome to my poor man's SuiteScript debugger. (<small>
      This is an experiment of mine (Sebastián Gurin) using JSX &amp; TypeScript and a small server side pages application framework of mine.
    </small>)</p>

    <DebuggerAvailableObjectsSelect availableObjects={availableObjects}></DebuggerAvailableObjectsSelect>
  
    <DebuggerSampleCode examples={examples}></DebuggerSampleCode>

    <Bind name="debugger-editor">
      <textarea className={classes.editor}>{props.code}</textarea>
    </Bind>

    <Bind name="debugger-editor" data={{ currentParams: props.currentParams }}>
      <button id="dataKnower" onClick={e => {
        const code = getBindInputValue<string>('debugger-editor') || '';
        const currentParams = getBindDataOrThrow<DebuggerProps>('debugger-editor');
        const params = { ...currentParams, code: encodeURIComponent(code) };
        // if (params.refreshOnExecute) {
        //   location.href = buildRouteUrl({
        //     routeName: 'debugger',
        //     params: { ...params, refreshOnExecute: true }
        //   })
        // }
        // else {
        fetchAndRenderHtml({
          routeName: 'debugger',
          params: { ...params, refreshOnExecute: false },
          selector: '#debuggerExecutionResults'
        });
        // }
      }}>Execute</button>
    </Bind>

    <DebuggerExecutionResults {...props}></DebuggerExecutionResults>
  </article>;
};

export const DebuggerExecutionResults = (props: DebuggerProps) => <div id="debuggerExecutionResults" >
  <table className={classes.executionResults}>
    <tr><td>Logs: <ul>{props.logs && props.logs.map(l => <li>{l}</li>)}
    </ul></td>
      <td>Errors: <ul>{props.errors && props.errors.map(l => <li>{l}</li>)}
      </ul></td>
    </tr>
  </table>
  {props.evaluatedCode ?
    <div>Evaluated Code: <textarea className={classes.evaluatedCode}>{props.evaluatedCode.trim()}</textarea></div> : ''}
</div>

export class DebuggerAvailableObjectsSelect extends StatefulComponent<{
  availableObjects: AvailableObject[]
}, {}> {
  render() {
    return <div>Extra functions and Objects:
      <select onChange={e => {
        const objectName = e.currentTarget.selectedOptions[0].value
        if (objectName) {
          fetchAndRenderHtml({
            routeName: 'debuggerAvailableObject',
            params: { objectName },
            selector: '#DebuggerAvailableObjectsResult'
          })
        }
        else {
          document.getElementById('#DebuggerAvailableObjectsResult')!.innerHTML = ''
        }
      }}>
        <option selected={true}>Select one</option>
        {this.props.availableObjects.map(o =>
          <option value={o.name}>{o.name}
          </option>)}
      </select>
      <div id="DebuggerAvailableObjectsResult"></div>
    </div>
  }
}

export class DebuggerAvailableObject extends StatefulComponent<{ object: AvailableObject }, {}> {
  render() {
    const o = this.props.object
    return <div>
      <p>Name: <strong>{o.name}</strong></p>
      {o.doc ? <p>Description: {o.doc}</p> : ''}
      {o.type ? <p>Type:<pre>{o.type.trim().replace(/\n/gmi, '<br/>')}</pre></p> : ''}
    </div>
  }
}


export class DebuggerSampleCode extends StatefulComponent<{ examples: DebuggerExample[], selectedExample?: string }, {}> {
  render() {
    return <div>Examples:
    <select onChange={e => {
      const selectedExample = e.currentTarget.selectedOptions[0].value
      const currentParams = getBindDataOrThrow<DebuggerProps>('debugger-editor');
      const params = { ...currentParams, code: '', selectedExample };
      if (selectedExample) {
        location.href = buildRouteUrl({
              routeName: 'debugger',
              params
            })
      }
      else {
        document.getElementById('#DebuggerExampleInfo')!.innerHTML = ''
      }
    }}>
      <option selected={!this.props.selectedExample}>Select one</option>
      {this.props.examples.map(o =>
        <option value={o.name} selected={this.props.selectedExample===o.name}>{o.name}</option>)}
    </select>
    <div id="DebuggerExampleInfo"></div>
  </div>
  }
}
