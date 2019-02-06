define(["require", "exports", "N/search", "../results", "./typedSearch", "./typedSearchOperations"], function (require, exports, nsSearch, results_1, typedSearch_1, typedSearchOperations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function typedSearchTest() {
        // rootFolders();
        // allCategories();
        // findRootFolder()
        // ls(-15)
        // findFileNamedTest()
    }
    exports.typedSearchTest = typedSearchTest;
    function findFileNamedTest() {
        var found = findFileNamed(-15, function (name) { return name.indexOf('SCA') !== -1; });
        if (found) {
            console.log("found " + found.getValue('name'));
        }
    }
    function findFileNamed(parentId, predicate) {
        return typedSearchOperations_1.find({
            type: 'file',
            columns: ['name'],
            filters: [
                {
                    name: 'folder',
                    operator: 'anyOf',
                    values: parentId
                }
            ]
        }, function (f) { return predicate(f.getValue('name')); });
    }
    function ls(parent) {
        var parentId = parent || '@NONE@';
        var found = typedSearchOperations_1.list({
            type: 'folder',
            columns: ['name'],
            filters: [
                {
                    name: 'parent',
                    operator: 'anyOf',
                    values: parentId
                }
            ]
        });
        console.log("Found : " + found.map(function (f) { return f.getValue('name'); }).join('\n'));
        return found;
    }
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
