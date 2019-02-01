define(["require", "exports", "./typedSearch", "N/search"], function (require, exports, typedSearch_1, nsSearch) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function typedSearchTest() {
        var s = typedSearch_1.search({ type: 'item' });
        var r = s.run().each(function (f) {
            f.getValue('location');
            return false;
        });
        var s2 = typedSearch_1.search({
            type: 'commercecategory',
            columns: [{
                    name: 'primaryparent',
                    sort: nsSearch.Sort.ASC
                },]
        });
        var i = s2.run().each(function (f) {
            console.log("primaryparent: " + f.getValue('primaryparent'));
            // console.log(`primaryparent: ${f.getValue('displaasdyinsite')}`); // gives type error- wrong column
            return true;
        });
        var s3 = typedSearch_1.search({ type: 'inventoryitem', columns: ['currentstdcosteffectivedate'] });
        var i2 = s3.run().each(function (f) {
            // const v = f.getValue('foo')
            var v = f.getValue('dateviewed'); // Date | undefined
            var v2 = f.getValue('safetystocklevel'); // number|undefined
            var v3 = f.getValue('isavailable'); // boolean|undefined
            // console.log(`primaryparent: ${}`); // gives type error- wrong column
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
