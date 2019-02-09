import { action } from 'typesafe-actions'

import { RecordViewActionTypes, Record, FetchRecord } from './types'

export const fetchRequest = () => action(RecordViewActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Record) => action(RecordViewActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(RecordViewActionTypes.FETCH_ERROR, message)


export const fetchRecord = (config: FetchRecord) => { return action(RecordViewActionTypes.FETCH, config) }
export const showRecord = (results: Record) => { return action(RecordViewActionTypes.SHOW, results) }
