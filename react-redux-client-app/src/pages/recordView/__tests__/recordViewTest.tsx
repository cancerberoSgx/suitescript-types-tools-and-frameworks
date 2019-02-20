import { ReactWrapper } from 'enzyme';
import { check as setChecked, click, expectCheckedToBe, expectToBeHidden, expectToBeVisible, expectToHaveLength, getApplicationWrapper } from "../../../utils/test/";

describe('RecordView', () => {

  describe('settings', () => {

    const classes = [
      'seeValues',
      'showAllFields',
      'showSublistLines',
      'inlineEdit'
    ];

    let wrapper: ReactWrapper
    beforeEach(async () => {
      wrapper = await getApplicationWrapper('/recordView/commercecategory/1/{}')
    })

    it('settings are hidden by default button is visible', async done => {
      expect(location.href).toContain('/recordView/commercecategory/1/{}')
      classes.forEach(c => {
        expectToHaveLength(wrapper.find(`.${c}`), 1, c)
        expectToHaveLength(wrapper.find(`.${c} input`), 1, c)
        expectToBeHidden(wrapper.find(`.${c} input`))
      })
      expect(wrapper.find(`.tool-box .button`)).toHaveLength(1)
      expectToBeVisible(wrapper.find(`.tool-box .button`))
      done()
    })

    it('settings visibility toggles when button settings is clicked', async done => {
      await click(wrapper.find(`.tool-box .button`))
      classes.forEach(c => {
        expectToBeVisible(wrapper.find(`.${c} input`))
      })
      await click(wrapper.find(`.tool-box .button`))
      classes.forEach(c => {
        expectToBeHidden(wrapper.find(`.${c} input`))
      })
      done()
    })

    async function test(c: string, hash: string, checked: boolean) {
      expectToBeHidden(wrapper.find(`.${c} input`))

      await click(wrapper.find(`.tool-box .button`))
      expectToBeVisible(wrapper.find(`.${c} input`))
      expectCheckedToBe(wrapper.find(`.${c} input`), checked);
      expect(location.href).not.toContain(hash);

      await setChecked(wrapper.find(`.${c} input`), !checked);
      expectCheckedToBe(wrapper.find(`.${c} input`), !checked);
      expect(location.href).toContain(hash);

      await setChecked(wrapper.find(`.${c} input`), checked);
      expectCheckedToBe(wrapper.find(`.${c} input`), checked);
      expect(location.href).not.toContain(hash);
    }

    it('seeValues setting change location', async done => {
      await test('seeValues', '%22seeValues%22%3Atrue', false);
      done()
    });
    it('showAllFields setting change location', async done => {
      await test('showAllFields', '%22showAllFields%22%3Atrue', true);
      done()
    });
    it('showSublistLines setting change location', async done => {
      await test('showSublistLines', '%22showSublistLines%22%3Atrue', false);
      done()
    });
    it('inlineEdit setting change location', async done => {
      await test('inlineEdit', '%22inlineEdit%22%3Atrue', false)
      done()
    });
  })
});


