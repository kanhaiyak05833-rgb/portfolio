import { aboutText } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const focusAreas = [
  'Programming',
  'Web development',
  'Building practical projects',
  'Problem solving',
  'Learning new technologies',
]

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionHeading kicker="About" title="A CS student who likes to build." />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="text-base md:text-lg leading-relaxed text-ink-dim whitespace-pre-line">
              {aboutText}
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-xl border border-surface-line bg-surface p-6">
              <p className="font-mono text-xs text-ink-faint mb-4">currently interested in</p>
              <ul className="space-y-3">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
