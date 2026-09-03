export type CodeProject = {
  name: string
  tagline: string
  description: string
  stack: string[]
  status: 'live' | 'en cours' | 'projet perso'
  link?: string
  private?: boolean
}

export const codeProjects: CodeProject[] = [
  {
    name: 'PickOne',
    tagline: 'Decision Intelligence Engine — app mobile',
    description:
      "Appli mobile qui transforme un dilemme en analyse structurée : questions adaptatives générées par IA, pondération des critères, détection de biais cognitifs, simulation de regret et plan B. Pipeline IA en 3 étapes, saisie vocale, auth et sauvegarde via Supabase.",
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'IA générative'],
    status: 'en cours',
    private: true,
  },
  {
    name: 'AstroVerdict',
    tagline: 'Micro-SaaS pour astronomes amateurs',
    description:
      "Un verdict clair sur la fenêtre d'observation astro d'un utilisateur, calculé à partir du seeing, de la turbulence, de la transparence atmosphérique et de la pollution lumineuse — là où les outils existants livrent des données brutes à interpréter soi-même.",
    stack: ['TypeScript', 'Produit / stratégie', 'APIs météo'],
    status: 'projet perso',
    private: true,
  },
  {
    name: 'CV Interactif IA',
    tagline: 'Un CV qu\'on peut interroger',
    description:
      "CV en ligne avec chatbot propulsé par Google Gemini, capable de répondre aux questions sur mon parcours directement depuis la page. Déployé en production.",
    stack: ['React', 'Vite', 'TailwindCSS', 'Gemini API', 'Vercel'],
    status: 'live',
    link: 'https://github.com/louis-frerejean/cv-interactif',
  },
  {
    name: 'Inclusive Maker',
    tagline: 'Reconnaissance vocale au service du handicap',
    description:
      "Pipeline de reconnaissance vocale piloté par un Raspberry Pi 5 pour commander une pompe et une vanne en GPIO direct, avec un tableau de bord web temps réel affichant l'état du dispositif. Projet réalisé dans le cadre du Défi Handicap.",
    stack: ['Python', 'Raspberry Pi', 'Vosk', 'GPIO', 'Dashboard web'],
    status: 'live',
    link: 'https://github.com/louis-frerejean/inclusive-maker',
  },
  {
    name: 'Site vitrine — Voitures de sport',
    tagline: 'Mon premier projet web',
    description:
      "Site vitrine présentant 8 marques et 24 modèles de voitures de sport, avec navigation par menu déroulant et fiches détaillées. Réalisé en 1ère année, en HTML/CSS/JS vanilla — le point de départ.",
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'live',
    link: 'https://github.com/louis-frerejean/first-web-project',
  },
]

export type NoCodeSkill = {
  name: string
  description: string
}

export const noCodeSkills: NoCodeSkill[] = [
  {
    name: 'Automatisation (Make)',
    description:
      "Connexion d'outils entre eux et automatisation de tâches répétitives : déclencheurs, scénarios multi-étapes, synchronisation de données entre applications.",
  },
  {
    name: 'Notion',
    description:
      "Bases de données relationnelles, dashboards de suivi et systèmes d'organisation sur-mesure pour structurer un projet ou une activité.",
  },
  {
    name: 'Sites e-commerce',
    description:
      "Mise en place de boutiques en ligne clé en main pour des clients : catalogue, paiement, gestion de commandes.",
  },
  {
    name: 'Sites vitrines',
    description:
      "Sites vitrines rapides à mettre en place pour des clients qui ont besoin d'une présence en ligne sans développement sur-mesure.",
  },
]

export const contact = {
  email: 'l.frerejean04@gmail.com',
  github: 'https://github.com/louis-frerejean',
}
