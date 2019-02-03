/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';
import { setDefaultLogger } from "./log/log";
import { ResponseLogger } from './log/responseLogger';
import { runSpecs } from './__tests__';
import { find } from './misc/misc';
import { appTest } from './app/__tests__/appTest';

export let onRequest: EntryPoints.Suitelet.onRequest = context => {

    setDefaultLogger(new ResponseLogger(context.response))
    // typedSearchTest()
    // lsTest()
    // query1Test()
    // typedRecordTest()
    // reactLikeTest( )   
    
    // runSpecs();

    appTest(context.request, context.response)

} 

