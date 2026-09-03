import { codeProjects } from '../data/content'

export function Projects() {
  return (
    <section id="realisations" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">Réalisations</h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        Quelques exemples de ce que j'ai construit, seul ou en équipe.
      </p>

      <div className="mt-12 border-t border-line">
        {codeProjects.map((project, i) => (
          <article
            key={project.name}
            className="grid gap-4 border-b border-line py-8 sm:grid-cols-[64px_1fr]"
          >
            <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  — {project.status}
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
                    className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-widest">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline decoration-line underline-offset-4 transition hover:text-accent"
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
