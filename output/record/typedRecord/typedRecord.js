define(["require", "exports", "../recordRef"], function (require, exports, recordRef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TypedRecordImpl = /** @class */ (function () {
        function TypedRecordImpl(nsRecordOrRefOrResult) {
            this._sublists = null;
            this._fields = null;
            this.nsRecord = recordRef_1.asRecordOrThrow(nsRecordOrRefOrResult);
        }
        Object.defineProperty(TypedRecordImpl.prototype, "id", {
            get: function () {
                return this.nsRecord.id + '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypedRecordImpl.prototype, "type", {
            get: function () {
                return this.nsRecord.type + '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypedRecordImpl.prototype, "fields", {
            get: function () {
                return this._fields;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypedRecordImpl.prototype, "sublists", {
            get: function () {
                return this._sublists;
            },
            enumerable: true,
            configurable: true
        });
        TypedRecordImpl.prototype.save = function (options) {
            this.nsRecord.save(options);
        };
        return TypedRecordImpl;
    }());
    exports.TypedRecordImpl = TypedRecordImpl;
});
// // /** the api should allow the user to do somethin like 
// //  * `const line = c2.sublists.subcategories.line(1).primarycategory` 
// //  * - all typed - line will have an interface and types
// //  * 
// //  * also let's try that the following works:
// //  * 
// //  * `c2.sublists.subcategories[1].primarycategory`
// //  * */
// // interface Sublist<Field extends EmptyObject = EmptyObject > {
// //   // fields(): string[]
// //   line(n:number): Line<Field>
// //   // line: Field[]
// // }
// // interface commercecategory_items_SublistField {
//   // name?: string
//   // item: number
//   // isprimary: boolean
// // }
// // interface commercecategory_items_Field {
// //   name?: string
// //   // item: number
// //   // isprimary: boolean
// // }
// // interface commercecategory_items_Line extends Line<commercecategory_items_SublistField>{
// //   }
// // class SublistImpl implements Sublist<{foo: string}> {
// // }
// // interface LineFieldValueOptions<Field extends EmptyObject = EmptyObject>{
// //   fieldId: StringKeyOf<Field>
// //   line: number
// // }
// // for each sublist we must create a class just like we did for each Field
// class commercecategory_items_SublistFieldImpl implements commercecategory_items_SublistField {
//   constructor(protected typedRecord: TypedRecord,  protected line: number){ 
//   }
//   public get name(): string|undefined {
//     return this.typedRecord.nsRecord.getSublistValue({sublistId: 'items', fieldId: 'name', line: this.line}) as any;
//     // throw 1
//   }
//   public set name(value:string | undefined) {
//     this.typedRecord.nsRecord.setSublistValue({sublistId: 'items', fieldId: 'name', line: this.line, value : value as any}) as any;
//     // throw 1
//   }
// }
// // interface LL<Field extends EmptyObject = EmptyObject, K extends StringKeyOf<Field>=StringKeyOf<Field>> {
// // // [n: number]: ValueOfStringKey<Field, K>
// // }
// interface commercecategory_items_SublistField {
//   name?: string
//   // item: number
//   // isprimary: boolean
//   }
// interface Line<Field extends EmptyObject = EmptyObject> {
//   get<K extends StringKeyOf<Field>=StringKeyOf<Field>>(fieldId: K, line: number): ValueOfStringKey<Field, K>
//   set<K extends StringKeyOf<Field>=StringKeyOf<Field>>(fieldId: K, line: number, V: ValueOfStringKey<Field, K>,):void
//   line (l: number):Field
//   lines: Field[]
//   lineCount(): number
//   linesIndexes(): number[]
// }
// class LineImpl<Field extends EmptyObject = EmptyObject> implements Line<Field> {
//   constructor(protected typedRecord: TypedRecord, protected sublistId: string){ 
//   }
//   get<K extends StringKeyOf<Field>=StringKeyOf<Field>>(fieldId: K, line: number): ValueOfStringKey<Field, K>{
//     return this.typedRecord.nsRecord.getSublistValue({sublistId: this.sublistId, line: line, fieldId}) as any
//   }
//   set<K extends StringKeyOf<Field>=StringKeyOf<Field>>(fieldId: K, line: number, V: ValueOfStringKey<Field, K>):void{
// this.typedRecord.nsRecord.setSublistValue({sublistId: this.sublistId, line: line, fieldId, value: V as any})
//   }
//   line (l: number):Field{
//     return new this.sublistFieldImpl(l) as any as Field
//   }
//   get lines(): Field[] {
//     return this.linesIndexes().map(l=>this.line(l))
//   }
//   lineCount(): number{
//     return this.typedRecord.nsRecord.getLineCount({sublistId: this.sublistId})
//   }
//   linesIndexes(): number[] {
//     return array(this.lineCount()).map((l, i)=>i)
//   }
//   protected sublistFieldImpl!:  {new (l: number): Field} //  = null as any as {new (options: {sublistId: string}): Field}
// }
// class commercecategory_items_LineImpl extends LineImpl<commercecategory_items_SublistField>{
//   protected sublistFieldImpl = commercecategory_items_SublistFieldImpl as any
//   // line (l: number):commercecategory_items_SublistField{
//   //   return new commercecategory_items_SublistFieldImpl(this.typedRecord , l)
//   // }
// }
// interface commercecategory_Sublists{
//   readonly items: Line<commercecategory_items_SublistField>
//   // subcategories: any,
//   // urls: any
// }
// class commercecategory_SublistsImpl implements commercecategory_Sublists {
//   // private _items: commercecategory_items_SublistField;
//   constructor(protected typedRecord: TypedRecord){ 
//   }
//   public get items(): Line<commercecategory_items_SublistField> {
//     return new commercecategory_items_LineImpl(this.typedRecord, 'items')
//   }
//   // public set items(value: Line<commercecategory_items_SublistField>) {
//   //   // HEADS UP ! assigning the sublist.items directly users can assign the whole sublist !
//   //   getLines({record: this.typedRecord.nsRecord, sublistId: 'items' }).forEach(line => {
//   //     this.typedRecord.nsRecord.removeLine({ line: 0, sublistId: 'items', ignoreRecalc: true })
//   // })
//   // value.lines()
//   //   this.typedRecord.nsRecord.
//   //   this._items = value;
//   // }
// }
// export interface commercecategoryRecord extends TypedRecord<{}, commercecategory_Sublists> {
// }
// export class commercecategoryRecordImpl extends TypedRecordImpl<{}, commercecategory_Sublists> implements commercecategoryRecord {
//   constructor(public nsRecord: Record) {
//     super(nsRecord)
//     this._sublists = new commercecategory_SublistsImpl(this)
//   }
// }
// let c: commercecategoryRecord = null as any as commercecategoryRecord
// const s: string|undefined = c.sublists.items.get('name', 123)
// c.sublists.items.line(0).name = '123'
// c.sublists.items.lines[0].name = '123'
// // interface LinesValue<Field extends EmptyObject = EmptyObject> {
// //   line: number, 
// //   fieldId: StringKeyOf<Field>
// // }
// // class Lines<Field extends EmptyObject = EmptyObject>
// // //  extends AccessorArray<Field> 
// //  {
// //     constructor(protected nsRecord: Record, protected sublistId: string) {
// //     // super()
// //   }
// //   getValue(options: LineFieldValueOptions<Field>){
// //   }
//   // private _dd: ValueOfStringKey<Field, 'dd'> = null as any;
//   // public get dd(): ValueOfStringKey<Field, 'dd'> {
//   //   return this._dd;
//   // }
//   // public set dd(value: ValueOfStringKey<Field, 'dd'>) {
//   //   this._dd = value;
//   // }
//   // get value<
//   // K extends StringKeyOf<Field> = StringKeyOf<Field>, 
//   // V extends ValueOfStringKey<Field, K> = ValueOfStringKey<Field, K>>
//   // (lv: LinesValue<Field>): V{
//   //   return this.nsRecord.getSublistValue({...lv, sublistId: this.sublistId}) as any 
//   // }
//   // set value<
//   // K extends StringKeyOf<Field> = StringKeyOf<Field>, 
//   // V extends ValueOfStringKey<Field, K> = ValueOfStringKey<Field, K>>
//   // (lv: LinesValue<Field>, value: V){
//   //   this.nsRecord.setSublistValue({...lv, sublistId: this.sublistId, value: value as any}) as any 
//   // }
//   // line(n: number): Line<Field>{
//   //   return new LineImpl<Field>(this.nsRecord) // TODO : cache
//   // }
//   // get(n: number): Field{
//   //   return new SublistFieldImpl(this)
//   // }
//   // set(n: number, f: Field):void{
//   // }
// // }
// // interface Line<Field extends EmptyObject = EmptyObject> {
// //   constructor(protected nsRecord: Record) {
// //     // super()
// //   }
// // }
// // class LineImpl<Field extends EmptyObject = EmptyObject> implements Line<Field> {
// // }
// // class SublistFieldImpl {
// //   public get value() : string {
// //     return 
// //   }
// // }
