import Reveal from './Reveal'
import Terminal from './Terminal'
import { useTyped } from '../hooks/useTyped'
import { GITHUB, LINKEDIN, RESUME, EMAIL } from '../data'

const phrases = [
  'full stack web apps.',
  'REST APIs with Spring Boot.',
  'React interfaces people enjoy.',
  'CI/CD pipelines that catch bugs.',
  'efficient algorithms.',
]

export default function Hero() {
  const typed = useTyped(phrases)
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow"><span className="dot" /> Open to Summer 2027 internships</Reveal>
          <Reveal as="h1" delay={1}>Hi, I'm <span className="grad">Freddy Zhou</span>.</Reveal>
          <Reveal as="p" delay={2} className="typed">
            I build <span style={{ color: 'var(--accent)' }}>{typed}</span><span className="caret">|</span>
          </Reveal>
          <Reveal as="p" delay={3} className="lead">
            Computer Science student at Stony Brook University and full stack software engineer. I ship telehealth
            software at a startup, teach object-oriented programming, and sharpen algorithms with a Google engineer.
          </Reveal>
          <Reveal className="cta" delay={4}>
            <a className="btn primary" href="#projects">View my work <span aria-hidden="true">→</span></a>
            <a className="btn" href="#contact">Get in touch</a>
            <a className="btn ghost" href={RESUME} download>Résumé ↓</a>
          </Reveal>
          <Reveal as="ul" delay={5} className="socials" aria-label="Social links">
            <li><a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" /></svg></a></li>
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" /></svg></a></li>
            <li><a href={`mailto:${EMAIL}`} aria-label="Email"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></a></li>
          </Reveal>
        </div>
        <Reveal delay={3}><Terminal /></Reveal>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to about"><span /></a>
    </section>
  )
}
