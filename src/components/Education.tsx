import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react'
import Reveal from './Reveal'
import Tags from './Tags'
import { useInView } from '../hooks/useInView'
import { prefersReducedMotion } from '../hooks/useReducedMotion'
import { advancedCoursework, coursework, electives } from '../data'

const START = new Date(2024, 7, 26).getTime()
const END = new Date(2028, 4, 15).getTime()


// same lift + 3D tilt hover as the project / experience cards
const tilt = (e: MouseEvent<HTMLElement>) => {
  if (prefersReducedMotion()) return
  const c = e.currentTarget, r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
  c.style.transform = `perspective(900px) rotateX(${(y / r.height - 0.5) * -4}deg) rotateY(${(x / r.width - 0.5) * 4}deg) translateY(-4px)`
}
const untilt = (e: MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = '' }

/** Ring that starts empty and fills (with a counting number) when scrolled into view. */
function GradeRing({ percent, value, decimals = 0, suffix = '', label, fontSize }: {
  percent: number; value: number; decimals?: number; suffix?: string; label: string; fontSize?: string
}) {
  const [ref, seen] = useInView<HTMLDivElement>(0.5)
  const [t, setT] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (prefersReducedMotion()) { setT(1); return }
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 1800, 1)
      setT(1 - Math.pow(1 - p, 3))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen])
  return (
    <div ref={ref} className="gpa-ring" style={{ ['--p' as string]: percent * t } as CSSProperties}>
      <b style={fontSize ? { fontSize } : undefined}>{(value * t).toFixed(decimals)}{suffix}</b>
      <small>{label}</small>
    </div>
  )
}

export default function Education() {
  const pct = Math.max(0, Math.min(1, (Date.now() - START) / (END - START))) * 100
  const [ref, seen] = useInView<HTMLDivElement>(0.4)
  const [w, setW] = useState(0)
  useEffect(() => { if (seen) setW(pct) }, [seen, pct])

  return (
    <section id="education" className="section">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>05</span> Education</Reveal>
        <div className="edu-grid">
          <Reveal as="article" className="edu" onMouseMove={tilt} onMouseLeave={untilt}>
            <div className="edu-head">
              <img className="school-logo" src={`${import.meta.env.BASE_URL}sbu-logo.png`} alt="Stony Brook University seal" width={80} height={80} />
              <div>
                <h3>Stony Brook University</h3>
                <p className="meta">B.S. in Computer Science · Aug 2024 – Present · Stony Brook, NY</p>
              </div>
            </div>
            <div className="gpa">
              <GradeRing percent={98.5} value={3.94} decimals={2} label="/ 4.00" />
              <div ref={ref}>
                <p><strong>Expected graduation:</strong> May 2028</p>
                <p className="meta">Progress: {Math.round(pct)}% of the way to graduation</p>
                <div className="bar"><i style={{ width: `${w}%` }} /></div>
              </div>
            </div>
            <h4>Related coursework</h4>
            <Tags tags={coursework} />
          </Reveal>
          <Reveal as="article" className="edu hs" delay={1} onMouseMove={tilt} onMouseLeave={untilt}>
            <div className="edu-head">
              <img className="school-logo" src={`${import.meta.env.BASE_URL}flhs-logo.png`} alt="Francis Lewis High School seal" width={80} height={80} />
              <div>
                <h3>Francis Lewis High School</h3>
                <p className="meta">High School Diploma · Sep 2020 – Jun 2024</p>
              </div>
            </div>
            <div className="gpa">
              <GradeRing percent={100} value={101.23} decimals={2} suffix="%" label="Grade" fontSize="1.05rem" />
              <div>
                <p><strong>Graduated:</strong> June 2024</p>
                <p className="meta">High School Diploma · 9 advanced courses</p>
              </div>
            </div>
            <h4>Advanced coursework (9)</h4>
            <Tags tags={advancedCoursework} />
            <h4>Elective coursework</h4>
            <Tags tags={electives} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
