import { testimonial } from '../data/content'

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Qui je suis</h2>
          <p className="mt-4 leading-relaxed text-ink-dim">
            J'ai 20 ans, je suis étudiant en informatique à Lyon. Je code depuis plusieurs années,
            en parallèle de mes études, pour financer mes études et pratiquer ma passion. J'ai
            notamment travaillé un temps dans l'usinage de précision — de quoi apprendre la rigueur
            et le zéro-défaut, que j'applique aujourd'hui à mes projets.
          </p>
        </div>
        <div className="border-l-2 border-accent/40 pl-6">
          <blockquote className="text-lg italic leading-relaxed text-ink">
            "{testimonial.quote}"
          </blockquote>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
            — {testimonial.author}
          </p>
        </div>
      </div>
    </section>
  )
}
