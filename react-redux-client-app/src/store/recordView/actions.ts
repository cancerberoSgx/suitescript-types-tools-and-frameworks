import { action } from 'typesafe-actions'

import { RecordViewActionTypes, Record } from './types'

export const fetchRequest = () => action(RecordViewActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Record) => action(RecordViewActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(RecordViewActionTypes.FETCH_ERROR, message)


export const fetchRecord = (type: string) => { return action(RecordViewActionTypes.FETCH, type) }
export const showRecord = (results: Record) => { return action(RecordViewActionTypes.SHOW, results) }
