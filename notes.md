field select options in suitescript 1 : 

var c = nlapiLoadRecord('inventoryitem', 493)
var f = c.getField('custitem_phone_color')
var options = f.getSelectOptions().map(function(o){return {id: o.getId(), text: o.getText()}})
var optsS = JSON.stringify(options)
var fv =  c.getFieldValue('custitem_phone_color')
var ft = c.getFieldText('custitem_phone_color')

var a = 1


ss2 


$ c.getValue('custitem_phone_color').join(', ')
> 1, 2, 3, 4, 6
$ c.getValue('custitem_phone_color')
> [Ljava.lang.String;@5e51900b
$ Object.keys(f).join(',')
> id,label,type,getSelectOptions,insertSelectOption,removeSelectOption,isMandatory,toJSON,toString
$ JSON.stringify(f.getSelectOptions())
> [{"value":"1","text":"Black"},{"value":"2","text":"Jet Black"},{"value":"3","text":"Silver"},{"value":"4","text":"Gold"},{"value":"5","text":"Red"},{"value":"6","text":"Rose Gold"},{"value":"7","text":"Space Grey"},{"value":"8","text":"Black Onyx"},{"value":"9","text":"Gold Platinum"},{"value":"10","text":"White Pearl"},{"value":"11","text":"Grey"},{"value":"12","text":"White"},{"value":"13","text":"Blue"},{"value":"14","text":"Green"},{"value":"15","text":"Brown"},{"value":"16","text":"Pink"},{"value":"17","text":"Yellow"}]



.map(function(o){return {id: o.getId(), text: o.getText()}})




types can be obtained from wsdl - cxsd http://127.0.0.1:8080/list.accounting.xsd https://system.netsuite.com/download/WSDL_v2017_2_0.zip


this can be done in the UI to get sublist fields names and types:


function extractTypesFromUIMachine(m) {
  const types = m.miniform_elem_types
  return m.getFormFieldNames().map((n, i) => ({ name: n, type: types[i] }))
}   

require([], function () {
  // const machine = this.subcategories_machine
  const machine = this.machines.subcategories
  const sublistFields = extractTypesFromUIMachine(machine)
  console.log(sublistFields);
})





if a sublist has no lines, then is not possible to obtain Line Fields metadata like type or isMandateory. Can record.addNewLine be used to create an object like this ?


    /**
     * Creates a new line to the specified sublist and adds it to the end of the sublist sequentially.
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Line} the Line object that was created.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     */    
    this.prototype.addNewLine = function(options) {};   





check if create() accept more optons: 
/**
 * Primary object used to encapsulate a record object.
 *
 * @protected
 * @param {Object} options
 * @param {Object} options.recordObj (server-generated object holding the full metadata and data for a record type,
 *     including all scripting and customization. See RecordSerializationKey.java)
 * @param {number} options.recordObj.id
 * @param {boolean} options.recordObj.isSubrecord = true if the record instance is a subrecord
 * @param {boolean} options.recordObj.isReadOnly = true if the record instance is read only instance
 * @param {boolean} options.recordObj.isDynamic = true if the record instance is a dynamic record
 * @param {boolean} options.recordObj.isCurrentRecord
 * @param {boolean} options.recordObj.isUserEvent
 * @param {Object} options.recordObj.recordContext
 * @param {Metadata} options.recordObj.metadata (record metadata data used to populate the model controller)
 * @param {ModelController} options.recordObj.data (record data used to populate the model)
 * @param {RecordStateController} options.recordObj.state (record state to use to pre-populate the model controller)
 * @return {Record} client-side record implementation
 * @constructor
 */
function Record() {




  check if we can instantiate a new sublist since its constructor is not protected ? 

  /**
 * Return a new instance of sublist object
 *
 * @param {Object} sublist
 * @param {string} sublist.type type of sublist
 * @param {SublistState} sublist.sublistState SublistState

 * @return {Sublist}
 * @constructor
 *
 * @since 2015.2
 */ 
function Sublist() {



* use serverside actions to discover record: actions.find()

       var rec = record.create({type: 'timebill', isDynamic: true});   
       rec.setValue({fieldId: 'employee', value: 104}); 
       rec.setValue({fieldId: 'location', value: 312});
       rec.setValue({fieldId: 'hours', value: 5}); 
       var recordId = rec.save();

       var actions = action.find({
           recordType: 'timebill',
           recordId: recordId

       });

       log.debug("We've got the following actions: " + Object.keys(actions));
       if (actions.approve) {
           var result = actions.approve();
           log.debug("Timebill has been successfully approved");
       } else {   
           log.debug("The timebill is already approved");
       }

       https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510761537.html