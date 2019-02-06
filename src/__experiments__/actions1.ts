import * as record from 'N/record'
import * as action from 'N/action'


// var rec = record.create({type: 'timebill', isDynamic: true});   
// rec.setValue({fieldId: 'employee', value: 104}); 
// rec.setValue({fieldId: 'location', value: 312});
// rec.setValue({fieldId: 'hours', value: 5}); 
// var recordId = rec.save();

// if (actions.approve) {
//     var result = actions.approve();
//     log.debug("Timebill has been successfully approved");
// } else {   
//     log.debug("The timebill is already approved");
// }


export function actionsExperiment1(){

var actions = action.find({
  recordType: 'employee',
  recordId: '203'
}) as any;
console.log("We've got the following actions: " + Object.keys(actions));
}