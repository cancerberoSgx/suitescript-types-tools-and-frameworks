import { action } from 'typesafe-actions'

import { ApiActionTypes, ApiRequestOptions, ApiResponseOptions } from './types'
import { ErrorOptions } from '../commonTypes';

export const apiError = (error: ErrorOptions) => action(ApiActionTypes.API_ERROR, error)



