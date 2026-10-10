/** Options for the "Service Type" dropdown used by the Request For Service form. */
export const serviceTypes = [
  'New Machine Enquiry',
  'Repair',
  'Maintenance / AMC',
  'Installation',
  'Spare Parts',
  'Warranty Claim',
  'Other',
] as const;

export type ServiceType = (typeof serviceTypes)[number];
