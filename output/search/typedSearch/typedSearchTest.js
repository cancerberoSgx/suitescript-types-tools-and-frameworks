define(["require", "exports", "./typedSearch", "N/search"], function (require, exports, typedSearch_1, nsSearch) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function typedSearchTest() {
        var s = typedSearch_1.search({ type: 'item' });
        var r = s.run().each(function (f) {
            f.getValue('location');
            return false;
        });
        //   nsSearch.createFilter
        var s2 = typedSearch_1.search({
            type: 'commercecategory',
            columns: [{
                    name: 'primaryparent',
                    sort: nsSearch.Sort.ASC
                }]
        });
        var i = s2.run().each(function (f) {
            console.log("primaryparent: " + f.getValue('primaryparent'));
            return true;
        });
    }
    exports.typedSearchTest = typedSearchTest;
});
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
// var search = query.create({
//   type: query.Type.CUSTOMER
// }); 
// var salesrep = search.join({
//   fieldId: 'salesrep'
// });
// var cond1 = search.createCondition({
//   fieldId: 'id',
//   operator: query.Operator.EQUAL,
//   values: 107
// });
// var cond2 = search.createCondition({
//   fieldId: 'id',
//   operator: query.Operator.EQUAL,
//   values: 2647
// });
// var cond3 = salesrep.createCondition({
//   fieldId: 'email',
//   operator: query.Operator.START_WITH_NOT,
//   values: 'foo'
// });
// search.condition = search.and(
//   cond3, search.not(
//       search.or(cond1, cond2)
//   )
// );
// var search = query.create({
//   type: query.Type.CUSTOMER
// });
// var salesrep = search.join({
//   fieldId: 'salesrep'
// });
// search.columns = [
//   search.createColumn({
//       fieldId: 'entityid'
//   }),
//   search.createColumn({
//       fieldId: 'id'
//   }),
//   salesrep.createColumn({
//       fieldId: 'entityid'
//   }),
//   salesrep.createColumn({
//       fieldId: 'email'
//   }),
//   salesrep.createColumn({
//       fieldId: 'hiredate'
//   }),
// ];
// search.sort = [
//   search.createSort({
//       column: search.columns[1]
//   }),
//   salesrep.createSort({
//       column: salesrep.columns[0],
//       ascending: false
//   })
// ];
// var resultSet = search.run();
