import { awards } from '../data'
import { Globe, MapPin, Trophy } from './Icons'
import Section from './Section'

const badgeStyle = {
  2: 'bg-accent text-accent-fg',
  3: 'bg-accent/15 text-accent',
  nom: 'border border-line text-muted',
}

export default function Awards({ t }) {
  const a = t.awards
  const s = a.spotlight

  return (
    <Section id="awards" index="04" label={a.label} title={a.title}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
        <article className="reveal relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex items-center gap-2 font-mono text-xs text-accent">
            <Globe className="size-4" />
            {s.kicker}
          </div>
          <h3 className="relative mt-5 font-display text-3xl font-bold tracking-tight">{s.title}</h3>
          <p className="relative mt-4 leading-relaxed text-muted">{s.text}</p>
          <p className="relative mt-auto inline-flex items-center gap-1.5 pt-8 text-sm text-muted">
            <MapPin className="size-4 text-accent" />
            {s.place}
          </p>
        </article>

        <ul className="reveal divide-y divide-line rounded-3xl border border-line bg-surface">
          {awards.map((aw) => {
            const item = a.items[aw.id]
            return (
              <li key={aw.id} className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
                  <Trophy className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h4 className="font-semibold">{item.title}</h4>
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${badgeStyle[aw.place]}`}>
                      {a.places[aw.place]}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.org}</p>
                </div>
                <time className="hidden shrink-0 font-mono text-xs text-muted sm:block">{aw.date}</time>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
