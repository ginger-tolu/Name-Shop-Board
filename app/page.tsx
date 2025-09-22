import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import CompanyStats from './components/sections/CompanyStats';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shop Name Boards - Best Marketing Agency",
    "legalName": "Shop Name Boards Private Limited",
    "url": "https://www.shopnameboards.com",
    "logo": "https://www.shopnameboards.com/logo-shop-name-boards.png",
    "image": "https://www.shopnameboards.com/shop-name-board-gallery.jpg",
    "description": "Leading marketing agency specializing in shop name boards advertisement across India. We provide acrylic name boards, LED glow sign boards, ACP signage, GSB boards, flex printing, vinyl name boards, 3D letter boards, neon signage, and wooden name boards for shops, restaurants, offices, and hospitals.",
    "foundingDate": "2009",
    "slogan": "Transform Your Business Identity with Professional Signage",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rukmini Knowledge Park Kattigenaha, Yelahanka, Bellahalli Main Road, Srinivasa Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560064",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.1084",
      "longitude": "77.5505"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-98765-43210",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": ["Pan India", "All States", "All Cities"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-87654-32109",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [],
    "priceRange": "₹299 - ₹50000",
    "paymentAccepted": ["Cash", "Credit Card", "UPI", "Bank Transfer", "Cheque"],
    "currenciesAccepted": "INR",
    "areaServed": {
      "@type": "Place",
      "name": "Pan India",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "All Indian States and Union Territories",
        "addressCountry": "IN"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent quality acrylic name board! Professional service and timely delivery."
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shop Name Boards Marketing Agency",
    "image": "https://www.shopnameboards.com/shop-signage-bengaluru.jpg",
    "telephone": "+91-98765-43210",
    "email": "info@shopnameboards.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rukmini Knowledge Park Kattigenaha, Yelahanka, Bellahalli Main Road, Srinivasa Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560064",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.1084",
      "longitude": "77.5505"
    },
    "url": "https://www.shopnameboards.com",
    "openingHours": "Mo-Sa 09:00-19:00",
    "priceRange": "₹299 - ₹50000",
    "servesCuisine": false,
    "acceptsReservations": false,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "847"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shop Name Board Advertisement Services Pan India",
    "provider": {
      "@type": "Organization",
      "name": "Shop Name Boards"
    },
    "description": "Complete shop name board advertisement and marketing services including acrylic name boards, LED glow sign boards, ACP signage, GSB boards, flex printing, vinyl boards, 3D letter boards, neon signage, wooden name boards, metal name plates, channel letters, digital display boards, and custom signage solutions.",
    "serviceType": "Marketing Agency for Signage and Name Board Advertisement",
    "areaServed": ["Pan India", "All States", "All Cities", "Karnataka", "Bengaluru"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Name Board Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acrylic Name Board"
          },
          "price": "999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Glow Sign Board"
          },
          "price": "2999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ACP Name Board with 3D Letters"
          },
          "price": "1499",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "Premium Acrylic Name Board",
        "description": "High-quality transparent acrylic name board with precision laser cutting and vibrant printing",
        "brand": "Shop Name Boards",
        "offers": {
          "@type": "Offer",
          "price": "999",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "124"
        }
      },
      {
        "@type": "Product",
        "name": "LED Illuminated Sign Board",
        "description": "Energy-efficient LED backlit glow sign board with premium tempered glass",
        "brand": "Shop Name Boards",
        "offers": {
          "@type": "Offer",
          "price": "5999",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "89"
        }
      },
      {
        "@type": "Product",
        "name": "3D Metal Letter Board",
        "description": "Durable stainless steel 3D letter board with modern dimensional design",
        "brand": "Shop Name Boards",
        "offers": {
          "@type": "Offer",
          "price": "3499",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "67"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of acrylic name board in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Acrylic name board price in Delhi starts from ₹999 for basic designs. Premium acrylic boards with LED backlighting cost ₹2999+. Price depends on size, thickness, design complexity, and lighting options."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better - GSB or ACP name board?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GSB (Glow Sign Board) is better for illuminated signage with uniform lighting, while ACP (Aluminium Composite Panel) is more durable and cost-effective for non-lit boards. ACP with 3D letters offers premium look."
        }
      },
      {
        "@type": "Question",
        "name": "How long does name board installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Name board installation typically takes 2-4 hours depending on size and complexity. Simple acrylic boards take 1-2 hours, while LED boards with electrical work may take 3-4 hours."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.shopnameboards.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop Name Boards India",
        "item": "https://www.shopnameboards.com/shop-name-boards-india"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Comprehensive Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <CompanyStats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
