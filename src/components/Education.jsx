import { education } from '../data'
import { ArrowUpRight, GraduationCap } from './Icons'
import Section, { period } from './Section'

export default function Education({ t }) {
  const e = t.education

  return (
    <Section id="education" index="07" label={e.label} title={e.title}>
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((ed) => {
          const item = e.items[ed.id]
          return (
            <a
              key={ed.id}
              href={ed.url}
              target="_blank"
              rel="noreferrer"
              className="reveal spotlight group flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-xl bg-surface-2 text-accent">
                  <GraduationCap className="size-5" />
                </div>
                <ArrowUpRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
              </div>
              <p className="mt-6 font-mono text-[13px] sm:text-xs text-muted">{period(ed.start, ed.end, t)}</p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-1 font-medium text-accent">{item.org}</p>
              <p className="mt-4 text-[15px] sm:text-sm leading-relaxed text-muted">{item.note}</p>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
