import { ErrorOptions } from '../commonTypes';

export enum ListRecordTypesActionTypes {
  FETCH_LIST = '@@listRecordTypes/FETCH_LIST',
  SHOW_LIST = '@@listRecordTypes/SHOW_LIST',

  FETCH_REQUEST = '@@listRecordTypes/FETCH_REQUEST',
  FETCH_SUCCESS = '@@listRecordTypes/FETCH_SUCCESS',
  FETCH_ERROR = '@@listRecordTypes/FETCH_ERROR',
}

export interface ListRecordTypesState {
  readonly type?: string
  readonly results?: ListRecordTypeResult[]
  /** userColumns are the columns shown in the UI while resultColumns are the real userColumns in the response (it can differ when mocking responses*/
  readonly resultColumns?: string[]
  readonly recordTypes: string[]
  readonly loading?: boolean
  readonly pageSize: number
  readonly error?: ErrorOptions
}

export interface ListRecordTypeResult {
  id: string,
  recordType: string
  columns: string[]
}


export interface FetchListOptions {
  type: string,
  pageSize: number
  userColumns?: string[]
}

export interface ShowListOptions {
  readonly results: ListRecordTypeResult[]
  readonly userColumns: string[]
}
