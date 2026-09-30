import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [state, setState] = useState({ pct: 0, y: 0 })
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      setState({ pct: h > 0 ? (scrollY / h) * 100 : 0, y: scrollY })
    }
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  return state
}
