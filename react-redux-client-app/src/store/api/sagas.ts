// import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
// import { ApiActionTypes } from './types'
// import { apiError, apiRequest } from './actions'
// import { getUrlApi } from '../../utils/callApi'
// import { buildRouteUrl } from '../../utils/routeUrl/buildRouteUrl';

// // declare function buildRouteUrl(config: RenderLinkOptions): string;
// // interface RenderLinkOptions {
// //   routeName: string;
// //   params: { [k: string]: any };
// // }

// function* handleFetch(action: ReturnType<typeof apiRequest>) {
//   try {
//     const res = yield call(getUrlApi, 'get', buildRouteUrl({
//       routeName: 'apiJson',
//       params: { ...action.payload },
//     }))
//     // debugger
//     if (res.error) {
//       yield put(apiError(res))
//     } else {
//       // yield put(fetchSuccess(res))
//       // yield put(apiResponse(res))
//     }
//   } catch (err) {
//     // debugger
//     yield put(apiError(err))
//     // if (err instanceof Error) {
//     // yield put(fetchError(err.stack!))
//     // } else {
//     // yield put(fetchError('An unknown error occurred.'))
//     // }
//   }
// }

// function* watchFetchRequest() {
//   yield takeEvery(ApiActionTypes.API_REQUEST, handleFetch)
// }

// export function* apiSaga() {
//   yield all([fork(watchFetchRequest)])
// }

