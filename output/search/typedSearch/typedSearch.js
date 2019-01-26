define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
// interface SearchOptions<RecordType extends SearchRecordType, F extends ValueOfStringKey<FilterType, RecordType>>{
// type: RecordType
// filters: FilterTypes[]
// }
// search.create()
//  interface SearchCreateOptions<RecordType extends SearchRecordType> {
//   type: RecordType
//   filters?: (FilterTypes[] | any[]);
//   columns?: (Array<Column | string>);
//   title?: string;
//   id?: string;
//   isPublic?: boolean;
// }
// /** Encapsulates a search filter used in a search. Use the properties for the Filter object to get and set the filter properties. */
// interface FilterTypes {
//   /** Name or internal ID of the search field as a string. */
//   name: string;
//   /** Join ID for the search filter as a string. */
//   join: ValueOfStringKey<SearchJoinTypes>
//   /** Operator used for the search filter. See search.Operator. */
//   operator: Operator;
//   /** Summary type for the search filter. Use this property to get or set the value of the summary type. See search.Summary. */
//   summary: Summary;
//   /** Formula used by the search filter. Use this property to get or set the formula used by the search filter. */
//   formula: string;
// }
// export function search<T extends SearchRecordType>(options: { type: T }): ValueOfStringKey<recordTypes, T> {
//   const r = record.create(options)
//   return recordConstructorsImpl[options.type](r) as any
// }
// search
// interface SearchFilter<Fields extends EmptyObject = EmptyObject> {
//   field: StringKeyOf<Fields>
// }
// interface SearchFilterTypeOperators {
// }
// search<T extends SearchRecordType>
// export function findMatrixParent(id?: string): Result | undefined {
//   const filter = [
//       ['matrix', Operator.IS, 'T'],
//       'AND',
//       ['matrixchild', Operator.IS, 'F']
//   ]
//   return find(create({
//       type: Type.ITEM,
//       filters: id ? [
//           ['internalid', Operator.ANYOF, id],
//           'AND', filter] : filter
//   }).run(), result => {
//       return true
//   })
// }
