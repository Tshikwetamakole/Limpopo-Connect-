
import { Helmet } from 'react-helmet-async';

/**
 * SEO component for managing page meta tags dynamically
 * @param {Object} props - SEO properties
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.image - Open Graph image URL
 * @param {string} props.url - Canonical URL
 * @param {string} props.type - Open Graph type (website, article, etc.)
 */
const SEO = ({
  title = "Limpopo Connect - Social Networking for Limpopo Province",
  description = "Connect with the Limpopo community through events, groups, and social networking. Join Polokwane, Tzaneen, and Mokopane residents for local events and connections.",
  keywords = "Limpopo, Polokwane, Tzaneen, Mokopane, social networking, community events, local groups, South Africa",
  image = "/images/lady-azania.jpg",
  url = window.location.href,
  type = "website"
}) => {
  const siteName = "Limpopo Connect";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${window.location.origin}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image.startsWith('http') ? image : `${window.location.origin}${image}`} />

      {/* Additional SEO tags */}
      <meta name="theme-color" content="#1a0033" />
      <meta name="msapplication-TileColor" content="#1a0033" />
    </Helmet>
  );
};

export default SEO;