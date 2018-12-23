import { Describe } from "./describe";
import { It } from "./it";
import { ExpectResult } from "./expect";


/** user needs to instantiate this, add their describe functions and execute run() in order to run the tests adn obtain the results */
export class SpecRunner {

  private static instance = new SpecRunner()
  static getInstance() {
    return SpecRunner.instance
  }

  public describes: Describe[] = [] // todo getter
  // protected results: SpecDescribeResult[] = []

  _currentDescribe: Describe |undefined
  _currentIt: It|undefined
  private constructor(){}

  // /** user facing. just add the top level describe functions . dont call them */
  // addDescribes(d: Describe[]) {
  //   this.describes = this.describes.concat(d)
  // }

  run(config?: SpecRunnerRunConfig): DescribeResult[]{
    this.describes.forEach(d=>{
      this._currentDescribe = d
      console.log('run '+d.its.length);
      
      d.its.forEach(i=>{

  this._currentIt = i
        i.fn()
      })
    })
    return this.getResults(this.describes)
  }

  protected getResults(describes: Describe[]): DescribeResult[]{
    // const arr = Array.isArray(describes)?describes : [describes]
    const specs = describes.map(d=>{
      return {
        name: d.name,
        specs :this.getResults(d.describes),
        results: d.its.map(i=>({name: i.name, results: i.results}))
      }
    })
    return specs
    // const results = describe
  }

  // /** @internal */
  // _addItToCurrentDescribe(it: SpecItWithoutParent){

  // }

  // /** @internal */
  // _setCurrentDescribe(d: SpecDescribeWithoutParent) {

  // }

  // protected _runCurrentDescribe(){

  // }

}
export interface DescribeResult{
  name: string
  specs: DescribeResult[]
  results: {name:string, results: ExpectResult[]}[]
}


// /** represent a single describe() run result. It's a describe that also has its results */
// export interface SpecDescribeResult extends Describe,ExpectResult {
//   /** results for each of its describes */
//   describesResults: SpecDescribeResult[]
//   itsResults: SpecItResult
// }

// export interface SpecItResult extends It, ExpectResult {
// }


export interface SpecRunnerRunConfig{
  random?: boolean
  breakOnFirstError?: boolean
}
