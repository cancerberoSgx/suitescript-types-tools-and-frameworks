import { SpecRunner } from "./spec/runner";
import { TextReporter, printError } from "./spec/textReporter";
import { log } from "./log/log";
import { resultsTest } from './search/__tests__/resultsTest'
import { matrixItemTest } from './catalog/__tests__/matrixItemTest';
import { memoizeTests } from './memoize';
import { recordMetadataTest } from './introspection/recordMetadataTest';
import { recordRefTest } from './record/__tests__/recordRefTest';
import { printNativeError } from './misc/misc';
import { jsxTests } from './jsx/__tests__/jsxTests';
import { ServerResponse } from 'N/http';

export function runSpecs(): boolean {
  try {
    console.log('Running specs');
    
    const result = SpecRunner.getInstance().run({
      specs: [
        // recordRefTest,
        // resultsTest,
        // matrixItemTest,
        // recordMetadataTest
        jsxTests
      ],
      reset: true
      // breakOnFirstError: true
    })
    const {output, fail} = new TextReporter().render({
      result,
      // format: 'detailed' ,
    })
    console.log(output);
    return fail
  } catch (error) {
    console.log(printNativeError(error));
    return true
  }

}  