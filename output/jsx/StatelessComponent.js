define(["require", "exports", "./elementImpl"], function (require, exports, elementImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Let declare custom tag components with classes instead of just functions or variables.
     *
     * Notice that differently than React's, it doesn't make any sense to support component's state in SuiteScript
     * back end's scripts (suitelet, restlet, etc) so it's no included. TODO: what about client scripts ?
     */
    var StatelessComponent = /** @class */ (function () {
        function StatelessComponent(props) {
            this.props = props;
            this.props = props;
        }
        StatelessComponent.prototype.render = function () {
            throw new Error('Not Implemented');
        };
        StatelessComponent.prototype.childrenAsArray = function () {
            return (Array.isArray(this.props.children) ? this.props.children : [this.props.children]);
        };
        StatelessComponent.prototype.childrenElementsAsArray = function () {
            return this.childrenAsArray().filter(function (c) { return elementImpl_1.isElementIke(c); });
        };
        StatelessComponent.prototype.firstChildElement = function () {
            return this.childrenAsArray().find(function (e) { return true; });
        };
        return StatelessComponent;
    }());
    exports.StatelessComponent = StatelessComponent;
});
