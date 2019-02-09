import { SearchRecordType } from '../../nstypes/search';

// Example for using discriminated union types.
// export type ThemeColors = 'light' | 'dark'

// Use const enums for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export const enum ListRecordTypesActionTypes {
  FETCH_LIST = '@@listRecordTypes/FETCH_LIST',
  SHOW_LIST = '@@listRecordTypes/SHOW_LIST',

  FETCH_REQUEST = '@@listRecordTypes/FETCH_REQUEST',
  FETCH_SUCCESS = '@@listRecordTypes/FETCH_SUCCESS',
  FETCH_ERROR = '@@listRecordTypes/FETCH_ERROR',
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface ListRecordTypesState {
  readonly type?: string
  readonly results?: ListRecordTypeResult[]
  readonly recordTypes: string[]
}

export interface ListRecordTypeResult {
  id: string, recordType: string
}
