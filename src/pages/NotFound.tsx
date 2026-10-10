import { Button } from '../components/Button';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Rathin" description="The page you are looking for could not be found. Visit the Rathin home page or browse commercial induction kitchen equipment." path="/404" noindex />
      <PageHero title="Page Not Found" subtitle="That page may have moved or no longer exists." image="/assets/banners/banner-contact.webp" crumbs={[{ label: '404' }]} />
      <section className="section section--blush">
        <div className="container container--narrow not-found">
          <p className="not-found__code" aria-hidden="true">
            404
          </p>
          <h2>Let us get you back to the kitchen</h2>
          <p>Try one of these pages instead.</p>
          <div className="not-found__actions">
            <Button to="/" variant="primary" icon="home">
              Home
            </Button>
            <Button to="/products" variant="outline" icon="box">
              Products
            </Button>
            <Button to="/contact" variant="outline" icon="phone">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
