import { action } from 'typesafe-actions'

import { ListRecordTypesActionTypes, ListRecordTypeResult, FetchListOptions, ShowListOptions } from './types'
export const fetchRequest = () => action(ListRecordTypesActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: ListRecordTypeResult[]) => action(ListRecordTypesActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(ListRecordTypesActionTypes.FETCH_ERROR, message)

export const fetchListRecord = (options: FetchListOptions) => { return action(ListRecordTypesActionTypes.FETCH_LIST, options) }
export const showListRecord = (options: ShowListOptions) => { return action(ListRecordTypesActionTypes.SHOW_LIST, options) }
