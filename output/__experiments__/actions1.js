define(["require", "exports", "N/action"], function (require, exports, action) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    function actionsExperiment1() {
        var actions = action.find({
            recordType: 'employee',
            recordId: '203'
        });
        console.log("We've got the following actions: " + Object.keys(actions));
    }
    exports.actionsExperiment1 = actionsExperiment1;
});
