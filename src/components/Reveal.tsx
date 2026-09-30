import { type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  as?: ElementType
  className?: string
  delay?: number
  children: ReactNode
  [key: string]: unknown
}

/** Fades/slides children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }: Props) {
  const [ref, seen] = useInView<HTMLElement>()
  const style = { '--d': `${delay * 0.08}s` } as CSSProperties
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`.trim()} style={style} {...rest}>
      {children}
    </Tag>
  )
}
