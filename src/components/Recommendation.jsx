import { links } from '../data'
import { ArrowUpRight, FileText } from './Icons'
import Section from './Section'

export default function Recommendation({ t }) {
  const r = t.recommendation

  return (
    <Section id="recommendation" index="05" label={r.label} title={r.title}>
      <figure className="reveal spotlight overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-12">
        <div className="pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full bg-accent/10 blur-3xl" />
        <span aria-hidden="true" className="block font-display text-8xl leading-none font-extrabold text-accent sm:text-9xl">
          “
        </span>
        <blockquote className="-mt-6 sm:-mt-10">
          <p className="max-w-4xl font-display text-2xl leading-snug font-semibold tracking-tight text-balance sm:text-3xl">
            {r.quote}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{r.quote2}</p>
          {r.translation && <p className="mt-6 max-w-3xl border-l-2 border-accent/50 pl-4 text-base leading-relaxed text-muted italic">{r.translation}</p>}
        </blockquote>

        <figcaption className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent font-display text-lg font-bold text-accent-fg">
              RI
            </span>
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-sm text-muted">{r.role}</p>
              <p className="mt-0.5 text-sm text-muted">{r.context}</p>
            </div>
          </div>
          <a
            href={links.recommendation}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-surface-2 px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent sm:self-auto"
          >
            <FileText className="size-4 text-accent" />
            {r.read}
            <ArrowUpRight className="size-4" />
          </a>
        </figcaption>
      </figure>
    </Section>
  )
}
