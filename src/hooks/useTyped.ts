import { useEffect, useState } from 'react'
import { prefersReducedMotion } from './useReducedMotion'

export function useTyped(phrases: string[]) {
  const [text, setText] = useState(prefersReducedMotion() ? phrases[0] : '')
  useEffect(() => {
    if (prefersReducedMotion()) return
    let pi = 0, ci = 0, del = false
    let t: number
    const tick = () => {
      const p = phrases[pi]
      setText(p.slice(0, ci))
      let delay = del ? 28 : 65
      if (!del && ci === p.length) { del = true; delay = 1600 }
      else if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; delay = 350 }
      else ci += del ? -1 : 1
      t = window.setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(t)
  }, [phrases])
  return text
}
