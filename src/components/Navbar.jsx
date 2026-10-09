import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, personal } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm border-b border-ink-200' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-8 h-16">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-ink-900"
        >
          Srujan<span className="text-brass">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-500 hover:text-ink-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-900 hover:border-ink-900 transition-colors duration-200"
        >
          Resume
        </a>

        <a
          href={personal.social.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-md border border-ink-900 px-4 py-2 text-sm font-medium text-ink-900 hover:bg-ink-900 hover:text-paper transition-colors duration-200"
        >
          GitHub
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 -mr-2 text-ink-900"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <ul className="flex flex-col px-6 pt-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-ink-100">
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block py-4 text-lg text-ink-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          onClick={handleNavClick}
          className="mx-6 mt-6 inline-flex items-center justify-center rounded-md border border-ink-200 px-4 py-3 text-sm font-medium text-ink-900"
        >
          View resume
        </a>
        <a
          href={personal.social.github}
          target="_blank"
          rel="noreferrer"
          onClick={handleNavClick}
          className="mx-6 mt-6 inline-flex items-center justify-center rounded-md border border-ink-900 px-4 py-3 text-sm font-medium text-ink-900"
        >
          View GitHub
        </a>
      </div>
    </header>
  )
}
