import { ReactWrapper } from 'enzyme';
import { check as setChecked, click, expectCheckedToBe, expectToBeHidden, expectToBeVisible, expectToHaveLength, getApplicationWrapper, expectToNotExist, ElementOrWrapper, asElement, wait } from "../../../utils/test/";
import { navigate } from '../../../utils/test/history';

describe('RecordView', () => {

  const classes = [
    'seeValues',
    'showAllFields',
    'showSublistLines',
    'inlineEdit'
  ];

  // let wrapper: ReactWrapper
  // beforeEach(async () => {
  //   wrapper = await getApplicationWrapper()
  // })

  fit('settings are hidden by default button is visible', async done => {
    const w = await getApplicationWrapper()
    expectToNotExist(w, 'Page .list-record-types')
    await navigate(w, '/listRecordTypes/{}')
    expectToBeVisible(w.find('Page .list-record-types'))

    expect((w.find('Page .list-record-types select.select-type').getDOMNode() as HTMLSelectElement).selectedIndex).toBe(0)
    await select(w.find('Page .list-record-types select.select-type'), 'commercecategory')
    await wait(10)
    w.update()
    done()
  })

});
async function select(w: ElementOrWrapper, value: string): Promise<void> {
  const e = asElement<HTMLSelectElement>(w)
  if (!e) { return }
  const option = e.querySelector<HTMLOptionElement>(`[value="${value}"]`)
  if (!option) { return }
  Array.from( e.querySelectorAll('option')).forEach(o=>o.selected=false)
  option.selected = true
  e.selectedIndex = option.index
  e.value = option.value
}


