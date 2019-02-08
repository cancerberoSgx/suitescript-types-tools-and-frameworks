import { buildCodeToEval, evalCode } from './miniDebuggerEvalCode';
// import  * as ReactLike from '../../jsx/createElement'
// // import { evalCode } from './miniDebuggerEvalCode';
// // import { deepEqual } from 'assert';


// console.log(buildCodeToEval(`LOG(testFFF())`));

const code = `LOG(ReactLike.render(testFFF()))`
const { logs, errors, evaluatedCode } = evalCode(code)

console.log('\n\n\n' + evaluatedCode);
console.log(errors.length==0 ? 'NO ERRORS' : errors.map(e => e).join('\n\n\n'))
console.log(logs.join('\n * '))




// // test1();

// // function test1() {
  // const { logs, errors } = 
  //  console.log(evalCode(`LOG(testFFF())`))
  // console.log(logs);
// //   deepEqual(logs, ['Use LOG(), [function], {to:print, anyKind:ofValue}'], 'logs');
// // }


