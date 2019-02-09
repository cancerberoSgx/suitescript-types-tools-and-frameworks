import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ListRecordTypesActionTypes } from './types'
import { fetchError, fetchSuccess, fetchListRecord, showListRecord } from './actions'
import callApi from '../../utils/callApi'
import { callApi2 } from '../../utils/getRoute';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com'
declare function buildRouteUrl(config: RenderLinkOptions): string;
interface RenderLinkOptions {
  routeName: string;
  params: { [k: string]: any };
}
function* handleFetch(action: ReturnType<typeof fetchListRecord>) {
  try {
    // To call async functions, use redux-saga's `call()`.

    const t = action.type
    const config = {
      routeName: 'listRecordTypesJson',
      params: { type: action.payload },
    }
    // const res = yield call(getRoute, config)
    const url = buildRouteUrl(config)

    const res = yield call(callApi2, 'get', url)


    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
      yield put(showListRecord(res.results))
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
