import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            kicker="Skills"
            title="What I work with."
            description="Technologies and tools I've used through coursework and projects."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <div className="h-full rounded-xl border border-surface-line bg-surface p-6 transition-colors hover:border-signal/40">
                <h3 className="font-display text-lg font-medium mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-surface-line bg-surface-raised px-3 py-1.5 font-mono text-xs text-ink-dim"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
