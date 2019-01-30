// This file is automatically generated - don't edit it. 
// Search Types for record Item Location Configuration (itemlocationconfiguration)

// Search Columns

/** Item Location Configuration (itemlocationconfiguration) Search Columns definition */
export interface itemlocationconfigurationSearchColumn {
  /** ATP Lead Time (atpleadtime: integer) */
      atpleadtime?: number;
  /** Backward Consumption Days (backwardconsumptiondays: integer) */
      backwardconsumptiondays?: number;
  /** Work Order Lead Time (buildtime: float) */
      buildtime?: number;
  /** Standard Cost (cost: currency2) */
      cost?: number;
  /** Costing Lot Size (costinglotsize: float) */
      costinglotsize?: number;
  /** Default Return Cost (defaultreturncost: currency2) */
      defaultreturncost?: number;
  /** Demand Source (demandsource: text) */
      demandsource?: string;
  /** Demand Time Fence (demandtimefence: integer) */
      demandtimefence?: number;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Fixed Lot Size (fixedlotsize: float) */
      fixedlotsize?: number;
  /** Forward Consumption Days (forwardconsumptiondays: integer) */
      forwardconsumptiondays?: number;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inventory Cost Template (inventorycosttemplate: text) */
      inventorycosttemplate?: string;
  /** Inventory Classification (invtclassification: text) */
      invtclassification?: string;
  /** Inventory Count Interval (invtcountinterval: integer) */
      invtcountinterval?: number;
  /** Auto Loc. Assignment Allowed (isautolocassignmentallowed: checkbox) */
      isautolocassignmentallowed?: boolean;
  /** Auto Loc. Assignment Suspended (isautolocassignmentsuspended: checkbox) */
      isautolocassignmentsuspended?: boolean;
  /** WIP (iswip: checkbox) */
      iswip?: boolean;
  /** Item (item: select) */
      item?: string;
  /** Lead Time (leadtime: integer) */
      leadtime?: number;
  /** Location (location: select) */
      location?: string;
  /** Allow Store Pickup (locationallowstorepickup: checkbox) */
      locationallowstorepickup?: boolean;
  /** Buffer Stock (locationstorepickupbufferstock: integer) */
      locationstorepickupbufferstock?: number;
  /** Memo (memo: text) */
      memo?: string;
  /** Name (name: text) */
      name?: string;
  /** Next Inventory Count Date (nextinvtcountdate: date) */
      nextinvtcountdate?: Date;
  /** Periods of Supply Increment (periodiclotsizedays: integer) */
      periodiclotsizedays?: number;
  /** Periods of Supply Type (periodiclotsizetype: text) */
      periodiclotsizetype?: string;
  /** PO Receipt Cost (poreceiptcost: currency2) */
      poreceiptcost?: number;
  /** Preferred Stock Level (preferredstocklevel: float) */
      preferredstocklevel?: number;
  /** Reorder Point (reorderpoint: float) */
      reorderpoint?: number;
  /** Reschedule In Days (rescheduleindays: integer) */
      rescheduleindays?: number;
  /** Reschedule Out Days (rescheduleoutdays: integer) */
      rescheduleoutdays?: number;
  /** Safety Stock Level (safetystocklevel: float) */
      safetystocklevel?: number;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
  /** Lot Sizing Method (supplylotsizingmethod: text) */
      supplylotsizingmethod?: string;
  /** Planning Time Fence (supplytimefence: integer) */
      supplytimefence?: number;
  /** Supply Type (supplytype: text) */
      supplytype?: string;
}


// Search Filters

/** Item Location Configuration (itemlocationconfiguration) Search Filters definition */
export interface itemlocationconfigurationSearchFilter {
/** ATP Lead Time (atpleadtime: integer) */
  atpleadtime?: number;
  /** Backward Consumption Days (backwardconsumptiondays: integer) */
  backwardconsumptiondays?: number;
  /** Work Order Lead Time (buildtime: float) */
  buildtime?: number;
  /** Standard Cost (cost: currency2) */
  cost?: number;
  /** Costing Lot Size (costinglotsize: float) */
  costinglotsize?: number;
  /** Default Return Cost (defaultreturncost: currency2) */
  defaultreturncost?: number;
  /** Demand Source (demandsource: select) */
  demandsource?: string;
  /** Demand Time Fence (demandtimefence: integer) */
  demandtimefence?: number;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Fixed Lot Size (fixedlotsize: float) */
  fixedlotsize?: number;
  /** Forward Consumption Days (forwardconsumptiondays: integer) */
  forwardconsumptiondays?: number;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Inventory Cost Template (inventorycosttemplate: select) */
  inventorycosttemplate?: string;
  /** Inventory Classification (invtclassification: select) */
  invtclassification?: string;
  /** Count Interval (invtcountinterval: integer) */
  invtcountinterval?: number;
  /** Auto Loc. Assignment Allowed (isautolocassignmentallowed: checkbox) */
  isautolocassignmentallowed?: boolean;
  /** Auto Loc. Assignment Suspended (isautolocassignmentsuspended: checkbox) */
  isautolocassignmentsuspended?: boolean;
  /** WIP (iswip: checkbox) */
  iswip?: boolean;
  /** Item (item: select) */
  item?: string;
  /** Lead Time (leadtime: integer) */
  leadtime?: number;
  /** Location (location: select) */
  location?: string;
  /** Allow Store Pickup (locationallowstorepickup: checkbox) */
  locationallowstorepickup?: boolean;
  /** Buffer Stock (locationstorepickupbufferstock: integer) */
  locationstorepickupbufferstock?: number;
  /** Memo (memo: text) */
  memo?: string;
  /** Name (name: text) */
  name?: string;
  /** Next Count Date (nextinvtcountdate: date) */
  nextinvtcountdate?: Date;
  /** Periods of Supply Increment (periodiclotsizedays: integer) */
  periodiclotsizedays?: number;
  /** Periods of Supply Type (periodiclotsizetype: select) */
  periodiclotsizetype?: string;
  /** PO Receipt Cost (poreceiptcost: currency2) */
  poreceiptcost?: number;
  /** Preferred Stock Level (preferredstocklevel: float) */
  preferredstocklevel?: number;
  /** Reorder Point (reorderpoint: float) */
  reorderpoint?: number;
  /** Reschedule In Days (rescheduleindays: integer) */
  rescheduleindays?: number;
  /** Reschedule Out Days (rescheduleoutdays: integer) */
  rescheduleoutdays?: number;
  /** Safety Stock Level (safetystocklevel: float) */
  safetystocklevel?: number;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
  /** Lot Sizing Method (supplylotsizingmethod: select) */
  supplylotsizingmethod?: string;
  /** Planning Time Fence (supplytimefence: integer) */
  supplytimefence?: number;
  /** Supply Type (supplytype: select) */
  supplytype?: string;
}


// Search Joins

/** Item Location Configuration (itemlocationconfiguration) Search Joins definitions. */
export interface itemlocationconfigurationSearchJoinTypes {

}


// Search Filter Types

/** Item Location Configuration (itemlocationconfiguration) Search Filter Type definitions. */
export interface itemlocationconfigurationSearchFilterTypes {
atpleadtime: 'integer';
  backwardconsumptiondays: 'integer';
  buildtime: 'float';
  cost: 'currency2';
  costinglotsize: 'float';
  defaultreturncost: 'currency2';
  demandsource: 'select';
  demandtimefence: 'integer';
  externalid: 'select';
  externalidstring: 'text';
  fixedlotsize: 'float';
  forwardconsumptiondays: 'integer';
  internalid: 'select';
  internalidnumber: 'integer';
  inventorycosttemplate: 'select';
  invtclassification: 'select';
  invtcountinterval: 'integer';
  isautolocassignmentallowed: 'checkbox';
  isautolocassignmentsuspended: 'checkbox';
  iswip: 'checkbox';
  item: 'select';
  leadtime: 'integer';
  location: 'select';
  locationallowstorepickup: 'checkbox';
  locationstorepickupbufferstock: 'integer';
  memo: 'text';
  name: 'text';
  nextinvtcountdate: 'date';
  periodiclotsizedays: 'integer';
  periodiclotsizetype: 'select';
  poreceiptcost: 'currency2';
  preferredstocklevel: 'float';
  reorderpoint: 'float';
  rescheduleindays: 'integer';
  rescheduleoutdays: 'integer';
  safetystocklevel: 'float';
  subsidiary: 'select';
  supplylotsizingmethod: 'select';
  supplytimefence: 'integer';
  supplytype: 'select';
}


// Search Column Types

/** Item Location Configuration (itemlocationconfiguration) Search Column Type definitions. */
export interface itemlocationconfigurationSearchColumnTypes {
atpleadtime: 'integer';
  backwardconsumptiondays: 'integer';
  buildtime: 'float';
  cost: 'currency2';
  costinglotsize: 'float';
  defaultreturncost: 'currency2';
  demandsource: 'text';
  demandtimefence: 'integer';
  externalid: 'select';
  fixedlotsize: 'float';
  forwardconsumptiondays: 'integer';
  internalid: 'select';
  inventorycosttemplate: 'text';
  invtclassification: 'text';
  invtcountinterval: 'integer';
  isautolocassignmentallowed: 'checkbox';
  isautolocassignmentsuspended: 'checkbox';
  iswip: 'checkbox';
  item: 'select';
  leadtime: 'integer';
  location: 'select';
  locationallowstorepickup: 'checkbox';
  locationstorepickupbufferstock: 'integer';
  memo: 'text';
  name: 'text';
  nextinvtcountdate: 'date';
  periodiclotsizedays: 'integer';
  periodiclotsizetype: 'text';
  poreceiptcost: 'currency2';
  preferredstocklevel: 'float';
  reorderpoint: 'float';
  rescheduleindays: 'integer';
  rescheduleoutdays: 'integer';
  safetystocklevel: 'float';
  subsidiary: 'select';
  supplylotsizingmethod: 'text';
  supplytimefence: 'integer';
  supplytype: 'text';
}