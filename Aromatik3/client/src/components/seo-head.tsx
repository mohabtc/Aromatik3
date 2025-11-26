import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  productSchema?: {
    name: string;
    description: string;
    brand: string;
    category: string;
    price?: string;
    availability?: string;
  };
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage,
  productSchema 
}: SEOProps) {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, value);
      } else {
        const meta = document.createElement('meta');
        if (selector.includes('[name=')) {
          meta.name = selector.match(/\[name="([^"]+)"\]/)?.[1] || '';
        } else if (selector.includes('[property=')) {
          meta.setAttribute('property', selector.match(/\[property="([^"]+)"\]/)?.[1] || '');
        }
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }
    };

    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[name="keywords"]', 'content', keywords);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    if (ogImage) {
      const ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) {
        ogImg.setAttribute('content', ogImage);
      }
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', description);
    }

    // Add canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Add product schema if provided
    if (productSchema) {
      const existingSchema = document.querySelector('#product-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productSchema.name,
        "description": productSchema.description,
        "brand": {
          "@type": "Brand",
          "name": productSchema.brand
        },
        "category": productSchema.category,
        "url": canonicalUrl,
        "image": ogImage,
        "offers": {
          "@type": "Offer",
          "price": productSchema.price || "15.00",
          "priceCurrency": "EUR",
          "availability": productSchema.availability || "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "AROMATIK BARCELONA"
          }
        },
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'product-schema';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, productSchema]);

  return null; // This component doesn't render anything
}