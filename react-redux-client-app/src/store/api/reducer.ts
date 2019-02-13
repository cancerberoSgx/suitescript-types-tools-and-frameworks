// import { Reducer } from 'redux'
// import { ApiState, ApiActionTypes, ApiResponseOptions, ApiRequestOptions } from './types'
// import { ErrorOptions } from '../commonTypes';
// import { ApplicationState } from '..';
// import { getInitialApplicationState } from '../../configureStore';
// import { RouteRequest, parseRouteUrl } from '../../utils/routeUrl/parseRouteUrl';
// import { ROUTE_APP_PARAM_PREFIX } from '../../utils/routeUrl/routeUrlConstants';
// import { fetchRequest, fetchListRecord } from '../listRecordTypes';
// import { fetchRecord } from '../recordView';

// // const reducer: Reducer<ApplicationState> = (state = getInitialApplicationState(), action) => {
// //   switch (action.type) {
// //     case ApiActionTypes.API_REQUEST: {
// //       // const options = action.payload as ApiRequestOptions
// //       // const request = parseRouteUrl(options.routeUrlParams)
// //       // const dispatcher = apiRequestToActionMap[request.name]
// //       // if (dispatcher) {
// //       //   dispatcher({ state, request })
// //       // }
// //       // else {
// //       //   return { ...state, common: { ...(state.common || {}), error: `Api operation name not supported or invalid: ${request.name}` } }
// //       // }
// //       return { ...state }
// //     }
// //     // case ApiActionTypes.API_RESPONSE: {
// //     //   const options = action.payload as ApiResponseOptions
// //     //   return { ...state }
// //     // }
// //     case ApiActionTypes.API_ERROR: {
// //       const options = action.payload as ErrorOptions
// //       return {
// //         ...state
// //       }
// //     }
// //     default: {
// //       return state
// //     }
// //   }
// // }

// // interface ApiDispatchOptions { state: ApplicationState, request: RouteRequest }
// // type Dispatch = (options: ApiRequestOptions) => any
// // type SupportedRouteNames = 'listRecordTypes' | 'recordView'
// // // interface ApiReducer {
// // type ApiRequestToActionMap = { [appName in SupportedRouteNames]: Dispatch }
// // // handleRequest:
// // // name: string
// // // predicate: (r: RouteRequest) => boolean
// // // }
// // // function getRequest (options: ApiRequestOptions) {
// // //       const request = parseRouteUrl(options.routeUrlParams)
// // //       return request
// // //       // const dispatcher = apiRequestToActionMap[request.name]

// // // }
// // const apiRequestToActionMap: ApiRequestToActionMap = {

// //   listRecordTypes(options: ApiRequestOptions) {
// //     const request = parseRouteUrl(options.routeUrlParams)
// //     fetchListRecord({ type: request.params.type, pageSize: 5 })//TODO request.params.pageSize
// //   },
// //   recordView(options: ApiRequestOptions) {
// //     const request = parseRouteUrl(options.routeUrlParams)
// //     fetchRecord({ type: request.params.type, id: request.params.id })
// //   }
// // }
// // const reducers: ApiReducer[] = [
// //   {
// //     name: 'recordViewGetRecord',
// //     predicate(r) {
// //       return r.name === `${ROUTE_APP_PARAM_PREFIX}recordView`
// //     },
// //     handleRequest(state, request) {
// //       return { ...state, }
// //     }

// //   },

// // ]

// // export { reducer as apiReducer }
