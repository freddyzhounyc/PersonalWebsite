import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { GITHUB, projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>03</span> Projects</Reveal>
        <div className="proj-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
        </div>
        <Reveal as="p" className="more">More on <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub →</a></Reveal>
      </div>
    </section>
  )
}
