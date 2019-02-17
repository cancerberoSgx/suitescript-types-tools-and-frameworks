import { getApplicationWrapper, find } from '../../utils/testUtil';

describe('home', () => {
  it('should show home page by default', async done => {
    const { wrapper } = await getApplicationWrapper()
    expect(find(wrapper, '.home')).toHaveLength(1)
    done()
  });
});
