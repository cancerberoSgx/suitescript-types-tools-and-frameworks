// super typed netsuite record type
// there is a super generic record definition that let declare concrete records by just declaring its fields and sublists generics. 
// IDEA: consume record definition XML and from there generate the concrete record generics declaration code. Could also be quering the record type with suitesscript
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
// /** common sublist line fields - don't know if that exists */
// export interface SublistFieldTypes {
//   // counter: number // I think there is something that all sublist lines have
// }
// export interface SublistLine<Fields extends SublistFieldTypes = SublistFieldTypes>{
// }
