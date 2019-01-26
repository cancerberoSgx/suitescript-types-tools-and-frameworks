import { SpecRunner } from "./spec/runner";
import { TextReporter, printError } from "./spec/textReporter";
import { log } from "./log/log";
import {resultsTest} from './search/__tests__/resultsTest'
import { matrixItemTest } from './catalog/__tests__/matrixItemTest';
import { memoizeTests } from './memoize';
import { recordMetadataTest } from './introspection/recordMetadataTest';
import { recordRefTest } from './record/__tests__/recordRefTest';
import { printNativeError } from './misc';
  
export function runSpecs(){ 

//@ts-ignore
GLOBAL1 = 123

  try {    
  const result = SpecRunner.getInstance().run({
    specs: [
      recordRefTest, 
      resultsTest,
      matrixItemTest,
      // recordMetadataTest
    ],
    reset: true
    // breakOnFirstError: true
  })
  log(new TextReporter  ().render({ 
      result,  
      // format: 'detailed' ,
    }).output)
  } catch (error) {
    log(printNativeError(error));
  }
  
}  