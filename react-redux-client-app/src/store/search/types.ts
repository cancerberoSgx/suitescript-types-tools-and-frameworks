import { ErrorOptions } from '../commonTypes';

export enum SearchActionTypes {
  SEARCH = '@@Search/SEARCH',
  SHOW = '@@Search/SHOW',
  // TYPE_SELECTED = '@@Search/TYPE_SELECTED',
  // FETCH_REQUEST = '@@Search/FETCH_REQUEST',
  // FETCH_SUCCESS = '@@Search/FETCH_SUCCESS',
  SEARCH_ERROR = '@@Search/FETCH_ERROR',
}

export interface SearchState {
  readonly type?: string
  readonly loading?: boolean
  readonly error?: ErrorOptions
}

export interface FetchSearchOptions {
  id: string,
  type: string,
}

export interface ShowSearchOptions {
  error?: ErrorOptions
}

// export interface ErrorOptions {
//   error?: Error,
//   responseText: string
// }

// export interface SearchSettings {
// }



