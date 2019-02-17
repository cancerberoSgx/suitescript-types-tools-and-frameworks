import { getApplicationWrapper, find } from '../../utils/testUtil';

describe('home', () => {
  it('should show home page by default', async done => {
    const { wrapper } = await getApplicationWrapper()
    expect(find(wrapper, '.page .home')).toHaveLength(1)
    // console.log(find(wrapper, '.page .home').map(w=>w.outerHTML));

    done()
  });
});
