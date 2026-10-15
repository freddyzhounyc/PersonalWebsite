import { useLayoutEffect, useRef, type MouseEvent } from 'react'
import Reveal from './Reveal'
import RichText from './RichText'
import Tags from './Tags'
import { prefersReducedMotion } from '../hooks/useReducedMotion'
import { experience, type Experience as Job } from '../data'


function Logos({ logos }: { logos?: Job['logos'] }) {
  if (!logos?.length) return null
  return (
    <span className="exp-logos" aria-hidden="true">
      {logos.map((l) => (
        <span key={l.src} className={'logo-tile' + (l.bleed ? ' bleed' : '')}>
          <img src={`${import.meta.env.BASE_URL}${l.src}`} alt="" loading="lazy" />
        </span>
      ))}
    </span>
  )
}

interface Props {
  index: number
  onSelect: (i: number) => void
}

export default function Experience({ index, onSelect }: Props) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const indRef = useRef<HTMLSpanElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // same 3D tilt as the project cards (no cursor spotlight)
  const tilt = (e: MouseEvent<HTMLDivElement>) => {
    const c = panelRef.current
    if (!c || prefersReducedMotion()) return
    const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
    c.style.transform = `perspective(900px) rotateX(${(y / r.height - 0.5) * -4}deg) rotateY(${(x / r.width - 0.5) * 4}deg) translateY(-4px)`
  }
  const untilt = () => { if (panelRef.current) panelRef.current.style.transform = '' }

  useLayoutEffect(() => {
    const move = () => {
      const t = tabRefs.current[index]
      if (t && indRef.current) {
        indRef.current.style.top = t.offsetTop + 'px'
        indRef.current.style.height = t.offsetHeight + 'px'
      }
    }
    move()
    addEventListener('resize', move)
    return () => removeEventListener('resize', move)
  }, [index])

  const job = experience[index]
  return (
    <section id="experience" className="section alt">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>02</span> Experience</Reveal>
        <Reveal as="p" className="sec-sub">Select a role to read the details.</Reveal>
        <div className="exp">
          <div className="exp-tabs" role="tablist" aria-label="Work experience">
            {experience.map((e, i) => (
              <button
                key={i}
                ref={(el) => { tabRefs.current[i] = el }}
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === index}
                aria-controls={`exp-${i}`}
                                className={i === index ? 'active' : ''}
                onClick={() => onSelect(i)}
              >
                <Logos logos={e.logos} />
                <span className="tab-text">
                  <b>{e.short ?? e.company}</b>
                  <small>{e.range}</small>
                </span>
              </button>
            ))}
            <span className="tab-indicator" ref={indRef} aria-hidden="true" />
          </div>
          <div className="exp-panels" ref={panelRef} onMouseMove={tilt} onMouseLeave={untilt}>
            <article key={index} role="tabpanel" id={`exp-${index}`} aria-labelledby={`tab-${index}`} className="panel">
              <header className="panel-head">
                <Logos logos={job.logos} />
                <div>
                  <h3>{job.role} <em>@ {job.company}</em></h3>
                  <p className="meta">{job.meta} · {job.range}</p>
                </div>
              </header>
              <ul>
                {job.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}
              </ul>
              <Tags tags={job.tags} />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
