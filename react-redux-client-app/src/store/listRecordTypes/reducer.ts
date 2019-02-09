import { Reducer } from 'redux'
import { ListRecordTypesState, ListRecordTypesActionTypes } from './types'
import { getSearchRecordTypes } from '../../nstypes/search';

// Type-safe initialState!
const initialState: ListRecordTypesState = {
  recordTypes: getSearchRecordTypes()
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ListRecordTypesState> = (state = initialState, action) => {
  switch (action.type) {
    case ListRecordTypesActionTypes.FETCH_LIST: {
      return { ...state, type: action.payload }
    }
    case ListRecordTypesActionTypes.SHOW_LIST: {
      return { ...state, results: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as listRecordTypesReducer }
