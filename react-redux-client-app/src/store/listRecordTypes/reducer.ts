import { Reducer } from 'redux'
import { ListRecordTypesState, ListRecordTypesActionTypes, ShowListOptions, FetchListOptions } from './types'
import { getSearchRecordTypes } from '../../nstypes/search';

const initialState: ListRecordTypesState = {
  recordTypes: getSearchRecordTypes(),
  pageSize: 5
}

const reducer: Reducer<ListRecordTypesState> = (state = initialState, action) => {
  switch (action.type) {
    case ListRecordTypesActionTypes.FETCH_LIST: {
      // debugger
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

export { reducer as listRecordTypesReducer }
