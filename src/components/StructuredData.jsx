// import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * StructuredData component for adding JSON-LD structured data to pages
 * @param {Object} props - Structured data properties
 * @param {string} props.type - Type of structured data (Organization, LocalBusiness, etc.)
 * @param {Object} props.data - The structured data object
 */
const StructuredData = ({ type = 'Organization', data }) => {
  const defaultData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Limpopo Connect',
    description: 'Social networking platform for the Limpopo Province community, connecting residents through events, groups, and local networking.',
    url: 'https://limpopoconnect.site',
    logo: 'https://limpopoconnect.site/images/lady-azania.jpg',
    sameAs: [
      'https://facebook.com/limpopoconnect',
      'https://twitter.com/limpopoconnect',
      'https://instagram.com/limpopoconnect',
      'https://linkedin.com/company/limpopo-connect'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+27-12-345-6789',
      contactType: 'customer service',
      email: 'info@limpopoconnect.co.za'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Polokwane',
      addressRegion: 'Limpopo',
      addressCountry: 'ZA'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Polokwane'
      },
      {
        '@type': 'City',
        name: 'Tzaneen'
      },
      {
        '@type': 'City',
        name: 'Mokopane'
      }
    ],
    serviceType: ['Social Networking', 'Community Events', 'Local Groups'],
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Limpopo Province'
      }
    }
  };

  const structuredData = data || defaultData;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;