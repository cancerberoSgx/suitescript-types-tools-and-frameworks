export type CannotBeUndefined<T> = undefined extends T ? false : true;
export type CanBeUndefined<T> = undefined extends T ? true : false;
export type Identical<T1, T2> = NonNullable<T1> extends NonNullable<T2> ? (NonNullable<T2> extends NonNullable<T1> ? true : false) : false;
export type Extends<T1, T2> = NonNullable<T1> extends NonNullable<T2> ? true : false;
export type NotExtends<T1, T2> = T1 extends T2 ? false : true;
