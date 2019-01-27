
// these types should be shared between the two projects (the generator and the typings)

// TODO: verify here https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3005172.html


export type SearchRecordType = ("account" | "accountingPeriod" | "accountingTransaction" | "billingAccount" | "billingSchedule" | "bin" | "budget" | "calendarEvent" | "campaign" | "charge" | "classification" | "commercecategory" | "contact" | "contactCategory" | "contactRole" | "costCategory" | "consolidatedExchangeRate" | "couponCode" | "currencyRate" | "customer" | "customerCategory" | "customerMessage" | "customerStatus" | "customList" | "customRecord" | "department" | "employee" | "entityGroup" | "expenseCategory" | "fairValuePrice" | "file" | "folder" | "giftCertificate" | "globalAccountMapping" | "hcmJob" | "inboundShipment" | "inventoryNumber" | "item" | "itemAccountMapping" | "itemDemandPlan" | "itemRevision" | "itemSupplyPlan" | "issue" | "job" | "jobStatus" | "jobType" | "location" | "manufacturingCostTemplate" | "manufacturingOperationTask" | "manufacturingRouting" | "message" | "nexus" | "note" | "noteType" | "opportunity" | "otherNameCategory" | "partner" | "partnerCategory" | "paycheck" | "paymentMethod" | "payrollItem" | "phoneCall" | "priceLevel" | "pricingGroup" | "projectTask" | "promotionCode" | "resourceAllocation" | "revRecSchedule" | "revRecTemplate" | "salesRole" | "salesTaxItem" | "solution" | "siteCategory" | "subsidiary" | "supportCase" | "task" | "taxGroup" | "taxType" | "term" | "timeBill" | "timeSheet" | "topic" | "transaction" | "unitsType" | "usage" | "vendor" | "vendorCategory" | "winLossReason")

export type RecordType = ("account" | "accountingPeriod" | "advInterCompanyJournalEntry" | "assemblyBuild" | "assemblyUnbuild" | "assemblyItem" | "billingAccount" | "billingSchedule" | "bin" | "binTransfer" | "binWorksheet" | "budget" | "budgetCategory" | "calendarEvent" | "campaign" | "campaignAudience" | "campaignCategory" | "campaignChannel" | "campaignFamily" | "campaignOffer" | "campaignResponse" | "campaignSearchEngine" | "campaignSubscription" | "campaignVertical" | "cashRefund" | "cashSale" | "check" | "charge" | "classification" | "consolidatedExchangeRate" | "contact" | "contactCategory" | "contactRole" | "costCategory" | "couponCode" | "creditMemo" | "crmCustomField" | "currency" | "currencyRate" | "customList" | "customRecord" | "customRecordCustomField" | "customRecordType" | "customTransaction" | "customTransactionType" | "customer" | "customerCategory" | "customerDeposit" | "customerMessage" | "customerPayment" | "customerRefund" | "customerStatus" | "deposit" | "depositApplication" | "department" | "descriptionItem" | "discountItem" | "downloadItem" | "employee" | "entityCustomField" | "entityGroup" | "estimate" | "expenseCategory" | "expenseReport" | "fairValuePrice" | "file" | "folder" | "giftCertificate" | "giftCertificateItem" | "globalAccountMapping" | "hcmJob" | "inboundShipment" | "interCompanyJournalEntry" | "interCompanyTransferOrder" | "inventoryAdjustment" | "inventoryCostRevaluation" | "inventoryItem" | "inventoryNumber" | "inventoryTransfer" | "invoice" | "itemAccountMapping" | "itemCustomField" | "itemDemandPlan" | "itemFulfillment" | "itemGroup" | "itemNumberCustomField" | "itemOptionCustomField" | "itemSupplyPlan" | "itemRevision" | "issue" | "job" | "jobStatus" | "jobType" | "itemReceipt" | "journalEntry" | "kitItem" | "leadSource" | "location" | "lotNumberedInventoryItem" | "lotNumberedAssemblyItem" | "markupItem" | "message" | "manufacturingCostTemplate" | "manufacturingOperationTask" | "manufacturingRouting" | "nexus" | "nonInventoryPurchaseItem" | "nonInventoryResaleItem" | "nonInventorySaleItem" | "note" | "noteType" | "opportunity" | "otherChargePurchaseItem" | "otherChargeResaleItem" | "otherChargeSaleItem" | "otherCustomField" | "otherNameCategory" | "partner" | "partnerCategory" | "paycheck" | "paycheckJournal" | "paymentItem" | "paymentMethod" | "payrollItem" | "phoneCall" | "priceLevel" | "pricingGroup" | "projectTask" | "promotionCode" | "purchaseOrder" | "purchaseRequisition" | "resourceAllocation" | "returnAuthorization" | "revRecSchedule" | "revRecTemplate" | "salesOrder" | "salesRole" | "salesTaxItem" | "serializedInventoryItem" | "serializedAssemblyItem" | "servicePurchaseItem" | "serviceResaleItem" | "serviceSaleItem" | "solution" | "siteCategory" | "state" | "statisticalJournalEntry" | "subsidiary" | "subtotalItem" | "supportCase" | "supportCaseIssue" | "supportCaseOrigin" | "supportCasePriority" | "supportCaseStatus" | "supportCaseType" | "task" | "taxAcct" | "taxGroup" | "taxType" | "term" | "timeBill" | "timeSheet" | "topic" | "transferOrder" | "transactionBodyCustomField" | "transactionColumnCustomField" | "unitsType" | "usage" | "vendor" | "vendorCategory" | "vendorBill" | "vendorCredit" | "vendorPayment" | "vendorReturnAuthorization" | "winLossReason" | "workOrder" | "workOrderIssue" | "workOrderCompletion" | "workOrderClose")

export type Type = 'text' | 'integer' | 'checkbox' | 'date' | 'textarea' | 'select' | 'float' | 'richtext' | 'image' | 'period' | 'currency' | 'datetime' | 'percent' | 'currency2' | 'multiselect';

export type JsType = 'string' | 'number' | 'boolean' | 'Date';

export type SearchFieldOperatorText = "contains" | "doesNotContain" | "doesNotStartWith" | "empty" | "hasKeywords" | "is" | "isNot" | "notEmpty" | "startsWith";

export const SearchFieldOperatorTextValues: SearchFieldOperators[] = ["contains", "doesNotContain", "doesNotStartWith", "empty", "hasKeywords", "is", "isNot", "notEmpty", "startsWith"];

export type SearchFieldOperatorNumber = "between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo";

export const SearchFieldOperatorNumberValues: SearchFieldOperators[] = ["between", "empty", "equalTo", "greaterThan", "greaterThanOrEqualTo", "lessThan", "lessThanOrEqualTo", "notBetween", "notEmpty", "notEqualTo", "notGreaterThan", "notGreaterThanOrEqualTo", "notLessThan", "notLessThanOrEqualTo"];

export type SearchFieldOperatorDate = 'after' | 'before' | 'isEmpty' | 'isNotEmpty' | 'notAfter' | 'notBefore' | 'notOnOrAfter' | 'notOnOrBefore' | 'notWithin' | 'on' | 'onOrAfter' | 'onOrBefore' | 'within';

export const SearchFieldOperatorDateValues: SearchFieldOperatorDate[] = ['after', 'before', 'isEmpty', 'isNotEmpty', 'notAfter', 'notBefore', 'notOnOrAfter', 'notOnOrBefore', 'notWithin', 'on', 'onOrAfter', 'onOrBefore', 'within'];

export type SearchFieldOperators = "after" | "before" | "notAfter" | "notBefore" | "notOn" | 'notAllOf' | 'allOf' | "notOnOrAfter" | "notOnOrBefore" | "notWithin" | "on" | "onOrAfter" | "onOrBefore" | 'is' | "within" | "between" | "greaterThan" | "greaterThanOrEqualTo" | "lessThanOrEqualTo" | 'equalTo' | "notGreaterThan" | "notLessThanOrEqualTo" | "anyOf" | "noneOf" | "between" | "greaterThan" | "greaterThanOrEqualTo" | "lessThanOrEqualTo" | "notGreaterThan" | "notLessThanOrEqualTo" | "anyOf" | "noneOf" | "doesNotContain" | "doesNotStartWith" | "hasKeywords" | "isNot" | "between" | "greaterThan" | "greaterThanOrEqualTo" | "lessThanOrEqualTo" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo" | 'isEmpty' | 'isNotEmpty' | 'notEmpty' | 'startsWith' | 'contains' | 'empty' | 'lessThan' | 'notBetween';


export const fieldTypeOperatorMetadata: {
  fieldType: Type;
  jsType: JsType;
  operators: SearchFieldOperators[];
}[] = [
    { fieldType: 'text', jsType: 'string', operators: SearchFieldOperatorTextValues },
    { fieldType: 'integer', jsType: 'number', operators: SearchFieldOperatorNumberValues },
    { fieldType: 'checkbox', jsType: 'boolean', operators: ['equalTo', 'is'] },
    { fieldType: 'date', jsType: 'Date', operators: SearchFieldOperatorDateValues },
    { fieldType: 'textarea', jsType: 'string', operators: SearchFieldOperatorTextValues },
    { fieldType: 'select', jsType: 'string', operators: ["anyOf", "noneOf"] },
    { fieldType: 'float', jsType: 'number', operators: SearchFieldOperatorNumberValues },
    { fieldType: 'richtext', jsType: 'string', operators: SearchFieldOperatorTextValues },
    { fieldType: 'image', jsType: 'string', operators: ["anyOf", "noneOf"] },
    { fieldType: 'currency', jsType: 'number', operators: SearchFieldOperatorNumberValues },
    { fieldType: 'datetime', jsType: 'Date', operators: SearchFieldOperatorDateValues },
    { fieldType: 'period', jsType: 'Date', operators: SearchFieldOperatorDateValues },
    { fieldType: 'percent', jsType: 'number', operators: SearchFieldOperatorNumberValues },
    { fieldType: 'currency2', jsType: 'number', operators: SearchFieldOperatorNumberValues },
    { fieldType: 'multiselect', jsType: 'number', operators: ['allOf', 'anyOf', 'noneOf', 'notAllOf'] },
  ];
