define(["require", "exports", "./miniDebuggerEvalCode"], function (require, exports, miniDebuggerEvalCode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import  * as ReactLike from '../../jsx/createElement'
    // // import { evalCode } from './miniDebuggerEvalCode';
    // // import { deepEqual } from 'assert';
    // console.log(buildCodeToEval(`LOG(testFFF())`));
    var code = "LOG(ReactLike.render(testFFF()))";
    var _a = miniDebuggerEvalCode_1.evalCode(code), logs = _a.logs, errors = _a.errors, evaluatedCode = _a.evaluatedCode;
    console.log('\n\n\n' + evaluatedCode);
    console.log(errors.length == 0 ? 'NO ERRORS' : errors.map(function (e) { return e; }).join('\n\n\n'));
    console.log(logs.join('\n * '));
});
// // test1();
// // function test1() {
// const { logs, errors } = 
//  console.log(evalCode(`LOG(testFFF())`))
// console.log(logs);
// //   deepEqual(logs, ['Use LOG(), [function], {to:print, anyKind:ofValue}'], 'logs');
// // }
