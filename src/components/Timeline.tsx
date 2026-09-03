import { timeline } from '../data/content'

export function Timeline() {
  return (
    <section id="parcours" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="text-2xl font-bold tracking-tight text-white">Expérience & formation</h2>
      <p className="mt-3 max-w-2xl text-neutral-400">
        Un parcours qui mêle terrain de précision, gestion de projet et cybersécurité.
      </p>

      <ol className="mt-10 space-y-8 border-l border-white/10 pl-8">
        {timeline.map((entry) => (
          <li key={`${entry.role}-${entry.org}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-400" />
            <h3 className="font-semibold text-white">{entry.role}</h3>
            <p className="text-sm text-indigo-400">{entry.org}</p>
            <p className="mt-0.5 text-xs uppercase tracking-wide text-neutral-500">{entry.period}</p>
            <ul className="mt-3 space-y-1.5">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-neutral-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                  {bullet}
                </li>
              ))}
            </ul>
            {entry.testimonial ? (
              <blockquote className="mt-4 border-l-2 border-amber-500/30 pl-4 text-sm italic leading-relaxed text-neutral-300">
                "{entry.testimonial.quote}"
                <footer className="mt-1.5 text-xs not-italic uppercase tracking-wide text-neutral-500">
                  — {entry.testimonial.author}
                </footer>
              </blockquote>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
