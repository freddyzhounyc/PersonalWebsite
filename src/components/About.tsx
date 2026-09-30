import Reveal from './Reveal'

const cards = [
  ['📍', 'Based in', 'Queens, New York'],
  ['🎓', 'Studying', 'B.S. Computer Science · SBU'],
  ['⚡', 'Currently', 'Software Engineer · StayHome'],
  ['☁️', 'Working toward', 'AWS Cloud Practitioner'],
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal as="h2" className="sec-title"><span>01</span> About me</Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <p>I'm a Computer Science student at <strong>Stony Brook University</strong> (B.S., expected May 2028) with a 3.94 GPA and a spot on the Dean's List every semester since 2024.</p>
            <p>My coursework spans systems fundamentals, algorithms, and software development, and I pair it with real-world engineering: I own the full stack of a telehealth platform at <strong>StayHome Healthcare</strong>, evaluate frontier-LLM code at <strong>Handshake AI</strong>, and practice hard algorithm problems weekly as a <strong>Google x Basta Fellow</strong>.</p>
            <p>I care about clean architecture, fast APIs, and interfaces that protect users from mistakes.</p>
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
