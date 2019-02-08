import { renderInDOM } from '../../jsx/renderInHtml';
import { StatelessComponent } from '../../jsx/StatelessComponent';
import { Select } from '../../jsx/util/Select';
import { installArrayPrototypeFind } from '../../misc/arrayPrototypeFind';
import { typedSearchFilterValues } from '../../search/typedSearch/generated/TypedSearchFilterValues';
import { Filter, FilterValue } from './searchView';
import { ReactLike } from "../../jsx/createElement";
import { RenderWithAmdFile } from '../../jsx/renderWithAmdFiles';
import { SearchTypesOperatorSupportValues } from '../../search/typedSearch/generated/searchTypesOperatorsSupport';
import { Bind } from '../../jsx/util/Bind';
import { unique } from '../../misc/misc';
import { SearchFilterEditor } from './searchFilterEditor';

installArrayPrototypeFind()

declare function getBindDataOrThrow<T>(key: string, el?: HTMLElement): T

interface Props {
  type: string;
  filter?: Filter;
}
export class SearchFilterEditors extends StatelessComponent<Props> {
  render() {
    return <div>

      <Bind name="SearchFilterEditorsProps" data={{ ...this.props }}></Bind>
      <div id='SearchFilterEditors'></div>
      <button onClick={e => {
        // debugger
        const props = getBindDataOrThrow<Props>('SearchFilterEditorsProps', this as any)
        // if (document.querySelectorAll('#SearchFilterEditors div').length === 0) {
          var el = document.createElement('div')
          document.getElementById('SearchFilterEditors')!.appendChild(el)
          renderInDOM(<SearchFilterEditor type={props.type}></SearchFilterEditor>, el)
        // }
        // else {

        // }
      }}>Add filter</button>
    </div>
  }

  renderFileDependencies(): (RenderWithAmdFile | string)[] {
    return [...SearchFilterEditor._renderFileDependencies(), 'app/searchView/searchFilterEditor.js']//.concat(['app/searchView/searchFilterEditor.js'])
  }
}
