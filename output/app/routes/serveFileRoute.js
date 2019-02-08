define(["require", "exports", "N/file", "../../jsx/createElement", "../../search/typedSearch/typedSearchOperations", "N/redirect"], function (require, exports, file, createElement_1, typedSearchOperations_1, redirect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function serveFileRoute(app) {
        return {
            name: 'serveFile',
            handler: function (o) {
                var _a = o.params, name = _a.name, folderId = _a.folderId;
                var fileId = o.params.fileId;
                var outputMode = o.params.outputMode || 'content';
                // let contents : string|undefined
                if (!fileId && name && folderId) {
                    var result = typedSearchOperations_1.find({
                        type: 'file',
                        columns: [{ name: 'name' }, { name: 'folder' }],
                        filters: [
                            { name: 'name', values: name, operator: 'contains' },
                            { name: 'folder', values: folderId, operator: 'anyOf' }
                        ]
                    }, function (r) { return true; });
                    if (result) {
                        fileId = result.id;
                    }
                }
                if (fileId) {
                    var fileObject = file.load({ id: fileId });
                    if (fileObject) {
                        if (outputMode === 'url') {
                            return fileObject.url;
                        }
                        else if (outputMode === 'redirectToUrl') {
                            return redirect_1.redirect({ url: fileObject.url });
                        }
                        else {
                            return fileObject.getContents();
                        }
                    }
                }
                // if(contents){
                //   return contents
                // }
                // else{
                return createElement_1.ReactLike.createElement("div", null,
                    "File ",
                    name,
                    " ",
                    folderId,
                    " not found");
                // }
            }
        };
    }
    exports.serveFileRoute = serveFileRoute;
});
// export function addFile(config: {})
