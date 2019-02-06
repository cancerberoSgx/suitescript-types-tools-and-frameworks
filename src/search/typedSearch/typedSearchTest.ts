import * as nsSearch from 'N/search';
import { ResultSet } from 'N/search';
import { RecordId } from '../../record/recordRef';
import { find as resultFind } from '../results';
import { create } from './typedSearch';
import { find, list } from './typedSearchOperations';

export function typedSearchTest() {

  // rootFolders();

  // allCategories();

  // findRootFolder()
  
  // ls(-15)

  // findFileNamedTest()

  

}


function findFileNamedTest(){
  const found = findFileNamed(-15, name=>name.indexOf('SCA')!==-1)
  if(found){console.log(`found ${found.getValue('name')}`)}
}
function findFileNamed(parentId: RecordId|undefined, predicate: (name:string)=>boolean) {
  return find({
    type: 'file',
    columns: ['name'],
    filters: [
      {
        name: 'folder',
        operator: 'anyOf',
        values: parentId
      }
    ]
  }, f=> predicate(f.getValue('name') as string))
}


function ls(parent?: RecordId) {
  const parentId = parent || '@NONE@'
  const found = list({
    type: 'folder',
    columns: ['name'],
    filters: [
      {
        name: 'parent',
        operator: 'anyOf',
        values: parentId
      }
    ]
  })
  console.log(`Found : ` + found.map(f => f.getValue('name')).join('\n'))
  return found
}


function findRootFolder() {
  const name = 'SuiteScripts'
  const found = resultFind(create({
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