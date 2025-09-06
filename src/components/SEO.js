import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords,
  image,
  url,
  type = 'website',
  author = 'Sequoia General Trading'
}) => {
  const defaultTitle = 'Sequoia General Trading - Big things from small places';
  const defaultDescription = 'Your trusted partner in import and export services across Ghana and West Africa. We specialize in consumer goods, industrial supplies, electronics, medical equipment, and laboratory products.';
  const defaultKeywords = 'trading, import, export, Ghana, West Africa, consumer goods, industrial supplies, electronics, medical equipment, laboratory products, general merchants';
  const defaultImage = '/images/sequoia-og-image.jpg'; // You'll need to add this image
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://sequoiatrading.com';

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || defaultImage,
    url: url ? `${siteUrl}${url}` : siteUrl
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Sequoia General Trading" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
      
      {/* Additional meta tags for business */}
      <meta name="geo.region" content="GH" />
      <meta name="geo.country" content="Ghana" />
      <meta name="geo.placename" content="Ghana" />
      <meta name="business.contact_data.country_name" content="Ghana" />
      <meta name="business.contact_data.email" content="sequoia.trades@outlook.com" />
      <meta name="business.contact_data.phone_number" content="+233 55 388 2284" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sequoia General Trading",
          "description": seo.description,
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+233-55-388-2284",
            "contactType": "customer service",
            "email": "sequoia.trades@outlook.com",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Ghana",
            "addressRegion": "Ghana"
          },
          "foundingDate": "2024",
          "sameAs": [
            siteUrl
          ],
          "areaServed": {
            "@type": "Place",
            "name": "Ghana"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Trading Services",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Consumer Goods",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Consumer Goods Trading"
                    }
                  }
                ]
              },
              {
                "@type": "OfferCatalog",
                "name": "Industrial Supplies",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Industrial Equipment Trading"
                    }
                  }
                ]
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;