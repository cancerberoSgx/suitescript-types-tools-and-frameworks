var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../StatelessComponent", "../createElement"], function (require, exports, StatelessComponent_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StoreData = /** @class */ (function (_super) {
        __extends(StoreData, _super);
        function StoreData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StoreData.prototype.render = function () {
            var c = this.firstChildElement();
            if (c) {
                c.attrs['data-store-data'] = createElement_1.escapeHtmlAttribute(JSON.stringify(this.props.data || {}));
            }
            return createElement_1.ReactLike.createElement("span", null);
        };
        StoreData.prototype.checkRegisteredCode = function () {
            if (!StoreData.registered) {
                createElement_1.ReactLike.registerClientCode({
                    name: 'StoreData',
                    code: getStoreData.toString() + "\n" + createElement_1.unEscapeHtmlAttribute.toString() + "\n" + createElement_1.escapeHtmlAttribute.toString() + "\nvar createElement_1 = {unEscapeHtmlAttribute: unEscapeHtmlAttribute, escapeHtmlAttribute: escapeHtmlAttribute}; ",
                    description: "Gets data stored in the element declared ed with wrapper <StoreData><button..."
                });
                StoreData.registered = true;
            }
        };
        StoreData.registered = false;
        return StoreData;
    }(StatelessComponent_1.StatelessComponent));
    exports.StoreData = StoreData;
    // function escapeHtmlAttribute(code: string) {
    //   return code.replace(/\"/gmi, '&quot;');
    // }
    // function unEscapeHtmlAttribute(code: string) {
    //   return code.replace(/\&quot\;/gmi, '"');
    // }
    function getStoreData(listenerEl) {
        var s = listenerEl.getAttribute('data-store-data');
        if (s) {
            var unescaped = createElement_1.unEscapeHtmlAttribute(s);
            try {
                return JSON.parse(unescaped);
            }
            catch (error) {
            }
        }
    }
});
