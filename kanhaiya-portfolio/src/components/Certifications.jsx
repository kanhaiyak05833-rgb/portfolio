import { certifications } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionHeading kicker="Certifications" title="Certifications." />
        </Reveal>

        <Reveal>
          <div className="divide-y divide-surface-line rounded-xl border border-surface-line">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div>
                  <p className="font-display text-base font-medium">{cert.name}</p>
                  <p className="text-sm text-ink-dim">{cert.issuer}</p>
                </div>
                <span className="font-mono text-xs text-ink-faint">{cert.date}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
