import { Suspense, useEffect, useRef } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Header, Topbar } from './components/Header';
import { MobileNav } from './components/MobileNav';
import { PointerEffects } from './components/PointerEffects';
import { ServiceModal } from './components/ServiceModal';
import { ServiceModalProvider } from './components/ServiceModalContext';
import { AnimatedBackground, Preloader, ScrollProgress } from './components/SiteEffects';
import { BlogDetail, Blogs, Contact, Home, NotFound, ProductDetail, Products, RequestService, Services } from './pages';

/** Scrolls to the top on navigation (or to the #anchor, waiting for lazy pages to render). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    if (hash) {
      let tries = 0;
      const timer = window.setInterval(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        tries += 1;
        if (el) {
          el.scrollIntoView({ behavior: first.current ? 'auto' : 'smooth', block: 'start' });
          window.clearInterval(timer);
        } else if (tries > 20) window.clearInterval(timer);
      }, 60);
      first.current = false;
      return () => window.clearInterval(timer);
    }
    if (!first.current) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    first.current = false;
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <ServiceModalProvider>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Preloader />
        <ScrollProgress />
        <AnimatedBackground />
        <PointerEffects />
        <ScrollManager />

        <div className="app">
          <Topbar />
          <Header />
          <main id="main" tabIndex={-1}>
            <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={location.pathname}
                  className="page"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:slug" element={<ProductDetail />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:slug" element={<BlogDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/request-service" element={<RequestService />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </main>
          <Footer />
        </div>

        <MobileNav />
        <FloatingActions />
        <ServiceModal />
      </ServiceModalProvider>
    </MotionConfig>
  );
}
