import { printMs } from '../misc/misc';
import { nanoTime } from 'N/util'

export interface Logger {
  log(...args: any[]): void
}

let defaultLogger: Logger | undefined

/** user must call setDefaultLogger() before using log(). Requiring this module and setting a default logger will let available a global `console` object so console.log() will be available and will use the installed Logger. Example: 

```
export let onRequest: EntryPoints.Suitelet.onRequest = context => {
  setDefaultLogger(new ResponseLogger(context.response))
  console.log('hello using console.log')
  console.time('first')  
  console.timeEnd('first')
})
```
 */
export function setDefaultLogger(logger: Logger) {
  defaultLogger = logger
}

/** user must call setDefaultLogger() before using log(). Requiring this module and setting a default logger will let available a global `console` object so console.log() will be available and will use the installed Logger. Example: 

```
export let onRequest: EntryPoints.Suitelet.onRequest = context => {
  setDefaultLogger(new ResponseLogger(context.response))
  console.log('hello using console.log')
  console.time('first')  
  console.timeEnd('first')
})
```
 */
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