import { tryTo } from '../misc';
import { safeEval } from '../safeEval';

export async function decodeOptions<Options = {}>(op: string = '{}'): Promise<Options> {
  let decoded: Options | undefined = tryTo(() => JSON.parse(decodeURIComponent(op)))
  if (!decoded) {
    const { result, error } = await safeEval(`(${decodeURIComponent(op)})`)
    // debugger
    if (result) {
      decoded = result
    }
  }
  return decoded || {} as Options
}
export function encodeOptions<Options = {}>(options: Options): string | {} {
  return tryTo(() => encodeURIComponent(JSON.stringify(options))) || {};
}
