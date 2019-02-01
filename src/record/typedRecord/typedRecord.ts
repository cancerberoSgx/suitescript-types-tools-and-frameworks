import * as record from "N/record";
import { StringKeyOf, ValueOfStringKey } from '../../misc/misc';
import { recordFieldTypes, recordSublistsTypes } from './generated/recordConstructor';

export type RecordType = StringKeyOf<Required<recordFieldTypes>>
export type FieldName<RType extends RecordType> = StringKeyOf<ValueOfStringKey<recordFieldTypes, RType>>
export type FieldValue<RType extends RecordType, FName extends FieldName<RType>> = ValueOfStringKey<ValueOfStringKey<recordFieldTypes, RType>, FName>

export type SublistType = StringKeyOf<recordSublistsTypes>
export type SublistName<RType extends SublistType> = StringKeyOf<ValueOfStringKey<recordSublistsTypes, RType>>
export type SublistValue<RType extends RecordType, SName extends SublistName<RType>> = ValueOfStringKey<ValueOfStringKey<recordSublistsTypes, RType>, SName>

export type SublistFieldName<RType extends RecordType, SName extends SublistName<RType>> = StringKeyOf<SublistValue<RType, SName>>
export type SublistFieldValue<RType extends RecordType, SName extends SublistName<RType>> = SublistValue<RType, SName>[SublistFieldName<RType, SName>]

// @ts-ignore
export interface Record<RType extends RecordType
  // , SType extends SublistName<RType>=SublistName<RType>, FType extends SublistFieldName<RType, SType>=SublistFieldName<RType, SType>
  >

  extends record.Record {
  type: RType

  getValue<F extends FieldName<RType>=FieldName<RType>>(options: GetFieldOptions<RType, F>): FieldValue<RType, F>
  getValue<F extends FieldName<RType>=FieldName<RType>>(fieldId: F): FieldValue<RType, F>;
  // getText<FName extends FieldName<RType>>(options: GetFieldOptions<RType>): string;
  // getText<FName extends FieldName<RType>>(fieldId: FName): string;

  /** Returns sublists ids */
  getSublists(): SublistName<RType>[]// Tuple<SublistName<RType>, StringKeyOf<{[k in SublistName<RType>]: number}>;
  /** Returns all the field names in a sublist. */
  getSublistFields(options: RecordGetLineCountOptions<RType>): SublistFieldName<RType, SublistName<RType>>[];


  /** Returns the value of a sublist field in a text representation. */
  getSublistText(options: GetSublistValueOptions<RType>): string;
  /** Returns the value of a sublist field. */
  getSublistValue(options: GetSublistValueOptions<RType>): ValueOfStringKey<SublistFieldValue<RType, SublistName<RType>>, SublistFieldName<RType, SublistName<RType>>>;
  /** Returns the body field names (internal ids) of all the fields in the record, including machine header field and matrix header fields. */
  getFields(): FieldName<RType>[]

  /** 
   * Returns a field object from a record. 
   * 
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
   */
  getField<FType extends FieldName<RType>=FieldName<RType>>(options: GetFieldOptions<RType, FType>): Field<RType, FType>|undefined;

  //    /**
  //    * return field object from record's sublist current line. Only available in dynamic record
  //    * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
  //    * @restriction only available in dynamic record
  //    */    
  //   getCurrentSublistField(options: GetCurrentSublistFieldOptions<RType, SType, FType>): SublistField<RType, SType, FType>;
  //   getCurrentSublistIndex(options: RecordGetLineCountOptions<RType, SType>): number;
  // /** Gets the subrecord for the associated sublist field on the current line. */
  // getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions): Record;


  // /** Cancels the currently selected line on a sublist. */
  // cancelLine(options: CancelCommitLineOptions): Record;
  // cancelLine(sublistId: string): Record;
  // /** Commits the currently selected line on a sublist. */
  // commitLine(options: CancelCommitLineOptions): Record;
}


interface RecordGetLineCountOptions<RType extends RecordType> {
  /** The internal ID of the sublist. */
  sublistId: SublistName<RType>
}


// interface GetCurrentSublistValueOptions {
//   /** The internal ID of the sublist. */
//   sublistId: string;
//   /** The internal ID of a standard or custom sublist field. */
//   fieldId: string;
// }

interface GetCurrentSublistFieldOptions<RType extends RecordType, SType extends SublistName<RType>, FType extends SublistFieldName<RType, SType>> {
  /** The internal ID of the sublist. */
  sublistId: SType;
  /** The internal ID of a standard or custom sublist field. */
  fieldId: FType;
}

interface GetSublistValueOptions<RType extends RecordType> {
  /** The internal ID of the sublist. */
  sublistId: SublistName<RType>;
  /** The internal ID of a standard or custom sublist field. */
  fieldId: SublistFieldName<RType, SublistName<RType>>;
}

interface GetFieldOptions<RType extends RecordType, FName extends FieldName<RType>> {
  /** The internal ID of a standard or custom body field. */
  fieldId: FName;
}

// interface RecordGetLineCountOptions<RType extends RecordType, SType extends SublistName<RType>> {
//     /** The internal ID of the sublist. */
//     sublistId: SType;
// }

/**
* Client and server-side scripts. 
* Encapsulates a body or sublist field on a standard or custom record. 
*/
// @ts-ignore
export interface Field<RType extends RecordType, FId extends FieldName<RType>> extends record.Field {
  /** Returns the UI label for a standard or custom field body or sublist field. */
  readonly label: string; // TODO: from metadata

  /** Returns the internal ID of a standard or custom body or sublist field. */
  readonly id: FId;
  /** Returns the type of a body or sublist field. */
  readonly type: FieldValue<RType, FId>;

  /** Returns true if the standard or custom field is mandatory on the record form, or false otherwise. */
  readonly isMandatory: boolean; // TODO: required members of fieltTypes

  /** Return the sublistId of the field */
  readonly sublistId: string; // TODO: from metadata
}
/**
* Client and server-side scripts. 
* Encapsulates a body or sublist field on a standard or custom record. 
*/
// @ts-ignore
export interface SublistField<RType extends RecordType, SType extends SublistName<RType>, FType extends SublistFieldName<RType, SName>> extends record.Field {
  /** Returns the UI label for a standard or custom field body or sublist field. */
  readonly label: ValueOfStringKey<SublistValue<RType, SType>, 'label'>;
  /** Returns the internal ID of a standard or custom body or sublist field. */
  readonly id: FType;
  /** Returns the type of a body or sublist field. */
  readonly type: ValueOfStringKey<SublistFieldValue<RType, SType>, FType>;
  /** Returns true if the standard or custom field is mandatory on the record form, or false otherwise. */
  readonly isMandatory: ValueOfStringKey<SublistValue<RType, SType>, 'required'>;
  /** Return the sublistId of the field */
  readonly sublistId: SType;
}

// export interface Sublist<SublistName> {
//   /**
//    * The name of the sublist.
//    */    
//   readonly name: string;   
//   /**
//    * The name of the sublist.
//    */    
//   readonly id: string;     
//   /**
//    * The type of the sublist.
//    */    
//   readonly type: string;    
//   /**
//    * The sublist is changed
//    */    
//   readonly isChanged: boolean;    
//   /**
//    * The sublist is hidden
//    */    
//   readonly isHidden: boolean;    
//   /**
//    * The sublist is display
//    */    
//   readonly isDisplay: boolean;    
//   /**
//    * A flag to indicate whether or not the sublist supports multi-line buffer feature.
//    */    
//   readonly isMultilineEditable: boolean;  
//   /**
//    * Returns a column in the sublist.
//    * Client and server-side scripts
//    */
//   getColumn(options: GetColumnOptions): Column
//   /**
//    * Returns the object type name (sublist.Sublist)
//    */    
//   toString(): string    
//   /**
//    * JSON.stringify() implementation.
//    */    
//   toJSON(): {id: string, type: string, isChanged: boolean, isDisplay: boolean}
// }
// export interface GetColumnOptions {
//   /** The internal ID of the column field in the sublist. */
//   fieldId: string;
// }
// /**
// * Encapsulates a column of a sublist on a standard or custom record.
// * For a complete list of this object’s properties, see Column Object Members.
// * This object does not return a value, it returns information about the sublist column.
// * Client and server-side scripts
// */
// export interface Column {
//   /** Client and server-side scripts. Returns the internal ID of the column. */
//   readonly id: string;
//   /** Client and server-side scripts. Returns the column type. */
//   readonly type: string;
//   /** Client and server-side scripts. Returns the UI label for the column. */
//   readonly label: string
//   /** Client and server-side scripts. Returns the internal ID of the standard or custom sublist that contains the column. */
//   readonly sublistId: string
// }



// type FieldValue = Date | number | number[] | string | string[] | boolean | null;

/** Almost like a full Record, except without things like save(). */
// export interface ClientCurrentRecord extends {
/** Cancels the currently selected line on a sublist. */
  // cancelLine(options: CancelCommitLineOptions): Record;
  // cancelLine(sublistId: string): Record;
  // /** Commits the currently selected line on a sublist. */
  // commitLine(options: CancelCommitLineOptions): Record;
  // copy: RecordCopyFunction;
  // /** Performs macro operation and returns its result in a plain JavaScript object. */
  // executeMacro: ExecuteMacroFunction;
  // /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
  // findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions): number;
  // /** Returns the line number for the first occurrence of a field value in a sublist. */
  // findSublistLineWithValue(options: FindSublistLineWithValueOptions): number;
  // /** Gets the value for the currently selected line in the matrix. */
  // getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions): number | Date | string | string[] | boolean;
  // /** Returns the line number of the currently selected line. */  

  // /**
  //  * return field object from record's sublist current line. Only available in dynamic record
  //  * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
  //  * @restriction only available in dynamic record
  //  */    
  // getCurrentSublistField(options: GetCurrentSublistFieldOptions): Field;
  // getCurrentSublistIndex(options: RecordGetLineCountOptions): number;
  // /** Gets the subrecord for the associated sublist field on the current line. */
  // getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions): Record;
  // /** Returns a text representation of the field value in the currently selected line. */
  // getCurrentSublistText(options: GetCurrentSublistValueOptions): string;
  // /** Returns the value of a sublist field on the currently selected sublist line. */
  // getCurrentSublistValue(options: GetCurrentSublistValueOptions): FieldValue;
  // getCurrentSublistValue(sublistId: string, fieldId: string): FieldValue;


  // /** 
  //  * Returns a field object from a record. 
  //  * 
  //  * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
  //  */
  // getField(options: GetFieldOptions): Field;
  // /** Returns the number of lines in a sublist. */
  // getLineCount(options: RecordGetLineCountOptions): number;
  // getLineCount(sublistId: string): number;
  // /** Provides a macro to be executed. */
  // getMacro(options: { id: string }): Function; // TODO: Test this!
  // /** Provides a plain JavaScript object of available macro objects defined for a record type, indexed by the Macro ID. */
  // getMacros(): { [macroId: string]: Macro };
  // /** Returns the number of columns for the specified matrix. */
  // getMatrixHeaderCount(options: GetMatrixHeaderCountOptions): number;
  // /** Gets the field for the specified header in the matrix.
  //  * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
  //  */
  // getMatrixHeaderField(options: GetMatrixHeaderFieldOptions): Field;
  // /** Gets the value for the associated header in the matrix. */
  // getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions): FieldValue;
  // /** Gets the field for the specified sublist in the matrix. */
  // getMatrixSublistField(options: GetMatrixSublistFieldOptions): Field;
  // /** Gets the value for the associated field in the matrix. */
  // getMatrixSublistValue(options: GetMatrixSublistValueOptions): FieldValue;
  // /** Returns the specified sublist. */
  // getSublist(options: RecordGetLineCountOptions): Sublist;
  // /** 
  //  * Return field object from record's sublist
  //  * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
  //  * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
  //  */
  // getSublistField(options: GetSublistFieldOptions): Field;
  // /** Returns the value of a sublist field in a text representation. */
  // getSublistText(options: GetSublistValueOptions): string;
  // /** Returns the value of a sublist field. */
  // getSublistValue(options: GetSublistValueOptions): FieldValue;
  // getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
  // /** Gets the subrecord for the associated field. */
  // getSubrecord(options: GetFieldOptions): Record;
/** Returns the text representation of a field value. */
  // getText(options: GetFieldOptions): string | string[];
  // getText(fieldId: string): string | string[];
  // /** Returns the value of a field. */
  // getValue(options: GetFieldOptions): FieldValue;
  // getValue(fieldId: string): FieldValue;
  // /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
  // hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions): boolean;
  // /** Returns a value indicating whether the associated sublist field contains a subrecord. */
  // hasSublistSubrecord(options: GetSublistValueOptions): boolean;
  // /** Returns a value indicating whether the field contains a subrecord. */
  // hasSubrecord(options: HasSubrecordOptions): boolean;
  // /** The internal ID of a specific record. */
  // id: number;
  // /** Inserts a sublist line. */
  // insertLine(options: InsertLineOptions): void;
  // /**
  //  * Indicates whether the record is in dynamic or standard mode.
  //  * - If set to true, the record is currently in dynamic mode. If set to false, the record is currently in standard mode.
  //  *  - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in standard mode, the record’s body fields and sublist line items are not sourced, calculated, and validated until the record is saved (submitted) with Record.save(options).
  //  *  - When you work with a record in standard mode, you do not need to set values in any particular order. After submitting the record, NetSuite processes the record’s body fields and sublist line items in the correct order, regardless of the organization of your script.
  //  *  - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in dynamic mode, the record’s body fields and sublist line items are sourced, calculated, and validated in real-time. A record in dynamic mode emulates the behavior of a record in the UI.
  //  *  - When you work with a record in dynamic mode, it is important that you set values in the same order you would within the UI. If you fail to do this, your results may not be accurate.
  //  * This value is set when the record is created or accessed.
  //  */
  // isDynamic: boolean;
  // /** 
  //  * Removes the subrecord for the associated sublist field on the current line. 
  //  * @return {Record} same record, for chaining
  //  */
  // removeCurrentSublistSubrecord(options: GetCurrentSublistValueOptions): this;
  // /** 
  //  * Removes a sublist line.
  //  * @return {Record} same record, for chaining 
  //  */
  // removeLine(options: InsertLineOptions): this;
  // /** 
  //  * Removes the subrecord for the associated field. 
  //  * @return {Record} same record, for chaining
  //  */
  // removeSubrecord(options: RecordGetLineCountOptions): this;
  // /** Selects an existing line in a sublist. */
  // selectLine(options: SelectLineOptions): void;
  // selectLine(sublistId: string, line: number): void;
  // /** Selects a new line at the end of a sublist. */
  // selectNewLine(options: RecordGetLineCountOptions): void;
  // /** Sets the value for the line currently selected in the matrix. */
  // setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions): Record;
  // /** Sets the value for the field in the currently selected line by a text representation. */
  // setCurrentSublistText(options: SetCurrentSublistTextOptions): void;
  // /** Sets the value for the field in the currently selected line. */
  // setCurrentSublistValue(options: SetCurrentSublistValueOptions): void;
  // setCurrentSublistValue(sublistId: string, fieldId: string, value: FieldValue): void;
  // /** Sets the value for the associated header in the matrix. */
  // setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions): Record;
  // /** Sets the value for the associated field in the matrix. */
  // setMatrixSublistValue(options: SetSublistValueOptions): Record;
  // /** Sets the value of the field by a text representation. */
  // setText(options: SetFieldTextOptions): void;
  // setText(fieldId: string, value: string): void;
  // /** Sets the value of a field. */
  // setValue(options: SetValueOptions): void;
  // setValue(fieldId: string, value: FieldValue): void;

  // /** The record type. */
  // type: Type | string;
// }

// // Exported for other modules to be able to consume this type
// export interface Record extends record.Record {
//   /** Returns the body field names (internal ids) of all the fields in the record, including machine header field and matrix header fields. */
//   getFields(): string[];

//   // getText(options: GetFieldOptions): string | string[];
//   // getText(fieldId: string): string | string[];
//   // /** Returns the value of a field. */
//   // getValue(options: GetFieldOptions): FieldValue;
//   // getValue(fieldId: string): FieldValue;

//   // /** Returns all the names of all the sublists. */
//   // getSublists(): string[];
//   // /** Returns all the field names in a sublist. */
//   // getSublistFields(options: RecordGetLineCountOptions): string[];
//   // /** Gets the subrecord associated with a sublist field. */
//   // getSublistSubrecord(options: GetSublistValueOptions): Record;
//   // /** 
//   //  * Removes the subrecord for the associated sublist field. 
//   //  * @restriction only available in deferred dynamic record
//   //  * @return {Record} same record, for chaining
//   //  */
//   // removeSublistSubrecord(options: GetSublistValueOptions): this;
//   // /** 
//   //  * Submits a new record or saves edits to an existing record. 
//   //  * 
//   //  * @governance 20 units for transactions, 4 for custom records, 10 for all other records
//   //  * @return id of submitted record
//   // */
//   // save: RecordSaveFunction;
//   // /** Sets the value of a sublist field by a text representation. */
//   // setSublistText(options: SetSublistTextOptions): Record;
//   // /** Sets the value of a sublist field. (standard mode only). */
//   // setSublistValue(options: SetSublistValueOptions): Record;
//   // toString(): string;
//   // /** get JSON format of the object, something like `{id: string, type: string, fields: {[fieldId: string]: any}, sublists: {[sublistId:string]: {[line_id:string]:{[sublist_field_id:string]: string}}}` */  
//   // toJSON(): RecordToJSONReturnValue
// }



// export interface TypedRecord<Fields extends EmptyObject = EmptyObject, Sublists extends EmptyObject = EmptyObject> {
//   readonly nsRecord: record.Record
//   readonly id: string
//   readonly type: RecordType
//   readonly fields: Fields
//   readonly sublists: Sublists
// }

// export class TypedRecordImpl<Fields extends EmptyObject = EmptyObject, Sublists extends EmptyObject = EmptyObject> implements TypedRecord<Fields, Sublists> {
//   nsRecord: Record
//   protected _sublists: Sublists = null as any
//   protected _fields: Fields = null as any
//   constructor(nsRecordOrRefOrResult: RecordOrRefResult) {
//     this.nsRecord = asRecordOrThrow(nsRecordOrRefOrResult)
//   }
//   public get id(): string {
//     return this.nsRecord.id + ''
//   }
//   public get type(): RecordType {
//     return this.nsRecord.type + '' as any
//   }
//   public get fields(): Fields {
//     return this._fields
//   }
//   public get sublists(): Sublists {
//     return this._sublists
//   }
//   // save(options?: SaveOptions){
//   //   this.nsRecord.save(options)
//   // }
// }

// interface SaveOptions {
//   /** Indicates whether to enable sourcing during the record update. Defaults to true. */
//   enableSourcing?: boolean;
//   /** Indicates whether to ignore mandatory fields during record submission. Default is false. */
//   ignoreMandatoryFields?: boolean;
// }

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