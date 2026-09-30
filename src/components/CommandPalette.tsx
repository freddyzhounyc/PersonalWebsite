import { useEffect, useMemo, useRef, useState } from 'react'

export interface Command { label: string; hint: string; run: () => void }

export default function CommandPalette({ commands, onClose }: { commands: Command[]; onClose: () => void }) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const shown = useMemo(() => commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase().trim())), [commands, q])

  useEffect(() => { inputRef.current?.focus() }, [])
  useEffect(() => { listRef.current?.children[sel]?.scrollIntoView({ block: 'nearest' }) }, [sel])

  const run = (i: number) => {
    const c = shown[i]
    if (!c) return
    onClose()
    setTimeout(c.run, 50)
  }

  return (
    <div className="palette" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="palette-box" role="dialog" aria-modal="true" aria-label="Command menu">
        <input
          ref={inputRef}
          value={q}
          placeholder="Jump to a section or run an action…"
          aria-label="Search commands"
          autoComplete="off"
          onChange={(e) => { setQ(e.target.value); setSel(0) }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, shown.length - 1)) }
            if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)) }
            if (e.key === 'Enter') run(sel)
          }}
        />
        <ul ref={listRef} role="listbox">
          {shown.map((c, i) => (
            <li key={c.label} role="option" aria-selected={i === sel} className={i === sel ? 'sel' : ''} onClick={() => run(i)}>
              {c.label}<small>{c.hint}</small>
            </li>
          ))}
          {!shown.length && <li>No results</li>}
        </ul>
        <p className="palette-foot"><kbd>↑↓</kbd> navigate <kbd>↵</kbd> select <kbd>esc</kbd> close</p>
      </div>
    </div>
  )
}
