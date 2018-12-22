import { ServerResponse } from "@hitc/netsuite-types/N/http";
 
let response: ServerResponse
let enabled: boolean = true
export interface LoggerConfig {
    response: ServerResponse
    enabled: boolean
}
export function initialize(config: LoggerConfig) {
    response = config.response
    enabled = config.enabled
}
export function log(...args: any[]) {
    response.writeLine({ output: args && args.join(', ') || '' })
}
export function setEnabled(enabled_: boolean) {
    enabled = enabled_
}   