define(["require", "exports", "./typedSearch", "N/search"], function (require, exports, typedSearch_1, nsSearch) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function typedSearchTest() {
        // const s = search({ type: 'item' });
        // const r = s.run().each(f => {
        //   f.getValue('location');
        //   return false;
        // });
        var s2 = typedSearch_1.create({
            type: 'commercecategory',
            columns: [{
                    name: 'primaryparent',
                    sort: nsSearch.Sort.ASC
                }, {
                    name: 'created',
                    sort: nsSearch.Sort.ASC
                }]
        });
        var i = s2.run().each(function (f) {
            console.log("primaryparent: " + f.getValue('primaryparent') + "  " + typeof f.getValue('primaryparent'));
            console.log("created: " + f.getValue('created') + "  " + typeof f.getValue('created'));
            // console.log(`primaryparent: ${f.getValue('displaasdyinsite')}`); // gives type error- wrong column
            return true;
        });
        // const s3 = search({ type: 'inventoryitem', columns: ['currentstdcosteffectivedate'] });
        // const i2 = s3.run().each(f => {
        //   // const v = f.getValue('foo')
        //   const v = f.getValue('dateviewed') // Date | undefined
        //   const v2 = f.getValue('safetystocklevel') // number|undefined
        //   const v3 = f.getValue('isavailable') // boolean|undefined
        //   // console.log(`primaryparent: ${}`); // gives type error- wrong column
        //   return true;
        // });
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
