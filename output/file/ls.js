define(["require", "exports", "../search/typedSearch/typedSearchOperations", "../misc/arrayPrototypeFind"], function (require, exports, typedSearchOperations_1, arrayPrototypeFind_1) {
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
        // now we get the folders folders (since fileResults has all descendants not only direct children)
        var folderIds = fileResults.filter(function (f) { return f.parent !== root; })
            .map(function (f) { return f.parent; })
            // .concat([root]) // add root just in case
            .filter(function (i, index, arr) { return i && arr.indexOf(i) === index; }); // dedup
        var folderResults = type === 'folder' || !type ?
            getFolders(folderIds) : [];
        var files = folderResults.concat(fileResults);
        buildAbsoluteNames(files, config);
        return files;
    }
    exports.ls = ls;
    function getFolders(folderIds) {
        return typedSearchOperations_1.list({
            type: 'folder',
            columns: ['name', 'parent'],
            filters: [
                {
                    name: 'internalid',
                    operator: 'anyOf',
                    values: folderIds
                }
            ]
        }).map(function (r) {
            var name = r.getValue('name');
            var parent = r.getValue('parent');
            var folder = {
                type: "folder",
                id: r.id,
                name: name,
                parent: parent,
                absoluteName: name
            };
            return folder;
        });
    }
    var cc = 0;
    function buildMissingFolders(files, config) {
        var withNoParent = files.filter(function (f) { return f.parent && !arrayPrototypeFind_1.find(files, function (p) { return p.id === f.parent; }); }); //.map(f=>{id: f.idf.parent}).filter(i=>i!==undefined) as string[]
        // console.log(`withNoParent ${withNoParent.length}`);
        // // return
        // // const missingParentIds = withNoParent.map(f => f.parent) as string[]
        if (withNoParent.length > 1) {
            getFolders(withNoParent.map(function (f) { return f.parent; })).forEach(function (p, i) {
                if (!arrayPrototypeFind_1.find(files, function (f) { return f.id === p.id; })) {
                    files.push(p);
                }
            });
        }
        // withNoParent = files.filter(f => f.parent && !find(files, p => p.id === f.parent))
        // console.log(`withNoParent ${withNoParent.length}`);
        //  if (withNoParent.length>1) {
        //   getFolders(withNoParent.map(f => f.parent) as string[], config.rootAbsoluteName).forEach(p => {
        //     if (!find(files, f => f.id === p.id)) {
        //       files.push(p)
        //     }
        //   })
        // }
        var missingCount = files.filter(function (f) { return f.parent && !arrayPrototypeFind_1.find(files, function (p) { return p.id === f.parent; }); }).length;
        if (missingCount > 1 && cc < 3) {
            console.log('buildMissingFolders ' + missingCount);
            cc++;
            buildMissingFolders(files, config);
        }
        return;
    }
    function buildAbsoluteNames(files, config) {
        buildMissingFolders(files, config);
        files.forEach(function (f) {
            var pname = getParentAbsoluteName(f, files, config.rootAbsoluteName);
            f.absoluteName = pname + '/' + f.name;
        });
    }
    function getParentAbsoluteName(f, allFiles, rootAbsoluteName) {
        if (!f.parent) {
            return rootAbsoluteName;
        }
        var parent = arrayPrototypeFind_1.find(allFiles, function (p) { return p.id === f.parent; });
        if (!parent) {
            // console.log(`Warning, file parent not found: ${f.name} ${f.id}`)
            return rootAbsoluteName + '/unknown' + counter++;
        }
        if (!parent.absoluteName) {
            return getParentAbsoluteName(parent, allFiles, rootAbsoluteName);
        }
        return parent.absoluteName.indexOf(rootAbsoluteName) === 0 ? parent.absoluteName : rootAbsoluteName + '/' + parent.absoluteName;
    }
    var counter = 0;
});
