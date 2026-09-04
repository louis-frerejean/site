import { useState } from 'react'
import { contact } from '../data/content'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-base font-semibold tracking-tight text-ink">
          Louis Frerejean
        </a>
        <ul className="hidden gap-8 text-sm text-ink-dim sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-surface shadow-sm transition hover:bg-ink sm:inline-block"
        >
          Me contacter
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition hover:border-accent/40 hover:text-accent sm:hidden"
        >
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          {open ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-ground px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-1 text-sm text-ink-dim">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 transition hover:bg-accent-soft hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-2 text-center text-sm font-medium text-surface shadow-sm"
            >
              Me contacter
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2 text-center text-sm text-ink-dim"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
