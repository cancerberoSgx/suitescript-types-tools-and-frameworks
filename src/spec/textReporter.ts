import { ReportConfig, Reporter, ReportResult } from "./reporter";
import { DescribeResult, ItResult } from "./runner";
import { ExpectResult } from "./expect";
import { repeat, find } from "../misc";
import { log } from "../log/responseLogger";

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
      totalItCount++
      const expectFailed = i.results.filter(r=>{
        totalExpectCount++
        return r.type==='fail'
      }).length
      totalExpectFail+= totalExpectFail
      if(totalExpectFail){
        totalItFail++
      }
    })
    )
    output+=`
${totalItCount} spec, ${totalItFail} failures ${this.config.format==='detailed' ? `
${totalExpectCount} expect(), ${totalExpectFail} failures` : ``}
Finished in ${this.config.result.totalTime/1000} seconds
`
    return { 
      output
    }
  } 
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
${this.indent(indentLevel)}${i.name}: ${i.results.map(r => this.renderExpect(r, indentLevel + 1))}`
    }
  // }

  renderExpect(r: ExpectResult, indentLevel: number): any {
    // if (this.config.format === 'detailed') {
    //   return 'detailed format not implemented'
    // }
    // else {
      return `
${this.indent(indentLevel)}${r.message}`
    // }
  }

  indent(indentLevel: number): string {
    // if(this.config.format==='detailed'){
    //   return 'detailed format not implemented'
    // }
    // else {
    return `${repeat(indentLevel * this.config.tabSize!, ' ')}`
    // }

  }
}
