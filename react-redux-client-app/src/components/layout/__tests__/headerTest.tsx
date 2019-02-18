import { ReactWrapper } from 'enzyme';
import { getApplicationWrapper, expectToContainText, expectToExist, click, text } from "../../../utils/test/";

describe('header', () => {

  let wrapper: ReactWrapper
  beforeEach(async ()=>{
    wrapper = await getApplicationWrapper()
  })

  it('should show title', () => {
    expectToContainText(wrapper, '.header h2', 'mini netsuite ui')
  });

  it('should show navbar links', () => {
    expectToExist(wrapper ,['.header .navbar a.home', '.header .navbar .list-record-types', '.header .navbar .search' ] )
    expectToContainText(wrapper, '.header .navbar a', ['home', 'types', 'search', 'links'])
    const t = text(wrapper, '.header .navbar a').toLowerCase()
    const toContain = ['home', 'types', 'search', 'links']
    toContain.forEach(s => expect(t).toContain(s))
  });

  it('nav bar links should change page on click', async done => {
    expect(wrapper.find('.page .home').length).toBeGreaterThan(0)
    expect(wrapper.find('.page .list-record-types').length).toBe(0)
    expect(wrapper.find('.page .search').length).toBe(0)
    expect(wrapper.find('.page .record-view').length).toBe(0)

    await click(wrapper.find('.header .navbar a.list-record-types'))
    expect(wrapper.find('.page .home').length).toBe(0)
    expect(wrapper.find('.page .list-record-types').length).toBeGreaterThan(0)
    expect(wrapper.find('.page .search').length).toBe(0)
    expect(wrapper.find('.page .record-view').length).toBe(0)

    await click(wrapper.find('.header .navbar a.search'))
    expect(wrapper.find('.page .home').length).toBe(0)
    expect(wrapper.find('.page .list-record-types').length).toBe(0)
    expect(wrapper.find('.page .search').length).toBeGreaterThan(0)
    expect(wrapper.find('.page .record-view').length).toBe(0)

    await click(wrapper.find('.header .navbar a.record-view'))
    expect(wrapper.find('.page .home').length).toBe(0)
    expect(wrapper.find('.page .list-record-types').length).toBe(0)
    expect(wrapper.find('.page .search').length).toBe(0)
    expect(wrapper.find('.page .record-view').length).toBeGreaterThan(0)

    await click(wrapper.find('.header .navbar a.home'))
    expect(wrapper.find('.page .home').length).toBeGreaterThan(0)
    expect(wrapper.find('.page .list-record-types').length).toBe(0)
    expect(wrapper.find('.page .search').length).toBe(0)
    expect(wrapper.find('.page .record-view').length).toBe(0)

    done()
  });

});

