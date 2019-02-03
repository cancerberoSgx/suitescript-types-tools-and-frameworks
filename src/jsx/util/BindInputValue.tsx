import { StatelessComponent } from '../StatelessComponent';
import { ReactLike } from '../createElement';

export interface BindInputValueProps {
  bindInputId?: string
  bindListenerId?: string
}
export class BindInputValue extends StatelessComponent<BindInputValueProps>{

  render(): JSX.Element {
    BindInputValue.checkRegisteredCode()
    const c = this.firstChildElement()
    if (c && this.props.bindInputId) {
      c.attrs['data-bind-value-id'] = this.props.bindInputId
    }
    else if (c && this.props.bindListenerId) {
      c.attrs['data-bind-value-id'] = this.props.bindListenerId
    }
    return <span></span>
  }

  static checkRegisteredCode(): any {
    if (!BindInputValue.registered) {
      ReactLike.registerClientCode({
        name: 'BindInputValue',
        code: getBindInputValue.toString(),
        description : `Gets the current input value declared with wrapper <BindInputValue><input...`
      })
      BindInputValue.registered=true
    }
  }
  protected static registered = false
}

function getBindInputValue(listenerEl: HTMLElement): string | undefined {
  const id = listenerEl.getAttribute('data-bind-value-id')
  const el = document.querySelector<HTMLInputElement>(`[data-bind-value-id="${id}"]`)
  if (el) {
    return el.value
  }
}