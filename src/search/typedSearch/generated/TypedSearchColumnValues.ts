
/** Account (account) Search Column values so they can be loaded dynamically. */
export const accountSearchColumnValues = [
{id: 'accountingcontext', type: 'text', label: 'Accounting Context'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'cashflowratetype', type: 'select', label: 'Cash Flow Rate Type'},
  {id: 'category1099misc', type: 'select', label: '1099-MISC Category'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'generalratetype', type: 'select', label: 'General Rate Type'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'legalname', type: 'text', label: 'Legal Name'},
  {id: 'locale', type: 'text', label: 'Language'},
  {id: 'localizedlegalname', type: 'text', label: 'Localized Legal Name'},
  {id: 'localizedname', type: 'text', label: 'Localized Name'},
  {id: 'localizednumber', type: 'text', label: 'Localized Number'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'number', type: 'text', label: 'Number'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'type', type: 'select', label: 'Account Type'}
];

/** Accounting Book (accountingbook) Search Column values so they can be loaded dynamically. */
export const accountingbookSearchColumnValues = [
{id: 'currency', type: 'select', label: 'Currency'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'includechildren', type: 'checkbox', label: 'Include Children'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isprimary', type: 'checkbox', label: 'Primary'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Accounting Context (accountingcontext) Search Column values so they can be loaded dynamically. */
export const accountingcontextSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Accounting Period (accountingperiod) Search Column values so they can be loaded dynamically. */
export const accountingperiodSearchColumnValues = [

];

/** Accounting Transaction (accountingtransaction) Search Column values so they can be loaded dynamically. */
export const accountingtransactionSearchColumnValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accounttype', type: 'text', label: 'Account Type'},
  {id: 'altsalesamount', type: 'currency', label: 'Amount (Alt.Sales)'},
  {id: 'altsalesnetamount', type: 'currency', label: 'Amount (Alt.Sales Net)'},
  {id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'basecurrency', type: 'text', label: 'Base Currency'},
  {id: 'catchupperiod', type: 'text', label: 'Catch Up Period'},
  {id: 'creditamount', type: 'currency', label: 'Amount (Credit)'},
  {id: 'customgl', type: 'checkbox', label: 'Custom GL'},
  {id: 'customscript', type: 'text', label: 'Custom Script'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'debitamount', type: 'currency', label: 'Amount (Debit)'},
  {id: 'deferrevrec', type: 'checkbox', label: 'Hold Revenue Recognition'},
  {id: 'exchangerate', type: 'currency2', label: 'Exchange Rate'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxamount', type: 'currency', label: 'Amount (Foreign Currency)'},
  {id: 'grossamount', type: 'currency', label: 'Amount (Gross)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'multisubsidiary', type: 'checkbox', label: 'Intercompany'},
  {id: 'netamount', type: 'currency', label: 'Amount (Net)'},
  {id: 'posting', type: 'checkbox', label: 'Posting'},
  {id: 'quantityrevcommitted', type: 'float', label: 'Quantity Rev. Committed'},
  {id: 'recognizedrevenue', type: 'currency', label: 'Amount (Recognized)'},
  {id: 'revcommitstatus', type: 'text', label: 'Rev. Commit. Status'},
  {id: 'revenuestatus', type: 'text', label: 'Revenue Status'},
  {id: 'revrecenddate', type: 'date', label: 'Rev. Rec. End Date'},
  {id: 'revreconrevcommitment', type: 'checkbox', label: 'Rev. Rec. On Rev. Committment'},
  {id: 'revrecstartdate', type: 'date', label: 'Rev. Rec. Start Date'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'tranisvsoebundle', type: 'checkbox', label: 'Transaction Is VSOE Bundle'},
  {id: 'vsoeallocation', type: 'currency', label: 'VSOE Allocation'}
];

/** Activity (activity) Search Column values so they can be loaded dynamically. */
export const activitySearchColumnValues = [
{id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'company', type: 'text', label: 'Company'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'createddate', type: 'date', label: 'Date Created'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'lastmodifieddate', type: 'date', label: 'Last Modified'},
  {id: 'markdone', type: 'text', label: 'Mark'},
  {id: 'message', type: 'textarea', label: 'Notes'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'startdate', type: 'date', label: 'Date'},
  {id: 'starttime', type: 'timeofday', label: 'Time'},
  {id: 'status', type: 'text', label: 'Status'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'transaction', type: 'select', label: 'Transaction'},
  {id: 'type', type: 'text', label: 'Type'}
];

/** Address (address) Search Column values so they can be loaded dynamically. */
export const addressSearchColumnValues = [
{id: 'address', type: 'text', label: 'Address'},
  {id: 'address1', type: 'text', label: 'Address 1'},
  {id: 'address2', type: 'text', label: 'Address 2'},
  {id: 'address3', type: 'text', label: 'Address 3'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'override', type: 'text', label: 'Override'},
  {id: 'phone', type: 'text', label: 'Phone'},
  {id: 'state', type: 'text', label: 'State'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Advanced Intercompany Journal Entry (advintercompanyjournalentry) Search Column values so they can be loaded dynamically. */
export const advintercompanyjournalentrySearchColumnValues = [

];

/** Allocation Schedule (allocationschedule) Search Column values so they can be loaded dynamically. */
export const allocationscheduleSearchColumnValues = [

];

/** Amortization Schedule (amortizationschedule) Search Column values so they can be loaded dynamically. */
export const amortizationscheduleSearchColumnValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'amorstatus', type: 'text', label: 'Status'},
  {id: 'amortemplate', type: 'select', label: 'Template Name'},
  {id: 'amortizedamount', type: 'currency', label: 'Total Amortized'},
  {id: 'amortype', type: 'text', label: 'Type'},
  {id: 'amount', type: 'currency', label: 'Amount (Schedule Total)'},
  {id: 'currency', type: 'select', label: 'Schedule Currency'},
  {id: 'deferredamount', type: 'currency', label: 'Remaining Deferred Balance'},
  {id: 'destacct', type: 'select', label: 'Destination Account'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'initialamt', type: 'currency', label: 'Initial Amount'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isrecognized', type: 'checkbox', label: 'Is Recognized?'},
  {id: 'name', type: 'text', label: 'Schedule Name'},
  {id: 'pctcomplete', type: 'percent', label: '% Complete'},
  {id: 'pctrecognition', type: 'percent', label: '% Recog.'},
  {id: 'periodoffset', type: 'integer', label: 'Period Offset'},
  {id: 'recuramount', type: 'currency', label: 'Amount'},
  {id: 'recurfxamount', type: 'currency', label: 'Amount (Foreign Currency)'},
  {id: 'residual', type: 'currency', label: 'Residual'},
  {id: 'scheddate', type: 'date', label: 'Date'},
  {id: 'schedulenumber', type: 'text', label: 'Number'},
  {id: 'sourceacct', type: 'select', label: 'Source Account'},
  {id: 'srctran', type: 'select', label: 'Source Transaction'},
  {id: 'srctranpostperiod', type: 'select', label: 'Posting Period'},
  {id: 'startoffset', type: 'integer', label: 'Start Offset'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Amortization Template (amortizationtemplate) Search Column values so they can be loaded dynamically. */
export const amortizationtemplateSearchColumnValues = [
{id: 'amormethod', type: 'text', label: 'Method'},
  {id: 'amorperiod', type: 'text', label: 'Amortization Period'},
  {id: 'amorstartoffset', type: 'text', label: 'Start Offset'},
  {id: 'amortermsrc', type: 'text', label: 'Term Source'},
  {id: 'amortype', type: 'text', label: 'Type'},
  {id: 'contraaccount', type: 'text', label: 'Contra Account'},
  {id: 'deferralaccount', type: 'text', label: 'Deferral Account'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'text', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'periodoffset', type: 'text', label: 'Period Offset'},
  {id: 'targetaccount', type: 'text', label: 'Target Account'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Assembly Build (assemblybuild) Search Column values so they can be loaded dynamically. */
export const assemblybuildSearchColumnValues = [

];

/** Build/Assembly Item (assemblyitem) Search Column values so they can be loaded dynamically. */
export const assemblyitemSearchColumnValues = [

];

/** Assembly Item BOM (assemblyitembom) Search Column values so they can be loaded dynamically. */
export const assemblyitembomSearchColumnValues = [
{id: 'assembly', type: 'select', label: 'Assembly'},
  {id: 'assemblyid', type: 'integer', label: 'Assembly ID'},
  {id: 'billofmaterials', type: 'select', label: 'Bill of Materials'},
  {id: 'billofmaterialsid', type: 'integer', label: 'Bill of Materials ID'},
  {id: 'default', type: 'checkbox', label: 'Default'},
  {id: 'locations', type: 'multiselect', label: 'Locations'}
];

/** Assembly Unbuild (assemblyunbuild) Search Column values so they can be loaded dynamically. */
export const assemblyunbuildSearchColumnValues = [

];

/** Billing Account (billingaccount) Search Column values so they can be loaded dynamically. */
export const billingaccountSearchColumnValues = [
{id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'cashsaleform', type: 'select', label: 'Cash Sale Form'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'customerdefault', type: 'checkbox', label: 'Customer Default'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'frequency', type: 'select', label: 'Frequency'},
  {id: 'idnumber', type: 'text', label: 'Account Number'},
  {id: 'idnumberexternal', type: 'text', label: 'External Id'},
  {id: 'inactive', type: 'checkbox', label: 'Inactive'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'invoiceform', type: 'select', label: 'Invoice Form'},
  {id: 'lastbillcycledate', type: 'date', label: 'Last Bill Cycle Date'},
  {id: 'lastbilldate', type: 'date', label: 'Last Bill Date'},
  {id: 'memo', type: 'text', label: 'Account Description'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nextbillcycledate', type: 'date', label: 'Next Bill Cycle Date'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Billing Class (billingclass) Search Column values so they can be loaded dynamically. */
export const billingclassSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Billing Rate Card (billingratecard) Search Column values so they can be loaded dynamically. */
export const billingratecardSearchColumnValues = [
{id: 'billingclass', type: 'text', label: 'Billing Class'},
  {id: 'currency', type: 'text', label: 'Currency'},
  {id: 'customer', type: 'text', label: 'Customer'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'id', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'laborbasedprojectrevenuerule', type: 'text', label: 'Labor Based Project Revenue Rule'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'price', type: 'currency', label: 'Price'},
  {id: 'saleunit', type: 'text', label: 'Sale Unit'},
  {id: 'timebasedchargerule', type: 'text', label: 'Time-Based Charge Rule'},
  {id: 'unitstype', type: 'text', label: 'Units Type'}
];

/** Revenue Recognition Event (billingrevenueevent) Search Column values so they can be loaded dynamically. */
export const billingrevenueeventSearchColumnValues = [
{id: 'amount', type: 'currency', label: 'Amount (Foreign Currency)'},
  {id: 'cumulativepercentcomplete', type: 'percent', label: 'Cumulative Percent Complete'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'eventdate', type: 'date', label: 'Event Date'},
  {id: 'eventpurpose', type: 'select', label: 'Event Purpose'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'record', type: 'select', label: 'Custom Record'},
  {id: 'recordtype', type: 'select', label: 'Custom Record Type'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Billing Schedule (billingschedule) Search Column values so they can be loaded dynamically. */
export const billingscheduleSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'frequency', type: 'select', label: 'Recurring Frequency'},
  {id: 'id', type: 'integer', label: 'BillingSchedule ID'},
  {id: 'inarrears', type: 'checkbox', label: 'In Arrears'},
  {id: 'initialamount', type: 'currency', label: 'Initial Amount'},
  {id: 'initialterms', type: 'text', label: 'Initial Payment Terms'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ispublic', type: 'checkbox', label: 'Public'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'recurrencecount', type: 'integer', label: 'Recurrence Count'},
  {id: 'recurrencepattern', type: 'select', label: 'Recurrence Pattern'},
  {id: 'recurrenceterms', type: 'text', label: 'Recurrence Payment Terms'},
  {id: 'repeatevery', type: 'integer', label: 'Repeat Every'},
  {id: 'type', type: 'select', label: 'Type'}
];

/** Bin (bin) Search Column values so they can be loaded dynamically. */
export const binSearchColumnValues = [
{id: 'binnumber', type: 'text', label: 'Bin Number'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'inactive', type: 'checkbox', label: 'Inactive'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'}
];

/** Bin Transfer (bintransfer) Search Column values so they can be loaded dynamically. */
export const bintransferSearchColumnValues = [

];

/** Bin Worksheet (binworksheet) Search Column values so they can be loaded dynamically. */
export const binworksheetSearchColumnValues = [

];

/** Blanket Purchase Order (blanketpurchaseorder) Search Column values so they can be loaded dynamically. */
export const blanketpurchaseorderSearchColumnValues = [

];

/** Bill of Materials (bom) Search Column values so they can be loaded dynamically. */
export const bomSearchColumnValues = [
{id: 'availableforallassemblies', type: 'checkbox', label: 'Available For All Assemblies'},
  {id: 'availableforalllocations', type: 'checkbox', label: 'Available For All Locations'},
  {id: 'createddate', type: 'date', label: 'Created Date'},
  {id: 'externalid', type: 'text', label: 'ExternalId'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'includechildren', type: 'checkbox', label: 'Include Children'},
  {id: 'internalid', type: 'integer', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'restricttoassemblies', type: 'multiselect', label: 'Restrict To Assemblies'},
  {id: 'restricttolocations', type: 'multiselect', label: 'Restrict To Locations'},
  {id: 'revisionname', type: 'text', label: 'Revision : Name'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'usecomponentyield', type: 'checkbox', label: 'Use Component Yield'},
  {id: 'usedonassembly', type: 'checkbox', label: 'Used on Assembly'}
];

/** Bill of Materials Revision (bomrevision) Search Column values so they can be loaded dynamically. */
export const bomrevisionSearchColumnValues = [
{id: 'billofmaterial', type: 'select', label: 'Bill of Materials'},
  {id: 'createddate', type: 'date', label: 'Created Date'},
  {id: 'effectivedate', type: 'date', label: 'Effective Start Date'},
  {id: 'externalid', type: 'text', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'integer', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'obsoletedate', type: 'date', label: 'Effective End Date'}
];

/** Take Ownership (bulkownershiptransfer) Search Column values so they can be loaded dynamically. */
export const bulkownershiptransferSearchColumnValues = [

];

/** Bundle Installation Script (bundleinstallationscript) Search Column values so they can be loaded dynamically. */
export const bundleinstallationscriptSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Event (calendarevent) Search Column values so they can be loaded dynamically. */
export const calendareventSearchColumnValues = [
{id: 'accesslevel', type: 'text', label: 'Event Access'},
  {id: 'attendee', type: 'select', label: 'Attendee'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'endtime', type: 'timeofday', label: 'End Time'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'instanceend', type: 'datetime', label: 'Instance End'},
  {id: 'instancestart', type: 'datetime', label: 'Instance Start'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'location', type: 'text', label: 'Location'},
  {id: 'markdone', type: 'text', label: 'Mark'},
  {id: 'message', type: 'text', label: 'Message'},
  {id: 'organizer', type: 'select', label: 'Organizer'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'recurrence', type: 'text', label: 'Event Date'},
  {id: 'resource', type: 'select', label: 'Resource'},
  {id: 'response', type: 'select', label: 'Response'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'starttime', type: 'timeofday', label: 'Start Time'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Event'},
  {id: 'transaction', type: 'select', label: 'Transaction'}
];

/** Campaign (campaign) Search Column values so they can be loaded dynamically. */
export const campaignSearchColumnValues = [
{id: 'audience', type: 'select', label: 'Audience Description'},
  {id: 'basecost', type: 'currency', label: 'Base Cost'},
  {id: 'campaignid', type: 'text', label: 'Campaign ID'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'channel', type: 'select', label: 'Channel'},
  {id: 'cost', type: 'currency', label: 'Total Cost'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'event', type: 'text', label: 'Event'},
  {id: 'executeddate', type: 'datetime', label: 'Executed on'},
  {id: 'expectedrevenue', type: 'currency', label: 'Expected Revenue'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'family', type: 'select', label: 'Family'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'issalescampaign', type: 'checkbox', label: 'Is Sales Campaign'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'keyword', type: 'text', label: 'Keyword'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'managerrole', type: 'select', label: 'Manager Role'},
  {id: 'message', type: 'text', label: 'Description'},
  {id: 'offer', type: 'select', label: 'Offer'},
  {id: 'owner', type: 'select', label: 'Manager'},
  {id: 'promocode', type: 'text', label: 'Promotion'},
  {id: 'recipient', type: 'select', label: 'Recipient'},
  {id: 'response', type: 'select', label: 'Response Detail'},
  {id: 'responsecategory', type: 'select', label: 'Response'},
  {id: 'responsecode', type: 'integer', label: 'Response Code'},
  {id: 'responsedate', type: 'datetime', label: 'Response Date'},
  {id: 'responsenotes', type: 'textarea', label: 'Response Notes'},
  {id: 'revenue', type: 'currency', label: 'Revenue'},
  {id: 'roi', type: 'percent', label: 'ROI'},
  {id: 'scheduleddate', type: 'datetime', label: 'Scheduled on'},
  {id: 'searchengine', type: 'select', label: 'Search Engine'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'url', type: 'text', label: 'URL'},
  {id: 'vertical', type: 'select', label: 'Vertical'}
];

/** Campaign Response (campaignresponse) Search Column values so they can be loaded dynamically. */
export const campaignresponseSearchColumnValues = [

];

/** Campaign Template (campaigntemplate) Search Column values so they can be loaded dynamically. */
export const campaigntemplateSearchColumnValues = [

];

/** Cash Refund (cashrefund) Search Column values so they can be loaded dynamically. */
export const cashrefundSearchColumnValues = [

];

/** Cash Sale (cashsale) Search Column values so they can be loaded dynamically. */
export const cashsaleSearchColumnValues = [

];

/** Charge (charge) Search Column values so they can be loaded dynamically. */
export const chargeSearchColumnValues = [
{id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'billingaccount', type: 'select', label: 'Billing Account'},
  {id: 'billingitem', type: 'select', label: 'Billing Item'},
  {id: 'billto', type: 'select', label: 'Customer:Project'},
  {id: 'chargedate', type: 'date', label: 'Date'},
  {id: 'chargetype', type: 'text', label: 'Charge Type'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'createddate', type: 'date', label: 'Date Created'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'Charge ID'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'modifieddate', type: 'date', label: 'Date Modified'},
  {id: 'quantity', type: 'text', label: 'Quantity'},
  {id: 'rate', type: 'text', label: 'Rate'},
  {id: 'rule', type: 'select', label: 'Charge Rule'},
  {id: 'runid', type: 'text', label: 'Charge Run ID'},
  {id: 'salesorder', type: 'text', label: 'Sales Order Id'},
  {id: 'stage', type: 'text', label: 'Charge Stage'},
  {id: 'subscriptionline', type: 'select', label: 'Subscription Line'},
  {id: 'use', type: 'text', label: 'Charge Use'}
];

/** Charge Rule (chargerule) Search Column values so they can be loaded dynamically. */
export const chargeruleSearchColumnValues = [
{id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'billingitem', type: 'select', label: 'Billing Item'},
  {id: 'chargedate', type: 'date', label: 'Charge Date'},
  {id: 'chargeruletype', type: 'text', label: 'Type'},
  {id: 'company', type: 'select', label: 'Project'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'enddate', type: 'date', label: 'End By'},
  {id: 'expamtmultiplier', type: 'float', label: 'Discount / Mark-up'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'frequency', type: 'text', label: 'Frequency'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'projecttask', type: 'select', label: 'Task / Milestone'},
  {id: 'projecttaskcompletiondate', type: 'date', label: 'Completion Date'},
  {id: 'projecttaskstatus', type: 'text', label: 'Status'},
  {id: 'ratemultiplier', type: 'float', label: 'Rate Multiplier'},
  {id: 'rateroundingtype', type: 'text', label: 'Rate Rounding'},
  {id: 'ratesourcetype', type: 'text', label: 'Rate Basis'},
  {id: 'ruleorder', type: 'integer', label: 'Rule Order'},
  {id: 'saleunit', type: 'select', label: 'Sale Units'},
  {id: 'stage', type: 'text', label: 'Initial Charge Stage'},
  {id: 'unitstype', type: 'select', label: 'Units Type'}
];

/** Check (check) Search Column values so they can be loaded dynamically. */
export const checkSearchColumnValues = [

];

/** Class (classification) Search Column values so they can be loaded dynamically. */
export const classificationSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'namenohierarchy', type: 'text', label: 'Name (no hierarchy)'},
  {id: 'subsidiary', type: 'multiselect', label: 'Subsidiary'}
];

/** Client Script (clientscript) Search Column values so they can be loaded dynamically. */
export const clientscriptSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** CMS Content (cmscontent) Search Column values so they can be loaded dynamically. */
export const cmscontentSearchColumnValues = [

];

/** CMS Content Type (cmscontenttype) Search Column values so they can be loaded dynamically. */
export const cmscontenttypeSearchColumnValues = [
{id: 'customrecordid', type: 'integer', label: 'Custom Record Id'},
  {id: 'customrecordscriptid', type: 'richtext', label: 'Custom Record Script Id'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'iconimagepath', type: 'richtext', label: 'Icon Image Path'},
  {id: 'id', type: 'integer', label: 'Internal ID'},
  {id: 'internalid', type: 'integer', label: 'Internal ID'},
  {id: 'label', type: 'richtext', label: 'Label'},
  {id: 'name', type: 'richtext', label: 'Name'}
];

/** Commerce Category (commercecategory) Search Column values so they can be loaded dynamically. */
export const commercecategorySearchColumnValues = [
{id: 'addtohead', type: 'text', label: 'Add to Head'},
  {id: 'catalog', type: 'select', label: 'Catalog'},
  {id: 'created', type: 'date', label: 'Creation Date/Time'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'displayinsite', type: 'checkbox', label: 'Display in Web Site'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fullurl', type: 'text', label: 'Full URL'},
  {id: 'idpath', type: 'text', label: 'ID Path'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isprimaryurl', type: 'checkbox', label: 'Is Primary URL'},
  {id: 'itemdescription', type: 'textarea', label: 'Item Description'},
  {id: 'itemid', type: 'integer', label: 'Item ID'},
  {id: 'itemsequencenumber', type: 'integer', label: 'Item Sequence Number'},
  {id: 'lastmodified', type: 'date', label: 'Last Modified'},
  {id: 'lastmodifiedby', type: 'select', label: 'Modified By'},
  {id: 'metadescription', type: 'text', label: 'Meta Description'},
  {id: 'metakeywords', type: 'text', label: 'Meta Tag HTML'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nestlevel', type: 'integer', label: 'Nest Level'},
  {id: 'pagebanner', type: 'image', label: 'Category Page Banner'},
  {id: 'pagebannerurl', type: 'text', label: 'Category Page Banner URL'},
  {id: 'pageheading', type: 'text', label: 'Page Heading'},
  {id: 'pagetitle', type: 'text', label: 'Page Title'},
  {id: 'primarycategory', type: 'checkbox', label: 'Primary Category of Item'},
  {id: 'primaryparent', type: 'select', label: 'Primary Parent'},
  {id: 'sequencenumber', type: 'integer', label: 'Sequence Number'},
  {id: 'sitemappriority', type: 'float', label: 'Sitemap Priority'},
  {id: 'subcataddtoheadoverride', type: 'text', label: 'Subcategory Add to Head Override'},
  {id: 'subcatdescoverride', type: 'text', label: 'Subcategory Description Override'},
  {id: 'subcatdisplayinsiteoverride', type: 'checkbox', label: 'Subcategory Display In Site Override'},
  {id: 'subcatid', type: 'integer', label: 'Subcategory ID'},
  {id: 'subcatmetadescoverride', type: 'text', label: 'Subcategory Meta Description Override'},
  {id: 'subcatmetakeywordsoverride', type: 'text', label: 'Subcategory Meta Keywords Override'},
  {id: 'subcatnameoverride', type: 'text', label: 'Subcategory Name Override'},
  {id: 'subcatpagebanneroverride', type: 'select', label: 'Subcategory Page Banner Override'},
  {id: 'subcatpagebannerurloverride', type: 'text', label: 'Subcategory Page Banner URL Override'},
  {id: 'subcatpageheadingoverride', type: 'text', label: 'Subcategory Page Heading Override'},
  {id: 'subcatpagetitleoverride', type: 'text', label: 'Subcategory Page Title Override'},
  {id: 'subcatparent', type: 'integer', label: 'Subcategory Parent ID'},
  {id: 'subcatsequencenumber', type: 'integer', label: 'Subcategory Sequence Number'},
  {id: 'subcatthumbnailoverride', type: 'select', label: 'Subcategory Thumbnail Override'},
  {id: 'subcatthumbnailurloverride', type: 'text', label: 'Subcategory Thumbnail URL Override'},
  {id: 'subcaturlfragmentoverride', type: 'text', label: 'Subcategory URL Fragment Override'},
  {id: 'thumbnail', type: 'image', label: 'Category Thumbnail'},
  {id: 'thumbnailurl', type: 'text', label: 'Category Thumbnail URL'},
  {id: 'urlcommcat', type: 'integer', label: 'URL Category'},
  {id: 'urlcommcatassoc', type: 'integer', label: 'URL Category Association'},
  {id: 'urlfragment', type: 'text', label: 'URL'},
  {id: 'version', type: 'integer', label: 'Version'}
];

/** Competitor (competitor) Search Column values so they can be loaded dynamically. */
export const competitorSearchColumnValues = [
{id: 'description', type: 'textarea', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'oppnotes', type: 'textarea', label: 'Opportunity Notes'},
  {id: 'opportunity', type: 'select', label: 'Opportunity'},
  {id: 'oppwinloss', type: 'checkbox', label: 'Winner'},
  {id: 'productservices', type: 'richtext', label: 'Products/Services'},
  {id: 'strategy', type: 'richtext', label: 'Strategy'},
  {id: 'strengths', type: 'richtext', label: 'Strengths'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'weaknesses', type: 'richtext', label: 'Weaknesses'}
];

/** Consolidated Exchange Rate (consolidatedexchangerate) Search Column values so they can be loaded dynamically. */
export const consolidatedexchangerateSearchColumnValues = [
{id: 'accountingbook', type: 'text', label: 'Accounting Book'},
  {id: 'averagerate', type: 'rate', label: 'Average'},
  {id: 'closed', type: 'checkbox', label: 'Closed'},
  {id: 'currentrate', type: 'rate', label: 'Current'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fromcurrency', type: 'text', label: 'From Currency'},
  {id: 'fromsubsidiary', type: 'text', label: 'From Subsidiary'},
  {id: 'historicalrate', type: 'rate', label: 'Historical'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'periodenddate', type: 'date', label: 'Period End Date'},
  {id: 'periodname', type: 'text', label: 'Period'},
  {id: 'periodstartdate', type: 'date', label: 'Period Start Date'},
  {id: 'tocurrency', type: 'text', label: 'To Currency'},
  {id: 'tosubsidiary', type: 'text', label: 'To Subsidiary'}
];

/** Contact (contact) Search Column values so they can be loaded dynamically. */
export const contactSearchColumnValues = [
{id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'assistant', type: 'select', label: 'Assistant'},
  {id: 'assistantphone', type: 'phone', label: 'Assist. Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'contactrole', type: 'select', label: 'Role'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'onlineformdate', type: 'text', label: 'Online Form History - Date'},
  {id: 'onlineformleadsource', type: 'text', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'text', label: 'Online Form History - Form Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'supervisor', type: 'select', label: 'Supervisor'},
  {id: 'supervisorphone', type: 'phone', label: 'Sup. Phone'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Contact Category (contactcategory) Search Column values so they can be loaded dynamically. */
export const contactcategorySearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'private', type: 'checkbox', label: 'Private'},
  {id: 'sync', type: 'checkbox', label: 'Sync'}
];

/** Contact Role (contactrole) Search Column values so they can be loaded dynamically. */
export const contactroleSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Cost Category (costcategory) Search Column values so they can be loaded dynamically. */
export const costcategorySearchColumnValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'itemcosttype', type: 'select', label: 'Cost Type'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Coupon Code (couponcode) Search Column values so they can be loaded dynamically. */
export const couponcodeSearchColumnValues = [
{id: 'code', type: 'text', label: 'Code'},
  {id: 'datesent', type: 'date', label: 'Date Sent'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'promotion', type: 'text', label: 'Promotion'},
  {id: 'recipient', type: 'text', label: 'Recipient'},
  {id: 'usecount', type: 'integer', label: 'Use Count'},
  {id: 'used', type: 'checkbox', label: 'Used'}
];

/** Credit Card Charge (creditcardcharge) Search Column values so they can be loaded dynamically. */
export const creditcardchargeSearchColumnValues = [

];

/** Credit Card Refund (creditcardrefund) Search Column values so they can be loaded dynamically. */
export const creditcardrefundSearchColumnValues = [

];

/** Credit Memo (creditmemo) Search Column values so they can be loaded dynamically. */
export const creditmemoSearchColumnValues = [

];

/** Currency (currency) Search Column values so they can be loaded dynamically. */
export const currencySearchColumnValues = [
{id: 'exchangerate', type: 'float', label: 'Exchange Rate'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'symbol', type: 'text', label: 'Symbol'}
];

/** Customer (customer) Search Column values so they can be loaded dynamically. */
export const customerSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altcontact', type: 'text', label: 'Alt. Contact'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'assignedsite', type: 'select', label: 'Assigned Web Site'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'buyingreason', type: 'text', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'text', label: 'Buying Time Frame'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'mmyydate', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccinternalid', type: 'text', label: 'Credit Card Internal ID'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'select', label: 'Primary Contact'},
  {id: 'contribution', type: 'percent', label: 'Contribution %'},
  {id: 'contributionprimary', type: 'percent', label: 'Primary Sales Rep Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'defaultorderpriority', type: 'text', label: 'Default Order Priority'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'draccount', type: 'text', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxaccount', type: 'text', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'grouppricinglevel', type: 'text', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itempricinglevel', type: 'text', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'jobenddate', type: 'date', label: 'Job Actual End'},
  {id: 'jobprojectedend', type: 'date', label: 'Job Projected End'},
  {id: 'jobstartdate', type: 'date', label: 'Job Start'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformdate', type: 'text', label: 'Online Form History - Date'},
  {id: 'onlineformleadsource', type: 'text', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'text', label: 'Online Form History - Form Name'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Top Level Parent'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'percent', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'text', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'prefccprocessor', type: 'select', label: 'Credit Card Processor'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'text', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'text', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'receivablesaccount', type: 'text', label: 'Default Receivables Account'},
  {id: 'reminderdays', type: 'integer', label: 'Reminder Days'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'text', label: 'Role'},
  {id: 'salesreadiness', type: 'text', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'sourcesite', type: 'select', label: 'Source Website'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'taxitem', type: 'select', label: 'Tax Item'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'text', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Customer Category (customercategory) Search Column values so they can be loaded dynamically. */
export const customercategorySearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Customer Deposit (customerdeposit) Search Column values so they can be loaded dynamically. */
export const customerdepositSearchColumnValues = [

];

/** Customer Message (customermessage) Search Column values so they can be loaded dynamically. */
export const customermessageSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'preferred', type: 'text', label: 'Preferred'}
];

/** Customer Payment (customerpayment) Search Column values so they can be loaded dynamically. */
export const customerpaymentSearchColumnValues = [

];

/** Customer Payment Authorization (customerpaymentauthorization) Search Column values so they can be loaded dynamically. */
export const customerpaymentauthorizationSearchColumnValues = [

];

/** Customer Refund (customerrefund) Search Column values so they can be loaded dynamically. */
export const customerrefundSearchColumnValues = [

];

/** Customer Status (customerstatus) Search Column values so they can be loaded dynamically. */
export const customerstatusSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'includeinleadreports', type: 'checkbox', label: 'Include in Lead Reports'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'probability', type: 'text', label: 'Probability'}
];

/** Customer-Subsidiary Relationship (customersubsidiaryrelationship) Search Column values so they can be loaded dynamically. */
export const customersubsidiaryrelationshipSearchColumnValues = [

];

/** Custom Record (customrecord) Search Column values so they can be loaded dynamically. */
export const customrecordSearchColumnValues = [
{id: 'altname', type: 'text', label: 'Name'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'created', type: 'datetime', label: 'Date Created'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lastmodified', type: 'datetime', label: 'Last Modified'},
  {id: 'lastmodifiedby', type: 'select', label: 'Last Modified By'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'parent', type: 'select', label: 'Parent'}
];

/** Deleted Record (deletedrecord) Search Column values so they can be loaded dynamically. */
export const deletedrecordSearchColumnValues = [
{id: 'context', type: 'text', label: 'Context'},
  {id: 'deletedby', type: 'select', label: 'Deleted By'},
  {id: 'deleteddate', type: 'datetime', label: 'Date Deleted'},
  {id: 'externalid', type: 'text', label: 'External Id'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Department (department) Search Column values so they can be loaded dynamically. */
export const departmentSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'namenohierarchy', type: 'text', label: 'Name (no hierarchy)'},
  {id: 'subsidiary', type: 'multiselect', label: 'Subsidiary'}
];

/** Deposit (deposit) Search Column values so they can be loaded dynamically. */
export const depositSearchColumnValues = [

];

/** Deposit Application (depositapplication) Search Column values so they can be loaded dynamically. */
export const depositapplicationSearchColumnValues = [

];

/** Description Item (descriptionitem) Search Column values so they can be loaded dynamically. */
export const descriptionitemSearchColumnValues = [

];

/** Discount Item (discountitem) Search Column values so they can be loaded dynamically. */
export const discountitemSearchColumnValues = [

];

/** Download Item (downloaditem) Search Column values so they can be loaded dynamically. */
export const downloaditemSearchColumnValues = [

];

/** Email Template (emailtemplate) Search Column values so they can be loaded dynamically. */
export const emailtemplateSearchColumnValues = [

];

/** Employee (employee) Search Column values so they can be loaded dynamically. */
export const employeeSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'integer', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'aliennumber', type: 'text', label: 'Alien #'},
  {id: 'allocation', type: 'float', label: 'Allocated Position FTE'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'approvallimit', type: 'currency', label: 'Expense Approval Limit'},
  {id: 'approver', type: 'select', label: 'Expense Approver'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'authworkdate', type: 'date', label: 'Authorized to work until date'},
  {id: 'basewage', type: 'currency', label: 'Base Wage'},
  {id: 'basewagetype', type: 'select', label: 'Base Wage Type'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'birthdate', type: 'date', label: 'Birth Date'},
  {id: 'birthday', type: 'date', label: 'Birth Day'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'classnohierarchy', type: 'select', label: 'Class (no hierarchy)'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'compensationcurrency', type: 'select', label: 'Compensation Currency'},
  {id: 'concurrentwebservicesuser', type: 'checkbox', label: 'Concurrent Web Services User'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'departmentnohierarchy', type: 'select', label: 'Department (no hierarchy)'},
  {id: 'eligibleforcommission', type: 'checkbox', label: 'Eligible for Commission'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'employeestatus', type: 'select', label: 'Employee Status'},
  {id: 'employeetype', type: 'select', label: 'Type'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'ethnicity', type: 'select', label: 'Ethnicity'},
  {id: 'expenselimit', type: 'currency', label: 'Expense Limit'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'gender', type: 'select', label: 'Gender'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'hiredate', type: 'date', label: 'Hire Date'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'i9verified', type: 'checkbox', label: 'I9 Verified'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isjobresource', type: 'checkbox', label: 'Job Resource'},
  {id: 'issalesrep', type: 'checkbox', label: 'Sales Rep'},
  {id: 'issupportrep', type: 'checkbox', label: 'Support Rep'},
  {id: 'istemplate', type: 'checkbox', label: 'Is Template'},
  {id: 'job', type: 'select', label: 'Job'},
  {id: 'laborcost', type: 'currency', label: 'Labor Cost'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastpaiddate', type: 'date', label: 'Last Paid Date'},
  {id: 'lastreviewdate', type: 'date', label: 'Last Review'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationnohierarchy', type: 'select', label: 'Location (no hierarchy)'},
  {id: 'maritalstatus', type: 'select', label: 'Marital Status'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'nextreviewdate', type: 'date', label: 'Next Review'},
  {id: 'offlineaccess', type: 'checkbox', label: 'Offline Access'},
  {id: 'payfrequency', type: 'select', label: 'Pay Frequency'},
  {id: 'permchangedate', type: 'datetime', label: 'Permission Change Date'},
  {id: 'permchangelevel', type: 'text', label: 'Permission Change Level'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'permissionchange', type: 'text', label: 'Permission Change'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'positiontitle', type: 'text', label: 'Position Title'},
  {id: 'primaryearningamount', type: 'currency', label: 'Primary Earning Amount'},
  {id: 'primaryearningitem', type: 'text', label: 'Primary Earning Item'},
  {id: 'primaryearningtype', type: 'text', label: 'Primary Earning Type'},
  {id: 'purchaseorderapprovallimit', type: 'currency', label: 'Purchase Approval Limit'},
  {id: 'purchaseorderapprover', type: 'select', label: 'Purchase Approver'},
  {id: 'purchaseorderlimit', type: 'currency', label: 'Purchase Limit'},
  {id: 'releasedate', type: 'date', label: 'Release Date'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'residentstatus', type: 'select', label: 'Resident Status'},
  {id: 'role', type: 'select', label: 'Role'},
  {id: 'rolechange', type: 'text', label: 'Role Change'},
  {id: 'rolechangeaction', type: 'text', label: 'Role Change Action'},
  {id: 'rolechangedate', type: 'datetime', label: 'Role Change Date'},
  {id: 'salesrole', type: 'select', label: 'Sales Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'socialsecuritynumber', type: 'ssnumber', label: 'Social Security #'},
  {id: 'startdatetimeoffcalc', type: 'date', label: 'Start Date for Time-Off Calculations'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'supervisor', type: 'select', label: 'Supervisor'},
  {id: 'terminationcategory', type: 'select', label: 'Termination Category'},
  {id: 'terminationdetails', type: 'text', label: 'Termination Details'},
  {id: 'terminationreason', type: 'select', label: 'Termination Reason'},
  {id: 'terminationregretted', type: 'select', label: 'Termination Regretted'},
  {id: 'timeapprover', type: 'select', label: 'Time Approver'},
  {id: 'timeoffplan', type: 'text', label: 'Time-Off Plan'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'useperquest', type: 'checkbox', label: 'Include In US Payroll'},
  {id: 'usetimedata', type: 'checkbox', label: 'Use Time Data'},
  {id: 'visaexpdate', type: 'date', label: 'Visa Expiration Date'},
  {id: 'visatype', type: 'select', label: 'Visa Type'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'},
  {id: 'workplace', type: 'select', label: 'Workplace'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Entity (entity) Search Column values so they can be loaded dynamically. */
export const entitySearchColumnValues = [
{id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Entity Account Mapping (entityaccountmapping) Search Column values so they can be loaded dynamically. */
export const entityaccountmappingSearchColumnValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customdimension', type: 'select', label: 'Custom Dimension'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'destinationaccount', type: 'select', label: 'Destination Account'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityaccount', type: 'select', label: 'Entity Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'sourceaccount', type: 'select', label: 'Source Account'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Entity Group (entitygroup) Search Column values so they can be loaded dynamically. */
export const entitygroupSearchColumnValues = [
{id: 'email', type: 'email', label: 'Email'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'groupname', type: 'text', label: 'Name'},
  {id: 'grouptype', type: 'text', label: 'Type'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdynamic', type: 'checkbox', label: 'Dynamic'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ismanufacturingworkcenter', type: 'checkbox', label: 'Manufacturing Work Center'},
  {id: 'isprivate', type: 'checkbox', label: 'Private'},
  {id: 'laborresources', type: 'integer', label: 'Labor Resources'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'machineresources', type: 'integer', label: 'Machine Resources'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'savedsearch', type: 'text', label: 'Saved Search'},
  {id: 'size', type: 'integer', label: 'Size'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'}
];

/** Estimate (estimate) Search Column values so they can be loaded dynamically. */
export const estimateSearchColumnValues = [

];

/** Expense Category (expensecategory) Search Column values so they can be loaded dynamically. */
export const expensecategorySearchColumnValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Expense Report (expensereport) Search Column values so they can be loaded dynamically. */
export const expensereportSearchColumnValues = [

];

/** Fair Value Price (fairvalueprice) Search Column values so they can be loaded dynamically. */
export const fairvaluepriceSearchColumnValues = [
{id: 'currency', type: 'select', label: 'Currency'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fairvalue', type: 'float', label: 'Base Fair Value'},
  {id: 'fairvalueformula', type: 'select', label: 'Fair Value Formula'},
  {id: 'fairvaluerangepolicy', type: 'select', label: 'Fair Value Range Checking Policy'},
  {id: 'highvalue', type: 'float', label: 'High Value'},
  {id: 'highvaluepercent', type: 'percent', label: 'High Value Percent'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isvsoeprice', type: 'checkbox', label: 'Is VSOE?'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'itemrevenuecategory', type: 'select', label: 'Item Revenue Category'},
  {id: 'lowvalue', type: 'float', label: 'Low Value'},
  {id: 'lowvaluepercent', type: 'percent', label: 'Low Value Percent'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'units', type: 'select', label: 'Units'},
  {id: 'unitstype', type: 'select', label: 'Units Type'}
];

/** File (file) Search Column values so they can be loaded dynamically. */
export const fileSearchColumnValues = [
{id: 'availablewithoutlogin', type: 'checkbox', label: 'Available Without Login'},
  {id: 'created', type: 'datetime', label: 'Date Created'},
  {id: 'dateviewed', type: 'datetime', label: 'Date Viewed'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'documentsize', type: 'integer', label: 'Size (KB)'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'filetype', type: 'select', label: 'Type'},
  {id: 'folder', type: 'select', label: 'Folder'},
  {id: 'hits', type: 'integer', label: '# Times Viewed'},
  {id: 'hostedpath', type: 'text', label: 'Hosted Path'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isavailable', type: 'checkbox', label: 'Available'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'modified', type: 'datetime', label: 'Last Modified'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'url', type: 'text', label: 'URL'}
];

/** Fixed Amount Project Revenue Rule (fixedamountprojectrevenuerule) Search Column values so they can be loaded dynamically. */
export const fixedamountprojectrevenueruleSearchColumnValues = [
{id: 'chargerule', type: 'select', label: 'Charge Rule'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fixedamounttype', type: 'text', label: 'Recognize'},
  {id: 'fixedscheduletype', type: 'text', label: 'Recognize Based On'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'project', type: 'text', label: 'Project'},
  {id: 'revenuereconciled', type: 'checkbox', label: 'Revenue Reconciled'},
  {id: 'ruletype', type: 'text', label: 'Rule Type'},
  {id: 'serviceitem', type: 'select', label: 'Service Item'},
  {id: 'totalamounttorecognize', type: 'currency', label: 'Total Amount to Recognize'}
];

/** Folder (folder) Search Column values so they can be loaded dynamically. */
export const folderSearchColumnValues = [
{id: 'class', type: 'select', label: 'Class'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'foldersize', type: 'integer', label: 'Size (KB)'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'group', type: 'select', label: 'Group'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'numfiles', type: 'integer', label: '# of Files'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Fulfillment Request (fulfillmentrequest) Search Column values so they can be loaded dynamically. */
export const fulfillmentrequestSearchColumnValues = [

];

/** Generic Resource (genericresource) Search Column values so they can be loaded dynamically. */
export const genericresourceSearchColumnValues = [
{id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'laborcost', type: 'currency', label: 'Cost'},
  {id: 'laborprice', type: 'currency', label: 'Price'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'}
];

/** Gift Certificate (giftcertificate) Search Column values so they can be loaded dynamically. */
export const giftcertificateSearchColumnValues = [
{id: 'amountremaining', type: 'currency', label: 'Amount Available'},
  {id: 'amtavailbilled', type: 'currency', label: 'Amount Available (Billed)'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'To (Email)'},
  {id: 'expirationdate', type: 'date', label: 'Expiration Date'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'gcactive', type: 'checkbox', label: 'Active'},
  {id: 'giftcertcode', type: 'text', label: 'Gift Certificate Code'},
  {id: 'incomeacct', type: 'text', label: 'Income Account'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'liabilityacct', type: 'text', label: 'Liability Account'},
  {id: 'message', type: 'text', label: 'Gift Message'},
  {id: 'name', type: 'text', label: 'To (Name)'},
  {id: 'originalamount', type: 'currency', label: 'Amount'},
  {id: 'purchasedate', type: 'date', label: 'Purchase Date'},
  {id: 'sender', type: 'text', label: 'From (Name)'}
];

/** Gift Certificate Item (giftcertificateitem) Search Column values so they can be loaded dynamically. */
export const giftcertificateitemSearchColumnValues = [

];

/** Global Account Mapping (globalaccountmapping) Search Column values so they can be loaded dynamically. */
export const globalaccountmappingSearchColumnValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customdimension', type: 'select', label: 'Custom Dimension'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'destinationaccount', type: 'select', label: 'Destination Account'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'sourceaccount', type: 'select', label: 'Source Account'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Global Inventory Relationship (globalinventoryrelationship) Search Column values so they can be loaded dynamically. */
export const globalinventoryrelationshipSearchColumnValues = [
{id: 'alllocationscustomerreturn', type: 'checkbox', label: 'All Customer Return Locations'},
  {id: 'alllocationsfulfillment', type: 'checkbox', label: 'All Fulfillment Locations'},
  {id: 'allowcrosssubcustomerreturn', type: 'checkbox', label: 'Allow Cross-Subsidiary Customer Return'},
  {id: 'allowcrosssubfulfillment', type: 'checkbox', label: 'Allow Cross-Subsidiary Fulfillment'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'intercompanyactivitytype', type: 'select', label: 'Intercompany Activity Type'},
  {id: 'internalid', type: 'integer', label: 'Internal ID'},
  {id: 'inventorysubsidiary', type: 'select', label: 'Inventory Subsidiary'},
  {id: 'inventorysubsidiarynohierarchy', type: 'select', label: 'Inventory Subsidiary (no hierarchy)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'origsubsidiarynohierarchy', type: 'select', label: 'Originating Subsidiary (no hierarchy)'},
  {id: 'subsidiary', type: 'select', label: 'Originating Subsidiary'}
];

/** Inbound Shipment (inboundshipment) Search Column values so they can be loaded dynamically. */
export const inboundshipmentSearchColumnValues = [
{id: 'actualdeliverydate', type: 'date', label: 'Actual Delivery Date'},
  {id: 'actualshippingdate', type: 'date', label: 'Actual Shipping Date'},
  {id: 'billoflading', type: 'text', label: 'Bill Of Lading'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'currency', type: 'text', label: 'Currency'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'expecteddeliverydate', type: 'date', label: 'Expected Delivery Date'},
  {id: 'expectedrate', type: 'currency', label: 'Expected Rate'},
  {id: 'expectedshippingdate', type: 'date', label: 'Expected Shipping Date'},
  {id: 'externaldocumentnumber', type: 'text', label: 'External Document Number'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'incoterm', type: 'text', label: 'Incoterm'},
  {id: 'internalid', type: 'integer', label: 'Internal Id'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal Id Number'},
  {id: 'item', type: 'text', label: 'Item'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'poamount', type: 'currency', label: 'Amount'},
  {id: 'porate', type: 'currency', label: 'PO Rate'},
  {id: 'purchaseorder', type: 'text', label: 'PO'},
  {id: 'quantitybilled', type: 'float', label: 'Quantity Billed'},
  {id: 'quantityexpected', type: 'float', label: 'Quantity Expected'},
  {id: 'quantityreceived', type: 'float', label: 'Quantity Received'},
  {id: 'quantityremaining', type: 'float', label: 'Quantity Remaining'},
  {id: 'receivinglocation', type: 'text', label: 'Receiving Location'},
  {id: 'shipmentnumber', type: 'text', label: 'Shipment Number'},
  {id: 'status', type: 'text', label: 'Status'},
  {id: 'unit', type: 'text', label: 'Unit'},
  {id: 'vendor', type: 'text', label: 'Vendor'},
  {id: 'vesselnumber', type: 'text', label: 'Vessel Number'}
];

/** Intercompany Allocation Schedule (intercompallocationschedule) Search Column values so they can be loaded dynamically. */
export const intercompallocationscheduleSearchColumnValues = [

];

/** Intercompany Journal Entry (intercompanyjournalentry) Search Column values so they can be loaded dynamically. */
export const intercompanyjournalentrySearchColumnValues = [

];

/** Intercompany Transfer Order (intercompanytransferorder) Search Column values so they can be loaded dynamically. */
export const intercompanytransferorderSearchColumnValues = [

];

/** Inventory Adjustment (inventoryadjustment) Search Column values so they can be loaded dynamically. */
export const inventoryadjustmentSearchColumnValues = [

];

/** Inventory Cost Revaluation (inventorycostrevaluation) Search Column values so they can be loaded dynamically. */
export const inventorycostrevaluationSearchColumnValues = [

];

/** Inventory Count (inventorycount) Search Column values so they can be loaded dynamically. */
export const inventorycountSearchColumnValues = [

];

/** Inventory Detail (inventorydetail) Search Column values so they can be loaded dynamically. */
export const inventorydetailSearchColumnValues = [
{id: 'binnumber', type: 'select', label: 'Bin Number'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'inventorynumber', type: 'select', label: 'Number'},
  {id: 'quantity', type: 'float', label: 'Quantity'}
];

/** Inventory Part (inventoryitem) Search Column values so they can be loaded dynamically. */
export const inventoryitemSearchColumnValues = [

];

/** Inventory Number (inventorynumber) Search Column values so they can be loaded dynamically. */
export const inventorynumberSearchColumnValues = [
{id: 'expirationdate', type: 'date', label: 'Expiration Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'inventorynumber', type: 'select', label: 'Number'},
  {id: 'isonhand', type: 'checkbox', label: 'Is On Hand'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'quantityavailable', type: 'float', label: 'Available'},
  {id: 'quantityintransit', type: 'float', label: 'In Transit'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'},
  {id: 'quantityonorder', type: 'float', label: 'On Order'}
];

/** Inventory Number Bin (inventorynumberbin) Search Column values so they can be loaded dynamically. */
export const inventorynumberbinSearchColumnValues = [
{id: 'binnumber', type: 'select', label: 'Bin Number'},
  {id: 'inventorynumber', type: 'select', label: 'Inventory Number'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'quantityavailable', type: 'float', label: 'Available'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'}
];

/** Inventory Status (inventorystatus) Search Column values so they can be loaded dynamically. */
export const inventorystatusSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'inventoryavailable', type: 'checkbox', label: 'Make Inventory Available'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'state', type: 'text', label: 'State'}
];

/** Inventory Status Change (inventorystatuschange) Search Column values so they can be loaded dynamically. */
export const inventorystatuschangeSearchColumnValues = [

];

/** Inventory Transfer (inventorytransfer) Search Column values so they can be loaded dynamically. */
export const inventorytransferSearchColumnValues = [

];

/** Invoice (invoice) Search Column values so they can be loaded dynamically. */
export const invoiceSearchColumnValues = [

];

/** Issue (issue) Search Column values so they can be loaded dynamically. */
export const issueSearchColumnValues = [
{id: 'ageinmonths', type: 'integer', label: 'Age in Months'},
  {id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'buildbroken', type: 'select', label: 'Broken In Build'},
  {id: 'buildfixed', type: 'select', label: 'Fixed In Build'},
  {id: 'buildtarget', type: 'select', label: 'Target Build'},
  {id: 'casecount', type: 'integer', label: 'Case Count'},
  {id: 'casenumber', type: 'text', label: 'Case Number'},
  {id: 'closeddate', type: 'datetime', label: 'Date Closed'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'datereleased', type: 'date', label: 'Date Released'},
  {id: 'duplicateof', type: 'select', label: 'Duplicate Of'},
  {id: 'employeeorteam', type: 'select', label: 'Employee/Team'},
  {id: 'eventstatus', type: 'select', label: 'Base Status'},
  {id: 'externalabstract', type: 'text', label: 'External Abstract'},
  {id: 'externaldetails', type: 'text', label: 'External Details'},
  {id: 'externalfixedin', type: 'text', label: 'Fixed In Version (External)'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalstatus', type: 'select', label: 'External Status'},
  {id: 'fixed', type: 'datetime', label: 'Date Fixed'},
  {id: 'fixedby', type: 'select', label: 'Fixed By'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isowner', type: 'checkbox', label: 'I Own This Issue'},
  {id: 'isreviewed', type: 'checkbox', label: 'Reviewed'},
  {id: 'isshowstopper', type: 'select', label: 'Showstopper'},
  {id: 'issueabstract', type: 'text', label: 'Abstract'},
  {id: 'issuestatus', type: 'select', label: 'Status'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'module', type: 'text', label: 'Module'},
  {id: 'number', type: 'text', label: 'Number'},
  {id: 'originalfixedin', type: 'text', label: 'Last Version Fixed (pre-11)'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'product', type: 'select', label: 'Product'},
  {id: 'productteam', type: 'select', label: 'Product Team'},
  {id: 'reportedby', type: 'select', label: 'Reported By'},
  {id: 'reproduce', type: 'select', label: 'Reproduced'},
  {id: 'resolved', type: 'datetime', label: 'Date Resolved'},
  {id: 'resolvedby', type: 'select', label: 'Resolved By'},
  {id: 'reviewer', type: 'select', label: 'Reviewed By'},
  {id: 'severity', type: 'select', label: 'Severity'},
  {id: 'source', type: 'select', label: 'Source'},
  {id: 'tags', type: 'multiselect', label: 'Tags'},
  {id: 'type', type: 'text', label: 'Type'},
  {id: 'usertype', type: 'select', label: 'User Type'},
  {id: 'versionbroken', type: 'select', label: 'Broken In Version'},
  {id: 'versionfixed', type: 'select', label: 'Fixed In Version'},
  {id: 'versiontarget', type: 'select', label: 'Target Version'}
];

/** Product (issueproduct) Search Column values so they can be loaded dynamically. */
export const issueproductSearchColumnValues = [

];

/** Version (issueproductversion) Search Column values so they can be loaded dynamically. */
export const issueproductversionSearchColumnValues = [

];

/** Item (item) Search Column values so they can be loaded dynamically. */
export const itemSearchColumnValues = [
{id: 'accbookrevrecforecastrule', type: 'select', label: 'Accounting Book Rev Rec Forecast Rule'},
  {id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accountingbookamortization', type: 'select', label: 'Accounting Book Amortization Schedule'},
  {id: 'accountingbookcreateplanson', type: 'select', label: 'Accounting Book Create Revenue Plans On'},
  {id: 'accountingbookrevrecrule', type: 'select', label: 'Accounting Book Revenue Recognition Rule'},
  {id: 'accountingbookrevrecschedule', type: 'select', label: 'Accounting Book Rev. Rec. Schedule'},
  {id: 'alternatedemandsourceitem', type: 'text', label: 'Alternate Source Item'},
  {id: 'assetaccount', type: 'select', label: 'Asset Account'},
  {id: 'atpleadtime', type: 'float', label: 'ATP Lead Time'},
  {id: 'atpmethod', type: 'text', label: 'Default ATP Method'},
  {id: 'autoleadtime', type: 'checkbox', label: 'Auto Lead Time'},
  {id: 'autopreferredstocklevel', type: 'checkbox', label: 'Auto Stock Level'},
  {id: 'autoreorderpoint', type: 'checkbox', label: 'Auto Reorder Point'},
  {id: 'availabletopartners', type: 'checkbox', label: 'Available to Partners'},
  {id: 'averagecost', type: 'currency2', label: 'Average Cost'},
  {id: 'backwardconsumptiondays', type: 'integer', label: 'Backward Consumption Days'},
  {id: 'baseprice', type: 'currency2', label: 'Base Price'},
  {id: 'billexchratevarianceacct', type: 'select', label: 'Bill Exchange Rate Variance Account'},
  {id: 'billpricevarianceacct', type: 'select', label: 'Bill Price Variance Account'},
  {id: 'billqtyvarianceacct', type: 'select', label: 'Bill Quantity Variance Account'},
  {id: 'binnumber', type: 'text', label: 'Bin Number'},
  {id: 'binonhandavail', type: 'float', label: 'Bin On Hand Available'},
  {id: 'binonhandcount', type: 'float', label: 'Bin On Hand Count'},
  {id: 'bomquantity', type: 'float', label: 'BOM Quantity'},
  {id: 'buildentireassembly', type: 'checkbox', label: 'Build Sub-Assemblies'},
  {id: 'buildtime', type: 'float', label: 'Work Order Lead Time'},
  {id: 'buyitnowprice', type: 'currency', label: 'eBay Buy It Now Price'},
  {id: 'category', type: 'text', label: 'Category'},
  {id: 'categorynohierarchy', type: 'text', label: 'Category (no hierarchy)'},
  {id: 'categorypreferred', type: 'text', label: 'Category (preferred)'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'classnohierarchy', type: 'select', label: 'Class (no hierarchy)'},
  {id: 'componentyield', type: 'float', label: 'Component Yield'},
  {id: 'contingentrevenuehandling', type: 'checkbox', label: 'Eligible for Contingent Revenue Handling'},
  {id: 'copydescription', type: 'checkbox', label: 'Copy SO Descr.'},
  {id: 'correlateditem', type: 'select', label: 'Correlated Item'},
  {id: 'correlateditemcorrelation', type: 'float', label: 'Correlated Item Correlation'},
  {id: 'correlateditemcount', type: 'integer', label: 'Correlated Item Count'},
  {id: 'correlateditemlift', type: 'float', label: 'Correlated Item Lift'},
  {id: 'correlateditempurchaserate', type: 'float', label: 'Correlated Item Purchase Rate'},
  {id: 'cost', type: 'currency2', label: 'Purchase Price'},
  {id: 'costaccountingstatus', type: 'text', label: 'Cost Accounting Status'},
  {id: 'costcategory', type: 'text', label: 'Cost Category'},
  {id: 'costestimate', type: 'currency2', label: 'Item Defined Cost'},
  {id: 'costestimatetype', type: 'text', label: 'Cost Estimate Type'},
  {id: 'costingmethod', type: 'select', label: 'Costing Method'},
  {id: 'countryofmanufacture', type: 'text', label: 'Manufacturer Country'},
  {id: 'created', type: 'datetime', label: 'Date Created'},
  {id: 'createjob', type: 'checkbox', label: 'Create Job'},
  {id: 'createrevenueplanson', type: 'select', label: 'Create Revenue Plans On'},
  {id: 'currentstandardcost', type: 'currency2', label: 'Current Standard Cost'},
  {id: 'currentstdcosteffectivedate', type: 'date', label: 'Current Standard Cost Effective Date'},
  {id: 'custreturnvarianceaccount', type: 'select', label: 'Customer Return Variance Account'},
  {id: 'dateviewed', type: 'datetime', label: 'Date Viewed'},
  {id: 'daysbeforeexpiration', type: 'text', label: 'Days Before Expiration'},
  {id: 'defaultreturncost', type: 'currency2', label: 'Default Return Cost'},
  {id: 'deferredexpenseaccount', type: 'select', label: 'Deferred Expense Account'},
  {id: 'deferredrevenueaccount', type: 'select', label: 'Deferred Revenue Account'},
  {id: 'deferrevrec', type: 'checkbox', label: 'Hold Revenue Recognition'},
  {id: 'demandmodifier', type: 'percent', label: 'Expected Demand Change'},
  {id: 'demandsource', type: 'text', label: 'Demand Source'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'departmentnohierarchy', type: 'select', label: 'Department (no hierarchy)'},
  {id: 'directrevenueposting', type: 'checkbox', label: 'Direct Revenue Posting'},
  {id: 'displayinebaystore', type: 'checkbox', label: 'eBay Store'},
  {id: 'displayname', type: 'text', label: 'Display Name'},
  {id: 'distributioncategory', type: 'text', label: 'Distribution Category'},
  {id: 'distributionnetwork', type: 'text', label: 'Distribution Network'},
  {id: 'dontshowprice', type: 'checkbox', label: 'Don\'t Show Price'},
  {id: 'ebayitemdescription', type: 'clobtext', label: 'eBay Description'},
  {id: 'ebayitemsubtitle', type: 'text', label: 'eBay Subtitle'},
  {id: 'ebayitemtitle', type: 'text', label: 'eBay Title'},
  {id: 'ebayrelistingoption', type: 'text', label: 'eBay Relisting Option'},
  {id: 'effectivebomcontrol', type: 'text', label: 'Effective BOM Control'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'effectiverevision', type: 'select', label: 'Effective Revision'},
  {id: 'endauctionswhenoutofstock', type: 'checkbox', label: 'eBay End Auctions When Out of Stock'},
  {id: 'excludefromsitemap', type: 'checkbox', label: 'Exclude from Sitemap'},
  {id: 'expenseaccount', type: 'select', label: 'Expense/COGS Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'featureddescription', type: 'clobtext', label: 'Featured Description'},
  {id: 'feeddescription', type: 'text', label: 'Feed Description'},
  {id: 'feedname', type: 'text', label: 'Feed Name'},
  {id: 'fixedlotsize', type: 'float', label: 'Fixed Lot Size'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'forwardconsumptiondays', type: 'integer', label: 'Forward Consumption Days'},
  {id: 'fraudrisk', type: 'select', label: 'Fraud Risk'},
  {id: 'froogleproductfeed', type: 'checkbox', label: 'Google Base Product Feed'},
  {id: 'fxcost', type: 'currency2', label: 'Purchase Price (Foreign Currency)'},
  {id: 'gainlossaccount', type: 'select', label: 'Gain/Loss Account'},
  {id: 'generateaccruals', type: 'checkbox', label: 'Generate Accruals'},
  {id: 'giftcertauthcode', type: 'text', label: 'Gift Certificate Auth Code'},
  {id: 'giftcertemail', type: 'text', label: 'Gift Certificate To (Email)'},
  {id: 'giftcertexpirationdate', type: 'text', label: 'Gift Certificate Exp Date'},
  {id: 'giftcertfrom', type: 'text', label: 'Gift Certificate From (Name)'},
  {id: 'giftcertmessage', type: 'text', label: 'Gift Certificate Message'},
  {id: 'giftcertoriginalamount', type: 'text', label: 'Gift Certificate Orig Amount'},
  {id: 'giftcertrecipient', type: 'text', label: 'Gift Certificate To (Name)'},
  {id: 'hits', type: 'integer', label: '# Times Viewed'},
  {id: 'imageurl', type: 'text', label: 'Image URL'},
  {id: 'incomeaccount', type: 'select', label: 'Income Account'},
  {id: 'intercodefrevaccount', type: 'select', label: 'Intercompany Deferred Revenue Account'},
  {id: 'intercoexpenseaccount', type: 'select', label: 'Intercompany Expense/COGS Account'},
  {id: 'intercoincomeaccount', type: 'select', label: 'Intercompany Income Account'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'inventorylocation', type: 'select', label: 'Inventory Location'},
  {id: 'invtclassification', type: 'text', label: 'Inventory Classification'},
  {id: 'invtcountinterval', type: 'integer', label: 'Inventory Count Interval'},
  {id: 'isavailable', type: 'checkbox', label: 'Is Available?'},
  {id: 'isdropshipitem', type: 'checkbox', label: 'Drop Ship Item'},
  {id: 'isfulfillable', type: 'checkbox', label: 'Can be Fulfilled'},
  {id: 'isgcocompliant', type: 'checkbox', label: 'Google Checkout Compliant'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'islotitem', type: 'checkbox', label: 'Is Lot Numbered Item'},
  {id: 'isonline', type: 'checkbox', label: 'Display in Web Site'},
  {id: 'isserialitem', type: 'checkbox', label: 'Is Serialized Item'},
  {id: 'isspecialorderitem', type: 'checkbox', label: 'Special Order Item'},
  {id: 'isspecialworkorderitem', type: 'checkbox', label: 'Special Work Order Item'},
  {id: 'isstorepickupallowed', type: 'checkbox', label: 'Store Pickup Allowed'},
  {id: 'issueproduct', type: 'select', label: 'Product'},
  {id: 'istaxable', type: 'checkbox', label: 'Taxable'},
  {id: 'isvsoebundle', type: 'checkbox', label: 'Is VSOE Bundle?'},
  {id: 'iswip', type: 'checkbox', label: 'WIP'},
  {id: 'itemid', type: 'text', label: 'Name'},
  {id: 'itemurl', type: 'text', label: 'Item URL'},
  {id: 'lastinvtcountdate', type: 'date', label: 'Last Inventory Count Date'},
  {id: 'lastpurchaseprice', type: 'currency', label: 'Last Purchase Price'},
  {id: 'lastquantityavailablechange', type: 'datetime', label: 'Last Quantity Available Change'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'leadtime', type: 'integer', label: 'Lead Time'},
  {id: 'liabilityaccount', type: 'select', label: 'Liability Account'},
  {id: 'listingduration', type: 'text', label: 'eBay Duration'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationallowstorepickup', type: 'checkbox', label: 'Location Allow Store Pickup'},
  {id: 'locationatpleadtime', type: 'float', label: 'Location ATP Lead Time'},
  {id: 'locationaveragecost', type: 'currency2', label: 'Location Average Cost'},
  {id: 'locationbinquantityavailable', type: 'float', label: 'Location Bin Available'},
  {id: 'locationbuildtime', type: 'float', label: 'Location Work Order Lead Time'},
  {id: 'locationcost', type: 'currency', label: 'Location Standard Cost'},
  {id: 'locationcostaccountingstatus', type: 'text', label: 'Location Cost Accounting Status'},
  {id: 'locationdefaultreturncost', type: 'currency2', label: 'Location Default Return Cost'},
  {id: 'locationdemandsource', type: 'text', label: 'Location Demand Source'},
  {id: 'locationfixedlotsize', type: 'float', label: 'Location Fixed Lot Size'},
  {id: 'locationinvtclassification', type: 'text', label: 'Location Inventory Classification'},
  {id: 'locationinvtcountinterval', type: 'integer', label: 'Location Inventory Count Interval'},
  {id: 'locationlastinvtcountdate', type: 'date', label: 'Location Last Inventory Count Date'},
  {id: 'locationleadtime', type: 'integer', label: 'Location Lead Time'},
  {id: 'locationnextinvtcountdate', type: 'date', label: 'Location Next Inventory Count Date'},
  {id: 'locationnohierarchy', type: 'select', label: 'Location (no hierarchy)'},
  {id: 'locationpreferredstocklevel', type: 'float', label: 'Location Preferred Stock Level'},
  {id: 'locationqtyavailforstorepickup', type: 'float', label: 'Location Available for Store Pickup'},
  {id: 'locationquantityavailable', type: 'float', label: 'Location Available'},
  {id: 'locationquantitybackordered', type: 'float', label: 'Location Back Ordered'},
  {id: 'locationquantitycommitted', type: 'float', label: 'Location Committed'},
  {id: 'locationquantityintransit', type: 'float', label: 'Location In Transit'},
  {id: 'locationquantityonhand', type: 'float', label: 'Location On Hand'},
  {id: 'locationquantityonorder', type: 'float', label: 'Location On Order'},
  {id: 'locationreorderpoint', type: 'float', label: 'Location Reorder Point'},
  {id: 'locationsafetystocklevel', type: 'float', label: 'Location Safety Stock Level'},
  {id: 'locationstorepickupbufferstock', type: 'float', label: 'Location Store Pickup Buffer Stock'},
  {id: 'locationsupplylotsizingmethod', type: 'text', label: 'Location Supply Lot Sizing Method'},
  {id: 'locationsupplytype', type: 'text', label: 'Location Supply Type'},
  {id: 'locationtotalvalue', type: 'currency2', label: 'Location Total Value'},
  {id: 'manufacturer', type: 'text', label: 'Manufacturer'},
  {id: 'manufactureraddr1', type: 'text', label: 'Manufacturer Address'},
  {id: 'manufacturercity', type: 'text', label: 'Manufacturer City'},
  {id: 'manufacturerstate', type: 'text', label: 'Manufacturer State'},
  {id: 'manufacturertariff', type: 'text', label: 'Manufacturer Tariff'},
  {id: 'manufacturertaxid', type: 'text', label: 'Manufacturer Tax Id'},
  {id: 'manufacturerzip', type: 'text', label: 'Manufacturer Zip'},
  {id: 'matchbilltoreceipt', type: 'checkbox', label: 'Match Bill To Receipt'},
  {id: 'maximumquantity', type: 'text', label: 'Maximum Quantity'},
  {id: 'memberitem', type: 'select', label: 'Member Item'},
  {id: 'memberquantity', type: 'float', label: 'Member Quantity'},
  {id: 'metataghtml', type: 'clobtext', label: 'Meta Tag Html'},
  {id: 'minimumquantity', type: 'text', label: 'Minimum Quantity'},
  {id: 'modified', type: 'datetime', label: 'Last Modified'},
  {id: 'mossapplies', type: 'checkbox', label: 'MOSS Applies'},
  {id: 'mpn', type: 'text', label: 'MPN'},
  {id: 'multmanufactureaddr', type: 'checkbox', label: 'Multiple Manufacture Addresses'},
  {id: 'nextagcategory', type: 'text', label: 'NexTag Category'},
  {id: 'nextagproductfeed', type: 'checkbox', label: 'NexTag Product Feed'},
  {id: 'nextinvtcountdate', type: 'date', label: 'Next Inventory Count Date'},
  {id: 'nopricemessage', type: 'text', label: 'No Price Message'},
  {id: 'numactivelistings', type: 'integer', label: 'eBay Active Listings'},
  {id: 'numberalloweddownloads', type: 'text', label: 'Number of Allowed Downloads'},
  {id: 'numcurrentlylisted', type: 'integer', label: 'eBay Quantity Currently Listed'},
  {id: 'obsoletedate', type: 'date', label: 'Obsolete Date'},
  {id: 'obsoleterevision', type: 'select', label: 'Obsolete Revision'},
  {id: 'offersupport', type: 'checkbox', label: 'Offer Support'},
  {id: 'onlinecustomerprice', type: 'currency', label: 'Online Customer Price'},
  {id: 'onlineprice', type: 'currency', label: 'Online Price'},
  {id: 'onspecial', type: 'checkbox', label: 'On Special'},
  {id: 'otherprices', type: 'currency', label: 'Other Prices'},
  {id: 'othervendor', type: 'select', label: 'Vendor'},
  {id: 'outofstockbehavior', type: 'text', label: 'Out Of Stock Behavior'},
  {id: 'outofstockmessage', type: 'text', label: 'Out Of Stock Message'},
  {id: 'overallquantitypricingtype', type: 'select', label: 'Overall Qty. Pricing Type'},
  {id: 'pagetitle', type: 'textarea', label: 'Page Title'},
  {id: 'parent', type: 'select', label: 'Parent'},
  {id: 'preferencecriterion', type: 'text', label: 'Preference Criterion'},
  {id: 'preferredbin', type: 'checkbox', label: 'Preferred Bin'},
  {id: 'preferredlocation', type: 'select', label: 'Preferred Location'},
  {id: 'preferredstocklevel', type: 'float', label: 'Preferred Stock Level'},
  {id: 'preferredstockleveldays', type: 'integer', label: 'Days Supply'},
  {id: 'pricesincludetax', type: 'checkbox', label: 'Prices Include Tax'},
  {id: 'pricinggroup', type: 'select', label: 'Pricing Group'},
  {id: 'primarycategory', type: 'text', label: 'eBay Category Id'},
  {id: 'prodpricevarianceacct', type: 'select', label: 'Production Price Variance Account'},
  {id: 'prodqtyvarianceacct', type: 'select', label: 'Production Quantity Variance Account'},
  {id: 'purchasedescription', type: 'text', label: 'Purchase Description'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'purchasepricevarianceacct', type: 'select', label: 'Purchase Price Variance Account'},
  {id: 'purchaseunit', type: 'select', label: 'Purchase Unit'},
  {id: 'quantityavailable', type: 'float', label: 'Available'},
  {id: 'quantitybackordered', type: 'float', label: 'Back Ordered'},
  {id: 'quantitycommitted', type: 'float', label: 'Committed'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'},
  {id: 'quantityonorder', type: 'float', label: 'On Order'},
  {id: 'quantitypricingschedule', type: 'select', label: 'Quantity Pricing Schedule'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'reordermultiple', type: 'integer', label: 'Reorder Multiple'},
  {id: 'reorderpoint', type: 'float', label: 'Reorder Point'},
  {id: 'reserveprice', type: 'currency', label: 'eBay Reserve Price'},
  {id: 'revrecforecastrule', type: 'select', label: 'Rev Rec Forecast Rule'},
  {id: 'revreclassfxaccount', type: 'select', label: 'Foreign Currency Adjustment Account'},
  {id: 'revrecschedule', type: 'select', label: 'Rev. Rec. Schedule'},
  {id: 'roundupascomponent', type: 'checkbox', label: 'Round Up Quantity as Component'},
  {id: 'safetystocklevel', type: 'float', label: 'Safety Stock Level'},
  {id: 'safetystockleveldays', type: 'integer', label: 'Safety Stock Days'},
  {id: 'salesdescription', type: 'text', label: 'Description'},
  {id: 'salestaxcode', type: 'select', label: 'Tax Code'},
  {id: 'saleunit', type: 'select', label: 'Sale Unit'},
  {id: 'sameasprimarybookamortization', type: 'checkbox', label: 'Same as Primary Book Amortization'},
  {id: 'sameasprimarybookrevrec', type: 'checkbox', label: 'Same as Primary Book Rev. Rec.'},
  {id: 'schedulebcode', type: 'text', label: 'Schedule B Code'},
  {id: 'schedulebnumber', type: 'text', label: 'Schedule B Number'},
  {id: 'schedulebquantity', type: 'text', label: 'Schedule B Quantity'},
  {id: 'scrapacct', type: 'select', label: 'Scrap Account'},
  {id: 'searchkeywords', type: 'text', label: 'Search Keywords'},
  {id: 'seasonaldemand', type: 'checkbox', label: 'Seasonal Demand'},
  {id: 'sellonebay', type: 'checkbox', label: 'eBay Auction'},
  {id: 'serialnumber', type: 'text', label: 'Serial/Lot Number'},
  {id: 'serialnumberlocation', type: 'text', label: 'Serial/Lot Number Location'},
  {id: 'shipindividually', type: 'checkbox', label: 'Ships Individually'},
  {id: 'shippackage', type: 'select', label: 'Shipping Package'},
  {id: 'shippingrate', type: 'currency', label: 'Shipping Rate'},
  {id: 'shoppingdotcomcategory', type: 'text', label: 'Shopping.com Category'},
  {id: 'shoppingproductfeed', type: 'checkbox', label: 'Shopping.com Product Feed'},
  {id: 'shopzillacategoryid', type: 'integer', label: 'Shopzilla Category Id'},
  {id: 'shopzillaproductfeed', type: 'checkbox', label: 'Shopzilla Product Feed'},
  {id: 'sitemappriority', type: 'float', label: 'Sitemap Priority'},
  {id: 'softdescriptor', type: 'select', label: 'Soft Descriptor'},
  {id: 'startingprice', type: 'currency', label: 'eBay Starting Price'},
  {id: 'stockdescription', type: 'text', label: 'Stock Description'},
  {id: 'stockunit', type: 'select', label: 'Stock Unit'},
  {id: 'storedescription', type: 'text', label: 'Store Description'},
  {id: 'storedetaileddescription', type: 'clobtext', label: 'Detailed Description'},
  {id: 'storedisplayimage', type: 'select', label: 'Store Display Image'},
  {id: 'storedisplayname', type: 'text', label: 'Store Display Name'},
  {id: 'storedisplaythumbnail', type: 'select', label: 'Store Display Thumbnail'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'subtype', type: 'text', label: 'SubType'},
  {id: 'supplylotsizingmethod', type: 'text', label: 'Supply Lot Sizing Method'},
  {id: 'supplyreplenishmentmethod', type: 'text', label: 'Replenishment Method'},
  {id: 'supplytype', type: 'text', label: 'Supply Type'},
  {id: 'taxschedule', type: 'select', label: 'Tax Schedule'},
  {id: 'thumbnailurl', type: 'text', label: 'Thumbnail URL'},
  {id: 'totalvalue', type: 'currency2', label: 'Total Value'},
  {id: 'tracklandedcost', type: 'checkbox', label: 'Track Landed Cost'},
  {id: 'transferprice', type: 'currency2', label: 'Transfer Price'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unbuildvarianceaccount', type: 'select', label: 'Unbuild Variance Account'},
  {id: 'unitstype', type: 'select', label: 'Units Type'},
  {id: 'upccode', type: 'text', label: 'UPC Code'},
  {id: 'urlcomponent', type: 'text', label: 'URL Component'},
  {id: 'usebins', type: 'checkbox', label: 'Use Bins'},
  {id: 'usecomponentyield', type: 'checkbox', label: 'Use Component Yield'},
  {id: 'usemarginalrates', type: 'checkbox', label: 'Use Marginal Rates'},
  {id: 'vendor', type: 'select', label: 'Preferred Vendor'},
  {id: 'vendorcode', type: 'text', label: 'Vendor Code'},
  {id: 'vendorcost', type: 'currency', label: 'Vendor Price'},
  {id: 'vendorcostentered', type: 'currency', label: 'Vendor Price (Entered)'},
  {id: 'vendorname', type: 'text', label: 'Vendor Name'},
  {id: 'vendorpricecurrency', type: 'text', label: 'Vendor Price Currency'},
  {id: 'vendorschedule', type: 'select', label: 'Vendor Schedule'},
  {id: 'vendreturnvarianceaccount', type: 'select', label: 'Vendor Return Variance Account'},
  {id: 'vsoedeferral', type: 'select', label: 'Deferral'},
  {id: 'vsoedelivered', type: 'checkbox', label: 'Default as Delivered'},
  {id: 'vsoepermitdiscount', type: 'select', label: 'Permit Discount'},
  {id: 'vsoeprice', type: 'currency2', label: 'VSOE Price'},
  {id: 'vsoesopgroup', type: 'checkbox', label: 'Allocation Type'},
  {id: 'website', type: 'select', label: 'Web Site'},
  {id: 'weight', type: 'float', label: 'Weight'},
  {id: 'weightunit', type: 'select', label: 'Weight Units'},
  {id: 'wipacct', type: 'select', label: 'WIP Account'},
  {id: 'wipvarianceacct', type: 'select', label: 'WIP Cost Variance Account'},
  {id: 'yahooproductfeed', type: 'checkbox', label: 'Yahoo Shopping Product Feed'}
];

/** Item Account Mapping (itemaccountmapping) Search Column values so they can be loaded dynamically. */
export const itemaccountmappingSearchColumnValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customdimension', type: 'select', label: 'Custom Dimension'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'destinationaccount', type: 'select', label: 'Destination Account'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'itemaccount', type: 'select', label: 'Item Account'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'sourceaccount', type: 'select', label: 'Source Account'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Item Bin Number (itembinnumber) Search Column values so they can be loaded dynamically. */
export const itembinnumberSearchColumnValues = [
{id: 'binnumber', type: 'select', label: 'Bin Number'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'quantityavailable', type: 'float', label: 'Available'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'}
];

/** Item Demand Plan (itemdemandplan) Search Column values so they can be loaded dynamically. */
export const itemdemandplanSearchColumnValues = [
{id: 'alternatesourceitem', type: 'select', label: 'Last Alternate Source Item'},
  {id: 'analysisduration', type: 'integer', label: 'Last Historical Analysis Duration'},
  {id: 'demanddate', type: 'date', label: 'Demand Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Plan Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'projectionduration', type: 'integer', label: 'Last Projection Duration'},
  {id: 'projectioninterval', type: 'text', label: 'Last Projection Interval'},
  {id: 'projectionmethod', type: 'text', label: 'Last Projection Method'},
  {id: 'projectionstartdate', type: 'date', label: 'Last Projection Start Date'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'quantityuom', type: 'float', label: 'Quantity in Demand Plan Units'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'units', type: 'select', label: 'Units'}
];

/** Item Fulfillment (itemfulfillment) Search Column values so they can be loaded dynamically. */
export const itemfulfillmentSearchColumnValues = [

];

/** Item Group (itemgroup) Search Column values so they can be loaded dynamically. */
export const itemgroupSearchColumnValues = [

];

/** Item Location Configuration (itemlocationconfiguration) Search Column values so they can be loaded dynamically. */
export const itemlocationconfigurationSearchColumnValues = [
{id: 'atpleadtime', type: 'integer', label: 'ATP Lead Time'},
  {id: 'backwardconsumptiondays', type: 'integer', label: 'Backward Consumption Days'},
  {id: 'buildtime', type: 'float', label: 'Work Order Lead Time'},
  {id: 'cost', type: 'currency2', label: 'Standard Cost'},
  {id: 'costinglotsize', type: 'float', label: 'Costing Lot Size'},
  {id: 'defaultreturncost', type: 'currency2', label: 'Default Return Cost'},
  {id: 'demandsource', type: 'text', label: 'Demand Source'},
  {id: 'demandtimefence', type: 'integer', label: 'Demand Time Fence'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fixedlotsize', type: 'float', label: 'Fixed Lot Size'},
  {id: 'forwardconsumptiondays', type: 'integer', label: 'Forward Consumption Days'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'inventorycosttemplate', type: 'text', label: 'Inventory Cost Template'},
  {id: 'invtclassification', type: 'text', label: 'Inventory Classification'},
  {id: 'invtcountinterval', type: 'integer', label: 'Inventory Count Interval'},
  {id: 'isautolocassignmentallowed', type: 'checkbox', label: 'Auto Loc. Assignment Allowed'},
  {id: 'isautolocassignmentsuspended', type: 'checkbox', label: 'Auto Loc. Assignment Suspended'},
  {id: 'iswip', type: 'checkbox', label: 'WIP'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'leadtime', type: 'integer', label: 'Lead Time'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationallowstorepickup', type: 'checkbox', label: 'Allow Store Pickup'},
  {id: 'locationstorepickupbufferstock', type: 'integer', label: 'Buffer Stock'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nextinvtcountdate', type: 'date', label: 'Next Inventory Count Date'},
  {id: 'periodiclotsizedays', type: 'integer', label: 'Periods of Supply Increment'},
  {id: 'periodiclotsizetype', type: 'text', label: 'Periods of Supply Type'},
  {id: 'poreceiptcost', type: 'currency2', label: 'PO Receipt Cost'},
  {id: 'preferredstocklevel', type: 'float', label: 'Preferred Stock Level'},
  {id: 'reorderpoint', type: 'float', label: 'Reorder Point'},
  {id: 'rescheduleindays', type: 'integer', label: 'Reschedule In Days'},
  {id: 'rescheduleoutdays', type: 'integer', label: 'Reschedule Out Days'},
  {id: 'safetystocklevel', type: 'float', label: 'Safety Stock Level'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'supplylotsizingmethod', type: 'text', label: 'Lot Sizing Method'},
  {id: 'supplytimefence', type: 'integer', label: 'Planning Time Fence'},
  {id: 'supplytype', type: 'text', label: 'Supply Type'}
];

/** Item Receipt (itemreceipt) Search Column values so they can be loaded dynamically. */
export const itemreceiptSearchColumnValues = [

];

/** Item Revision (itemrevision) Search Column values so they can be loaded dynamically. */
export const itemrevisionSearchColumnValues = [
{id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'inactive'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'obsoletedate', type: 'date', label: 'Obsolete Date'}
];

/** Item Supply Plan (itemsupplyplan) Search Column values so they can be loaded dynamically. */
export const itemsupplyplanSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Plan Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'ordercreated', type: 'checkbox', label: 'Order Created'},
  {id: 'orderdate', type: 'date', label: 'Order Date'},
  {id: 'ordertype', type: 'select', label: 'Order Type'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'quantityuom', type: 'float', label: 'Quantity in Supply Plan Units'},
  {id: 'receiptdate', type: 'date', label: 'Receipt Date'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'units', type: 'select', label: 'Units'}
];

/** Project (job) Search Column values so they can be loaded dynamically. */
export const jobSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'actualtime', type: 'float', label: 'Actual Work'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'allocatepayrollexpenses', type: 'checkbox', label: 'Allocate Payroll Expenses'},
  {id: 'allowallresourcesfortasks', type: 'checkbox', label: 'Display All Resources for ProjectTask Assignment'},
  {id: 'allowexpenses', type: 'checkbox', label: 'Allow Expenses'},
  {id: 'allowtime', type: 'checkbox', label: 'Allow Time Entry'},
  {id: 'altcontact', type: 'text', label: 'Alt. Contact'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'bbudgetusecalculatedvalues', type: 'checkbox', label: 'Use Calculated Values for all Billing Budgets'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'calculatedenddate', type: 'date', label: 'Calculated End Date'},
  {id: 'calculatedenddatebaseline', type: 'date', label: 'Calculated End Date Baseline'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cbudgetlaborbudgetfromalloc', type: 'checkbox', label: 'Calculate Labor Budgets from Resource Allocations'},
  {id: 'cbudgetusecalculatedvalues', type: 'checkbox', label: 'Use Calculated Values for all Cost Budgets'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Job Name'},
  {id: 'contact', type: 'text', label: 'Primary Contact'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'enddate', type: 'date', label: 'Actual End Date'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'estimatedgrossprofit', type: 'currency', label: 'Estimated Gross Profit'},
  {id: 'estimatedgrossprofitpercent', type: 'percent', label: 'Estimated Gross Profit %'},
  {id: 'estimatedlaborcost', type: 'currency', label: 'Estimated Labor Cost'},
  {id: 'estimatedlaborcostbaseline', type: 'currency', label: 'Estimated Labor Cost Baseline'},
  {id: 'estimatedlaborrevenue', type: 'currency', label: 'Estimated Labor Revenue'},
  {id: 'estimatedrevenue', type: 'currency', label: 'Estimated Revenue'},
  {id: 'estimatedtime', type: 'float', label: 'Initial Time Budget'},
  {id: 'estimatedtimeoverride', type: 'float', label: 'Estimated Work'},
  {id: 'estimatedtimeoverridebaseline', type: 'float', label: 'Estimated Work Baseline'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'includecrmtasksintotals', type: 'checkbox', label: 'Include CRM Tasks in Job Totals'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isexempttime', type: 'checkbox', label: 'Classify Time as Exempt'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isproductivetime', type: 'checkbox', label: 'Classify Time as Productive'},
  {id: 'isutilizedtime', type: 'checkbox', label: 'Classify Time as Utilized'},
  {id: 'jobbillingtype', type: 'select', label: 'Billing Type'},
  {id: 'jobitem', type: 'select', label: 'Billing Item'},
  {id: 'jobprice', type: 'currency', label: 'Job Price'},
  {id: 'jobresource', type: 'select', label: 'Job Resource'},
  {id: 'jobresourcerole', type: 'select', label: 'Job Resource Role'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastbaselinedate', type: 'date', label: 'Last Baseline Date'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'limittimetoassignees', type: 'checkbox', label: 'Limit Time and Expenses to Resources'},
  {id: 'materializetime', type: 'checkbox', label: 'Create Planned Time Entries'},
  {id: 'percentcomplete', type: 'percent', label: 'Percent Complete'},
  {id: 'percenttimecomplete', type: 'percent', label: 'Percent Time Complete'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'projectedenddate', type: 'date', label: 'Projected End Date'},
  {id: 'projectedenddatebaseline', type: 'date', label: 'Projected End Date Baseline'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'startdatebaseline', type: 'date', label: 'Start Date Baseline'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'timeapproval', type: 'select', label: 'Time Approval'},
  {id: 'timeremaining', type: 'float', label: 'Remaining Work'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Job Status (jobstatus) Search Column values so they can be loaded dynamically. */
export const jobstatusSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Job Type (jobtype) Search Column values so they can be loaded dynamically. */
export const jobtypeSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parent', type: 'select', label: 'Parent'}
];

/** Journal Entry (journalentry) Search Column values so they can be loaded dynamically. */
export const journalentrySearchColumnValues = [

];

/** Kit Item (kititem) Search Column values so they can be loaded dynamically. */
export const kititemSearchColumnValues = [

];

/** Labor Based Project Revenue Rule (laborbasedprojectrevenuerule) Search Column values so they can be loaded dynamically. */
export const laborbasedprojectrevenueruleSearchColumnValues = [
{id: 'billingratecard', type: 'text', label: 'Billing Rate Card'},
  {id: 'chargerule', type: 'select', label: 'Charge Rule'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'project', type: 'text', label: 'Project'},
  {id: 'ratemultiplier', type: 'posfloat', label: 'Rule Multiplier'},
  {id: 'rateroundingtype', type: 'text', label: 'Time Rounding'},
  {id: 'ratesourcetype', type: 'text', label: 'Rate Source'},
  {id: 'revenuereconciled', type: 'checkbox', label: 'Revenue Reconciled'},
  {id: 'ruletype', type: 'text', label: 'Rule Type'},
  {id: 'serviceitem', type: 'select', label: 'Service Item'},
  {id: 'totalamounttorecognize', type: 'currency', label: 'Total Amount to Recognize'}
];

/** Landed Cost (landedcost) Search Column values so they can be loaded dynamically. */
export const landedcostSearchColumnValues = [

];

/** Lead (lead) Search Column values so they can be loaded dynamically. */
export const leadSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altcontact', type: 'text', label: 'Alt. Contact'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'assignedsite', type: 'select', label: 'Assigned Web Site'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'buyingreason', type: 'text', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'text', label: 'Buying Time Frame'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'mmyydate', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccinternalid', type: 'text', label: 'Credit Card Internal ID'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'select', label: 'Primary Contact'},
  {id: 'contribution', type: 'percent', label: 'Contribution %'},
  {id: 'contributionprimary', type: 'percent', label: 'Primary Sales Rep Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'draccount', type: 'text', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxaccount', type: 'text', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'grouppricinglevel', type: 'text', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itempricinglevel', type: 'text', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'jobenddate', type: 'date', label: 'Job Actual End'},
  {id: 'jobprojectedend', type: 'date', label: 'Job Projected End'},
  {id: 'jobstartdate', type: 'date', label: 'Job Start'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformdate', type: 'text', label: 'Online Form History - Date'},
  {id: 'onlineformleadsource', type: 'text', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'text', label: 'Online Form History - Form Name'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Top Level Parent'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'percent', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'text', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'prefccprocessor', type: 'select', label: 'Credit Card Processor'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'text', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'text', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'receivablesaccount', type: 'text', label: 'Default Receivables Account'},
  {id: 'reminderdays', type: 'integer', label: 'Reminder Days'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'text', label: 'Role'},
  {id: 'salesreadiness', type: 'text', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'sourcesite', type: 'select', label: 'Source Website'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'taxitem', type: 'select', label: 'Tax Item'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'text', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Location (location) Search Column values so they can be loaded dynamically. */
export const locationSearchColumnValues = [
{id: 'allowstorepickup', type: 'checkbox', label: 'Allow Store Pickup'},
  {id: 'autoassignmentregionsetting', type: 'text', label: 'Auto-Assigning This Location'},
  {id: 'bufferstock', type: 'integer', label: 'Buffer Stock'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'text', label: 'Country'},
  {id: 'dailyshippingcapacity', type: 'integer', label: 'Daily Shipping Capacity'},
  {id: 'endtime', type: 'timeofday', label: 'End Time'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'geolocationmethod', type: 'select', label: 'Geolocation Method'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isfriday', type: 'checkbox', label: 'Friday'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ismonday', type: 'checkbox', label: 'Monday'},
  {id: 'isoffice', type: 'checkbox', label: 'Staffed Location'},
  {id: 'issaturday', type: 'checkbox', label: 'Saturday'},
  {id: 'issunday', type: 'checkbox', label: 'Sunday'},
  {id: 'isthursday', type: 'checkbox', label: 'Thursday'},
  {id: 'istuesday', type: 'checkbox', label: 'Tuesday'},
  {id: 'iswednesday', type: 'checkbox', label: 'Wednesday'},
  {id: 'locationtype', type: 'text', label: 'Location Type'},
  {id: 'makeinventoryavailable', type: 'checkbox', label: 'Make Inventory Available'},
  {id: 'makeinventoryavailablestore', type: 'checkbox', label: 'Make Inventory Available in Web Store'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'namenohierarchy', type: 'text', label: 'Name (no hierarchy)'},
  {id: 'nextpickupcutofftime', type: 'datetime', label: 'Next Pickup Cut-Off Time'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'samedaypickupcutofftime', type: 'timeofday', label: 'Same Day Pickup Cut-Off Time'},
  {id: 'starttime', type: 'timeofday', label: 'Start Time'},
  {id: 'state', type: 'text', label: 'State/Province'},
  {id: 'storepickupbufferstock', type: 'float', label: 'Store Pickup Buffer Stock'},
  {id: 'subsidiary', type: 'multiselect', label: 'Subsidiary'},
  {id: 'totalshippingcapacity', type: 'integer', label: 'Total Shipping Capacity'},
  {id: 'tranprefix', type: 'text', label: 'Transaction Prefix'},
  {id: 'usesbins', type: 'checkbox', label: 'Use Bins'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Lot Numbered Build/Assembly Item (lotnumberedassemblyitem) Search Column values so they can be loaded dynamically. */
export const lotnumberedassemblyitemSearchColumnValues = [

];

/** Lot Numbered Inventory Item (lotnumberedinventoryitem) Search Column values so they can be loaded dynamically. */
export const lotnumberedinventoryitemSearchColumnValues = [

];

/** Manufacturing Cost Template (manufacturingcosttemplate) Search Column values so they can be loaded dynamically. */
export const manufacturingcosttemplateSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Manufacturing Operation Task (manufacturingoperationtask) Search Column values so they can be loaded dynamically. */
export const manufacturingoperationtaskSearchColumnValues = [
{id: 'actualruntime', type: 'float', label: 'Actual Run Time'},
  {id: 'actualsetuptime', type: 'float', label: 'Actual Setup Time'},
  {id: 'completedquantity', type: 'float', label: 'Completed Quantity'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedwork', type: 'float', label: 'Estimated Work'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'inputquantity', type: 'float', label: 'Input Quantity'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'laborresources', type: 'integer', label: 'Labor Resources'},
  {id: 'lagamount', type: 'float', label: 'Lag Amount'},
  {id: 'lagtype', type: 'text', label: 'Lag Type'},
  {id: 'lagunits', type: 'text', label: 'Lag Units'},
  {id: 'machineresources', type: 'integer', label: 'Machine Resources'},
  {id: 'manufacturingcosttemplate', type: 'select', label: 'Manufacturing Cost Template'},
  {id: 'manufacturingworkcenter', type: 'select', label: 'Manufacturing Work Center'},
  {id: 'message', type: 'text', label: 'Notes'},
  {id: 'name', type: 'text', label: 'Operation Name'},
  {id: 'order', type: 'float', label: 'Order'},
  {id: 'predecessor', type: 'select', label: 'Predecessor'},
  {id: 'predecessortype', type: 'text', label: 'Predecessor Type'},
  {id: 'remainingquantity', type: 'float', label: 'Remaining Quantity'},
  {id: 'runrate', type: 'float', label: 'Run Rate (Min/Unit)'},
  {id: 'runtime', type: 'float', label: 'Run Time'},
  {id: 'sequence', type: 'integer', label: 'Operation Sequence'},
  {id: 'setuptime', type: 'float', label: 'Setup Time (Min)'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'workorder', type: 'text', label: 'Work Order'}
];

/** Manufacturing Routing (manufacturingrouting) Search Column values so they can be loaded dynamically. */
export const manufacturingroutingSearchColumnValues = [
{id: 'autocalculatelag', type: 'checkbox', label: 'Auto-calculate Lag'},
  {id: 'billofmaterials', type: 'select', label: 'Bill of Materials'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefault', type: 'checkbox', label: 'Default'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lagamount', type: 'float', label: 'Lag Amount'},
  {id: 'lagtype', type: 'text', label: 'Lag Type'},
  {id: 'lagunits', type: 'text', label: 'Lag Units'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'manufacturingcosttemplate', type: 'select', label: 'Manufacturing Cost Template'},
  {id: 'manufacturingworkcenter', type: 'select', label: 'Manufacturing Work Center'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'operationname', type: 'text', label: 'Operation Name'},
  {id: 'operationyield', type: 'percent', label: 'Operation Yield'},
  {id: 'runrate', type: 'float', label: 'Run Rate'},
  {id: 'sequence', type: 'integer', label: 'Operation Sequence'},
  {id: 'setuptime', type: 'float', label: 'Setup Time'}
];

/** Map/Reduce Script (mapreducescript) Search Column values so they can be loaded dynamically. */
export const mapreducescriptSearchColumnValues = [
{id: 'apiversion', type: 'text', label: 'API Version'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'}
];

/** Markup Item (markupitem) Search Column values so they can be loaded dynamically. */
export const markupitemSearchColumnValues = [

];

/** Massupdate Script (massupdatescript) Search Column values so they can be loaded dynamically. */
export const massupdatescriptSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Merchandise Hierarchy Level (merchandisehierarchylevel) Search Column values so they can be loaded dynamically. */
export const merchandisehierarchylevelSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'rank', type: 'integer', label: 'Rank'}
];

/** Merchandise Hierarchy Node (merchandisehierarchynode) Search Column values so they can be loaded dynamically. */
export const merchandisehierarchynodeSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'hierarchylevel', type: 'text', label: 'Hierarchy Level'},
  {id: 'hierarchyversion', type: 'text', label: 'Hierarchy Version'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parentnode', type: 'text', label: 'Hierarchy Parent Node'}
];

/** Merchandise Hierarchy Version (merchandisehierarchyversion) Search Column values so they can be loaded dynamically. */
export const merchandisehierarchyversionSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'hierarchylevel', type: 'text', label: 'Hierarchy Level'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Message (message) Search Column values so they can be loaded dynamically. */
export const messageSearchColumnValues = [
{id: 'author', type: 'select', label: 'Author'},
  {id: 'authoremail', type: 'text', label: 'Author Email'},
  {id: 'bcc', type: 'email', label: 'Bcc'},
  {id: 'cc', type: 'email', label: 'Cc'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'hasattachment', type: 'checkbox', label: 'Files'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalonly', type: 'checkbox', label: 'Internal Only'},
  {id: 'isemailed', type: 'checkbox', label: 'Email Sent'},
  {id: 'isincoming', type: 'checkbox', label: 'Is Incoming'},
  {id: 'message', type: 'clobtext', label: 'Message'},
  {id: 'messagedate', type: 'datetime', label: 'Date'},
  {id: 'messagetype', type: 'select', label: 'Type'},
  {id: 'recipient', type: 'select', label: 'Recipient'},
  {id: 'recipientemail', type: 'text', label: 'Recipient Email'},
  {id: 'subject', type: 'text', label: 'Subject'},
  {id: 'view', type: 'text', label: 'View'}
];

/** Manufacturing Planned Time (mfgplannedtime) Search Column values so they can be loaded dynamically. */
export const mfgplannedtimeSearchColumnValues = [
{id: 'date', type: 'date', label: 'Date'},
  {id: 'duration', type: 'text', label: 'Duration'},
  {id: 'durationdecimal', type: 'float', label: 'Duration (Decimal)'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'manufacturingworkcenter', type: 'text', label: 'Manufacturing Work Center'},
  {id: 'operation', type: 'text', label: 'Operation'}
];

/** MSE Subsidiary (msesubsidiary) Search Column values so they can be loaded dynamically. */
export const msesubsidiarySearchColumnValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accountingbookcurrency', type: 'select', label: 'Accounting Book Currency'},
  {id: 'address1', type: 'text', label: 'Address 1'},
  {id: 'address2', type: 'text', label: 'Address 2'},
  {id: 'address3', type: 'text', label: 'Address 3'},
  {id: 'anonymouscustomerinboundemail', type: 'text', label: 'Anonymous Customer - Inbound Email'},
  {id: 'anonymouscustomeronlineforms', type: 'text', label: 'Anonymous Customer - Online Forms'},
  {id: 'caseassignmenttemplate', type: 'text', label: 'Employee Notification Template - Case Assignment'},
  {id: 'caseautomaticclosuretemplate', type: 'text', label: 'Customer Notification Template - Automatic Case Closure'},
  {id: 'casecopyemployeetemplate', type: 'text', label: 'Employee Notification Template - Copy Employee'},
  {id: 'casecreationtemplate', type: 'text', label: 'Customer Notification Template - Case Creation'},
  {id: 'caseescalationtemplate', type: 'text', label: 'Employee Notification Template - Escalation'},
  {id: 'caseupdatetemplate', type: 'text', label: 'Customer Notification Template - Case Update'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'companynameforsupportmessages', type: 'text', label: 'Company Name for Support Messages'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'defaultadvanceacctforexprept', type: 'text', label: 'Default Advance to Apply Account for Expense Reports'},
  {id: 'defaultapaccountforexprept', type: 'text', label: 'Default Payable Account for Expense Reports'},
  {id: 'defaultcaseprofile', type: 'text', label: 'Default Case Profile'},
  {id: 'effectivefrom', type: 'date', label: 'Effective From'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'employeecaseupdatetemplate', type: 'text', label: 'Employee Notification Template - Case Update'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'fiscalcalendar', type: 'select', label: 'Fiscal Calendar'},
  {id: 'glimpactlocking', type: 'checkbox', label: 'Gl Impact Locking'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'iselimination', type: 'checkbox', label: 'Elimination'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'legalname', type: 'text', label: 'Legal Name'},
  {id: 'mainsupportemailaddress', type: 'email', label: 'Main Support Email Address'},
  {id: 'mossapplies', type: 'checkbox', label: 'MOSS Applies'},
  {id: 'mossnexus', type: 'select', label: 'MOSS Nexus'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'namenohierarchy', type: 'text', label: 'Name (no hierarchy)'},
  {id: 'nexus', type: 'select', label: 'Nexus'},
  {id: 'parent', type: 'integer', label: 'Parent Subsidiary'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'primary', type: 'checkbox', label: 'Primary (Y/N)'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'serviceitemforforecastreports', type: 'text', label: 'Service Item for Forecast Reports'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'taxengine', type: 'select', label: 'Tax Engine'},
  {id: 'taxfiscalcalendar', type: 'select', label: 'Tax Fiscal Calendar'},
  {id: 'taxidnum', type: 'text', label: 'Tax ID'},
  {id: 'taxregistrationnumber', type: 'text', label: 'Tax Reg. Number'},
  {id: 'traninternalprefix', type: 'text', label: 'Internal Transaction Prefix'},
  {id: 'tranprefix', type: 'text', label: 'Transaction Prefix'},
  {id: 'url', type: 'url', label: 'Web Site'},
  {id: 'validuntil', type: 'date', label: 'Valid Until'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Nexus (nexus) Search Column values so they can be loaded dynamically. */
export const nexusSearchColumnValues = [
{id: 'country', type: 'select', label: 'Country'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'parentnexus', type: 'select', label: 'Parent Nexus'},
  {id: 'state', type: 'select', label: 'State'},
  {id: 'taxagency', type: 'select', label: 'Tax Agency'}
];

/** Non-Inventory Part (noninventoryitem) Search Column values so they can be loaded dynamically. */
export const noninventoryitemSearchColumnValues = [

];

/** Note (note) Search Column values so they can be loaded dynamically. */
export const noteSearchColumnValues = [
{id: 'author', type: 'select', label: 'Author'},
  {id: 'direction', type: 'text', label: 'Direction'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'note', type: 'text', label: 'Memo'},
  {id: 'notedate', type: 'datetime', label: 'Date'},
  {id: 'notetype', type: 'text', label: 'Type'},
  {id: 'title', type: 'text', label: 'Title'}
];

/** Note Type (notetype) Search Column values so they can be loaded dynamically. */
export const notetypeSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Opportunity (opportunity) Search Column values so they can be loaded dynamically. */
export const opportunitySearchColumnValues = [
{id: 'actionitem', type: 'text', label: 'Action Item'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'buyingreason', type: 'text', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'text', label: 'Buying Time Frame'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'classnohierarchy', type: 'select', label: 'Class (no hierarchy)'},
  {id: 'closedate', type: 'date', label: 'Actual Close'},
  {id: 'competitor', type: 'select', label: 'Competitor'},
  {id: 'contribution', type: 'percent', label: 'Contribution %'},
  {id: 'contributionprimary', type: 'percent', label: 'Primary Sales Rep Contribution %'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'custtype', type: 'text', label: 'Customer Category'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysopen', type: 'integer', label: 'Days Open'},
  {id: 'daystoclose', type: 'integer', label: 'Days To Close'},
  {id: 'decisionmaker', type: 'select', label: 'Decision Maker'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'departmentnohierarchy', type: 'select', label: 'Department (no hierarchy)'},
  {id: 'documentstatus', type: 'select', label: 'Document Status'},
  {id: 'entity', type: 'select', label: 'Customer'},
  {id: 'entitystatus', type: 'select', label: 'Opportunity Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'expectedclosedate', type: 'date', label: 'Expected Close'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'forecasttype', type: 'select', label: 'Forecast Type'},
  {id: 'foreignprojectedamount', type: 'currency', label: 'Projected Total (Foreign Currency)'},
  {id: 'foreignrangehigh', type: 'currency', label: 'Range - High (Foreign Currency)'},
  {id: 'foreignrangelow', type: 'currency', label: 'Range - Low (Foreign Currency)'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxtrancostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction) (Foreign Currency)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationnohierarchy', type: 'select', label: 'Location (no hierarchy)'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'percent', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'period', type: 'text', label: 'Period'},
  {id: 'probability', type: 'percent', label: 'Probability'},
  {id: 'projaltsalesamt', type: 'currency', label: 'Projected Alt.Sales Total'},
  {id: 'projectedtotal', type: 'currency', label: 'Projected Total'},
  {id: 'rangehigh', type: 'currency', label: 'Range - High'},
  {id: 'rangehighalt', type: 'currency', label: 'Alt.Sales Range - High'},
  {id: 'rangelow', type: 'currency', label: 'Range - Low'},
  {id: 'rangelowalt', type: 'currency', label: 'Alt.Sales Range - Low'},
  {id: 'salesreadiness', type: 'text', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxperiod', type: 'select', label: 'Tax Period'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'total', type: 'currency', label: 'Item Amount'},
  {id: 'trancostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction)'},
  {id: 'trandate', type: 'date', label: 'Date'},
  {id: 'tranestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction)'},
  {id: 'tranestgrossprofitpct', type: 'percent', label: 'Est. Gross Profit Percent (Transaction)'},
  {id: 'tranfxestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction) (Foreign Currency)'},
  {id: 'tranid', type: 'text', label: 'Number'},
  {id: 'weightedtotal', type: 'currency', label: 'Weighted Total'},
  {id: 'winlossreason', type: 'select', label: 'Win/Loss Reason'},
  {id: 'wonby', type: 'select', label: 'Won By'}
];

/** Order Schedule (orderschedule) Search Column values so they can be loaded dynamically. */
export const orderscheduleSearchColumnValues = [

];

/** Originating Lead (originatinglead) Search Column values so they can be loaded dynamically. */
export const originatingleadSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'address1', type: 'text', label: 'Address 1'},
  {id: 'address2', type: 'text', label: 'Address 2'},
  {id: 'address3', type: 'text', label: 'Address 3'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'integer', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altcontact', type: 'text', label: 'Alt. Contact'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'billaddress', type: 'text', label: 'Billing Address'},
  {id: 'billaddress1', type: 'text', label: 'Billing Address 1'},
  {id: 'billaddress2', type: 'text', label: 'Billing Address 2'},
  {id: 'billaddress3', type: 'text', label: 'Billing Address 3'},
  {id: 'billaddressee', type: 'text', label: 'Billing Addressee'},
  {id: 'billattention', type: 'text', label: 'Billing Attention'},
  {id: 'billcity', type: 'text', label: 'Billing City'},
  {id: 'billcountry', type: 'select', label: 'Billing Country'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billingratecard', type: 'text', label: 'Billing Rate Card'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'billingtransactionform', type: 'select', label: 'Billing Transaction Form'},
  {id: 'billingtransactiontype', type: 'select', label: 'Billing Transaction Type'},
  {id: 'billphone', type: 'text', label: 'Billing Phone'},
  {id: 'billstate', type: 'select', label: 'Billing State/Province'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'bounced', type: 'checkbox', label: 'Hard Bounced'},
  {id: 'buyingreason', type: 'text', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'text', label: 'Buying Time Frame'},
  {id: 'campaignevent', type: 'select', label: 'Campaign Event'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'mmyydate', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccinternalid', type: 'text', label: 'Credit Card Internal ID'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'ccstate', type: 'select', label: 'Credit Card State'},
  {id: 'ccstatefrom', type: 'date', label: 'Credit Card State From'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'select', label: 'Primary Contact'},
  {id: 'contribution', type: 'percent', label: 'Contribution %'},
  {id: 'contributionprimary', type: 'percent', label: 'Primary Sales Rep Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Primary Currency'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'defaultorderpriority', type: 'float', label: 'Default Order Priority'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'draccount', type: 'text', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'fxaccount', type: 'text', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'grouppricinglevel', type: 'text', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isitemcorrelated', type: 'checkbox', label: 'Is Upsell Item Correlated'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itemcorrelation', type: 'percent', label: 'Upsell Item Correlation'},
  {id: 'itempricinglevel', type: 'text', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'jobenddate', type: 'date', label: 'Job Actual End'},
  {id: 'jobprojectedend', type: 'date', label: 'Job Projected End'},
  {id: 'jobstartdate', type: 'date', label: 'Job Start'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'negativenumberformat', type: 'select', label: 'Negative Number Format'},
  {id: 'numberformat', type: 'select', label: 'Number Format'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformcampaignevent', type: 'text', label: 'Online Form History - Campaign Event'},
  {id: 'onlineformdate', type: 'date', label: 'Online Form History - Date'},
  {id: 'onlineformleadsource', type: 'text', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'text', label: 'Online Form History - Form Name'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Top Level Parent'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'percent', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'text', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'prefccprocessor', type: 'select', label: 'Credit Card Processor'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'text', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'text', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'receivablesaccount', type: 'text', label: 'Default Receivables Account'},
  {id: 'reminderdays', type: 'integer', label: 'Reminder Days'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'text', label: 'Role'},
  {id: 'salesreadiness', type: 'text', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipaddress', type: 'text', label: 'Shipping Address'},
  {id: 'shipaddress1', type: 'text', label: 'Shipping Address 1'},
  {id: 'shipaddress2', type: 'text', label: 'Shipping Address 2'},
  {id: 'shipaddress3', type: 'text', label: 'Shipping Address 3'},
  {id: 'shipaddressee', type: 'text', label: 'Shipping Addressee'},
  {id: 'shipattention', type: 'text', label: 'Shipping Attention'},
  {id: 'shipcity', type: 'text', label: 'Shipping City'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shipcountry', type: 'select', label: 'Shipping Country'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'shipphone', type: 'text', label: 'Shipping Phone'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'shipstate', type: 'text', label: 'Shipping State/Province'},
  {id: 'shipzip', type: 'text', label: 'Shipping Zip'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'taxitem', type: 'select', label: 'Tax Item'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Primary Type (Deprecated)'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'text', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Other Charge Item (otherchargeitem) Search Column values so they can be loaded dynamically. */
export const otherchargeitemSearchColumnValues = [

];

/** Other Name (othername) Search Column values so they can be loaded dynamically. */
export const othernameSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'category', type: 'text', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'currency', type: 'text', label: 'Currency'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'entitystatus', type: 'text', label: 'Status'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'notsfastatus', type: 'text', label: 'Status'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'type', type: 'text', label: 'Type'},
  {id: 'url', type: 'text', label: 'Web Address'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Other Name Category (othernamecategory) Search Column values so they can be loaded dynamically. */
export const othernamecategorySearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Partner (partner) Search Column values so they can be loaded dynamically. */
export const partnerSearchColumnValues = [
{id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'assigntasks', type: 'checkbox', label: 'Assign Tasks'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'category', type: 'text', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'classnohierarchy', type: 'select', label: 'Class (no hierarchy)'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'departmentnohierarchy', type: 'select', label: 'Department (no hierarchy)'},
  {id: 'eligibleforcommission', type: 'checkbox', label: 'Eligible for Commission'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationnohierarchy', type: 'select', label: 'Location (no hierarchy)'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'partnercode', type: 'text', label: 'Code'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'promocode', type: 'text', label: 'Promotion'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'url', type: 'text', label: 'Web Address'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Partner Category (partnercategory) Search Column values so they can be loaded dynamically. */
export const partnercategorySearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parent', type: 'select', label: 'Parent'}
];

/** Paycheck (paycheck) Search Column values so they can be loaded dynamically. */
export const paycheckSearchColumnValues = [

];

/** Paycheck Journal (paycheckjournal) Search Column values so they can be loaded dynamically. */
export const paycheckjournalSearchColumnValues = [

];

/** Payment Item (paymentitem) Search Column values so they can be loaded dynamically. */
export const paymentitemSearchColumnValues = [

];

/** Payment Method (paymentmethod) Search Column values so they can be loaded dynamically. */
export const paymentmethodSearchColumnValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'creditcard', type: 'checkbox', label: 'Credit Card'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdebitcard', type: 'checkbox', label: 'Is Debit Card'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Payroll Batch (payrollbatch) Search Column values so they can be loaded dynamically. */
export const payrollbatchSearchColumnValues = [
{id: 'batchnumber', type: 'text', label: 'Batch Number'},
  {id: 'checkdate', type: 'date', label: 'Check Date'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'payfrequency', type: 'text', label: 'Pay frequency'},
  {id: 'periodending', type: 'date', label: 'Period Ending Date'},
  {id: 'status', type: 'text', label: 'Status'},
  {id: 'subsidiary', type: 'text', label: 'Subsidiary'},
  {id: 'type', type: 'text', label: 'Type'}
];

/** Payroll Item (payrollitem) Search Column values so they can be loaded dynamically. */
export const payrollitemSearchColumnValues = [
{id: 'expenseaccount', type: 'text', label: 'Expense Account'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'itemtypenohierarchy', type: 'text', label: 'Item Type (no hierarchy)'},
  {id: 'liabilityaccount', type: 'text', label: 'Liability Account'},
  {id: 'masterpaycode', type: 'text', label: 'Master Pay Code'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'vendor', type: 'text', label: 'Vendor'}
];

/** Percent Complete Project Revenue Rule (pctcompleteprojectrevenuerule) Search Column values so they can be loaded dynamically. */
export const pctcompleteprojectrevenueruleSearchColumnValues = [
{id: 'chargerule', type: 'select', label: 'Charge Rule'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'project', type: 'text', label: 'Project'},
  {id: 'revenuereconciled', type: 'checkbox', label: 'Revenue Reconciled'},
  {id: 'ruletype', type: 'text', label: 'Rule Type'},
  {id: 'serviceitem', type: 'select', label: 'Service Item'},
  {id: 'totalamounttorecognize', type: 'currency', label: 'Total Amount to Recognize'}
];

/** Period End Journal (periodendjournal) Search Column values so they can be loaded dynamically. */
export const periodendjournalSearchColumnValues = [

];

/** Phone Call (phonecall) Search Column values so they can be loaded dynamically. */
export const phonecallSearchColumnValues = [
{id: 'accesslevel', type: 'text', label: 'Private'},
  {id: 'assigned', type: 'select', label: 'Organizer'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'markdone', type: 'text', label: 'Mark'},
  {id: 'message', type: 'text', label: 'Comment'},
  {id: 'owner', type: 'select', label: 'Created By'},
  {id: 'phone', type: 'phone', label: 'Phone Number'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'startdate', type: 'date', label: 'Phone Call Date'},
  {id: 'starttime', type: 'timeofday', label: 'Start Time'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Subject'},
  {id: 'transaction', type: 'select', label: 'Transaction'}
];

/** Portlet (portlet) Search Column values so they can be loaded dynamically. */
export const portletSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Price Book (pricebook) Search Column values so they can be loaded dynamically. */
export const pricebookSearchColumnValues = [

];

/** Price Level (pricelevel) Search Column values so they can be loaded dynamically. */
export const pricelevelSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'}
];

/** Price Plan (priceplan) Search Column values so they can be loaded dynamically. */
export const priceplanSearchColumnValues = [

];

/** Pricing (pricing) Search Column values so they can be loaded dynamically. */
export const pricingSearchColumnValues = [
{id: 'currency', type: 'select', label: 'Currency'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'maximumquantity', type: 'float', label: 'Maximum Quantity'},
  {id: 'minimumquantity', type: 'float', label: 'Minimum Quantity'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'quantityrange', type: 'text', label: 'Quantity Range'},
  {id: 'saleunit', type: 'select', label: 'Sale Unit'},
  {id: 'unitprice', type: 'currency2', label: 'Unit Price'}
];

/** Pricing Group (pricinggroup) Search Column values so they can be loaded dynamically. */
export const pricinggroupSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Project Expense Type (projectexpensetype) Search Column values so they can be loaded dynamically. */
export const projectexpensetypeSearchColumnValues = [
{id: 'account', type: 'text', label: 'Account'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'text', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Project Task (projecttask) Search Column values so they can be loaded dynamically. */
export const projecttaskSearchColumnValues = [
{id: 'actualwork', type: 'float', label: 'Actual Work'},
  {id: 'bbudgetusecalculatedvalues', type: 'checkbox', label: 'Use Calculated Values for all Labor Billing Budgets'},
  {id: 'cbudgetusecalculatedvalues', type: 'checkbox', label: 'Use Calculated Values for all Labor Cost Budgets'},
  {id: 'company', type: 'select', label: 'Project'},
  {id: 'constrainttype', type: 'select', label: 'Constraint Type'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'cost', type: 'currency', label: 'Estimated Cost'},
  {id: 'costbase', type: 'currency', label: 'Estimated Cost (Base Currency)'},
  {id: 'costbasebaseline', type: 'currency', label: 'Estimated Cost Baseline (Base Currency)'},
  {id: 'costbaseline', type: 'currency', label: 'Estimated Cost Baseline'},
  {id: 'costbasevariance', type: 'currency', label: 'Estimated Cost Variance (Base Currency)'},
  {id: 'costvariance', type: 'currency', label: 'Estimated Cost Variance'},
  {id: 'costvariancepercent', type: 'float', label: 'Estimated Cost Variance Percent'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'enddatebaseline', type: 'date', label: 'End Date Baseline'},
  {id: 'enddatevariance', type: 'float', label: 'End Date Variance'},
  {id: 'estimatedwork', type: 'float', label: 'Estimated Work'},
  {id: 'estimatedworkbaseline', type: 'float', label: 'Estimated Work Baseline'},
  {id: 'estimatedworkvariance', type: 'float', label: 'Estimated Work Variance'},
  {id: 'estimatedworkvariancepercent', type: 'float', label: 'Estimated Work Variance Percent'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'finishbydate', type: 'date', label: 'Finish No Later Than Date'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'ismilestone', type: 'checkbox', label: 'Milestone'},
  {id: 'issummarytask', type: 'checkbox', label: 'Is Summary Task'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'message', type: 'text', label: 'Notes'},
  {id: 'nonbillabletask', type: 'checkbox', label: 'Non-billable'},
  {id: 'owner', type: 'select', label: 'Created By'},
  {id: 'parent', type: 'select', label: 'Parent Task'},
  {id: 'percentworkcomplete', type: 'percent', label: 'Percent Work Complete'},
  {id: 'predecessor', type: 'select', label: 'Predecessor'},
  {id: 'predecessors', type: 'text', label: 'Predecessors'},
  {id: 'predecessortype', type: 'text', label: 'Predecessor Type'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'remainingwork', type: 'float', label: 'Remaining Work'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'startdatebaseline', type: 'date', label: 'Start Date Baseline'},
  {id: 'startdatevariance', type: 'float', label: 'Start Date Variance'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'successor', type: 'select', label: 'Successor'},
  {id: 'successortype', type: 'text', label: 'Successor Type'},
  {id: 'title', type: 'text', label: 'Task Name'}
];

/** Project Task Assignment (projecttaskassignment) Search Column values so they can be loaded dynamically. */
export const projecttaskassignmentSearchColumnValues = [
{id: 'actualwork', type: 'float', label: 'Actual Work'},
  {id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'cost', type: 'currency', label: 'Cost'},
  {id: 'costbase', type: 'currency', label: 'Cost (Base Currency)'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedwork', type: 'float', label: 'Estimated Work'},
  {id: 'estimatedworkbaseline', type: 'float', label: 'Estimated Work Baseline'},
  {id: 'grossprofit', type: 'currency', label: 'Estimated Gross Profit'},
  {id: 'grossprofitbase', type: 'currency', label: 'Estimated Gross Profit (Base Currency)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'price', type: 'currency', label: 'Estimated Revenue'},
  {id: 'pricebase', type: 'currency', label: 'Estimated Revenue (Base Currency)'},
  {id: 'resource', type: 'select', label: 'Resource'},
  {id: 'resourcename', type: 'select', label: 'Resource Name'},
  {id: 'serviceitem', type: 'select', label: 'Service Item'},
  {id: 'serviceitemdesc', type: 'text', label: 'Description'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'unitcost', type: 'currency', label: 'Unit Cost'},
  {id: 'unitcostbase', type: 'currency', label: 'Unit Cost (Base Currency)'},
  {id: 'unitprice', type: 'currency', label: 'Unit Price'},
  {id: 'unitpricebase', type: 'currency', label: 'Unit Price (Base Currency)'},
  {id: 'units', type: 'percent', label: 'Units (%)'}
];

/** Project Template (projecttemplate) Search Column values so they can be loaded dynamically. */
export const projecttemplateSearchColumnValues = [
{id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'integer', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'allowallresourcesfortasks', type: 'checkbox', label: 'Display All Resources for ProjectTask Assignment'},
  {id: 'allowexpenses', type: 'checkbox', label: 'Allow Expenses'},
  {id: 'allowtasktimeforrsrcalloc', type: 'checkbox', label: 'Allow Allocated Resources to Enter Time to All Tasks'},
  {id: 'allowtime', type: 'checkbox', label: 'Allow Time Entry'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'bbudgetusecalculatedvalues', type: 'checkbox', label: 'Use Calculated Values for all Billing Budgets'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'bounced', type: 'checkbox', label: 'Hard Bounced'},
  {id: 'cbudgetlaborbudgetfromalloc', type: 'checkbox', label: 'Calculate Labor Budgets from Resource Allocations'},
  {id: 'cbudgetusecalculatedvalues', type: 'checkbox', label: 'Use Calculated Values for all Cost Budgets'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Job Name'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'estimatedcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'estimatedgrossprofit', type: 'currency', label: 'Estimated Gross Profit'},
  {id: 'estimatedgrossprofitpercent', type: 'percent', label: 'Estimated Gross Profit %'},
  {id: 'estimatedlaborcost', type: 'currency', label: 'Estimated Labor Cost'},
  {id: 'estimatedlaborrevenue', type: 'currency', label: 'Estimated Labor Revenue'},
  {id: 'estimatedrevenue', type: 'currency', label: 'Estimated Revenue'},
  {id: 'estimatedtime', type: 'float', label: 'Initial Time Budget'},
  {id: 'estimatedtimeoverride', type: 'float', label: 'Estimated Work'},
  {id: 'estimatedtimeoverridebaseline', type: 'float', label: 'Estimated Work Baseline'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'includecrmtasksintotals', type: 'checkbox', label: 'Include CRM Tasks in Job Totals'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isexempttime', type: 'checkbox', label: 'Classify Time as Exempt'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isproductivetime', type: 'checkbox', label: 'Classify Time as Productive'},
  {id: 'isutilizedtime', type: 'checkbox', label: 'Classify Time as Utilized'},
  {id: 'jobbillingtype', type: 'select', label: 'Billing Type'},
  {id: 'jobitem', type: 'select', label: 'Billing Item'},
  {id: 'jobprice', type: 'currency', label: 'Job Price'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'limittimetoassignees', type: 'checkbox', label: 'Limit Time and Expenses to Resources'},
  {id: 'materializetime', type: 'checkbox', label: 'Create Planned Time Entries'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'useallocatedtimeforforecast', type: 'checkbox', label: 'Use Allocated Time for Forecast'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Promotion (promotioncode) Search Column values so they can be loaded dynamically. */
export const promotioncodeSearchColumnValues = [
{id: 'code', type: 'text', label: 'Code'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'discount', type: 'text', label: 'Discount'},
  {id: 'discountamount', type: 'currency', label: 'Discount Amount'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ispublic', type: 'checkbox', label: 'Available to all Customers'},
  {id: 'location', type: 'multiselect', label: 'Locations'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Prospect (prospect) Search Column values so they can be loaded dynamically. */
export const prospectSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altcontact', type: 'text', label: 'Alt. Contact'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'assignedsite', type: 'select', label: 'Assigned Web Site'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'buyingreason', type: 'text', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'text', label: 'Buying Time Frame'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'mmyydate', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccinternalid', type: 'text', label: 'Credit Card Internal ID'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'select', label: 'Primary Contact'},
  {id: 'contribution', type: 'percent', label: 'Contribution %'},
  {id: 'contributionprimary', type: 'percent', label: 'Primary Sales Rep Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'draccount', type: 'text', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxaccount', type: 'text', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'grouppricinglevel', type: 'text', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itempricinglevel', type: 'text', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'jobenddate', type: 'date', label: 'Job Actual End'},
  {id: 'jobprojectedend', type: 'date', label: 'Job Projected End'},
  {id: 'jobstartdate', type: 'date', label: 'Job Start'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformdate', type: 'text', label: 'Online Form History - Date'},
  {id: 'onlineformleadsource', type: 'text', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'text', label: 'Online Form History - Form Name'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Top Level Parent'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'percent', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'text', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'prefccprocessor', type: 'select', label: 'Credit Card Processor'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'text', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'text', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'receivablesaccount', type: 'text', label: 'Default Receivables Account'},
  {id: 'reminderdays', type: 'integer', label: 'Reminder Days'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'text', label: 'Role'},
  {id: 'salesreadiness', type: 'text', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'sourcesite', type: 'select', label: 'Source Website'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'taxitem', type: 'select', label: 'Tax Item'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'text', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Purchase Contract (purchasecontract) Search Column values so they can be loaded dynamically. */
export const purchasecontractSearchColumnValues = [

];

/** Purchase Order (purchaseorder) Search Column values so they can be loaded dynamically. */
export const purchaseorderSearchColumnValues = [

];

/** Requisition (purchaserequisition) Search Column values so they can be loaded dynamically. */
export const purchaserequisitionSearchColumnValues = [

];

/** Reallocate Items (reallocateitem) Search Column values so they can be loaded dynamically. */
export const reallocateitemSearchColumnValues = [

];

/** Receive Inbound Shipment (receiveinboundshipment) Search Column values so they can be loaded dynamically. */
export const receiveinboundshipmentSearchColumnValues = [

];

/** Resource Allocation (resourceallocation) Search Column values so they can be loaded dynamically. */
export const resourceallocationSearchColumnValues = [
{id: 'allocationtype', type: 'select', label: 'Allocation Type'},
  {id: 'allocationunit', type: 'select', label: 'Allocate By'},
  {id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'company', type: 'select', label: 'Project'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'nextapprover', type: 'select', label: 'Next Approver'},
  {id: 'notes', type: 'text', label: 'Notes'},
  {id: 'numberhours', type: 'float', label: 'Number of Hours'},
  {id: 'percentoftime', type: 'percent', label: 'Percentage of Time'},
  {id: 'requestedby', type: 'select', label: 'Requested By'},
  {id: 'resource', type: 'select', label: 'Resource'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Restlet (restlet) Search Column values so they can be loaded dynamically. */
export const restletSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Return Authorization (returnauthorization) Search Column values so they can be loaded dynamically. */
export const returnauthorizationSearchColumnValues = [

];

/** Revenue Arrangement (revenuearrangement) Search Column values so they can be loaded dynamically. */
export const revenuearrangementSearchColumnValues = [

];

/** Revenue Commitment (revenuecommitment) Search Column values so they can be loaded dynamically. */
export const revenuecommitmentSearchColumnValues = [

];

/** Revenue Commitment Reversal (revenuecommitmentreversal) Search Column values so they can be loaded dynamically. */
export const revenuecommitmentreversalSearchColumnValues = [

];

/** Revenue Recognition Plan (revenueplan) Search Column values so they can be loaded dynamically. */
export const revenueplanSearchColumnValues = [

];

/** Revenue Recognition Schedule (revrecschedule) Search Column values so they can be loaded dynamically. */
export const revrecscheduleSearchColumnValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'amorstatus', type: 'text', label: 'Status'},
  {id: 'amortemplate', type: 'text', label: 'Template Name'},
  {id: 'amortizedamount', type: 'currency', label: 'Total Recognized'},
  {id: 'amortype', type: 'text', label: 'Type'},
  {id: 'amount', type: 'currency', label: 'Amount (Schedule Total)'},
  {id: 'currency', type: 'text', label: 'Schedule Currency'},
  {id: 'deferredamount', type: 'currency', label: 'Remaining Deferred Balance'},
  {id: 'destacct', type: 'text', label: 'Destination Account'},
  {id: 'initialamt', type: 'currency', label: 'Initial Amount'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isrecognized', type: 'checkbox', label: 'Is Recognized?'},
  {id: 'jedoc', type: 'text', label: 'Journal'},
  {id: 'linesequencenumber', type: 'select', label: 'Line Sequence Number'},
  {id: 'name', type: 'text', label: 'Schedule Name'},
  {id: 'pctcomplete', type: 'percent', label: '% Complete'},
  {id: 'pctrecognition', type: 'percent', label: '% Recog.'},
  {id: 'periodoffset', type: 'integer', label: 'Period Offset'},
  {id: 'recuramount', type: 'currency', label: 'Amount'},
  {id: 'recurfxamount', type: 'currency', label: 'Amount (Foreign Currency)'},
  {id: 'scheddate', type: 'date', label: 'Date'},
  {id: 'schedulenumber', type: 'text', label: 'Number'},
  {id: 'sourceacct', type: 'text', label: 'Source Account'},
  {id: 'srcdocline', type: 'text', label: 'Source Transaction Line'},
  {id: 'srctran', type: 'text', label: 'Source Transaction'},
  {id: 'srctranpostperiod', type: 'text', label: 'Posting Period'},
  {id: 'startoffset', type: 'integer', label: 'Start Offset'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Revenue Recognition Template (revrectemplate) Search Column values so they can be loaded dynamically. */
export const revrectemplateSearchColumnValues = [
{id: 'amorinactive', type: 'text', label: 'Inactive'},
  {id: 'amormethod', type: 'text', label: 'Method'},
  {id: 'amorperiod', type: 'text', label: 'Amortization Period'},
  {id: 'amorstartoffset', type: 'text', label: 'Start Offset'},
  {id: 'amortermsrc', type: 'text', label: 'Term Source'},
  {id: 'amortype', type: 'text', label: 'Type'},
  {id: 'contraaccount', type: 'text', label: 'Contra Account'},
  {id: 'deferralaccount', type: 'text', label: 'Deferral Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'periodoffset', type: 'text', label: 'Period Offset'},
  {id: 'targetaccount', type: 'text', label: 'Target Account'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Role (role) Search Column values so they can be loaded dynamically. */
export const roleSearchColumnValues = [
{id: 'centertype', type: 'select', label: 'Center Type'},
  {id: 'classallowview', type: 'checkbox', label: 'Class Allow Viewing'},
  {id: 'classrestriction', type: 'select', label: 'Class Restrictions'},
  {id: 'customstandard', type: 'text', label: 'Custom/Standard'},
  {id: 'departmentrestriction', type: 'select', label: 'Department Restrictions'},
  {id: 'deptallowview', type: 'checkbox', label: 'Department Allow Viewing'},
  {id: 'empallowview', type: 'checkbox', label: 'Employee Allow Viewing'},
  {id: 'employeerestriction', type: 'select', label: 'Employee Restrictions'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'frombundle', type: 'text', label: 'From Bundle'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ispartnerrole', type: 'checkbox', label: 'Is Partner Role'},
  {id: 'issalesrole', type: 'checkbox', label: 'Is Sales Role'},
  {id: 'isssoonly', type: 'checkbox', label: 'Is Single Sign On Only'},
  {id: 'issupportrole', type: 'checkbox', label: 'Is Support Role'},
  {id: 'iswsonly', type: 'checkbox', label: 'Is Web Services Only'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'locallowview', type: 'checkbox', label: 'Location Allow Viewing'},
  {id: 'locationrestriction', type: 'select', label: 'Location Restrictions'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'permchangedate', type: 'datetime', label: 'Permission Change Date'},
  {id: 'permchangelevel', type: 'text', label: 'Permission Change Level'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'permissionchange', type: 'text', label: 'Permission Change'},
  {id: 'restrictitembyclass', type: 'checkbox', label: 'Restrict Item By Class'},
  {id: 'restrictitembydepartment', type: 'checkbox', label: 'Restrict Item By Department'},
  {id: 'restrictitembylocation', type: 'checkbox', label: 'Restrict Item By Location'},
  {id: 'subsidallowview', type: 'checkbox', label: 'Subsidiary Allow Viewing'},
  {id: 'subsidiaries', type: 'select', label: 'Subsidiaries'}
];

/** Sales Order (salesorder) Search Column values so they can be loaded dynamically. */
export const salesorderSearchColumnValues = [

];

/** Sales Role (salesrole) Search Column values so they can be loaded dynamically. */
export const salesroleSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Sales Tax Item (salestaxitem) Search Column values so they can be loaded dynamically. */
export const salestaxitemSearchColumnValues = [
{id: 'appliestoservice', type: 'checkbox', label: 'Applies To Service'},
  {id: 'availableon', type: 'select', label: 'Available On'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'iseccode', type: 'checkbox', label: 'EC Code'},
  {id: 'isexcludetaxreports', type: 'checkbox', label: 'Is Excluded From Tax Reports'},
  {id: 'isexport', type: 'checkbox', label: 'Export'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isreversecharge', type: 'checkbox', label: 'Reverse Charge'},
  {id: 'itemid', type: 'text', label: 'Name'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parent', type: 'select', label: 'Parent'},
  {id: 'rate', type: 'currency', label: 'Rate'},
  {id: 'taxtype', type: 'select', label: 'Tax Type'}
];

/** Scheduled Script (scheduledscript) Search Column values so they can be loaded dynamically. */
export const scheduledscriptSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Scheduled Script Instance (scheduledscriptinstance) Search Column values so they can be loaded dynamically. */
export const scheduledscriptinstanceSearchColumnValues = [
{id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'datetime', label: 'End Date'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'percentcomplete', type: 'percent', label: 'Percent Complete'},
  {id: 'queue', type: 'text', label: 'Queue'},
  {id: 'queueposition', type: 'integer', label: 'Queue Position'},
  {id: 'startdate', type: 'datetime', label: 'Start Date'},
  {id: 'status', type: 'text', label: 'Status'}
];

/** Script Deployment (scriptdeployment) Search Column values so they can be loaded dynamically. */
export const scriptdeploymentSearchColumnValues = [
{id: 'eventtype', type: 'select', label: 'Event Type'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isdeployed', type: 'checkbox', label: 'Is Deployed'},
  {id: 'loglevel', type: 'select', label: 'Log Level'},
  {id: 'queueid', type: 'text', label: 'Queue'},
  {id: 'recordtype', type: 'select', label: 'Record Type'},
  {id: 'script', type: 'select', label: 'Script ID'},
  {id: 'scriptid', type: 'text', label: 'Custom ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Title'}
];

/** Serialized Build/Assembly Item (serializedassemblyitem) Search Column values so they can be loaded dynamically. */
export const serializedassemblyitemSearchColumnValues = [

];

/** Serialized Inventory Item (serializedinventoryitem) Search Column values so they can be loaded dynamically. */
export const serializedinventoryitemSearchColumnValues = [

];

/** Service (serviceitem) Search Column values so they can be loaded dynamically. */
export const serviceitemSearchColumnValues = [

];

/** Shipping Item (shipitem) Search Column values so they can be loaded dynamically. */
export const shipitemSearchColumnValues = [
{id: 'account', type: 'text', label: 'Account'},
  {id: 'accounthandling', type: 'text', label: 'Account (Handling)'},
  {id: 'carrier', type: 'text', label: 'Carrier'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'displayname', type: 'text', label: 'Display Name'},
  {id: 'excludedforcountries', type: 'checkbox', label: 'Excluded For Countries'},
  {id: 'excludedforsites', type: 'checkbox', label: 'Excluded For Sites'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'freeiftotaloveramount', type: 'float', label: 'Free Shipping Total Treshold'},
  {id: 'handlingflatrate', type: 'float', label: 'Handling Flat Rate'},
  {id: 'handlingfunctiontype', type: 'text', label: 'Handling Rate Type'},
  {id: 'handlingrateaspercentoftotal', type: 'float', label: 'Handling Rate As Percent of Total'},
  {id: 'handlingratebyitem', type: 'float', label: 'Handling Rate By Item'},
  {id: 'handlingratebyweight', type: 'float', label: 'Handling Rate By Weight'},
  {id: 'handlingratebyweightbracketed', type: 'checkbox', label: 'Handling Rate By Weight Whole Increments'},
  {id: 'handlingratebyweightper', type: 'float', label: 'Handling Rate By Weight Per'},
  {id: 'handlingratebyweightunit', type: 'float', label: 'Handling Rate By Weight Unit'},
  {id: 'handlingratetabletype', type: 'text', label: 'Handling Rate Table Type'},
  {id: 'hasmaxshippingcost', type: 'checkbox', label: 'Has Maximum Shipping Cost'},
  {id: 'hasminshippingcost', type: 'checkbox', label: 'Has Minimum Shipping Cost'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isfreeiftotalover', type: 'checkbox', label: 'Free Shipping total'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isonline', type: 'checkbox', label: 'Display in Web Site'},
  {id: 'isreturnserviceintegrated', type: 'checkbox', label: 'Is Return Service Integrated'},
  {id: 'isshipperintegrated', type: 'checkbox', label: 'Is Integrated Shipping Item'},
  {id: 'itemid', type: 'text', label: 'Name'},
  {id: 'labelpluginid', type: 'text', label: 'Label Plugin Id'},
  {id: 'labelregistration', type: 'text', label: 'Label Registration'},
  {id: 'labelservicegroupid', type: 'text', label: 'Label Service Group Id'},
  {id: 'labelserviceid', type: 'text', label: 'Label Service Id'},
  {id: 'limitedtocountries', type: 'multiselect', label: 'Limited To Countries'},
  {id: 'limitedtosites', type: 'multiselect', label: 'Limited To Sites'},
  {id: 'limitedtostates', type: 'multiselect', label: 'Limited To States'},
  {id: 'limitwebsitevisibilitybytotal', type: 'checkbox', label: 'Web Site Visibility Limited by Total'},
  {id: 'limitwebsitevisibilitybyweight', type: 'checkbox', label: 'Web Site Visibility Limited by Weight'},
  {id: 'maxshippingcost', type: 'float', label: 'Maximum Shipping Cost'},
  {id: 'minshippingcost', type: 'float', label: 'Minimum Shipping Cost'},
  {id: 'ratingpluginid', type: 'text', label: 'Rating Plugin Id'},
  {id: 'ratingregistration', type: 'text', label: 'Rating Registration'},
  {id: 'ratingservicegroupid', type: 'text', label: 'Rating Service Group Id'},
  {id: 'ratingserviceid', type: 'text', label: 'Rating Service Id'},
  {id: 'realtimerateservice', type: 'text', label: 'Real-Time Rate Service'},
  {id: 'returnlabelregistration', type: 'text', label: 'Return Label Registration'},
  {id: 'returnlabelserviceid', type: 'text', label: 'Return Label Service Id'},
  {id: 'returnshippingservice', type: 'text', label: 'Return Shipping Service'},
  {id: 'shippingdiscountrate', type: 'float', label: 'Shipping Rate Discount'},
  {id: 'shippingflatrate', type: 'float', label: 'Shipping Flat Rate'},
  {id: 'shippingfunctiontype', type: 'text', label: 'Shipping Rate Type'},
  {id: 'shippingrateaspercentoftotal', type: 'float', label: 'Shipping Rate As Percent of Total'},
  {id: 'shippingratebyitem', type: 'float', label: 'Shipping Rate By Item'},
  {id: 'shippingratebyweight', type: 'float', label: 'Shipping Rate By Weight'},
  {id: 'shippingratebyweightbracketed', type: 'checkbox', label: 'Shipping Rate By Weight Whole Increments'},
  {id: 'shippingratebyweightper', type: 'float', label: 'Shipping Rate By Weight Per'},
  {id: 'shippingratebyweightunit', type: 'float', label: 'Shipping Rate By Weight Unit'},
  {id: 'shippingratetabletype', type: 'text', label: 'Shipping Rate Table Type'},
  {id: 'shippingservice', type: 'text', label: 'Shipping Service'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'websitevisibilitybytotaltype', type: 'text', label: 'Web Site Visibility By Total Type'},
  {id: 'websitevisibilitybyweighttype', type: 'text', label: 'Web Site Visibility By Weight Type'},
  {id: 'websitevisibilitytotallimit', type: 'float', label: 'Web Site Visibility By Total Limit'},
  {id: 'websitevisibilityweightlimit', type: 'float', label: 'Web Site Visibility By Weight Limit'},
  {id: 'websitevisibilityweightunit', type: 'text', label: 'Web Site Visibility By Weight Unit'}
];

/** Shopping Cart (shoppingcart) Search Column values so they can be loaded dynamically. */
export const shoppingcartSearchColumnValues = [
{id: 'cartid', type: 'integer', label: 'Cart ID'},
  {id: 'customerid', type: 'integer', label: 'Customer ID'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'datemodified', type: 'datetime', label: 'Date Last Item Added'},
  {id: 'daysold', type: 'integer', label: 'Days old'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'item', type: 'select', label: 'Items in Cart'},
  {id: 'itemid', type: 'select', label: 'Item ID'},
  {id: 'itemprice', type: 'currency', label: 'Item Price'},
  {id: 'itemqty', type: 'integer', label: 'Item Quantity'},
  {id: 'subtotal', type: 'currency', label: 'Sub-Total Amount'},
  {id: 'website', type: 'select', label: 'Website'},
  {id: 'websiteid', type: 'integer', label: 'Website ID'}
];

/** Solution (solution) Search Column values so they can be loaded dynamically. */
export const solutionSearchColumnValues = [
{id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'casecount', type: 'integer', label: 'Case Count'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'description', type: 'textarea', label: 'Detailed Description'},
  {id: 'displayonline', type: 'checkbox', label: 'Display Online'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'message', type: 'textarea', label: 'Abstract'},
  {id: 'previewref', type: 'text', label: 'Preview'},
  {id: 'solutioncode', type: 'text', label: 'Code'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Title'}
];

/** Statistical Journal Entry (statisticaljournalentry) Search Column values so they can be loaded dynamically. */
export const statisticaljournalentrySearchColumnValues = [

];

/** Store Pickup Fulfillment (storepickupfulfillment) Search Column values so they can be loaded dynamically. */
export const storepickupfulfillmentSearchColumnValues = [

];

/** Subscription (subscription) Search Column values so they can be loaded dynamically. */
export const subscriptionSearchColumnValues = [
{id: 'advancerenewalperiodnumber', type: 'integer', label: 'Advance Renewal Period'},
  {id: 'advancerenewalperiodunit', type: 'select', label: 'Advance Renewal Period Unit'},
  {id: 'autorenewal', type: 'checkbox', label: 'Automatically Initiate Renewal Process'},
  {id: 'billingaccount', type: 'select', label: 'Billing Account'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'defaultrenewalmethod', type: 'select', label: 'Default Renewal Method'},
  {id: 'defaultrenewalterm', type: 'select', label: 'Default Renewal Term'},
  {id: 'defaultrenewaltrantype', type: 'select', label: 'Default Transaction Type'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedrevrecenddate', type: 'date', label: 'Estimated Revenue Recognition End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'initialterm', type: 'select', label: 'Initial Term'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nextrenewalstartdate', type: 'date', label: 'Next Renewal Start Date'},
  {id: 'originalsalestransaction', type: 'text', label: 'Original Sales Transaction'},
  {id: 'renewalnumber', type: 'integer', label: 'Renewal Sequence'},
  {id: 'renewalsubscriptionname', type: 'text', label: 'Renewal Subscription Name'},
  {id: 'renewaltransaction', type: 'select', label: 'Renewal Transaction'},
  {id: 'salesorder', type: 'select', label: 'Sales Order'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subscriptionplan', type: 'select', label: 'Subscription Plan'}
];

/** Subscription Change Order (subscriptionchangeorder) Search Column values so they can be loaded dynamically. */
export const subscriptionchangeorderSearchColumnValues = [
{id: 'action', type: 'select', label: 'Action'},
  {id: 'approvaldate', type: 'datetime', label: 'Date Approved'},
  {id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'billingaccount', type: 'select', label: 'Billing Account'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'idnumber', type: 'text', label: 'Number'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'newenddate', type: 'date', label: 'New End Date'},
  {id: 'renewalenddate', type: 'date', label: 'Renewal End Date'},
  {id: 'renewalmethod', type: 'select', label: 'Renewal Method'},
  {id: 'renewalstartdate', type: 'date', label: 'Renewal Start Date'},
  {id: 'renewalterm', type: 'select', label: 'Renewal Term'},
  {id: 'renewaltrantype', type: 'select', label: 'Renewal Transaction Type'},
  {id: 'requestoffcycleinvoice', type: 'checkbox', label: 'Request Off-Cycle Invoice for Advance Charges'},
  {id: 'requestor', type: 'select', label: 'Requestor'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptionplan', type: 'select', label: 'Subscription Plan'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'view', type: 'text', label: 'View'}
];

/** Subscription Line (subscriptionline) Search Column values so they can be loaded dynamically. */
export const subscriptionlineSearchColumnValues = [
{id: 'billingmode', type: 'select', label: 'Billing Mode'},
  {id: 'discount', type: 'percent', label: 'Discount'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedrevrecenddate', type: 'date', label: 'Estimated Revenue Recognition End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'includeinrenewal', type: 'checkbox', label: 'Include In Renewal Subscription'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'linenumber', type: 'integer', label: 'Line Number'},
  {id: 'prorateenddate', type: 'checkbox', label: 'Prorate End Date'},
  {id: 'proratestartdate', type: 'checkbox', label: 'Prorate Start Date'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'recurrencestartdate', type: 'date', label: 'Recurrence Start Date'},
  {id: 'revrecoption', type: 'select', label: 'Revenue Recognition Option'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptionlinetype', type: 'select', label: 'Subscription Line Type'},
  {id: 'subscriptionplan', type: 'select', label: 'Subscription Plan'},
  {id: 'subscriptionplanline', type: 'select', label: 'Subscription Plan Line'},
  {id: 'subscriptionplanlineid', type: 'integer', label: 'Subscription Plan Line Id'},
  {id: 'terminationdate', type: 'date', label: 'Termination Date'},
  {id: 'total', type: 'currency', label: 'Total'},
  {id: 'usagemultiplierline', type: 'select', label: 'Included Quantity Multiplier Line'},
  {id: 'view', type: 'text', label: 'View'}
];

/** Subscription Plan (subscriptionplan) Search Column values so they can be loaded dynamically. */
export const subscriptionplanSearchColumnValues = [

];

/** Subsidiary (subsidiary) Search Column values so they can be loaded dynamically. */
export const subsidiarySearchColumnValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accountingbookcurrency', type: 'select', label: 'Accounting Book Currency'},
  {id: 'anonymouscustomerinboundemail', type: 'text', label: 'Anonymous Customer - Inbound Email'},
  {id: 'anonymouscustomeronlineforms', type: 'text', label: 'Anonymous Customer - Online Forms'},
  {id: 'caseassignmenttemplate', type: 'text', label: 'Employee Notification Template - Case Assignment'},
  {id: 'caseautomaticclosuretemplate', type: 'text', label: 'Customer Notification Template - Automatic Case Closure'},
  {id: 'casecopyemployeetemplate', type: 'text', label: 'Employee Notification Template - Copy Employee'},
  {id: 'casecreationtemplate', type: 'text', label: 'Customer Notification Template - Case Creation'},
  {id: 'caseescalationtemplate', type: 'text', label: 'Employee Notification Template - Escalation'},
  {id: 'caseupdatetemplate', type: 'text', label: 'Customer Notification Template - Case Update'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'companynameforsupportmessages', type: 'text', label: 'Company Name for Support Messages'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'effectivefrom', type: 'date', label: 'Effective From'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'employeecaseupdatetemplate', type: 'text', label: 'Employee Notification Template - Case Update'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'iselimination', type: 'checkbox', label: 'Elimination'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'legalname', type: 'text', label: 'Legal Name'},
  {id: 'mainsupportemailaddress', type: 'email', label: 'Main Support Email Address'},
  {id: 'mossapplies', type: 'checkbox', label: 'MOSS Applies'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'namenohierarchy', type: 'text', label: 'Name (no hierarchy)'},
  {id: 'nexus', type: 'select', label: 'Nexus'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'taxengine', type: 'select', label: 'Tax Engine'},
  {id: 'taxidnum', type: 'text', label: 'Tax ID'},
  {id: 'taxregistrationnumber', type: 'text', label: 'Tax Reg. Number'},
  {id: 'tranprefix', type: 'text', label: 'Transaction Prefix'},
  {id: 'url', type: 'url', label: 'Web Site'},
  {id: 'validuntil', type: 'date', label: 'Valid Until'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Subtotal Item (subtotalitem) Search Column values so they can be loaded dynamically. */
export const subtotalitemSearchColumnValues = [

];

/** Suitelet (suitelet) Search Column values so they can be loaded dynamically. */
export const suiteletSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Supply Chain Snapshot (supplychainsnapshot) Search Column values so they can be loaded dynamically. */
export const supplychainsnapshotSearchColumnValues = [
{id: 'daterun', type: 'datetime', label: 'Date Run'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'futurehorizon', type: 'integer', label: 'Future Horizon'},
  {id: 'futurehorizondate', type: 'date', label: 'Future Horizon Date'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'pasthorizon', type: 'integer', label: 'Past Horizon'},
  {id: 'pasthorizondate', type: 'date', label: 'Past Horizon Date'},
  {id: 'replenishmentmethod', type: 'text', label: 'Replenishment Method'},
  {id: 'stockunit', type: 'text', label: 'Stock Unit'}
];

/** Case (supportcase) Search Column values so they can be loaded dynamically. */
export const supportcaseSearchColumnValues = [
{id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'awaitingreply', type: 'checkbox', label: 'Awaiting Support Reply'},
  {id: 'casenumber', type: 'text', label: 'Number'},
  {id: 'category', type: 'select', label: 'Type'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'customerstage', type: 'select', label: 'Customer Stage'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'enddate', type: 'datetime', label: 'Date Closed'},
  {id: 'escalatee', type: 'select', label: 'Escalated To'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'grabref', type: 'text', label: 'Grab'},
  {id: 'helpdesk', type: 'checkbox', label: 'Help Desk'},
  {id: 'inboundemail', type: 'text', label: 'Inbound Email'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'issue', type: 'select', label: 'Issue'},
  {id: 'issuenumber', type: 'text', label: 'Issue Number'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmessagedate', type: 'datetime', label: 'Last Msg. Date'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastreopeneddate', type: 'datetime', label: 'Last Reopened'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'locked', type: 'checkbox', label: 'Locked'},
  {id: 'module', type: 'select', label: 'Module'},
  {id: 'origin', type: 'select', label: 'Origin'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'product', type: 'select', label: 'Product'},
  {id: 'profile', type: 'select', label: 'Profile'},
  {id: 'serialnumber', type: 'text', label: 'Serial/Lot #'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'datetime', label: 'Incident Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'title', type: 'text', label: 'Subject'}
];

/** Task (task) Search Column values so they can be loaded dynamically. */
export const taskSearchColumnValues = [
{id: 'accesslevel', type: 'text', label: 'Private'},
  {id: 'actualtime', type: 'float', label: 'Actual Work'},
  {id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'duedate', type: 'date', label: 'Due Date'},
  {id: 'estimatedtime', type: 'float', label: 'Initial Time Budget'},
  {id: 'estimatedtimeoverride', type: 'float', label: 'Current Time Budget'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isjobsummarytask', type: 'checkbox', label: 'Is Job Summary Task'},
  {id: 'isjobtask', type: 'checkbox', label: 'Is Job Task'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'markdone', type: 'text', label: 'Mark'},
  {id: 'message', type: 'text', label: 'Comment'},
  {id: 'milestone', type: 'select', label: 'Milestone'},
  {id: 'order', type: 'integer', label: 'Insert'},
  {id: 'owner', type: 'select', label: 'Created By'},
  {id: 'percentcomplete', type: 'percent', label: 'Pct Complete'},
  {id: 'percenttimecomplete', type: 'percent', label: 'Percent Time Complete'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'starttime', type: 'timeofday', label: 'Start Time'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'timeremaining', type: 'float', label: 'Remaining Work'},
  {id: 'title', type: 'text', label: 'Task Title'},
  {id: 'transaction', type: 'select', label: 'Transaction'}
];

/** Tax Account (taxacct) Search Column values so they can be loaded dynamically. */
export const taxacctSearchColumnValues = [

];

/** Tax Detail (taxdetail) Search Column values so they can be loaded dynamically. */
export const taxdetailSearchColumnValues = [
{id: 'account', type: 'text', label: 'Account'},
  {id: 'details', type: 'textarea', label: 'Details'},
  {id: 'linenumber', type: 'integer', label: 'Line Number'},
  {id: 'taxamount', type: 'currency', label: 'Tax Amount'},
  {id: 'taxbasis', type: 'currency', label: 'Tax Basis (Foreign Currency)'},
  {id: 'taxcode', type: 'select', label: 'Tax Code'},
  {id: 'taxfxamount', type: 'currency', label: 'Tax Amount (Foreign Currency)'},
  {id: 'taxrate', type: 'percent', label: 'Tax Rate'},
  {id: 'taxtype', type: 'select', label: 'Tax Type'}
];

/** Tax Group (taxgroup) Search Column values so they can be loaded dynamically. */
export const taxgroupSearchColumnValues = [
{id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'itemid', type: 'text', label: 'Name'},
  {id: 'piggyback', type: 'checkbox', label: 'Piggy Back'},
  {id: 'rate', type: 'currency', label: 'Rate'},
  {id: 'state', type: 'text', label: 'State'},
  {id: 'statedisplayname', type: 'select', label: 'State Display Name'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxitem1', type: 'select', label: 'GST/HST'},
  {id: 'taxitem2', type: 'select', label: 'PST'},
  {id: 'taxtype', type: 'select', label: 'Tax Type'},
  {id: 'unitprice1', type: 'percent', label: 'GST/HST Rate'},
  {id: 'unitprice2', type: 'percent', label: 'PST Rate'},
  {id: 'zip', type: 'textarea', label: 'Zip'}
];

/** Tax Period (taxperiod) Search Column values so they can be loaded dynamically. */
export const taxperiodSearchColumnValues = [
{id: 'allclosed', type: 'checkbox', label: 'All Closed'},
  {id: 'alllocked', type: 'checkbox', label: 'All Locked'},
  {id: 'aplocked', type: 'checkbox', label: 'AP Locked'},
  {id: 'arlocked', type: 'checkbox', label: 'AR Locked'},
  {id: 'closed', type: 'checkbox', label: 'Closed'},
  {id: 'closedondate', type: 'date', label: 'Date Closed On'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isadjust', type: 'checkbox', label: 'Adjust'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isquarter', type: 'checkbox', label: 'Quarter'},
  {id: 'isyear', type: 'checkbox', label: 'Year'},
  {id: 'parent', type: 'select', label: 'Parent'},
  {id: 'payrolllocked', type: 'checkbox', label: 'Payroll Locked'},
  {id: 'periodname', type: 'text', label: 'Name'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Tax Type (taxtype) Search Column values so they can be loaded dynamically. */
export const taxtypeSearchColumnValues = [
{id: 'country', type: 'select', label: 'Country'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'doesnotaddtototal', type: 'checkbox', label: 'Does Not Add to Transaction Total'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nexus', type: 'select', label: 'Nexus'},
  {id: 'payablesaccount', type: 'select', label: 'Payables Account'},
  {id: 'posttoitemcost', type: 'checkbox', label: 'Post to Item Cost'},
  {id: 'receivablesaccount', type: 'select', label: 'Receivables Account'},
  {id: 'reversecharge', type: 'checkbox', label: 'Reverse Charge'},
  {id: 'taxinnetamount', type: 'checkbox', label: 'Tax Included in Net Amount'}
];

/** Term (term) Search Column values so they can be loaded dynamically. */
export const termSearchColumnValues = [
{id: 'datedriven', type: 'checkbox', label: 'Date Driven'},
  {id: 'daydiscountexpires', type: 'integer', label: 'Day Discount Expires'},
  {id: 'dayofmonthnetdue', type: 'integer', label: 'Day of Month Net Due'},
  {id: 'daysuntilexpiry', type: 'integer', label: 'Days Till Discount Expires'},
  {id: 'daysuntilnetdue', type: 'integer', label: 'Days Till Net Due'},
  {id: 'discountpercent', type: 'float', label: '% Discount'},
  {id: 'discountpercentdatedriven', type: 'float', label: 'Date Driven % Discount'},
  {id: 'duenextmonthifwithindays', type: 'integer', label: 'Due Next Month if Within Days'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'preferred', type: 'checkbox', label: 'Preferred'}
];

/** Time (timebill) Search Column values so they can be loaded dynamically. */
export const timebillSearchColumnValues = [
{id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'break', type: 'text', label: 'Break'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'classnohierarchy', type: 'select', label: 'Class (no hierarchy)'},
  {id: 'customer', type: 'select', label: 'Customer:Job'},
  {id: 'date', type: 'date', label: 'Date'},
  {id: 'datecreated', type: 'date', label: 'Date Created'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'departmentnohierarchy', type: 'select', label: 'Department (no hierarchy)'},
  {id: 'durationdecimal', type: 'float', label: 'Duration (Decimal)'},
  {id: 'employee', type: 'select', label: 'Employee'},
  {id: 'endtime', type: 'timeofday', label: 'End Time'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'hours', type: 'text', label: 'Duration'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isbillable', type: 'checkbox', label: 'Billable'},
  {id: 'isexempt', type: 'checkbox', label: 'Exempt'},
  {id: 'isproductive', type: 'checkbox', label: 'Productive'},
  {id: 'isutilized', type: 'checkbox', label: 'Utilized'},
  {id: 'item', type: 'text', label: 'Item'},
  {id: 'lastmodified', type: 'date', label: 'Last Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationnohierarchy', type: 'select', label: 'Location (no hierarchy)'},
  {id: 'memo', type: 'text', label: 'Note'},
  {id: 'paidexternally', type: 'checkbox', label: 'Paid Externally'},
  {id: 'payitem', type: 'select', label: 'Payroll Item'},
  {id: 'payrolldate', type: 'date', label: 'Payroll Date'},
  {id: 'rate', type: 'currency', label: 'Rate'},
  {id: 'rejectionnote', type: 'text', label: 'Rejection Note'},
  {id: 'starttime', type: 'timeofday', label: 'Start Time'},
  {id: 'status', type: 'text', label: 'Status'},
  {id: 'subsidiary', type: 'text', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'text', label: 'Subsidiary (no hierarchy)'},
  {id: 'supervisorapproval', type: 'checkbox', label: 'Approved'},
  {id: 'temporarylocaljurisdiction', type: 'select', label: 'Temporary Local Jurisdiction'},
  {id: 'temporarystatejurisdiction', type: 'select', label: 'Temporary State Jurisdiction'},
  {id: 'timesheet', type: 'select', label: 'Timesheet'},
  {id: 'type', type: 'select', label: 'Type'}
];

/** Time Entry (timeentry) Search Column values so they can be loaded dynamically. */
export const timeentrySearchColumnValues = [
{id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'billingstatus', type: 'text', label: 'Billing Status'},
  {id: 'break', type: 'text', label: 'Break'},
  {id: 'casetaskevent', type: 'select', label: 'Case/Task/Event'},
  {id: 'chargebillingrunid', type: 'integer', label: 'Charge Billing Run ID'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'classnohierarchy', type: 'select', label: 'Class (no hierarchy)'},
  {id: 'customer', type: 'select', label: 'Customer:Job'},
  {id: 'date', type: 'date', label: 'Date'},
  {id: 'datecreated', type: 'date', label: 'Date Created'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'departmentnohierarchy', type: 'select', label: 'Department (no hierarchy)'},
  {id: 'durationdecimal', type: 'float', label: 'Duration (Decimal)'},
  {id: 'employee', type: 'select', label: 'Employee'},
  {id: 'endtime', type: 'timeofday', label: 'End Time'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'hours', type: 'text', label: 'Duration'},
  {id: 'internalid', type: 'integer', label: 'Internal ID'},
  {id: 'isbillable', type: 'checkbox', label: 'Billable'},
  {id: 'isexempt', type: 'checkbox', label: 'Exempt'},
  {id: 'isproductive', type: 'checkbox', label: 'Productive'},
  {id: 'isutilized', type: 'checkbox', label: 'Utilized'},
  {id: 'item', type: 'text', label: 'Item'},
  {id: 'lastmodified', type: 'date', label: 'Last Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationnohierarchy', type: 'select', label: 'Location (no hierarchy)'},
  {id: 'memo', type: 'text', label: 'Note'},
  {id: 'nextapprover', type: 'select', label: 'Next Approver'},
  {id: 'paidexternally', type: 'checkbox', label: 'Paid Externally'},
  {id: 'payitem', type: 'select', label: 'Payroll Item'},
  {id: 'payrolldate', type: 'date', label: 'Payroll Date'},
  {id: 'rate', type: 'currency', label: 'Rate'},
  {id: 'starttime', type: 'timeofday', label: 'Start Time'},
  {id: 'subsidiary', type: 'text', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'text', label: 'Subsidiary (no hierarchy)'},
  {id: 'timesheet', type: 'url', label: 'Timesheet'},
  {id: 'type', type: 'select', label: 'Type'}
];

/** Timesheet (timesheet) Search Column values so they can be loaded dynamically. */
export const timesheetSearchColumnValues = [
{id: 'approvalstatus', type: 'select', label: 'Approval Status (Text)'},
  {id: 'employee', type: 'select', label: 'Employee'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'totalhours', type: 'text', label: 'Total Hours'}
];

/** Topic (topic) Search Column values so they can be loaded dynamically. */
export const topicSearchColumnValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Title'}
];

/** Transaction (transaction) Search Column values so they can be loaded dynamically. */
export const transactionSearchColumnValues = [
{id: 'abbrev', type: 'text', label: 'Abbrev. Type'},
  {id: 'account', type: 'select', label: 'Account'},
  {id: 'accounttype', type: 'text', label: 'Account Type'},
  {id: 'actualshipdate', type: 'date', label: 'Actual Ship/Receipt Date'},
  {id: 'altsalesamount', type: 'currency', label: 'Amount (Alt.Sales)'},
  {id: 'altsalesnetamount', type: 'currency', label: 'Amount (Alt.Sales Net)'},
  {id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'amountpaid', type: 'currency', label: 'Amount Paid'},
  {id: 'amountremaining', type: 'currency', label: 'Amount Remaining'},
  {id: 'amountunbilled', type: 'currency', label: 'Amount Unbilled'},
  {id: 'appliedtoforeignamount', type: 'currency', label: 'Applied To Link Amount (Foreign Currency)'},
  {id: 'appliedtoisfxvariance', type: 'checkbox', label: 'Applied To Link Is FxVariance'},
  {id: 'appliedtolinkamount', type: 'currency', label: 'Applied To Link Amount'},
  {id: 'appliedtolinktype', type: 'select', label: 'Applied To Link Type'},
  {id: 'appliedtotransaction', type: 'select', label: 'Applied To Transaction'},
  {id: 'applyingforeignamount', type: 'currency', label: 'Applying Link Amount (Foreign Currency)'},
  {id: 'applyingisfxvariance', type: 'checkbox', label: 'Applying Link Is FxVariance'},
  {id: 'applyinglinkamount', type: 'currency', label: 'Applying Link Amount'},
  {id: 'applyinglinktype', type: 'select', label: 'Applying Link Type'},
  {id: 'applyingtransaction', type: 'select', label: 'Applying Transaction'},
  {id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'authcode', type: 'text', label: 'Auth. Code'},
  {id: 'autocalculatelag', type: 'checkbox', label: 'Auto-calculate Lag'},
  {id: 'avsstreetmatch', type: 'text', label: 'AVS Street Match'},
  {id: 'avszipmatch', type: 'text', label: 'AVS Zip Match'},
  {id: 'billable', type: 'checkbox', label: 'Billable'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billeddate', type: 'date', label: 'Date Billed'},
  {id: 'billingamount', type: 'currency2', label: 'Billing Amount'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'billingtransaction', type: 'select', label: 'Billing Transaction'},
  {id: 'billvariancestatus', type: 'text', label: 'Bill Variance Status'},
  {id: 'binnumber', type: 'text', label: 'Transaction Bin Number'},
  {id: 'binnumberquantity', type: 'float', label: 'Transaction Bin Quantity'},
  {id: 'buildentireassembly', type: 'checkbox', label: 'Build Sub-Assemblies'},
  {id: 'buildvariance', type: 'float', label: 'Build Variance'},
  {id: 'built', type: 'float', label: 'Built'},
  {id: 'canhavestackablepromotions', type: 'checkbox', label: 'Can have stackable promotions'},
  {id: 'catchupperiod', type: 'text', label: 'Catch Up Period'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccexpdate', type: 'mmyydate', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'ccstreet', type: 'text', label: 'Card Street'},
  {id: 'cczipcode', type: 'text', label: 'Card Zip Code'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'classnohierarchy', type: 'select', label: 'Class (no hierarchy)'},
  {id: 'cleared', type: 'checkbox', label: 'Cleared'},
  {id: 'closed', type: 'checkbox', label: 'Closed'},
  {id: 'closedate', type: 'date', label: 'Date Closed'},
  {id: 'cogsamount', type: 'currency2', label: 'COGS Amount'},
  {id: 'commissioneffectivedate', type: 'date', label: 'Commission Effective Date'},
  {id: 'commit', type: 'select', label: 'Commit'},
  {id: 'confirmationnumber', type: 'text', label: 'Confirmation Number'},
  {id: 'contribution', type: 'percent', label: 'Contribution %'},
  {id: 'contributionprimary', type: 'percent', label: 'Primary Sales Rep Contribution %'},
  {id: 'costcomponentamount', type: 'currency', label: 'Cost Component Amount'},
  {id: 'costcomponentcategory', type: 'text', label: 'Cost Component Category'},
  {id: 'costcomponentitem', type: 'text', label: 'Cost Component Item'},
  {id: 'costcomponentquantity', type: 'float', label: 'Cost Component Quantity'},
  {id: 'costcomponentstandardcost', type: 'float', label: 'Cost Component Standard Cost'},
  {id: 'costestimate', type: 'currency', label: 'Est. Extended Cost (Line)'},
  {id: 'costestimaterate', type: 'currency', label: 'Est. Unit Cost'},
  {id: 'costestimatetype', type: 'text', label: 'Cost Estimate Type'},
  {id: 'createdby', type: 'select', label: 'Created By'},
  {id: 'createdfrom', type: 'select', label: 'Created From'},
  {id: 'creditamount', type: 'currency', label: 'Amount (Credit)'},
  {id: 'cscmatch', type: 'text', label: 'CSC Match'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'customform', type: 'select', label: 'Custom Form'},
  {id: 'customgl', type: 'checkbox', label: 'Custom GL'},
  {id: 'custtype', type: 'select', label: 'Customer Category'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysopen', type: 'integer', label: 'Days Open'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'debitamount', type: 'currency', label: 'Amount (Debit)'},
  {id: 'deferredrevenue', type: 'currency', label: 'Amount (Deferred)'},
  {id: 'deferrevrec', type: 'checkbox', label: 'Delay Rev. Rec.'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'departmentnohierarchy', type: 'select', label: 'Department (no hierarchy)'},
  {id: 'depositdate', type: 'date', label: 'Date Deposited/Refunded'},
  {id: 'deposittransaction', type: 'select', label: 'Deposit/Refund Transaction'},
  {id: 'discountamount', type: 'currency', label: 'Amount Discount'},
  {id: 'docunit', type: 'text', label: 'Transaction Units'},
  {id: 'draccount', type: 'text', label: 'Deferred Revenue Reclassification Account'},
  {id: 'duedate', type: 'date', label: 'Due Date/Receive By'},
  {id: 'effectiverate', type: 'currency2', label: 'Effective Rate'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entity', type: 'select', label: 'Name'},
  {id: 'entitystatus', type: 'select', label: 'Estimate/Opportunity Status'},
  {id: 'estgrossprofit', type: 'currency', label: 'Est. Gross Profit (Line)'},
  {id: 'estgrossprofitpct', type: 'percent', label: 'Est. Gross Profit Percent (Line)'},
  {id: 'estgrossprofitpercent', type: 'percent', label: 'Est. Gross Profit Percent (Transaction)'},
  {id: 'exchangerate', type: 'currency2', label: 'Exchange Rate'},
  {id: 'excludecommission', type: 'checkbox', label: 'Exclude Commissions'},
  {id: 'excludefromraterequest', type: 'checkbox', label: 'Exclude Item from Rate Request'},
  {id: 'expectedclosedate', type: 'date', label: 'Expected Close'},
  {id: 'expectedreceiptdate', type: 'date', label: 'Expected Receipt Date'},
  {id: 'expensecategory', type: 'select', label: 'Expense Category'},
  {id: 'expensedate', type: 'date', label: 'Expense Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'firmed', type: 'checkbox', label: 'Firmed'},
  {id: 'forecasttype', type: 'select', label: 'Forecast Type'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fulfillingtransaction', type: 'select', label: 'Fulfilling/Receiving Transaction'},
  {id: 'fxaccount', type: 'text', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxamount', type: 'currency', label: 'Amount (Foreign Currency)'},
  {id: 'fxcostestimate', type: 'currency', label: 'Est. Extended Cost (Line) (Foreign Currency)'},
  {id: 'fxcostestimaterate', type: 'currency', label: 'Est. Unit Cost (Foreign Currency)'},
  {id: 'fxestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Line) (Foreign Currency)'},
  {id: 'fxtrancostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction) (Foreign Currency)'},
  {id: 'fxvsoeallocation', type: 'currency', label: 'VSOE Allocation (Foreign Currency)'},
  {id: 'fxvsoeamount', type: 'currency', label: 'VSOE Amount (Foreign Currency)'},
  {id: 'fxvsoeprice', type: 'currency2', label: 'VSOE Price (Foreign Currency)'},
  {id: 'gcoavailabeltocharge', type: 'currency', label: 'Funds Available to Process'},
  {id: 'gcoavailabletorefund', type: 'currency', label: 'Funds Available to Refund'},
  {id: 'gcoavsstreetmatch', type: 'text', label: 'AVS Street Match (Google)'},
  {id: 'gcoavszipmatch', type: 'text', label: 'AVS Zip Match (Google)'},
  {id: 'gcobuyeraccountage', type: 'integer', label: 'Buyer Account Age'},
  {id: 'gcobuyerip', type: 'text', label: 'Buyer IP Address'},
  {id: 'gcochargeamount', type: 'currency', label: 'Pending Charges'},
  {id: 'gcochargebackamount', type: 'currency', label: 'Chargeback Amount'},
  {id: 'gcoconfirmedchargedtotal', type: 'currency', label: 'Charge Amount Confirmed'},
  {id: 'gcoconfirmedrefundedtotal', type: 'currency', label: 'Confirmed Refund Amount'},
  {id: 'gcocreditcardnumber', type: 'text', label: 'Credit Card (Google)'},
  {id: 'gcocscmatch', type: 'text', label: 'CSC Match (Google)'},
  {id: 'gcofinancialstate', type: 'text', label: 'Google Order Financial State'},
  {id: 'gcofulfillmentstate', type: 'text', label: 'Google Order Fulfillment State'},
  {id: 'gcoorderid', type: 'text', label: 'Google Order ID'},
  {id: 'gcoordertotal', type: 'currency', label: 'Google Order Total'},
  {id: 'gcopromotionamount', type: 'currency', label: 'Google Checkout Promotion Amount'},
  {id: 'gcopromotionname', type: 'text', label: 'Google Checkout Promotion'},
  {id: 'gcorefundamount', type: 'currency', label: 'Pending Refund Amount'},
  {id: 'gcoshippingtotal', type: 'currency', label: 'Google Shipping Total'},
  {id: 'gcostatechangeddetail', type: 'text', label: 'Reason for Cancellation'},
  {id: 'giftcert', type: 'text', label: 'Gift Certificate'},
  {id: 'grossamount', type: 'currency', label: 'Amount (Gross)'},
  {id: 'includeinforecast', type: 'checkbox', label: 'Include in Forecast'},
  {id: 'incoterm', type: 'select', label: 'Incoterm'},
  {id: 'intercostatus', type: 'select', label: 'Intercompany Status'},
  {id: 'intercotransaction', type: 'text', label: 'Paired Intercompany Transaction'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'invsoebundle', type: 'checkbox', label: 'In VSOE Bundle'},
  {id: 'isallocation', type: 'checkbox', label: 'Is Allocation'},
  {id: 'isbackflush', type: 'checkbox', label: 'Backflush'},
  {id: 'iscustomapproval', type: 'checkbox', label: 'Custom Approval'},
  {id: 'isgcochargeback', type: 'checkbox', label: 'Chargeback'},
  {id: 'isgcochargeconfirmed', type: 'checkbox', label: 'Charge Confirmed'},
  {id: 'isgcopaymentguaranteed', type: 'checkbox', label: 'Payment Guaranteed by Google'},
  {id: 'isgcorefundconfirmed', type: 'checkbox', label: 'Refund Confirmed'},
  {id: 'isinsidedelivery', type: 'checkbox', label: 'Is Inside Delivery'},
  {id: 'isinsidepickup', type: 'checkbox', label: 'Is Inside Pickup'},
  {id: 'isintercompanyadjustment', type: 'checkbox', label: 'Is Intercompany Adjustment'},
  {id: 'isreversal', type: 'checkbox', label: 'Is Reversal'},
  {id: 'isrevrectransaction', type: 'checkbox', label: 'Is Amortization/Revenue Recognition'},
  {id: 'isscrap', type: 'checkbox', label: 'Is Scrap'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'istransferpricecosting', type: 'checkbox', label: 'Use Item Cost as Transfer Cost'},
  {id: 'iswip', type: 'checkbox', label: 'WIP'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'itemfulfillmentchoice', type: 'select', label: 'Fulfillment Choice (Line Level)'},
  {id: 'itemrevision', type: 'select', label: 'Item Revision'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'line', type: 'integer', label: 'Line ID'},
  {id: 'linesequencenumber', type: 'integer', label: 'Line Sequence Number'},
  {id: 'lineuniquekey', type: 'integer', label: 'Line Unique Key'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationnohierarchy', type: 'select', label: 'Location (no hierarchy)'},
  {id: 'mainline', type: 'text', label: '*'},
  {id: 'mainname', type: 'select', label: 'Main Line Name'},
  {id: 'matchbilltoreceipt', type: 'checkbox', label: 'Match Bill To Receipt'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'memomain', type: 'text', label: 'Memo (Main)'},
  {id: 'memorized', type: 'checkbox', label: 'Memorized'},
  {id: 'merchantaccount', type: 'select', label: 'Credit Card Processor'},
  {id: 'message', type: 'text', label: 'Message'},
  {id: 'multisubsidiary', type: 'checkbox', label: 'Intercompany'},
  {id: 'netamount', type: 'currency', label: 'Amount (Net)'},
  {id: 'netamountnotax', type: 'currency', label: 'Amount (Net of Tax)'},
  {id: 'nextapprover', type: 'select', label: 'Next Approver'},
  {id: 'nextbilldate', type: 'date', label: 'Next Bill Date'},
  {id: 'nonreimbursable', type: 'checkbox', label: 'Non-reimbursable'},
  {id: 'opportunity', type: 'select', label: 'Opportunity'},
  {id: 'options', type: 'namevaluelist', label: 'Options'},
  {id: 'originator', type: 'select', label: 'Originator'},
  {id: 'otherrefnum', type: 'text', label: 'PO/Check Number'},
  {id: 'packagecount', type: 'integer', label: 'Package Count'},
  {id: 'paidamount', type: 'currency2', label: 'Paid Amount'},
  {id: 'paidtransaction', type: 'select', label: 'Paid Transaction'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'percent', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'payingamount', type: 'currency2', label: 'Paying Amount'},
  {id: 'payingtransaction', type: 'select', label: 'Paying Transaction'},
  {id: 'paymenteventdate', type: 'datetime', label: 'Payment Event Date'},
  {id: 'paymenteventholdreason', type: 'text', label: 'Payment Event Hold Reason'},
  {id: 'paymenteventpurchasecardused', type: 'checkbox', label: 'Payment Event Purchase Card Used'},
  {id: 'paymenteventpurchasedatasent', type: 'checkbox', label: 'Payment Event Purchase Data Sent'},
  {id: 'paymenteventresult', type: 'text', label: 'Payment Event Result'},
  {id: 'paymenteventtype', type: 'text', label: 'Payment Event Type'},
  {id: 'paymenthold', type: 'checkbox', label: 'Payment Hold'},
  {id: 'paymentmethod', type: 'select', label: 'Payment Method'},
  {id: 'paypalpending', type: 'checkbox', label: 'Pending PayPal Authorization'},
  {id: 'paypalstatus', type: 'text', label: 'PayPal Payment Status'},
  {id: 'paypaltranid', type: 'text', label: 'PayPal Transaction ID'},
  {id: 'payrollbatch', type: 'text', label: 'Payroll Batch'},
  {id: 'pnrefnum', type: 'text', label: 'P/N Ref'},
  {id: 'porate', type: 'currency2', label: 'PO Rate'},
  {id: 'posting', type: 'checkbox', label: 'Posting'},
  {id: 'postingperiod', type: 'select', label: 'Period'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'print', type: 'text', label: 'Print'},
  {id: 'probability', type: 'percent', label: 'Probability'},
  {id: 'projectedamount', type: 'currency', label: 'Projected Total'},
  {id: 'projecttask', type: 'select', label: 'Project task'},
  {id: 'promocode', type: 'select', label: 'Promotion'},
  {id: 'purchaseorder', type: 'select', label: 'Purchase Order'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'quantitybilled', type: 'float', label: 'Quantity Billed'},
  {id: 'quantitycommitted', type: 'float', label: 'Quantity Committed'},
  {id: 'quantitypacked', type: 'float', label: 'Quantity Packed'},
  {id: 'quantitypicked', type: 'float', label: 'Quantity Picked'},
  {id: 'quantityrevcommitted', type: 'float', label: 'Quantity Rev. Committed'},
  {id: 'quantityshiprecv', type: 'float', label: 'Quantity Fulfilled/Received'},
  {id: 'quantityuom', type: 'float', label: 'Quantity in Transaction Units'},
  {id: 'rate', type: 'currency2', label: 'Item Rate'},
  {id: 'realizedgainpostingtransaction', type: 'select', label: 'Realized Gain Posting Transaction'},
  {id: 'recognizedrevenue', type: 'currency', label: 'Amount (Recognized)'},
  {id: 'recordtype', type: 'text', label: 'Record Type'},
  {id: 'revcommitstatus', type: 'text', label: 'Rev. Commit. Status'},
  {id: 'revcommittingtransaction', type: 'select', label: 'Revenue Committing Transaction'},
  {id: 'revenuestatus', type: 'text', label: 'Revenue Status'},
  {id: 'reversaldate', type: 'date', label: 'Reversal Date'},
  {id: 'reversalnumber', type: 'text', label: 'Reversal Number'},
  {id: 'revrecenddate', type: 'date', label: 'Rev. Rec. End Date'},
  {id: 'revreconrevcommitment', type: 'checkbox', label: 'Rev. Rec. On Rev. Committment'},
  {id: 'revrecstartdate', type: 'date', label: 'Rev. Rec. Start Date'},
  {id: 'rgaccount', type: 'select', label: 'Realized Gain Account'},
  {id: 'rgamount', type: 'currency', label: 'Realized Gain Amount'},
  {id: 'saleseffectivedate', type: 'date', label: 'Sales Effective Date'},
  {id: 'salesorder', type: 'select', label: 'Sales Order'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'schedulingmethod', type: 'text', label: 'Scheduling Method'},
  {id: 'serialnumber', type: 'text', label: 'Transaction Serial/Lot Number'},
  {id: 'serialnumbercost', type: 'currency', label: 'Transaction Serial/Lot Number Amount'},
  {id: 'serialnumbercostadjustment', type: 'currency', label: 'Transaction Serial/Lot Number Cost Adjustment'},
  {id: 'serialnumberquantity', type: 'float', label: 'Transaction Serial/Lot Number Quantity'},
  {id: 'serialnumbers', type: 'text', label: 'Serial/Lot Numbers'},
  {id: 'shipcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'shipdate', type: 'date', label: 'Ship Date'},
  {id: 'shipgroup', type: 'integer', label: 'Ship Group'},
  {id: 'shipmethod', type: 'select', label: 'Ship Via'},
  {id: 'shippingamount', type: 'currency', label: 'Amount (Shipping)'},
  {id: 'shiprecvstatusline', type: 'checkbox', label: 'Fulfilled/Received (Line Level)'},
  {id: 'shipto', type: 'select', label: 'Ship To'},
  {id: 'signedamount', type: 'currency', label: 'Amount (Signed)'},
  {id: 'source', type: 'select', label: 'Source'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'statusref', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxamount', type: 'currency', label: 'Amount (Tax)'},
  {id: 'taxcode', type: 'select', label: 'Tax Item'},
  {id: 'taxline', type: 'checkbox', label: 'Tax Line'},
  {id: 'taxperiod', type: 'select', label: 'Tax Period'},
  {id: 'taxtotal', type: 'currency', label: 'Amount (Tax Total)'},
  {id: 'terminmonths', type: 'integer', label: 'Rev. Rec. Term in Months'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'termsofsale', type: 'text', label: 'Terms Of Sale'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'tobeemailed', type: 'checkbox', label: 'To Be Emailed'},
  {id: 'tobeprinted', type: 'checkbox', label: 'To Be Printed'},
  {id: 'tosubsidiary', type: 'select', label: 'To Subsidiary'},
  {id: 'tosubsidiarynohierarchy', type: 'select', label: 'To Subsidiary (no hierarchy)'},
  {id: 'total', type: 'currency', label: 'Amount (Transaction Total)'},
  {id: 'totalcostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction)'},
  {id: 'trackingnumbers', type: 'text', label: 'Tracking Numbers'},
  {id: 'trandate', type: 'date', label: 'Date'},
  {id: 'tranestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction)'},
  {id: 'tranfxestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction) (Foreign Currency)'},
  {id: 'tranid', type: 'text', label: 'Number'},
  {id: 'tranisvsoebundle', type: 'checkbox', label: 'Transaction Is VSOE Bundle'},
  {id: 'transactiondiscount', type: 'checkbox', label: 'Transaction Discount'},
  {id: 'transactionlinetype', type: 'select', label: 'Transaction Line Type'},
  {id: 'transactionnumber', type: 'text', label: 'Transaction Number'},
  {id: 'transferlocation', type: 'select', label: 'To Location'},
  {id: 'transferorderitemline', type: 'text', label: 'Transfer Order Item Line Id'},
  {id: 'transferorderquantitycommitted', type: 'float', label: 'Transfer Order Quantity Committed'},
  {id: 'transferorderquantitypacked', type: 'float', label: 'Transfer Order Quantity Packed'},
  {id: 'transferorderquantitypicked', type: 'float', label: 'Transfer Order Quantity Picked'},
  {id: 'transferorderquantityreceived', type: 'float', label: 'Transfer Order Quantity Received'},
  {id: 'transferorderquantityshipped', type: 'float', label: 'Transfer Order Quantity Shipped'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unit', type: 'text', label: 'Units'},
  {id: 'unitcostoverride', type: 'currency', label: 'Unit Cost Override'},
  {id: 'vendtype', type: 'select', label: 'Vendor Category'},
  {id: 'visibletocustomer', type: 'checkbox', label: 'Available In Customer Center'},
  {id: 'vsoeallocation', type: 'currency', label: 'VSOE Allocation'},
  {id: 'vsoeamount', type: 'currency', label: 'VSOE Amount'},
  {id: 'vsoedeferral', type: 'text', label: 'Deferral'},
  {id: 'vsoedelivered', type: 'checkbox', label: 'Delivered'},
  {id: 'vsoepermitdiscount', type: 'text', label: 'Permit Discount'},
  {id: 'vsoeprice', type: 'currency2', label: 'VSOE Price'},
  {id: 'website', type: 'text', label: 'Web Site'}
];

/** Transfer Order (transferorder) Search Column values so they can be loaded dynamically. */
export const transferorderSearchColumnValues = [

];

/** Units Type (unitstype) Search Column values so they can be loaded dynamically. */
export const unitstypeSearchColumnValues = [
{id: 'abbreviation', type: 'text', label: 'Abbreviation Name'},
  {id: 'baseunit', type: 'checkbox', label: 'Is Base Unit'},
  {id: 'conversionrate', type: 'text', label: 'Rate'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'pluralabbreviation', type: 'text', label: 'Abbreviation Name(Plural)'},
  {id: 'pluralname', type: 'text', label: 'Unit Name(Plural)'},
  {id: 'unitname', type: 'text', label: 'Unit Name'}
];

/** Userevent Script (usereventscript) Search Column values so they can be loaded dynamically. */
export const usereventscriptSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Vendor (vendor) Search Column values so they can be loaded dynamically. */
export const vendorSearchColumnValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'text', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addressinternalid', type: 'text', label: 'Address Internal ID'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'text', label: 'Address Phone'},
  {id: 'altcontact', type: 'text', label: 'Alt. Contact'},
  {id: 'altemail', type: 'email', label: 'Alt. Email'},
  {id: 'altname', type: 'text', label: 'Name'},
  {id: 'altphone', type: 'phone', label: 'Office Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'billcountrycode', type: 'text', label: 'Billing Country Code'},
  {id: 'billzipcode', type: 'text', label: 'Billing Zip'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'text', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'contact', type: 'select', label: 'Primary Contact'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'currentexchangerate', type: 'float', label: 'Current Currency Exchange Rate'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'eligibleforcommission', type: 'checkbox', label: 'Eligible for Commission'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'entitynumber', type: 'integer', label: 'Number'},
  {id: 'expenseaccount', type: 'select', label: 'Default Expense Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'fax', type: 'text', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'homephone', type: 'phone', label: 'Home Phone'},
  {id: 'image', type: 'select', label: 'Image'},
  {id: 'incoterm', type: 'select', label: 'Incoterm'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'is1099eligible', type: 'checkbox', label: '1099 Eligible'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isjobresourcevend', type: 'checkbox', label: 'Job Resource'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'laborcost', type: 'currency', label: 'Labor Cost'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastviewed', type: 'datetime', label: 'Last Viewed'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'mobilephone', type: 'phone', label: 'Mobile Phone'},
  {id: 'payablesaccount', type: 'select', label: 'Default Payables Account'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'printoncheckas', type: 'text', label: 'Print As'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcountrycode', type: 'text', label: 'Shipping Country Code'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'statedisplayname', type: 'select', label: 'State/Province Display Name'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'datetime', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subsidiarynohierarchy', type: 'select', label: 'Subsidiary (no hierarchy)'},
  {id: 'taxidnum', type: 'text', label: 'Tax ID'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'text', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'},
  {id: 'zipcode', type: 'text', label: 'Zip Code'}
];

/** Vendor Bill (vendorbill) Search Column values so they can be loaded dynamically. */
export const vendorbillSearchColumnValues = [

];

/** Vendor Category (vendorcategory) Search Column values so they can be loaded dynamically. */
export const vendorcategorySearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'}
];

/** Vendor Credit (vendorcredit) Search Column values so they can be loaded dynamically. */
export const vendorcreditSearchColumnValues = [

];

/** Vendor Payment (vendorpayment) Search Column values so they can be loaded dynamically. */
export const vendorpaymentSearchColumnValues = [

];

/** Vendor Return Authorization (vendorreturnauthorization) Search Column values so they can be loaded dynamically. */
export const vendorreturnauthorizationSearchColumnValues = [

];

/** Vendor-Subsidiary Relationship (vendorsubsidiaryrelationship) Search Column values so they can be loaded dynamically. */
export const vendorsubsidiaryrelationshipSearchColumnValues = [

];

/** Website (website) Search Column values so they can be loaded dynamically. */
export const websiteSearchColumnValues = [

];

/** Win-Loss Reason (winlossreason) Search Column values so they can be loaded dynamically. */
export const winlossreasonSearchColumnValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Workflow Action Script (workflowactionscript) Search Column values so they can be loaded dynamically. */
export const workflowactionscriptSearchColumnValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'DELETE Function'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formulacurrency', type: 'currency', label: 'Formula (Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formuladatetime', type: 'datetime', label: 'Formula (Date/Time)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulapercent', type: 'percent', label: 'Formula (Percent)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'GET Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'postfunction', type: 'text', label: 'POST Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'PUT Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Work Order (workorder) Search Column values so they can be loaded dynamically. */
export const workorderSearchColumnValues = [

];

/** Work Order Close (workorderclose) Search Column values so they can be loaded dynamically. */
export const workordercloseSearchColumnValues = [

];

/** Work Order Completion (workordercompletion) Search Column values so they can be loaded dynamically. */
export const workordercompletionSearchColumnValues = [

];

/** Work Order Issue (workorderissue) Search Column values so they can be loaded dynamically. */
export const workorderissueSearchColumnValues = [

];

/** Workplace (workplace) Search Column values so they can be loaded dynamically. */
export const workplaceSearchColumnValues = [
{id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'text', label: 'Country'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'namenohierarchy', type: 'text', label: 'Name (no hierarchy)'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'state', type: 'text', label: 'State/Province'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Field Search Column values definitions so they can be consumed dynamically not only as types. */
export const typedSearchColumnValues = {
account: accountSearchColumnValues,
  accountingbook: accountingbookSearchColumnValues,
  accountingcontext: accountingcontextSearchColumnValues,
  accountingperiod: accountingperiodSearchColumnValues,
  accountingtransaction: accountingtransactionSearchColumnValues,
  activity: activitySearchColumnValues,
  address: addressSearchColumnValues,
  advintercompanyjournalentry: advintercompanyjournalentrySearchColumnValues,
  allocationschedule: allocationscheduleSearchColumnValues,
  amortizationschedule: amortizationscheduleSearchColumnValues,
  amortizationtemplate: amortizationtemplateSearchColumnValues,
  assemblybuild: assemblybuildSearchColumnValues,
  assemblyitem: assemblyitemSearchColumnValues,
  assemblyitembom: assemblyitembomSearchColumnValues,
  assemblyunbuild: assemblyunbuildSearchColumnValues,
  billingaccount: billingaccountSearchColumnValues,
  billingclass: billingclassSearchColumnValues,
  billingratecard: billingratecardSearchColumnValues,
  billingrevenueevent: billingrevenueeventSearchColumnValues,
  billingschedule: billingscheduleSearchColumnValues,
  bin: binSearchColumnValues,
  bintransfer: bintransferSearchColumnValues,
  binworksheet: binworksheetSearchColumnValues,
  blanketpurchaseorder: blanketpurchaseorderSearchColumnValues,
  bom: bomSearchColumnValues,
  bomrevision: bomrevisionSearchColumnValues,
  bulkownershiptransfer: bulkownershiptransferSearchColumnValues,
  bundleinstallationscript: bundleinstallationscriptSearchColumnValues,
  calendarevent: calendareventSearchColumnValues,
  campaign: campaignSearchColumnValues,
  campaignresponse: campaignresponseSearchColumnValues,
  campaigntemplate: campaigntemplateSearchColumnValues,
  cashrefund: cashrefundSearchColumnValues,
  cashsale: cashsaleSearchColumnValues,
  charge: chargeSearchColumnValues,
  chargerule: chargeruleSearchColumnValues,
  check: checkSearchColumnValues,
  classification: classificationSearchColumnValues,
  clientscript: clientscriptSearchColumnValues,
  cmscontent: cmscontentSearchColumnValues,
  cmscontenttype: cmscontenttypeSearchColumnValues,
  commercecategory: commercecategorySearchColumnValues,
  competitor: competitorSearchColumnValues,
  consolidatedexchangerate: consolidatedexchangerateSearchColumnValues,
  contact: contactSearchColumnValues,
  contactcategory: contactcategorySearchColumnValues,
  contactrole: contactroleSearchColumnValues,
  costcategory: costcategorySearchColumnValues,
  couponcode: couponcodeSearchColumnValues,
  creditcardcharge: creditcardchargeSearchColumnValues,
  creditcardrefund: creditcardrefundSearchColumnValues,
  creditmemo: creditmemoSearchColumnValues,
  currency: currencySearchColumnValues,
  customer: customerSearchColumnValues,
  customercategory: customercategorySearchColumnValues,
  customerdeposit: customerdepositSearchColumnValues,
  customermessage: customermessageSearchColumnValues,
  customerpayment: customerpaymentSearchColumnValues,
  customerpaymentauthorization: customerpaymentauthorizationSearchColumnValues,
  customerrefund: customerrefundSearchColumnValues,
  customerstatus: customerstatusSearchColumnValues,
  customersubsidiaryrelationship: customersubsidiaryrelationshipSearchColumnValues,
  customrecord: customrecordSearchColumnValues,
  deletedrecord: deletedrecordSearchColumnValues,
  department: departmentSearchColumnValues,
  deposit: depositSearchColumnValues,
  depositapplication: depositapplicationSearchColumnValues,
  descriptionitem: descriptionitemSearchColumnValues,
  discountitem: discountitemSearchColumnValues,
  downloaditem: downloaditemSearchColumnValues,
  emailtemplate: emailtemplateSearchColumnValues,
  employee: employeeSearchColumnValues,
  entity: entitySearchColumnValues,
  entityaccountmapping: entityaccountmappingSearchColumnValues,
  entitygroup: entitygroupSearchColumnValues,
  estimate: estimateSearchColumnValues,
  expensecategory: expensecategorySearchColumnValues,
  expensereport: expensereportSearchColumnValues,
  fairvalueprice: fairvaluepriceSearchColumnValues,
  file: fileSearchColumnValues,
  fixedamountprojectrevenuerule: fixedamountprojectrevenueruleSearchColumnValues,
  folder: folderSearchColumnValues,
  fulfillmentrequest: fulfillmentrequestSearchColumnValues,
  genericresource: genericresourceSearchColumnValues,
  giftcertificate: giftcertificateSearchColumnValues,
  giftcertificateitem: giftcertificateitemSearchColumnValues,
  globalaccountmapping: globalaccountmappingSearchColumnValues,
  globalinventoryrelationship: globalinventoryrelationshipSearchColumnValues,
  inboundshipment: inboundshipmentSearchColumnValues,
  intercompallocationschedule: intercompallocationscheduleSearchColumnValues,
  intercompanyjournalentry: intercompanyjournalentrySearchColumnValues,
  intercompanytransferorder: intercompanytransferorderSearchColumnValues,
  inventoryadjustment: inventoryadjustmentSearchColumnValues,
  inventorycostrevaluation: inventorycostrevaluationSearchColumnValues,
  inventorycount: inventorycountSearchColumnValues,
  inventorydetail: inventorydetailSearchColumnValues,
  inventoryitem: inventoryitemSearchColumnValues,
  inventorynumber: inventorynumberSearchColumnValues,
  inventorynumberbin: inventorynumberbinSearchColumnValues,
  inventorystatus: inventorystatusSearchColumnValues,
  inventorystatuschange: inventorystatuschangeSearchColumnValues,
  inventorytransfer: inventorytransferSearchColumnValues,
  invoice: invoiceSearchColumnValues,
  issue: issueSearchColumnValues,
  issueproduct: issueproductSearchColumnValues,
  issueproductversion: issueproductversionSearchColumnValues,
  item: itemSearchColumnValues,
  itemaccountmapping: itemaccountmappingSearchColumnValues,
  itembinnumber: itembinnumberSearchColumnValues,
  itemdemandplan: itemdemandplanSearchColumnValues,
  itemfulfillment: itemfulfillmentSearchColumnValues,
  itemgroup: itemgroupSearchColumnValues,
  itemlocationconfiguration: itemlocationconfigurationSearchColumnValues,
  itemreceipt: itemreceiptSearchColumnValues,
  itemrevision: itemrevisionSearchColumnValues,
  itemsupplyplan: itemsupplyplanSearchColumnValues,
  job: jobSearchColumnValues,
  jobstatus: jobstatusSearchColumnValues,
  jobtype: jobtypeSearchColumnValues,
  journalentry: journalentrySearchColumnValues,
  kititem: kititemSearchColumnValues,
  laborbasedprojectrevenuerule: laborbasedprojectrevenueruleSearchColumnValues,
  landedcost: landedcostSearchColumnValues,
  lead: leadSearchColumnValues,
  location: locationSearchColumnValues,
  lotnumberedassemblyitem: lotnumberedassemblyitemSearchColumnValues,
  lotnumberedinventoryitem: lotnumberedinventoryitemSearchColumnValues,
  manufacturingcosttemplate: manufacturingcosttemplateSearchColumnValues,
  manufacturingoperationtask: manufacturingoperationtaskSearchColumnValues,
  manufacturingrouting: manufacturingroutingSearchColumnValues,
  mapreducescript: mapreducescriptSearchColumnValues,
  markupitem: markupitemSearchColumnValues,
  massupdatescript: massupdatescriptSearchColumnValues,
  merchandisehierarchylevel: merchandisehierarchylevelSearchColumnValues,
  merchandisehierarchynode: merchandisehierarchynodeSearchColumnValues,
  merchandisehierarchyversion: merchandisehierarchyversionSearchColumnValues,
  message: messageSearchColumnValues,
  mfgplannedtime: mfgplannedtimeSearchColumnValues,
  msesubsidiary: msesubsidiarySearchColumnValues,
  nexus: nexusSearchColumnValues,
  noninventoryitem: noninventoryitemSearchColumnValues,
  note: noteSearchColumnValues,
  notetype: notetypeSearchColumnValues,
  opportunity: opportunitySearchColumnValues,
  orderschedule: orderscheduleSearchColumnValues,
  originatinglead: originatingleadSearchColumnValues,
  otherchargeitem: otherchargeitemSearchColumnValues,
  othername: othernameSearchColumnValues,
  othernamecategory: othernamecategorySearchColumnValues,
  partner: partnerSearchColumnValues,
  partnercategory: partnercategorySearchColumnValues,
  paycheck: paycheckSearchColumnValues,
  paycheckjournal: paycheckjournalSearchColumnValues,
  paymentitem: paymentitemSearchColumnValues,
  paymentmethod: paymentmethodSearchColumnValues,
  payrollbatch: payrollbatchSearchColumnValues,
  payrollitem: payrollitemSearchColumnValues,
  pctcompleteprojectrevenuerule: pctcompleteprojectrevenueruleSearchColumnValues,
  periodendjournal: periodendjournalSearchColumnValues,
  phonecall: phonecallSearchColumnValues,
  portlet: portletSearchColumnValues,
  pricebook: pricebookSearchColumnValues,
  pricelevel: pricelevelSearchColumnValues,
  priceplan: priceplanSearchColumnValues,
  pricing: pricingSearchColumnValues,
  pricinggroup: pricinggroupSearchColumnValues,
  projectexpensetype: projectexpensetypeSearchColumnValues,
  projecttask: projecttaskSearchColumnValues,
  projecttaskassignment: projecttaskassignmentSearchColumnValues,
  projecttemplate: projecttemplateSearchColumnValues,
  promotioncode: promotioncodeSearchColumnValues,
  prospect: prospectSearchColumnValues,
  purchasecontract: purchasecontractSearchColumnValues,
  purchaseorder: purchaseorderSearchColumnValues,
  purchaserequisition: purchaserequisitionSearchColumnValues,
  reallocateitem: reallocateitemSearchColumnValues,
  receiveinboundshipment: receiveinboundshipmentSearchColumnValues,
  resourceallocation: resourceallocationSearchColumnValues,
  restlet: restletSearchColumnValues,
  returnauthorization: returnauthorizationSearchColumnValues,
  revenuearrangement: revenuearrangementSearchColumnValues,
  revenuecommitment: revenuecommitmentSearchColumnValues,
  revenuecommitmentreversal: revenuecommitmentreversalSearchColumnValues,
  revenueplan: revenueplanSearchColumnValues,
  revrecschedule: revrecscheduleSearchColumnValues,
  revrectemplate: revrectemplateSearchColumnValues,
  role: roleSearchColumnValues,
  salesorder: salesorderSearchColumnValues,
  salesrole: salesroleSearchColumnValues,
  salestaxitem: salestaxitemSearchColumnValues,
  scheduledscript: scheduledscriptSearchColumnValues,
  scheduledscriptinstance: scheduledscriptinstanceSearchColumnValues,
  scriptdeployment: scriptdeploymentSearchColumnValues,
  serializedassemblyitem: serializedassemblyitemSearchColumnValues,
  serializedinventoryitem: serializedinventoryitemSearchColumnValues,
  serviceitem: serviceitemSearchColumnValues,
  shipitem: shipitemSearchColumnValues,
  shoppingcart: shoppingcartSearchColumnValues,
  solution: solutionSearchColumnValues,
  statisticaljournalentry: statisticaljournalentrySearchColumnValues,
  storepickupfulfillment: storepickupfulfillmentSearchColumnValues,
  subscription: subscriptionSearchColumnValues,
  subscriptionchangeorder: subscriptionchangeorderSearchColumnValues,
  subscriptionline: subscriptionlineSearchColumnValues,
  subscriptionplan: subscriptionplanSearchColumnValues,
  subsidiary: subsidiarySearchColumnValues,
  subtotalitem: subtotalitemSearchColumnValues,
  suitelet: suiteletSearchColumnValues,
  supplychainsnapshot: supplychainsnapshotSearchColumnValues,
  supportcase: supportcaseSearchColumnValues,
  task: taskSearchColumnValues,
  taxacct: taxacctSearchColumnValues,
  taxdetail: taxdetailSearchColumnValues,
  taxgroup: taxgroupSearchColumnValues,
  taxperiod: taxperiodSearchColumnValues,
  taxtype: taxtypeSearchColumnValues,
  term: termSearchColumnValues,
  timebill: timebillSearchColumnValues,
  timeentry: timeentrySearchColumnValues,
  timesheet: timesheetSearchColumnValues,
  topic: topicSearchColumnValues,
  transaction: transactionSearchColumnValues,
  transferorder: transferorderSearchColumnValues,
  unitstype: unitstypeSearchColumnValues,
  usereventscript: usereventscriptSearchColumnValues,
  vendor: vendorSearchColumnValues,
  vendorbill: vendorbillSearchColumnValues,
  vendorcategory: vendorcategorySearchColumnValues,
  vendorcredit: vendorcreditSearchColumnValues,
  vendorpayment: vendorpaymentSearchColumnValues,
  vendorreturnauthorization: vendorreturnauthorizationSearchColumnValues,
  vendorsubsidiaryrelationship: vendorsubsidiaryrelationshipSearchColumnValues,
  website: websiteSearchColumnValues,
  winlossreason: winlossreasonSearchColumnValues,
  workflowactionscript: workflowactionscriptSearchColumnValues,
  workorder: workorderSearchColumnValues,
  workorderclose: workordercloseSearchColumnValues,
  workordercompletion: workordercompletionSearchColumnValues,
  workorderissue: workorderissueSearchColumnValues,
  workplace: workplaceSearchColumnValues
};
