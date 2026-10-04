import { experience } from '../data'
import { ArrowUpRight } from './Icons'
import Section, { Tag, period } from './Section'

export default function Experience({ t }) {
  const e = t.experience

  return (
    <Section id="experience" index="02" label={e.label} title={e.title}>
      <ol className="relative space-y-6 border-l border-line pl-6 sm:space-y-8 sm:pl-10">
        {experience.map((job) => {
          const item = e.items[job.id]
          const current = !job.end
          return (
            <li key={job.id} className="reveal relative">
              <span
                className={`absolute top-7 -left-[29px] size-2.5 rounded-full ring-4 ring-bg sm:-left-[45px] ${
                  current ? 'bg-accent' : 'bg-muted'
                }`}
              />
              <article className="spotlight rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-muted">
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {item.org}
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        item.org
                      )}
                      <span className="mx-2">·</span>
                      {t.location}
                    </p>
                  </div>
                  <p
                    className={`rounded-full px-3 py-1 font-mono text-[13px] sm:text-xs whitespace-nowrap ${
                      current ? 'bg-accent/15 text-accent' : 'bg-surface-2 text-muted'
                    }`}
                  >
                    {period(job.start, job.end, t)}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 leading-relaxed text-muted">
                  {item.points.map((pt) => (
                    <li key={pt.slice(0, 24)} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
