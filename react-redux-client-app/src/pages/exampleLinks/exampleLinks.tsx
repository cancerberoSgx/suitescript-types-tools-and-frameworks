/** @jsx */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { safeEval } from '../../utils/safeEval';

export class ExampleLinks extends React.Component<{}, {}> {
  render() {





    return <div>

      <textarea id="code">1+1</textarea>
      <button onClick={async e => {
        // @ts-ignore
        const { result, error } = await safeEval<any>(document.querySelector<HTMLTextAreaElement>('#code').value)
        console.log(`safe eval result 1 ${result} error: ${error && error.message}`)
        // alternatively to promises you can also use callback functions
        safeEval<any>(document.querySelector<HTMLTextAreaElement>('#code')!.value,
          ({ result, error }) => console.log(`safe eval result 2 ${result} error: ${error && error.message}`))

      }}>safe eval text area code</button>
      <button onClick={async e => {
        const { result, error } = await safeEval<number>(`Math.random()*Math.random()`)
        console.log(`safe eval result 3 ${result} error: ${error && error.message}`)
      }}>safe eval Math.random()*Math.random()</button>



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
    </div>
  }
}
