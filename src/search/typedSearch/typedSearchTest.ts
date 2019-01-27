import { search } from './typedSearch';


export function typedSearchTest() {
  const s = search({ type: 'item' });
  const r = s.run().each(f => {
    f.getValue('location');
    return false;
  });

//   const s2 = search({ type: 'commercecategory' });
//   const i = s2.run().each(f => {
//     console.log(`created: ${toString(f.getValue('in'))}`);
//     f.getValue('location');
//     return false;
//   });
// }
}
