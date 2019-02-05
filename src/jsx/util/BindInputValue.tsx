import { StatelessComponent } from '../StatelessComponent';
import { ReactLike } from '../createElement';
import { formatDate } from '../../misc/dateUtil';

export interface BindInputValueProps {
  bindInputId?: string
  bindListenerId?: string
}
export class BindInputValue extends StatelessComponent<BindInputValueProps>{

  render(): JSX.Element {
    const c = this.firstChildElement()
    if (c && this.props.bindInputId) {
      c.attrs['data-bind-value-id'] = this.props.bindInputId
    }
    else if (c && this.props.bindListenerId) {
      c.attrs['data-bind-value-id'] = this.props.bindListenerId
    }
    return <span></span>
  }

  public checkRegisteredCode(): any {
    if (!BindInputValue.registered) {
      ReactLike.registerClientCode({
        name: 'getBindInputValue',
        code: getBindInputValue.toString(),
        description : `Gets the current input value declared with wrapper <BindInputValue><input...`
      })
      ReactLike.registerClientCode({
        name: 'formatDate', // used by  getBindInputValue
        code: `${formatDate.toString()}; dateUtil_1 = {formatDate: formatDate}; `,
        description : `Gets the current input value declared with wrapper <BindInputValue><input...`
      })
      BindInputValue.registered=true
    }
  }
  protected static registered = false
}


// declare function formatDate(date: Date, format: 'YYYY-MM-DD'|'MM/DD/YYYY'): string

function getBindInputValue<T extends string|number|Date = string>(listenerEl: HTMLElement, config: {
  dateAsString?: boolean, 
  // isSelect?: boolean
} = {}): T | undefined {
  const id = listenerEl.getAttribute('data-bind-value-id')
  const el = document.querySelector<HTMLInputElement>(`[data-bind-value-id="${id}"]`)
  if (el) {
    if(el.type==='date'){
      return config.dateAsString ? formatDate(el.valueAsDate, 'MM/DD/YYYY') : el.valueAsDate
    }
    else if(el.type==='number'){
      return el.valueAsNumber as any
    }
    if(el.tagName.toLowerCase()==='select'){
      // ListRecordTypesSelect
      const selectedOptions = (el as any as HTMLSelectElement).selectedOptions
      if(selectedOptions&& selectedOptions.length){
        return  selectedOptions.item(0)!.value as any
        // return option ? option.value : undefined as any
      }
    }
    else {
      return el.value as any
    }
  }
}