import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'
import { useToast } from '../hooks/useToast'
import { EMAIL, GITHUB, LINKEDIN, RESUME } from '../data'

interface Form { name: string; email: string; msg: string }

export default function Contact() {
  const toast = useToast()
  const [form, setForm] = useState<Form>({ name: '', email: '', msg: '' })
  const [bad, setBad] = useState<Partial<Record<keyof Form, boolean>>>({})
  const [note, setNote] = useState('')

  const set = (k: keyof Form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); toast('Email copied to clipboard') }
    catch { toast(EMAIL) }
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const errs = {
      name: !form.name.trim(),
      email: !/^\S+@\S+\.\S+$/.test(form.email),
      msg: !form.msg.trim(),
    }
    setBad(errs)
    if (Object.values(errs).some(Boolean)) { setNote('Please fill in every field with a valid email.'); return }
    const subject = encodeURIComponent(`Hello from ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.msg.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setNote('Opening your email app… thanks for reaching out!')
  }

  return (
    <section id="contact" className="section">
      <div className="wrap contact">
        <Reveal as="h2" className="sec-title"><span>07</span> Let's talk</Reveal>
        <Reveal as="p" className="lead">I'm looking for Summer 2027 software engineering internships. If you're building something interesting, I'd love to hear about it.</Reveal>
        <div className="contact-grid">
          <Reveal as="form" onSubmit={submit} noValidate>
            <label>Your name
              <input className={bad.name ? 'bad' : ''} value={form.name} onChange={set('name')} autoComplete="name" placeholder="Ada Lovelace" />
            </label>
            <label>Your email
              <input className={bad.email ? 'bad' : ''} type="email" value={form.email} onChange={set('email')} autoComplete="email" placeholder="ada@example.com" />
            </label>
            <label>Message
              <textarea className={bad.msg ? 'bad' : ''} rows={5} maxLength={1000} value={form.msg} onChange={set('msg')} placeholder="Hi Freddy…" />
              <small>{form.msg.length} / 1000</small>
            </label>
            <button className="btn primary" type="submit">Send message <span aria-hidden="true">→</span></button>
            <p className="form-note" role="status">{note}</p>
          </Reveal>
          <Reveal className="contact-side" delay={1}>
            <button className="copy" type="button" onClick={copy}><span>{EMAIL}</span><em>Copy</em></button>
            <a className="side-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
            <a className="side-link" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
            <a className="side-link" href={RESUME} download>Download résumé <span>↓</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
