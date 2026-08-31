import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            kicker="Projects"
            title="Things I've built."
            description="Practical projects built to solve a specific problem, end to end."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-surface-line bg-surface p-7 transition-all duration-300 hover:border-signal/50 hover:-translate-y-1">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/0 blur-3xl transition-colors duration-500 group-hover:bg-signal/10"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                    <p className="mt-1 text-sm text-ink-dim">{project.subtitle}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-ink-faint whitespace-nowrap pt-1">
                    {project.date}
                  </span>
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-ink-dim">
                  {project.description}
                </p>

                <ul className="relative mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-surface-line bg-surface-raised px-2.5 py-1 font-mono text-[11px] text-signal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center gap-4 border-t border-surface-line pt-5">
                  <a
                    href={project.github}
                    className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs text-ink-dim hover:text-signal transition-colors"
                  >
                    <FiGithub size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs text-ink-dim hover:text-signal transition-colors"
                  >
                    Live demo <FiArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
