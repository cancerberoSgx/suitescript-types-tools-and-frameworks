// This file is auto generated, do not edit it. 




/** 
 * Issue Fields Definition.
 * Record's Internal Id: issue. 
 * Supports Custom Fields: true 
 */
export interface issueFields {
/** Select the employee you want to assign this issue to.

You assign an issue to the person who needs to take the next step in resolving the issue.

The employees you see in this list vary according to your role permissions. */
  assigned?: string;
  /**  */
  autoname?: boolean;
  /** Select the build for the version where this issue occurred. */
  buildbroken?: string;
  /** Select the build for the version where this issue was fixed. */
  buildfixed?: string;
  /** Select the build for the version in which this issue is scheduled to be fixed. */
  buildtarget?: string;
  /** This field displays the date when this issue was originally created. */
  createddate?: Date;
  /**  */
  customform: string;
  /**  */
  datereleased?: string;
  /** Check this box to email the person this issue is assigned to.

You may want to email the assignee any time an important comment is added or whenever a change is made to the issue record. */
  emailassignee?: boolean;
  /**  */
  emailcells?: string;
  /**  */
  emailemployees?: string;
  /** Enter an abstract for this issue that customers should see when they log in to the NetSuite Support Center. */
  externalabstract?: string;
  /** Enter a summary of the details for this issue that customers should see when they log in to the NetSuite Support Center. */
  externaldetails?: string;
  /**  */
  externalid?: string;
  /** Check this box if the work done to resolve this issue has been reviewed. */
  isreviewed?: boolean;
  /** This field displays whether or not this issue is a showstopper.

Showstopper issues must be fixed before the next version can be released. */
  isshowstopper?: boolean;
  /** Enter a short summary of the issue.

This abstract is only available to internal users and is only seen by customers if you do not enter an external abstract on the External subtab. */
  issueabstract: string;
  /** Enter a number for this issue.

If you use Auto-Generated Numbering, this number is automatically generated to avoid duplicate numbers and ensure consecutive numbering. */
  issuenumber: string;
  /** Select the current status for this issue.

The issue status usually needs to be updated every time the bug is updated or assigned to a new person. */
  issuestatus: string;
  /**  */
  issuetags?: string;
  /** Select what type of issue this is.

Administrators can define issue types at <_TABNAME=ADMI_ISSUETYPE_> > <_TASKCATEGORY=ADMI_ISSUETYPE_> > Issue Types. */
  issuetype: string;
  /** If this issue is associated with an item, select the item. */
  item?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select the module of the product selected that is affected by this issue. */
  module?: string;
  /** Enter any new information or communication about this issue. */
  newdetails?: string;
  /** Select a priority level to denote when this issue needs to be resolved.

A priority of 1 should receive attention first, and a priority of 9 does not need immediate attention. */
  priority: string;
  /** Select the product affected by this issue.

Administrators can create product records with modules at <_TABNAME=ADMI_ISSUEPRODUCT_> > <_TASKCATEGORY=ADMI_ISSUEPRODUCT_> > Products > New.

Products are tracked separately from item records. You can associate multiple items with a product on product records. */
  product: string;
  /** Select the product team that is responsible for this issue.

When this issue is first entered, it is emailed to members of this product team. */
  productteam?: string;
  /** This field displays the name of the person who created this issue record.

For users working in the UI, this field is always read-only.

In SuiteScript and web services, you can set a value for this field when creating a new record. However, when interacting with an existing record, the field is read-only. */
  reportedby?: string;
  /** Select where this issue can be reproduced:

    * In test environment &#x96; this issue can be experienced in internal test accounts.
    * In user's environment ONLY &#x96; this issue can not be experienced in internal test accounts.
    * Not reproduced &#x96; this issue has not been reproduced. */
  reproduce?: string;
  /** Select the person's name who reviewed the work done to resolve this issue. */
  reviewer?: string;
  /** Select the severity of this issue from the list defined by your administrator.

For information on how to set up severity criteria, see the help topic Issue Severities. */
  severity: string;
  /** Select where information about this issue originated. */
  source?: string;
  /** Select the product version where this issue occurred.

Versions are created and maintained from product records. */
  versionbroken?: string;
  /** Select the version of the release when the issue should be resolved. */
  versionfixed?: string;
  /** Select the product version in which this issue is scheduled to be fixed.

Versions are created and maintained from product records. */
  versiontarget?: string;
}





/** 
 * Issue Sublists Definition.
 * Record's Internal Id: issue. 
 * Supports Custom Fields: true 
 */
export interface issueSublists {
  
  /** brokeninversion: Broken In */
  brokeninversion: {
    /** build - Build  */
    build: string;
    /** primary - Primary  */
    primary: boolean;
    /** version - Version  */
    version?: string;
  }

  /** fixedinversion: Fixed In */
  fixedinversion: {
    /** build - Build  */
    build: string;
    /** primary - Primary  */
    primary: boolean;
    /** version - Version  */
    version?: string;
  }

  /** relatedissues: Issues */
  relatedissues: {
    /** issueabstract - Abstract  */
    issueabstract: string;
    /** issueassignee - Assigned To  */
    issueassignee: string;
    /** issuenumber - Issue No.  */
    issuenumber?: string;
    /** issuestatus - Status  */
    issuestatus: string;
    /** relationship - Relationship  */
    relationship?: string;
    /** relationshipcomment - Comment  */
    relationshipcomment: string;
  }

  /** targetversion: Target */
  targetversion: {
    /** build - Build  */
    build: string;
    /** primary - Primary  */
    primary: boolean;
    /** version - Version  */
    version?: string;
  }
}





