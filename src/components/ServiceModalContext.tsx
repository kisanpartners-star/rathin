import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

export interface ServiceModalOptions {
  /** pre-select a value of the "Service Type" dropdown */
  serviceType?: string;
  /** product the visitor is enquiring about (added to the email) */
  productName?: string;
}

interface ServiceModalState {
  isOpen: boolean;
  options: ServiceModalOptions;
  open: (options?: ServiceModalOptions) => void;
  close: () => void;
}

const noop = () => undefined;
const Ctx = createContext<ServiceModalState>({ isOpen: false, options: {}, open: noop, close: noop });

/** Open the Request For Service modal from anywhere:  const { open } = useServiceModal(); open(); */
export const useServiceModal = () => useContext(Ctx);

export function ServiceModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [options, setOptions] = useState<ServiceModalOptions>({});

  const open = useCallback((opts: ServiceModalOptions = {}) => {
    setOptions(opts);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ isOpen, options, open, close }), [isOpen, options, open, close]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
