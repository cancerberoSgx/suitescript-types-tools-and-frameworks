import { mount } from 'enzyme';
import { createHashHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import { Main } from '../../../main';
import { ApplicationState } from '../../../store';
import { layoutInitialState } from '../../../store/layout';
import { listRecordTypesInitialState } from '../../../store/listRecordTypes';
import { recordViewInitialState } from '../../../store/recordView';
import { searchInitialState } from '../../../store/search';
import { getApplicationWrapper } from '../../../utils/testUtil';

describe('RecordView', () => {
  it('shows settings', done => {
    const { wrapper } = getApplicationWrapper('/recordView/commercecategory/1/{}');

    setTimeout(() => {
      const labels = Array.from(wrapper.getDOMNode().querySelectorAll('label')).map(n => n.innerHTML).join(', ')
      const settingLabels = [
        'See Values?',
        'Hide Internal Fields?',
        'Show Sublists Lines?',
        'Edit Inline?'
      ];
      // console.log(labels);
      settingLabels.forEach(s => expect(labels).toContain(s))
      done()
    });
  });
});




// export function getApplicationWrapper(location?: string) {
//   const history = createHashHistory();
//   location && history.push(location);
//   const initialState: ApplicationState = { layout: layoutInitialState, listRecordTypes: listRecordTypesInitialState, recordView: recordViewInitialState, router: { location: history.location, action: "REPLACE" }, search: searchInitialState };
//   const store = configureStore(history, initialState);
//   const wrapper = mount(<Provider store={store}><Main history={history} theme={'light'}></Main></Provider>);
//   return { wrapper, history, initialState, store };
// }

