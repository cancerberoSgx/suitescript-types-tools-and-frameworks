import { ReactWrapper } from 'enzyme';
import { click, findOne, getApplicationWrapper, text, expectToContainText, expectToExist } from '../../../utils/testUtil';

describe('header', () => {

  const p : {w: ReactWrapper}= {w: null as any}
  defaultSpecSetup(p)

  it('should show title', () => {
    expectToContainText(p.w, '.header h2', 'mini netsuite ui')
  });

  it('should show navbar links', () => {
    expectToExist(p.w ,['.header .navbar a.home', '.header .navbar .list-record-types', '.header .navbar .search' ] )
    expectToContainText(p.w, '.header .navbar a', ['home', 'types', 'search', 'links'])
    const t = text(p.w, '.header .navbar a').toLowerCase()
    const toContain = ['home', 'types', 'search', 'links']
    toContain.forEach(s => expect(t).toContain(s))
  });

  it('nav bar links should change page on click', async done => {

    expect(p.w.find('.page .home').length).toBeGreaterThan(0)
    expect(p.w.find('.page .list-record-types').length).toBe(0)
    expect(p.w.find('.page .search').length).toBe(0)
    expect(p.w.find('.page .record-view').length).toBe(0)

    await click(p.w.find('.header .navbar a.list-record-types'))
    expect(p.w.find('.page .home').length).toBe(0)
    expect(p.w.find('.page .list-record-types').length).toBeGreaterThan(0)
    expect(p.w.find('.page .search').length).toBe(0)
    expect(p.w.find('.page .record-view').length).toBe(0)

    await click(p.w.find('.header .navbar a.search'))
    expect(p.w.find('.page .home').length).toBe(0)
    expect(p.w.find('.page .list-record-types').length).toBe(0)
    expect(p.w.find('.page .search').length).toBeGreaterThan(0)
    expect(p.w.find('.page .record-view').length).toBe(0)

    await click(p.w.find('.header .navbar a.record-view'))
    expect(p.w.find('.page .home').length).toBe(0)
    expect(p.w.find('.page .list-record-types').length).toBe(0)
    expect(p.w.find('.page .search').length).toBe(0)
    expect(p.w.find('.page .record-view').length).toBeGreaterThan(0)

    await click(p.w.find('.header .navbar a.home'))
    expect(p.w.find('.page .home').length).toBeGreaterThan(0)
    expect(p.w.find('.page .list-record-types').length).toBe(0)
    expect(p.w.find('.page .search').length).toBe(0)
    expect(p.w.find('.page .record-view').length).toBe(0)

    done()
  });

});

// let wrapper: ReactWrapper = {} as any
function defaultSpecSetup(p: {w: ReactWrapper}) {
  beforeEach(async (done) => {
    p.w = (await getApplicationWrapper()).wrapper;
    done();
  });
  afterEach(() => {
    p.w.unmount();
  });
}

