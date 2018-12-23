import { SpecRunner } from "./spec/runner";
import { TextReporter } from "./spec/textReporter";
import { log } from "./log/responseLogger";


import {resultsTest} from './search/__tests__/resultsTest'

export function runSpecs(){
  resultsTest()

  const result = SpecRunner.getInstance().run()
  log(new TextReporter().render({ result }).output)
}