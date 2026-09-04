import { testimonial } from '../data/content'

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Qui je suis</h2>
          <p className="mt-4 leading-relaxed text-ink-dim">
            J'ai 20 ans, je suis étudiant en informatique à Lyon. Je code depuis plusieurs années,
            en parallèle de mes études, pour financer mes études et pratiquer ma passion. J'ai
            notamment travaillé un temps dans l'usinage de précision — de quoi apprendre la rigueur
            et le zéro-défaut, que j'applique aujourd'hui à mes projets.
          </p>
        </div>
        <div className="rounded-2xl bg-accent-soft p-6 sm:p-8">
          <blockquote className="text-lg italic leading-relaxed text-ink">
            "{testimonial.quote}"
          </blockquote>
          <p className="mt-3 text-sm text-ink-dim">— {testimonial.author}</p>
        </div>
      </div>
    </section>
  )
}
