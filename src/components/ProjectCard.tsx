import { useRef, type MouseEvent } from 'react'
import Reveal from './Reveal'
import RichText from './RichText'
import Tags from './Tags'
import { useInView } from '../hooks/useInView'
import { prefersReducedMotion } from '../hooks/useReducedMotion'
import type { Project } from '../data'

const icons: Record<Project['icon'], JSX.Element> = {
  music: <><circle cx="12" cy="12" r="10" /><path d="M8 15c3-1.5 6-1.5 8 0M7.5 11.5c4-1.5 8-1.3 9.5.3M8.5 8.3c3-1 6-.8 7.3.4" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></>,
  pulse: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
}

export default function ProjectCard({ p, highlight, index }: { p: Project; highlight: string | null; index: number }) {
  const cardRef = useRef<HTMLElement | null>(null)
  const [viewRef, seen] = useInView<HTMLElement>(0.3)
  const tilt = !prefersReducedMotion()

  const move = (e: MouseEvent<HTMLElement>) => {
    const c = cardRef.current
    if (!c || !tilt) return
    const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
    c.style.setProperty('--mx', x + 'px')
    c.style.setProperty('--my', y + 'px')
    c.style.transform = `perspective(900px) rotateX(${(y / r.height - 0.5) * -6}deg) rotateY(${(x / r.width - 0.5) * 6}deg) translateY(-4px)`
  }
  const leave = () => { if (cardRef.current) cardRef.current.style.transform = '' }

  return (
    <Reveal delay={index}>
      <article
        ref={(el) => { cardRef.current = el; (viewRef as React.MutableRefObject<HTMLElement | null>).current = el }}
        className={'card' + (seen ? ' in' : '')}
        style={{ ['--c' as string]: p.color }}
        onMouseMove={move}
        onMouseLeave={leave}
      >
        <div className="card-top">
          <span className="folder">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icons[p.icon]}</svg>
          </span>
          <span className="date">{p.range}</span>
        </div>
        <h3>{p.title} <small>{p.subtitle}</small></h3>
        <p className="blurb">{p.blurb}</p>
        <ul>{p.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}</ul>
        {p.latency && (
          <div className="latency" aria-label={`Latency before ${p.latency.before} milliseconds, after ${p.latency.after} milliseconds`}>
            <div><small>Before</small><i style={{ ['--w' as string]: '100%' }} /><span>{p.latency.before}ms</span></div>
            <div><small>After</small><i className="good" style={{ ['--w' as string]: `${(p.latency.after / p.latency.before) * 100}%` }} /><span>{p.latency.after}ms</span></div>
          </div>
        )}
        <Tags tags={p.tags} highlight={highlight} />
      </article>
    </Reveal>
  )
}
