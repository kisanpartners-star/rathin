/** Indian mobile numbers: optional +91 / 91 / 0 prefix, then 10 digits starting with 6-9. Landlines with STD code also accepted. */
export const normalizePhone = (value: string) => value.replace(/[\s().-]/g, '');

export const isValidIndianPhone = (value: string): boolean => {
  const v = normalizePhone(value);
  const mobile = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  const landline = /^(?:\+91|91|0)?[1-9]\d{1,4}\d{6,8}$/;
  return mobile.test(v) || (landline.test(v) && v.length >= 10 && v.length <= 13);
};

export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export interface FieldErrors {
  [field: string]: string | undefined;
}

export const hasErrors = (errors: FieldErrors) => Object.values(errors).some(Boolean);
