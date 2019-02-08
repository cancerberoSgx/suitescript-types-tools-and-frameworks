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
define(["require", "exports", "./StatelessComponent"], function (require, exports, StatelessComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // type ComponentState = any;
    var StatefulComponent = /** @class */ (function (_super) {
        __extends(StatefulComponent, _super);
        function StatefulComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {};
            return _this;
            // render(): JSX.Element {
            //   return super.render()
            // }
        }
        // constructor(props: P) {
        //   super(props)
        //   this.state = {} as any
        // }
        StatefulComponent.prototype.setState = function (state) {
            this.state = __assign({}, this.state, state);
        };
        //   setState<K extends keyof S>(
        //     state: ((prevState: S
        //     callback?: () => void
        // ): void{
        //   this.state =state
        // }
        StatefulComponent.prototype.getState = function () {
            return this.state;
        };
        return StatefulComponent;
    }(StatelessComponent_1.StatelessComponent));
    exports.StatefulComponent = StatefulComponent;
});
// export interface IScopeableComponent <P , S, Scope extends {props: P, state: S} ={props: P, state: S}> extends IStatefulComponent<P, S>{
//   // this:Scope
//   getScope(): Scope
//   render(this: Scope): JSX.Element
// }
// // scope extends {getScope: never,readonly props:Readonly< P>, readonly state: S
// export class ScopeableComponent<P , S, Scope extends {props: P, state: S}= {props: P, state: S}   > extends StatefulComponent<P, S> implements IScopeableComponent<P, S, Scope>{
//   // constructor(props: P) {
//   //   super(props)
//   // }
//   // decorator(target: Object, key: string): void { }
//   getScope(): Scope {
//     // throw 'implement me'
//     return {
//       props: this.props, 
//       state: this.state
//       // getScope: undefined
//     //   // props: printSource(this.props),
//     //   // state: printSource(this.state)
//     } as any
//   }
//  render( this:  Scope): JSX.Element
//   {
//     // this.props.
//     return super.render()
//   }
// }
// function dec<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>{
//   console.log(target, propertyKey);
//   return {...descriptor, configurable: false}
// }
//  function dec2(target: Object, propertyKey: string | symbol, parameterIndex: number): void{}
