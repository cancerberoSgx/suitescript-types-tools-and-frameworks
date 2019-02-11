import { action } from 'typesafe-actions'

import { RecordViewActionTypes, Record, FetchRecordOptions, ShowRecordOptions, ErrorOptions } from './types'

export const fetchRequest = () => action(RecordViewActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Record) => action(RecordViewActionTypes.FETCH_SUCCESS, data)
export const fetchError = (error: ErrorOptions) => action(RecordViewActionTypes.FETCH_ERROR, error)


export const fetchRecord = (config: FetchRecordOptions) => { return action(RecordViewActionTypes.FETCH, config) }
export const showRecord = (results: ShowRecordOptions) => { return action(RecordViewActionTypes.SHOW, results) }


