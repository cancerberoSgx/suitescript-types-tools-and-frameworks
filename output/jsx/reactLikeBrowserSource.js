var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../introspection/printThisScopeSource", "./createElement", "./elementImpl"], function (require, exports, printThisScopeSource_1, ReactLike, elementImpl) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function reactLikeBrowserSource() {
        // var elementImpl_1 = ${printObjectAndScope(elementImpl.i, true)};
        // ${printObjectAndScope(elementImpl.isElementLike, true)}
        // var createElement__ = ${printObjectAndScope(ReactLike, false)};
        // var ReactLike = createElement__.ReactLike
        var code = "\n" + assignCode + "\n" + printThisScopeSource_1.printNamespace(elementImpl, 'elementImpl_1') + "\n" + printThisScopeSource_1.printNamespace(ReactLike, 'createElement_1') + "\nReactLike = createElement_1.ReactLike\ncreateElement_1 = {ReactLike: ReactLike}\n  ";
        return code.trim();
    }
    exports.reactLikeBrowserSource = reactLikeBrowserSource;
    var assignCode = "\nvar __assign = (this && this.__assign) || function () {\n  __assign = Object.assign || function(t) {\n      for (var s, i = 1, n = arguments.length; i < n; i++) {\n          s = arguments[i];\n          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n              t[p] = s[p];\n      }\n      return t;\n  };\n  return __assign.apply(this, arguments);\n};\n";
    function aux() {
        var c = { a: 1 };
        var b = __assign({}, c, { d: 2 });
        new elementImpl.ElementLikeImpl('asd');
    }
});
// console.log(reactLikeBrowserSource());
