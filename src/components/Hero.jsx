import { useEffect, useRef, useState } from 'react'
import { links, stats } from '../data'
import { ArrowDown, Cloud, Download, Github, Globe, Instagram, Linkedin, Mail, MapPin, Trophy } from './Icons'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Cycles through roles; invisible copies reserve the width/height of the longest one.
function RotatingRole({ roles }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    setI(0)
    if (reducedMotion()) return
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles])

  return (
    <>
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true" className="inline-grid overflow-hidden pb-1 align-bottom">
        {roles.map((r) => (
          <span key={r} className="invisible col-start-1 row-start-1">
            {r}
          </span>
        ))}
        <span key={roles[i]} className="animate-role-in text-shine col-start-1 row-start-1">
          {roles[i]}
        </span>
      </span>
    </>
  )
}

// Counts from 0 to the numeric part of `value` ("35+" → 35, keeps "+") once visible.
function CountUp({ value }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0
  const suffix = match ? match[2] : value
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion() || !('IntersectionObserver' in window)) {
      setN(target)
      return
    }
    let raf
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / 1400, 1)
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

function Badge({ icon: Icon, className, delay, children }) {
  return (
    <span
      className={`animate-float absolute hidden items-center gap-2 rounded-full border border-line bg-surface/90 px-3.5 py-2 text-xs font-semibold whitespace-nowrap shadow-xl shadow-black/10 backdrop-blur sm:inline-flex ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className="size-4 text-accent" />
      {children}
    </span>
  )
}

export default function Hero({ t }) {
  const h = t.hero

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="animate-aurora pointer-events-none absolute -top-40 -left-32 -z-10 size-[520px] rounded-full bg-accent/12 blur-3xl" />
      <div
        className="animate-aurora pointer-events-none absolute top-20 -right-40 -z-10 size-[440px] rounded-full bg-accent/8 blur-3xl"
        style={{ animationDelay: '-10s' }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {h.status}
          </p>

          <p className="reveal mt-8 font-mono text-sm text-muted" style={{ '--d': 1 }}>
            {h.greeting}
          </p>
          <h1
            className="reveal mt-2 font-display text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ '--d': 2 }}
          >
            {h.name}
          </h1>
          <p className="reveal mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl" style={{ '--d': 3 }}>
            <RotatingRole roles={h.roles} />
          </p>
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ '--d': 4 }}>
            {h.intro}
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3" style={{ '--d': 5 }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-accent/40"
            >
              {h.ctaProjects}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-muted"
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

          <div className="reveal mt-8 flex flex-wrap items-center gap-5 text-muted" style={{ '--d': 6 }}>
            {[
              { href: links.github, label: 'GitHub', Icon: Github },
              { href: links.linkedin, label: 'LinkedIn', Icon: Linkedin },
              { href: links.instagram, label: 'Instagram', Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition-all hover:-translate-y-0.5 hover:text-accent"
              >
                <Icon />
              </a>
            ))}
            <span className="h-4 w-px bg-line" />
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" />
              {t.location}
            </span>
          </div>
        </div>

        <figure className="reveal order-1 mx-auto lg:order-2">
          <div className="relative">
            <div className="animate-spin-slow absolute -inset-4 rounded-full border border-dashed border-accent/50" />
            <div className="absolute -inset-10 -z-10 rounded-full bg-accent/15 blur-3xl" />
            <div className="size-56 overflow-hidden rounded-full border-4 border-surface-2 bg-surface sm:size-72">
              <img src="/shikhi.png" alt={h.photoAlt} width="288" height="288" className="size-full scale-[1.06] object-cover" />
            </div>

            <Badge icon={Cloud} className="top-4 -left-20" delay="0s">
              {h.badges.aws}
            </Badge>
            <Badge icon={Trophy} className="top-1/2 -right-16" delay="-2s">
              {h.badges.awards}
            </Badge>
            <Badge icon={Globe} className="-bottom-3 -left-6" delay="-4s">
              {h.badges.summit}
            </Badge>
          </div>
          <figcaption className="mt-6 flex justify-center sm:hidden">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted">
              <MapPin className="size-3.5 text-accent" />
              {h.photoCaption}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24 sm:px-6">
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.id}
              className="reveal spotlight flex flex-col-reverse rounded-2xl border border-line bg-surface/80 px-5 py-6 backdrop-blur sm:px-6"
              style={{ '--d': i }}
            >
              <dt className="mt-1 text-sm text-muted">{t.stats[s.id]}</dt>
              <dd className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <CountUp value={s.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
