import { ReactLikeChild } from '../../jsx/jsx';
import { Bind } from '../../jsx/util/Bind';
import { RouteHandlerParams } from '../app';
import { ClassRule, Styles, Style } from '../../jsx/Style';
import { printSource } from '../../introspection/printThisScopeSource';
import { ReactLike } from "../../jsx/createElement"

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
  height: '200px',
  overflow: 'scroll'
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
    <p>Hello dear {props.userName}! Welcome to my poor man's SuiteScript debugger.</p>
    <p>
      This is an experiment of mine (Sebastián Gurin) using JSX &amp; TypeScript and a sall server side pages application framework.
    </p>

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
  <div>Evaluated Code: <textarea className={classes.evaluatedCode}>{props.evaluatedCode}</textarea></div>: ''}
</div>
