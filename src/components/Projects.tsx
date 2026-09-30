import { useState } from 'react'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { GITHUB, projectFilters, projects } from '../data'

export default function Projects({ highlight }: { highlight: string | null }) {
  const [filter, setFilter] = useState('All')
  const shown = projects.filter((p) => filter === 'All' || p.filters.includes(filter))
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>03</span> Projects</Reveal>
        <Reveal className="filters" role="group" aria-label="Filter projects by technology">
          {projectFilters.map((f) => (
            <button key={f} className={'chip' + (f === filter ? ' active' : '')} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </Reveal>
        <div className="proj-grid">
          {shown.map((p, i) => <ProjectCard key={p.title} p={p} index={i} highlight={highlight} />)}
          {!shown.length && <p className="empty">No projects match that filter yet.</p>}
        </div>
        <Reveal as="p" className="more">More on <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub →</a></Reveal>
      </div>
    </section>
  )
}
