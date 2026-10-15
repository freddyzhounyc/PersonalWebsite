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
        <svg className="cur-arrow" width="26" height="26" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="cur-grad" gradientUnits="userSpaceOnUse" x1="4" y1="2" x2="19" y2="22">
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
        {/* pointing hand shown over clickable things */}
        <svg className="cur-hand" width="28" height="28" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="cur-grad-hand" gradientUnits="userSpaceOnUse" x1="4" y1="2" x2="19" y2="22">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="0.55" stopColor="#f472b6" />
              <stop offset="1" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          <path
            d="M8.2 3.2C8.2 2.3 8.9 1.6 9.8 1.6S11.4 2.3 11.4 3.2V10.2L11.8 10.2V9.2C11.8 8.5 12.4 8 13 8S14.2 8.5 14.2 9.2V10.5C14.2 9.9 14.8 9.5 15.4 9.5S16.6 10 16.6 10.6V11.3C16.6 10.8 17.2 10.4 17.8 10.4S19 10.9 19 11.5V16C19 19 17 21.8 13.8 21.8H12C10.2 21.8 9 21.2 7.8 20L4.6 16.6C4.1 16 4.2 15.1 4.8 14.7C5.4 14.3 6.2 14.4 6.7 14.9L8.2 16.3Z"
            fill="url(#cur-grad-hand)"
            stroke="#fff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
