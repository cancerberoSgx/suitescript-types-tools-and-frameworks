import { Reducer } from 'redux'
import { RecordViewState, RecordViewActionTypes } from './types'

const initialState: RecordViewState = {
}
const reducer: Reducer<RecordViewState> = (state = initialState, action) => {
  switch (action.type) {
    case RecordViewActionTypes.FETCH: {
      return { ...state, type: action.payload.type, id: action.payload.id, loading: true }
    }
    case RecordViewActionTypes.SHOW: {
      return { ...state, record: action.payload.record, loading: false }
    }
    default: {
      return state
    }
  }
}

export { reducer as recordViewReducer }
