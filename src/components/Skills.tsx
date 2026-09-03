import { codeSkillGroups, noCodeSkillGroups } from '../data/content'

function SkillColumn({
  index,
  title,
  groups,
}: {
  index: string
  title: string
  groups: { label: string; items: string[] }[]
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 border-b border-line pb-3">
        <span className="font-mono text-xs text-accent">{index}</span>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">{title}</h3>
      </div>
      <dl>
        {groups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-4 sm:grid-cols-[130px_1fr]"
          >
            <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
              {group.label}
            </dt>
            <dd className="text-sm leading-relaxed text-ink-dim">{group.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">Deux façons de livrer</h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        Je choisis l'outil en fonction du besoin, pas l'inverse : du code sur-mesure quand ça compte,
        du no-code quand la rapidité et le budget priment.
      </p>

      <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-16">
        <SkillColumn index="01" title="Code" groups={codeSkillGroups} />
        <SkillColumn index="02" title="No-code" groups={noCodeSkillGroups} />
      </div>
    </section>
  )
}
