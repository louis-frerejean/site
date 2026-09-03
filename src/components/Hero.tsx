import { profile } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="grid gap-14 sm:grid-cols-[1fr_220px] sm:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Portfolio compétences — {profile.location}
            </p>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Disponible pour missions
            </span>
          </div>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Je construis des produits<span className="text-accent">.</span>
            <br />
            En code, et sans code<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-sm text-ink-dim">{profile.title}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-dim">{profile.bio}</p>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-dim">{profile.availability}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="border border-accent bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ground transition hover:bg-transparent hover:text-accent"
            >
              Me contacter
            </a>
            <a
              href="#projets"
              className="border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink-dim transition hover:border-ink/40 hover:text-ink"
            >
              Voir mes projets
            </a>
            <a
              href={profile.cvPdf}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-ink-faint underline decoration-line underline-offset-4 transition hover:text-ink"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <figure className="justify-self-center sm:justify-self-end">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-[220px] w-[220px] object-cover grayscale [filter:contrast(1.05)]"
          />
          <figcaption className="mt-2 border-t border-line pt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {profile.name}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
