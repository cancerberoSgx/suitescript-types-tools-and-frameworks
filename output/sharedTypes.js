// these types should be shared between the two projects (the generator and the typings)
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchFieldOperatorTextValues = ["contains", "doesNotContain", "doesNotStartWith", "empty", "hasKeywords", "is", "isNot", "notEmpty", "startsWith"];
    exports.SearchFieldOperatorNumberValues = ["between", "empty", "equalTo", "greaterThan", "greaterThanOrEqualTo", "lessThan", "lessThanOrEqualTo", "notBetween", "notEmpty", "notEqualTo", "notGreaterThan", "notGreaterThanOrEqualTo", "notLessThan", "notLessThanOrEqualTo"];
    exports.SearchFieldOperatorDateValues = ['after', 'before', 'isEmpty', 'isNotEmpty', 'notAfter', 'notBefore', 'notOnOrAfter', 'notOnOrBefore', 'notWithin', 'on', 'onOrAfter', 'onOrBefore', 'within'];
    exports.fieldTypeOperatorMetadata = [
        { fieldType: 'text', jsType: 'string', operators: exports.SearchFieldOperatorTextValues },
        { fieldType: 'integer', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'checkbox', jsType: 'boolean', operators: ['equalTo', 'is'] },
        { fieldType: 'date', jsType: 'Date', operators: exports.SearchFieldOperatorDateValues },
        { fieldType: 'textarea', jsType: 'string', operators: exports.SearchFieldOperatorTextValues },
        { fieldType: 'select', jsType: 'string', operators: ["anyOf", "noneOf"] },
        { fieldType: 'float', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'richtext', jsType: 'string', operators: exports.SearchFieldOperatorTextValues },
        { fieldType: 'image', jsType: 'string', operators: ["anyOf", "noneOf"] },
        { fieldType: 'currency', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'datetime', jsType: 'Date', operators: exports.SearchFieldOperatorDateValues },
        { fieldType: 'period', jsType: 'Date', operators: exports.SearchFieldOperatorDateValues },
        { fieldType: 'percent', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'currency2', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'multiselect', jsType: 'number', operators: ['allOf', 'anyOf', 'noneOf', 'notAllOf'] },
    ];
    exports.SearchRecordTypeValues = ["account", "accountingPeriod", "accountingTransaction", "billingAccount", "billingSchedule", "bin", "budget", "calendarEvent", "campaign", "charge", "classification", "commercecategory", "contact", "contactCategory", "contactRole", "costCategory", "consolidatedExchangeRate", "couponCode", "currencyRate", "customer", "customerCategory", "customerMessage", "customerStatus", "customList", "customRecord", "department", "employee", "entityGroup", "expenseCategory", "fairValuePrice", "file", "folder", "giftCertificate", "globalAccountMapping", "hcmJob", "inboundShipment", "inventoryNumber", "item", "itemAccountMapping", "itemDemandPlan", "itemRevision", "itemSupplyPlan", "issue", "job", "jobStatus", "jobType", "location", "manufacturingCostTemplate", "manufacturingOperationTask", "manufacturingRouting", "message", "nexus", "note", "noteType", "opportunity", "otherNameCategory", "partner", "partnerCategory", "paycheck", "paymentMethod", "payrollItem", "phoneCall", "priceLevel", "pricingGroup", "projectTask", "promotionCode", "resourceAllocation", "revRecSchedule", "revRecTemplate", "salesRole", "salesTaxItem", "solution", "siteCategory", "subsidiary", "supportCase", "task", "taxGroup", "taxType", "term", "timeBill", "timeSheet", "topic", "transaction", "unitsType", "usage", "vendor", "vendorCategory", "winLossReason"];
});
