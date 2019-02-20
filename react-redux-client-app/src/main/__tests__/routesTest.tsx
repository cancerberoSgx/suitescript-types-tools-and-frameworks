import { expectToBeVisible, expectToNotExist, find, getApplicationWrapper, currentHistory, wait, expectToBeHidden } from "../../utils/test/";
import { ReactWrapper } from 'enzyme';
import { navigate } from '../../utils/test/history';

describe('routes', () => {

  it('/ shows home', async done => {
    const wrapper = await getApplicationWrapper()
    expectToBeVisible(wrapper.find('Page .home'))
    done()
  });

  it('/recordView/inventoryitem/465/{"seeValues"%3Atrue%2C"showAllFields"%3Atrue%2C"showSublistLines"%3Atrue} shows recordView with correct settings', async done => {
    const wrapper = await getApplicationWrapper('/recordView/inventoryitem/465/{"seeValues"%3Atrue%2C"showAllFields"%3Atrue%2C"showSublistLines"%3Atrue}')
    expect(find(wrapper, 'Page .home')).toHaveLength(0)
    expectToBeVisible(wrapper.find('Page .record-view .record-fields .field-editor input'))
    expectToBeVisible(wrapper.find('Page .record-view .sublist .line .field-editor input'))
    expectToBeVisible(wrapper.find('Page .record-view .record-fields .field').findWhere(w=>w.text().includes('_eml_nkey_')))
    done()
  });

  it('options support json syntax without scaping turn on',  async done=>{
    const wrapper = await getApplicationWrapper('/recordView/inventoryitem/465/{seeValues:true,showAllFields:true,showSublistLines:true}')
    expect(find(wrapper, 'Page .home')).toHaveLength(0)
    expectToBeVisible(wrapper.find('Page .record-view .record-fields .field-editor input'))
    expectToBeVisible(wrapper.find('Page .record-view .sublist .line .field-editor input'))
    expectToBeVisible(wrapper.find('Page .record-view .record-fields .field').findWhere(w=>w.text().includes('_eml_nkey_')))
    done()
  })

  it('options support json syntax without scaping turn off',  async done=>{
    const wrapper = await getApplicationWrapper('/recordView/inventoryitem/465/{seeValues:false,showAllFields:false,showSublistLines:false}')
    expectToNotExist(wrapper, 'Page .home')
    expectToNotExist(wrapper.find('Page .record-view .record-fields .field-editor input'))
    expectToNotExist(wrapper.find('Page .record-view .sublist .line .field-editor input'))
    expectToNotExist(wrapper.find('Page .record-view .record-fields .field').findWhere(w=>w.text().includes('_eml_nkey_')))
    done()
  })

  it('options support json syntax not first time nav',  async done=>{
    const wrapper = await getApplicationWrapper('/search/{}')
    expectToNotExist(wrapper.find('Page .record-view'))
    expectToBeVisible(wrapper.find('Page .search'))
    await navigate(wrapper, '/recordView/inventoryitem/465/{seeValues:true,showAllFields:true,showSublistLines:true}');
    expectToNotExist(wrapper, 'Page .home')
    expectToBeVisible(wrapper.find('Page .record-view .record-fields .field-editor input'))
    expectToBeVisible(wrapper.find('Page .record-view .sublist .line .field-editor input'))
    expectToBeVisible(wrapper.find('Page .record-view .record-fields .field').findWhere(w=>w.text().includes('_eml_nkey_')))
    done()
  })

});
