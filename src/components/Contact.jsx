import { useState } from 'react'
import { links } from '../data'
import { ArrowUp, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from './Icons'

export default function Contact({ t }) {
  const c = t.contact
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal relative isolate overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-50" />
          <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[600px] max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

          <p className="font-mono text-sm text-accent">
            07 <span className="text-muted">/</span> {c.label}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {c.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">{c.text}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-5" />
              {c.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-6 py-3.5 font-semibold transition-colors hover:border-muted"
            >
              {copied ? <Check className="size-5 text-accent" /> : <Copy className="size-5" />}
              <span aria-live="polite">{copied ? c.copied : c.copy}</span>
            </button>
          </div>

          <p className="mt-6 font-mono text-sm text-muted">{links.email}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg">
              <Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-3.5" />
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg">
              <Github className="size-4" /> GitHub <ArrowUpRight className="size-3.5" />
            </a>
            <span className="inline-flex items-center gap-2 text-muted">
              <MapPin className="size-4" /> {t.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer({ t }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {t.hero.name} · {t.footer.built}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          {t.footer.top}
          <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  )
}
