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
            <p>I'm a Computer Science student at <strong>Stony Brook University</strong> (B.S., expected May 2028) with a 3.94 GPA and a spot on the Dean's List every semester since 2024.</p>
            <p>Alongside my degree I'm an <strong>Undergraduate Student Researcher</strong> and a <strong>Data Structures &amp; Algorithms Teaching Assistant</strong>, and I'm a full-stack developer who loves the <strong>MERN stack</strong>.</p>
            <p>My coursework spans systems fundamentals, algorithms, and software development, and I pair it with real-world engineering: I own the full stack of a telehealth platform at <strong>StayHome Healthcare</strong>, evaluate frontier-LLM code at <strong>Handshake AI</strong>, help get a data infrastructure startup (<strong>Complication</strong>) off the ground as an intern, and sharpened my algorithms as a <strong>Google x Basta Fellow</strong>.</p>
            <p>I care about clean architecture, fast APIs, and interfaces that protect users from mistakes. One day I hope to build software with real impact on millions of people around the world, and to be a positive change in their lives.</p>
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
