import { useEffect, useRef, useState } from 'react'
import { Close, Menu, Moon, Sun } from './Icons'

const SECTIONS = ['about', 'experience', 'projects', 'awards', 'education', 'skills', 'contact']

export default function Nav({ t, lang, setLang, theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  const progressRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setScrolled(window.scrollY > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
        style={{ transform: 'scaleX(0)' }}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          {t.nav.logo}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors duration-300 hover:text-fg ${
                  active === id ? 'bg-surface-2 text-fg' : 'text-muted'
                }`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div role="group" aria-label={t.nav.language} className="flex rounded-full border border-line bg-surface p-0.5 font-mono text-xs">
            {['en', 'az'].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
                  lang === l ? 'bg-accent text-accent-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={t.nav.theme}
            className="grid size-9 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-fg"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-line bg-surface text-fg lg:hidden"
          >
            {open ? <Close className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto grid max-w-6xl gap-1 px-4 pb-4 sm:px-6 lg:hidden">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
