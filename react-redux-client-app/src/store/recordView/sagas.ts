import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getUrlApi } from '../../utils/callApi';
import { buildRouteUrl } from '../../utils/routeUrl/buildRouteUrl';
import { fetchError, fetchRecord, fetchSuccess, showRecord } from './actions';
import { RecordViewActionTypes } from './types';

function* handleFetch(action: ReturnType<typeof fetchRecord>) {
  try {
    const res = yield call(getUrlApi, 'get', buildRouteUrl({
      routeName: 'recordViewJson',
      params: { ...action.payload },
    }))
    if (res.error) {
      yield put(fetchError(res))
    } else {
      yield put(fetchSuccess(res))
      yield put(showRecord(res))
    }
  } catch (err) {
    yield put(fetchError(err))
  }
}

function* watchFetchRequest() {
  yield takeEvery(RecordViewActionTypes.FETCH, handleFetch)
}

export function* recordViewSaga() {
  yield all([fork(watchFetchRequest)])
}

