import { contact } from '../data/content'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center sm:p-16">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Un projet à me confier ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-400">
          Que ce soit du développement sur-mesure ou une solution no-code rapide à mettre en place,
          discutons-en.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-white/40 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Louis Frerejean
      </p>
    </section>
  )
}
