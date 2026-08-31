import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import { navLinks, profile } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/85 backdrop-blur-md border-b border-surface-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          className="focus-ring font-display text-lg font-semibold tracking-tight rounded"
        >
          Kanhaiya<span className="text-signal">.</span>dev
        </a>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`focus-ring relative px-3 py-2 rounded transition-colors ${
                    isActive ? 'text-signal' : 'text-ink-dim hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-[1px] h-px bg-signal" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="focus-ring hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
          >
            {theme === 'dark' ? <HiOutlineSun size={16} /> : <HiOutlineMoon size={16} />}
          </button>

          <a
            href={profile.resumePath}
            download
            className="focus-ring hidden sm:inline-flex items-center rounded-full border border-signal/40 px-4 py-2 font-mono text-xs text-signal hover:bg-signal/10 transition-colors"
          >
            View Resume
          </a>

          <a
            href={profile.cvPath}
            download
            className="focus-ring hidden sm:inline-flex items-center rounded-full border border-signal/40 px-4 py-2 font-mono text-xs text-signal hover:bg-signal/10 transition-colors"
          >
            Download CV
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="focus-ring lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink"
          >
            {open ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-surface-line bg-base">
          <ul className="container-x flex flex-col py-3 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="focus-ring block py-2.5 text-ink-dim hover:text-signal transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-2">
              <a
                href={profile.resumePath}
                download
                className="focus-ring inline-flex items-center rounded-full border border-signal/40 px-4 py-2 text-xs text-signal"
              >
                View Resume
              </a>
              <a
                href={profile.cvPath}
                download
                className="focus-ring inline-flex items-center rounded-full border border-signal/40 px-4 py-2 text-xs text-signal"
              >
                Download CV
              </a>
              <button
                onClick={toggleTheme}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink-dim"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <HiOutlineSun size={16} /> : <HiOutlineMoon size={16} />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
