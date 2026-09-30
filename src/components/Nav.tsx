import { useState } from 'react'
import { sections } from '../data'
import type { Theme } from '../hooks/useTheme'

interface Props {
  scrolled: boolean
  active: string
  theme: Theme
  onToggleTheme: () => void
}

export default function Nav({ scrolled, active, theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a href="#home" className="logo" aria-label="Home">FZ<span>.</span></a>
      <nav aria-label="Primary">
        <ul id="navlinks" className={open ? 'open' : ''}>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={() => setOpen(false)}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle theme">
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          )}
        </button>
        <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
    </header>
  )
}
