import { press } from '../data'
import { ArrowUpRight, FileText } from './Icons'
import Section, { formatDate, pick } from './Section'

function MentionCard({ item, t, p, index }) {
  return (
    <a
      href={pick(item.url, t)}
      target="_blank"
      rel="noreferrer"
      className="reveal spotlight group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
      style={{ '--d': index }}
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-2">
        <img
          src={item.image}
          alt={pick(item.title, t)}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] font-medium text-accent-fg">
          {p.mentionBadge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[13px] sm:text-xs">
          <span className="truncate text-accent">{item.source}</span>
          <time dateTime={item.date} className="shrink-0 text-muted">
            {formatDate(item.date, t)}
          </time>
        </div>
        <h3 className="mt-4 font-display text-xl leading-snug font-bold tracking-tight">{pick(item.title, t)}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-sm">{p.items[item.id]}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold sm:text-sm">
          {p.read}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  )
}

export default function Press({ t }) {
  const p = t.press
  const mentions = press.filter((x) => x.kind === 'mention')
  const events = press.filter((x) => x.kind === 'event')

  return (
    <Section id="press" index="06" label={p.label} title={p.title}>
      <p className="reveal -mt-4 mb-10 max-w-2xl text-[17px] leading-relaxed text-muted sm:-mt-8 sm:text-lg">{p.intro}</p>

      <div className="grid gap-6 md:grid-cols-3">
        {mentions.map((item, i) => (
          <MentionCard key={item.id} item={item} t={t} p={p} index={i} />
        ))}
      </div>

      <h3 className="reveal mt-14 font-mono text-[13px] tracking-wider text-muted uppercase sm:text-xs">{p.eventsTitle}</h3>
      <ul className="reveal mt-4 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
        {events.map((item) => (
          <li key={item.id}>
            <a
              href={pick(item.url, t)}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 px-5 py-5 transition-colors hover:bg-surface-2/60 sm:px-7"
            >
              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
                <FileText className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px] sm:text-xs">
                  <span className="text-accent">{item.source}</span>
                  <time dateTime={item.date} className="text-muted">
                    {formatDate(item.date, t)}
                  </time>
                </span>
                <span className="mt-1.5 block font-semibold leading-snug">{pick(item.title, t)}</span>
                <span className="mt-1 block text-[15px] leading-relaxed text-muted sm:text-sm">{p.items[item.id]}</span>
              </span>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
