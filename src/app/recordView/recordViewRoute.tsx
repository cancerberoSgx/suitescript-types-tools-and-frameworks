import { App, Route } from '../app';
import { ReactLike } from "../../jsx/createElement";
import { load } from 'N/record';
import { RecordView } from './recordView';
import { buildRecordViewModel } from "./buildRecordViewModel";
export function recordViewRoute(app: App): Route {
  return {
    name: 'recordView',
    // contentType: 'json',
    handler(o) {
      const { id, type, messageFromRedirect, jsonMetadataOutput } = o.params;
      const seeValues = !!o.params.seeValues;
      const showAllFields = !!o.params.showAllFields;
      const showSublistLines = !!o.params.showSublistLines;
      if (!id || !type) {
        return 'Cannot open record view without an id or type, given id, type: ' + `${id}, ${type}`;
      }
      const record = load({ id, type, isDynamic: true });
      if (!record) {
        return 'Record id, type: ' + `${id}, ${type} not be found`;
      }

      const metadata = buildRecordViewModel(record, seeValues, showAllFields)
      if (jsonMetadataOutput) {
        this.contentType = 'json'
        return metadata
      }
      return ReactLike.render(
        <RecordView
          record={metadata}
          seeValues={seeValues}
          showAllFields={showAllFields}
          renderLink={app.renderLink.bind(app)}
          currentUrl={app.getCurrentRealUrlSearchFragment()}
          messageFromRedirect={messageFromRedirect}
          showSublistLines={showSublistLines}></RecordView>
      );
    }
  };
}
