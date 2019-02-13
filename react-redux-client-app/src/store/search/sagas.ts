import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { SearchActionTypes } from './types'
import { fetchError, fetchSearch, showSearch } from './actions'
import { getUrlApi } from '../../utils/callApi'
import { buildRouteUrl } from '../../utils/routeUrl/buildRouteUrl';

// declare function buildRouteUrl(config: RenderLinkOptions): string;
// interface RenderLinkOptions {
//   routeName: string;
//   params: { [k: string]: any };
// }

function* handleFetch(action: ReturnType<typeof fetchSearch>) {
  try {
    const res = yield call(getUrlApi, 'get', buildRouteUrl({
      routeName: 'searchJson',
      params: { ...action.payload },
    }))
    // debugger
    if (res.error) {
      yield put(fetchError(res))
    } else {
      // yield put(fetchSuccess(res))
      yield put(showSearch(res))
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
  yield takeEvery(SearchActionTypes.SEARCH, handleFetch)
}

export function* searchSaga() {
  yield all([fork(watchFetchRequest)])
}

