import { links, stats } from '../data'
import { ArrowDown, Download, Github, Instagram, Linkedin, Mail, MapPin } from './Icons'

export default function Hero({ t }) {
  const h = t.hero

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[520px] w-[820px] max-w-[160vw] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {h.status}
          </p>

          <p className="mt-8 font-mono text-sm text-muted">{h.greeting}</p>
          <h1 className="mt-2 font-display text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {h.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-balance sm:text-2xl">
            <span className="text-accent">{h.role}</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{h.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              {h.ctaProjects}
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-muted"
            >
              <Mail className="size-4" />
              {h.ctaContact}
            </a>
            <a
              href={links.cv}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors hover:text-fg"
            >
              <Download className="size-4" />
              {h.ctaCv}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-fg">
              <Github />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-fg">
              <Linkedin />
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-fg">
              <Instagram />
            </a>
            <span className="h-4 w-px bg-line" />
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" />
              {t.location}
            </span>
          </div>
        </div>

        <figure className="reveal order-1 mx-auto lg:order-2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-dashed border-accent/40" />
            <div className="absolute -inset-8 -z-10 rounded-full bg-accent/15 blur-2xl" />
            <div className="size-56 overflow-hidden rounded-full border-4 border-surface-2 bg-surface sm:size-72">
              <img src="/shikhi.png" alt={h.photoAlt} width="288" height="288" className="size-full scale-[1.06] object-cover" />
            </div>
          </div>
          <figcaption className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted">
              <MapPin className="size-3.5 text-accent" />
              {h.photoCaption}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-6">
        <dl className="reveal grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line gap-px md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.id} className="flex flex-col-reverse bg-surface px-5 py-6 sm:px-6">
              <dt className="mt-1 text-sm text-muted">{t.stats[s.id]}</dt>
              <dd className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
