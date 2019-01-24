define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //TODO: move this to a misc.ts file. Use it in sublistUtil.ts getLines()
    function array(n, sample) {
        var a = [];
        for (var i = 0; i < n; i++) {
            a.push(typeof sample === 'undefined' ? i : sample);
        }
        return a;
    }
    exports.array = array;
    function repeat(n, s) {
        return array(n, s).join('');
    }
    exports.repeat = repeat;
    function find(a, predicate) {
        for (var i = 0; i < a.length; i++) {
            var v = a[i];
            if (predicate(v, i, a)) {
                return v;
            }
        }
    }
    exports.find = find;
    function checkThrow(r, msg) {
        if (msg === void 0) { msg = 'Throwing on undefined value'; }
        if (!r) {
            throw new Error(msg);
        }
        return r;
    }
    exports.checkThrow = checkThrow;
    var TypedMapImpl = /** @class */ (function () {
        function TypedMapImpl(props) {
            this.props = props;
        }
        TypedMapImpl.prototype.get = function (name) {
            return this.props[name];
        };
        TypedMapImpl.prototype.set = function (name, value) {
            this.props[name] = value;
        };
        return TypedMapImpl;
    }());
    exports.TypedMapImpl = TypedMapImpl;
    function getObjectKeys(o) {
        var a = [];
        for (var k in o) {
            a.push(k);
        }
        return a;
    }
    exports.getObjectKeys = getObjectKeys;
    function getObjectValueTypes(o) {
        return getObjectKeys(o).map(function (key) { return ({ key: key + '', typeOfValue: typeof o[key] }); });
    }
    exports.getObjectValueTypes = getObjectValueTypes;
});
