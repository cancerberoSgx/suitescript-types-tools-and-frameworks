import { buildCodeToEval, evalCode } from './miniDebuggerEvalCode';
import * as ReactLike from '../../jsx/createElement'
import * as objectExplorer from '../../introspection/objectExplorer';
import { printNamespace } from '../../introspection/printThisScopeSource';


const code = `LOG(ReactLike.render(testFFF('seba')))
//LOG(JSON.stringify(objectExplorer.getObjectValueTypes(this)))`

const { logs, errors, evaluatedCode } = evalCode(code, [testFFF.toString(), ])

console.log('\n\n\n' + evaluatedCode);
console.log(errors.length==0 ? 'NO ERRORS' : errors.map(e => e).join('\n\n\n'))
console.log(logs.join('\n * '))

// console.log(objectExplorer.getObjectKeys(objectExplorer), objectExplorer)

function testFFF(s: string){
  return <div>hello {s}</div>
}