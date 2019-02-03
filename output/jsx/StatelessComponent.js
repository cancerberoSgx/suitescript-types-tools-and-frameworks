define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * let declare custom tag components with classes instead of functions.
     * Notice that differently than React's, it doesn't ake any sense to support state in SuiteScript
     * back end's scripts (suitelet, restlet, etc).
     *
     * TODO: what about client scripts ?
     */
    var StatelessComponent = /** @class */ (function () {
        function StatelessComponent(props) {
            this.props = props;
            this.props = props;
        }
        StatelessComponent.prototype.render = function () {
            throw new Error('Not Implemented');
        };
        return StatelessComponent;
    }());
    exports.StatelessComponent = StatelessComponent;
});
