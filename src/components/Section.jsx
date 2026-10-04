export default function Section({ id, index, label, title, children, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="reveal mb-10 max-w-3xl sm:mb-16">
          <p className="font-mono text-sm text-accent">
            {index} <span className="text-muted">/</span> {label}
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] leading-tight font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[13px] sm:text-xs text-muted">
      {children}
    </span>
  )
}

// 'YYYY' → 2026, 'YYYY-MM' → May 2026, 'YYYY-MM-DD' → 23 May 2026
export function formatDate(value, t) {
  const [y, m, d] = value.split('-')
  if (!m) return y
  const month = t.months[Number(m) - 1]
  return d ? `${Number(d)} ${month} ${y}` : `${month} ${y}`
}

export function period(start, end, t) {
  return `${formatDate(start, t)} — ${end ? formatDate(end, t) : t.present}`
}
