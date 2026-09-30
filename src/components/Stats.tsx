import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { useInView } from '../hooks/useInView'
import { prefersReducedMotion } from '../hooks/useReducedMotion'

function Counter({ end, decimals = 0, suffix = '' }: { end: number; decimals?: number; suffix?: string }) {
  const [ref, seen] = useInView<HTMLElement>(0.6)
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (prefersReducedMotion()) { setVal(end); return }
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1400, 1)
      setVal(end * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, end])
  return <b ref={ref}>{val.toFixed(decimals)}{suffix}</b>
}

const stats = [
  { end: 3.94, decimals: 2, suffix: '', label: 'GPA / 4.00' },
  { end: 20, decimals: 0, suffix: '+', label: 'integration tests in CI' },
  { end: 50, decimals: 0, suffix: '+', label: 'students mentored & taught' },
  { end: 88, decimals: 0, suffix: '%', label: 'faster GET endpoints' },
]

export default function Stats() {
  return (
    <section className="stats wrap" aria-label="Highlights">
      {stats.map((s, i) => (
        <Reveal key={s.label} className="stat" delay={i}>
          <Counter end={s.end} decimals={s.decimals} suffix={s.suffix} />
          <small>{s.label}</small>
        </Reveal>
      ))}
    </section>
  )
}
