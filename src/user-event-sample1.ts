/**
 * @NAPIVersion 2.0
 * @NScriptType UserEventScript
 */

import { EntryPoints } from 'N/types';
import * as log from 'N/log';

export let beforeSubmit: EntryPoints.UserEvent.beforeSubmit = (context: EntryPoints.UserEvent.beforeSubmitContext) => {
    let x = context.newRecord.getValue({ fieldId: 'companyname' });
    log.audit('value', `companyname is: ${x}`);
}