import { ReactWrapper } from 'enzyme';
import { click, expectAttributeToBe, expectToBeHidden, expectToBeVisible, expectToHaveLength, getApplicationWrapper, check as setChecked, expectCheckedToBe, wait, print, html } from "../../../utils/test/";
import pMap from 'p-map'

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
    afterEach(() => {
      // wrapper.unmount()
      // wrapper.detach()
    })

    // it('settings are hidden by default button is visible', async done => {
    //   expect(location.href).toContain('/recordView/commercecategory/1/{}')
    //   classes.forEach(c => {
    //     expectToHaveLength(wrapper.find(`.${c}`), 1, c)
    //     expectToHaveLength(wrapper.find(`.${c} input`), 1, c)
    //     expectToBeHidden(wrapper.find(`.${c} input`))
    //   })
    //   expect(wrapper.find(`.RecordViewToolBox .button`)).toHaveLength(1)
    //   expectToBeVisible(wrapper.find(`.RecordViewToolBox .button`))
    //   done()
    // })

    // it('settings visibility toggles when button settings is clicked', async done => {
    //   await click(wrapper.find(`.RecordViewToolBox .button`))
    //   classes.forEach(c => {
    //     expectToBeVisible(wrapper.find(`.${c} input`))
    //   })
    //   await click(wrapper.find(`.RecordViewToolBox .button`))
    //   classes.forEach(c => {
    //     expectToBeHidden(wrapper.find(`.${c} input`))
    //   })
    //   done()
    // })


    async function test(c: string, hash: string, checked: boolean) {
      // const c = classes[i];
      // const hash = hashes[i];
      // const checked = defaultChecked[i];



      expectToBeHidden(wrapper.find(`.${c} input`))
      await click(wrapper.find(`.RecordViewToolBox .button`))
      expectToBeVisible(wrapper.find(`.${c} input`))

      expectCheckedToBe(wrapper.find(`.${c} input`), checked);
      expect(location.href).not.toContain(hash);

      // console.log(`1 init`, c, hash, checked, html(wrapper.find(`.${c} input`)));
      await setChecked(wrapper.find(`.${c} input`), !checked);
      await wait(200)

      expectCheckedToBe(wrapper.find(`.${c} input`), !checked);

      expect(location.href).toContain(hash);

      // console.log(`2 ${checked}`, html(wrapper.find(`.${c} input`)), location.href);
      await setChecked(wrapper.find(`.${c} input`), checked);
      // console.log(`2 ${checked}`,   html(wrapper.find(`.${c} input`)), location.href);
      await wait(200)
      // wrapper.update()

      // console.log(`3 ${checked}`,  c, hash, checked, html(wrapper.find(`.${c} input`)));
      expectCheckedToBe(wrapper.find(`.${c} input`), checked);
      expect(location.href).not.toContain(hash);
    }

    // it('seeValues setting change location', async done => {
    //   await test('seeValues', '{%22seeValues%22%3Atrue}', false);
    //   done()
    // });
    it('showAllFields setting change location', async done => {
      // console.log(location.href);

      await test('showAllFields', '{%22showAllFields%22%3Afalse}', true);
      done()
    });

    // it('showSublistLines setting change location', async done => {
    //   await test('showSublistLines', '{%22showSublistLines%22%3Atrue}', false);
    //   done()
    // });

    // it('seeValues setting change location', async done => {
       // const hashes = [
    //   '{%22seeValues%22%3Atrue}',
    //    '{%22showAllFields%22%3Afalse}',
    //   '{%22showSublistLines%22%3Atrue}',
    //   '{%22inlineEdit%22%3Atrue}',
    // ]
    // const defaultChecked=[false, true, false, false]


      // await pMap(classes, async (c, i)=>{
      //   const hash = hashes[i]
      //   if(!hash) return
      //   const checked = defaultChecked[i]

      //   expectCheckedToBe(wrapper.find(`.${c} input`), checked)
      //   expect(location.href).not.toContain(hash)

      // await setChecked(wrapper.find(`.${c} input`), !checked)
      // expectCheckedToBe(wrapper.find(`.${c} input`), !checked)
      // // expectAttributeToBe(wrapper.find(`.${c} input`), 'checked', 'checked')
      // expect(location.href).toContain(hash)

      // await setChecked(wrapper.find(`.${c} input`), checked)
      // // await setChecked(wrapper.find(`.${c} input`), checked)
      // // await wait(100)
      // expectCheckedToBe(wrapper.find(`.${c} input`), checked)
      // // wrapper.update()
      // // wrapper.render()
      // // expect(location.href).not.toContain(hash)


      // //   expect(location.href).not.toContain(hash)
      // //   await click(wrapper.find(`.${c} input`))
      // //   expect(location.href).toContain(hash)
      // //   await click(wrapper.find(`.${c} input`))
      // //   expect(location.href).not.toContain(hash)
      // }, {concurrency: 1})

    //   done()
    // });

  })


});


// https://www.youtube.com/watch?v=G-LTz7-5eWI
