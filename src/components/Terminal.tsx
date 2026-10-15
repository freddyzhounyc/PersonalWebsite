import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks/useReducedMotion'

type Seg = [cls: string, text: string]
const segs: Seg[] = [
  ['p', '$ '], ['', 'whoami\n'],
  ['v', 'Freddy Zhou — software engineer\n\n'],
  ['p', '$ '], ['', 'cat education.json\n'],
  ['c', '{\n'], ['k', '  "school"'], ['', ': '], ['v', '"Stony Brook University"'], ['', ',\n'],
  ['k', '  "degree"'], ['', ': '], ['v', '"B.S. Computer Science"'], ['', ',\n'],
  ['k', '  "gpa"'], ['', ': '], ['v', '3.94'], ['', ',\n'],
  ['k', '  "graduating"'], ['', ': '], ['v', '"May 2028"\n'], ['c', '}\n\n'],
  ['p', '$ '], ['', 'ls now/\n'],
  ['v', 'complication/  stayhome-healthcare/\nhandshake-ai/  sbu-research/\n\n'],
  ['p', '$ '], ['', 'echo "let\'s build something"\n'],
  ['v', "let's build something ▊"],
]
const total = segs.reduce((n, [, t]) => n + t.length, 0)

export default function Terminal() {
  const [n, setN] = useState(prefersReducedMotion() ? total : 0)
  useEffect(() => {
    if (n >= total) return
    const t = window.setTimeout(() => setN((x) => x + 1), 14)
    return () => clearTimeout(t)
  }, [n])

  let left = n
  return (
    <aside className="terminal" aria-label="About Freddy, as a terminal">
      <div className="term-bar"><i /><i /><i /><span>freddy@stonybrook ~</span></div>
      <pre className="term-body">
        {segs.map(([cls, text], i) => {
          if (left <= 0) return null
          const shown = text.slice(0, left)
          left -= text.length
          return cls ? <span key={i} className={cls}>{shown}</span> : shown
        })}
      </pre>
    </aside>
  )
}
