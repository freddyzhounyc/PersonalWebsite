import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks/useReducedMotion'

const INTERACTIVE = 'a, button, [role="tab"], label, select, summary, .card, .chip'
const TEXT = 'input, textarea'

/** A colorful arrow pointer that replaces the default cursor but keeps its shape. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return
    const el = ref.current!
    const root = document.documentElement
    root.classList.add('has-cursor')

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`
      root.classList.add('cursor-on')
      const t = e.target instanceof Element ? e.target : null
      const text = !!t?.closest(TEXT)
      root.classList.toggle('cursor-text', text)
      el.classList.toggle('hover', !text && !!t?.closest(INTERACTIVE))
    }
    const onDown = () => el.classList.add('down')
    const onUp = () => el.classList.remove('down')
    const onLeave = () => root.classList.remove('cursor-on')

    addEventListener('mousemove', onMove, { passive: true })
    addEventListener('mousedown', onDown)
    addEventListener('mouseup', onUp)
    root.addEventListener('mouseleave', onLeave)
    return () => {
      removeEventListener('mousemove', onMove)
      removeEventListener('mousedown', onDown)
      removeEventListener('mouseup', onUp)
      root.removeEventListener('mouseleave', onLeave)
      root.classList.remove('has-cursor', 'cursor-on', 'cursor-text')
    }
  }, [])

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={ref} className="cursor-arrow">
        <svg width="26" height="26" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="cur-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="0.55" stopColor="#f472b6" />
              <stop offset="1" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          <path
            d="M4.5 2.5 L4.5 19.5 L9 15.3 L12 21.6 L14.8 20.3 L11.9 14.1 L18.2 13.9 Z"
            fill="url(#cur-grad)"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
