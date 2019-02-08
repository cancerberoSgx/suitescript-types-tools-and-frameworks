import { printNativeError } from '../../misc/misc';
import { reactLikeBrowserSource } from '../../jsx/reactLikeBrowserSource';
import { installArrayPrototypeFind } from '../../misc/arrayPrototypeFind';


export function evalCode(code: string): {
  logs: string[];
  errors: string[];
  evaluatedCode: string;
} {
  const evaluatedCode = buildCodeToEval(code);
  try {
    eval(evaluatedCode);
  }
  catch (error) {
    _errors.push(printNativeError(error));
  }
  return { logs: _logs, errors: _errors, evaluatedCode };
}

var _logs: string[] = [];
var _errors: string[] = [];

function printValueForLog(s: any): string {
  return (typeof s === 'undefined') ? 'undefined' :
    ['number', 'boolean', 'string'].indexOf(typeof s) !== -1 ? s :
      Array.isArray(s) ? `[${s.map(printValueForLog).join(', ')}]` :
        (Object.getPrototypeOf(s) === Object.prototype) ? `{${Object.keys(s).map(k => `${k}:${printValueForLog(s[k])}`).join(', ')}}` :
          //@ts-ignore
          (s.name || toString(s) || (s + ''));
}
function LOG(...args: any[]): void {
  _logs.push(args.map(printValueForLog).join(', '));
}
export function buildCodeToEval(code: string) {
  const evaluatedCode = `

${printValueForLog.toString()}

${LOG.toString()}

${installArrayPrototypeFind.toString()}

${reactLikeBrowserSource()}

${code}

`;
  return evaluatedCode;
}
