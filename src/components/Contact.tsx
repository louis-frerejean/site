import { contact, profile } from '../data/content'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="rounded-3xl bg-ink p-10 text-center sm:p-16">
        <p className="text-sm font-medium text-accent-soft">Contact</p>
        <h2 className="mx-auto mt-4 max-w-xl text-2xl font-semibold tracking-tight text-surface sm:text-3xl">
          Un projet à me confier ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-faint">
          Site vitrine, boutique en ligne, automatisation, projet sur-mesure — écrivez-moi, on en
          discute simplement et sans engagement.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-surface shadow-sm transition hover:opacity-90"
          >
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink-dim px-6 py-3 text-sm font-medium text-ink-faint transition hover:border-surface hover:text-surface"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink-dim px-6 py-3 text-sm font-medium text-ink-faint transition hover:border-surface hover:text-surface"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-ink-faint">
        Vous êtes une entreprise ou une école ?{' '}
        <a
          href="https://louis-frerejean.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-line underline-offset-4 hover:text-accent"
        >
          Voir mon CV
        </a>
      </p>
      <p className="mt-2 text-center text-sm text-ink-faint">
        © {new Date().getFullYear()} Louis Frerejean ·{' '}
        <a href={`${import.meta.env.BASE_URL}mentions-legales.html`} className="underline decoration-line underline-offset-4 hover:text-accent">
          Mentions légales
        </a>
      </p>
    </section>
  )
}
