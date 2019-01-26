"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const shelljs_1 = require("shelljs");
const path_1 = require("path");
function generateProject(config) {
    if (config.cleanOutput) {
        shelljs_1.rm('-rf', config.outputFolder);
    }
    const { inputFolder, outputFolder, typedRecordImportBase } = config;
    const recordIds = [];
    shelljs_1.mkdir('-p', outputFolder);
    shelljs_1.ls('-R', inputFolder).map(f => path_1.join(path_1.resolve(inputFolder), f))
        .filter(f => f.endsWith('.json')).forEach(f => {
        const data = readMetadata(f, config);
        recordIdFilePaths[data.id] = f;
        const { output } = config.generateFile({ data, typedRecordImportBase });
        const outputFile = path_1.join(outputFolder, path_1.basename(f, '.json') + '.ts');
        fs_1.writeFileSync(outputFile, output);
        recordIds.push(data.id);
        config.generateAfter(Object.assign({}, config, { recordIds }));
    });
    fs_1.writeFileSync(path_1.join(outputFolder, 'index.ts'), generateIndex(Object.assign({}, config, { recordIds })));
}
exports.generateProject = generateProject;
const recordIdFilePaths = {};
function getMetadataFilePathForRecord(id) {
    return recordIdFilePaths[id];
}
exports.getMetadataFilePathForRecord = getMetadataFilePathForRecord;
function generateIndex(config) {
    return shelljs_1.ls('-R', config.outputFolder) //.map(f => join(resolve(config.outputFolder), f))
        .filter(f => f.endsWith('.ts'))
        .map(f => `export * from './${path_1.basename(f, '.ts')}';`).join(`\n`);
}
function readMetadata(f, config) {
    const empty = { id: 'empty', label: 'empty', supportCustomFields: false, searchFilters: [], searchJoins: [], searchColumns: [], fields: [], sublists: [], };
    try {
        return Object.assign({}, empty, JSON.parse(fs_1.readFileSync(f).toString()));
    }
    catch (error) { // invalid json
        console.log('ERROR in generateFile: ' + error);
        if (config && config.throwOnError) {
            throw error;
        }
    }
    return empty;
}
exports.readMetadata = readMetadata;
