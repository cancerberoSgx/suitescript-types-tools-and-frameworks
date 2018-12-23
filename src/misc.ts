


//TODO: move this to a misc.ts file. Use it in sublistUtil.ts getLines()
export function array<T=number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}
export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}


export function find<T>(a: T[], predicate: (o: T, index?: number, arr?: T[])=>boolean):T|undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if(predicate(v, i, a)){
      return v
    }  
  }
} 