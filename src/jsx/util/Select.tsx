import { StatelessComponent } from '../StatelessComponent';
import { ChangeEvent } from '../declarations/domElementDeclarations';
import { ReactLike } from "../createElement";
import { Bind } from './Bind';


declare function getBindDataOrThrow<T>(key: string): T

interface SelectProps {
  options: string[] | Option[];
  selected?: string
  onChange: (value?: string) => void;
  firstOption?: string;
  'select-attrs'?: {[k:string]:string}
}
type Option = {
  name: string;
  id: string;
};

export class Select extends StatelessComponent<SelectProps> {
  static counter=0
  render() {
    const options: Option[] = (this.props.options.length && typeof this.props.options[0] === 'string') ? (this.props.options as string[]).map(o => ({ id: o, name: o })) : this.props.options as Option[];

    const id = Select.counter++
    return <span>
      <Bind name={`Select-${id}`} data={this.props.onChange}></Bind>
      <select {...this.props['select-attrs']||{}} data-select-id={id} onChange={e=>{
        const value = e.currentTarget.selectedOptions[0].value
        const id = e.currentTarget.getAttribute('data-select-id')
        const f = getBindDataOrThrow<SelectProps['onChange']>(`Select-${id}`)
        f(value)
      }}>
        {this.props.firstOption ? <option>{this.props.firstOption}</option> : ''}
        {options.map(o => <option selected={this.props.selected===o.id} value={o.id}>{o.name}</option>)}
      </select>
    </span>;
  }
}