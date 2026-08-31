import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-surface-line">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-ink-dim">{profile.role}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm text-ink-dim sm:grid-cols-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="focus-ring hover:text-signal transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
          >
            <FiGithub size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
          >
            <FiLinkedin size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
          >
            <FiMail size={15} />
          </a>
        </div>
      </div>

      <div className="container-x border-t border-surface-line py-6">
        <p className="text-xs text-ink-faint">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
