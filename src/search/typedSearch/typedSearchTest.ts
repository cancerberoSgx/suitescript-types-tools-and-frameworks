import { search } from './typedSearch';
function typedSearchTest() {
  const s = search({ type: 'item' });
  const r = s.run().each(f => {
    f.getValue('location');
    return false;
  });
}
