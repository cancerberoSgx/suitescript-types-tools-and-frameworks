import { SpecRunnerResult } from "./runner";

export interface Reporter<Config extends ReportConfig, Result extends ReportResult> {
  render(config: ReportConfig): ReportResult
}

export interface ReportConfig {
  result: SpecRunnerResult
}

export interface ReportResult {  
}



