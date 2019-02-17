import { Reducer } from 'redux'
import { RecordViewState, RecordViewActionTypes, FetchRecordOptions, ShowRecordOptions } from './types'
import { ErrorOptions } from '../commonTypes';

export const recordViewInitialState: RecordViewState = {
  seeValues: false,
  showAllFields: false,
  showSublistLines: false
}
const reducer: Reducer<RecordViewState> = (state = recordViewInitialState, action) => {
  switch (action.type) {
    case RecordViewActionTypes.FETCH: {
      const options = action.payload as FetchRecordOptions
      return { ...state, ...options, error: undefined, loading: true }
    }
    case RecordViewActionTypes.SHOW: {
      const options = action.payload as ShowRecordOptions
      return { ...state, ...options, error: undefined, loading: false }
    }
    case RecordViewActionTypes.FETCH_ERROR: {
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

export { reducer as recordViewReducer }
