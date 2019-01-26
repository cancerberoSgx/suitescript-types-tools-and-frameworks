define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function writeRecordJsonInResponse(r, response) {
        writeJsonInResponse(recordToJSON(r), response);
    }
    exports.writeRecordJsonInResponse = writeRecordJsonInResponse;
    function writeJsonInResponse(json, response) {
        response.setHeader({ name: 'Content-Type', value: 'application/json; charset=UTF-8' });
        response.write(JSON.stringify(json));
    }
    exports.writeJsonInResponse = writeJsonInResponse;
    function recordToJSON(r) {
        return r.toJSON();
    }
    exports.recordToJSON = recordToJSON;
});
