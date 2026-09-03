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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-white">
          Louis Frerejean
        </a>
        <ul className="hidden gap-6 text-sm text-neutral-400 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-neutral-200 transition hover:border-white/40 hover:text-white"
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}
