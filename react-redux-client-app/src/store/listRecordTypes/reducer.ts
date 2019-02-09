import { Reducer } from 'redux'
import { ListRecordTypesState, ListRecordTypesActionTypes, ShowListOptions, FetchListOptions } from './types'
import { getSearchRecordTypes } from '../../nstypes/search';

const initialState: ListRecordTypesState = {
  recordTypes: getSearchRecordTypes(),
  pageSize: 10
}

const reducer: Reducer<ListRecordTypesState> = (state = initialState, action) => {
  switch (action.type) {
    case ListRecordTypesActionTypes.FETCH_LIST: {
      const options = action.payload as FetchListOptions
      return { ...state, ...options, loading: true }
    }
    case ListRecordTypesActionTypes.SHOW_LIST: {
      const options = action.payload as ShowListOptions
      return { ...state, ...options, loading: false }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as listRecordTypesReducer }
