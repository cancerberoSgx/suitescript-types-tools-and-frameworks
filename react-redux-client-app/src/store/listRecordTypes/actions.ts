import { action } from 'typesafe-actions'

import { ListRecordTypesActionTypes, ListRecordTypeResult } from './types'
import { SearchRecordType } from '../../nstypes/search';

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchRequest = () => action(ListRecordTypesActionTypes.FETCH_REQUEST)

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: ListRecordTypeResult[]) => action(ListRecordTypesActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(ListRecordTypesActionTypes.FETCH_ERROR, message)


export const fetchListRecord = (type: string) => { return action(ListRecordTypesActionTypes.FETCH_LIST, type) }
export const showListRecord = (results: ListRecordTypeResult[]) => { return action(ListRecordTypesActionTypes.SHOW_LIST, results) }
