import { services } from '../data/content'

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">Ce que je peux vous construire</h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        Pas d'usine à gaz ni de jargon technique — je choisis l'outil le plus simple pour répondre à
        votre besoin, à un tarif accessible.
      </p>

      <div className="mt-12 border-t border-line">
        {services.map((service, i) => (
          <div
            key={service.name}
            className="grid gap-3 border-b border-line py-6 sm:grid-cols-[64px_220px_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-semibold text-ink">{service.name}</h3>
            <p className="text-sm leading-relaxed text-ink-dim">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
