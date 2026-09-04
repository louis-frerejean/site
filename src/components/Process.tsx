import { processSteps } from '../data/content'

export function Process() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Comment ça se passe
      </h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        Quatre étapes simples, sans surprise, du premier message à la mise en ligne.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <div key={step.title}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-surface">
              {i + 1}
            </span>
            <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
