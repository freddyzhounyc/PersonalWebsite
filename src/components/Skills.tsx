import type { CSSProperties } from 'react'
import Reveal from './Reveal'
import { skillGroups } from '../data'
import { skillIcons } from '../skillIcons'

function SkillIconSvg({ name }: { name: string }) {
  const icon = skillIcons[name]
  if (!icon) return null
  return icon.stroke ? (
    <svg className="sk-ico stroke" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icon.path} /></svg>
  ) : (
    <svg className="sk-ico" viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>04</span> Technical skills</Reveal>
        <div className="skills">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} className="skill-group" delay={gi}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.skills.map((s) => (
                  <span key={s} className="chip skill static" style={{ ['--ic' as string]: skillIcons[s]?.color } as CSSProperties}>
                    <SkillIconSvg name={s} />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal className="skill-group" delay={3}>
            <h3>Certifications</h3>
            <div className="chips">
              <span className="chip skill static" style={{ ['--ic' as string]: skillIcons.AWS.color } as CSSProperties}>
                <SkillIconSvg name="AWS" />
                <span>AWS Certified Cloud Practitioner <em>· in progress</em></span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
