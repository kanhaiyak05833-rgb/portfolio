import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="focus-ring fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-line bg-surface-raised text-ink-dim shadow-lg shadow-black/30 hover:text-signal hover:border-signal/50 transition-colors"
    >
      <HiArrowUp size={18} />
    </button>
  )
}
