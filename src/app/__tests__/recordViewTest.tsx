// generates static html page usage example: 
// npx ts-node -P tsconfig-node.json src/app/__tests__/recordViewTest.tsx > spec/fixtures/itemMetadata1.html

import { ReactLike } from '../../jsx/createElement';
import { RecordView } from '../recordView/recordView';
import * as jsx from '../../jsx/declarations/domElementDeclarations'

export function recordViewTest1() {
  const model = require('../../../spec/fixtures/itemMetadata1.json')

  const s = ReactLike.render(
    <RecordView
      record={model}
      seeValues={true}
      showAllFields={false}
      renderLink={() => ''}//app.renderLink.bind(app)}
      currentUrl={''}
      messageFromRedirect={''}
      showSublistLines={true}></RecordView>
  )
  console.log(s);
}

recordViewTest1()


