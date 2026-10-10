import { CtaBand } from '../components/CtaBand';
import { HeroSlider } from '../components/HeroSlider';
import {
  AboutSection,
  FaqSection,
  FeaturedProducts,
  Gallery,
  HowItWorks,
  Industries,
  ParallaxCta,
  ServicesOverview,
  StatsStrip,
  Testimonials,
  WarrantyBanner,
  WhyChoose,
} from '../components/home/HomeSections';
import { SEO } from '../components/SEO';
import { faqs } from '../data/home';
import { faqSchema, localBusinessSchema, organizationSchema, websiteSchema } from '../utils/schema';

export default function Home() {
  return (
    <>
      <SEO
        title="Rathin | Commercial Induction Kitchen Equipment, Bengaluru"
        description="Rathin manufactures commercial induction cooktops, woks, griddles, tilting bratt pans and boiling kettles in stainless steel with 1 year warranty and pan-India service."
        path="/"
        keywords={['induction cooktop manufacturer', 'commercial induction cooker', 'induction kitchen equipment supplier India', 'induction AMC']}
        jsonLd={[organizationSchema(), localBusinessSchema(), websiteSchema(), faqSchema(faqs)]}
      />
      <HeroSlider />
      <StatsStrip />
      <AboutSection />
      <FeaturedProducts />
      <WhyChoose />
      <ServicesOverview />
      <ParallaxCta />
      <HowItWorks />
      <Industries />
      <WarrantyBanner />
      <Testimonials />
      <Gallery />
      <FaqSection />
      <CtaBand />
    </>
  );
}
