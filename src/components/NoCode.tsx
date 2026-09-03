import { noCodeSkills } from '../data/content'

export function NoCode() {
  return (
    <section id="no-code" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">Réalisations no-code</h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        En parallèle du code, je livre aussi des solutions no-code pour des clients qui ont besoin
        d'aller vite. Section à compléter avec des cas concrets (avant/après, liens, captures).
      </p>

      <div className="mt-12 border-t border-line">
        {noCodeSkills.map((skill) => (
          <div
            key={skill.name}
            className="grid gap-2 border-b border-line py-6 sm:grid-cols-[200px_1fr_auto] sm:items-baseline sm:gap-6"
          >
            <h3 className="font-semibold text-ink">{skill.name}</h3>
            <p className="text-sm leading-relaxed text-ink-dim">{skill.description}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              À compléter
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
