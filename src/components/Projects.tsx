import { codeProjects } from '../data/content'

const statusStyles: Record<string, string> = {
  live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'en cours': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'projet perso': 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20',
}

export function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="text-2xl font-bold tracking-tight text-white">Projets de code</h2>
      <p className="mt-3 max-w-2xl text-neutral-400">
        Une sélection de projets perso et de projets menés dans le cadre de ma formation.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {codeProjects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <span
                className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-indigo-400">{project.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
              >
                Voir le code →
              </a>
            ) : (
              <p className="mt-5 text-sm text-neutral-500">Dépôt privé</p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
