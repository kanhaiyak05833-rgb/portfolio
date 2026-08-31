export default function SectionHeading({ kicker, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {kicker && <p className="kicker mb-3">{kicker}</p>}
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-dim leading-relaxed">{description}</p>
      )}
    </div>
  )
}
