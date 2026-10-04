import Section from './Section'

export default function About({ t }) {
  const a = t.about

  return (
    <Section id="about" index="01" label={a.label} title={a.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="reveal space-y-5 text-[17px] leading-relaxed text-muted sm:text-lg">
          {a.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <div className="pt-4">
            <p className="font-mono text-[13px] sm:text-xs tracking-wider text-muted uppercase">{a.mottoLabel}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-2xl font-bold text-fg sm:text-3xl">
              {a.motto.map((word, i) => (
                <span key={word} className="inline-flex items-center gap-3">
                  {i > 0 && <span className="text-accent">→</span>}
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        <dl className="reveal spotlight divide-y divide-line self-start rounded-2xl border border-line bg-surface" style={{ '--d': 1 }}>
          {a.facts.map((f) => (
            <div key={f.label} className="px-6 py-5">
              <dt className="font-mono text-[13px] sm:text-xs tracking-wider text-muted uppercase">{f.label}</dt>
              <dd className="mt-1.5 font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
