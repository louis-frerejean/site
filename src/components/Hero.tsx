import { profile } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="grid gap-12 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Portfolio compétences — {profile.location}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Je construis des produits — en code, et sans code.
          </h1>
          <p className="mt-3 max-w-2xl text-base font-medium text-neutral-300">{profile.title}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-neutral-400">{profile.bio}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projets"
              className="rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Voir mes projets
            </a>
            <a
              href={profile.cvPdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-white/40 hover:text-white"
            >
              Télécharger mon CV
            </a>
            <a
              href="#contact"
              className="rounded-full px-6 py-2.5 text-sm font-semibold text-neutral-400 transition hover:text-white"
            >
              Me contacter →
            </a>
          </div>
        </div>
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-40 w-40 shrink-0 justify-self-center rounded-2xl object-cover ring-1 ring-white/10 sm:h-48 sm:w-48 sm:justify-self-end"
        />
      </div>
    </section>
  )
}
