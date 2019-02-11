import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { LayoutState, layoutReducer } from './layout'
import { ListRecordTypesState } from './listRecordTypes/types'
import { listRecordTypesReducer } from './listRecordTypes/reducer'
import { listRecordTypesSaga } from './listRecordTypes/sagas';
import { RecordViewState, recordViewReducer } from './recordView';
import { recordViewSaga } from './recordView/sagas';

export interface ApplicationState {
  layout: LayoutState
  listRecordTypes: ListRecordTypesState
  recordView: RecordViewState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export const rootReducer = combineReducers<ApplicationState>({
  layout: layoutReducer,
  listRecordTypes: listRecordTypesReducer,
  recordView: recordViewReducer

})

export function* rootSaga() {
  yield all([fork(listRecordTypesSaga), fork(recordViewSaga)])
}
