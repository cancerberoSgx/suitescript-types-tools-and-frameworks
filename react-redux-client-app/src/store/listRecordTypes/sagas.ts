import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ListRecordTypesActionTypes } from './types'
import { fetchError, fetchSuccess, fetchListRecord, showListRecord } from './actions'
import callApi, { getUrlApi } from '../../utils/callApi'

declare function buildRouteUrl(config: RenderLinkOptions): string;
interface RenderLinkOptions {
  routeName: string;
  params: { [k: string]: any };
}
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

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(ListRecordTypesActionTypes.FETCH_LIST, handleFetch)
}

// We can also use `fork()` here to split our saga into multiple watchers.
export function* listRecordTypesSaga() {
  yield all([fork(watchFetchRequest)])
}

// export default listRecordTypesSaga
