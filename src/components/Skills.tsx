const codeSkills = [
  'Frontend (React, TypeScript, Tailwind)',
  'Applis mobiles (React Native / Expo)',
  'Intégration IA générative (Gemini, LLMs)',
  'Hardware / IoT (Raspberry Pi, GPIO, Python)',
  'Backend & bases de données (Supabase, PHP)',
]

const noCodeSkillsList = [
  'Automatisation de workflows (Make)',
  'Notion (bases de données, dashboards)',
  'Sites e-commerce',
  'Sites vitrines',
]

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
          <ul className="mt-4 space-y-3 text-neutral-200">
            {codeSkills.map((skill) => (
              <li key={skill} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400">No-code</h3>
          <ul className="mt-4 space-y-3 text-neutral-200">
            {noCodeSkillsList.map((skill) => (
              <li key={skill} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
