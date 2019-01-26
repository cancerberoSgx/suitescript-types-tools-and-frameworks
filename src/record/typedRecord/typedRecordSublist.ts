import { EmptyObject, StringKeyOf, ValueOfStringKey, array } from '../../misc/misc';
import { TypedRecord } from './typedRecord';


export interface Line<Field extends EmptyObject = EmptyObject> {
  get<K extends StringKeyOf<Field> = StringKeyOf<Field>>(fieldId: K, line: number): ValueOfStringKey<Field, K>;
  set<K extends StringKeyOf<Field> = StringKeyOf<Field>>(fieldId: K, line: number, V: ValueOfStringKey<Field, K>): void;
  line(l: number): Field;
  lines: Field[];
  lineCount(): number;
  linesIndexes(): number[];
}

export interface SublistFieldImplType<Field extends EmptyObject = EmptyObject>{
  new(l: number): Field;
} 

export class LineImpl<Field extends EmptyObject = EmptyObject> implements Line<Field> {
  constructor(protected typedRecord: TypedRecord, protected sublistId: string, 
    protected sublistFieldImpl: SublistFieldImplType){

    }
  get<K extends StringKeyOf<Field> = StringKeyOf<Field>>(fieldId: K, line: number): ValueOfStringKey<Field, K> {
    return this.typedRecord.nsRecord.getSublistValue({ sublistId: this.sublistId, line: line, fieldId }) as any;
  }
  set<K extends StringKeyOf<Field> = StringKeyOf<Field>>(fieldId: K, line: number, V: ValueOfStringKey<Field, K>): void {
    this.typedRecord.nsRecord.setSublistValue({ sublistId: this.sublistId, line: line, fieldId, value: V as any });
  }
  line(l: number): Field {
    return new this.sublistFieldImpl(l) as any as Field;
  }
  get lines(): Field[] {
    return this.linesIndexes().map(l => this.line(l));
  }
  lineCount(): number {
    return this.typedRecord.nsRecord.getLineCount({ sublistId: this.sublistId });
  }
  linesIndexes(): number[] {
    return array(this.lineCount()).map((l, i) => i);
  }
}

export class SublistFieldImpl {
  protected sublistId!: string
  constructor(protected typedRecord: TypedRecord, protected line: number) {
  }
  protected getSublistValue(fieldId: string){
    return this.typedRecord.nsRecord.getSublistValue({ sublistId:this.sublistId, fieldId, line: this.line })
  }
  protected setSublistValue(fieldId: string, value: any){
    this.typedRecord.nsRecord.setSublistValue({ sublistId: this.sublistId, fieldId, line: this.line, value })
  }
}