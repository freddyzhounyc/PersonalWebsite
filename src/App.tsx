import { useCallback, useEffect, useMemo, useState } from 'react'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Honors from './components/Honors'
import Contact from './components/Contact'
import CommandPalette, { type Command } from './components/CommandPalette'
import { ToastProvider, useToast } from './hooks/useToast'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useScrollProgress } from './hooks/useScrollProgress'
import { prefersReducedMotion } from './hooks/useReducedMotion'
import { EMAIL, GITHUB, LINKEDIN, RESUME, sections } from './data'

const sectionIds = ['home', ...sections.map((s) => s.id)]
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

function confetti() {
  const colors = ['#818cf8', '#22d3ee', '#34d399', '#fbbf24', '#f472b6']
  for (let i = 0; i < 70; i++) {
    const p = document.createElement('i')
    p.className = 'party'
    p.style.left = Math.random() * 100 + 'vw'
    p.style.background = colors[i % colors.length]
    p.style.animationDelay = Math.random() * 0.8 + 's'
    document.body.appendChild(p)
    setTimeout(() => p.remove(), 3800)
  }
}

function Site() {
  const toast = useToast()
  const { theme, toggle } = useTheme()
  const active = useScrollSpy(sectionIds)
  const { y } = useScrollProgress()
  const [palette, setPalette] = useState(false)
  const [tab, setTab] = useState(0)

  const goto = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }, [])

  const toggleTheme = useCallback(() => {
    toggle()
    toast(`${theme === 'dark' ? 'Light' : 'Dark'} mode`)
  }, [toggle, toast, theme])

  const commands: Command[] = useMemo(() => [
    ['home', 'Home'], ...sections.map((s) => [s.id, s.label] as const),
  ].map(([id, label]) => ({ label: `Go to ${label}`, hint: `#${id}`, run: () => goto(id) })).concat([
    { label: 'Toggle light / dark theme', hint: 'T', run: toggleTheme },
    { label: 'Copy email address', hint: 'E', run: () => navigator.clipboard?.writeText(EMAIL).then(() => toast('Email copied to clipboard'), () => toast(EMAIL)) },
    { label: 'Open GitHub', hint: '↗', run: () => window.open(GITHUB, '_blank', 'noopener') },
    { label: 'Open LinkedIn', hint: '↗', run: () => window.open(LINKEDIN, '_blank', 'noopener') },
    { label: 'Download résumé', hint: '↓', run: () => { const a = document.createElement('a'); a.href = RESUME; a.download = ''; a.click() } },
  ]), [goto, toggleTheme, toast])

  // global keys: ⌘/Ctrl+K, Esc, Konami
  useEffect(() => {
    let pos = 0
    const on = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPalette((p) => !p); return }
      if (e.key === 'Escape') setPalette(false)
      pos = e.key === KONAMI[pos] ? pos + 1 : e.key === KONAMI[0] ? 1 : 0
      if (pos === KONAMI.length) {
        pos = 0
        toast('🎉 You found the secret!')
        if (!prefersReducedMotion()) confetti()
      }
    }
    addEventListener('keydown', on)
    return () => removeEventListener('keydown', on)
  }, [toast])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Cursor />
      <Nav scrolled={y > 10} active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Experience index={tab} onSelect={setTab} />
        <Projects />
        <Skills />
        <Education />
        <Honors />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          <p>© {new Date().getFullYear()} Freddy Zhou · Built with React, TypeScript &amp; Vite.</p>
          <p className="hint">Psst — try <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>, or the Konami code.</p>
        </div>
      </footer>
      <button className={'to-top' + (y > 700 ? ' show' : '')} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      {palette && <CommandPalette commands={commands} onClose={() => setPalette(false)} />}
    </>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <Site />
    </ToastProvider>
  )
}
