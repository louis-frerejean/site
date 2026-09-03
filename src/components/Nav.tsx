import { contact } from '../data/content'

const links = [
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#no-code', label: 'No-code' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          Louis Frerejean
        </a>
        <ul className="hidden gap-7 font-mono text-xs uppercase tracking-widest text-ink-faint sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-dim transition hover:border-ink/40 hover:text-ink"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  )
}
