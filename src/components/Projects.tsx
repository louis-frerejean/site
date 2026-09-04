import { codeProjects } from '../data/content'

export function Projects() {
  return (
    <section id="realisations" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Réalisations</h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        Quelques exemples de ce que j'ai construit, seul ou en équipe.
      </p>

      <div className="mt-10 grid gap-5">
        {codeProjects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`Aperçu du projet ${project.name}`}
                className={`h-64 w-full object-cover ${
                  project.imagePosition === 'left-top' ? 'object-left-top' : 'object-top'
                }`}
                loading="lazy"
              />
            ) : null}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <span className="text-sm text-ink-faint">
                  {project.status}
                  {project.date ? ` · ${project.date}` : ''}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">{project.tagline}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink underline decoration-line underline-offset-4 transition hover:text-accent"
                  >
                    {project.linkLabel ?? 'Voir le projet'} ↗
                  </a>
                ) : (
                  <span className="text-ink-faint">Démo sur demande</span>
                )}
                {project.secondaryLink ? (
                  <a
                    href={project.secondaryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink-dim underline decoration-line underline-offset-4 transition hover:text-accent"
                  >
                    {project.secondaryLinkLabel ?? 'Lien'} ↗
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
