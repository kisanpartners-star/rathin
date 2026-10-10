/**
 * Request For Service modal: animated, backdrop blur, ESC / outside-click / X to close, focus trap,
 * scroll-lock, and a full-width bottom sheet on phones.
 */
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { siteConfig, telLink, whatsappLink } from '../data/siteConfig';
import { EnquiryForm } from './EnquiryForm';
import { Icon } from './Icon';
import { Portal } from './Portal';
import { useServiceModal } from './ServiceModalContext';

function ModalPanel() {
  const { close, options } = useServiceModal();
  const ref = useRef<HTMLDivElement>(null);
  const isPhone = useMediaQuery('(max-width: 640px)');
  useFocusTrap(ref, true, close);

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <motion.div
        ref={ref}
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        tabIndex={-1}
        initial={isPhone ? { y: '100%' } : { opacity: 0, y: 36, scale: 0.97 }}
        animate={isPhone ? { y: 0 } : { opacity: 1, y: 0, scale: 1 }}
        exit={isPhone ? { y: '100%' } : { opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      >
        <span className="modal__grabber" aria-hidden="true" />
        <button type="button" className="modal__close" onClick={close} aria-label="Close service request form">
          <Icon name="close" />
        </button>

        <header className="modal__head">
          <span className="modal__badge">
            <Icon name="tools" />
          </span>
          <div>
            <h2 id="service-modal-title" className="modal__title">
              Request For Service
            </h2>
            <p className="modal__sub">Repair, AMC, spares or a new machine enquiry. We reply fast.</p>
          </div>
        </header>

        <EnquiryForm
          kind="service"
          productName={options.productName}
          defaultServiceType={options.serviceType ?? (options.productName ? 'New Machine Enquiry' : '')}
          onClose={close}
        />

        <div className="modal__direct">
          <a href={telLink} className="modal__direct-link">
            <Icon name="phone" /> {siteConfig.phoneDisplay}
          </a>
          <a href={whatsappLink('Hello Rathin, I need help with a service request.')} className="modal__direct-link" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" /> WhatsApp us
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServiceModal() {
  const { isOpen } = useServiceModal();
  useLockBodyScroll(isOpen);
  return (
    <Portal>
      <AnimatePresence>{isOpen ? <ModalPanel key="service-modal" /> : null}</AnimatePresence>
    </Portal>
  );
}
