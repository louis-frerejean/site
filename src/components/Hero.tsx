import { profile } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="grid gap-14 sm:grid-cols-[1fr_240px] sm:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Disponible pour de nouveaux projets
            </span>
            <span className="text-sm text-ink-faint">{profile.location}</span>
          </div>
          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl">
            Des sites et des outils numériques simples, pensés pour votre activité
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-dim">{profile.bio}</p>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-dim">{profile.availability}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-surface shadow-sm transition hover:bg-ink"
            >
              Me contacter
            </a>
            <a
              href="#realisations"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-dim transition hover:border-accent/40 hover:text-accent"
            >
              Voir mes réalisations
            </a>
          </div>
        </div>

        <figure className="justify-self-center sm:justify-self-end">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-[220px] w-[220px] rounded-3xl object-cover shadow-md"
          />
          <figcaption className="mt-3 text-center text-sm text-ink-faint sm:text-right">
            {profile.name}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
