import { ErrorOptions } from '../commonTypes';

export enum ApiActionTypes {
  API_REQUEST = '@@Api/API_REQUEST',
  // API_RESPONSE = '@@Api/API_RESPONSE',
  API_ERROR = '@@Api/API_ERROR',
}

export interface ApiState {
  // readonly route: Route
  readonly loading?: boolean
  readonly error?: ErrorOptions
}

export interface ApiRequestOptions {
  routeUrlParams: string
}

export interface ApiResponseOptions {
  error?: ErrorOptions
}



