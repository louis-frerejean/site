export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        Portfolio compétences
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Je construis des produits — en code, et sans code.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
        En parallèle de ma recherche d'alternance, je développe pour mon compte et pour des clients :
        applis mobiles, sites, automatisations. Ici, ce n'est pas mon CV — c'est la démonstration de ce
        que je sais livrer.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projets"
          className="rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-white/40 hover:text-white"
        >
          Me contacter
        </a>
      </div>
    </section>
  )
}
