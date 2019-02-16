/** @jsx */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { BootstrapTable1 } from '../../components/data/react-bootstrap-table-next/experiments/react-bootstrap-table-next1';
import { ExposedFunctionTable } from '../../components/data/react-bootstrap-table-next/experiments/react-bootstrap-table-next-ExposedFunctionTable';
import { ClearAllFilters } from '../../components/data/react-bootstrap-table-next/experiments/react-bootstrap-table-next-clearallfilters';
// import { RemoteAllTestContainer } from '../../experiments/react-bootstrap-table-next-remote-all';


// import { safeEval } from '../../utils/safeEval';
// const Evaluator = (props: {}) => <div>
//   <textarea id="code">{`
// ({
//   a: alert('hacker msg') || 'alert not shown',
//   b: 2
// })
//  `.trim()}
//   </textarea>
//   <button onClick={async e => {
//     const code = document.querySelector<HTMLTextAreaElement>('#code')!.value
//     const { result, error } = await safeEval<any>(code)
//     console.log(`safe eval result:`, result, 'error:', error)
//   }}>eval</button>
// </div>

// (async () => {
//   const { result, error } = await safeEval<number>(`Math.random()*Math.random()`)
//   console.log(`safe eval result: `, result, 'error: ', error)

//   // alternatively instead promises you can also use callback functions
//   safeEval<any>((`Math.random()*Math.random()`),
//     ({ result, error }) => console.log(`safe eval result: `, result, 'error: ', error))
// })()

export class ExampleLinks extends React.Component<{}, {}> {
  render() {
    return <div>

      {/* <Evaluator></Evaluator> */}123


      <h1>Example links</h1>
      <ul>
        <li>
          <Link to={`/recordView/commercecategory/2/{"seeValues"%3Atrue%2C"showSublistLines"%3Atrue}`}>
            /recordView/commercecategory/2/{'{'}"seeValues"%3Atrue%2C"showSublistLines"%3Atrue{'}'} (escaped JSON options)
          </Link>
        </li>
        <li>
          <Link to={`/recordView/commercecategory/2/{showSublistLines:true,seeValues:true}`}>
            /recordView/commercecategory/2/{'{'}showSublistLines:true,seeValues:true{'}'} (unescaped - non JSON options)
          </Link>
        </li>

        <li>
          <Link to={`/recordView/inventoryitem/465/{}`}>
            /recordView/item/2235/{'{}'}
          </Link>
        </li>
      </ul>

      <h3>react-bootstrap-table-next experiments</h3>
      <ul>
        {/* <li>
          BootstrapTable1
          <BootstrapTable1></BootstrapTable1></li>
        <li>
          ExposedFunctionTable
          <ExposedFunctionTable></ExposedFunctionTable></li> */}
        <li>
          ClearAllFilters
          <ClearAllFilters></ClearAllFilters></li>
        {/* <li>
          RemoteAll
          <RemoteAllTestContainer></RemoteAllTestContainer></li> */}
      </ul>
    </div>
  }
}
