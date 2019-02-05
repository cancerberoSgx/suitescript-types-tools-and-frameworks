define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Account (account) Search Join values so they can be loaded dynamically. */
    exports.accountSearchJoinValues = [];
    /** Accounting Book (accountingbook) Search Join values so they can be loaded dynamically. */
    exports.accountingbookSearchJoinValues = [];
    /** Accounting Context (accountingcontext) Search Join values so they can be loaded dynamically. */
    exports.accountingcontextSearchJoinValues = [];
    /** Accounting Period (accountingperiod) Search Join values so they can be loaded dynamically. */
    exports.accountingperiodSearchJoinValues = [];
    /** Accounting Transaction (accountingtransaction) Search Join values so they can be loaded dynamically. */
    exports.accountingtransactionSearchJoinValues = [
        { id: 'account', description: 'Account', actualName: 'Account' },
        { id: 'amortizationschedule', description: 'Amortization Schedule', actualName: 'Amortization Schedules' },
        { id: 'transaction', description: 'Transaction', actualName: 'Transaction' }
    ];
    /** Activity (activity) Search Join values so they can be loaded dynamically. */
    exports.activitySearchJoinValues = [
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Address (address) Search Join values so they can be loaded dynamically. */
    exports.addressSearchJoinValues = [];
    /** Advanced Intercompany Journal Entry (advintercompanyjournalentry) Search Join values so they can be loaded dynamically. */
    exports.advintercompanyjournalentrySearchJoinValues = [];
    /** Allocation Schedule (allocationschedule) Search Join values so they can be loaded dynamically. */
    exports.allocationscheduleSearchJoinValues = [];
    /** Amortization Schedule (amortizationschedule) Search Join values so they can be loaded dynamically. */
    exports.amortizationscheduleSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' }
    ];
    /** Amortization Template (amortizationtemplate) Search Join values so they can be loaded dynamically. */
    exports.amortizationtemplateSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Assembly Build (assemblybuild) Search Join values so they can be loaded dynamically. */
    exports.assemblybuildSearchJoinValues = [];
    /** Build/Assembly Item (assemblyitem) Search Join values so they can be loaded dynamically. */
    exports.assemblyitemSearchJoinValues = [];
    /** Assembly Item BOM (assemblyitembom) Search Join values so they can be loaded dynamically. */
    exports.assemblyitembomSearchJoinValues = [];
    /** Assembly Unbuild (assemblyunbuild) Search Join values so they can be loaded dynamically. */
    exports.assemblyunbuildSearchJoinValues = [];
    /** Billing Account (billingaccount) Search Join values so they can be loaded dynamically. */
    exports.billingaccountSearchJoinValues = [];
    /** Billing Class (billingclass) Search Join values so they can be loaded dynamically. */
    exports.billingclassSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Billing Rate Card (billingratecard) Search Join values so they can be loaded dynamically. */
    exports.billingratecardSearchJoinValues = [
        { id: 'billingclass', description: 'Billing Class', actualName: 'Billing Class' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' }
    ];
    /** Revenue Recognition Event (billingrevenueevent) Search Join values so they can be loaded dynamically. */
    exports.billingrevenueeventSearchJoinValues = [
        { id: 'billingrevenueeventtype', description: 'Revenue Recognition Event Type', actualName: 'Revenue Recognition Event Type' },
        { id: 'subscriptionline', description: 'Subscription Line', actualName: '{Subscription} Line' },
        { id: 'transaction', description: 'Transaction', actualName: 'Transaction' }
    ];
    /** Billing Schedule (billingschedule) Search Join values so they can be loaded dynamically. */
    exports.billingscheduleSearchJoinValues = [];
    /** Bin (bin) Search Join values so they can be loaded dynamically. */
    exports.binSearchJoinValues = [];
    /** Bin Transfer (bintransfer) Search Join values so they can be loaded dynamically. */
    exports.bintransferSearchJoinValues = [];
    /** Bin Worksheet (binworksheet) Search Join values so they can be loaded dynamically. */
    exports.binworksheetSearchJoinValues = [];
    /** Blanket Purchase Order (blanketpurchaseorder) Search Join values so they can be loaded dynamically. */
    exports.blanketpurchaseorderSearchJoinValues = [];
    /** Bill of Materials (bom) Search Join values so they can be loaded dynamically. */
    exports.bomSearchJoinValues = [
        { id: 'assemblyitem', description: 'Assembly Item', actualName: 'Assembly Item Bill of Materials' },
        { id: 'revision', description: 'Revision', actualName: 'Bill of Materials Revision' }
    ];
    /** Bill of Materials Revision (bomrevision) Search Join values so they can be loaded dynamically. */
    exports.bomrevisionSearchJoinValues = [
        { id: 'billofmaterial', description: 'Bill of Material', actualName: 'Bill of Materials' },
        { id: 'component', description: 'Component', actualName: 'Bill of Materials Revision Component' }
    ];
    /** Take Ownership (bulkownershiptransfer) Search Join values so they can be loaded dynamically. */
    exports.bulkownershiptransferSearchJoinValues = [];
    /** Bundle Installation Script (bundleinstallationscript) Search Join values so they can be loaded dynamically. */
    exports.bundleinstallationscriptSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Event (calendarevent) Search Join values so they can be loaded dynamically. */
    exports.calendareventSearchJoinValues = [
        { id: 'attendeecontact', description: 'Attendee (Contact)', actualName: 'Contact' },
        { id: 'attendeecustomer', description: 'Attendee (Customer)', actualName: 'Customer' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'time', description: 'Time', actualName: 'Time' }
    ];
    /** Campaign (campaign) Search Join values so they can be loaded dynamically. */
    exports.campaignSearchJoinValues = [
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' }
    ];
    /** Campaign Response (campaignresponse) Search Join values so they can be loaded dynamically. */
    exports.campaignresponseSearchJoinValues = [];
    /** Campaign Template (campaigntemplate) Search Join values so they can be loaded dynamically. */
    exports.campaigntemplateSearchJoinValues = [];
    /** Cash Refund (cashrefund) Search Join values so they can be loaded dynamically. */
    exports.cashrefundSearchJoinValues = [];
    /** Cash Sale (cashsale) Search Join values so they can be loaded dynamically. */
    exports.cashsaleSearchJoinValues = [];
    /** Charge (charge) Search Join values so they can be loaded dynamically. */
    exports.chargeSearchJoinValues = [
        { id: 'invoice', description: 'Invoice', actualName: 'Transaction' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'salesorder', description: 'Sales Order', actualName: 'Transaction' },
        { id: 'transaction', description: 'Transaction', actualName: 'Transaction' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Charge Rule (chargerule) Search Join values so they can be loaded dynamically. */
    exports.chargeruleSearchJoinValues = [
        { id: 'unitstype', description: 'Units Type', actualName: 'Units Type' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Check (check) Search Join values so they can be loaded dynamically. */
    exports.checkSearchJoinValues = [];
    /** Class (classification) Search Join values so they can be loaded dynamically. */
    exports.classificationSearchJoinValues = [];
    /** Client Script (clientscript) Search Join values so they can be loaded dynamically. */
    exports.clientscriptSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** CMS Content (cmscontent) Search Join values so they can be loaded dynamically. */
    exports.cmscontentSearchJoinValues = [];
    /** CMS Content Type (cmscontenttype) Search Join values so they can be loaded dynamically. */
    exports.cmscontenttypeSearchJoinValues = [];
    /** Commerce Category (commercecategory) Search Join values so they can be loaded dynamically. */
    exports.commercecategorySearchJoinValues = [];
    /** Competitor (competitor) Search Join values so they can be loaded dynamically. */
    exports.competitorSearchJoinValues = [];
    /** Consolidated Exchange Rate (consolidatedexchangerate) Search Join values so they can be loaded dynamically. */
    exports.consolidatedexchangerateSearchJoinValues = [];
    /** Contact (contact) Search Join values so they can be loaded dynamically. */
    exports.contactSearchJoinValues = [
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'customerprimary', description: 'Customer (Primary)', actualName: 'Customer' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'jobprimary', description: 'Job (Primary)', actualName: 'Job' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'parentcustomer', description: 'Parent Customer', actualName: 'Customer' },
        { id: 'parentjob', description: 'Parent Job', actualName: 'Job' },
        { id: 'parentpartner', description: 'Parent Partner', actualName: 'Partner' },
        { id: 'parentvendor', description: 'Parent Vendor', actualName: 'Vendor' },
        { id: 'partner', description: 'Partner', actualName: 'Partner' },
        { id: 'partnerprimary', description: 'Partner (Primary)', actualName: 'Partner' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' },
        { id: 'vendorprimary', description: 'Vendor (Primary)', actualName: 'Vendor' }
    ];
    /** Contact Category (contactcategory) Search Join values so they can be loaded dynamically. */
    exports.contactcategorySearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Contact Role (contactrole) Search Join values so they can be loaded dynamically. */
    exports.contactroleSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Cost Category (costcategory) Search Join values so they can be loaded dynamically. */
    exports.costcategorySearchJoinValues = [
        { id: 'account', description: 'Account', actualName: 'Account' },
        { id: 'transaction', description: 'Transaction', actualName: 'Transaction' }
    ];
    /** Coupon Code (couponcode) Search Join values so they can be loaded dynamically. */
    exports.couponcodeSearchJoinValues = [];
    /** Credit Card Charge (creditcardcharge) Search Join values so they can be loaded dynamically. */
    exports.creditcardchargeSearchJoinValues = [];
    /** Credit Card Refund (creditcardrefund) Search Join values so they can be loaded dynamically. */
    exports.creditcardrefundSearchJoinValues = [];
    /** Credit Memo (creditmemo) Search Join values so they can be loaded dynamically. */
    exports.creditmemoSearchJoinValues = [];
    /** Currency (currency) Search Join values so they can be loaded dynamically. */
    exports.currencySearchJoinValues = [];
    /** Customer (customer) Search Join values so they can be loaded dynamically. */
    exports.customerSearchJoinValues = [
        { id: 'billingschedule', description: 'Billing Schedule', actualName: 'Billing Schedule' },
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'leadsource', description: 'Lead Source', actualName: 'Campaign' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'msesubsidiary', description: 'Subsidiary', actualName: 'Subsidiary' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'parentcustomer', description: 'Parent Customer', actualName: 'Customer' },
        { id: 'partner', description: 'Partner', actualName: 'Partner' },
        { id: 'pricing', description: 'Pricing', actualName: 'Pricing' },
        { id: 'salesrep', description: 'Sales Rep', actualName: 'Employee' },
        { id: 'subcustomer', description: 'Sub Customer', actualName: 'Customer' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'toplevelparent', description: 'Top Level Parent', actualName: 'Customer' },
        { id: 'websitecategory', description: 'Web Site Category', actualName: 'Presentation Category' }
    ];
    /** Customer Category (customercategory) Search Join values so they can be loaded dynamically. */
    exports.customercategorySearchJoinValues = [];
    /** Customer Deposit (customerdeposit) Search Join values so they can be loaded dynamically. */
    exports.customerdepositSearchJoinValues = [];
    /** Customer Message (customermessage) Search Join values so they can be loaded dynamically. */
    exports.customermessageSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Customer Payment (customerpayment) Search Join values so they can be loaded dynamically. */
    exports.customerpaymentSearchJoinValues = [];
    /** Customer Payment Authorization (customerpaymentauthorization) Search Join values so they can be loaded dynamically. */
    exports.customerpaymentauthorizationSearchJoinValues = [];
    /** Customer Refund (customerrefund) Search Join values so they can be loaded dynamically. */
    exports.customerrefundSearchJoinValues = [];
    /** Customer Status (customerstatus) Search Join values so they can be loaded dynamically. */
    exports.customerstatusSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Customer-Subsidiary Relationship (customersubsidiaryrelationship) Search Join values so they can be loaded dynamically. */
    exports.customersubsidiaryrelationshipSearchJoinValues = [];
    /** Custom Record (customrecord) Search Join values so they can be loaded dynamically. */
    exports.customrecordSearchJoinValues = [
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'owner', description: 'Owner', actualName: 'Employee' },
        { id: 'parent', description: 'Parent', actualName: 'Custom' }
    ];
    /** Deleted Record (deletedrecord) Search Join values so they can be loaded dynamically. */
    exports.deletedrecordSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Department (department) Search Join values so they can be loaded dynamically. */
    exports.departmentSearchJoinValues = [];
    /** Deposit (deposit) Search Join values so they can be loaded dynamically. */
    exports.depositSearchJoinValues = [];
    /** Deposit Application (depositapplication) Search Join values so they can be loaded dynamically. */
    exports.depositapplicationSearchJoinValues = [];
    /** Description Item (descriptionitem) Search Join values so they can be loaded dynamically. */
    exports.descriptionitemSearchJoinValues = [];
    /** Discount Item (discountitem) Search Join values so they can be loaded dynamically. */
    exports.discountitemSearchJoinValues = [];
    /** Download Item (downloaditem) Search Join values so they can be loaded dynamically. */
    exports.downloaditemSearchJoinValues = [];
    /** Email Template (emailtemplate) Search Join values so they can be loaded dynamically. */
    exports.emailtemplateSearchJoinValues = [];
    /** Employee (employee) Search Join values so they can be loaded dynamically. */
    exports.employeeSearchJoinValues = [
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'department', description: 'Department', actualName: 'Department' },
        { id: 'location', description: 'Location', actualName: 'Location' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'subsidiary', description: 'Subsidiary', actualName: 'Subsidiary' }
    ];
    /** Entity (entity) Search Join values so they can be loaded dynamically. */
    exports.entitySearchJoinValues = [
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Entity Account Mapping (entityaccountmapping) Search Join values so they can be loaded dynamically. */
    exports.entityaccountmappingSearchJoinValues = [
        { id: 'accountingbook', description: 'Accounting Book', actualName: 'Accounting Book' },
        { id: 'department', description: 'Department', actualName: 'Department' },
        { id: 'destinationaccount', description: 'Destination Account', actualName: 'Account' },
        { id: 'location', description: 'Location', actualName: 'Location' },
        { id: 'sourceaccount', description: 'Source Account', actualName: 'Account' },
        { id: 'subsidiary', description: 'Subsidiary', actualName: 'Subsidiary' }
    ];
    /** Entity Group (entitygroup) Search Join values so they can be loaded dynamically. */
    exports.entitygroupSearchJoinValues = [];
    /** Estimate (estimate) Search Join values so they can be loaded dynamically. */
    exports.estimateSearchJoinValues = [];
    /** Expense Category (expensecategory) Search Join values so they can be loaded dynamically. */
    exports.expensecategorySearchJoinValues = [];
    /** Expense Report (expensereport) Search Join values so they can be loaded dynamically. */
    exports.expensereportSearchJoinValues = [];
    /** Fair Value Price (fairvalueprice) Search Join values so they can be loaded dynamically. */
    exports.fairvaluepriceSearchJoinValues = [];
    /** File (file) Search Join values so they can be loaded dynamically. */
    exports.fileSearchJoinValues = [
        { id: 'shopper', description: 'Shopper', actualName: 'Customer' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Fixed Amount Project Revenue Rule (fixedamountprojectrevenuerule) Search Join values so they can be loaded dynamically. */
    exports.fixedamountprojectrevenueruleSearchJoinValues = [
        { id: 'project', description: 'Project', actualName: 'Job' },
        { id: 'serviceitem', description: 'Service Item', actualName: 'Item' }
    ];
    /** Folder (folder) Search Join values so they can be loaded dynamically. */
    exports.folderSearchJoinValues = [];
    /** Fulfillment Request (fulfillmentrequest) Search Join values so they can be loaded dynamically. */
    exports.fulfillmentrequestSearchJoinValues = [];
    /** Generic Resource (genericresource) Search Join values so they can be loaded dynamically. */
    exports.genericresourceSearchJoinValues = [];
    /** Gift Certificate (giftcertificate) Search Join values so they can be loaded dynamically. */
    exports.giftcertificateSearchJoinValues = [];
    /** Gift Certificate Item (giftcertificateitem) Search Join values so they can be loaded dynamically. */
    exports.giftcertificateitemSearchJoinValues = [];
    /** Global Account Mapping (globalaccountmapping) Search Join values so they can be loaded dynamically. */
    exports.globalaccountmappingSearchJoinValues = [
        { id: 'accountingbook', description: 'Accounting Book', actualName: 'Accounting Book' },
        { id: 'department', description: 'Department', actualName: 'Department' },
        { id: 'destinationaccount', description: 'Destination Account', actualName: 'Account' },
        { id: 'location', description: 'Location', actualName: 'Location' },
        { id: 'sourceaccount', description: 'Source Account', actualName: 'Account' },
        { id: 'subsidiary', description: 'Subsidiary', actualName: 'Subsidiary' }
    ];
    /** Global Inventory Relationship (globalinventoryrelationship) Search Join values so they can be loaded dynamically. */
    exports.globalinventoryrelationshipSearchJoinValues = [
        { id: 'inventorysubsidiary', description: 'Inventory Subsidiary', actualName: 'Subsidiary' },
        { id: 'location', description: 'Inventory Location', actualName: 'Location' },
        { id: 'originatingsubsidiary', description: 'Originating Subsidiary', actualName: 'Subsidiary' }
    ];
    /** Inbound Shipment (inboundshipment) Search Join values so they can be loaded dynamically. */
    exports.inboundshipmentSearchJoinValues = [
        { id: 'item', description: 'Item', actualName: 'Item' },
        { id: 'itemreceipt', description: 'Item Receipt', actualName: 'Transaction' },
        { id: 'purchaseorder', description: 'Purchase Order', actualName: 'Transaction' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' }
    ];
    /** Intercompany Allocation Schedule (intercompallocationschedule) Search Join values so they can be loaded dynamically. */
    exports.intercompallocationscheduleSearchJoinValues = [];
    /** Intercompany Journal Entry (intercompanyjournalentry) Search Join values so they can be loaded dynamically. */
    exports.intercompanyjournalentrySearchJoinValues = [];
    /** Intercompany Transfer Order (intercompanytransferorder) Search Join values so they can be loaded dynamically. */
    exports.intercompanytransferorderSearchJoinValues = [];
    /** Inventory Adjustment (inventoryadjustment) Search Join values so they can be loaded dynamically. */
    exports.inventoryadjustmentSearchJoinValues = [];
    /** Inventory Cost Revaluation (inventorycostrevaluation) Search Join values so they can be loaded dynamically. */
    exports.inventorycostrevaluationSearchJoinValues = [
        { id: 'billingaddress', description: 'Billing Address', actualName: 'Address' }
    ];
    /** Inventory Count (inventorycount) Search Join values so they can be loaded dynamically. */
    exports.inventorycountSearchJoinValues = [];
    /** Inventory Detail (inventorydetail) Search Join values so they can be loaded dynamically. */
    exports.inventorydetailSearchJoinValues = [
        { id: 'inventorynumber', description: 'Inventory Number', actualName: 'Inventory Numbers' }
    ];
    /** Inventory Part (inventoryitem) Search Join values so they can be loaded dynamically. */
    exports.inventoryitemSearchJoinValues = [];
    /** Inventory Number (inventorynumber) Search Join values so they can be loaded dynamically. */
    exports.inventorynumberSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Inventory Number Bin (inventorynumberbin) Search Join values so they can be loaded dynamically. */
    exports.inventorynumberbinSearchJoinValues = [];
    /** Inventory Status (inventorystatus) Search Join values so they can be loaded dynamically. */
    exports.inventorystatusSearchJoinValues = [];
    /** Inventory Status Change (inventorystatuschange) Search Join values so they can be loaded dynamically. */
    exports.inventorystatuschangeSearchJoinValues = [];
    /** Inventory Transfer (inventorytransfer) Search Join values so they can be loaded dynamically. */
    exports.inventorytransferSearchJoinValues = [];
    /** Invoice (invoice) Search Join values so they can be loaded dynamically. */
    exports.invoiceSearchJoinValues = [];
    /** Issue (issue) Search Join values so they can be loaded dynamically. */
    exports.issueSearchJoinValues = [
        { id: 'employee', description: 'Employee', actualName: 'Employee' }
    ];
    /** Product (issueproduct) Search Join values so they can be loaded dynamically. */
    exports.issueproductSearchJoinValues = [];
    /** Version (issueproductversion) Search Join values so they can be loaded dynamically. */
    exports.issueproductversionSearchJoinValues = [];
    /** Item (item) Search Join values so they can be loaded dynamically. */
    exports.itemSearchJoinValues = [
        { id: 'assemblyitembillofmaterials', description: 'Assembly Item Bill of Materials', actualName: 'Assembly Item Bill of Materials' },
        { id: 'binonhand', description: 'Bin On Hand', actualName: 'Item Bin Number' },
        { id: 'effectiverevision', description: 'Effective Revision', actualName: 'Item Revision' },
        { id: 'inventorydetail', description: 'Inventory Detail', actualName: 'Inventory Detail' },
        { id: 'inventorylocation', description: 'Inventory Location', actualName: 'Location' },
        { id: 'inventorynumber', description: 'Inventory Number', actualName: 'Inventory Numbers' },
        { id: 'inventorynumberbinonhand', description: 'Inventory Number/Bin on Hand', actualName: 'Inventory Number Bin' },
        { id: 'obsoleterevision', description: 'Obsolete Revision', actualName: 'Item Revision' },
        { id: 'preferredlocation', description: 'Preferred Location', actualName: 'Location' },
        { id: 'preferredvendor', description: 'Preferred Vendor', actualName: 'Vendor' },
        { id: 'pricing', description: 'Pricing', actualName: 'Pricing' },
        { id: 'shopper', description: 'Shopper', actualName: 'Customer' },
        { id: 'user', description: 'User', actualName: 'Employee' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' }
    ];
    /** Item Account Mapping (itemaccountmapping) Search Join values so they can be loaded dynamically. */
    exports.itemaccountmappingSearchJoinValues = [
        { id: 'accountingbook', description: 'Accounting Book', actualName: 'Accounting Book' },
        { id: 'department', description: 'Department', actualName: 'Department' },
        { id: 'destinationaccount', description: 'Destination Account', actualName: 'Account' },
        { id: 'location', description: 'Location', actualName: 'Location' },
        { id: 'sourceaccount', description: 'Source Account', actualName: 'Account' },
        { id: 'subsidiary', description: 'Subsidiary', actualName: 'Subsidiary' }
    ];
    /** Item Bin Number (itembinnumber) Search Join values so they can be loaded dynamically. */
    exports.itembinnumberSearchJoinValues = [];
    /** Item Demand Plan (itemdemandplan) Search Join values so they can be loaded dynamically. */
    exports.itemdemandplanSearchJoinValues = [
        { id: 'location', description: 'Location', actualName: 'Location' }
    ];
    /** Item Fulfillment (itemfulfillment) Search Join values so they can be loaded dynamically. */
    exports.itemfulfillmentSearchJoinValues = [];
    /** Item Group (itemgroup) Search Join values so they can be loaded dynamically. */
    exports.itemgroupSearchJoinValues = [];
    /** Item Location Configuration (itemlocationconfiguration) Search Join values so they can be loaded dynamically. */
    exports.itemlocationconfigurationSearchJoinValues = [];
    /** Item Receipt (itemreceipt) Search Join values so they can be loaded dynamically. */
    exports.itemreceiptSearchJoinValues = [];
    /** Item Revision (itemrevision) Search Join values so they can be loaded dynamically. */
    exports.itemrevisionSearchJoinValues = [];
    /** Item Supply Plan (itemsupplyplan) Search Join values so they can be loaded dynamically. */
    exports.itemsupplyplanSearchJoinValues = [
        { id: 'location', description: 'Location', actualName: 'Location' }
    ];
    /** Project (job) Search Join values so they can be loaded dynamically. */
    exports.jobSearchJoinValues = [
        { id: 'billingschedule', description: 'Billing Schedule', actualName: 'Billing Schedule' },
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'projecttask', description: 'Project Task', actualName: 'ProjectTask' },
        { id: 'task', description: 'Task', actualName: 'Task' }
    ];
    /** Job Status (jobstatus) Search Join values so they can be loaded dynamically. */
    exports.jobstatusSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Job Type (jobtype) Search Join values so they can be loaded dynamically. */
    exports.jobtypeSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Journal Entry (journalentry) Search Join values so they can be loaded dynamically. */
    exports.journalentrySearchJoinValues = [];
    /** Kit Item (kititem) Search Join values so they can be loaded dynamically. */
    exports.kititemSearchJoinValues = [];
    /** Labor Based Project Revenue Rule (laborbasedprojectrevenuerule) Search Join values so they can be loaded dynamically. */
    exports.laborbasedprojectrevenueruleSearchJoinValues = [
        { id: 'billingratecard', description: 'Billing Rate Card', actualName: 'Billing Rate Card' },
        { id: 'project', description: 'Project', actualName: 'Job' },
        { id: 'serviceitem', description: 'Service Item', actualName: 'Item' }
    ];
    /** Landed Cost (landedcost) Search Join values so they can be loaded dynamically. */
    exports.landedcostSearchJoinValues = [];
    /** Lead (lead) Search Join values so they can be loaded dynamically. */
    exports.leadSearchJoinValues = [
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'leadsource', description: 'Lead Source', actualName: 'Campaign' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'msesubsidiary', description: 'Subsidiary', actualName: 'Subsidiary' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'parentcustomer', description: 'Parent Customer', actualName: 'Customer' },
        { id: 'partner', description: 'Partner', actualName: 'Partner' },
        { id: 'pricing', description: 'Pricing', actualName: 'Pricing' },
        { id: 'salesrep', description: 'Sales Rep', actualName: 'Employee' },
        { id: 'subcustomer', description: 'Sub Customer', actualName: 'Customer' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'toplevelparent', description: 'Top Level Parent', actualName: 'Customer' },
        { id: 'websitecategory', description: 'Web Site Category', actualName: 'Presentation Category' }
    ];
    /** Location (location) Search Join values so they can be loaded dynamically. */
    exports.locationSearchJoinValues = [
        { id: 'address', description: 'Address', actualName: 'Address' },
        { id: 'returnaddress', description: 'Return Address', actualName: 'Address' }
    ];
    /** Lot Numbered Build/Assembly Item (lotnumberedassemblyitem) Search Join values so they can be loaded dynamically. */
    exports.lotnumberedassemblyitemSearchJoinValues = [];
    /** Lot Numbered Inventory Item (lotnumberedinventoryitem) Search Join values so they can be loaded dynamically. */
    exports.lotnumberedinventoryitemSearchJoinValues = [];
    /** Manufacturing Cost Template (manufacturingcosttemplate) Search Join values so they can be loaded dynamically. */
    exports.manufacturingcosttemplateSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Manufacturing Operation Task (manufacturingoperationtask) Search Join values so they can be loaded dynamically. */
    exports.manufacturingoperationtaskSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Manufacturing Routing (manufacturingrouting) Search Join values so they can be loaded dynamically. */
    exports.manufacturingroutingSearchJoinValues = [
        { id: 'location', description: 'Location', actualName: 'Location' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Map/Reduce Script (mapreducescript) Search Join values so they can be loaded dynamically. */
    exports.mapreducescriptSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Markup Item (markupitem) Search Join values so they can be loaded dynamically. */
    exports.markupitemSearchJoinValues = [];
    /** Massupdate Script (massupdatescript) Search Join values so they can be loaded dynamically. */
    exports.massupdatescriptSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Merchandise Hierarchy Level (merchandisehierarchylevel) Search Join values so they can be loaded dynamically. */
    exports.merchandisehierarchylevelSearchJoinValues = [];
    /** Merchandise Hierarchy Node (merchandisehierarchynode) Search Join values so they can be loaded dynamically. */
    exports.merchandisehierarchynodeSearchJoinValues = [];
    /** Merchandise Hierarchy Version (merchandisehierarchyversion) Search Join values so they can be loaded dynamically. */
    exports.merchandisehierarchyversionSearchJoinValues = [];
    /** Message (message) Search Join values so they can be loaded dynamically. */
    exports.messageSearchJoinValues = [
        { id: 'campaign', description: 'Campaign', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'partner', description: 'Partner', actualName: 'Partner' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' }
    ];
    /** Manufacturing Planned Time (mfgplannedtime) Search Join values so they can be loaded dynamically. */
    exports.mfgplannedtimeSearchJoinValues = [
        { id: 'manufacturingworkcenter', description: 'Manufacturing Work Center', actualName: 'Group' },
        { id: 'operationtask', description: 'Operation Task', actualName: 'Manufacturing Operation Task' }
    ];
    /** MSE Subsidiary (msesubsidiary) Search Join values so they can be loaded dynamically. */
    exports.msesubsidiarySearchJoinValues = [];
    /** Nexus (nexus) Search Join values so they can be loaded dynamically. */
    exports.nexusSearchJoinValues = [];
    /** Non-Inventory Part (noninventoryitem) Search Join values so they can be loaded dynamically. */
    exports.noninventoryitemSearchJoinValues = [];
    /** Note (note) Search Join values so they can be loaded dynamically. */
    exports.noteSearchJoinValues = [
        { id: 'author', description: 'Author', actualName: 'Employee' },
        { id: 'campaign', description: 'Campaign', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'issue', description: 'Issue', actualName: 'Issue' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'partner', description: 'Partner', actualName: 'Partner' },
        { id: 'solution', description: 'Solution', actualName: 'Solution' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' }
    ];
    /** Note Type (notetype) Search Join values so they can be loaded dynamically. */
    exports.notetypeSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Opportunity (opportunity) Search Join values so they can be loaded dynamically. */
    exports.opportunitySearchJoinValues = [
        { id: 'competitor', description: 'Competitor', actualName: 'Competitor' },
        { id: 'competitorwinner', description: 'Competitor (Winner)', actualName: 'Competitor' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'decisionmaker', description: 'Decision Maker', actualName: 'Contact' },
        { id: 'leadsource', description: 'Lead Source', actualName: 'Campaign' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'partner', description: 'Partner', actualName: 'Partner' },
        { id: 'salesrep', description: 'Sales Rep', actualName: 'Employee' },
        { id: 'task', description: 'Task', actualName: 'Task' }
    ];
    /** Order Schedule (orderschedule) Search Join values so they can be loaded dynamically. */
    exports.orderscheduleSearchJoinValues = [];
    /** Originating Lead (originatinglead) Search Join values so they can be loaded dynamically. */
    exports.originatingleadSearchJoinValues = [
        { id: 'msesubsidiary', description: 'Subsidiary', actualName: 'Subsidiary' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'pricing', description: 'Pricing', actualName: 'Pricing' }
    ];
    /** Other Charge Item (otherchargeitem) Search Join values so they can be loaded dynamically. */
    exports.otherchargeitemSearchJoinValues = [];
    /** Other Name (othername) Search Join values so they can be loaded dynamically. */
    exports.othernameSearchJoinValues = [
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' }
    ];
    /** Other Name Category (othernamecategory) Search Join values so they can be loaded dynamically. */
    exports.othernamecategorySearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Partner (partner) Search Join values so they can be loaded dynamically. */
    exports.partnerSearchJoinValues = [
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' }
    ];
    /** Partner Category (partnercategory) Search Join values so they can be loaded dynamically. */
    exports.partnercategorySearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Paycheck (paycheck) Search Join values so they can be loaded dynamically. */
    exports.paycheckSearchJoinValues = [];
    /** Paycheck Journal (paycheckjournal) Search Join values so they can be loaded dynamically. */
    exports.paycheckjournalSearchJoinValues = [];
    /** Payment Item (paymentitem) Search Join values so they can be loaded dynamically. */
    exports.paymentitemSearchJoinValues = [];
    /** Payment Method (paymentmethod) Search Join values so they can be loaded dynamically. */
    exports.paymentmethodSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Payroll Batch (payrollbatch) Search Join values so they can be loaded dynamically. */
    exports.payrollbatchSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Payroll Item (payrollitem) Search Join values so they can be loaded dynamically. */
    exports.payrollitemSearchJoinValues = [];
    /** Percent Complete Project Revenue Rule (pctcompleteprojectrevenuerule) Search Join values so they can be loaded dynamically. */
    exports.pctcompleteprojectrevenueruleSearchJoinValues = [
        { id: 'project', description: 'Project', actualName: 'Job' },
        { id: 'serviceitem', description: 'Service Item', actualName: 'Item' }
    ];
    /** Period End Journal (periodendjournal) Search Join values so they can be loaded dynamically. */
    exports.periodendjournalSearchJoinValues = [];
    /** Phone Call (phonecall) Search Join values so they can be loaded dynamically. */
    exports.phonecallSearchJoinValues = [
        { id: 'companycustomer', description: 'Company (Customer)', actualName: 'Customer' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' }
    ];
    /** Portlet (portlet) Search Join values so they can be loaded dynamically. */
    exports.portletSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Price Book (pricebook) Search Join values so they can be loaded dynamically. */
    exports.pricebookSearchJoinValues = [];
    /** Price Level (pricelevel) Search Join values so they can be loaded dynamically. */
    exports.pricelevelSearchJoinValues = [];
    /** Price Plan (priceplan) Search Join values so they can be loaded dynamically. */
    exports.priceplanSearchJoinValues = [];
    /** Pricing (pricing) Search Join values so they can be loaded dynamically. */
    exports.pricingSearchJoinValues = [];
    /** Pricing Group (pricinggroup) Search Join values so they can be loaded dynamically. */
    exports.pricinggroupSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Project Expense Type (projectexpensetype) Search Join values so they can be loaded dynamically. */
    exports.projectexpensetypeSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Project Task (projecttask) Search Join values so they can be loaded dynamically. */
    exports.projecttaskSearchJoinValues = [
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'predecessor', description: 'Predecessor', actualName: 'ProjectTask' },
        { id: 'projecttaskassignment', description: 'Project Task Assignment', actualName: 'Project Task Assignment' },
        { id: 'successor', description: 'Successor', actualName: 'ProjectTask' },
        { id: 'transaction', description: 'Transaction', actualName: 'Transaction' }
    ];
    /** Project Task Assignment (projecttaskassignment) Search Join values so they can be loaded dynamically. */
    exports.projecttaskassignmentSearchJoinValues = [];
    /** Project Template (projecttemplate) Search Join values so they can be loaded dynamically. */
    exports.projecttemplateSearchJoinValues = [
        { id: 'genericresource', description: 'Generic Resource', actualName: 'Generic Resource' },
        { id: 'projecttask', description: 'Project Task', actualName: 'Project Task' },
        { id: 'rsrcallocation', description: 'Resource Allocation', actualName: 'Resource Allocation' }
    ];
    /** Promotion (promotioncode) Search Join values so they can be loaded dynamically. */
    exports.promotioncodeSearchJoinValues = [];
    /** Prospect (prospect) Search Join values so they can be loaded dynamically. */
    exports.prospectSearchJoinValues = [
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'leadsource', description: 'Lead Source', actualName: 'Campaign' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'msesubsidiary', description: 'Subsidiary', actualName: 'Subsidiary' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' },
        { id: 'parentcustomer', description: 'Parent Customer', actualName: 'Customer' },
        { id: 'partner', description: 'Partner', actualName: 'Partner' },
        { id: 'pricing', description: 'Pricing', actualName: 'Pricing' },
        { id: 'salesrep', description: 'Sales Rep', actualName: 'Employee' },
        { id: 'subcustomer', description: 'Sub Customer', actualName: 'Customer' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'toplevelparent', description: 'Top Level Parent', actualName: 'Customer' },
        { id: 'websitecategory', description: 'Web Site Category', actualName: 'Presentation Category' }
    ];
    /** Purchase Contract (purchasecontract) Search Join values so they can be loaded dynamically. */
    exports.purchasecontractSearchJoinValues = [];
    /** Purchase Order (purchaseorder) Search Join values so they can be loaded dynamically. */
    exports.purchaseorderSearchJoinValues = [];
    /** Requisition (purchaserequisition) Search Join values so they can be loaded dynamically. */
    exports.purchaserequisitionSearchJoinValues = [];
    /** Reallocate Items (reallocateitem) Search Join values so they can be loaded dynamically. */
    exports.reallocateitemSearchJoinValues = [];
    /** Receive Inbound Shipment (receiveinboundshipment) Search Join values so they can be loaded dynamically. */
    exports.receiveinboundshipmentSearchJoinValues = [];
    /** Resource Allocation (resourceallocation) Search Join values so they can be loaded dynamically. */
    exports.resourceallocationSearchJoinValues = [
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'employee', description: 'Resource - Employee', actualName: 'Employee' },
        { id: 'job', description: 'Project', actualName: 'Job' },
        { id: 'user', description: 'User', actualName: 'Employee' },
        { id: 'vendor', description: 'Resource - Vendor', actualName: 'Vendor' }
    ];
    /** Restlet (restlet) Search Join values so they can be loaded dynamically. */
    exports.restletSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Return Authorization (returnauthorization) Search Join values so they can be loaded dynamically. */
    exports.returnauthorizationSearchJoinValues = [];
    /** Revenue Arrangement (revenuearrangement) Search Join values so they can be loaded dynamically. */
    exports.revenuearrangementSearchJoinValues = [];
    /** Revenue Commitment (revenuecommitment) Search Join values so they can be loaded dynamically. */
    exports.revenuecommitmentSearchJoinValues = [];
    /** Revenue Commitment Reversal (revenuecommitmentreversal) Search Join values so they can be loaded dynamically. */
    exports.revenuecommitmentreversalSearchJoinValues = [];
    /** Revenue Recognition Plan (revenueplan) Search Join values so they can be loaded dynamically. */
    exports.revenueplanSearchJoinValues = [];
    /** Revenue Recognition Schedule (revrecschedule) Search Join values so they can be loaded dynamically. */
    exports.revrecscheduleSearchJoinValues = [
        { id: 'appliedtotransaction', description: 'Applied To Transaction', actualName: 'Transaction' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'item', description: 'Item', actualName: 'Item' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Revenue Recognition Template (revrectemplate) Search Join values so they can be loaded dynamically. */
    exports.revrectemplateSearchJoinValues = [];
    /** Role (role) Search Join values so they can be loaded dynamically. */
    exports.roleSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Sales Order (salesorder) Search Join values so they can be loaded dynamically. */
    exports.salesorderSearchJoinValues = [];
    /** Sales Role (salesrole) Search Join values so they can be loaded dynamically. */
    exports.salesroleSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Sales Tax Item (salestaxitem) Search Join values so they can be loaded dynamically. */
    exports.salestaxitemSearchJoinValues = [
        { id: 'taxtype', description: 'Tax Type', actualName: 'Tax Type' }
    ];
    /** Scheduled Script (scheduledscript) Search Join values so they can be loaded dynamically. */
    exports.scheduledscriptSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Scheduled Script Instance (scheduledscriptinstance) Search Join values so they can be loaded dynamically. */
    exports.scheduledscriptinstanceSearchJoinValues = [
        { id: 'script', description: 'Script', actualName: 'Script' },
        { id: 'scriptdeployment', description: 'Script Deployment', actualName: 'Script Deployment' }
    ];
    /** Script Deployment (scriptdeployment) Search Join values so they can be loaded dynamically. */
    exports.scriptdeploymentSearchJoinValues = [
        { id: 'script', description: 'Script', actualName: 'Script' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Serialized Build/Assembly Item (serializedassemblyitem) Search Join values so they can be loaded dynamically. */
    exports.serializedassemblyitemSearchJoinValues = [];
    /** Serialized Inventory Item (serializedinventoryitem) Search Join values so they can be loaded dynamically. */
    exports.serializedinventoryitemSearchJoinValues = [];
    /** Service (serviceitem) Search Join values so they can be loaded dynamically. */
    exports.serviceitemSearchJoinValues = [];
    /** Shipping Item (shipitem) Search Join values so they can be loaded dynamically. */
    exports.shipitemSearchJoinValues = [];
    /** Shopping Cart (shoppingcart) Search Join values so they can be loaded dynamically. */
    exports.shoppingcartSearchJoinValues = [
        { id: 'item', description: 'Item', actualName: 'Item' },
        { id: 'shopper', description: 'Shopper', actualName: 'Customer' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Solution (solution) Search Join values so they can be loaded dynamically. */
    exports.solutionSearchJoinValues = [
        { id: 'relatedsolution', description: 'Related Solution', actualName: 'Solution' },
        { id: 'topic', description: 'Topic', actualName: 'Topic' }
    ];
    /** Statistical Journal Entry (statisticaljournalentry) Search Join values so they can be loaded dynamically. */
    exports.statisticaljournalentrySearchJoinValues = [];
    /** Store Pickup Fulfillment (storepickupfulfillment) Search Join values so they can be loaded dynamically. */
    exports.storepickupfulfillmentSearchJoinValues = [];
    /** Subscription (subscription) Search Join values so they can be loaded dynamically. */
    exports.subscriptionSearchJoinValues = [
        { id: 'billingaccount', description: 'Billing Account', actualName: 'Billing Account' },
        { id: 'currency', description: 'Currency', actualName: 'Currency' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'item', description: 'Subscription Plan', actualName: 'Item' }
    ];
    /** Subscription Change Order (subscriptionchangeorder) Search Join values so they can be loaded dynamically. */
    exports.subscriptionchangeorderSearchJoinValues = [];
    /** Subscription Line (subscriptionline) Search Join values so they can be loaded dynamically. */
    exports.subscriptionlineSearchJoinValues = [
        { id: 'includedusagemultiplierline', description: 'Included Quantity Multiplier Line', actualName: 'Subscription Line' },
        { id: 'item', description: 'Item', actualName: 'Item' },
        { id: 'subscription', description: 'Subscription', actualName: 'Subscription' },
        { id: 'transaction', description: 'Transaction', actualName: 'Transaction' }
    ];
    /** Subscription Plan (subscriptionplan) Search Join values so they can be loaded dynamically. */
    exports.subscriptionplanSearchJoinValues = [];
    /** Subsidiary (subsidiary) Search Join values so they can be loaded dynamically. */
    exports.subsidiarySearchJoinValues = [
        { id: 'address', description: 'Address', actualName: 'Address' },
        { id: 'defaultadvancetoapplyaccount', description: 'Default Advance to Apply Account', actualName: 'Account' },
        { id: 'returnaddress', description: 'Return Address', actualName: 'Address' },
        { id: 'shippingaddress', description: 'Shipping Address', actualName: 'Address' }
    ];
    /** Subtotal Item (subtotalitem) Search Join values so they can be loaded dynamically. */
    exports.subtotalitemSearchJoinValues = [];
    /** Suitelet (suitelet) Search Join values so they can be loaded dynamically. */
    exports.suiteletSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Supply Chain Snapshot (supplychainsnapshot) Search Join values so they can be loaded dynamically. */
    exports.supplychainsnapshotSearchJoinValues = [
        { id: 'item', description: 'Item', actualName: 'Item' }
    ];
    /** Case (supportcase) Search Join values so they can be loaded dynamically. */
    exports.supportcaseSearchJoinValues = [
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'issue', description: 'Issue', actualName: 'Issue' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'transaction', description: 'Transaction', actualName: 'Transaction' }
    ];
    /** Task (task) Search Join values so they can be loaded dynamically. */
    exports.taskSearchJoinValues = [
        { id: 'companycustomer', description: 'Company (Customer)', actualName: 'Customer' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'originatinglead', description: 'Originating Lead', actualName: 'Lead' }
    ];
    /** Tax Account (taxacct) Search Join values so they can be loaded dynamically. */
    exports.taxacctSearchJoinValues = [];
    /** Tax Detail (taxdetail) Search Join values so they can be loaded dynamically. */
    exports.taxdetailSearchJoinValues = [];
    /** Tax Group (taxgroup) Search Join values so they can be loaded dynamically. */
    exports.taxgroupSearchJoinValues = [];
    /** Tax Period (taxperiod) Search Join values so they can be loaded dynamically. */
    exports.taxperiodSearchJoinValues = [];
    /** Tax Type (taxtype) Search Join values so they can be loaded dynamically. */
    exports.taxtypeSearchJoinValues = [];
    /** Term (term) Search Join values so they can be loaded dynamically. */
    exports.termSearchJoinValues = [];
    /** Time (timebill) Search Join values so they can be loaded dynamically. */
    exports.timebillSearchJoinValues = [
        { id: 'charge', description: 'Charge', actualName: 'Charge' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'projecttask', description: 'Project Task', actualName: 'ProjectTask' },
        { id: 'projecttaskassignment', description: 'Project Task Assignment', actualName: 'Project Task Assignment' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'timesheet', description: 'Weekly Timesheet', actualName: 'Timesheet' }
    ];
    /** Time Entry (timeentry) Search Join values so they can be loaded dynamically. */
    exports.timeentrySearchJoinValues = [
        { id: 'billingclass', description: 'BillingClass', actualName: 'Billing Class' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'department', description: 'Department', actualName: 'Department' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'location', description: 'Location', actualName: 'Location' },
        { id: 'projecttask', description: 'Project Task', actualName: 'Project Task' },
        { id: 'projecttaskassignment', description: 'Project Task Assignment', actualName: 'Project Task Assignment' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'timesheet', description: 'Timesheet', actualName: 'Timesheet' },
        { id: 'user', description: 'User', actualName: 'Employee' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' }
    ];
    /** Timesheet (timesheet) Search Join values so they can be loaded dynamically. */
    exports.timesheetSearchJoinValues = [
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'timeentry', description: 'Time Entry', actualName: 'Time Entry' }
    ];
    /** Topic (topic) Search Join values so they can be loaded dynamically. */
    exports.topicSearchJoinValues = [
        { id: 'solution', description: 'Solution', actualName: 'Solution' }
    ];
    /** Transaction (transaction) Search Join values so they can be loaded dynamically. */
    exports.transactionSearchJoinValues = [
        { id: 'account', description: 'Account', actualName: 'Account' },
        { id: 'accountingperiod', description: 'Accounting Period', actualName: 'Accounting Period' },
        { id: 'accountingtransaction', description: 'Multi-Book Accounting Transaction', actualName: 'Multi-Book Accounting Transaction' },
        { id: 'advancetoapplyaccount', description: 'Advance to Apply Account', actualName: 'Account' },
        { id: 'billingaddress', description: 'Billing Address', actualName: 'Address' },
        { id: 'case', description: 'Case', actualName: 'Case' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'customer', description: 'Customer', actualName: 'Customer' },
        { id: 'customermain', description: 'Customer (Main Line)', actualName: 'Customer' },
        { id: 'department', description: 'Department', actualName: 'Department' },
        { id: 'employee', description: 'Employee', actualName: 'Employee' },
        { id: 'expensecategory', description: 'Expense Category', actualName: 'Expense Category' },
        { id: 'inventorydetail', description: 'Inventory Detail', actualName: 'Inventory Detail' },
        { id: 'itemnumber', description: 'Item Number', actualName: 'Inventory Numbers' },
        { id: 'job', description: 'Job', actualName: 'Job' },
        { id: 'jobmain', description: 'Job (Main Line)', actualName: 'Job' },
        { id: 'leadsource', description: 'Lead Source', actualName: 'Campaign' },
        { id: 'location', description: 'Location', actualName: 'Location' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'mfgplannedtime', description: 'Manufacturing Planned Time', actualName: 'Manufacturing Planned Time' },
        { id: 'payrollitem', description: 'Payroll Item', actualName: 'Payroll Item' },
        { id: 'projecttask', description: 'Project task', actualName: 'Project Task' },
        { id: 'requestor', description: 'Requestor', actualName: 'Employee' },
        { id: 'revision', description: 'Revision', actualName: 'Item Revision' },
        { id: 'revrecschedule', description: 'Rev Rec Schedule', actualName: 'Revenue Recognition Schedules' },
        { id: 'salesrep', description: 'Sales Rep', actualName: 'Employee' },
        { id: 'shippingaddress', description: 'Shipping Address', actualName: 'Address' },
        { id: 'subsidiary', description: 'Subsidiary', actualName: 'Subsidiary' },
        { id: 'task', description: 'Task', actualName: 'Task' },
        { id: 'taxdetail', description: 'Tax Detail', actualName: 'Tax Detail' },
        { id: 'taxitem', description: 'Tax Item', actualName: 'Tax Code' },
        { id: 'user', description: 'User', actualName: 'Employee' },
        { id: 'vendor', description: 'Vendor', actualName: 'Vendor' }
    ];
    /** Transfer Order (transferorder) Search Join values so they can be loaded dynamically. */
    exports.transferorderSearchJoinValues = [];
    /** Units Type (unitstype) Search Join values so they can be loaded dynamically. */
    exports.unitstypeSearchJoinValues = [];
    /** Userevent Script (usereventscript) Search Join values so they can be loaded dynamically. */
    exports.usereventscriptSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Vendor (vendor) Search Join values so they can be loaded dynamically. */
    exports.vendorSearchJoinValues = [
        { id: 'account', description: 'Payable Account', actualName: 'Account' },
        { id: 'campaignresponse', description: 'Campaign Response', actualName: 'Campaign' },
        { id: 'contact', description: 'Contact', actualName: 'Contact' },
        { id: 'contactprimary', description: 'Contact (Primary)', actualName: 'Contact' },
        { id: 'expaccount', description: 'Expense Account', actualName: 'Account' },
        { id: 'messages', description: 'Messages', actualName: 'Message' },
        { id: 'messagesfrom', description: 'Messages From', actualName: 'Message' },
        { id: 'messagesto', description: 'Messages To', actualName: 'Message' },
        { id: 'msesubsidiary', description: 'Subsidiary', actualName: 'Subsidiary' }
    ];
    /** Vendor Bill (vendorbill) Search Join values so they can be loaded dynamically. */
    exports.vendorbillSearchJoinValues = [];
    /** Vendor Category (vendorcategory) Search Join values so they can be loaded dynamically. */
    exports.vendorcategorySearchJoinValues = [];
    /** Vendor Credit (vendorcredit) Search Join values so they can be loaded dynamically. */
    exports.vendorcreditSearchJoinValues = [];
    /** Vendor Payment (vendorpayment) Search Join values so they can be loaded dynamically. */
    exports.vendorpaymentSearchJoinValues = [];
    /** Vendor Return Authorization (vendorreturnauthorization) Search Join values so they can be loaded dynamically. */
    exports.vendorreturnauthorizationSearchJoinValues = [];
    /** Vendor-Subsidiary Relationship (vendorsubsidiaryrelationship) Search Join values so they can be loaded dynamically. */
    exports.vendorsubsidiaryrelationshipSearchJoinValues = [];
    /** Website (website) Search Join values so they can be loaded dynamically. */
    exports.websiteSearchJoinValues = [];
    /** Win-Loss Reason (winlossreason) Search Join values so they can be loaded dynamically. */
    exports.winlossreasonSearchJoinValues = [];
    /** Workflow Action Script (workflowactionscript) Search Join values so they can be loaded dynamically. */
    exports.workflowactionscriptSearchJoinValues = [
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Work Order (workorder) Search Join values so they can be loaded dynamically. */
    exports.workorderSearchJoinValues = [];
    /** Work Order Close (workorderclose) Search Join values so they can be loaded dynamically. */
    exports.workordercloseSearchJoinValues = [];
    /** Work Order Completion (workordercompletion) Search Join values so they can be loaded dynamically. */
    exports.workordercompletionSearchJoinValues = [];
    /** Work Order Issue (workorderissue) Search Join values so they can be loaded dynamically. */
    exports.workorderissueSearchJoinValues = [];
    /** Workplace (workplace) Search Join values so they can be loaded dynamically. */
    exports.workplaceSearchJoinValues = [
        { id: 'address', description: 'Address', actualName: 'Address' },
        { id: 'time', description: 'Time', actualName: 'Time' },
        { id: 'timeentry', description: 'Time Entry', actualName: 'Time Entry' },
        { id: 'user', description: 'User', actualName: 'Employee' }
    ];
    /** Field Search Join values definitions so they can be consumed dynamically not only as types. */
    exports.typedSearchJoinValues = {
        account: exports.accountSearchJoinValues,
        accountingbook: exports.accountingbookSearchJoinValues,
        accountingcontext: exports.accountingcontextSearchJoinValues,
        accountingperiod: exports.accountingperiodSearchJoinValues,
        accountingtransaction: exports.accountingtransactionSearchJoinValues,
        activity: exports.activitySearchJoinValues,
        address: exports.addressSearchJoinValues,
        advintercompanyjournalentry: exports.advintercompanyjournalentrySearchJoinValues,
        allocationschedule: exports.allocationscheduleSearchJoinValues,
        amortizationschedule: exports.amortizationscheduleSearchJoinValues,
        amortizationtemplate: exports.amortizationtemplateSearchJoinValues,
        assemblybuild: exports.assemblybuildSearchJoinValues,
        assemblyitem: exports.assemblyitemSearchJoinValues,
        assemblyitembom: exports.assemblyitembomSearchJoinValues,
        assemblyunbuild: exports.assemblyunbuildSearchJoinValues,
        billingaccount: exports.billingaccountSearchJoinValues,
        billingclass: exports.billingclassSearchJoinValues,
        billingratecard: exports.billingratecardSearchJoinValues,
        billingrevenueevent: exports.billingrevenueeventSearchJoinValues,
        billingschedule: exports.billingscheduleSearchJoinValues,
        bin: exports.binSearchJoinValues,
        bintransfer: exports.bintransferSearchJoinValues,
        binworksheet: exports.binworksheetSearchJoinValues,
        blanketpurchaseorder: exports.blanketpurchaseorderSearchJoinValues,
        bom: exports.bomSearchJoinValues,
        bomrevision: exports.bomrevisionSearchJoinValues,
        bulkownershiptransfer: exports.bulkownershiptransferSearchJoinValues,
        bundleinstallationscript: exports.bundleinstallationscriptSearchJoinValues,
        calendarevent: exports.calendareventSearchJoinValues,
        campaign: exports.campaignSearchJoinValues,
        campaignresponse: exports.campaignresponseSearchJoinValues,
        campaigntemplate: exports.campaigntemplateSearchJoinValues,
        cashrefund: exports.cashrefundSearchJoinValues,
        cashsale: exports.cashsaleSearchJoinValues,
        charge: exports.chargeSearchJoinValues,
        chargerule: exports.chargeruleSearchJoinValues,
        check: exports.checkSearchJoinValues,
        classification: exports.classificationSearchJoinValues,
        clientscript: exports.clientscriptSearchJoinValues,
        cmscontent: exports.cmscontentSearchJoinValues,
        cmscontenttype: exports.cmscontenttypeSearchJoinValues,
        commercecategory: exports.commercecategorySearchJoinValues,
        competitor: exports.competitorSearchJoinValues,
        consolidatedexchangerate: exports.consolidatedexchangerateSearchJoinValues,
        contact: exports.contactSearchJoinValues,
        contactcategory: exports.contactcategorySearchJoinValues,
        contactrole: exports.contactroleSearchJoinValues,
        costcategory: exports.costcategorySearchJoinValues,
        couponcode: exports.couponcodeSearchJoinValues,
        creditcardcharge: exports.creditcardchargeSearchJoinValues,
        creditcardrefund: exports.creditcardrefundSearchJoinValues,
        creditmemo: exports.creditmemoSearchJoinValues,
        currency: exports.currencySearchJoinValues,
        customer: exports.customerSearchJoinValues,
        customercategory: exports.customercategorySearchJoinValues,
        customerdeposit: exports.customerdepositSearchJoinValues,
        customermessage: exports.customermessageSearchJoinValues,
        customerpayment: exports.customerpaymentSearchJoinValues,
        customerpaymentauthorization: exports.customerpaymentauthorizationSearchJoinValues,
        customerrefund: exports.customerrefundSearchJoinValues,
        customerstatus: exports.customerstatusSearchJoinValues,
        customersubsidiaryrelationship: exports.customersubsidiaryrelationshipSearchJoinValues,
        customrecord: exports.customrecordSearchJoinValues,
        deletedrecord: exports.deletedrecordSearchJoinValues,
        department: exports.departmentSearchJoinValues,
        deposit: exports.depositSearchJoinValues,
        depositapplication: exports.depositapplicationSearchJoinValues,
        descriptionitem: exports.descriptionitemSearchJoinValues,
        discountitem: exports.discountitemSearchJoinValues,
        downloaditem: exports.downloaditemSearchJoinValues,
        emailtemplate: exports.emailtemplateSearchJoinValues,
        employee: exports.employeeSearchJoinValues,
        entity: exports.entitySearchJoinValues,
        entityaccountmapping: exports.entityaccountmappingSearchJoinValues,
        entitygroup: exports.entitygroupSearchJoinValues,
        estimate: exports.estimateSearchJoinValues,
        expensecategory: exports.expensecategorySearchJoinValues,
        expensereport: exports.expensereportSearchJoinValues,
        fairvalueprice: exports.fairvaluepriceSearchJoinValues,
        file: exports.fileSearchJoinValues,
        fixedamountprojectrevenuerule: exports.fixedamountprojectrevenueruleSearchJoinValues,
        folder: exports.folderSearchJoinValues,
        fulfillmentrequest: exports.fulfillmentrequestSearchJoinValues,
        genericresource: exports.genericresourceSearchJoinValues,
        giftcertificate: exports.giftcertificateSearchJoinValues,
        giftcertificateitem: exports.giftcertificateitemSearchJoinValues,
        globalaccountmapping: exports.globalaccountmappingSearchJoinValues,
        globalinventoryrelationship: exports.globalinventoryrelationshipSearchJoinValues,
        inboundshipment: exports.inboundshipmentSearchJoinValues,
        intercompallocationschedule: exports.intercompallocationscheduleSearchJoinValues,
        intercompanyjournalentry: exports.intercompanyjournalentrySearchJoinValues,
        intercompanytransferorder: exports.intercompanytransferorderSearchJoinValues,
        inventoryadjustment: exports.inventoryadjustmentSearchJoinValues,
        inventorycostrevaluation: exports.inventorycostrevaluationSearchJoinValues,
        inventorycount: exports.inventorycountSearchJoinValues,
        inventorydetail: exports.inventorydetailSearchJoinValues,
        inventoryitem: exports.inventoryitemSearchJoinValues,
        inventorynumber: exports.inventorynumberSearchJoinValues,
        inventorynumberbin: exports.inventorynumberbinSearchJoinValues,
        inventorystatus: exports.inventorystatusSearchJoinValues,
        inventorystatuschange: exports.inventorystatuschangeSearchJoinValues,
        inventorytransfer: exports.inventorytransferSearchJoinValues,
        invoice: exports.invoiceSearchJoinValues,
        issue: exports.issueSearchJoinValues,
        issueproduct: exports.issueproductSearchJoinValues,
        issueproductversion: exports.issueproductversionSearchJoinValues,
        item: exports.itemSearchJoinValues,
        itemaccountmapping: exports.itemaccountmappingSearchJoinValues,
        itembinnumber: exports.itembinnumberSearchJoinValues,
        itemdemandplan: exports.itemdemandplanSearchJoinValues,
        itemfulfillment: exports.itemfulfillmentSearchJoinValues,
        itemgroup: exports.itemgroupSearchJoinValues,
        itemlocationconfiguration: exports.itemlocationconfigurationSearchJoinValues,
        itemreceipt: exports.itemreceiptSearchJoinValues,
        itemrevision: exports.itemrevisionSearchJoinValues,
        itemsupplyplan: exports.itemsupplyplanSearchJoinValues,
        job: exports.jobSearchJoinValues,
        jobstatus: exports.jobstatusSearchJoinValues,
        jobtype: exports.jobtypeSearchJoinValues,
        journalentry: exports.journalentrySearchJoinValues,
        kititem: exports.kititemSearchJoinValues,
        laborbasedprojectrevenuerule: exports.laborbasedprojectrevenueruleSearchJoinValues,
        landedcost: exports.landedcostSearchJoinValues,
        lead: exports.leadSearchJoinValues,
        location: exports.locationSearchJoinValues,
        lotnumberedassemblyitem: exports.lotnumberedassemblyitemSearchJoinValues,
        lotnumberedinventoryitem: exports.lotnumberedinventoryitemSearchJoinValues,
        manufacturingcosttemplate: exports.manufacturingcosttemplateSearchJoinValues,
        manufacturingoperationtask: exports.manufacturingoperationtaskSearchJoinValues,
        manufacturingrouting: exports.manufacturingroutingSearchJoinValues,
        mapreducescript: exports.mapreducescriptSearchJoinValues,
        markupitem: exports.markupitemSearchJoinValues,
        massupdatescript: exports.massupdatescriptSearchJoinValues,
        merchandisehierarchylevel: exports.merchandisehierarchylevelSearchJoinValues,
        merchandisehierarchynode: exports.merchandisehierarchynodeSearchJoinValues,
        merchandisehierarchyversion: exports.merchandisehierarchyversionSearchJoinValues,
        message: exports.messageSearchJoinValues,
        mfgplannedtime: exports.mfgplannedtimeSearchJoinValues,
        msesubsidiary: exports.msesubsidiarySearchJoinValues,
        nexus: exports.nexusSearchJoinValues,
        noninventoryitem: exports.noninventoryitemSearchJoinValues,
        note: exports.noteSearchJoinValues,
        notetype: exports.notetypeSearchJoinValues,
        opportunity: exports.opportunitySearchJoinValues,
        orderschedule: exports.orderscheduleSearchJoinValues,
        originatinglead: exports.originatingleadSearchJoinValues,
        otherchargeitem: exports.otherchargeitemSearchJoinValues,
        othername: exports.othernameSearchJoinValues,
        othernamecategory: exports.othernamecategorySearchJoinValues,
        partner: exports.partnerSearchJoinValues,
        partnercategory: exports.partnercategorySearchJoinValues,
        paycheck: exports.paycheckSearchJoinValues,
        paycheckjournal: exports.paycheckjournalSearchJoinValues,
        paymentitem: exports.paymentitemSearchJoinValues,
        paymentmethod: exports.paymentmethodSearchJoinValues,
        payrollbatch: exports.payrollbatchSearchJoinValues,
        payrollitem: exports.payrollitemSearchJoinValues,
        pctcompleteprojectrevenuerule: exports.pctcompleteprojectrevenueruleSearchJoinValues,
        periodendjournal: exports.periodendjournalSearchJoinValues,
        phonecall: exports.phonecallSearchJoinValues,
        portlet: exports.portletSearchJoinValues,
        pricebook: exports.pricebookSearchJoinValues,
        pricelevel: exports.pricelevelSearchJoinValues,
        priceplan: exports.priceplanSearchJoinValues,
        pricing: exports.pricingSearchJoinValues,
        pricinggroup: exports.pricinggroupSearchJoinValues,
        projectexpensetype: exports.projectexpensetypeSearchJoinValues,
        projecttask: exports.projecttaskSearchJoinValues,
        projecttaskassignment: exports.projecttaskassignmentSearchJoinValues,
        projecttemplate: exports.projecttemplateSearchJoinValues,
        promotioncode: exports.promotioncodeSearchJoinValues,
        prospect: exports.prospectSearchJoinValues,
        purchasecontract: exports.purchasecontractSearchJoinValues,
        purchaseorder: exports.purchaseorderSearchJoinValues,
        purchaserequisition: exports.purchaserequisitionSearchJoinValues,
        reallocateitem: exports.reallocateitemSearchJoinValues,
        receiveinboundshipment: exports.receiveinboundshipmentSearchJoinValues,
        resourceallocation: exports.resourceallocationSearchJoinValues,
        restlet: exports.restletSearchJoinValues,
        returnauthorization: exports.returnauthorizationSearchJoinValues,
        revenuearrangement: exports.revenuearrangementSearchJoinValues,
        revenuecommitment: exports.revenuecommitmentSearchJoinValues,
        revenuecommitmentreversal: exports.revenuecommitmentreversalSearchJoinValues,
        revenueplan: exports.revenueplanSearchJoinValues,
        revrecschedule: exports.revrecscheduleSearchJoinValues,
        revrectemplate: exports.revrectemplateSearchJoinValues,
        role: exports.roleSearchJoinValues,
        salesorder: exports.salesorderSearchJoinValues,
        salesrole: exports.salesroleSearchJoinValues,
        salestaxitem: exports.salestaxitemSearchJoinValues,
        scheduledscript: exports.scheduledscriptSearchJoinValues,
        scheduledscriptinstance: exports.scheduledscriptinstanceSearchJoinValues,
        scriptdeployment: exports.scriptdeploymentSearchJoinValues,
        serializedassemblyitem: exports.serializedassemblyitemSearchJoinValues,
        serializedinventoryitem: exports.serializedinventoryitemSearchJoinValues,
        serviceitem: exports.serviceitemSearchJoinValues,
        shipitem: exports.shipitemSearchJoinValues,
        shoppingcart: exports.shoppingcartSearchJoinValues,
        solution: exports.solutionSearchJoinValues,
        statisticaljournalentry: exports.statisticaljournalentrySearchJoinValues,
        storepickupfulfillment: exports.storepickupfulfillmentSearchJoinValues,
        subscription: exports.subscriptionSearchJoinValues,
        subscriptionchangeorder: exports.subscriptionchangeorderSearchJoinValues,
        subscriptionline: exports.subscriptionlineSearchJoinValues,
        subscriptionplan: exports.subscriptionplanSearchJoinValues,
        subsidiary: exports.subsidiarySearchJoinValues,
        subtotalitem: exports.subtotalitemSearchJoinValues,
        suitelet: exports.suiteletSearchJoinValues,
        supplychainsnapshot: exports.supplychainsnapshotSearchJoinValues,
        supportcase: exports.supportcaseSearchJoinValues,
        task: exports.taskSearchJoinValues,
        taxacct: exports.taxacctSearchJoinValues,
        taxdetail: exports.taxdetailSearchJoinValues,
        taxgroup: exports.taxgroupSearchJoinValues,
        taxperiod: exports.taxperiodSearchJoinValues,
        taxtype: exports.taxtypeSearchJoinValues,
        term: exports.termSearchJoinValues,
        timebill: exports.timebillSearchJoinValues,
        timeentry: exports.timeentrySearchJoinValues,
        timesheet: exports.timesheetSearchJoinValues,
        topic: exports.topicSearchJoinValues,
        transaction: exports.transactionSearchJoinValues,
        transferorder: exports.transferorderSearchJoinValues,
        unitstype: exports.unitstypeSearchJoinValues,
        usereventscript: exports.usereventscriptSearchJoinValues,
        vendor: exports.vendorSearchJoinValues,
        vendorbill: exports.vendorbillSearchJoinValues,
        vendorcategory: exports.vendorcategorySearchJoinValues,
        vendorcredit: exports.vendorcreditSearchJoinValues,
        vendorpayment: exports.vendorpaymentSearchJoinValues,
        vendorreturnauthorization: exports.vendorreturnauthorizationSearchJoinValues,
        vendorsubsidiaryrelationship: exports.vendorsubsidiaryrelationshipSearchJoinValues,
        website: exports.websiteSearchJoinValues,
        winlossreason: exports.winlossreasonSearchJoinValues,
        workflowactionscript: exports.workflowactionscriptSearchJoinValues,
        workorder: exports.workorderSearchJoinValues,
        workorderclose: exports.workordercloseSearchJoinValues,
        workordercompletion: exports.workordercompletionSearchJoinValues,
        workorderissue: exports.workorderissueSearchJoinValues,
        workplace: exports.workplaceSearchJoinValues
    };
});
