import { nanoTime } from 'N/util';

export function now(unit: 'milliseconds' | 'nanoseconds' = 'milliseconds') {
  return unit === 'milliseconds' ? nanosecondsToMilliseconds(nanoTime()) : nanoTime();
}
export function nanosecondsToMilliseconds(n: number) {
  return n / 1e+6;
}
