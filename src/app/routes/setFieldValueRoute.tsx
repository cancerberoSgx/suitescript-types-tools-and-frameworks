import { tryTo } from '../../misc/misc';
import { find as Find } from "../../misc/arrayPrototypeFind";
import { App, Route } from '../app';
import { load } from 'N/record';

export function setFieldValueRoute(app: App): Route {
  return {
    name: 'setFieldValue',
    handler(o) {
      const { recordId, recordType, fieldId, fieldType } = o.params;
      const fieldValue = fieldType==='checkbox' ? o.params.fieldValue === 'true' : fieldType==='multiselect' ? 
      (tryTo(()=>JSON.parse(`${o.params.fieldValue}`))||o.params.fieldValue ): o.params.fieldValue
      const redirect = decodeURIComponent(o.params.redirect);
      if (!recordId || !recordType || !fieldId || typeof fieldValue ==='undefined') {
        return 'Invalid call - !id|| !type || !fieldId || ! fieldValue must apply ' + `${recordId}, ${recordType}, ${fieldId},${fieldValue}`;
      }
      const record = load({ id: recordId, type: recordType });
      if (!record) {
        return 'Record id, type: ' + `${recordId}, ${recordType} not found`;
      }
      if (!Find(record.getFields(), f => f === fieldId)) {
        return 'Record id, type: ' + `${recordId}, ${recordType} does not have fieldId ${fieldId}`;
      }
      try {
        record.setValue({ fieldId, value: fieldValue });
        record.save();
        const messageFromRedirect = `record (${recordType}, ${recordId}) field "${fieldId}" value changed to ${fieldValue} (${fieldType} - ${typeof fieldType}) successfully `;
        if (redirect) {
          return app.redirect({ redirect, messageFromRedirect });
        }
        else {
          return messageFromRedirect;
        }
      }
      catch (error) {
        return `<p><br/>
        <a href="${redirect}">Go to previous page</a></p>setFieldValue: ERROR: while trying to set field on ${JSON.stringify({ recordId, recordType, fieldId, fieldValue, fieldType })} error: \n\n${error}\n\n  ${error.stack.join('\n  ')}`;
      }
    }
  };
}
