define(["require", "exports", "./miniDebuggerEvalCode", "../../jsx/createElement"], function (require, exports, miniDebuggerEvalCode_1, ReactLike) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code = "LOG(ReactLike.render(testFFF('seba')))\n//LOG(JSON.stringify(objectExplorer.getObjectValueTypes(this)))";
    var _a = miniDebuggerEvalCode_1.evalCode(code, [testFFF.toString(),]), logs = _a.logs, errors = _a.errors, evaluatedCode = _a.evaluatedCode;
    console.log('\n\n\n' + evaluatedCode);
    console.log(errors.length == 0 ? 'NO ERRORS' : errors.map(function (e) { return e; }).join('\n\n\n'));
    console.log(logs.join('\n * '));
    // console.log(objectExplorer.getObjectKeys(objectExplorer), objectExplorer)
    function testFFF(s) {
        return ReactLike.createElement("div", null,
            "hello ",
            s);
    }
});
