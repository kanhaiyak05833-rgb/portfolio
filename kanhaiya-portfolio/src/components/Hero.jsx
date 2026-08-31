import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile, heroIntro } from '../data/portfolio'

const codeLines = [
  { n: 1, text: <span><span className="text-violet">const</span> <span className="text-signal">developer</span> = {'{'}</span> },
  { n: 2, text: <span className="pl-4"><span className="text-amber">name</span>: <span className="text-ink">'Kanhaiya Kumar'</span>,</span> },
  { n: 3, text: <span className="pl-4"><span className="text-amber">study</span>: <span className="text-ink">'B.Tech CSE, LPU'</span>,</span> },
  { n: 4, text: <span className="pl-4"><span className="text-amber">stack</span>: [<span className="text-ink">'C'</span>, <span className="text-ink">'Python'</span>, <span className="text-ink">'JavaScript'</span>],</span> },
  { n: 5, text: <span className="pl-4"><span className="text-amber">focus</span>: <span className="text-ink">'web dev & problem-solving'</span>,</span> },
  { n: 6, text: <span className="pl-4"><span className="text-amber">status</span>: <span className="text-ink">'open to internships'</span>,</span> },
  { n: 7, text: <span>{'}'}</span> },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid-fade pt-16 pb-24 md:pt-24 md:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-signal/10 blur-[120px]"
      />
      <div className="container-x relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="kicker mb-5">Computer Science & Engineering Student</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight">
            Hi, I'm Kanhaiya Kumar.
            <br />
            <span className="text-ink-dim">I build things with code.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ink-dim whitespace-pre-line">
            {heroIntro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-surface-line px-5 py-3 font-mono text-sm text-ink hover:border-signal/50 hover:text-signal transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
            >
              <FiMail size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-xl border border-surface-line bg-surface-raised shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-surface-line bg-surface px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F26A5A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F2B25A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5AD97A]" />
              <span className="ml-3 font-mono text-xs text-ink-faint">profile.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-ink-dim">
              {codeLines.map((line) => (
                <div key={line.n} className="flex gap-4">
                  <span className="select-none text-ink-faint/60">{String(line.n).padStart(2, '0')}</span>
                  <code>{line.text}</code>
                </div>
              ))}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
