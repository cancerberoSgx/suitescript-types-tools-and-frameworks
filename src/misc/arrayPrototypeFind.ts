export function find<T>(a: T[], predicate: FindPredicate<T>): T | undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if (predicate(v, i, a)) {
      return v;
    }
  }
}
// also we declare and implement Array.prototype.find that doesn't exists in es5
type FindPredicate<T> = (o: T, index?: number, arr?: T[]) => boolean;
type ArrayPrototypeFind<T> = (this: T[], predicate: FindPredicate<T>) => T | undefined;
declare global {
  interface Array<T> {
    find: ArrayPrototypeFind<T>;
  }
}
export function installArrayPrototypeFind() {
  Array.prototype.find = typeof Array.prototype.find === 'undefined' ? function <T>(this: T[], predicate: FindPredicate<T>) { return find(this, predicate); } : Array.prototype.find;
}
installArrayPrototypeFind()
