import { action } from 'typesafe-actions'

import { RecordViewActionTypes, Record, FetchRecordOptions, ShowRecordOptions } from './types'

export const fetchRequest = () => action(RecordViewActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Record) => action(RecordViewActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(RecordViewActionTypes.FETCH_ERROR, message)


export const fetchRecord = (config: FetchRecordOptions) => { return action(RecordViewActionTypes.FETCH, config) }
export const showRecord = (results: ShowRecordOptions) => { return action(RecordViewActionTypes.SHOW, results) }

