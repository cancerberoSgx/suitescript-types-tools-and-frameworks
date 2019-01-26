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
    var noninventoryitemFieldsImpl = /** @class */ (function () {
        function noninventoryitemFieldsImpl(typedRecord) {
            this.typedRecord = typedRecord;
        }
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "amortizationperiod", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('amortizationperiod');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('amortizationperiod', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "amortizationtemplate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('amortizationtemplate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('amortizationtemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "auctionquantity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('auctionquantity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('auctionquantity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "auctiontype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('auctiontype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('auctiontype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "availabletopartners", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('availabletopartners');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('availabletopartners', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "billingschedule", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('billingschedule');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('billingschedule', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "buyitnowprice", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('buyitnowprice');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('buyitnowprice', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "class", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('class');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('class', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "conditionenabled", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('conditionenabled');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('conditionenabled', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "conditionhelpurl", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('conditionhelpurl');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('conditionhelpurl', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "contingentrevenuehandling", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('contingentrevenuehandling');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('contingentrevenuehandling', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "copydescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('copydescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('copydescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "cost", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('cost');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('cost', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "costcategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('costcategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('costcategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "costestimate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('costestimate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('costestimate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "costestimatetype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('costestimatetype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('costestimatetype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "costunits", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('costunits');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('costunits', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "countryofmanufacture", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('countryofmanufacture');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('countryofmanufacture', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "createddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('createddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('createddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "createrevenueplanson", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('createrevenueplanson');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('createrevenueplanson', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "currency", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('currency');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('currency', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "customform", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('customform');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('customform', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "deferralaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('deferralaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('deferralaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "deferredrevenueaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('deferredrevenueaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('deferredrevenueaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "deferrevrec", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('deferrevrec');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('deferrevrec', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "department", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('department');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('department', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "directrevenueposting", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('directrevenueposting');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('directrevenueposting', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "displayinebaystore", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('displayinebaystore');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('displayinebaystore', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "displayname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('displayname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('displayname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "dontshowprice", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('dontshowprice');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('dontshowprice', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "dropshipexpenseaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('dropshipexpenseaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('dropshipexpenseaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayhandlingtime", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayhandlingtime');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayhandlingtime', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayintlinsurancefee", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayintlinsurancefee');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayintlinsurancefee', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayintlpackagehandlingfee", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayintlpackagehandlingfee');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayintlpackagehandlingfee', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayintlshipinsurance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayintlshipinsurance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayintlshipinsurance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayintlshippingitem1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayintlshippingitem1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayintlshippingitem1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayintlshippingitem2", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayintlshippingitem2');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayintlshippingitem2', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayintlshippingitem3", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayintlshippingitem3');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayintlshippingitem3', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayisintlcalculatedrate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayisintlcalculatedrate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayisintlcalculatedrate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayisirregularpackage", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayisirregularpackage');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayisirregularpackage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayitemdescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayitemdescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayitemdescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayitemlocdisplay", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayitemlocdisplay');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayitemlocdisplay', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayitemloczipcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayitemloczipcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayitemloczipcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayitemlots", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayitemlots');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayitemlots', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayitemsubtitle", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayitemsubtitle');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayitemsubtitle', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayitemtitle", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayitemtitle');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayitemtitle', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayitemweightamt", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayitemweightamt');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayitemweightamt', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebaylayout", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebaylayout');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebaylayout', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebaypackagetype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebaypackagetype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebaypackagetype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebaypagecounter", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebaypagecounter');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebaypagecounter', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebayrelistingoption", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebayrelistingoption');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebayrelistingoption', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebaytheme", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebaytheme');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebaytheme', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "ebaythemegroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('ebaythemegroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('ebaythemegroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "endauctionswhenoutofstock", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('endauctionswhenoutofstock');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('endauctionswhenoutofstock', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "enforceminqtyinternally", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('enforceminqtyinternally');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('enforceminqtyinternally', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "excludefromsitemap", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('excludefromsitemap');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('excludefromsitemap', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "expenseaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('expenseaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('expenseaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "externalid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('externalid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('externalid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "featureddescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('featureddescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('featureddescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "froogleproductfeed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('froogleproductfeed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('froogleproductfeed', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "gallery", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('gallery');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('gallery', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "galleryfeatured", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('galleryfeatured');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('galleryfeatured', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "generateaccruals", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('generateaccruals');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('generateaccruals', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "gifttypeexpressship", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('gifttypeexpressship');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('gifttypeexpressship', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "gifttypegiftwrap", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('gifttypegiftwrap');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('gifttypegiftwrap', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "gifttypeshiptorecipient", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('gifttypeshiptorecipient');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('gifttypeshiptorecipient', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "handlingcost", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('handlingcost');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('handlingcost', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "handlingcostunits", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('handlingcostunits');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('handlingcostunits', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "handlinggroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('handlinggroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('handlinggroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "imagesgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('imagesgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('imagesgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "imageslocation", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('imageslocation');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('imageslocation', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "includechildren", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('includechildren');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('includechildren', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "incomeaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('incomeaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('incomeaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "intercodefrevaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('intercodefrevaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('intercodefrevaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "intercoexpenseaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('intercoexpenseaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('intercoexpenseaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "intercoincomeaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('intercoincomeaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('intercoincomeaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "internalid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('internalid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('internalid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "iscalculatedrate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('iscalculatedrate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('iscalculatedrate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "isdonationitem", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isdonationitem');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isdonationitem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "isdropshipitem", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isdropshipitem');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isdropshipitem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "isfulfillable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isfulfillable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isfulfillable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "isgcocompliant", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isgcocompliant');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isgcocompliant', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "isinactive", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isinactive');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isinactive', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "isonline", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isonline');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isonline', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "isspecialorderitem", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('isspecialorderitem');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('isspecialorderitem', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "issueproduct", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('issueproduct');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('issueproduct', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "itemcondition", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemcondition');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemcondition', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "itemhandlingfee", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemhandlingfee');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemhandlingfee', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "itemid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "iteminsurancefee", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('iteminsurancefee');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('iteminsurancefee', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "itemoptions", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemoptions');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemoptions', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "itemrevenuecategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemrevenuecategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemrevenuecategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "itemshipinsurance", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemshipinsurance');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemshipinsurance', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "itemtype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('itemtype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('itemtype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "lastmodifieddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastmodifieddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastmodifieddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "listimmediate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('listimmediate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('listimmediate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "listingduration", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('listingduration');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('listingduration', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "listingstartdate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('listingstartdate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('listingstartdate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "listingstarttime", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('listingstarttime');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('listingstarttime', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "location", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('location');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('location', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "manufacturer", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('manufacturer');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('manufacturer', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "manufactureraddr1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('manufactureraddr1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('manufactureraddr1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "manufacturercity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('manufacturercity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('manufacturercity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "manufacturerstate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('manufacturerstate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('manufacturerstate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "manufacturertariff", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('manufacturertariff');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('manufacturertariff', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "manufacturertaxid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('manufacturertaxid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('manufacturertaxid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "manufacturerzip", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('manufacturerzip');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('manufacturerzip', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "matrixitemnametemplate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('matrixitemnametemplate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('matrixitemnametemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "matrixtype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('matrixtype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('matrixtype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "maxdonationamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('maxdonationamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('maxdonationamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "maximumquantity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('maximumquantity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('maximumquantity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "metataghtml", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('metataghtml');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('metataghtml', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "minimumquantity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('minimumquantity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('minimumquantity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "minimumquantityunits", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('minimumquantityunits');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('minimumquantityunits', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "mossapplies", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('mossapplies');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('mossapplies', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "mpn", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('mpn');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('mpn', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "multmanufactureaddr", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('multmanufactureaddr');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('multmanufactureaddr', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "nextagcategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('nextagcategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('nextagcategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "nextagproductfeed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('nextagproductfeed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('nextagproductfeed', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "nopricemessage", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('nopricemessage');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('nopricemessage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "numactivelistings", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('numactivelistings');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('numactivelistings', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "numcurrentlylisted", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('numcurrentlylisted');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('numcurrentlylisted', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "offersupport", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('offersupport');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('offersupport', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "outofstockbehavior", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('outofstockbehavior');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('outofstockbehavior', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "outofstockmessage", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('outofstockmessage');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('outofstockmessage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "overallquantitypricingtype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('overallquantitypricingtype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('overallquantitypricingtype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "overheadtype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('overheadtype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('overheadtype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "packageheight", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('packageheight');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('packageheight', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "packagelength", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('packagelength');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('packagelength', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "packagewidth", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('packagewidth');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('packagewidth', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "pagetitle", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('pagetitle');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('pagetitle', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "parent", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('parent');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('parent', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "preferencecriterion", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('preferencecriterion');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('preferencecriterion', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "pricinggroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('pricinggroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('pricinggroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "primarycatdisplayname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('primarycatdisplayname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('primarycatdisplayname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "primarycategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('primarycategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('primarycategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "producer", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('producer');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('producer', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "productfeed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('productfeed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('productfeed', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "purchasedescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('purchasedescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('purchasedescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "purchaseorderamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('purchaseorderamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('purchaseorderamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "purchaseorderquantity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('purchaseorderquantity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('purchaseorderquantity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "purchaseorderquantitydiff", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('purchaseorderquantitydiff');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('purchaseorderquantitydiff', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "purchaseunit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('purchaseunit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('purchaseunit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "quantitypricingschedule", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('quantitypricingschedule');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('quantitypricingschedule', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "receiptamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('receiptamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('receiptamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "receiptquantity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('receiptquantity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('receiptquantity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "receiptquantitydiff", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('receiptquantitydiff');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('receiptquantitydiff', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "refundgivenas", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('refundgivenas');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('refundgivenas', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "relateditemsdescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('relateditemsdescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('relateditemsdescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "reserveprice", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('reserveprice');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('reserveprice', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "residual", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('residual');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('residual', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "returnpolicy", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('returnpolicy');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('returnpolicy', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "returnpolicydetails", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('returnpolicydetails');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('returnpolicydetails', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "returnshippingpaidby", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('returnshippingpaidby');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('returnshippingpaidby', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "returnswithin", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('returnswithin');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('returnswithin', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "revenueallocationgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('revenueallocationgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('revenueallocationgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "revenuerecognitionrule", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('revenuerecognitionrule');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('revenuerecognitionrule', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "revrecforecastrule", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('revrecforecastrule');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('revrecforecastrule', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "revreclassfxaccount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('revreclassfxaccount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('revreclassfxaccount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "revrecschedule", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('revrecschedule');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('revrecschedule', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "salesdescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('salesdescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('salesdescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "saleunit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('saleunit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('saleunit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "schedulebcode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('schedulebcode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('schedulebcode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "schedulebnumber", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('schedulebnumber');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('schedulebnumber', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "schedulebquantity", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('schedulebquantity');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('schedulebquantity', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "searchkeywords", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('searchkeywords');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('searchkeywords', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "secondarycatdisplayname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('secondarycatdisplayname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('secondarycatdisplayname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "secondarycategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('secondarycategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('secondarycategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "sellonebay", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('sellonebay');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('sellonebay', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipasia", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipasia');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipasia', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipaustralia", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipaustralia');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipaustralia', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipcanada", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipcanada');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipcanada', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipeurope", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipeurope');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipeurope', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipgermany", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipgermany');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipgermany', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipindividually", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipindividually');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipindividually', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipjapan", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipjapan');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipjapan', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipmexico", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipmexico');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipmexico', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipnorthsouthamerica", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipnorthsouthamerica');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipnorthsouthamerica', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippackage", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippackage');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippackage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingcost", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingcost');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingcost', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingcostunits", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingcostunits');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingcostunits', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingdomesticmethodsgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingdomesticmethodsgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingdomesticmethodsgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingdomgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingdomgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingdomgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingintlgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingintlgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingintlgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingintlgroup1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingintlgroup1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingintlgroup1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingintlgroup2", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingintlgroup2');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingintlgroup2', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingintlgroup3", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingintlgroup3');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingintlgroup3', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingitem1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingitem1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingitem1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingitem2", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingitem2');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingitem2', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingitem3", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingitem3');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingitem3', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippinglocationsgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippinglocationsgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippinglocationsgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingpackaginggroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingpackaginggroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingpackaginggroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingrate1", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingrate1');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingrate1', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingrate2", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingrate2');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingrate2', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shippingrate3", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shippingrate3');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shippingrate3', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipuk", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipuk');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipuk', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shipworldwide", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shipworldwide');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shipworldwide', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shoppingdotcomcategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shoppingdotcomcategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shoppingdotcomcategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shoppingproductfeed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shoppingproductfeed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shoppingproductfeed', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shopzillacategoryid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shopzillacategoryid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shopzillacategoryid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "shopzillaproductfeed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('shopzillaproductfeed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('shopzillaproductfeed', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "showasgift", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('showasgift');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('showasgift', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "showdefaultdonationamount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('showdefaultdonationamount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('showdefaultdonationamount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "sitemappriority", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('sitemappriority');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('sitemappriority', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "softdescriptor", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('softdescriptor');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('softdescriptor', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "standardimages", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('standardimages');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('standardimages', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "startingprice", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('startingprice');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('startingprice', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "stockdescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('stockdescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('stockdescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storecatdisplayname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storecatdisplayname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storecatdisplayname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storecatdisplayname2", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storecatdisplayname2');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storecatdisplayname2', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storecategory", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storecategory');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storecategory', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storecategory2", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storecategory2');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storecategory2', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storedescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storedescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storedescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storedetaileddescription", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storedetaileddescription');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storedetaileddescription', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storedisplayimage", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storedisplayimage');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storedisplayimage', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storedisplayname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storedisplayname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storedisplayname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storedisplaythumbnail", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storedisplaythumbnail');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storedisplaythumbnail', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "storeitemtemplate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('storeitemtemplate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('storeitemtemplate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "subsidiary", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('subsidiary');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('subsidiary', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "subtype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('subtype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('subtype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "supersizeimages", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('supersizeimages');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('supersizeimages', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "taxable", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxable');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxable', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "taxschedule", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('taxschedule');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('taxschedule', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "templatesgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('templatesgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('templatesgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "unitstype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('unitstype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('unitstype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "upccode", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('upccode');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('upccode', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "urlcomponent", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('urlcomponent');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('urlcomponent', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "usemarginalrates", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('usemarginalrates');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('usemarginalrates', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "vendorname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vendorname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vendorname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "vsoedeferral", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vsoedeferral');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vsoedeferral', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "vsoedelivered", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vsoedelivered');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vsoedelivered', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "vsoepermitdiscount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vsoepermitdiscount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vsoepermitdiscount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "vsoeprice", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vsoeprice');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vsoeprice', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "vsoesopgroup", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('vsoesopgroup');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('vsoesopgroup', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "weight", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('weight');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('weight', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "weightunit", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('weightunit');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('weightunit', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "weightunits", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('weightunits');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('weightunits', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "willship", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('willship');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('willship', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(noninventoryitemFieldsImpl.prototype, "yahooproductfeed", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('yahooproductfeed');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('yahooproductfeed', value);
            },
            enumerable: true,
            configurable: true
        });
        return noninventoryitemFieldsImpl;
    }());
    exports.noninventoryitemFieldsImpl = noninventoryitemFieldsImpl;
    var noninventoryitemRecordImpl = /** @class */ (function (_super) {
        __extends(noninventoryitemRecordImpl, _super);
        function noninventoryitemRecordImpl(nsRecord) {
            var _this = _super.call(this, nsRecord) || this;
            _this.nsRecord = nsRecord;
            _this._fields = new noninventoryitemFieldsImpl(_this);
            return _this;
            // this._sublists = noninventoryitemnew FieldsImpl(this)
        }
        return noninventoryitemRecordImpl;
    }(typedRecord_1.TypedRecordImpl));
    exports.noninventoryitemRecordImpl = noninventoryitemRecordImpl;
});
