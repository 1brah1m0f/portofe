import { skills } from '../data'
import Section from './Section'

function Group({ title, items }) {
  return (
    <div className="reveal spotlight rounded-3xl border border-line bg-surface p-6 sm:p-7">
      <h3 className="font-mono text-[13px] sm:text-xs tracking-wider text-muted uppercase">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-[15px] sm:text-sm font-medium transition-colors hover:border-accent hover:text-accent">
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills({ t }) {
  const s = t.skills

  return (
    <Section id="skills" index="08" label={s.label} title={s.title}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <Group key={g.id} title={s.groups[g.id]} items={g.items} />
        ))}
        <Group title={s.groups.soft} items={s.soft} />

        <div className="reveal rounded-3xl border border-line bg-surface p-6 sm:p-7">
          <h3 className="font-mono text-[13px] sm:text-xs tracking-wider text-muted uppercase">{s.languagesTitle}</h3>
          <ul className="mt-5 space-y-4">
            {s.languages.map((l) => (
              <li key={l.name}>
                <div className="flex items-baseline justify-between gap-3 text-[15px] sm:text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${l.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
