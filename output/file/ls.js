define(["require", "exports", "../search/typedSearch/typedSearchOperations", "../misc/misc"], function (require, exports, typedSearchOperations_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ls(config) {
        var _a = config.root, root = _a === void 0 ? '@NONE@' : _a, type = config.type, _b = config.rootAbsoluteName, rootAbsoluteName = _b === void 0 ? '/' : _b;
        var fileResults = type === 'file' || !type ?
            typedSearchOperations_1.list({
                type: 'file',
                columns: ['name', 'folder'],
                filters: [
                    {
                        name: 'folder',
                        operator: 'anyOf',
                        values: root
                    }
                ]
            }).map(function (r) {
                var name = r.getValue('name');
                var parent = r.getValue('folder');
                var file = {
                    type: "file",
                    id: r.id,
                    name: name,
                    parent: parent,
                    absoluteName: name
                };
                return file;
            }) : [];
        var directChildren = fileResults.filter(function (f) { return f.parent === root; });
        // now we get the folders folders (since fileResults has all descendants not only direct children)
        var folderIds = fileResults.filter(function (f) { return f.parent !== root; })
            .map(function (f) { return f.parent; })
            // .concat([root]) // add root just in case
            .filter(function (i, index, arr) { return i && arr.indexOf(i) === index; }); // dedup
        var folderResults = type === 'folder' || !type ?
            typedSearchOperations_1.list({
                type: 'folder',
                columns: ['name'],
                filters: [
                    {
                        name: 'internalid',
                        operator: 'anyOf',
                        values: folderIds
                    }
                ]
            }).map(function (r) {
                var name = r.getValue('name');
                var folder = {
                    type: "folder",
                    id: r.id,
                    name: name,
                    parent: root,
                    absoluteName: name
                };
                return folder;
            }) : [];
        var files = folderResults.concat(fileResults);
        buildAbsoluteNames(files, rootAbsoluteName);
        return files;
    }
    exports.ls = ls;
    function buildAbsoluteNames(files, rootAbsoluteName) {
        files.forEach(function (f) {
            var pname = getParentAbsoluteName(f, files, rootAbsoluteName);
            f.absoluteName = pname + '/' + f.name;
        });
    }
    function getParentAbsoluteName(f, allFiles, rootAbsoluteName) {
        if (!f.parent) {
            return rootAbsoluteName;
        }
        var parent = misc_1.find(allFiles, function (p) { return p.id === f.parent; });
        if (!parent || !parent.absoluteName) {
            // console.log(`Warning, file parent not found: ${f.name} ${f.id}`)
            return rootAbsoluteName + '/unknown' + counter++;
        }
        if (!parent.absoluteName) {
            return getParentAbsoluteName(parent, allFiles, rootAbsoluteName);
        }
        return parent.absoluteName;
    }
    var counter = 0;
    function lsTest() {
        ls({ root: '3742', rootAbsoluteName: '/SuiteScripts/DeployExtensions' })
            .sort(function (a, b) { return a.absoluteName.localeCompare(b.absoluteName); })
            .forEach(function (f) {
            console.log(f.absoluteName + " " + f.type + " " + f.id + " " + f.parent);
        });
    }
    exports.lsTest = lsTest;
});
