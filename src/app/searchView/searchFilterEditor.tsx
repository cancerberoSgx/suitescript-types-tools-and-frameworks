import { StatelessComponent } from '../../jsx/StatelessComponent';
import { Select }  from '../../jsx/util/Select';
import { SearchTypesOperatorSupportValues, typedSearchFilterValues } from '../../search/typedSearch/generated';
import { Filter, FilterValue } from './searchView';
import { ReactLike } from "../../jsx/createElement";
import { renderInHTMLDocument } from '../../jsx/renderInHtml';
import { writeFileSync } from 'fs';
import { installArrayPrototypeFind } from '../../misc/arrayPrototypeFind';
import { printNamespace } from '../../introspection/printThisScopeSource';
import { reactLikeBrowserSource } from '../../jsx/reactLikeBrowserSource';
import * as select from '../../jsx/util/Select';

installArrayPrototypeFind()

export class SearchFilterEditor extends StatelessComponent<{
  type: string;
  filter?: Filter;
}> {
  render() {

    const script = `
var generated_1 = {SearchTypesOperatorSupportValues: ${JSON.stringify(SearchTypesOperatorSupportValues)}, 
    typedSearchFilterValues : ${JSON.stringify(typedSearchFilterValues)}
  };
  var Select_1  = {Select: ${Select.toString()}}
  ${' '||printNamespace(select, 'select_1')}
    ${' ' ||reactLikeBrowserSource()};
    ${Test.toString()};
    `
    const filterValues = (typedSearchFilterValues as any as {
      [k: string]: FilterValue[];
    })[this.props.type]
      .map(f => ({ ...f, name: `${f.id} - ${f.label}` }));
    // const operators = (SearchTypesOperatorSupportValues as any as {[k:string]:string[]})[filterValues.type]
    // const f = this.props.filter
    return <div>

      <script>{script}</script>


      <Select select-attrs={{ 'data-user-filter': '' }}  options={filterValues} firstOption={`Select ${this.props.type} filter`} onChange={selected => {
        if(!selected){return}
        const operators = (SearchTypesOperatorSupportValues as any as {[k:string]:string[]})[selected]
        const d = document.createElement('div')
        d.innerHTML= ReactLike.render(
          <Select select-attrs={{ 'data-user-filter-operator': '' }}  options={operators} firstOption={`Select ${selected} filter operator`} onChange={operator => {
            debugger
                }}></Select>)
        document.body.appendChild(d)
      }}></Select>


    </div>;
  }
}

function Test(props: {}){
  return <div>ehhhh</div>
}


// writeFileSync('src/jsx/__tests__/test.html',renderInHTMLDocument(<SearchFilterEditor type="commercecategory"></SearchFilterEditor>))