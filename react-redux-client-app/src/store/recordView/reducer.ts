import { Reducer } from 'redux'
import { RecordViewState, RecordViewActionTypes, FetchRecordOptions, ShowRecordOptions } from './types'

const initialState: RecordViewState = {
}
const reducer: Reducer<RecordViewState> = (state = initialState, action) => {
  switch (action.type) {
    case RecordViewActionTypes.FETCH: {

      const options = action.payload as FetchRecordOptions
      return { ...state, ...options, loading: true }
    }
    case RecordViewActionTypes.SHOW: {
      const options = action.payload as ShowRecordOptions
      return { ...state, ...options, loading: false }
    }
    default: {
      return state
    }
  }
}

export { reducer as recordViewReducer }
