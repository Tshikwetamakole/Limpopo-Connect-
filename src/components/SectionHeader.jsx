export default function SectionHeader({ title, subtitle, ctaText, onCta }) {
  return (
    <header className="text-center md:text-left space-y-2">
      <h1 className="text-2xl md:text-3xl font-bold text-brand-dark">{title}</h1>
      {subtitle ? <p className="text-gray-700">{subtitle}</p> : null}
      {ctaText ? (
        <div className="pt-1">
          <button
            type="button"
            onClick={onCta}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-purple text-white text-sm font-medium hover:bg-brand-purple/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
          >
            {ctaText}
          </button>
        </div>
      ) : null}
    </header>
  );
}
