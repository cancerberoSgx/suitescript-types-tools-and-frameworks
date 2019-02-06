import { Field, Record, Sublist } from '../../introspection/recordMetadata';
import { RenderLinkOptions } from "../browserCode";

export type Value = string | boolean | number | Date | null | number[] | string[] |undefined

export type Text = string | string[] | undefined;

interface Valued {
  value?: Value;
  text?: Text;
}

export interface ValuedField extends Field, Valued {
}

interface Row extends Valued {
  field: Field;
}

interface SublistLine extends Valued {
  rows: Row[];
}

export interface ValuedSublist extends Sublist {
  lines: SublistLine[];
  lineCount: number;
}

export interface RecordV extends Record {
  fields: ValuedField[];
  sublists: ValuedSublist[];
}

export interface Props {
  record: RecordV;
  seeValues?: boolean;
  renderLink(config: RenderLinkOptions): string;
  currentUrl: string;
  showAllFields?: boolean;
  messageFromRedirect?: string;
  showSublistLines?: boolean;
}
