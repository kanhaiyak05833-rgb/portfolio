import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionHeading kicker="Education" title="Education." />
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-line sm:left-[9px]"
          />
          <div className="space-y-10">
            {education.map((item) => (
              <Reveal key={item.school}>
                <div className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-signal bg-base sm:h-[18px] sm:w-[18px]" />
                  <p className="font-mono text-xs text-ink-faint">{item.date}</p>
                  <h3 className="mt-1 font-display text-lg font-medium">{item.school}</h3>
                  <p className="text-sm text-ink-dim">{item.credential}</p>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-faint">
                    <span>{item.detail}</span>
                    <span>{item.place}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
