import { timeline } from '../data/content'

export function Timeline() {
  return (
    <section id="parcours" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">Expérience & formation</h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        Un parcours qui mêle terrain de précision, gestion de projet et cybersécurité.
      </p>

      <div className="mt-12 border-t border-line">
        {timeline.map((entry) => (
          <div
            key={`${entry.role}-${entry.org}`}
            className="grid gap-3 border-b border-line py-8 sm:grid-cols-[150px_1fr] sm:gap-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
              {entry.period}
            </p>

            <div>
              <h3 className="font-semibold text-ink">{entry.role}</h3>
              <p className="text-sm text-ink-dim">{entry.org}</p>
              <ul className="mt-3 space-y-1.5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-ink-faint" />
                    {bullet}
                  </li>
                ))}
              </ul>
              {entry.testimonial ? (
                <blockquote className="mt-4 border-l-2 border-accent/40 pl-4 text-sm italic leading-relaxed text-ink-dim">
                  "{entry.testimonial.quote}"
                  <footer className="mt-1.5 font-mono text-[10px] not-italic uppercase tracking-widest text-ink-faint">
                    — {entry.testimonial.author}
                  </footer>
                </blockquote>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
