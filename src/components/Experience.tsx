import { useLayoutEffect, useRef, type KeyboardEvent } from 'react'
import Reveal from './Reveal'
import RichText from './RichText'
import Tags from './Tags'
import { experience } from '../data'

interface Props {
  index: number
  onSelect: (i: number) => void
  highlight: string | null
}

export default function Experience({ index, onSelect, highlight }: Props) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const indRef = useRef<HTMLSpanElement>(null)

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

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = experience.length
    let next = -1
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % n
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + n) % n
    if (next >= 0) {
      e.preventDefault()
      onSelect(next)
      tabRefs.current[next]?.focus()
    }
  }

  const job = experience[index]
  return (
    <section id="experience" className="section alt">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>02</span> Experience</Reveal>
        <Reveal as="p" className="sec-sub">Select a role to read the details. Arrow keys work once a tab is focused.</Reveal>
        <div className="exp">
          <div className="exp-tabs" role="tablist" aria-label="Work experience" aria-orientation="vertical">
            {experience.map((e, i) => (
              <button
                key={e.company}
                ref={(el) => { tabRefs.current[i] = el }}
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === index}
                aria-controls={`exp-${i}`}
                tabIndex={i === index ? 0 : -1}
                className={i === index ? 'active' : ''}
                onClick={() => onSelect(i)}
                onKeyDown={(ev) => onKey(ev, i)}
              >
                <b>{e.company}</b>
                <small>{e.range}</small>
              </button>
            ))}
            <span className="tab-indicator" ref={indRef} aria-hidden="true" />
          </div>
          <div className="exp-panels">
            <article key={index} role="tabpanel" id={`exp-${index}`} aria-labelledby={`tab-${index}`} className="panel">
              <header>
                <h3>{job.role} <em>@ {job.company}</em></h3>
                <p className="meta">{job.meta} · {job.range}</p>
              </header>
              <ul>
                {job.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}
              </ul>
              <Tags tags={job.tags} highlight={highlight} />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
