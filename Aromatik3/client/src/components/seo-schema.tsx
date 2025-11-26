// SEO Schema markup para páginas específicas de AROMATIK BARCELONA
import React from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  brand: string;
  category: string;
  price: string;
  availability: string;
  image?: string;
  sku?: string;
  url?: string;
}

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string[];
  };
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

// Schema de Product para páginas de productos individuales
export const ProductSchema: React.FC<ProductSchemaProps> = ({
  name,
  description,
  brand,
  category,
  price,
  availability,
  image,
  sku,
  url
}) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "category": category,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR",
      "availability": availability,
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "Aromatik Barcelona",
        "url": "https://aromatikbarcelona.com"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    ...(image && { "image": [image] }),
    ...(sku && { "sku": sku }),
    ...(url && { "url": url })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Schema de Organization para la homepage
export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name,
  url,
  logo,
  description,
  address,
  contactPoint
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "description": description,
    "sameAs": [
      "https://www.instagram.com/aromatikbarcelona",
      "https://www.facebook.com/aromatikbarcelona"
    ],
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      }
    }),
    ...(contactPoint && {
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": contactPoint.telephone,
        "contactType": contactPoint.contactType,
        "areaServed": contactPoint.areaServed,
        "availableLanguage": contactPoint.availableLanguage
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Schema de FAQPage para la página de contacto
export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AROMATIK BARCELONA",
  "description": "Perfumería especializada en decants de perfumes nicho y fragancias exclusivas. Baccarat Rouge 540, Tom Ford, Creed, Xerjoff.",
  "url": "https://aromatikbarcelona.com",
  "telephone": "+34-XXX-XXX-XXX",
  "email": "contacto@aromatikbarcelona.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sant Pere District",
    "addressLocality": "Barcelona",
    "addressRegion": "Cataluña",
    "postalCode": "08003",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.3851",
    "longitude": "2.1734"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "21:00"
    }
  ],
  "priceRange": "€€",
  "acceptsReservations": false,
  "currenciesAccepted": "EUR",
  "paymentAccepted": ["Credit Card", "PayPal", "Bank Transfer"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Decants Perfumes Nicho",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Decant Baccarat Rouge 540",
          "category": "Perfume"
        },
        "price": "15.00",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Product",
          "name": "Decant Tom Ford Lost Cherry",
          "category": "Perfume"
        },
        "price": "18.00",
        "priceCurrency": "EUR"
      }
    ]
  },
  "areaServed": {
    "@type": "Country",
    "name": "Spain"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "41.3851",
      "longitude": "2.1734"
    },
    "geoRadius": "50000"
  }
};

export const FAQSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un decant de perfume?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un decant es una muestra auténtica extraída directamente del frasco original del perfume. En AROMATIK BARCELONA ofrecemos decants de 5ml, 10ml y 20ml de perfumes nicho y exclusivos como Baccarat Rouge 540, Tom Ford Lost Cherry, Creed y Xerjoff."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los decants son auténticos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, todos nuestros decants son 100% auténticos. Extraemos las fragancias directamente de los frascos originales de las marcas, garantizando la misma calidad y concentración que el perfume completo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen envíos a toda España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, enviamos a toda España en 24-48 horas. Ofrecemos envío gratuito en pedidos superiores a 50€. Nuestros decants están perfectamente empaquetados para garantizar que lleguen en perfectas condiciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura un decant de 5ml?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un decant de 5ml proporciona aproximadamente 60-80 aplicaciones, dependiendo de la cantidad que uses en cada aplicación. Es perfecto para probar una fragancia durante 2-3 meses o para llevar de viaje."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde están ubicados en Barcelona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AROMATIK BARCELONA opera desde el distrito de Sant Pere en Barcelona. Somos una perfumería especializada online que sirve a toda España, ofreciendo acceso a perfumes nicho exclusivos a través de nuestros decants auténticos."
      }
    }
  ]
};

export const BreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});