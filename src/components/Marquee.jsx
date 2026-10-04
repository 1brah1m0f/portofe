import { marquee } from '../data'

function Row({ hidden }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {marquee.map((item) => (
        <li key={item} className="flex items-center font-display text-2xl font-bold tracking-tight text-muted/70 sm:text-3xl">
          <span className="px-6 transition-colors hover:text-fg sm:px-8">{item}</span>
          <span className="size-1.5 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  )
}

// Infinite strip: two identical rows slide left by 50% and loop.
export default function Marquee() {
  return (
    <div className="marquee mask-fade-x overflow-hidden border-y border-line bg-surface/40 py-6">
      <div className="animate-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
