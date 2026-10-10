/**
 * EmailJS sender used by EVERY form (service request modal, contact form, product enquiry).
 * - Sends all fields to your inbox through EmailJS (no backend needed).
 * - If EmailJS is not configured or the request fails, returns a ready-made `mailto:` link as a graceful fallback.
 *
 * Template variables available in your EmailJS template (see README):
 *   {{form_type}} {{from_name}} {{phone}} {{from_email}} {{reply_to}} {{service_type}} {{subject}}
 *   {{message}} {{product_name}} {{page_url}} {{sent_at}} {{to_email}}
 */
import { mailtoLink, siteConfig } from '../data/siteConfig';

export type FormKind = 'service' | 'contact' | 'product';

export interface EnquiryPayload {
  kind: FormKind;
  name: string;
  phone: string;
  email: string;
  serviceType?: string;
  subject?: string;
  message: string;
  productName?: string;
}

export type SendResult =
  | { status: 'sent' }
  | { status: 'error'; reason: 'not-configured' | 'failed'; mailto: string };

const KIND_LABEL: Record<FormKind, string> = {
  service: 'Service Request',
  contact: 'Contact Enquiry',
  product: 'Product Enquiry',
};

export const isEmailConfigured = () => {
  const { serviceId, templateId, publicKey } = siteConfig.emailjs;
  return Boolean(serviceId && templateId && publicKey) && !serviceId.includes('xxxx');
};

const subjectFor = (p: EnquiryPayload) => {
  if (p.kind === 'product') return `[Website] Product enquiry: ${p.productName ?? 'Rathin product'}`;
  if (p.kind === 'service') return `[Website] Service request: ${p.serviceType ?? 'General'}`;
  return `[Website] ${p.subject?.trim() || 'Contact enquiry'}`;
};

const bodyFor = (p: EnquiryPayload) =>
  [
    `Type: ${KIND_LABEL[p.kind]}`,
    `Name: ${p.name}`,
    `Phone: ${p.phone}`,
    `Email: ${p.email}`,
    p.serviceType ? `Service type: ${p.serviceType}` : '',
    p.productName ? `Product: ${p.productName}` : '',
    p.subject ? `Subject: ${p.subject}` : '',
    '',
    p.message,
  ]
    .filter((line, i, arr) => line !== '' || (i > 0 && arr[i - 1] !== ''))
    .join('\n');

export const buildMailto = (p: EnquiryPayload) => mailtoLink(subjectFor(p), bodyFor(p));

export async function sendEnquiry(payload: EnquiryPayload): Promise<SendResult> {
  const fallback = buildMailto(payload);

  if (!isEmailConfigured()) {
    return { status: 'error', reason: 'not-configured', mailto: fallback };
  }

  try {
    // Loaded on demand so it never slows down the first page load.
    const { default: emailjs } = await import('@emailjs/browser');
    const { serviceId, templateId, publicKey } = siteConfig.emailjs;

    await emailjs.send(
      serviceId,
      templateId,
      {
        form_type: KIND_LABEL[payload.kind],
        from_name: payload.name,
        phone: payload.phone,
        from_email: payload.email,
        reply_to: payload.email,
        service_type: payload.serviceType ?? '-',
        subject: subjectFor(payload),
        message: payload.message || '-',
        product_name: payload.productName ?? '-',
        page_url: typeof window !== 'undefined' ? window.location.href : siteConfig.url,
        sent_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        to_email: siteConfig.email,
      },
      { publicKey },
    );
    return { status: 'sent' };
  } catch {
    return { status: 'error', reason: 'failed', mailto: fallback };
  }
}
