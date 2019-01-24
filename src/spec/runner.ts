import { Describe, SpecType } from "./describe";
import { It } from "./it";
import { ExpectResult } from "./expect";

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
  
  run(config?: SpecRunnerRunConfig): SpecRunnerResult {
    let totalTime=Date.now()
    this.describes.forEach(d => {
      this._currentDescribe = d
      d.its.forEach(i => {

        this._currentIt = i
        i.fn()
      })
    })
    const results  =this.getResults(this.describes)
    totalTime = Date.now()-totalTime
    return {results, totalTime}
  }

  protected getResults(describes: Describe[]): DescribeResult[] {
    const specs = describes.map(d => {
      return {
        name: d.name,
        specs: this.getResults(d.describes),
        results: d.its.map(i => ({...i, parent: undefined }))
      }
    })
    return specs
  }

}

export interface SpecRunnerResult {
  results : DescribeResult[]
  totalTime: number
}
export interface DescribeResult {
  name: string
  specs: DescribeResult[]
  /** internal it() results*/
  results: ItResult[]
}

export interface ItResult{ 
  name: string
  type: SpecType
  /** internal expect() results */
  results: ExpectResult[] 
}

export interface SpecRunnerRunConfig {
  random?: boolean
  breakOnFirstError?: boolean
}
