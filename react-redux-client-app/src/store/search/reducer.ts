import { Reducer } from 'redux'
import { SearchState, SearchActionTypes, ShowSearchOptions, FetchSearchOptions } from './types'
import { ErrorOptions } from '../commonTypes';

export const searchInitialState: SearchState = {

}
const reducer: Reducer<SearchState> = (state = searchInitialState, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH: {
      const options = action.payload as FetchSearchOptions
      return { ...state, ...options, loading: true }
    }
    case SearchActionTypes.SHOW: {
      const options = action.payload as ShowSearchOptions
      return { ...state, ...options, loading: false }
    }
    case SearchActionTypes.SEARCH_ERROR: {
      const options = action.payload as ErrorOptions
      return {
        ...state, error: options, loading: false
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as searchReducer }
