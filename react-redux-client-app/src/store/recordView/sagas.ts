import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { RecordViewActionTypes } from './types'
import { fetchError, fetchSuccess, fetchRecord, showRecord } from './actions'
import { getUrlApi } from '../../utils/callApi'

declare function buildRouteUrl(config: RenderLinkOptions): string;
interface RenderLinkOptions {
  routeName: string;
  params: { [k: string]: any };
}

function* handleFetch(action: ReturnType<typeof fetchRecord>) {
  try {
    // debugger
    const res = yield call(getUrlApi, 'get', buildRouteUrl({
      routeName: 'recordViewJson',
      params: { ...action.payload },
    }))
    // debugger

    if (res.error) {
      yield put(fetchError(res))
    } else {
      yield put(fetchSuccess(res))
      yield put(showRecord(res))
    }
  } catch (err) {
    debugger
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occurred.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(RecordViewActionTypes.FETCH, handleFetch)
}

export function* recordViewSaga() {
  yield all([fork(watchFetchRequest)])
}

