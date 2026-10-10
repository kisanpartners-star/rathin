/**
 * The one form component behind the Request For Service modal, the /request-service page,
 * the Contact page and the product enquiry form. All of them email full details through EmailJS.
 */
import { useEffect, useId, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { serviceTypes } from '../data/forms';
import { mailtoLink, telLink, siteConfig, whatsappLink } from '../data/siteConfig';
import { sendEnquiry, type FormKind } from '../utils/emailService';
import { hasErrors, isValidEmail, isValidIndianPhone, type FieldErrors } from '../utils/validators';
import { cx } from '../utils/cx';
import { Button } from './Button';
import { Icon } from './Icon';

interface Values {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  subject: string;
  message: string;
  /** honeypot - real visitors never fill this */
  website: string;
}

interface EnquiryFormProps {
  kind: FormKind;
  productName?: string;
  defaultServiceType?: string;
  /** set when the form lives in the modal so the success screen can show a Close button */
  onClose?: () => void;
  className?: string;
  submitLabel?: string;
}

const emptyValues = (serviceType = ''): Values => ({
  name: '',
  phone: '',
  email: '',
  serviceType,
  subject: '',
  message: '',
  website: '',
});

function validate(kind: FormKind, v: Values): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.';
  else if (!isValidIndianPhone(v.phone)) e.phone = 'Enter a valid Indian phone number, e.g. 98765 43210.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!isValidEmail(v.email)) e.email = 'Enter a valid email address, e.g. name@company.com.';
  if (kind === 'service' && !v.serviceType) e.serviceType = 'Please choose a service type.';
  if (kind === 'contact' && v.subject.trim().length < 3) e.subject = 'Please enter a subject.';
  if (v.message.trim().length < 10) e.message = 'Please add a short description (at least 10 characters).';
  return e;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function EnquiryForm({ kind, productName, defaultServiceType = '', onClose, className, submitLabel }: EnquiryFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(emptyValues(defaultServiceType));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [failure, setFailure] = useState<{ reason: 'not-configured' | 'failed'; mailto: string } | null>(null);
  const [sentSnapshot, setSentSnapshot] = useState({ name: '', serviceType: '' });

  // when the modal is re-opened for a different service/product, update the defaults
  useEffect(() => {
    setValues((prev) => ({ ...prev, serviceType: defaultServiceType || prev.serviceType }));
  }, [defaultServiceType]);

  const id = (field: string) => `${uid}-${field}`;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(kind, next));
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(kind, values));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return; // no double submit
    if (values.website) return; // honeypot caught a bot - silently ignore

    const found = validate(kind, values);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, serviceType: true, subject: true, message: true });
    if (hasErrors(found)) {
      const firstField = ['name', 'phone', 'email', 'serviceType', 'subject', 'message'].find((f) => found[f]);
      if (firstField) formRef.current?.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setStatus('sending');
    setFailure(null);
    const result = await sendEnquiry({
      kind,
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      serviceType: kind === 'service' ? values.serviceType : undefined,
      subject: kind === 'contact' ? values.subject.trim() : undefined,
      message: values.message.trim(),
      productName,
    });

    if (result.status === 'sent') {
      setSentSnapshot({ name: values.name.trim(), serviceType: values.serviceType });
      setStatus('sent');
      setValues(emptyValues(defaultServiceType));
      setTouched({});
      setErrors({});
    } else {
      setFailure({ reason: result.reason, mailto: result.mailto });
      setStatus('error');
    }
  };

  const reset = () => {
    setStatus('idle');
    setFailure(null);
  };

  const fieldError = (field: string) => (touched[field] ? errors[field] : undefined);
  const describedBy = (field: string) => (fieldError(field) ? `${id(field)}-err` : undefined);

  const waMessage =
    kind === 'service'
      ? `Hello Rathin, this is ${sentSnapshot.name}. I just submitted a service request for "${sentSnapshot.serviceType}". Please contact me.`
      : kind === 'product'
        ? `Hello Rathin, this is ${sentSnapshot.name}. I just sent an enquiry${productName ? ` about ${productName}` : ''}. Please contact me.`
        : `Hello Rathin, this is ${sentSnapshot.name}. I just sent an enquiry through your website. Please contact me.`;

  return (
    <div className={cx('form-wrap', className)}>
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ? (
          <motion.div
            key="sent"
            className="form-state form-state--success"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            role="status"
          >
            <motion.span
              className="form-state__icon"
              initial={{ scale: 0, rotate: -40 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.12, type: 'spring', stiffness: 260, damping: 14 }}
            >
              <Icon name="checkCircle" />
            </motion.span>
            <h3 className="form-state__title">Thank you{sentSnapshot.name ? `, ${sentSnapshot.name.split(' ')[0]}` : ''}!</h3>
            <p className="form-state__text">Our team will contact you shortly. Need us sooner? Reach us directly:</p>
            <div className="form-state__actions">
              <Button variant="whatsapp" icon="whatsapp" size="lg" href={whatsappLink(waMessage)}>
                WhatsApp
              </Button>
              <Button variant="primary" icon="phone" size="lg" href={telLink}>
                Call Now
              </Button>
              <Button variant="outline" icon="mail" size="lg" href={mailtoLink('Rathin enquiry', `Hello Rathin,\n\nThis is ${sentSnapshot.name}.`)}>
                Email
              </Button>
            </div>
            {onClose ? (
              <Button variant="ghost" icon="close" onClick={onClose} autoFocus>
                Close
              </Button>
            ) : (
              <Button variant="ghost" icon="redo" onClick={reset} autoFocus>
                Send another request
              </Button>
            )}
          </motion.div>
        ) : status === 'error' && failure ? (
          <motion.div
            key="error"
            className="form-state form-state--error"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
          >
            <span className="form-state__icon">
              <Icon name="warning" />
            </span>
            <h3 className="form-state__title">We could not send that online</h3>
            <p className="form-state__text">
              {failure.reason === 'not-configured'
                ? 'The online form is not connected yet.'
                : 'Something went wrong while sending your message.'}{' '}
              Please retry, or reach us right away - your details are still saved in the form.
            </p>
            <div className="form-state__actions">
              <Button variant="primary" icon="redo" onClick={reset} autoFocus>
                Try again
              </Button>
              <Button variant="whatsapp" icon="whatsapp" href={whatsappLink('Hello Rathin, I tried to send an enquiry from your website. Please contact me.')}>
                WhatsApp
              </Button>
              <Button variant="outline" icon="phone" href={telLink}>
                Call {siteConfig.phoneDisplay}
              </Button>
              <Button variant="outline" icon="mail" href={failure.mailto}>
                Send via email app
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            className="form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-busy={status === 'sending'}
          >
            {productName ? (
              <p className="form__product">
                <Icon name="box" /> Enquiry about: <strong>{productName}</strong>
              </p>
            ) : null}

            <div className="form__grid">
              <div className={cx('field', fieldError('name') && 'field--error')}>
                <label htmlFor={id('name')}>Name *</label>
                <input
                  id={id('name')}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(fieldError('name'))}
                  aria-describedby={describedBy('name')}
                  placeholder="Your full name"
                />
                {fieldError('name') ? <p id={`${id('name')}-err`} className="field__error" role="alert">{fieldError('name')}</p> : null}
              </div>

              <div className={cx('field', fieldError('phone') && 'field--error')}>
                <label htmlFor={id('phone')}>Phone Number *</label>
                <input
                  id={id('phone')}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(fieldError('phone'))}
                  aria-describedby={describedBy('phone')}
                  placeholder="98765 43210"
                />
                {fieldError('phone') ? <p id={`${id('phone')}-err`} className="field__error" role="alert">{fieldError('phone')}</p> : null}
              </div>

              <div className={cx('field', fieldError('email') && 'field--error')}>
                <label htmlFor={id('email')}>Email *</label>
                <input
                  id={id('email')}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(fieldError('email'))}
                  aria-describedby={describedBy('email')}
                  placeholder="name@company.com"
                />
                {fieldError('email') ? <p id={`${id('email')}-err`} className="field__error" role="alert">{fieldError('email')}</p> : null}
              </div>

              {kind === 'service' ? (
                <div className={cx('field', fieldError('serviceType') && 'field--error')}>
                  <label htmlFor={id('serviceType')}>Service Type *</label>
                  <select
                    id={id('serviceType')}
                    name="serviceType"
                    value={values.serviceType}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(fieldError('serviceType'))}
                    aria-describedby={describedBy('serviceType')}
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {fieldError('serviceType') ? <p id={`${id('serviceType')}-err`} className="field__error" role="alert">{fieldError('serviceType')}</p> : null}
                </div>
              ) : null}

              {kind === 'contact' ? (
                <div className={cx('field', fieldError('subject') && 'field--error')}>
                  <label htmlFor={id('subject')}>Subject *</label>
                  <input
                    id={id('subject')}
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(fieldError('subject'))}
                    aria-describedby={describedBy('subject')}
                    placeholder="How can we help?"
                  />
                  {fieldError('subject') ? <p id={`${id('subject')}-err`} className="field__error" role="alert">{fieldError('subject')}</p> : null}
                </div>
              ) : null}

              <div className={cx('field', 'field--full', fieldError('message') && 'field--error')}>
                <label htmlFor={id('message')}>{kind === 'contact' ? 'Message *' : 'Description *'}</label>
                <textarea
                  id={id('message')}
                  name="message"
                  rows={kind === 'contact' ? 5 : 3}
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(fieldError('message'))}
                  aria-describedby={describedBy('message')}
                  placeholder={
                    kind === 'service'
                      ? 'Machine model, city and a short description of what you need or the fault you see'
                      : kind === 'product'
                        ? 'Quantity, power supply, city and any special requirement'
                        : 'Tell us about your kitchen and what you need'
                  }
                />
                {fieldError('message') ? <p id={`${id('message')}-err`} className="field__error" role="alert">{fieldError('message')}</p> : null}
              </div>

              {/* honeypot field: hidden from people, tempting for bots */}
              <div className="field--hp" aria-hidden="true">
                <label htmlFor={id('website')}>Leave this field empty</label>
                <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
              </div>
            </div>

            <Button type="submit" variant="cta" size="lg" full icon="send" loading={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : submitLabel ?? (kind === 'service' ? 'Submit Request' : kind === 'product' ? 'Send Enquiry' : 'Send Message')}
            </Button>
            <p className="form__note">We reply during working hours: {siteConfig.hours.display}.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
