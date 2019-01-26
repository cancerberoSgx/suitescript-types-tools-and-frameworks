
// interface Arr<T extends any = any>{
//   [n: number]: T
// }

class arr<T extends any = any>{
  protected _a: T[] = []
  get '1' (){    console.log('get');  return this._a[1]}
  set '1' (val:T){    console.log('set'); this._a[1]=val}


  // set <N>(n:N, t: T) {console.log('set');
  // return this._a[n as any as number] = t}
  // get <N>(n:N) {return (n as any as number)*2}
  // get [2]() {return 1}
  // get [3]() {return 1}
}
// const a = new arr()
// a[1] = 2
// const d = a[1]

// console.log(a, d);

class AccessorArray<T extends any = any> {
  get(n:number): T{
    return null as any as T
  }
  set(n:number, t: T){
  }
  get '0' (){return this.get(0)}
  set '0' (val:T){this.set(0, val)}

  get '1' (){return this.get(1)}
  set '1' (val:T){this.set(1, val)}

  get '2' (){return this.get(2)}
  set '2' (val:T){this.set(2, val)}

  get '3' (){return this.get(3)}
  set '3' (val:T){this.set(3, val)}

  get '4' (){return this.get(4)}
  set '4' (val:T){this.set(4, val)}

  get '5' (){return this.get(5)}
  set '5' (val:T){this.set(5, val)}

  get '6' (){return this.get(6)}
  set '6' (val:T){this.set(6, val)}

  get '7' (){return this.get(7)}
  set '7' (val:T){this.set(7, val)}
  
  get '8' (){return this.get(8)}
  set '8' (val:T){this.set(8, val)}
}

class MyCustomAccessorArray extends AccessorArray<string>{
get(n: number): string{
console.log('get ', n);
return ''
}
set(n: number, v: string){
  console.log('set ', n, v);
  }
}

const a = new MyCustomAccessorArray()
a[0] = '2'
let f = a[0]