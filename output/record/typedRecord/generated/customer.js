// This file is auto generated, do not edit it. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../typedRecord"], function (require, exports, typedRecord_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var customerFieldsImpl = /** @class */ (function () {
        function customerFieldsImpl(typedRecord) {
            this.typedRecord = typedRecord;
        }
        Object.defineProperty(customerFieldsImpl.prototype, "accessrole", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('accessrole');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('accessrole', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "accountnumber", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('accountnumber');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('accountnumber', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "alcoholrecipienttype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('alcoholrecipienttype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('alcoholrecipienttype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "altemail", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('altemail');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('altemail', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "altphone", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('altphone');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('altphone', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "assignedwebsite", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('assignedwebsite');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('assignedwebsite', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "autoname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('autoname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('autoname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "balance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('balance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('balance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "billpay", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('billpay');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('billpay', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "buyingreason", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('buyingreason');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('buyingreason', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "buyingtimeframe", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('buyingtimeframe');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('buyingtimeframe', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "campaigncategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('campaigncategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('campaigncategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "category", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('category');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('category', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "clickstream", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('clickstream');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('clickstream', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "comments", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('comments');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('comments', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "companyname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('companyname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('companyname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "consolbalance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('consolbalance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('consolbalance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "consoldaysoverdue", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('consoldaysoverdue');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('consoldaysoverdue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "consoldepositbalance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('consoldepositbalance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('consoldepositbalance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "consoloverduebalance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('consoloverduebalance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('consoloverduebalance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "consolunbilledorders", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('consolunbilledorders');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('consolunbilledorders', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "contact", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('contact');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('contact', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "creditholdoverride", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('creditholdoverride');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('creditholdoverride', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "creditlimit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('creditlimit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('creditlimit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "currency", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('currency');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('currency', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "currencyprecision", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('currencyprecision');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('currencyprecision', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "customform", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('customform');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('customform', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "datecreated", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('datecreated');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('datecreated', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "daysoverdue", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('daysoverdue');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('daysoverdue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "defaultaddress", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('defaultaddress');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('defaultaddress', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "defaultbankaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('defaultbankaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('defaultbankaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "defaultorderpriority", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('defaultorderpriority');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('defaultorderpriority', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "depositbalance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('depositbalance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('depositbalance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "draccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('draccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('draccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "email", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('email');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('email', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "emailpreference", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('emailpreference');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('emailpreference', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "emailtransactions", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('emailtransactions');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('emailtransactions', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "enddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('enddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('enddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "entityid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('entityid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('entityid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "entitystatus", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('entitystatus');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('entitystatus', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "estimatedbudget", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('estimatedbudget');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('estimatedbudget', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "externalid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('externalid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('externalid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "fax", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('fax');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('fax', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "faxtransactions", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('faxtransactions');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('faxtransactions', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "firstname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('firstname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('firstname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "firstvisit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('firstvisit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('firstvisit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "fxaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('fxaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('fxaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "giveaccess", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('giveaccess');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('giveaccess', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "globalsubscriptionstatus", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('globalsubscriptionstatus');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('globalsubscriptionstatus', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "homephone", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('homephone');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('homephone', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "image", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('image');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('image', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "isbudgetapproved", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isbudgetapproved');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isbudgetapproved', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "isinactive", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isinactive');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isinactive', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "isjob", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isjob');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isjob', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "isperson", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isperson');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isperson', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "keywords", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('keywords');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('keywords', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "language", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('language');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('language', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "lastmodifieddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastmodifieddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastmodifieddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "lastname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "lastpagevisited", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastpagevisited');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastpagevisited', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "lastvisit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastvisit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastvisit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "leadsource", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('leadsource');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('leadsource', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "middlename", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('middlename');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('middlename', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "mobilephone", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('mobilephone');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('mobilephone', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "monthlyclosing", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('monthlyclosing');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('monthlyclosing', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "negativenumberformat", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('negativenumberformat');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('negativenumberformat', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "numberformat", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('numberformat');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('numberformat', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "openingbalance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('openingbalance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('openingbalance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "openingbalanceaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('openingbalanceaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('openingbalanceaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "openingbalancedate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('openingbalancedate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('openingbalancedate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "overduebalance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('overduebalance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('overduebalance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "parent", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('parent');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('parent', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "partner", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('partner');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('partner', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "password", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('password');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('password', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "password2", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('password2');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('password2', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "phone", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('phone');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('phone', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "phoneticname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('phoneticname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('phoneticname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "prefccprocessor", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('prefccprocessor');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('prefccprocessor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "pricelevel", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('pricelevel');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('pricelevel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "printoncheckas", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('printoncheckas');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('printoncheckas', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "printtransactions", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('printtransactions');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('printtransactions', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "receivablesaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('receivablesaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('receivablesaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "referrer", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('referrer');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('referrer', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "reminderdays", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('reminderdays');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('reminderdays', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "representingsubsidiary", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('representingsubsidiary');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('representingsubsidiary', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "resalenumber", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('resalenumber');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('resalenumber', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "salesgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('salesgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('salesgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "salesreadiness", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('salesreadiness');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('salesreadiness', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "salesrep", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('salesrep');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('salesrep', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "salutation", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('salutation');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('salutation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "sendemail", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('sendemail');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('sendemail', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "shipcomplete", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipcomplete');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipcomplete', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "shippingcarrier", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingcarrier');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingcarrier', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "shippingitem", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingitem');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingitem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "sourcewebsite", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('sourcewebsite');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('sourcewebsite', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "stage", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('stage');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('stage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "startdate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('startdate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('startdate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "strength", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('strength');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('strength', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "subsidiary", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('subsidiary');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('subsidiary', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "syncpartnerteams", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('syncpartnerteams');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('syncpartnerteams', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "syncsalesteams", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('syncsalesteams');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('syncsalesteams', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "taxable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "taxexempt", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxexempt');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxexempt', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "taxfractionunit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxfractionunit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxfractionunit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "taxitem", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxitem');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxitem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "taxrounding", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxrounding');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxrounding', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "terms", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('terms');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('terms', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "territory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('territory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('territory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "thirdpartyacct", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('thirdpartyacct');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('thirdpartyacct', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "thirdpartycarrier", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('thirdpartycarrier');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('thirdpartycarrier', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "thirdpartycountry", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('thirdpartycountry');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('thirdpartycountry', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "thirdpartyzipcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('thirdpartyzipcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('thirdpartyzipcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "title", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('title');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('title', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "unbilledorders", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('unbilledorders');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('unbilledorders', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "unsubscribe", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('unsubscribe');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('unsubscribe', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "url", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('url');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('url', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "vatregnumber", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vatregnumber');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vatregnumber', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "visits", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('visits');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('visits', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(customerFieldsImpl.prototype, "weblead", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('weblead');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('weblead', value);
            },
            enumerable: true,
            configurable: true
        });
        return customerFieldsImpl;
    }());
    exports.customerFieldsImpl = customerFieldsImpl;
    var customerRecordImpl = /** @class */ (function (_super) {
        __extends(customerRecordImpl, _super);
        function customerRecordImpl(nsRecord) {
            var _this = _super.call(this, nsRecord) || this;
            _this.nsRecord = nsRecord;
            _this._fields = new customerFieldsImpl(_this);
            return _this;
            // this._sublists = customernew FieldsImpl(this)
        }
        return customerRecordImpl;
    }(typedRecord_1.TypedRecordImpl));
    exports.customerRecordImpl = customerRecordImpl;
});
