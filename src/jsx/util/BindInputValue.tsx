import { StatelessComponent } from '../StatelessComponent';
import { ReactLike } from '../createElement';
import { formatDate } from '../../misc/dateUtil';
import { array } from '../../misc/misc';

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
        description: `Gets the current input value declared with wrapper <BindInputValue><input...`
      })
      ReactLike.registerClientCode({
        name: 'formatDate', // used by  getBindInputValue
        code: `${formatDate.toString()}; dateUtil_1 = {formatDate: formatDate}; `,
        description: `Gets the current input value declared with wrapper <BindInputValue><input...`
      })
      ReactLike.registerClientCode({
        name: 'array', // used by  getBindInputValue
        code: `${array.toString()}; misc_1 = {array: array}; `,
        description: ``
      })
      BindInputValue.registered = true
    }
  }
  protected static registered = false
}


function getBindInputValue<T extends string | number | Date | boolean | string[] | number[]= string>(listenerEl: HTMLElement, config: {
  asString?: boolean,
} = {}): T | undefined {
  const id = listenerEl.getAttribute('data-bind-value-id')
  const el = document.querySelector<HTMLInputElement>(`[data-bind-value-id="${id}"]`)
  if (el) {
    if (el.type === 'date') {
      return config.asString ? formatDate(el.valueAsDate, 'MM/DD/YYYY') : el.valueAsDate
    }
    else if (el.type === 'number') {
      return config.asString ? (el.valueAsNumber + '') : el.valueAsNumber as any
    }
    else if (el.type === 'checkbox') {
      return config.asString ? (el.checked ? 'T' : 'F') : !!el.checked as any// ? 'T' : 'F' as any //? true.valueAsNumber as any
    }
    else if (el.tagName.toLowerCase() === 'select' ) {
      const selectedOptions = (el as any as HTMLSelectElement).selectedOptions
      if (selectedOptions &&!el.getAttribute('multiple')) {
        return config.asString ? (selectedOptions.item(0)!.value + '') : selectedOptions.item(0)!.value as any
      }else if ((selectedOptions && el.getAttribute('multiple'))||!selectedOptions.length) {
        const a = array(selectedOptions.length).map(i => selectedOptions.item(i)!.value)
        return config.asString ? JSON.stringify(a) : a as any
      }
    } 
    return config.asString ? (el.value + '') : el.value as any
  }
}