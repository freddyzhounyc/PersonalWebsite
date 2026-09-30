import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import Tags from './Tags'
import { useInView } from '../hooks/useInView'
import { coursework } from '../data'

const START = new Date(2024, 7, 26).getTime()
const END = new Date(2028, 4, 15).getTime()

export default function Education() {
  const pct = Math.max(0, Math.min(1, (Date.now() - START) / (END - START))) * 100
  const [ref, seen] = useInView<HTMLDivElement>(0.4)
  const [w, setW] = useState(0)
  useEffect(() => { if (seen) setW(pct) }, [seen, pct])

  return (
    <section id="education" className="section">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>05</span> Education &amp; honors</Reveal>
        <div className="edu-grid">
          <Reveal as="article" className="edu">
            <div className="edu-head">
              <div className="crest" aria-hidden="true">SBU</div>
              <div>
                <h3>Stony Brook University</h3>
                <p className="meta">B.S. in Computer Science · Aug 2024 – Present · Stony Brook, NY</p>
              </div>
            </div>
            <div className="gpa">
              <div className="gpa-ring" style={{ ['--p' as string]: 98.5 }}><b>3.94</b><small>/ 4.00</small></div>
              <div ref={ref}>
                <p><strong>Expected graduation:</strong> May 2028</p>
                <p className="meta">Progress: {Math.round(pct)}% of the way to graduation</p>
                <div className="bar"><i style={{ width: `${w}%` }} /></div>
              </div>
            </div>
            <h4>Related coursework</h4>
            <Tags tags={coursework} />
          </Reveal>
          <Reveal as="article" className="edu honors" delay={1}>
            <h3>Honors &amp; awards</h3>
            {[
              ['🏅', "Dean's List", '2024 – Present'],
              ['🤝', 'Google x Basta Fellow', 'Mar 2026 – Present'],
              ['🧑‍🏫', 'OOP Teaching Assistant', 'Jan – May 2026'],
            ].map(([i, t, s]) => (
              <div className="award" key={t}><span>{i}</span><div><b>{t}</b><small>{s}</small></div></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
