define(["require", "exports", "./objectExplorer", "../misc/misc"], function (require, exports, objectExplorer_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function printSource(v, printFunctionPrototypes) {
        if (printFunctionPrototypes === void 0) { printFunctionPrototypes = false; }
        if (typeof (v) === 'function') {
            var props = objectExplorer_1.getObjectKeys(v.prototype);
            if (!printFunctionPrototypes || !props.length) {
                return v.toString();
            }
            else {
                return "(function(){\n    var F__ = " + v.toString() + ";\n    " + props.map(function (prop) {
                    return "F__.prototype." + prop + " = " + printSource(v.prototype[prop], false) + ";";
                })
                    .join('\n    ') + "\n    return F__;\n  })()";
            }
        }
        else if (['number', 'boolean'].indexOf(typeof (v)) !== -1) {
            return v + '';
        }
        else if (typeof (v) === 'undefined') {
            return 'undefined';
        }
        else if (typeof v === 'string') {
            return "\"" + v.replace(/\"/g, '\\"') + "\"";
        }
        else if (Array.isArray(v)) {
            return "[" + v.map(function (i) { return printSource(i, printFunctionPrototypes); }).join(', ') + "]";
        }
        else if (Object.getPrototypeOf(v) === Object.prototype) {
            return "{\n  " + objectExplorer_1.getObjectKeys(v).map(function (k) { return k + ": " + printSource(v[k], printFunctionPrototypes); }).join(',\n  ') + "\n}";
        }
        else {
            return misc_1.tryTo(function () { return JSON.stringify(v); });
        }
    }
    exports.printSource = printSource;
    function printNamespace(v, name) {
        // const body = getObjectKeys(v).map(k=>`var ${k} = ${printSource(v[k], true)}`).join(';\n')
        // const result =
        return "\n" + objectExplorer_1.getObjectKeys(v).map(function (k) { return "var " + k + " = " + printSource(v[k], true); }).join(';\n') + "\n\n" + (name ? "var " + name + " = " : '') + "{\n  " + objectExplorer_1.getObjectKeys(v).map(function (k) { return k + ": " + k; }).join(',\n    ') + "\n}\n";
    }
    exports.printNamespace = printNamespace;
    function printObjectAndScope(value, printFunctionPrototypes, printGlobals) {
        if (printFunctionPrototypes === void 0) { printFunctionPrototypes = false; }
        if (printGlobals === void 0) { printGlobals = false; }
        var s = ("\n{\n  " + objectExplorer_1.getObjectKeys(value).filter(function (k) { return printSource(value[k], printFunctionPrototypes); }).map(function (p) { return p + ": " + printSource(value[p], printFunctionPrototypes); }).join(',\n  ') + "\n}\n    ").trim();
        var globals = printGlobals ? matchGlobalRegex(/\s+([a-z0-1_]+)\./gmi, s)
            .filter(function (s) { return s.indexOf('_1') !== -1 || s.indexOf('_2') !== -1; })
            .filter(function (o, i, a) { return a.indexOf(o) === i; }) : [];
        var globalsCode = printGlobals ? ("\n" + globals.map(function (g) { return "var " + g + " = " + (misc_1.tryTo(function () { return eval("typeof " + g + "==='undefined'? 'undefined' : printSource(" + g + ", " + printFunctionPrototypes + ")"); }) || 'undefined') + ";"; }).join('\n  ') + "\n    ").trim() : '';
        return ("\n" + s + ";\n" + globalsCode + ";\n    ").trim();
    }
    exports.printObjectAndScope = printObjectAndScope;
    function matchGlobalRegex(r, s) {
        var matches, output = [];
        while (matches = r.exec(s)) {
            output.push(matches[1]);
        }
        return output;
    }
    exports.matchGlobalRegex = matchGlobalRegex;
});
