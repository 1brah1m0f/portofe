import { links, projects } from '../data'
import { ArrowUpRight, Calendar, Check, Github, Globe, Leaf, Play, Rocket, Satellite, Shield, Users } from './Icons'
import Section, { Tag, formatDate, period } from './Section'

const icons = { globe: Globe, satellite: Satellite, shield: Shield, leaf: Leaf, calendar: Calendar, rocket: Rocket }

// Projects with only a year have no `end` key at all.
const when = (project, t) => (project.end === undefined ? formatDate(project.start, t) : period(project.start, project.end, t))

const host = (url) => new URL(url).hostname.replace(/^www\./, '')

function ProjectLinks({ project, p }) {
  const secondary =
    'inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:border-muted sm:text-sm'
  return (
    <div className="flex flex-wrap gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group/btn inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[15px] sm:text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
        >
          {p.live}
          <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      )}
      {project.video && (
        <a href={project.video} target="_blank" rel="noreferrer" className={secondary}>
          <Play className="size-3.5" />
          {p.video}
        </a>
      )}
      {project.code && (
        <a href={project.code} target="_blank" rel="noreferrer" className={secondary}>
          <Github className="size-4" />
          {p.code}
        </a>
      )}
    </div>
  )
}

function Highlights({ items, className = '', big = false }) {
  return (
    <ul className={`space-y-2 ${big ? 'text-[15px]' : 'text-[15px] sm:text-sm'} ${className}`}>
      {items.map((h) => (
        <li key={h} className="flex gap-2.5">
          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  )
}

// Visual header: real screenshot in a browser frame if provided, otherwise an animated icon panel.
function Cover({ project, title, className = '' }) {
  const Icon = icons[project.icon] ?? Globe

  if (project.image) {
    const Frame = project.live ? 'a' : 'div'
    const frameProps = project.live ? { href: project.live, target: '_blank', rel: 'noreferrer', 'aria-label': title } : {}
    return (
      <Frame
        {...frameProps}
        className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-2xl shadow-black/10 ${className}`}
      >
        <div className="flex h-8 shrink-0 items-center gap-3 border-b border-line px-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </span>
          {project.live && (
            <span className="mx-auto max-w-[70%] truncate rounded-md bg-bg/60 px-3 py-0.5 font-mono text-xs sm:text-[11px] text-muted">
              {host(project.live)}
            </span>
          )}
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <img
            src={project.image}
            alt={title}
            loading="lazy"
            width="1280"
            height="800"
            className="size-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
          />
        </div>
      </Frame>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-line bg-surface-2 ${className}`}>
      <div className="bg-grid absolute inset-0 opacity-80" style={{ maskImage: 'none', backgroundSize: '28px 28px' }} />
      <div className="absolute -right-12 -bottom-16 size-56 rounded-full bg-accent/25 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -top-16 -left-12 size-40 rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid size-20 place-items-center rounded-3xl border border-line bg-surface text-accent shadow-2xl shadow-black/20 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:-rotate-6">
          <Icon className="size-9" />
        </div>
      </div>
      {project.live && (
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/70 px-2.5 py-1 font-mono text-xs sm:text-[11px] text-muted backdrop-blur">
          <span className="size-1.5 rounded-full bg-accent" />
          {host(project.live)}
        </span>
      )}
    </div>
  )
}

function Meta({ project, t, p }) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[13px] sm:text-xs">
      <span className="rounded-full border border-line px-2.5 py-1 text-muted">{when(project, t)}</span>
      {project.end === null && <span className="rounded-full bg-accent/15 px-2.5 py-1 text-accent">{p.active}</span>}
      {project.team && (
        <span className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-muted">
          <Users className="size-3.5" />
          {p.team}
        </span>
      )}
    </div>
  )
}

function FeaturedCard({ project, t, p, flip }) {
  const item = p.items[project.id]
  return (
    <article className="reveal spotlight group overflow-hidden rounded-3xl border border-line bg-surface p-5 sm:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Cover project={project} title={item.title} className={`aspect-[16/10] ${flip ? 'lg:order-2' : ''}`} />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[13px] sm:text-xs font-medium text-accent-fg">{p.featured}</span>
            <Meta project={project} t={t} p={p} />
          </div>
          <h3 className="mt-5 font-display text-[1.75rem] leading-tight font-bold tracking-tight sm:text-4xl">{item.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{item.desc}</p>
          <Highlights items={item.highlights} className="mt-6" big />
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="mt-8">
            <ProjectLinks project={project} p={p} />
          </div>
        </div>
      </div>
    </article>
  )
}

function Card({ project, t, p, index }) {
  const item = p.items[project.id]
  return (
    <article
      className="reveal spotlight group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-5 sm:p-6"
      style={{ '--d': index % 2 }}
    >
      <Cover project={project} title={item.title} className="aspect-[16/9]" />
      <div className="mt-6">
        <Meta project={project} t={t} p={p} />
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
}

export default function Projects({ t }) {
  const p = t.projects
  const featured = projects.filter((x) => x.featured)
  const rest = projects.filter((x) => !x.featured)

  return (
    <Section id="projects" index="03" label={p.label} title={p.title}>
      <div className="space-y-6">
        {featured.map((project, i) => (
          <FeaturedCard key={project.id} project={project} t={t} p={p} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <Card key={project.id} project={project} t={t} p={p} index={i} />
        ))}
      </div>

      <div className="reveal mt-12 flex justify-center">
        <a
          href={`${links.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-[15px] sm:text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent"
        >
          <Github className="size-4" />
          {p.more}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Section>
  )
}
