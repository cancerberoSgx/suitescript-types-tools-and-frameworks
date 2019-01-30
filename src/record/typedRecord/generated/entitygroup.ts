// This file is auto generated, do not edit it. 




/** 
 * Entity Group Fields Definition.
 * Record's Internal Id: entitygroup. 
 * Supports Custom Fields: true 
 */
export interface entitygroupFields {
/** Enter any notes or comments about the group here. */
  comments?: string;
  /** If this group has an address in your e-mail application, enter that address here.

Clicking the address from the saved record opens your e-mail program to send a message to this group. */
  email?: string;
  /**  */
  externalid?: string;
  /** Enter the name of this group. */
  groupname: string;
  /** Select the owner of the group. You are selected as the owner by default. To allow only the owner to edit the group, check the Restrict Group Editing to Owner box. */
  groupowner: string;
  /**  */
  grouptypename?: string;
  /** Check this box to mark this group as a functional team.

Functional teams can can be emailed copies of the issue from the Communication subtab on issue records. You may want to check this box for all product team groups and then create additional function team groups for other teams you want to email. */
  isfunctionalteam?: boolean;
  /** When you check this box, you can no longer view this group's shared calendar and invite this group to events.

This group also no longer appears in the Groups list unless you check the Show Inactives box at the bottom of the page. */
  isinactive?: boolean;
  /** Check the Manufacturing Work Center box to enable this group to be used as a work center with routing records. */
  ismanufacturingworkcenter?: boolean;
  /** Check this box if you want only members of this group to be able to see the group's list of members. */
  isprivate?: boolean;
  /** Check this box to mark this group as a product team.

Product team groups can be selected in the Product Team field on issues. Product teams designate who is responsible for resolving an issue. Members of this team are emailed when an issue is first entered so that everyone is aware of the problem. */
  isproductteam?: boolean;
  /** Check this box to mark this group a sales group.

On sales orders and customer records, sales groups are listed in the Sales Rep field. When you assign a sales territory, sales groups are listed in the Sales Rep. field. */
  issalesrep?: boolean;
  /** Select a role that corresponds to the role of this group&#x2019;s members, and this group can be assigned to issues. */
  issuerole?: string;
  /** Check this box to mark this group a support group.

On case records, support groups are listed in the Assigned To field. When you assign a case territory, support groups are listed in the Support Rep. field. */
  issupportrep?: boolean;
  /** Enter the number of labor resources associated with this work center. */
  laborresources?: number;
  /** Enter the number of machine resources associated with this work center. */
  machineresources?: number;
  /** If you want to restrict the use of this group to members of a specific group, select that group from the drop down list.

If you restrict the use of this group, then this group cannot be made private. */
  restrictiongroup?: string;
  /** Select the saved search that returns the members of this group.

You can create new saved searches at Lists > Saved Searches > New. */
  savedsearch: string;
  /**  */
  subsidiary: string;
  /** Select a work calendar to associate with this work center. */
  workcalendar?: string;
}





/** 
 * Entity Group Sublists Definition.
 * Record's Internal Id: entitygroup. 
 * Supports Custom Fields: true 
 */
export interface entitygroupSublists {
  
  /** groupmembers: Group Members */
  groupmembers: {
    /** accesslevel - Access Level  */
    accesslevel: string;
    /** bouncedaddress - Bounced  */
    bouncedaddress: string;
    /** contribution - Contribution %  */
    contribution?: number;
    /** email - Email  */
    email: string;
    /** employeemember - Name  */
    employeemember?: string;
    /** inactive - Inactive  */
    inactive: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** issalesrep -   */
    issalesrep: string;
    /** memberemail - Email  */
    memberemail: string;
    /** membername - Name  */
    membername: string;
    /** memberphone - Phone  */
    memberphone: string;
    /** phone - Phone  */
    phone: string;
    /** remove - Remove  */
    remove: string;
    /** salesrole - Sales Role  */
    salesrole?: string;
    /** subscriptionstatus - Global Subscription Status  */
    subscriptionstatus: string;
  }
}





