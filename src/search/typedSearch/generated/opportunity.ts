// This file is automatically generated - don't edit it. 
// Search Types for record Opportunity (opportunity)

// Search Columns

/** Opportunity (opportunity) Search Columns definition */
export interface opportunitySearchColumn {
  /** Action Item (actionitem: text) */
      actionitem?: string;
  /** Always Available Offline (availableoffline: checkbox) */
      availableoffline?: boolean;
  /** Buying Reason (buyingreason: text) */
      buyingreason?: string;
  /** Buying Time Frame (buyingtimeframe: text) */
      buyingtimeframe?: string;
  /** Class (class: select) */
      class?: string;
  /** Class (no hierarchy) (classnohierarchy: select) */
      classnohierarchy?: string;
  /** Actual Close (closedate: date) */
      closedate?: string;
  /** Competitor (competitor: select) */
      competitor?: string;
  /** Contribution % (contribution: percent) */
      contribution?: string;
  /** Primary Sales Rep Contribution % (contributionprimary: percent) */
      contributionprimary?: string;
  /** Currency (currency: select) */
      currency?: string;
  /** Customer Category (custtype: text) */
      custtype?: string;
  /** Date Created (datecreated: datetime) */
      datecreated?: string;
  /** Days Open (daysopen: integer) */
      daysopen?: string;
  /** Days To Close (daystoclose: integer) */
      daystoclose?: string;
  /** Decision Maker (decisionmaker: select) */
      decisionmaker?: string;
  /** Department (department: select) */
      department?: string;
  /** Department (no hierarchy) (departmentnohierarchy: select) */
      departmentnohierarchy?: string;
  /** Document Status (documentstatus: select) */
      documentstatus?: string;
  /** Customer (entity: select) */
      entity?: string;
  /** Opportunity Status (entitystatus: select) */
      entitystatus?: string;
  /** Estimated Budget (estimatedbudget: currency) */
      estimatedbudget?: string;
  /** Expected Close (expectedclosedate: date) */
      expectedclosedate?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Forecast Type (forecasttype: select) */
      forecasttype?: string;
  /** Projected Total (Foreign Currency) (foreignprojectedamount: currency) */
      foreignprojectedamount?: string;
  /** Range - High (Foreign Currency) (foreignrangehigh: currency) */
      foreignrangehigh?: string;
  /** Range - Low (Foreign Currency) (foreignrangelow: currency) */
      foreignrangelow?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: string;
  /** Formula (Date) (formuladate: date) */
      formuladate?: string;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: string;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: string;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: string;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** Est. Extended Cost (Transaction) (Foreign Currency) (fxtrancostestimate: currency) */
      fxtrancostestimate?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Budget Approved (isbudgetapproved: checkbox) */
      isbudgetapproved?: boolean;
  /** Last Modified (lastmodifieddate: datetime) */
      lastmodifieddate?: string;
  /** Last Viewed (lastviewed: datetime) */
      lastviewed?: string;
  /** Lead Source (leadsource: select) */
      leadsource?: string;
  /** Location (location: select) */
      location?: string;
  /** Location (no hierarchy) (locationnohierarchy: select) */
      locationnohierarchy?: string;
  /** Memo (memo: text) */
      memo?: string;
  /** Partner (partner: select) */
      partner?: string;
  /** Partner Contribution % (partnercontribution: percent) */
      partnercontribution?: string;
  /** Partner Role (partnerrole: select) */
      partnerrole?: string;
  /** Partner Team Member (partnerteammember: select) */
      partnerteammember?: string;
  /** Period (period: text) */
      period?: string;
  /** Probability (probability: percent) */
      probability?: string;
  /** Projected Alt.Sales Total (projaltsalesamt: currency) */
      projaltsalesamt?: string;
  /** Projected Total (projectedtotal: currency) */
      projectedtotal?: string;
  /** Range - High (rangehigh: currency) */
      rangehigh?: string;
  /** Alt.Sales Range - High (rangehighalt: currency) */
      rangehighalt?: string;
  /** Range - Low (rangelow: currency) */
      rangelow?: string;
  /** Alt.Sales Range - Low (rangelowalt: currency) */
      rangelowalt?: string;
  /** Sales Readiness (salesreadiness: text) */
      salesreadiness?: string;
  /** Sales Rep (salesrep: select) */
      salesrep?: string;
  /** Sales Team Member (salesteammember: select) */
      salesteammember?: string;
  /** Sales Team Role (salesteamrole: select) */
      salesteamrole?: string;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
  /** Subsidiary (no hierarchy) (subsidiarynohierarchy: select) */
      subsidiarynohierarchy?: string;
  /** Tax Period (taxperiod: select) */
      taxperiod?: string;
  /** Title (title: text) */
      title?: string;
  /** Item Amount (total: currency) */
      total?: string;
  /** Est. Extended Cost (Transaction) (trancostestimate: currency) */
      trancostestimate?: string;
  /** Date (trandate: date) */
      trandate?: string;
  /** Est. Gross Profit (Transaction) (tranestgrossprofit: currency) */
      tranestgrossprofit?: string;
  /** Est. Gross Profit Percent (Transaction) (tranestgrossprofitpct: percent) */
      tranestgrossprofitpct?: string;
  /** Est. Gross Profit (Transaction) (Foreign Currency) (tranfxestgrossprofit: currency) */
      tranfxestgrossprofit?: string;
  /** Number (tranid: text) */
      tranid?: string;
  /** Weighted Total (weightedtotal: currency) */
      weightedtotal?: string;
  /** Win/Loss Reason (winlossreason: select) */
      winlossreason?: string;
  /** Won By (wonby: select) */
      wonby?: string;
}


// Search Filters

/** Opportunity (opportunity) Search Filters definition */
export interface opportunitySearchFilter {
/** Item Amount (amount: currency) */
  amount?: string;
  /** Always Available Offline (availableoffline: checkbox) */
  availableoffline?: boolean;
  /** Buying Reason (buyingreason: select) */
  buyingreason?: string;
  /** Buying Time Frame (buyingtimeframe: select) */
  buyingtimeframe?: string;
  /** Class (class: select) */
  class?: string;
  /** Actual Close (closedate: date) */
  closedate?: string;
  /** Competitor (competitor: select) */
  competitor?: string;
  /** Contribution % (contribution: integer) */
  contribution?: string;
  /** Currency (currency: select) */
  currency?: string;
  /** Customer Category (custtype: select) */
  custtype?: string;
  /** Date Created (datecreated: datetime) */
  datecreated?: string;
  /** Days Open (daysopen: integer) */
  daysopen?: string;
  /** Days To Close (daystoclose: integer) */
  daystoclose?: string;
  /** Department (department: select) */
  department?: string;
  /** Prospect/Customer (entity: select) */
  entity?: string;
  /** Opportunity Status (entitystatus: select) */
  entitystatus?: string;
  /** Estimated Budget (estimatedbudget: currency) */
  estimatedbudget?: string;
  /** Expected Close Date (expectedclosedate: date) */
  expectedclosedate?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Forecast Type (forecasttype: select) */
  forecasttype?: string;
  /** Projected Total (Foreign Currency) (foreignprojectedamount: currency) */
  foreignprojectedamount?: string;
  /** Range - High (Foreign Currency) (foreignrangehigh: currency) */
  foreignrangehigh?: string;
  /** Range - Low (Foreign Currency) (foreignrangelow: currency) */
  foreignrangelow?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Est. Extended Cost (Transaction) (Foreign Currency) (fxtrancostestimate: currency) */
  fxtrancostestimate?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Budget Approved (isbudgetapproved: checkbox) */
  isbudgetapproved?: boolean;
  /** Item (item: multiselect) */
  item?: string;
  /** Date Last Modified (lastmodifieddate: datetime) */
  lastmodifieddate?: string;
  /** Lead Source (leadsource: select) */
  leadsource?: string;
  /** Location (location: select) */
  location?: string;
  /** Memo (memo: text) */
  memo?: string;
  /** Number (number: integer) */
  number?: string;
  /** Partner (partner: select) */
  partner?: string;
  /** Partner Contribution % (partnercontribution: integer) */
  partnercontribution?: string;
  /** Partner Role (partnerrole: select) */
  partnerrole?: string;
  /** Partner Team Member (partnerteammember: select) */
  partnerteammember?: string;
  /** Period (postingperiod: period) */
  postingperiod?: string;
  /** Probability (probability: integer) */
  probability?: string;
  /** Projected Alt.Sales Amount (projaltsalesamt: currency) */
  projaltsalesamt?: string;
  /** Projected Amount (projectedtotal: currency) */
  projectedtotal?: string;
  /** Range - High (rangehigh: currency) */
  rangehigh?: string;
  /** Alt.Sales Range - High (rangehighalt: currency) */
  rangehighalt?: string;
  /** Range - Low (rangelow: currency) */
  rangelow?: string;
  /** Alt.Sales Range - Low (rangelowalt: currency) */
  rangelowalt?: string;
  /** Sales Readiness (salesreadiness: select) */
  salesreadiness?: string;
  /** Sales Rep (salesrep: select) */
  salesrep?: string;
  /** Sales Team Member (salesteammember: select) */
  salesteammember?: string;
  /** Sales Team Role (salesteamrole: select) */
  salesteamrole?: string;
  /** Document Status (status: select) */
  status?: string;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
  /** Tax Period (taxperiod: period) */
  taxperiod?: string;
  /** Title (title: text) */
  title?: string;
  /** Est. Extended Cost (Transaction) (trancostestimate: currency) */
  trancostestimate?: string;
  /** Date (trandate: date) */
  trandate?: string;
  /** Est. Gross Profit (Transaction) (tranestgrossprofit: currency) */
  tranestgrossprofit?: string;
  /** Est. Gross Profit Percent (Transaction) (tranestgrossprofitpct: percent) */
  tranestgrossprofitpct?: string;
  /** Est. Gross Profit (Transaction) (Foreign Currency) (tranfxestgrossprofit: currency) */
  tranfxestgrossprofit?: string;
  /** Number/ID (tranid: text) */
  tranid?: string;
  /** Win/Loss Reason (winlossreason: select) */
  winlossreason?: string;
  /** Won By (wonby: select) */
  wonby?: string;
}


// Search Joins

/** Opportunity (opportunity) Search Joins definitions. */
export interface opportunitySearchJoinTypes {
/** opportunity's competitor search filter. Competitor. Actual name: Competitor. */
  competitor: 'competitor';
  /** opportunity's competitorwinner search filter. Competitor (Winner). Actual name: Competitor. */
  competitorwinner: 'competitorwinner';
  /** opportunity's contact search filter. Contact. Actual name: Contact. */
  contact: 'contact';
  /** opportunity's contactprimary search filter. Contact (Primary). Actual name: Contact. */
  contactprimary: 'contactprimary';
  /** opportunity's customer search filter. Customer. Actual name: Customer. */
  customer: 'customer';
  /** opportunity's decisionmaker search filter. Decision Maker. Actual name: Contact. */
  decisionmaker: 'decisionmaker';
  /** opportunity's leadsource search filter. Lead Source. Actual name: Campaign. */
  leadsource: 'leadsource';
  /** opportunity's messages search filter. Messages. Actual name: Message. */
  messages: 'messages';
  /** opportunity's originatinglead search filter. Originating Lead. Actual name: Lead. */
  originatinglead: 'originatinglead';
  /** opportunity's partner search filter. Partner. Actual name: Partner. */
  partner: 'partner';
  /** opportunity's salesrep search filter. Sales Rep. Actual name: Employee. */
  salesrep: 'salesrep';
  /** opportunity's task search filter. Task. Actual name: Task. */
  task: 'task';
}


// Search Filter Types

/** Opportunity (opportunity) Search Filter Type definitions. */
export interface opportunitySearchFilterTypes {
amount: 'currency';
  availableoffline: 'checkbox';
  buyingreason: 'select';
  buyingtimeframe: 'select';
  class: 'select';
  closedate: 'date';
  competitor: 'select';
  contribution: 'integer';
  currency: 'select';
  custtype: 'select';
  datecreated: 'datetime';
  daysopen: 'integer';
  daystoclose: 'integer';
  department: 'select';
  entity: 'select';
  entitystatus: 'select';
  estimatedbudget: 'currency';
  expectedclosedate: 'date';
  externalid: 'select';
  externalidstring: 'text';
  forecasttype: 'select';
  foreignprojectedamount: 'currency';
  foreignrangehigh: 'currency';
  foreignrangelow: 'currency';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  fxtrancostestimate: 'currency';
  internalid: 'select';
  internalidnumber: 'integer';
  isbudgetapproved: 'checkbox';
  item: 'multiselect';
  lastmodifieddate: 'datetime';
  leadsource: 'select';
  location: 'select';
  memo: 'text';
  number: 'integer';
  partner: 'select';
  partnercontribution: 'integer';
  partnerrole: 'select';
  partnerteammember: 'select';
  postingperiod: 'period';
  probability: 'integer';
  projaltsalesamt: 'currency';
  projectedtotal: 'currency';
  rangehigh: 'currency';
  rangehighalt: 'currency';
  rangelow: 'currency';
  rangelowalt: 'currency';
  salesreadiness: 'select';
  salesrep: 'select';
  salesteammember: 'select';
  salesteamrole: 'select';
  status: 'select';
  subsidiary: 'select';
  taxperiod: 'period';
  title: 'text';
  trancostestimate: 'currency';
  trandate: 'date';
  tranestgrossprofit: 'currency';
  tranestgrossprofitpct: 'percent';
  tranfxestgrossprofit: 'currency';
  tranid: 'text';
  winlossreason: 'select';
  wonby: 'select';
}


// Search Column Types

/** Opportunity (opportunity) Search Column Type definitions. */
export interface opportunitySearchColumnTypes {
actionitem: 'text';
  availableoffline: 'checkbox';
  buyingreason: 'text';
  buyingtimeframe: 'text';
  class: 'select';
  classnohierarchy: 'select';
  closedate: 'date';
  competitor: 'select';
  contribution: 'percent';
  contributionprimary: 'percent';
  currency: 'select';
  custtype: 'text';
  datecreated: 'datetime';
  daysopen: 'integer';
  daystoclose: 'integer';
  decisionmaker: 'select';
  department: 'select';
  departmentnohierarchy: 'select';
  documentstatus: 'select';
  entity: 'select';
  entitystatus: 'select';
  estimatedbudget: 'currency';
  expectedclosedate: 'date';
  externalid: 'select';
  forecasttype: 'select';
  foreignprojectedamount: 'currency';
  foreignrangehigh: 'currency';
  foreignrangelow: 'currency';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  fxtrancostestimate: 'currency';
  internalid: 'select';
  isbudgetapproved: 'checkbox';
  lastmodifieddate: 'datetime';
  lastviewed: 'datetime';
  leadsource: 'select';
  location: 'select';
  locationnohierarchy: 'select';
  memo: 'text';
  partner: 'select';
  partnercontribution: 'percent';
  partnerrole: 'select';
  partnerteammember: 'select';
  period: 'text';
  probability: 'percent';
  projaltsalesamt: 'currency';
  projectedtotal: 'currency';
  rangehigh: 'currency';
  rangehighalt: 'currency';
  rangelow: 'currency';
  rangelowalt: 'currency';
  salesreadiness: 'text';
  salesrep: 'select';
  salesteammember: 'select';
  salesteamrole: 'select';
  subsidiary: 'select';
  subsidiarynohierarchy: 'select';
  taxperiod: 'select';
  title: 'text';
  total: 'currency';
  trancostestimate: 'currency';
  trandate: 'date';
  tranestgrossprofit: 'currency';
  tranestgrossprofitpct: 'percent';
  tranfxestgrossprofit: 'currency';
  tranid: 'text';
  weightedtotal: 'currency';
  winlossreason: 'select';
  wonby: 'select';
}