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
    /**
     * Helper to bind data to the DOM and input element values so it can be easily retrieved from a function attribute like a click handler from the browser. This is necessary because in the browser's function attribute we don't have access to the server code scope.
     *
     * Use `<Bind data={{my: 'foo'}}>` and later `getStoreData()` passing the listener element (the one that triggered the handler) to retrieve it in the browser, or `bindInput` `bindListener` to get other element input value easily with `getBindInputValue`, again passing the listener element.
     *
     * Example:
    
    ```
    {props.fields.map(f=><div>
    <Bind bindInput={`foo-field-${f.id}`}>
      <input type="date" value={props.created}></input>
    </Bind>
    <Bind bindListener="foo-field-{f.id}""} data={Props}>
      <button onClick={e => {
        const {endpoint} = getStoreData<Props>(e.currentTarget);
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
            var c = this.firstChildElement();
            if (c && this.props.bindInputId) {
                c.attrs['data-bind-value-id'] = this.props.bindInputId;
            }
            if (c && this.props.bindListenerId) {
                c.attrs['data-bind-value-id'] = this.props.bindListenerId;
            }
            if (c && this.props.data) {
                c.attrs['data-store-data'] = createElement_1.escapeHtmlAttribute(JSON.stringify(this.props.data));
            }
            return createElement_1.ReactLike.createElement("span", null);
        };
        Bind.prototype.checkRegisteredCode = function () {
            if (!Bind.registered) {
                createElement_1.ReactLike.registerClientCode({
                    name: 'StoreData',
                    code: getStoreData.toString() + "\n" + createElement_1.unEscapeHtmlAttribute.toString() + "\n" + createElement_1.escapeHtmlAttribute.toString() + "\nvar createElement_1 = {unEscapeHtmlAttribute: unEscapeHtmlAttribute, escapeHtmlAttribute: escapeHtmlAttribute}; ",
                    description: "Gets data stored in the element declared ed with wrapper <StoreData><button..."
                });
            }
            createElement_1.ReactLike.registerClientCode({
                name: 'getBindInputValue',
                code: getBindInputValue.toString(),
                description: "Gets the current input value declared with wrapper <BindInputValue><input..."
            });
            createElement_1.ReactLike.registerClientCode({
                name: 'formatDate',
                code: formatDate_1.formatDate.toString() + "; var dateUtil_1 = {formatDate: formatDate}; ",
                description: "Gets the current input value declared with wrapper <BindInputValue><input..."
            });
            createElement_1.ReactLike.registerClientCode({
                name: 'array',
                code: misc_1.array.toString() + "; var misc_1 = {array: array}; ",
                description: ""
            });
            Bind.registered = true;
        };
        Bind.registered = false;
        return Bind;
    }(StatelessComponent_1.StatelessComponent));
    exports.Bind = Bind;
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
    function getBindInputValue(listenerEl, config) {
        if (config === void 0) { config = {}; }
        var id = listenerEl.getAttribute('data-bind-value-id');
        var el = document.querySelector("[data-bind-value-id=\"" + id + "\"]");
        if (el) {
            if (el.type === 'date') {
                return config.asString ? formatDate_1.formatDate(el.valueAsDate, 'MM/DD/YYYY') : el.valueAsDate;
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
                    //TODO
                }
            }
            else {
                //TODO
            }
            return config.asString ? (el.value + '') : el.value;
        }
    }
});
