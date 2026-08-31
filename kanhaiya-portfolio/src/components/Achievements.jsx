import { achievements } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-surface/40">
      <div className="container-x">
        <Reveal>
          <SectionHeading kicker="Achievements" title="Activities & achievements." />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((item) => (
            <Reveal key={item.name}>
              <div className="h-full rounded-xl border border-amber/25 bg-surface p-6">
                <span className="font-mono text-xs text-amber">{item.date}</span>
                <h3 className="mt-2 font-display text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-ink-dim">{item.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
