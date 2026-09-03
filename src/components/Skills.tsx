import { codeSkillGroups, noCodeSkillGroups } from '../data/content'

export function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="text-2xl font-bold tracking-tight text-white">Deux façons de livrer</h2>
      <p className="mt-3 max-w-2xl text-neutral-400">
        Je choisis l'outil en fonction du besoin, pas l'inverse : du code sur-mesure quand ça compte,
        du no-code quand la rapidité et le budget priment.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Code</h3>
          <div className="mt-5 space-y-4">
            {codeSkillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {group.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-200">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400">No-code</h3>
          <div className="mt-5 space-y-4">
            {noCodeSkillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {group.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-200">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
