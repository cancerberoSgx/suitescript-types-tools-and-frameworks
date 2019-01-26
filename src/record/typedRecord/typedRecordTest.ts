import { loadOrThrow } from './generatedFactory';

export function typedRecordTest(){
  // const ref = {id: 33, type: 'commercecategory'}
  // const r = load({id: 33, type: 'commercecategory'})
  // const c = new commercecategoryRecordImpl(ref)
  const c = loadOrThrow({id: 33, type: 'commercecategory'})
  // c.fields.addtohead = 'hi'
  console.log(`${c.fields.created}, ${c.fields.lastmodified}, ${c.fields.primaryparent}, ${c.fields.name}`);
}
 