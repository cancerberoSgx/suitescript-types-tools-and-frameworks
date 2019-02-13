import { combineReducers, Dispatch, Action, AnyAction, compose } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { LayoutState, layoutReducer } from './layout'
import { ListRecordTypesState } from './listRecordTypes/types'
import { listRecordTypesReducer } from './listRecordTypes/reducer'
import { listRecordTypesSaga } from './listRecordTypes/sagas';
import { RecordViewState, recordViewReducer } from './recordView';
import { recordViewSaga } from './recordView/sagas';
import { SearchState, searchReducer } from './search';
// import { ApiState, apiReducer } from './api';
import { ErrorOptions } from './commonTypes';
import { searchSaga } from './search/sagas';
// import { apiSaga } from './api/sagas';

export interface ApplicationState {
  layout: LayoutState
  listRecordTypes: ListRecordTypesState
  recordView: RecordViewState
  search: SearchState
  common?: CommonAppState
}
interface CommonAppState {
  readonly loading?: boolean
  readonly error?: ErrorOptions
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export const rootReducer = compose(combineReducers<ApplicationState>({
  layout: layoutReducer,
  listRecordTypes: listRecordTypesReducer,
  recordView: recordViewReducer,
  search: searchReducer,
  // appState: apiReducer,
}))

export function* rootSaga() {
  yield all([fork(listRecordTypesSaga), fork(recordViewSaga), fork(searchSaga),
    //  fork(apiSaga)
  ])
}
