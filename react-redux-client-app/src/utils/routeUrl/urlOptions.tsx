import { tryTo } from '../misc';
import { safeEval } from '../safeEval';

export async function decodeOptions<Options = {}>(op: string = '{}'): Promise<Options> {
  try {
    let decoded: Options | undefined = tryTo(() => JSON.parse(decodeURIComponent(op)))
    // console.warn({decoded});

    if (!decoded) {
      const { result, error } = await safeEval(`(${decodeURIComponent(op)})`)
      // console.warn({result, error});

      if (result) {
        decoded = result
      }
      if(error){
        console.error('decodeOptions safeEval error ', error);
        // throw error
      }
    }
    return decoded || {} as Options
  } catch (error) {
    console.error('decodeOptions', error);
    throw error
  }

}

export function encodeOptions<Options = {}>(options: Options): string | {} {
  return tryTo(() => encodeURIComponent(JSON.stringify(options))) || {};
}
