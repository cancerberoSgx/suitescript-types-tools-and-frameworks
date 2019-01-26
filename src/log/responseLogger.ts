import { ServerResponse } from "N/http";
import { Logger } from './log';

// export let response: ServerResponse
// let enabled: boolean = true

export interface ResponseLoggerConfig {
    response: ServerResponse
    // enabled?: boolean
}

export class ResponseLogger implements Logger {
    constructor (private response: ServerResponse){}
    // response: ServerResponse|undefined
    // initialize(config: ResponseLoggerConfig) {
        // this.response = config.response
        // this.enabled = config.enabled
    // }
    log(...args: any[]): void {
        this.response && this.response.writeLine({ output: args && args.join(', ') || '' });
    }
}
// export function initialize(config: LoggerConfig) {
//     response = config.response
//     enabled = config.enabled
// }
// export function writeLine(...args: any[]): void {
//     response && response.writeLine({ output: args && args.join(', ') || '' });
// }
// export function setEnabled(enabled_: boolean) {
//     enabled = enabled_
// }
// export function isEnabled() {
//     return response && enabled
// }


