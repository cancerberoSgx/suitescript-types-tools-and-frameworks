define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
});
// export type FilterArray<R extends SearchRecordType,
//   F extends FilterName<R> = FilterName<R>,
//   // @ts-ignore  TODO: there's an error here but it works.
//   > = F extends infer FI ? TypedFilter<R, F> & { name: FI, operator: FilterSupportedOperators<R, FI> } : never
// type rt = 'item';
// type fn = FilterName<rt>
// type ft = FilterType<rt, fn>
// type so = NamedMemberValueOf<Required<SearchTypesOperatorsSupport>, ft>
// type ft = FilterSupportedOperators<'item', 'isavailable'>
// type ftttt = FilterType<'item', fn>
// type ttt = FilterSupportedOperators<'item', 'isavailable'>
