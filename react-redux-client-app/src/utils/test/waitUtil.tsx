export type Predicate = (...args: any[]) => boolean;
export function waitFor(p: Predicate, timeout = 1000, interval = 100): Promise<void> {
  return new Promise((resolve, reject) => {
    const i = setInterval(() => {
      if (p()) {
        clearTimeout(t);
        clearInterval(i);
        resolve();
      }
    }, interval);
    const t = setTimeout(() => {
      clearInterval(i);
      clearTimeout(t);
      reject('waitFor timeout');
    }, timeout);
  });
}
export function wait(t: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t);
  });
}
