import { SpecRunner } from "./spec/runner";
import { TextReporter } from "./spec/textReporter";
import { log } from "./log/responseLogger";


import {resultsTest} from './search/__tests__/resultsTest'
import { matrixItemTest } from './catalog/__tests__/matrixItemTest';
import { memoizeTests } from './memoize';
import { recordMetadataTest } from './introspection/recordMetadataTest';

export function runSpecs(){ 
  SpecRunner.getInstance().reset()
  resultsTest()
  matrixItemTest() 
  memoizeTests()
  recordMetadataTest() 
   
  const result = SpecRunner.getInstance().run()
  log(new TextReporter().render({ result, format: 'detailed' }).output)
}  