import { getApplicationWrapper } from '../../../utils/testUtil';

describe('RecordView', () => {
  it('shows settings', async done => {
    const { wrapper } = await getApplicationWrapper('/recordView/commercecategory/1/{}');
      const labels = Array.from(wrapper.getDOMNode().querySelectorAll('label')).map(n => n.innerHTML).join(', ')
      const settingLabels = [
        'See Values?',
        'Hide Internal Fields?',
        'Show Sublists Lines?',
        'Edit Inline?'
      ];
      settingLabels.forEach(s => expect(labels).toContain(s))
      done()
  });
});
