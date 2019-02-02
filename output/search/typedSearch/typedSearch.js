// TODO: 
// * filters: ['foo',... ] is wrong because it only allow to use filter names as string
// * if I set install columns ['a', 'b'] then whe I call getValue() it should only let me reference those column names
define(["require", "exports", "N/search"], function (require, exports, nsSearch) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function create(options) {
        return nsSearch.create(options);
    }
    exports.create = create;
});
// export interface Search2<RecordType extends SearchRecordType, Columns extends TypedColumn<RecordType>[]
// // , ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'>
//  > {
//   searchType: RecordType
//   columns: Columns
// }
// // // unwrap up to one level
// type Unarray<T> = T extends Array<infer U> ? U : T;
// // ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'> 
// export function search2<RecordType extends SearchRecordType
// , Columns extends TypedColumn<RecordType>[]
// // , ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'>
// >(options: SearchCreateOptions2<RecordType, Columns>): 
// Search2<RecordType, Columns> {
//   // return nsSearch.create(options as any) as any
//   throw 1
// }
// interface SearchCreateOptions2<RecordType extends SearchRecordType
// , Columns extends TypedColumn<RecordType>[]> {
//   type: RecordType
//   columns?: Columns
// }
// let ss = search2({type: 'item', columns:})
// export function search2<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>): Search<RecordType> {
//   return nsSearch.create(options as any) as any
// }
// var a = search2|
