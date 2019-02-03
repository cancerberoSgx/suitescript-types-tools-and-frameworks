define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { ReactNode } from '../reactLike/declarations/domElementDeclarations';
    var StatelessComponent = /** @class */ (function () {
        // context: any
        // state: Readonly<S> = {} as S
        // refs: any = null
        // readonly props: Readonly<{ children?: JSX.Element }> & Readonly<P>
        function StatelessComponent(props) {
            this.props = props;
            this.props = props;
            // return this//as any as IStatelessComponent<P>
        }
        StatelessComponent.prototype.render = function () {
            throw new Error('Not Implemented');
        };
        return StatelessComponent;
    }());
    exports.StatelessComponent = StatelessComponent;
});
