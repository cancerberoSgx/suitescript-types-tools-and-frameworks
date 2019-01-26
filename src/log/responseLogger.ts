import { ServerResponse } from "N/http";
import { Logger } from './log';

export interface ResponseLoggerConfig {
    response: ServerResponse
}

export class ResponseLogger implements Logger {
    constructor (private response: ServerResponse){}
    log(...args: any[]): void {
        this.response && this.response.writeLine({ output: args && args.join(', ') || '' });
    }
}
