import { create } from './typedSearch';
import * as nsSearch from 'N/search'
import { find } from '../results';
import { Result, ResultSet } from 'N/search';
import { RecordId } from '../../record/recordRef';

export function typedSearchTest() {

  // rootFolders();

  // allCategories();

  findRootFolder()
  // ls()

}

// function ls(parent?: RecordId) {
//   const parentId = parent || '@NONE@'

//   const found = find(create({
//     type: 'folder',
//     columns: ['name'],
//     filters: [
//       {
//         name: 'parent',
//         operator: 'anyOf',
//         values: parentId
//       }
//     ]
//   }).run() as any as ResultSet, f => {
//     console.log(f.getValue('name'), name, f.getValue('name') === name);
//     return f.getValue('name') === name
//   })
//   if (found) {
//     console.log(`Found : ` + found.id);
//   }
//   else {
//     console.log('not found');
//   }


// }
function findRootFolder() {
  const name = 'SuiteScripts'
  const found = find(create({
    type: 'folder',
    columns: ['name'],
    filters: [
      {
        name: 'parent',
        operator: 'anyOf',
        values: '@NONE@'
      }
    ]
  }).run() as any as ResultSet, f => {
    console.log(f.getValue('name'), name, f.getValue('name') === name);
    return f.getValue('name') === name
  })
  if (found) {
    console.log(`Found : ` + found.id);
  }
  else {
    console.log('not found');
  }
}

function allCategories() {
  const s2 = create({
    type: 'commercecategory',
    columns: [{
      name: 'primaryparent',
      sort: nsSearch.Sort.ASC
    }, {
      name: 'created',
      sort: nsSearch.Sort.ASC
    }]
  });
  const i = s2.run().each(f => {
    console.log(`primaryparent: ${f.getValue('primaryparent')}  ${typeof f.getValue('primaryparent')}`);
    console.log(`created: ${f.getValue('created')}  ${typeof f.getValue('created')}`);
    // console.log(`primaryparent: ${f.getValue('displaasdyinsite')}`); // gives type error- wrong column
    return true;
  });
}

function rootFolders() {
  const sss = create({
    type: 'folder',
    columns: ['name', 'parent', 'location'],
    filters: [
      {
        name: 'parent',
        operator: 'anyOf',
        values: '@NONE@'
      }
    ]
  });
  sss.run().each(f => {
    console.log(`name: ${f.getValue('name')} location ${f.getValue('location')}`);
    return true;
  });
}