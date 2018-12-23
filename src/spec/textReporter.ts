import { ReportConfig, Reporter, ReportResult } from "./reporter";
import { DescribeResult, ItResult } from "./runner";
import { ExpectResult } from "./expect";

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
    let totalItCount = 0, totalItFail = 0
    this.config.result.results
    .forEach(d=>d.results.filter(i=>i.type!=='x')//TODO:fit and fdescribe
    .forEach(i=>i.results.forEach(r=>{if(r.type==='fail'){totalItFail++}totalItCount++}))
    )
    output+=`

${totalItCount} spec, ${totalItFail} failures
Finished in ${this.config.result.totalTime/1000} seconds
`
    return {
      output
      // output: JSON.stringify(config.results, null, 2)
    }
  }
  renderDescribe(d: DescribeResult, indentLevel = 0): string {
    if (this.config.format === 'detailed') {
      return 'detailed format not implemented'
    }
    else {
      const failIts = d.results.filter(i => i.results.find(r => r.type === 'fail'))
      if (failIts.length) {
        return `
${this.indent(indentLevel)}${d.name}: ${failIts.map(i => this.renderIt(i, indentLevel + 1))}`
      }
      else { return '' }
    }
  }

  renderIt(i: ItResult, indentLevel: number): any {
    if (this.config.format === 'detailed') {
      return 'detailed format not implemented'
    }
    else {
      return `
${this.indent(indentLevel)}${i.name}: ${i.results.map(r => this.renderExpect(r, indentLevel + 1))}`
    }
  }
  renderExpect(r: ExpectResult, indentLevel: number): any {
    if (this.config.format === 'detailed') {
      return 'detailed format not implemented'
    }
    else {
      return `
${this.indent(indentLevel)}${r.message}`
    }
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



//TODO: move this to a misc.ts file. Use it in sublistUtil.ts getLines()
export function array<T=number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}
export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}