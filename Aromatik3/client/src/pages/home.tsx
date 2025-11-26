import { useEffect, useState, lazy, Suspense } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import { usePreloadCriticalResources } from '@/hooks/use-performance';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import SEOHead from '@/components/seo-head';
import { OrganizationSchema } from '@/components/seo-schema';
import ErrorBoundary from '@/components/error-boundary';

// Lazy load components that are below the fold
const RevelationSection = lazy(() => import('@/components/revelation-section'));
const ProcessSection = lazy(() => import('@/components/process-section'));
const SelectionGallery = lazy(() => import('@/components/selection-gallery'));
const BeyondSection = lazy(() => import('@/components/beyond-section'));
const LegalDisclaimer = lazy(() => import('@/components/legal-disclaimer'));
const Footer = lazy(() => import('@/components/footer'));

// Loading component for lazy sections
const SectionSkeleton = () => (
  <div className="w-full h-96 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
);

export default function Home() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  // Preload critical resources
  usePreloadCriticalResources();

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Aromatik Barcelona | Decants de Perfumes Nicho y de Lujo"
        description="Descubre una curación de fragancias icónicas. Compra decants 100% auténticos de perfumes nicho y de lujo. La libertad de explorar tu identidad olfativa."
        keywords="aromatik barcelona, decants perfumes nicho, perfumes de lujo, fragancias icónicas, identidad olfativa, comprar decants auténticos"
        canonicalUrl="https://aromatikbarcelona.com/"
        ogImage="https://aromatikbarcelona.com/og-image.jpg"
      />
      <OrganizationSchema
        name="Aromatik Barcelona"
        url="https://aromatikbarcelona.com"
        logo="https://aromatikbarcelona.com/logo.png"
        description="Perfumería especializada en decants de perfumes nicho y fragancias exclusivas de lujo. Acceso inteligente a obras maestras olfativas como Baccarat Rouge 540, Tom Ford, Creed y Xerjoff."
        address={{
          streetAddress: "Sant Pere District",
          addressLocality: "Barcelona",
          postalCode: "08003",
          addressCountry: "ES"
        }}
        contactPoint={{
          telephone: "+34-933-XXX-XXX",
          contactType: "customer service",
          areaServed: "ES",
          availableLanguage: ["es", "ca"]
        }}
      />
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <RevelationSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <ProcessSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <SelectionGallery />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <BeyondSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <LegalDisclaimer />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
