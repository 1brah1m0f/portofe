import { useEffect, useState } from 'react'
import { content } from './content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Education from './components/Education'
import Skills from './components/Skills'
import Marquee from './components/Marquee'
import Recommendation from './components/Recommendation'
import Press from './components/Press'
import Contact, { Footer } from './components/Contact'
import { ArrowUp } from './components/Icons'

function BackToTop({ label }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label={label}
      tabIndex={show ? 0 : -1}
      className={`fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full bg-accent text-accent-fg shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 sm:right-6 sm:bottom-6 ${
        show ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="size-5" />
    </a>
  )
}

function readStored(key, allowed, fallback) {
  try {
    const v = localStorage.getItem(key)
    return allowed.includes(v) ? v : fallback
  } catch {
    return fallback
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable (private mode) — keep in memory only */
  }
}

export default function App() {
  const [lang, setLang] = useState(() => readStored('lang', ['en', 'az'], 'en'))
  const [theme, setTheme] = useState(() => readStored('theme', ['dark', 'light'], 'dark'))
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'az' ? 'Şıxı İbrahimov — Proqram mühəndisi' : 'Shikhi Ibrahimov — Software Engineer'
    store('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0d10' : '#f7f7f4')
    store('theme', theme)
  }, [theme])

  // Fade sections in as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Feed the cursor position to whichever .spotlight card is under the pointer.
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest('.spotlight') : null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Nav t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Hero t={t} />
        <Marquee />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Awards t={t} />
        <Recommendation t={t} />
        <Press t={t} />
        <Education t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <BackToTop label={t.footer.top} />
    </>
  )
}
