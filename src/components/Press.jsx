import { press } from '../data'
import { ArrowUpRight, FileText } from './Icons'
import Section, { formatDate } from './Section'

export default function Press({ t }) {
  const p = t.press

  return (
    <Section id="press" index="06" label={p.label} title={p.title}>
      <p className="reveal -mt-4 mb-10 max-w-2xl text-[17px] leading-relaxed text-muted sm:-mt-8 sm:text-lg">{p.intro}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {press.map((item, i) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="reveal spotlight group flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7"
            style={{ '--d': i }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex min-w-0 items-center gap-2 font-mono text-[13px] text-accent sm:text-xs">
                <FileText className="size-4 shrink-0" />
                <span className="truncate">{item.source}</span>
              </span>
              <time dateTime={item.date} className="shrink-0 font-mono text-[13px] text-muted sm:text-xs">
                {formatDate(item.date, t)}
              </time>
            </div>
            <h3 className="mt-5 font-display text-xl leading-snug font-bold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-sm">{p.items[item.id]}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold sm:text-sm">
              {p.read}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}
