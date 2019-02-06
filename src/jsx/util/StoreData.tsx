import { StatelessComponent } from '../StatelessComponent';
import { ReactLike, escapeHtmlAttribute, unEscapeHtmlAttribute } from '../createElement';

export interface Data { [k: string]: any }
export interface StoreDataProps {
  data?: Data
}
export class StoreData extends StatelessComponent<StoreDataProps>{

  render(): JSX.Element {
    const c = this.firstChildElement()
    if (c) {
      c.attrs['data-store-data'] = escapeHtmlAttribute(JSON.stringify(this.props.data||{}))
    }
    return <span></span>
  }

  public checkRegisteredCode(): any {
    if (!StoreData.registered) {
      ReactLike.registerClientCode({
        name: 'StoreData',
        code: `${getStoreData.toString()}
${unEscapeHtmlAttribute.toString()}
${escapeHtmlAttribute.toString()}
var createElement_1 = {unEscapeHtmlAttribute: unEscapeHtmlAttribute, escapeHtmlAttribute: escapeHtmlAttribute}; `,
        description: `Gets data stored in the element declared ed with wrapper <StoreData><button...`
      })
      StoreData.registered = true
    }
  }

  protected static registered = false
}

// function escapeHtmlAttribute(code: string) {
//   return code.replace(/\"/gmi, '&quot;');
// }

// function unEscapeHtmlAttribute(code: string) {
//   return code.replace(/\&quot\;/gmi, '"');
// }

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