import { App, Route, RouteHandlerParams, RouterHandlerOptions } from '../app';
import { ReactLike } from "../../jsx/createElement";
import { load } from 'N/record';
import { RecordView } from './recordView';
import { buildRecordViewModel } from "./buildRecordViewModel";
import { RecordViewProps } from './recordViewTypes';
import { find } from '../../search/typedSearch/typedSearchOperations';
export function recordViewRoute(app: App): Route {
  return {
    name: 'recordView',
    // contentType: 'json',
    handler(o) {

      const { record, seeValues, error, showAllFields, messageFromRedirect, showSublistLines } = buildMetadata(o)

      if (error) { return error }
      // if (jsonMetadataOutput) {
      //   this.contentType = 'json'
      //   return metadata
      // }
      return ReactLike.render(
        <RecordView
          record={record}
          seeValues={seeValues}
          showAllFields={showAllFields}
          {...o.params}
          // renderLink={app.renderLink.bind(app)}
          // currentUrl={app.getCurrentRealUrlSearchFragment()}
          messageFromRedirect={messageFromRedirect}
          showSublistLines={showSublistLines}></RecordView>
      );
    }
  };
}

function buildMetadata(o: RouterHandlerOptions): RecordViewProps & { error: string | undefined } {
  let { id, type, messageFromRedirect } = o.params;
  const findRecord = !!o.params.findRecord;
  const seeValues = !!o.params.seeValues;
  const showAllFields = !!o.params.showAllFields;
  const showSublistLines = !!o.params.showSublistLines;
  let error: string | undefined
  if (!id || !type) {
    error = 'Cannot open record view without an id or type, given id, type: ' + `${id}, ${type}`;
  }
  if (findRecord) {
    const result = find({
      type: type as any,
      columns: [],
      filters: [{ name: 'internalid', values: id, operator: 'anyOf' }]
    }, r => true);
    if (result) {
      type = result.recordType
    }
  }
  const record = load({ id, type, isDynamic: true });
  if (!record) {
    error = 'Record id, type: ' + `${id}, ${type} not be found`;
  }

  return { record: buildRecordViewModel(record, seeValues, showAllFields), error, seeValues, showAllFields, messageFromRedirect, showSublistLines, renderLink: undefined as any, currentUrl: undefined as any, currentParams: undefined as any }
}


export function recordViewJsonRoute(app: App): Route {
  return {
    name: 'recordViewJson',
    contentType: 'json',
    handler(o) {
      return buildMetadata(o)
    }
  }
}
