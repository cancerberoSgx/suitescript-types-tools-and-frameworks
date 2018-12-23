import { Describe } from "./describe";
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

  run(config?: SpecRunnerRunConfig): DescribeResult[] {
    this.describes.forEach(d => {
      this._currentDescribe = d
      d.its.forEach(i => {

        this._currentIt = i
        i.fn()
      })
    })
    return this.getResults(this.describes)
  }

  protected getResults(describes: Describe[]): DescribeResult[] {
    const specs = describes.map(d => {
      return {
        name: d.name,
        specs: this.getResults(d.describes),
        results: d.its.map(i => ({ name: i.name, results: i.results }))
      }
    })
    return specs
  }

}
export interface DescribeResult {
  name: string
  specs: DescribeResult[]
  results: { name: string, results: ExpectResult[] }[]
}

export interface SpecRunnerRunConfig {
  random?: boolean
  breakOnFirstError?: boolean
}
