export const profile = {
  name: 'Louis Frerejean',
  title: 'Bachelor Cybersécurité (alternance) — Guardia School, Lyon',
  location: 'Lyon, France',
  email: 'l.frerejean04@gmail.com',
  github: 'https://github.com/louis-frerejean',
  linkedin: 'https://www.linkedin.com/in/louis-frerejean/',
  cvPdf: `${import.meta.env.BASE_URL}CV-Louis-Frerejean.pdf`,
  photo: `${import.meta.env.BASE_URL}louis.jpeg`,
  bio: "Formé à la fois par la précision de l'usinage aéronautique — tolérances de ±0,01 mm sur des pièces pour l'aéronautique, le spatial et le nucléaire — et par la conception de formations IA pour l'industrie, je poursuis aujourd'hui un Bachelor Cybersécurité (RNCP6) en alternance à Guardia School. Je conçois des produits avec la même exigence, que le projet demande du code sur-mesure ou une solution no-code.",
}

export type CodeProject = {
  name: string
  tagline: string
  description: string
  stack: string[]
  status: 'live' | 'en cours' | 'projet perso'
  date?: string
  link?: string
  linkLabel?: string
  secondaryLink?: string
  secondaryLinkLabel?: string
  private?: boolean
}

export const codeProjects: CodeProject[] = [
  {
    name: 'PickOne',
    tagline: 'Decision Intelligence Engine — app mobile',
    description:
      "Application mobile d'aide à la décision par IA : questions adaptatives générées dynamiquement, pondération des critères, détection de biais cognitifs, simulation de regret et plan B conditionnel. Disponible iOS, Android et Web. Conception, développement et déploiement complet en solo.",
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Gemini AI', 'Claude AI'],
    status: 'en cours',
    date: 'Avril 2026',
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
    tagline: "Un CV qu'on peut interroger",
    description:
      "CV en ligne avec chatbot propulsé par Google Gemini, capable de répondre aux questions sur mon parcours directement depuis la page. Backend en Vercel Serverless Functions, contenu entièrement piloté par fichiers.",
    stack: ['React', 'Vite', 'TailwindCSS', 'Gemini API', 'Vercel'],
    status: 'live',
    link: 'https://github.com/louis-frerejean/cv-interactif',
    linkLabel: 'Voir le code',
  },
  {
    name: 'Inclusive Maker',
    tagline: 'Reconnaissance vocale au service du handicap',
    description:
      "Pipeline de reconnaissance vocale piloté par un Raspberry Pi 5 pour commander une pompe et une vanne en GPIO direct, avec un tableau de bord web temps réel affichant l'état du dispositif. Projet réalisé dans le cadre du Défi Handicap.",
    stack: ['Python', 'Raspberry Pi', 'Vosk', 'GPIO', 'Dashboard web'],
    status: 'live',
    link: 'https://github.com/louis-frerejean/inclusive-maker',
    linkLabel: 'Voir le code',
  },
  {
    name: 'Prototypage IoT — Arduino',
    tagline: 'Communication longue distance & domotique',
    description:
      "Conception hardware et logicielle de modules de communication longue distance en radiofréquence, appliqués à la domotique et au monitoring à distance.",
    stack: ['Arduino', 'C++', 'IoT', 'Radiofréquence'],
    status: 'projet perso',
    date: '2025',
  },
  {
    name: 'Site vitrine — Voitures de sport',
    tagline: 'Mon premier projet web',
    description:
      "Site vitrine présentant 8 marques et 24 modèles de voitures de sport, avec navigation par menu déroulant et fiches détaillées. Réalisé en 1ère année, en HTML/CSS/JS vanilla — le point de départ.",
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'live',
    link: 'https://louis-frerejean.github.io/first-web-project/',
    linkLabel: 'Voir le site',
    secondaryLink: 'https://github.com/louis-frerejean/first-web-project',
    secondaryLinkLabel: 'Code',
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
    name: 'WordPress',
    description:
      "Sites vitrines et e-commerce rapides à mettre en place pour des clients qui ont besoin d'une présence en ligne sans développement sur-mesure.",
  },
  {
    name: 'E-commerce & sites clients',
    description:
      "Boutiques en ligne et sites vitrines livrés clé en main : catalogue, paiement, gestion de commandes.",
  },
]

const codeSkillGroups = [
  { label: 'Cybersécurité', items: ['OSINT', 'Wireshark', 'Veille CVE'] },
  { label: 'Langages', items: ['Python', 'TypeScript / JavaScript', 'PHP', 'HTML5 / CSS3', 'Arduino (C++)'] },
  { label: 'IA générative', items: ['Prompting avancé', 'Intégration LLM (Gemini, Claude)'] },
  { label: 'Mobile & hardware', items: ['React Native / Expo', 'Raspberry Pi', 'Prototypage Arduino'] },
  { label: 'Environnements', items: ['Linux (Fedora, Mint)', 'Windows'] },
]

const noCodeSkillGroups = [
  { label: 'Automatisation & data', items: ['Make', 'Notion'] },
  { label: 'Sites & e-commerce', items: ['WordPress', 'Sites vitrines', 'Boutiques en ligne'] },
  { label: 'Gestion de projet', items: ['Agile / Scrum', 'Kanban', 'Gantt'] },
  { label: 'Outils', items: ['Pack Office', 'Suite Adobe', 'Canva'] },
]

export { codeSkillGroups, noCodeSkillGroups }

export type TimelineEntry = {
  role: string
  org: string
  period: string
  bullets: string[]
  testimonial?: { quote: string; author: string }
}

export const timeline: TimelineEntry[] = [
  {
    role: 'Bachelor Cybersécurité',
    org: 'Guardia Cybersecurity School, Lyon',
    period: '2026 — 2027 · Admis en alternance',
    bullets: [
      "Titre RNCP Niveau 6 : Administrateur d'Infrastructures Sécurisées",
      'Culture Cyber & Pentest, Sécurité ISR & DevSecOps, Reverse Engineering',
      "Rythme : 2 semaines entreprise / 1 semaine école",
    ],
  },
  {
    role: 'Chef de Projet Junior — IA & Industrie 4.0',
    org: 'Diwii / Mines Saint-Étienne',
    period: 'Septembre — Décembre 2025 · Stage 3 mois',
    bullets: [
      "Conception d'une semaine de formation \"Industrie 4.0\" complète (VR, robotique, IoT, laser, impression 3D)",
      "Conception d'une offre IA pour industriels : analyse de marché, structuration, argumentaire commercial",
      "Formation des équipes internes à l'IA générative (prompting avancé, outils, cas d'usage)",
    ],
    testimonial: {
      quote:
        "Louis est très vif, il sait s'adapter rapidement à son contexte et à ses interlocuteurs. Il a un très fort potentiel. Missions remplies selon le niveau d'exigence attendu.",
      author: 'Bernard Nemorin, maître de stage',
    },
  },
  {
    role: 'Bachelor Numérique, Entrepreneuriat & Management de projet',
    org: 'École LDLC, Limonest',
    period: '2024 — 2026 · En cours',
    bullets: [
      'Formation généraliste structurée autour de 3 piliers : Entrepreneuriat & Gestion, Technologies Numériques & Innovation, Humanités',
    ],
  },
  {
    role: 'Opérateur CN & Monteur',
    org: 'Croix-Rousse Précision',
    period: 'Septembre 2024 — Juin 2025 · CDD + stage temps plein',
    bullets: [
      'Usinage autonome sur fraiseuse CNC 5 axes de pièces critiques pour l\'aéronautique, le spatial, la défense et le nucléaire',
      'Contrôle dimensionnel rigoureux — tolérances à ±0,01 mm, zéro marge d\'erreur',
      "Rythme mené en parallèle de la formation : 10 mois à 1 jour/semaine + 1 mois temps plein",
    ],
    testimonial: {
      quote:
        "Mr Louis Frerejean dans une entreprise, c'est un joyau pour le travail en commun. Vraiment je recommande sans aucun problème.",
      author: 'Nizier Thomassoni, responsable production & RH',
    },
  },
  {
    role: 'Baccalauréat Général — Mention Bien',
    org: 'Institution des Chartreux',
    period: '2024',
    bullets: [
      'Spécialités Mathématiques, Physique-Chimie, NSI · Option Mathématiques Expertes',
      'Olympiades de Mathématiques 2023 — "Bonne copie remarquée", Top 150 Académie de Lyon',
    ],
  },
]

export const contact = {
  email: 'l.frerejean04@gmail.com',
  github: 'https://github.com/louis-frerejean',
}
