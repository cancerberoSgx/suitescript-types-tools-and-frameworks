define(["require", "exports", "./typedSearch", "N/search", "../results"], function (require, exports, typedSearch_1, nsSearch, results_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function typedSearchTest() {
        // rootFolders();
        // allCategories();
        findRootFolder();
        // ls()
    }
    exports.typedSearchTest = typedSearchTest;
    // function ls(parent?: RecordId) {
    //   const parentId = parent || '@NONE@'
    //   const found = find(create({
    //     type: 'folder',
    //     columns: ['name'],
    //     filters: [
    //       {
    //         name: 'parent',
    //         operator: 'anyOf',
    //         values: parentId
    //       }
    //     ]
    //   }).run() as any as ResultSet, f => {
    //     console.log(f.getValue('name'), name, f.getValue('name') === name);
    //     return f.getValue('name') === name
    //   })
    //   if (found) {
    //     console.log(`Found : ` + found.id);
    //   }
    //   else {
    //     console.log('not found');
    //   }
    // }
    function findRootFolder() {
        var name = 'SuiteScripts';
        var found = results_1.find(typedSearch_1.create({
            type: 'folder',
            columns: ['name'],
            filters: [
                {
                    name: 'parent',
                    operator: 'anyOf',
                    values: '@NONE@'
                }
            ]
        }).run(), function (f) {
            console.log(f.getValue('name'), name, f.getValue('name') === name);
            return f.getValue('name') === name;
        });
        if (found) {
            console.log("Found : " + found.id);
        }
        else {
            console.log('not found');
        }
    }
    function allCategories() {
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
    }
    function rootFolders() {
        var sss = typedSearch_1.create({
            type: 'folder',
            columns: ['name', 'parent', 'location'],
            filters: [
                {
                    name: 'parent',
                    operator: 'anyOf',
                    values: '@NONE@'
                }
            ]
        });
        sss.run().each(function (f) {
            console.log("name: " + f.getValue('name') + " location " + f.getValue('location'));
            return true;
        });
    }
});
