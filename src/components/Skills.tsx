import type { CSSProperties } from 'react'
import Reveal from './Reveal'
import { experience, projects, skillGroups } from '../data'
import { skillIcons } from '../skillIcons'

interface Props {
  selected: string | null
  onSelect: (s: string | null) => void
  goExperience: (i: number) => void
}

function SkillIconSvg({ name }: { name: string }) {
  const icon = skillIcons[name]
  if (!icon) return null
  return icon.stroke ? (
    <svg className="sk-ico stroke" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icon.path} /></svg>
  ) : (
    <svg className="sk-ico" viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
  )
}

export default function Skills({ selected, onSelect, goExperience }: Props) {
  const jobs = selected ? experience.map((e, i) => ({ e, i })).filter(({ e }) => e.tags.includes(selected)) : []
  const projs = selected ? projects.filter((p) => p.tags.includes(selected)) : []

  return (
    <section id="skills" className="section alt">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>04</span> Technical skills</Reveal>
        <Reveal as="p" className="sec-sub">Tap a skill to see where I've used it.</Reveal>
        <div className="skills">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} className="skill-group" delay={gi}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.skills.map((s) => (
                  <button
                    key={s}
                    className={'chip skill' + (s === selected ? ' active' : '')}
                    style={{ ['--ic' as string]: skillIcons[s]?.color } as CSSProperties}
                    aria-pressed={s === selected}
                    onClick={() => onSelect(s === selected ? null : s)}
                  >
                    <SkillIconSvg name={s} />
                    <span>{s}</span>
                  </button>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal className="skill-group" delay={3}>
            <h3>Certifications</h3>
            <div className="chips"><span className="chip static">☁️ AWS Certified Cloud Practitioner <em>· in progress</em></span></div>
          </Reveal>
        </div>
        <div className="skill-result" aria-live="polite">
          {!selected && <p>Select a skill above.</p>}
          {selected && !jobs.length && !projs.length && (
            <>
              <h4>{selected}</h4>
              <p>Part of my coursework and personal study at Stony Brook — not yet featured in a listed role or project.</p>
            </>
          )}
          {selected && (jobs.length > 0 || projs.length > 0) && (
            <>
              <h4>{selected} — used in:</h4>
              <ul>
                {jobs.map(({ e, i }) => (
                  <li key={e.company}>💼 <a onClick={() => goExperience(i)}>{e.company}</a> (experience)</li>
                ))}
                {projs.map((p) => (
                  <li key={p.title}>🚀 <a onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>{p.title}</a> (project)</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
