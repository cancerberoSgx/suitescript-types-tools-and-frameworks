import { ReactLike } from '../createElement';
import { StatelessComponent } from '../StatelessComponent';
import { BindInputValue, BindInputValueProps } from './BindInputValue';
import { Data, StoreData } from './StoreData';


interface Props extends BindInputValueProps {
  data?: Data
}

export class Bind extends StatelessComponent<Props>{

  render(): JSX.Element {
    StoreData.prototype.render.apply(this, [])
    BindInputValue.prototype.render.apply(this, [])
    return <span></span>
  }

  public checkRegisteredCode(): any {
    if (!Bind.registered) {
      StoreData.prototype.checkRegisteredCode.apply(this, [])
      BindInputValue.prototype.checkRegisteredCode.apply(this, [])
      Bind.registered = true
    }
  }

  protected static registered = false;
}
