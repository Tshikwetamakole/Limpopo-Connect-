export default function FilterChips({ filters, active = [], onToggle }) {
  return (
    <div className="-mx-4 px-4 overflow-x-auto" role="region" aria-label="Filters">
      <div className="flex gap-2 py-2">
        {filters.map((f) => {
          const isActive = active.includes(f.value);
          const Icon = f.icon;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => onToggle?.(f.value)}
              aria-pressed={isActive}
              className={
                "shrink-0 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm border focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple " +
                (isActive
                  ? "bg-brand-purple text-white border-brand-purple"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50")
              }
            >
              {Icon ? <Icon className="w-4 h-4" aria-hidden="true" /> : null}
              <span>{f.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
