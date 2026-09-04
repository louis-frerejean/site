export const profile = {
  name: 'Louis Frerejean',
  title: 'Sites, automatisations & applications — Lyon',
  location: 'Lyon, France',
  email: 'l.frerejean04@gmail.com',
  github: 'https://github.com/louis-frerejean',
  linkedin: 'https://www.linkedin.com/in/louis-frerejean/',
  photo: `${import.meta.env.BASE_URL}louis.jpeg`,
  bio: "Étudiant en informatique à Lyon, je mets mes compétences au service des commerçants, artisans, associations et indépendants du coin. Sites vitrines, e-commerce, automatisation, applications — sans jargon technique, à un tarif accessible, avec un vrai suivi de proximité.",
  availability: "Un projet en tête ? Écrivez-moi, on en discute simplement — sans aucun engagement.",
}

export type CodeProject = {
  name: string
  tagline: string
  description: string
  stack: string[]
  status: 'live' | 'en cours' | 'projet perso'
  date?: string
  image?: string
  link?: string
  linkLabel?: string
  secondaryLink?: string
  secondaryLinkLabel?: string
}

export const codeProjects: CodeProject[] = [
  {
    name: 'ALTéRA',
    tagline: 'Site de contenu avec paiement en ligne — en binôme',
    description:
      "Refonte d'un site familial (Next.js + Supabase), développée en collaboration : paiement en ligne (Stripe) fonctionnel pour débloquer du contenu, comptes utilisateurs, back-office pour ajouter du contenu sans coder, et un correctif de sécurité sur la base de données.",
    stack: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
    status: 'live',
    image: `${import.meta.env.BASE_URL}projects/altera.jpg`,
    link: 'https://www.alteraexplore.com/',
    linkLabel: 'Voir le site',
  },
  {
    name: 'PickOne',
    tagline: "Application mobile d'aide à la décision",
    description:
      "Application mobile qui aide à trancher un dilemme en 2 minutes : questions guidées, analyse des critères, résultat clair. Disponible iOS, Android et Web. Conception, développement et mise en ligne, du début à la fin, en solo.",
    stack: ['React Native', 'TypeScript', 'Supabase', 'IA'],
    status: 'en cours',
    date: 'Avril 2026',
    image: `${import.meta.env.BASE_URL}projects/pickone.jpg`,
    link: 'https://pickone-app.vercel.app/auth',
    linkLabel: 'Voir le site',
  },
  {
    name: 'CV Interactif IA',
    tagline: "Un site qu'on peut interroger",
    description:
      "Un CV en ligne avec un assistant qui répond aux questions des visiteurs directement depuis la page. Pour montrer ce qu'on peut faire d'un peu plus original qu'un site classique quand ça sert le projet.",
    stack: ['React', 'TailwindCSS', 'IA', 'Vercel'],
    status: 'live',
    image: `${import.meta.env.BASE_URL}projects/cv-interactif.jpg`,
    link: 'https://cv-interactif-rosy.vercel.app',
    linkLabel: 'Voir le site',
    secondaryLink: 'https://github.com/louis-frerejean/cv-interactif',
    secondaryLinkLabel: 'Code',
  },
  {
    name: 'Site vitrine — Voitures de sport',
    tagline: 'Un exemple de site vitrine',
    description:
      "Site vitrine présentant 8 marques et 24 modèles, avec navigation par menu et fiches détaillées pour chaque modèle — le genre de structure qu'on adapte pour un commerçant ou un artisan qui veut présenter ses produits ou ses réalisations.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'live',
    image: `${import.meta.env.BASE_URL}projects/carsite.jpg`,
    link: 'https://louis-frerejean.github.io/first-web-project/',
    linkLabel: 'Voir le site',
    secondaryLink: 'https://github.com/louis-frerejean/first-web-project',
    secondaryLinkLabel: 'Code',
  },
]

export type Service = {
  name: string
  description: string
}

export const services: Service[] = [
  {
    name: 'Sites vitrines',
    description:
      "Un site simple et clair pour présenter votre activité : qui vous êtes, ce que vous proposez, comment vous contacter. Sur-mesure ou via des outils comme WordPress selon le besoin.",
  },
  {
    name: 'Boutiques en ligne',
    description:
      "Vendre vos produits ou services sur internet : catalogue, paiement en ligne, gestion des commandes.",
  },
  {
    name: 'Automatisation',
    description:
      "Gagner du temps sur les tâches répétitives : connecter vos outils entre eux pour qu'ils travaillent ensemble automatiquement (via Make).",
  },
  {
    name: 'Organisation (Notion)',
    description:
      "Un espace pour organiser votre activité — suivi de projets, de clients, de stock — sans usine à gaz, pensé pour vous.",
  },
  {
    name: 'Applications & outils sur-mesure',
    description:
      "Quand une solution toute faite ne suffit pas : une application mobile ou un outil pensé spécifiquement pour votre besoin.",
  },
]

export type ProcessStep = {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'On en discute',
    description:
      "Un échange rapide (téléphone, mail ou visio) pour comprendre votre besoin. Gratuit et sans engagement.",
  },
  {
    title: 'Vous recevez un devis clair',
    description:
      "Un prix fixe et un délai annoncés avant de commencer — pas de mauvaise surprise en cours de route.",
  },
  {
    title: 'Je construis, vous suivez',
    description:
      "Je vous montre l'avancement régulièrement pour ajuster ensemble si besoin, plutôt qu'une livraison surprise à la fin.",
  },
  {
    title: 'Livraison et suivi',
    description:
      "Votre site ou outil est mis en ligne, et je reste disponible après coup pour les petits ajustements.",
  },
]

export const contact = {
  email: 'l.frerejean04@gmail.com',
  github: 'https://github.com/louis-frerejean',
}
