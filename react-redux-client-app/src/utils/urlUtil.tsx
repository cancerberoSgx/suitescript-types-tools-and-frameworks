import { tryTo } from '../utils/misc';
const urlUtil = 1;
export function decodeOptions<Options = {}>(op?: string): Options {
  // if (op) {
  return op ? tryTo(() => JSON.parse(decodeURIComponent(op || '{}'))) || {} as any : {}
  // }
  // return {} as any;
}
export function encodeOptions<Options = {}>(options: Options): string | {} {
  return tryTo(() => encodeURIComponent(JSON.stringify(options))) || {};
}
