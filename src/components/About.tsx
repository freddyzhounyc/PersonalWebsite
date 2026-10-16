import Reveal from './Reveal'

const cards = [
  ['📍', 'Based in', 'New York, NY'],
  ['🎓', 'Studying', 'B.S. Computer Science · SBU'],
  ['⚡', 'Currently', 'SWE Intern · Complication'],
  ['☁️', 'Working toward', 'AWS Cloud Practitioner'],
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>01</span> About me</Reveal>
        <div className="about-grid has-photo">
          <Reveal className="about-photo">
            <figure className="photo-frame">
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Freddy Zhou" width={800} height={800} />
              <figcaption><span className="dot" /> Freddy Zhou · New York, NY</figcaption>
            </figure>
          </Reveal>
          <Reveal className="about-text">
            <p>Hi! My name is Freddy and I am a junior studying <strong>Computer Science @ Stony Brook University</strong>.</p>
            <p>I'm currently a <strong>Software Engineering Intern @ Complication</strong> and a <strong>Software Engineering AI Trainer @ Handshake AI</strong> working on frontier LLM models for frontier AI labs.</p>
            <p>My passion for Software Engineering started when I was a kid and was really into video games. After learning that programming was the way that games were created, I started studing Computer Science in high school and throughout university.</p>
            <p>I fell in love with Software Engineering because the software that I wrote would have the chance at being a positive impact on someone else's life. That feeling is addicting and is what keeps me a Software Engineer.</p>
            <p>In the future, I hope to be a full time Software Engineer working on solving real world issues at a firm that has global outreach so that my work has real impact.</p>
          </Reveal>
          <Reveal className="about-cards" delay={1}>
            {cards.map(([icon, title, sub]) => (
              <div className="mini" key={title}>
                <span>{icon}</span>
                <div><b>{title}</b><small>{sub}</small></div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
