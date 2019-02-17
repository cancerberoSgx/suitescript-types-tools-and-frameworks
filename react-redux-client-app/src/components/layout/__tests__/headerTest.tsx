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
    expect(wrapper.find('.page .list-record-types').filterWhere(n => n.exists()).length).toBe(0)

    await click(wrapper.find('.header .navbar a').findWhere(p => p.text().toLowerCase().includes('list types')))

    wrapper.update()
    expect(wrapper.find('.page .home').filterWhere(n => n.exists()).length).toBe(0)
    expect(wrapper.find('.page .list-record-types').filterWhere(n => n.exists()).length).toBeGreaterThan(0)

    done()

  });

});
