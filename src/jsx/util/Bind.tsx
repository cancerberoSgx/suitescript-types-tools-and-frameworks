import { StatelessComponent } from '../StatelessComponent';
import { ReactLike, unEscapeHtmlAttribute, escapeHtmlAttribute } from '../createElement';
import { BindInputValue, BindInputValueProps } from './BindInputValue';
import { StoreData, StoreDataProps } from './StoreData';

interface Props extends BindInputValueProps, StoreDataProps {
}
export class BindInputValueAndStoreData extends StatelessComponent<Props>{
  render(): JSX.Element {
    StoreData.prototype.render.apply(this, [])
    BindInputValue.prototype.render.apply(this, [])
    return <span></span>
  }
}
