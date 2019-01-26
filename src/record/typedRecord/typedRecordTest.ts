import { load } from 'N/record';
import { commercecategoryRecordImpl } from './generated/commercecategory';
import { loadOrThrow } from './generatedFactory';

// import { load, loadOrThrow } from './typedRecord';

export function typedRecordTest(){
  // const ref = {id: 33, type: 'commercecategory'}
  // const r = load({id: 33, type: 'commercecategory'})
  // const c = new commercecategoryRecordImpl(ref)
  const c = loadOrThrow({id: 33, type: 'commercecategory'})
  // c.fields.addtohead = 'hi'
  console.log(c.fields.created);
}
