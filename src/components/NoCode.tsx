import { noCodeSkills } from '../data/content'

export function NoCode() {
  return (
    <section id="no-code" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="text-2xl font-bold tracking-tight text-white">Réalisations no-code</h2>
      <p className="mt-3 max-w-2xl text-neutral-400">
        En parallèle du code, je livre aussi des solutions no-code pour des clients qui ont besoin
        d'aller vite. Section à compléter avec des cas concrets (avant/après, liens, captures).
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {noCodeSkills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl border border-dashed border-amber-500/25 bg-amber-500/[0.03] p-6"
          >
            <h3 className="font-semibold text-white">{skill.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">{skill.description}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-amber-500/70">
              À compléter — exemple client
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
