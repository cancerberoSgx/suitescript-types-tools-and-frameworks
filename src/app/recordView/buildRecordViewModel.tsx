import { getRecordTypeMetadata } from '../../introspection/recordMetadata';
import { RecordV, Value, Text } from "./recordViewTypes";
import * as record from 'N/record';
import { tryTo } from '../../misc/misc';

export function buildRecordViewModel(r: record.Record, seeValues: boolean = false, showAllFields: boolean = false): RecordV {
  const record = getRecordTypeMetadata({
    record: r,
    fieldPredicate: showAllFields ? f => true : internalFilterPredicate,
    debug: false,
    callGetSublistField: true
  }) as RecordV;
  if (!record) {
    throw 'record not found';
  }
  record.fields = record.fields
    .filter(f => f.id)
    .map(f => 
      // {
      // if (!seeValues) {
        // return f;
      // }
      // let value: Value, text: Text
      // value = tryTo(() => r.getValue(f.id))
      // text = tryTo(() => r.getText(f.id))
      // return 
      seeValues ? { ...f, value:  tryTo(() => r.getValue(f.id)), text: tryTo(() => r.getText(f.id))} : f
    // }
    )
    .sort((a, b) => a.id.localeCompare(b.id))
  record.sublists = record.sublists
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(s => {
      s.fields = s.fields.sort((a, b) => a.id.localeCompare(b.id))
      s.lineCount = r.getLineCount({ sublistId: s.id })||0
      s.lines = []
      for (let line = 0; line < s.lineCount; line++) {
        s.lines[line] = { rows: [] };
        s.fields.forEach(f => {
          const text = tryTo(() => r.getSublistText({ sublistId: s.id, fieldId: f.id, line }))
          const value = tryTo(() => r.getSublistValue({ sublistId: s.id, fieldId: f.id, line }))
          s.lines[line].rows.push({ text, value, field: f });
        });
      }
      return s;
    });
  return record;
}
function internalFilterPredicate(f: string): boolean {
  return f.indexOf('_') !== 0 && f.indexOf('sys_') !== 0 && f.indexOf('nsapi') !== 0;
}
