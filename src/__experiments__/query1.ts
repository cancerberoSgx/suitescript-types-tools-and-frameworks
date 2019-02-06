

import * as query from 'N/query'
import { find } from '../search/results';

export function query1Test(){
  const s3 = query.create({type: 'item'})
  // s3.join({fieldId: 'user'})
  s3.createColumn({fieldId: 'onlineprice'})
  s3.createColumn({fieldId: 'urlcomponent'})
  
  s3.run().results.forEach(r=>
    console.log(r.values)  )

}



// category: 'text';
// categorynohierarchy: 'text';
// categorypreferred: 'text';
// 