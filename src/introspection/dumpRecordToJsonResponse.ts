import { ServerResponse } from 'N/http';
import { Record } from 'N/record';

export function writeRecordJsonInResponse(r: Record, response: ServerResponse) {
  writeJsonInResponse(recordToJSON(r), response)
}
export function writeJsonInResponse(json: any, response: ServerResponse) {
  response.setHeader({ name: 'Content-Type', value: 'application/json; charset=UTF-8' })
  response.write(JSON.stringify(json))
}
export function recordToJSON(r: Record): RecordToJSONReturnValue {
  return (r as any).toJSON()
}

export type RecordToJSONReturnValue = {
  id: string,
  type: string,
  isDynamic: boolean,
  fields: { [fieldId: string]: string }
  sublists: { [sublistId: string]: { [lineDescription: string]: string } }
}
