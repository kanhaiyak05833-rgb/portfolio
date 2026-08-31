import { training } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Training() {
  return (
    <section id="training" className="section-pad bg-surface/40">
      <div className="container-x">
        <Reveal>
          <SectionHeading kicker="Training" title="Summer training." />
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-violet/30 bg-surface">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-line bg-surface-raised px-6 py-4">
              <div>
                <p className="font-display text-lg font-medium">{training.program}</p>
                <p className="text-sm text-ink-dim">{training.organization}</p>
              </div>
              <span className="rounded-full border border-violet/40 px-3 py-1.5 font-mono text-xs text-violet">
                {training.date}
              </span>
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-[220px_1fr] md:p-8">
              <div>
                <p className="font-mono text-xs text-ink-faint mb-2">focus area</p>
                <p className="font-display text-2xl font-semibold text-violet">{training.focus}</p>
              </div>

              <ul className="space-y-4 border-t border-surface-line pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                {training.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
