// import { response } from './responseLogger';
import { printMs } from '../misc/misc';
import { nanoTime } from 'N/util'

// export interface LoggerConfig{}
export interface Logger {
  // initialize(config?: LoggerConfig):void
  log(...args: any[]): void
}

let defaultLogger: Logger | undefined

export function setDefaultLogger(logger: Logger) {
  defaultLogger = logger
}

export function log(...args: any[]): void {
  if (!defaultLogger) {
    throw new Error('you need to call setDefaultLogger before calling log()')
  }
  defaultLogger.log(...args)
}

export interface Console {
  log(...args: any[]): void
  error(...args: any[]): void
  warn(...args: any[]): void
  time(label: string): number
  timeEnd(label: string): number
}
class ConsoleImpl implements Console {
  private times: { [l: string]: number } = {}
  log = log
  error = log
  warn = log
  //   private time_Date_getTime(label: string=''): number{
  //     return this.times[label] = new Date().getTime()
  // }
  // private timeEnd_Date_getTime(label: string=''): number{
  //     const t = new Date().getTime()-this.times[label]
  //     this.log(printMs(t))
  //     return t
  // }
  time(label: string = ''): number {
    return this.times[label] = nanoTime()
    // return this.time_Date_getTime(label)
  }
  timeEnd(label: string = ''): number {
    // return this.timeEnd_Date_getTime(label)
    const nano = nanoTime() - this.times[label]
    const ms = nano / 1e+6
    this.log(printMs(ms))
    return ms
  }
}

declare var console: Console
//@ts-ignore
console = typeof console === 'undefined' ? new ConsoleImpl() : console