import { Button, type ButtonProps } from './Button';
import { useServiceModal } from './ServiceModalContext';

interface Props extends Pick<ButtonProps, 'size' | 'className' | 'full'> {
  label?: string;
  serviceType?: string;
  productName?: string;
  /** runs just before the modal opens (e.g. to close the mobile drawer) */
  onBeforeOpen?: () => void;
}

/** The blinking gradient "Request For Service" button. Opens the service modal without leaving the page. */
export function RequestServiceButton({ label = 'Request For Service', serviceType, productName, onBeforeOpen, ...rest }: Props) {
  const { open } = useServiceModal();
  return (
    <Button
      variant="cta"
      blink
      icon="tools"
      {...rest}
      onClick={() => {
        onBeforeOpen?.();
        open({ serviceType, productName });
      }}
    >
      {label}
    </Button>
  );
}
