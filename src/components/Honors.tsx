import type { CSSProperties } from 'react'
import Reveal from './Reveal'
import { honors } from '../data'

export default function Honors() {
  return (
    <section id="honors" className="section alt">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>06</span> Honors &amp; awards</Reveal>
        <div className="honor-grid">
          {honors.map((h, i) => (
            <Reveal key={h.title} delay={i}>
              <article className="honor" style={{ ['--h' as string]: h.color } as CSSProperties}>
                <span className="honor-icon" aria-hidden="true">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.sub}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
