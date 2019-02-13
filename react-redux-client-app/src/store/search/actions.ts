import { action } from 'typesafe-actions'

import { SearchActionTypes, FetchSearchOptions, ShowSearchOptions } from './types'
import { ErrorOptions } from '../commonTypes';

// export const fetchRequest = (options: SearchSettings) => action(SearchActionTypes.SEARCH)

// export const fetchSuccess = (data: Search) => action(SearchActionTypes.FETCH_SUCCESS, data)
export const fetchError = (error: ErrorOptions) => action(SearchActionTypes.SEARCH_ERROR, error)


export const fetchSearch = (config: FetchSearchOptions) => { return action(SearchActionTypes.SEARCH, config) }
export const showSearch = (results: ShowSearchOptions) => { return action(SearchActionTypes.SHOW, results) }


