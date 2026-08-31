import { useState } from 'react'
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only form: no backend/email service is wired up yet.
    // This opens the user's own email client with the message pre-filled
    // instead of silently pretending to send it.
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section-pad bg-surface/40">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Let's talk."
            description="Open to internships, hackathons, and software development opportunities."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-surface-line bg-surface px-5 py-4">
                <div className="flex items-center gap-3 text-sm">
                  <FiMail className="text-signal" />
                  <span className="text-ink-dim break-all">{profile.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="focus-ring shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-surface-line text-ink-faint hover:text-signal hover:border-signal/50 transition-colors"
                >
                  {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-surface-line bg-surface px-5 py-4 text-sm">
                <FiPhone className="text-signal" />
                <span className="text-ink-dim">{profile.phone}</span>
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-xl border border-surface-line bg-surface px-5 py-4 text-sm text-ink-dim hover:border-signal/40 hover:text-signal transition-colors"
              >
                <FiLinkedin className="text-signal" />
                {profile.linkedinLabel}
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-xl border border-surface-line bg-surface px-5 py-4 text-sm text-ink-dim hover:border-signal/40 hover:text-signal transition-colors"
              >
                <FiGithub className="text-signal" />
                {profile.githubLabel}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-xl border border-surface-line bg-surface p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block font-mono text-xs text-ink-faint">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-lg border border-surface-line bg-surface-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block font-mono text-xs text-ink-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-lg border border-surface-line bg-surface-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block font-mono text-xs text-ink-faint">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="focus-ring w-full resize-none rounded-lg border border-surface-line bg-surface-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint"
                    placeholder="What would you like to say?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="focus-ring mt-6 inline-flex items-center rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
              <p className="mt-3 text-xs text-ink-faint">
                This form doesn't have a backend connected yet — submitting opens your email
                client with the message pre-filled, addressed to {profile.email}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
