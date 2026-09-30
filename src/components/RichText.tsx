/** Renders **highlighted** segments as <mark>. */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part))}
    </>
  )
}
