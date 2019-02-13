import { ErrorOptions } from '../commonTypes';

export const enum ListRecordTypesActionTypes {
  FETCH_LIST = '@@listRecordTypes/FETCH_LIST',
  SHOW_LIST = '@@listRecordTypes/SHOW_LIST',

  FETCH_REQUEST = '@@listRecordTypes/FETCH_REQUEST',
  FETCH_SUCCESS = '@@listRecordTypes/FETCH_SUCCESS',
  FETCH_ERROR = '@@listRecordTypes/FETCH_ERROR',
}

export interface ListRecordTypesState {
  readonly type?: string
  readonly results?: ListRecordTypeResult[]
  readonly recordTypes: string[]
  readonly loading?: boolean
  readonly pageSize: number
  readonly error?: ErrorOptions
}

export interface ListRecordTypeResult {
  id: string,
  recordType: string
}


export interface FetchListOptions { type: string, pageSize: number }

export interface ShowListOptions {
  results: ListRecordTypeResult[]
}
