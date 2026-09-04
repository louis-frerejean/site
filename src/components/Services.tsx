import { services } from '../data/content'

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Ce que je peux vous construire
      </h2>
      <p className="mt-3 max-w-2xl text-ink-dim">
        Pas d'usine à gaz ni de jargon technique — je choisis l'outil le plus simple pour répondre à
        votre besoin, à un tarif accessible.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.name}
            className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-ink">{service.name}</h3>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {service.priceFrom}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">{service.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-faint">
        Tarifs indicatifs — précisés lors du devis, selon la taille et les besoins du projet.
      </p>
    </section>
  )
}
