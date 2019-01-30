// This file is auto generated, do not edit it. 




/** 
 * Gift Certificate Fields Definition.
 * Record's Internal Id: giftcertificate. 
 * Supports Custom Fields: true 
 */
export interface giftcertificateFields {
/** This field displays the amount remaining on the gift certificate that can be applied to purchases.

When a gift certificate is applied to a purchase, the amount of the purchase is deducted from the Original Amount. After application, any credit balance remaining that can be applied to additional purchases shows in the Amount Remaining field. */
  amountremaining?: number;
  /**  */
  createddate?: Date;
  /** Enter your employee's e-mail address. If you allow your employees to track time or enter expense reports online, this will become part of their access codes. */
  email?: string;
  /** The expiration date is based on the Days Before Expiration field on the gift certificate&#x2019;s item record. If necessary, enter the date the gift certificate expires.

Any balance remaining on the gift certificate after the expiration date cannot be applied against purchases. */
  expirationdate?: Date;
  /**  */
  externalid?: string;
  /**  */
  giftcertcode?: string;
  /**  */
  lastmodifieddate?: Date;
  /** This field displays the message that is delivered to the recipient. */
  message?: string;
  /** Specify the name. The name identifies the record in NetSuite and is not displayed on the website. */
  name?: string;
  /** This field displays the total amount originally issued on the gift certificate.

When the gift certificate is applied to a purchase, the amount of the purchase is deducted from this amount. After application, any credit balance remaining that can be applied to additional purchases shows in the Amount Remaining field. */
  originalamount?: number;
  /** This field shows the name of the person that sent the certificate. */
  sender?: string;
}





/** 
 * Gift Certificate Sublists Definition.
 * Record's Internal Id: giftcertificate. 
 * Supports Custom Fields: true 
 */
export interface giftcertificateSublists {
  
}





