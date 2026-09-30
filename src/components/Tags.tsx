export default function Tags({ tags, highlight }: { tags: string[]; highlight?: string | null }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        <span key={t} className={t === highlight ? 'hl' : undefined}>{t}</span>
      ))}
    </div>
  )
}
