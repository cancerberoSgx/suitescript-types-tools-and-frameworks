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
    var invoiceFieldsImpl = /** @class */ (function () {
        function invoiceFieldsImpl(typedRecord) {
            this.typedRecord = typedRecord;
        }
        Object.defineProperty(invoiceFieldsImpl.prototype, "account", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('account');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('account', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "althandlingcost", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('althandlingcost');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('althandlingcost', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "altshippingcost", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('altshippingcost');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('altshippingcost', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "amountpaid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('amountpaid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('amountpaid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "amountremaining", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('amountremaining');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('amountremaining', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "amountremainingtotalbox", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('amountremainingtotalbox');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('amountremainingtotalbox', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "approvalstatus", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('approvalstatus');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('approvalstatus', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "balance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('balance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('balance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "billaddress", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('billaddress');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('billaddress', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "billaddresslist", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('billaddresslist');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('billaddresslist', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "billingaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('billingaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('billingaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "billingaddress", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('billingaddress');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('billingaddress', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "billisresidential", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('billisresidential');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('billisresidential', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "canhavestackable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('canhavestackable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('canhavestackable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "class", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('class');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('class', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "consolidatebalance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('consolidatebalance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('consolidatebalance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "couponcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('couponcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('couponcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "createddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('createddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('createddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "createdfrom", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('createdfrom');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('createdfrom', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "currency", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('currency');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('currency', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "currencyname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('currencyname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('currencyname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "currencysymbol", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('currencysymbol');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('currencysymbol', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "customform", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('customform');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('customform', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "deferredrevenue", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('deferredrevenue');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('deferredrevenue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "department", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('department');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('department', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "discountamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('discountamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('discountamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "discountdate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('discountdate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('discountdate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "discountitem", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('discountitem');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('discountitem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "discountrate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('discountrate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('discountrate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "discounttotal", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('discounttotal');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('discounttotal', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "duedate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('duedate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('duedate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "email", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('email');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('email', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "enddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('enddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('enddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "entity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('entity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('entity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "entitynexus", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('entitynexus');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('entitynexus', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "entitytaxregnum", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('entitytaxregnum');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('entitytaxregnum', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "estgrossprofit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('estgrossprofit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('estgrossprofit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "estgrossprofitpercent", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('estgrossprofitpercent');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('estgrossprofitpercent', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "exchangerate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('exchangerate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('exchangerate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "excludecommission", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('excludecommission');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('excludecommission', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "expcostdiscamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expcostdiscamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expcostdiscamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "expcostdiscount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expcostdiscount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expcostdiscount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "expcostdiscprint", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expcostdiscprint');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expcostdiscprint', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "expcostdiscrate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expcostdiscrate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expcostdiscrate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "expcostdisctaxable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expcostdisctaxable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expcostdisctaxable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "expcosttaxcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expcosttaxcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expcosttaxcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "expcosttaxrate1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expcosttaxrate1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expcosttaxrate1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "externalid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('externalid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('externalid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "fob", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('fob');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('fob', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "giftcertapplied", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('giftcertapplied');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('giftcertapplied', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "handlingcost", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('handlingcost');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('handlingcost', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "handlingtax1rate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('handlingtax1rate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('handlingtax1rate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "handlingtaxcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('handlingtaxcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('handlingtaxcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "isbasecurrency", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isbasecurrency');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isbasecurrency', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "ismultishipto", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ismultishipto');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ismultishipto', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "istaxable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('istaxable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('istaxable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "itemcostdiscamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcostdiscamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcostdiscamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "itemcostdiscount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcostdiscount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcostdiscount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "itemcostdiscprint", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcostdiscprint');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcostdiscprint', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "itemcostdiscrate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcostdiscrate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcostdiscrate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "itemcostdisctaxable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcostdisctaxable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcostdisctaxable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "itemcosttaxcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcosttaxcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcosttaxcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "itemcosttaxrate1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcosttaxrate1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcosttaxrate1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "lastmodifieddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastmodifieddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastmodifieddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "leadsource", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('leadsource');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('leadsource', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "linkedtrackingnumbers", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('linkedtrackingnumbers');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('linkedtrackingnumbers', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "location", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('location');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('location', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "memo", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('memo');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('memo', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "message", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('message');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('message', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "messagesel", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('messagesel');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('messagesel', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "muccpromocodeinstance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('muccpromocodeinstance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('muccpromocodeinstance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "nextapprover", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('nextapprover');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('nextapprover', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "nexus", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('nexus');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('nexus', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "opportunity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('opportunity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('opportunity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "otherrefnum", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('otherrefnum');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('otherrefnum', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "partner", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('partner');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('partner', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "postingperiod", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('postingperiod');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('postingperiod', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "promocode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('promocode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('promocode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "promocodepluginimpl", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('promocodepluginimpl');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('promocodepluginimpl', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "recognizedrevenue", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('recognizedrevenue');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('recognizedrevenue', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "recurringbill", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('recurringbill');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('recurringbill', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "returntrackingnumbers", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('returntrackingnumbers');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('returntrackingnumbers', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "revenuestatus", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('revenuestatus');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('revenuestatus', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "revreconrevcommitment", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('revreconrevcommitment');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('revreconrevcommitment', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "saleseffectivedate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('saleseffectivedate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('saleseffectivedate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "salesgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('salesgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('salesgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "salesrep", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('salesrep');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('salesrep', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shipaddress", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipaddress');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipaddress', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shipaddresslist", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipaddresslist');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipaddresslist', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shipdate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipdate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipdate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shipisresidential", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipisresidential');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipisresidential', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shipmethod", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipmethod');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipmethod', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shipoverride", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipoverride');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipoverride', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shippingaddress", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingaddress');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingaddress', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shippingcost", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingcost');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingcost', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shippingcostoverridden", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingcostoverridden');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingcostoverridden', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shippingtax1rate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingtax1rate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingtax1rate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "shippingtaxcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingtaxcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingtaxcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "source", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('source');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('source', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "startdate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('startdate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('startdate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "status", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('status');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('status', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "statusRef", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('statusRef');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('statusRef', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "subsidiary", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('subsidiary');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('subsidiary', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "subsidiarytaxregnum", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('subsidiarytaxregnum');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('subsidiarytaxregnum', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "subtotal", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('subtotal');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('subtotal', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "syncpartnerteams", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('syncpartnerteams');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('syncpartnerteams', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "syncsalesteams", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('syncsalesteams');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('syncsalesteams', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "taxdetailsoverride", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxdetailsoverride');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxdetailsoverride', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "taxitem", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxitem');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxitem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "taxrate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxrate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxrate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "taxregoverride", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxregoverride');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxregoverride', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "taxtotal", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxtotal');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxtotal', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "terms", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('terms');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('terms', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "timediscamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('timediscamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('timediscamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "timediscount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('timediscount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('timediscount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "timediscprint", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('timediscprint');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('timediscprint', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "timediscrate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('timediscrate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('timediscrate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "timedisctaxable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('timedisctaxable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('timedisctaxable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "timetaxcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('timetaxcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('timetaxcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "timetaxrate1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('timetaxrate1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('timetaxrate1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "tobeemailed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('tobeemailed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('tobeemailed', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "tobefaxed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('tobefaxed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('tobefaxed', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "tobeprinted", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('tobeprinted');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('tobeprinted', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "total", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('total');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('total', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "totalcostestimate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('totalcostestimate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('totalcostestimate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "trackingnumbers", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('trackingnumbers');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('trackingnumbers', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "trandate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('trandate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('trandate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "tranid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('tranid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('tranid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "tranisvsoebundle", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('tranisvsoebundle');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('tranisvsoebundle', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "unbilledorders", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('unbilledorders');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('unbilledorders', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(invoiceFieldsImpl.prototype, "vsoeautocalc", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vsoeautocalc');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vsoeautocalc', value);
            },
            enumerable: true,
            configurable: true
        });
        return invoiceFieldsImpl;
    }());
    exports.invoiceFieldsImpl = invoiceFieldsImpl;
    var invoiceRecordImpl = /** @class */ (function (_super) {
        __extends(invoiceRecordImpl, _super);
        function invoiceRecordImpl(nsRecord) {
            var _this = _super.call(this, nsRecord) || this;
            _this.nsRecord = nsRecord;
            _this._fields = new invoiceFieldsImpl(_this);
            return _this;
            // this._sublists = invoicenew FieldsImpl(this)
        }
        return invoiceRecordImpl;
    }(typedRecord_1.TypedRecordImpl));
    exports.invoiceRecordImpl = invoiceRecordImpl;
});
