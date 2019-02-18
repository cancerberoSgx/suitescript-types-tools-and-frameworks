import { ReactWrapper } from 'enzyme';
import { click, expectAttributeToBe, expectToBeHidden, expectToBeVisible, expectToHaveLength, getApplicationWrapper, check as setChecked } from "../../../utils/test/";

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
      // wrapper && wrapper.unmount()
      wrapper = await getApplicationWrapper('/recordView/commercecategory/1/{}')
    })
    // afterEach(() => {
      // wrapper.unmount()
      // wrapper.detach()
    // })

    it('settings are hidden by default button is visible', async done => {
      expect(location.href).toContain('/recordView/commercecategory/1/{}')
      classes.forEach(c => {
        expectToHaveLength(wrapper.find(`.${c}`), 1, c)
        expectToHaveLength(wrapper.find(`.${c} input`), 1, c)
        expectToBeHidden(wrapper.find(`.${c} input`))
      })
      expect(wrapper.find(`.RecordViewToolBox .button`)).toHaveLength(1)
      expectToBeVisible(wrapper.find(`.RecordViewToolBox .button`))
      done()
    })

    it('settings visibility toggles when button settings is clicked', async done => {
      await click(wrapper.find(`.RecordViewToolBox .button`))
      classes.forEach(c => {
        expectToBeVisible(wrapper.find(`.${c} input`))
      })
      await click(wrapper.find(`.RecordViewToolBox .button`))
      classes.forEach(c => {
        expectToBeHidden(wrapper.find(`.${c} input`))
      })
      done()
    })

    it('settings change location', async done => {
      const hashes = [
        '{%22seeValues%22%3Atrue}',
        '"showAllFields"%3Afalse',
        '"showSublistLines"%3Atrue',
        '"inlineEdit"%3Atrue'
      ]
      await click(wrapper.find(`.RecordViewToolBox .button`))
      expectToBeVisible(wrapper.find(`.seeValues input`))
      expectAttributeToBe(wrapper.find(`.seeValues input`), 'checked', null)
      await setChecked(wrapper.find(`.seeValues input`), true)
      expectAttributeToBe(wrapper.find(`.seeValues input`), 'checked', 'checked')
      expect(location.href).toContain(hashes[0])
      // await waitFor(t => true)

      // await waitFor(t => true)
      // wrapper.update()


      // console.log(location.href);

      // await pMap(classes, async (c, i)=>{
      //   const hash = hashes[i]
      //   expect(location.href).not.toContain(hash)
      //   await click(wrapper.find(`.${c} input`))
      //   expect(location.href).toContain(hash)
      //   await click(wrapper.find(`.${c} input`))
      //   expect(location.href).not.toContain(hash)
      // }, {concurrency: 1})

      done()
    });

  })


});

// https://www.youtube.com/watch?v=G-LTz7-5eWI
