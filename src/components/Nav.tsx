import { contact } from '../data/content'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
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
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line px-4 py-2 text-sm text-ink-dim transition hover:border-accent/40 hover:text-accent"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  )
}
