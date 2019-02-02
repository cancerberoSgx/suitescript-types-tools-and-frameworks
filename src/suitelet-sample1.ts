/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';
import { reactLikeText as reactLikeTest } from './experiments/reactLike/test';
import { setDefaultLogger } from "./log/log";
import { ResponseLogger } from './log/responseLogger';

export let onRequest: EntryPoints.Suitelet.onRequest = context => {

    setDefaultLogger(new ResponseLogger(context.response))
    // typedSearchTest()
    // lsTest()
    // query1Test()
    // typedRecordTest()
    reactLikeTest( )    
} 


