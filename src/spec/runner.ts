import { Describe, SpecType, SpecError } from "./describe";
import { It } from "./it";
import { ExpectResult } from "./expect";
import { log } from "../log/log";
import { printError } from './textReporter';
import { printNativeError, now } from '../misc';

/** user needs to instantiate this, add their describe functions and execute run() in order to run the tests adn obtain the results */
export class SpecRunner {

  private static instance = new SpecRunner()
  static getInstance() {
    return SpecRunner.instance
  }
  public describes: Describe[] = [] // TODO getter
  _currentDescribe: Describe | undefined
  _currentIt: It | undefined
  private constructor() { }

  reset() {
    this._currentDescribe = undefined
    this._currentIt = undefined
    this.describes = []
  }

  run(config: SpecRunnerRunConfig = {}): SpecRunnerResult {
    if (config.reset) {
      SpecRunner.getInstance().reset()
    }
    (config.specs || []).forEach((s, index) => {
      try {
        s()
      }
      catch (error) {
        log(`Exception while evaluating describe() and its() of the #${index} given specs function:` + error)
        log((this._currentDescribe && this._currentDescribe.name) + ' ' + (this._currentIt && this._currentIt.name));

        // if (config.breakOnFirstError) {
        log(printNativeError(error))
        // throw error
        // }
      }
    })
    let totalTime = now()
    this.describes.forEach(d => {
      this._currentDescribe = d
      d.its.forEach(i => {
        // log('sesjkdfjksdkhf')
        this._currentIt = i
        try {
          i.fn()
        }
        catch (err) {
          const error = { ...err, nativeException: err }
          i.error = error
          log('Exception catch in it ' + i.name);
          if (config.breakOnFirstError) {
            log(printError(error))
            throw error
          }
        }
      })
    })
    const results = this.getResults(this.describes)
    totalTime = now() - totalTime
    return { results, totalTime }
  }

  protected getResults(describes: Describe[]): DescribeResult[] {
    const specs = describes.map(d => {
      return {
        name: d.name,
        specs: this.getResults(d.describes || []),
        results: d.its.map(i => ({ ...i, parent: undefined }))
      }
    })
    return specs
  }

}

export interface SpecRunnerResult {
  results: DescribeResult[]
  totalTime: number
}
export interface DescribeResult {
  name: string
  specs: DescribeResult[]
  /** internal it() results*/
  results: ItResult[]
}

export interface ItResult {
  name: string
  type: SpecType
  /** internal expect() results */
  results: ExpectResult[]
  error?: SpecError
}

export interface SpecRunnerRunConfig {
  specs?: (() => void)[]
  random?: boolean
  breakOnFirstError?: boolean
  reset?: boolean
}
