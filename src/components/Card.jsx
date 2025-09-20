export default function Card({ image, title, meta = {}, excerpt, primaryCta, secondaryCta, onPrimary, onSecondary }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100">
      <div className="relative aspect-[16/9] bg-gray-100">
        {image?.src && (
          <img
            src={image.src}
            alt={image.alt || ''}
            width={image.width ?? 1200}
            height={image.height ?? 675}
            loading="lazy"
            decoding="async"
            srcSet={image.srcSet}
            sizes={image.sizes || '(max-width: 640px) 100vw, 600px'}
            className="absolute inset-0 size-full object-cover"
          />
        )}
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          {meta.date && <time className="inline-flex items-center gap-1">{meta.date}</time>}
          {meta.location && <span className="inline-flex items-center gap-1">{meta.location}</span>}
          {meta.attendance != null && (
            <span className="ml-auto inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
              {meta.attendance}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-brand-dark line-clamp-2">{title}</h3>
        {excerpt && <p className="text-gray-700 text-sm line-clamp-2 leading-relaxed">{excerpt}</p>}
        <div className="flex gap-2 pt-1">
          {primaryCta && (
            <button
              type="button"
              onClick={onPrimary}
              className="px-4 py-2 rounded-lg bg-brand-purple text-white text-sm font-medium hover:bg-brand-purple/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
            >
              {primaryCta}
            </button>
          )}
          {secondaryCta && (
            <button
              type="button"
              onClick={onSecondary}
              className="px-4 py-2 rounded-lg border border-brand-purple text-brand-purple text-sm font-medium hover:bg-brand-purple/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
            >
              {secondaryCta}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
