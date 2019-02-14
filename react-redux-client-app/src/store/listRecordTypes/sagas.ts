import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ListRecordTypesActionTypes } from './types'
import { fetchError, fetchSuccess, fetchListRecord, showListRecord } from './actions'
import callApi, { getUrlApi } from '../../utils/callApi'
import { buildRouteUrl } from '../../utils/routeUrl/buildRouteUrl';


//TODO: this should be generic with the url as parameter the url
function* handleFetch(action: ReturnType<typeof fetchListRecord>) {
  try {
    const url = buildRouteUrl({
      routeName: 'searchViewJson',
      params: { type: action.payload.type, pageSize: action.payload.pageSize },
    })
    // console.trace('listRecordTypes sagas ' + url)
    const res = yield call(getUrlApi, 'get', url)
    // debugger

    if (res.error) {
      yield put(fetchError(res))
    } else {
      yield put(fetchSuccess(res))
      yield put(showListRecord(res))
    }
  } catch (err) {
    // debugger
    yield put(fetchError(err))
    // if (err instanceof Error) {
    // yield put(fetchError(err.stack!))
    // } else {
    // yield put(fetchError('An unknown error occurred.'))
    // }
  }
}

function* watchFetchRequest() {
  yield takeEvery(ListRecordTypesActionTypes.FETCH_LIST, handleFetch)
}

export function* listRecordTypesSaga() {
  yield all([fork(watchFetchRequest)])
}
