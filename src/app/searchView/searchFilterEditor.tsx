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

installArrayPrototypeFind()

declare function getBindDataOrThrow<T>(key: string, el?: HTMLElement): T 

interface Props {
  type: string;
  filter?: Filter;
}
export class SearchFilterEditor extends StatelessComponent<Props> {
  render() {

    const filterValues = (typedSearchFilterValues as any as {
      [k: string]: FilterValue[];
    })[this.props.type]
      .map(f => ({ ...f, name: `${f.id} - ${f.label} ` }))

    const editorId = unique('searchFilterEditor')
    return <div data-editor-id={editorId}>
      <Bind name="SearchFilterEditorProps" data={{ ...this.props, editorId }}></Bind>
      <Select select-attrs={{ 'data-user-filter': '' }} options={filterValues} firstOption={`Select ${this.props.type} filter`} onChange={selectedFilter => {
        // debugger
        if (!selectedFilter) { return }
        const props = getBindDataOrThrow<Props&{editorId:string}>('SearchFilterEditorProps', this as any)
        const filter = typedSearchFilterValues[props.type].find(f => f.id === selectedFilter)
        const operators = SearchTypesOperatorSupportValues[filter!.type]
        const ss = <Select options={operators} firstOption={`Select ${filter!.id} operator`} onChange={e => {
          // alert(e)
        }}></Select>
        renderInDOM(ss, `#operatorsPlaceHolder${props.editorId}`)
      }}></Select>
      <div id={`operatorsPlaceHolder${editorId}`}></div>
      <input id="filterValueInput" value="the value"></input>
    </div>;
  }


  renderFileDependencies(): (RenderWithAmdFile | string)[] {
    return SearchFilterEditor._renderFileDependencies()
  }

  static _renderFileDependencies(): (RenderWithAmdFile | string)[] {
    return [
      'jsx/createElement.js',
      'jsx/elementImpl.js',
      'jsx/util/Select.js',
      'jsx/StatelessComponent.js',
      'jsx/util/Bind.js',
      'misc/formatDate.js',
      'misc/misc.js',
      'misc/arrayPrototypeFind.js',
      'jsx/renderInHtml.js',
      'search/typedSearch/generated/TypedSearchFilterValues.js',
      'search/typedSearch/generated/searchTypesOperatorsSupport.js'
    ]
  }
}


