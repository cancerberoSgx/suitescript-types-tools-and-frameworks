define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getLines(config) {
        var counter = 0;
        var arr = [];
        var record = config.record, sublistId = config.sublistId;
        var lineCount = record.getLineCount({ sublistId: sublistId });
        for (var line = 0; line < lineCount; line++) {
            arr.push(counter++);
        }
        return arr;
        // return new Array().fill(0).map(i => counter++) // cant: syntax error
    }
    exports.getLines = getLines;
});
// export interface ForEachLineFieldConfig {
//     record: Record
//     sublistId: string
//     fn: (line: number, fieldId: string, fieldValue: any) => void
// }
// // export function forEachSublistField
// // export function forEachLineField(config: EachSublistConfig}){
// //     const {record, sublistId, fn} = config
// //     const lineCount =  record.getLineCount({sublistId})
// //     for (let line = 0; line < lineCount; line++) {
// //         sublistFields.forEach(fieldId => {
// //             const value = (typeof customSublistFieldValues[fieldId] === 'undefined') ?
// //                 fromRecord.getSublistValue({ sublistId, fieldId, line }) :
// //                 customSublistFieldValues[fieldId];
// //             toRecord.setSublistValue({ sublistId, fieldId, line, value });
// //             log(`setSublistValue: ${sublistId}, field ${fieldId}, line: ${line} value: ${value}`);
// //         });
// //     }
// // }
// // export function getChildCategories(category: Record){
// //     // category.removeSublistSubrecord
// //     category.getLineCount
// //     category.getSublistSubrecord({sublistId: 'subcategories', fieldId: 'subcategory'})
// // }
// export function mapLines<T>(config: { record: Record, sublistId: string, fn: (line: number, record?: Record, sublistId?: string, ...args: any[]) => T }): T[] {
//     const { record = config.record, sublistId = config.sublistId, fn } = config
//     const lineCount = record.getLineCount({ sublistId })
//     const arr: T[] = []
//     for (let line = 0; line < lineCount; line++) {
//         arr.push(fn(line, record, sublistId))
//     }
//     return arr
// }  
