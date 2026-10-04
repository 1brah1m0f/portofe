export default function Section({ id, index, label, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="reveal mb-12 max-w-3xl sm:mb-16">
          <p className="font-mono text-sm text-accent">
            {index} <span className="text-muted">/</span> {label}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  )
}

export function period(start, end, t) {
  return `${start} — ${end ?? t.present}`
}
