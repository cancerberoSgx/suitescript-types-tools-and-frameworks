import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ListRecordTypesActionTypes } from './types'
import { fetchError, fetchSuccess, fetchListRecord, showListRecord } from './actions'
import callApi, { getUrlApi } from '../../utils/callApi'
import { buildRouteUrl } from '../../utils/routeUrl/buildRouteUrl';

function* handleFetch(action: ReturnType<typeof fetchListRecord>) {
  try {
    const url = buildRouteUrl({
      routeName: 'listRecordTypesJson',
      params: { type: action.payload.type, pageSize: action.payload.pageSize },
    })
    const res = yield call(getUrlApi, 'get', url)

    if (res.error) {
      yield put(fetchError(res))
    } else {
      yield put(fetchSuccess(res))
      yield put(showListRecord(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occurred.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(ListRecordTypesActionTypes.FETCH_LIST, handleFetch)
}

export function* listRecordTypesSaga() {
  yield all([fork(watchFetchRequest)])
}
