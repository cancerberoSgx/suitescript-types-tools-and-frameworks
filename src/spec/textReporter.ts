import { ReportConfig, Reporter, ReportResult } from "./reporter";
import { DescribeResult, ItResult } from "./runner";
import { ExpectResult } from "./expect";
import { repeat, find, printNativeError, indent } from "../misc/misc";
import { printMs } from "../misc/printMs";
// import { log } from "../log/log";
import { Describe, SpecError } from './describe';
// import { NativeError } from '../nstypes';

export interface TextReportResult extends ReportResult {
  output: string
}

export interface TextReportConfig extends ReportConfig {
  format?: 'short' | 'detailed'
  tabSize?: number
}
export class TextReporter implements Reporter<TextReportConfig, TextReportResult> {
  config!: TextReportConfig;
  render(config: TextReportConfig): TextReportResult {
    this.config = config
    this.config.tabSize = this.config.tabSize || 4
    this.config.format = this.config.format || 'short'
    let output = ``
    config.result.results.forEach(r => {
      output += this.renderDescribe(r)
    })
    let totalExpectCount = 0, totalExpectFail = 0, totalItCount = 0, totalItFail=0
    this.config.result.results
    .forEach(d=>d.results.filter(i=>i.type!=='x')//TODO:fit and fdescribe
    .forEach(i=>{
      if(i.error){
        console.log(printError(i.error, i, d))
      }
      totalItCount++
      const expectFail =i.results.filter(r=>{
        totalExpectCount++
        return r.type==='fail'
      }).length
      totalExpectFail+= expectFail
      if(expectFail){
        totalItFail++
      }
    })
    )
    output+=`
${totalItCount} spec, ${totalItFail} failures ${(this.config.format==='detailed' || true) ? `
${totalExpectCount} expectations, ${totalExpectFail} failures` : ``}
Finished in ${printMs(this.config.result.totalTime, {seconds: true, ms: true})}
`
    return { 
      output
    }
  } 
//   printError(i: It, d: Describe): string {
//     
//       }
  renderDescribe(d: DescribeResult, indentLevel = 0): string {
    // if (this.config.format === 'detailed') {
    //   return 'detailed format not implemented'
    // }
    // else {
      const failIts = d.results.filter(i => this.config.format==='detailed' || find(i.results, r => r.type === 'fail'))

      if (this.config.format==='detailed' || failIts.length) {
        return `
${this.indent(indentLevel)}${d.name}: ${failIts.map(i => this.renderIt(i, indentLevel + 1))}`
      }
      else { return '' }
    // }
  }

  renderIt(i: ItResult, indentLevel: number): any {
    // if (this.config.format === 'detailed') {
    //   return 'detailed format not implemented'
    // }
    // else {
      return `
${this.indent(indentLevel)}${i.name}: ${i.results.filter(r => this.config.format==='detailed' || r.type=== 'fail').map((r, index) => this.renderExpect(r, index, indentLevel + 1))}`
    }
  // }
  
  renderExpect(r: ExpectResult, index: number, indentLevel: number): any {
    // if (this.config.format === 'detailed') {
    //   return 'detailed format not implemented'
    // }
    // else {
      return `
${this.indent(indentLevel)}${r.message} (expect #${index+1})`
    // }
  }

  indent(indentLevel: number): string {
    // if(this.config.format==='detailed'){
    //   return 'detailed format not implemented'
    // }
    // else {
    return `${indent(indentLevel * this.config.tabSize!)}`
    // }

  }
}

export function 
printError(error: SpecError, i?: ItResult, d?: DescribeResult): any {
  return `Error: in ${d&&d.name} - ${i&&i.name}:
  ${printNativeError(error.nativeException)}`
}