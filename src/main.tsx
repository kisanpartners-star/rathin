import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import App from './App';
import { preloadRoute } from './pages';
import './styles/index.css';

/* Block pinch-zoom on iOS Safari (it ignores user-scalable=no). Double-tap zoom is blocked with CSS touch-action. */
['gesturestart', 'gesturechange', 'gestureend'].forEach((evt) => document.addEventListener(evt, (e) => e.preventDefault()));
document.addEventListener(
  'touchmove',
  (e) => {
    if ((e as TouchEvent & { scale?: number }).scale && (e as TouchEvent & { scale?: number }).scale !== 1) e.preventDefault();
  },
  { passive: false },
);

const root = document.getElementById('root') as HTMLElement;

// load the current page's code first so the pre-rendered HTML is replaced without a blank flash
preloadRoute(window.location.pathname)
  .catch(() => undefined)
  .finally(() => {
    createRoot(root).render(
      <StrictMode>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </StrictMode>,
    );
  });
