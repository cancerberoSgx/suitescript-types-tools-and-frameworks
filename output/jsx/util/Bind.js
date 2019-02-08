// better idea - probably this can be obsoleted by just using data-attributes, example:  instead of `<Bind name="foo"><input></input></Bind>` use `<input data-bind-name="foo"></input>`
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
define(["require", "exports", "../../misc/formatDate", "../../misc/misc", "../createElement", "../StatelessComponent"], function (require, exports, formatDate_1, misc_1, createElement_1, StatelessComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BIND_VALUE_ATTRIBUTE_NAME = 'data-bind-input-value-id';
    /**
     * Helper to bind data to the DOM and input element values so it can be easily retrieved from a function attribute like a click handler from the browser. This is necessary because in the browser's function attribute we don't have access to the server code scope.
     *
     *  * `<Bind data={{my: 'foo'}}>` or  `<Bind data={{my: 'foo'}} name="unique-key-123">` and `getBindData("unique-key-123")` : if no name is provided, then the data is associated with the first direct child and the element itself can be used to extract it with getBindData instead of using a key.
     *
     *  * `<Bind inputValue="anElementOrUndefined" name="unique-key-333">` to declare an input element which value can be retrieved by name at any time from the browser (like a event handler function attribute)to bind. If no `inputValue` is given the first direct child found will be used to bind its value. It supports elements like <input> (type text, date, checkbox, number), <textarea>, <select>. Then the value of this element can be easily retrieved frmo a event handler function attribute by calling the global `getBindInputValue("unique-key-333")`
     *
     * Example:
    
    ```
    {props.fields.map(f=><div>
    <Bind bindInput={`foo-field-${f.id}`}>
      <input type="date" value={props.created}></input>
    </Bind>
    <Bind bindListener="foo-field-{f.id}""} data={Props}>
      <button onClick={e => {
        const {endpoint} = getBindData<Props>(e.currentTarget);
        let value = getBindInputValue<string>(e.currentTarget);
        fetch(`${endpoint}&value=${value}`)
          .then(r=>r.jsonResponse)
          .then(status=>alert(`Saved ${status}`))
      }}>
      Save</button>
    </Bind>
    ```
     */
    var Bind = /** @class */ (function (_super) {
        __extends(Bind, _super);
        function Bind() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bind.prototype.render = function () {
            if (!this.props.data && this.props.name) {
                var id = "bind-input-value-element-" + Bind.counter++;
                if (typeof this.props.inputValue === 'undefined') {
                    var c = this.firstChildElement();
                    if (c) {
                        c.attrs[Bind.BIND_VALUE_ATTRIBUTE_NAME] = id;
                    }
                    else {
                        // TODO: error debug
                        return createElement_1.ReactLike.createElement("span", null);
                    }
                }
                else {
                    this.props.inputValue.setAttribute(Bind.BIND_VALUE_ATTRIBUTE_NAME, id);
                }
                // TODO: add this statements in a single global <script> tag - could be a static el attribute
                return createElement_1.ReactLike.createElement("span", null,
                    createElement_1.ReactLike.createElement("script", null, ("\n__BindInputValues['" + this.props.name + "'] = {id: '" + id + "'};\n").trim()));
            }
            else if (this.props.data && this.props.name) {
                // TODO: add this statements in a single global <script> tag - could be a static el attribute
                return createElement_1.ReactLike.createElement("span", null,
                    createElement_1.ReactLike.createElement("script", null, ("\n__BindData['" + this.props.name + "'] = " + (typeof this.props.data === 'function' ? this.props.data.toString() : JSON.stringify(this.props.data)) + ";\n").trim()));
            }
            else {
                // TODO: error debug
                return createElement_1.ReactLike.createElement("span", null);
            }
        };
        Bind.prototype.checkRegisteredCode = function () {
            if (!Bind.registered) {
                createElement_1.ReactLike.registerClientCode({
                    name: 'getBindData',
                    code: ("\n__BindInputValues = typeof __BindInputValues === 'undefined' ? {} : __BindInputValues;\n__BindData = typeof __BindData === 'undefined' ? {} : __BindData;\nvar BIND_VALUE_ATTRIBUTE_NAME = '" + Bind.BIND_VALUE_ATTRIBUTE_NAME + "';\n" + getBindData.toString() + ";\n" + getBindDataOrThrow.toString() + ";\n" + misc_1.unEscapeHtmlAttribute.toString() + ";\n" + misc_1.escapeHtmlAttribute.toString() + ";\nvar createElement_1 = {unEscapeHtmlAttribute: unEscapeHtmlAttribute, escapeHtmlAttribute: escapeHtmlAttribute}; \n" + formatDate_1.formatDate.toString() + "; var dateUtil_1 = {formatDate: formatDate}; \n").trim(),
                    description: "Gets data stored in the element declared ed with wrapper <StoreData><button..."
                });
            }
            createElement_1.ReactLike.registerClientCode({
                name: 'getBindInputValue',
                code: ("\n" + getBindInputValue.toString() + ";\n" + misc_1.array.toString() + "; \n" + misc_1.checkThrow.toString() + "; \nvar misc_1 = {array: array, checkThrow: checkThrow}; \n").trim(),
                description: "Gets the current input value declared with wrapper <BindInputValue><input..."
            });
            Bind.registered = true;
        };
        Bind.counter = 0;
        Bind.BIND_VALUE_ATTRIBUTE_NAME = BIND_VALUE_ATTRIBUTE_NAME;
        Bind.registered = false;
        return Bind;
    }(StatelessComponent_1.StatelessComponent));
    exports.Bind = Bind;
    // TODO: perhaps is safer to put all js objects in a global variable instead of embedding them in the DOM element
    function getBindData(key) {
        return __BindData[key];
    }
    function getBindDataOrThrow(key) {
        return misc_1.checkThrow(getBindData(key), 'Store data not found for key ' + key);
    }
    1;
    // type ElType = HTMLInputElement&HTMLSelectElement
    function getBindInputValue(listenerElementOrInputElementOrKeyOrInputElementSelector, config) {
        if (config === void 0) { config = {}; }
        var el = null;
        if (typeof listenerElementOrInputElementOrKeyOrInputElementSelector === 'string') {
            // Can be a name:
            var id = __BindInputValues[listenerElementOrInputElementOrKeyOrInputElementSelector];
            var sel = id && id.id && "[" + BIND_VALUE_ATTRIBUTE_NAME + "=\"" + id.id + "\"]";
            el = sel && document.querySelector(sel) ||
                // can be an input element selector
                document.querySelector(listenerElementOrInputElementOrKeyOrInputElementSelector);
        }
        else {
            // can be a listener element
            var key = listenerElementOrInputElementOrKeyOrInputElementSelector.getAttribute("" + BIND_VALUE_ATTRIBUTE_NAME);
            if (key) {
                el = document.querySelector("[" + BIND_VALUE_ATTRIBUTE_NAME + "=\"" + key + "\"]");
            }
            if (!el) {
                // can be a input element
                el = listenerElementOrInputElementOrKeyOrInputElementSelector;
            }
        }
        if (el) {
            if (el.type === 'date') {
                return (config.asString && el.valueAsDate) ? formatDate_1.formatDate(el.valueAsDate, 'MM/DD/YYYY') : el.valueAsDate;
            }
            else if (el.type === 'number') {
                return config.asString ? (el.valueAsNumber + '') : el.valueAsNumber;
            }
            else if (el.type === 'checkbox') {
                return config.asString ? (el.checked ? 'T' : 'F') : !!el.checked;
            }
            else if (el.tagName.toLowerCase() === 'select') {
                var selectedOptions_1 = el.selectedOptions;
                if (selectedOptions_1 && !el.getAttribute('multiple')) {
                    return config.asString ? (selectedOptions_1.item(0).value + '') : selectedOptions_1.item(0).value;
                }
                else if ((selectedOptions_1 && el.getAttribute('multiple')) || !selectedOptions_1.length) {
                    var a = misc_1.array(selectedOptions_1.length).map(function (i) { return selectedOptions_1.item(i).value; });
                    return config.asString ? JSON.stringify(a) : a;
                }
                else {
                    //TODO debug msg
                }
            }
            else {
                //TODO debug msg
            }
            return config.asString ? (el.value + '') : el.value;
        }
    }
});
