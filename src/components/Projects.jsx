import { links, projects } from '../data'
import { ArrowUpRight, Check, Github, Play } from './Icons'
import Section, { Tag } from './Section'

function ProjectLinks({ project, p }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
        >
          {p.live}
          <ArrowUpRight className="size-4" />
        </a>
      )}
      {project.video && (
        <a
          href={project.video}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-muted"
        >
          <Play className="size-3.5" />
          {p.video}
        </a>
      )}
      {project.code && (
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-muted"
        >
          <Github className="size-4" />
          {p.code}
        </a>
      )}
    </div>
  )
}

function Highlights({ items, className = '' }) {
  return (
    <ul className={`space-y-2 text-sm ${className}`}>
      {items.map((h) => (
        <li key={h} className="flex gap-2.5">
          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Projects({ t }) {
  const p = t.projects
  const [featured, ...rest] = projects

  const f = p.items[featured.id]

  return (
    <Section id="projects" index="03" label={p.label} title={p.title}>
      <article className="reveal relative overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-accent-fg">{p.featured}</span>
              <span className="rounded-full border border-line px-2.5 py-1 text-muted">
                {featured.year} · {p.active}
              </span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">{f.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">{f.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-8">
              <ProjectLinks project={featured} p={p} />
            </div>
          </div>
          <div className="self-center rounded-2xl border border-line bg-surface-2 p-6">
            <Highlights items={f.highlights} className="space-y-3.5 text-base" />
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => {
          const item = p.items[project.id]
          return (
            <article
              key={project.id}
              className="reveal group flex flex-col rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-muted/50 sm:p-8"
            >
              <div className="flex items-center justify-between font-mono text-xs text-muted">
                <span>{String(i + 2).padStart(2, '0')}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.desc}</p>
              <Highlights items={item.highlights} className="mt-5" />
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <ProjectLinks project={project} p={p} />
              </div>
            </article>
          )
        })}
      </div>

      <div className="reveal mt-10 flex justify-center">
        <a
          href={`${links.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-fg"
        >
          <Github className="size-4" />
          {p.more}
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </Section>
  )
}
