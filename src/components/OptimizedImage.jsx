

/**
 * Optimized Image component with lazy loading, WebP support, and responsive sizing
 * @param {Object} props - Image properties
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - CSS classes
 * @param {boolean} props.lazy - Whether to use lazy loading (default: true)
 * @param {string} props.sizes - Sizes attribute for responsive images
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  lazy = true,
  sizes = '100vw',
  srcset,
  ...props
}) => {
  // Generate WebP version if the image is a common format
  const getWebPSrc = (originalSrc) => {
    if (originalSrc.includes('.jpg') || originalSrc.includes('.jpeg') || originalSrc.includes('.png')) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/, '.webp');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  const webpSrcset = srcset ? getWebPSrc(srcset) : null;

  return (
    <picture>
      {webpSrcset && (
        <source
          srcSet={webpSrcset}
          type="image/webp"
          sizes={sizes}
        />
      )}
      {webpSrc !== src && !webpSrcset && (
        <source
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
      )}
      <img
        src={src}
        srcSet={srcset}
        alt={alt}
        className={className}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;