import { formatDate } from '../../misc/formatDate';
import { array } from '../../misc/misc';
import { escapeHtmlAttribute, ReactLike, unEscapeHtmlAttribute } from '../createElement';
import { StatelessComponent } from '../StatelessComponent';

interface Data { [k: string]: any }
interface Props  {
  data?: Data
  bindInputId?: string
  bindListenerId?: string
}
type InputValue = string | number | Date | boolean | string[] | number[]

/** 
 * Helper to bind data to the DOM and input element values so it can be easily retrieved from a function attribute like a click handler from the browser. This is necessary because in the browser's function attribute we don't have access to the server code scope. 
 * 
 * Use `<Bind data={{my: 'foo'}}>` and later `getStoreData()` passing the listener element (the one that triggered the handler) to retrieve it in the browser, or `bindInput` `bindListener` to get other element input value easily with `getBindInputValue`, again passing the listener element.
 * 
 * Example:

```
{props.fields.map(f=><div>
<Bind bindInput={`foo-field-${f.id}`}>
  <input type="date" value={props.created}></input>
</Bind>
<Bind bindListener="foo-field-{f.id}""} data={Props}>
  <button onClick={e => {
    const {endpoint} = getStoreData<Props>(e.currentTarget);
    let value = getBindInputValue<string>(e.currentTarget);
    fetch(`${endpoint}&value=${value}`)
      .then(r=>r.jsonResponse)
      .then(status=>alert(`Saved ${status}`))
  }}>
  Save</button>
</Bind>
```
 */
export class Bind extends StatelessComponent<Props>{

  render(): JSX.Element {
    const c = this.firstChildElement()
    if (c && this.props.bindInputId) {
      c.attrs['data-bind-value-id'] = this.props.bindInputId
    }
    if (c && this.props.bindListenerId) {
      c.attrs['data-bind-value-id'] = this.props.bindListenerId
    }
    if (c && this.props.data) {
      c.attrs['data-store-data'] = escapeHtmlAttribute(JSON.stringify(this.props.data))
    }
    return <span></span>
  }

  public checkRegisteredCode() {
    if (!Bind.registered) {
      ReactLike.registerClientCode({
      name: 'StoreData',
      code: `${getStoreData.toString()}
${unEscapeHtmlAttribute.toString()}
${escapeHtmlAttribute.toString()}
var createElement_1 = {unEscapeHtmlAttribute: unEscapeHtmlAttribute, escapeHtmlAttribute: escapeHtmlAttribute}; `,
      description: `Gets data stored in the element declared ed with wrapper <StoreData><button...`
    })
    }
    ReactLike.registerClientCode({
      name: 'getBindInputValue',
      code: getBindInputValue.toString(),
      description: `Gets the current input value declared with wrapper <BindInputValue><input...`
    })
    ReactLike.registerClientCode({
      name: 'formatDate', 
      code: `${formatDate.toString()}; var dateUtil_1 = {formatDate: formatDate}; `,
      description: `Gets the current input value declared with wrapper <BindInputValue><input...`
    })
    ReactLike.registerClientCode({
      name: 'array', 
      code: `${array.toString()}; var misc_1 = {array: array}; `,
      description: ``
    })
    Bind.registered = true
  }

  protected static registered = false;
}

function getStoreData<T>(listenerEl: HTMLElement): T|undefined {
  const s = listenerEl.getAttribute('data-store-data')
  if (s) {
    const unescaped = unEscapeHtmlAttribute(s)
    try {
      return JSON.parse(unescaped)
    } catch (error) {
    }
  }
}

function getBindInputValue<T extends InputValue= string>(listenerEl: HTMLElement, config: {
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
      return config.asString ? (el.checked ? 'T' : 'F') : !!el.checked as any
    }
    else if (el.tagName.toLowerCase() === 'select') {
      const selectedOptions = (el as any as HTMLSelectElement).selectedOptions
      if (selectedOptions && !el.getAttribute('multiple')) {
        return config.asString ? (selectedOptions.item(0)!.value + '') : selectedOptions.item(0)!.value as any
      }
      else if ((selectedOptions && el.getAttribute('multiple')) || !selectedOptions.length) {
        const a = array(selectedOptions.length).map(i => selectedOptions.item(i)!.value)
        return config.asString ? JSON.stringify(a) : a as any
      }
      else {
        //TODO
      }
    } 
    else {
      //TODO
    }
    return config.asString ? (el.value + '') : el.value as any
  }
}
