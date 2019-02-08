/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';
import { setDefaultLogger } from "./log/log";
import { ResponseLogger } from './log/responseLogger';
import { runSpecs } from './__tests__';
import { find } from "./misc/arrayPrototypeFind";
import { miniNetSuiteApp as miniNetSuiteApp } from './app/__tests__/miniNetsuiteApp';
// import { appTest } from './app/__tests__/appTest';

//@ts-ignore
// GLOBAL=this
export let onRequest: EntryPoints.Suitelet.onRequest = context => {

    setDefaultLogger(new ResponseLogger(context.response))
    // typedSearchTest()
    // lsTest()
    // query1Test()
    // typedRecordTest()
    // reactLikeTest( )

    // runSpecs();

    miniNetSuiteApp(context.request, context.response )

}

