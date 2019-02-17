import { ReactWrapper } from 'enzyme';
import { click, findOne, getApplicationWrapper, text } from '../../../utils/testUtil';

describe('header', () => {
  let wrapper: ReactWrapper
  beforeEach(async done => {
    wrapper = (await getApplicationWrapper()).wrapper
    done()
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('should show title', () => {
    expect(findOne(wrapper, '.header h2').textContent!.toLowerCase()).toContain('mini netsuite ui')
  });

  it('should show navbar links', () => {
    const t = text(wrapper, '.header .navbar a').toLowerCase()
    const toContain = ['home', 'list types', 'search', 'example links']
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
