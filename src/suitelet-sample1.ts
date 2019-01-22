/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';
import * as record from 'N/record';
import { initialize as initializeLogger, setEnabled as loggerSetEnabled, log } from './responseLogger';



export let onRequest: EntryPoints.Suitelet.onRequest = context => {
    initializeLogger({ response: context.response, enabled: true })
    
}


/** 
 * Will move given category (and all its descendants to given target parent (targetId). 
 * 
 * Use targetId===null to move the category to the root (as primary category)
 * 
 * Important: It will actually clone (just) the given category in the parent and then move its direct children to the clone 
 */
export function moveCategory(config: MoveCategoryConfig): record.Record {
    const fromRecord = record.load({ type: 'commercecategory', id: 18 })
    const newRecordId = cloneRecord({
        fromRecord,
        type: 'commercecategory',
        customFieldValues: { primaryparent: null },
        ignoreFields: ['lastmodifiedby', 'created']
    }) 
    const toRecord = record.load({ type: 'commercecategory', id: newRecordId })
    cloneSublist({
        fromRecord,
        toRecord,
        sublistId: 'subcategories'
    })
    return toRecord
}
export interface MoveCategoryConfig {
    id: RecordId
    /** use null to move the category to the root */
    targetId: RecordId | null
}
 


export function cloneRecord(config: CloneRecordConfig): number {
    // const fromRecord = record.load(config)
    let {fromRecord, ignoreFields=[], customFieldValues= {}} = config
    log(`target id: ${fromRecord && fromRecord.id}`)
    const newRecord = record.create({ type: fromRecord.type })
    log(`newRecord: ${newRecord}`)
    const fields = fromRecord.getFields().filter(f => [...(ignoreFields || []), 'id'].indexOf(f) === -1)
    log(`cloned fields: ${fields.join(', ')}`)
    customFieldValues = customFieldValues || {}
    fields.forEach(field => newRecord.setValue({ fieldId: field, value: (typeof customFieldValues[field] === 'undefined') ? fromRecord.getValue(field) : customFieldValues[field] }))
    const id = newRecord.save()
    log(`new record id : ${id}`)
    return id
}
export interface CloneRecordConfig {
    type: string,
    fromRecord: record.Record,
    customFieldValues?: { [id: string]: any },
    ignoreFields?: string[]
}

interface CloneSublistConfigSublist {
    sublistId: string
    /** sublist-field-id to value map */
    customSublistFieldValues?: { [id: string]: any },
    ignoreSublistFields?: string[]
    ignoreLines?: number[]
}

export interface CloneSublistConfigRecord {
    fromRecord: record.Record
    toRecord: record.Record
    dontSave?: boolean
}
export interface CloneSublistConfig extends CloneSublistConfigSublist, CloneSublistConfigRecord {
}

/** will clone given record's sublist to given target record. returns the new sublist id.  */
export function cloneSublist(config: CloneSublistConfig) {
    const { fromRecord, toRecord, sublistId, dontSave, customSublistFieldValues = {}, ignoreLines = [], ignoreSublistFields = [] } = config
    const sublistFields = fromRecord.getSublistFields({ sublistId }).filter(f => [...ignoreSublistFields].indexOf(f) === -1)
    log(`cloneSublist starts: : ${sublistId}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}, dontSave: ${dontSave}, sublistFieldsToClone: ${sublistFields.join(', ')}`)
    const lineCount = fromRecord.getLineCount({ sublistId });
    for (let line = 0; line < lineCount; line++) {
        if (ignoreLines.indexOf(line) !== -1) {
            continue
        }
        sublistFields.forEach(fieldId => {
            const value = (typeof customSublistFieldValues[fieldId] === 'undefined') ?
                fromRecord.getSublistValue({ sublistId, fieldId, line }) :
                customSublistFieldValues[fieldId]
            toRecord.setSublistValue({ sublistId, fieldId, line, value })
            log(`setSublistValue: ${sublistId}, field ${fieldId}, line: ${line} value: ${value}`)
        })
    }

    if (!dontSave) {
        toRecord.save()
    }
    log(`cloneSublist ends: ${sublistId}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}`)
}


export interface CloneSublistsConfig extends CloneSublistConfigRecord {
    ignoreSublists?: string[]
    customCloneSublistConfigs?: { [sublistId: string]: CloneSublistConfigRecord }
}
export function cloneSublists(config: CloneSublistsConfig): string[] {
    const { fromRecord, toRecord, ignoreSublists = [], dontSave, customCloneSublistConfigs = {} } = config
    const sublists = fromRecord.getSublists().filter(f => [...ignoreSublists].indexOf(f) === -1)
    log(`cloneSublists starts: sublists: ${sublists.join(',')}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}, dontSave: ${dontSave}, customCloneSublistConfigs: ${Object.keys(customCloneSublistConfigs).join(',')}`)
    sublists.forEach(sublistId => {
        const defaultCloneSublistConfig = { sublistId, fromRecord, toRecord, dontSave }
        const finalSublistConfig = {
            ...defaultCloneSublistConfig,
            ...(customCloneSublistConfigs[sublistId] || {}),
            dontSave: true// we don't want to save the record until all sublists are cloned
        }
        cloneSublist(finalSublistConfig)
    })
    if (!dontSave) {
        toRecord.save()
    }
    log(`cloneSublists ends: sublists: ${sublists.join(',')}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}`)
    return null
}


export type RecordId = number | string


// Research:
// the following fails with `"COMMERCE_CATEGORY_CANNOT_UPDATE_PRIMARY_PARENT","message":"The Primary Parent was not updated. Other records depend on it."`
// const r = record.load({id: 18, type: 'commercecategory',})
// r.setValue({fieldId: 'primaryparent', value: null})
// const id = r.save()
// log(`new record id : ${id}`)
