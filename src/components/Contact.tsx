import { contact, profile } from '../data/content'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="border border-line p-10 sm:p-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Contact</p>
        <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Un projet à me confier ?
        </h2>
        <p className="mt-3 max-w-xl text-ink-dim">
          Que ce soit du développement sur-mesure ou une solution no-code rapide à mettre en place,
          discutons-en.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${contact.email}`}
            className="border border-accent bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ground transition hover:bg-transparent hover:text-accent"
          >
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink-dim transition hover:border-ink/40 hover:text-ink"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink-dim transition hover:border-ink/40 hover:text-ink"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <p className="mt-10 font-mono text-xs uppercase tracking-widest text-ink-faint">
        © {new Date().getFullYear()} Louis Frerejean
      </p>
    </section>
  )
}
