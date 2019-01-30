// This file is auto generated, do not edit it. 




/** 
 * Folder Fields Definition.
 * Record's Internal Id: folder. 
 * Supports Custom Fields: false 
 */
export interface folderFields {
/** Select a class if you want to restrict the documents and images in this folder by class.

To create a new class, go to Setup > Company > Classifications > Classes > New. */
  class?: string;
  /** Select a department if you want to restrict the documents and images in this folder by department.

To create a new department, go to Setup > Classifications > Departments > New. */
  department?: string;
  /** Enter a description for this file.

This description only appears on the file record. */
  description?: string;
  /**  */
  externalid?: string;
  /** The Type field automatically populates with the appropriate value for the folder selected. File Cabinet folders help to organize the files you use for different purposes. In most cases, when you create a subfolder, the Type is automatically set.

If you are creating or customizing an SSP application subfolder, you may have the option to select a value for type. Note the following about the options available:

    * Documents and Files - intended for storing documents and files for general use. SuiteScript files must be stored in the SuiteScripts folder or a subfolder thereof. The value for Type in SuiteScript subfolders are set to Documents and Files.
    * SuiteCommerce Advanced Site Templates - intended for storing SSP application assets. Use this option for SSP application subfolders. */
  foldertype?: string;
  /** Select a group if you want to restrict this folder by group.

Only members of this group can view the documents and images in this folder.

To create a new group to add to this list, go to Lists > Relationships > Groups > New. */
  group?: string;
  /** Check this box to inactivate this record.

When you check this, this file or folder will no longer appear on lists unless you check the Show Inactives box at the bottom of the Folders list. */
  isinactive?: boolean;
  /** Check this box to make the contents of this folder visible only by you. */
  isprivate?: boolean;
  /** Select a location if you want to restrict the documents and images in this folder by location.

To create a new location, go to Setup > Classifications > Locations > New. */
  location?: string;
  /** Enter a name for this file cabinet folder.

You can use folders to organize the documents and images you store in your file cabinet. For example, if you are creating a folder to store human resources paperwork, you could enter Human Resources here. */
  name: string;
  /**  */
  owner?: string;
  /** If this folder is a subfolder of another, select the parent folder here.

For example, if you are creating a subfolder for your Human Resources folder, you would select Human Resources here. */
  parent?: string;
  /**  */
  subsidiary?: string;
}





/** 
 * Folder Sublists Definition.
 * Record's Internal Id: folder. 
 * Supports Custom Fields: false 
 */
export interface folderSublists {
  
}





