import { Field, Record, Sublist } from '../../introspection/recordMetadata';
import { StatelessComponentProps } from '../../jsx/StatelessComponent';
import { RouteHandlerParams, Params } from '../app';

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

export interface RecordViewProps extends RouteHandlerParams, StatelessComponentProps<RouteHandlerParams&RecordViewProps >{
  record: RecordV;
  seeValues?: boolean;
  renderLink: RouteHandlerParams['renderLink']
  currentUrl: string;
  currentParams: Params
  showAllFields?: boolean;
  messageFromRedirect?: string;
  showSublistLines?: boolean;
}
