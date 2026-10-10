/**
 * Route-level code splitting that also works for static pre-rendering.
 * In the browser the page is loaded on demand (React.lazy). `preload()` lets us load a page BEFORE rendering it,
 * which the pre-render script and main.tsx both use, so there is never a blank "loading" flash.
 */
import { lazy, type ComponentType } from 'react';

export type LazyPage = ComponentType & {
  preload: () => Promise<void>;
};

export function lazyPage(loader: () => Promise<{ default: ComponentType }>): LazyPage {
  let Loaded: ComponentType | null = null;
  const Lazy = lazy(() =>
    loader().then((m) => {
      Loaded = m.default;
      return m;
    }),
  );
  return Object.assign(() => (Loaded ? <Loaded /> : <Lazy />), {
    preload: () =>
      loader().then((m) => {
        Loaded = m.default;
      }),
  });
}
