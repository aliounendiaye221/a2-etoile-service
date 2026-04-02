export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  benefit: string;
  image: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const company = {
  name: "A2 ÉTOILE SERVICE",
  tagline: "L'Excellence au Service de votre Hygiène",
  slogan: "NETTOYAGE • ÉCLAT • PROFESSIONNALISME",
  phone: "+221 77 000 00 00",
  whatsapp: "https://wa.me/221770000000",
  email: "contact@a2etoileservice.sn",
  address: "Dakar & Rufisque, Sénégal",
  hours: "Lundi au Samedi, 07h30 à 19h00",
  logo: "/logo.png"
};

export const stats = [
  { label: "Villas & Appartements", value: "850+" },
  { label: "Partenaires Entreprises", value: "120+" },
  { label: "Taux de Satisfaction", value: "99%" },
  { label: "Zones (Dakar & Rufisque)", value: "25+" }
];

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Nos services" },
  { href: "/demande-de-devis", label: "Devis Gratuit" },
  { href: "/contact", label: "Contact" }
] as const;

export const services: ServiceItem[] = [
  {
    id: "pressing-luxe",
    title: "Soin Textile Haute-Couture",
    description:
      "Le luxe s'invite dans votre dressing. Notre pressing premium traite vos textiles les plus délicats avec une expertise artisanale. Collecte et livraison soignées à Dakar et Rufisque.",
    benefit: "Votre élégance, notre priorité quotidienne.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nettoyage-residentiel",
    title: "Le Sanctuaire de votre Villa",
    description:
      "Plus qu'un simple nettoyage, nous assurons la préservation de votre patrimoine résidentiel. Brillance miroir des sols, vitrerie parfaite et discrétion absolue pour votre confort.",
    benefit: "Le gardien du prestige de votre foyer.",
    image: "/hero-villa.png"
  },
  {
    id: "nettoyage-professionnel",
    title: "Hygiène & Image Corporative",
    description:
      "Faites de vos locaux un moteur de performance. Nous accompagnons les entreprises de Dakar et Rufisque avec des solutions d'entretien rigoureuses qui renforcent votre image de marque.",
    benefit: "La propreté au service de votre business.",
    image: "/office-clean.png"
  },
  {
    id: "desinfection-industrielle",
    title: "Sécurité & Bio-Nettoyage",
    description:
      "Un environnement sain pour un esprit serein. Protocoles de désinfection certifiés pour les zones sensibles, structures de santé et espaces publics à fort trafic.",
    benefit: "Zéro compromis sur la santé de tous.",
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "remise-en-etat",
    title: "Excellence Fin de Chantier",
    description:
      "La touche finale à vos investissements. Remise en état méticuleuse après travaux pour une intégration immédiate dans des locaux impeccables et sains.",
    benefit: "Vos nouveaux locaux, livrés avec éclat.",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "traitement-sols",
    title: "Restauration de Sols d'Exception",
    description:
      "Redonnez vie à vos marbres et granits. Nos techniques de cristallisation et polissage restaurent la profondeur et la brillance originelle de vos surfaces les plus nobles.",
    benefit: "Révélez la beauté cachée de vos sols.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop"
  }
];

export const trustPillars: ValueItem[] = [
  {
    title: "Rigueur Opérationnelle",
    description:
      "Inspirés par la discipline, nos inspecteurs valident chaque recoin pour un résultat sans la moindre approximation."
  },
  {
    title: "Partenaire B2B de Confiance",
    description:
      "Nous gérons l'hygiène pour que vous puissiez vous concentrer sur votre croissance : réactivité et transparence totale."
  },
  {
    title: "Ancrage Dakar & Rufisque",
    description:
      "Une connaissance parfaite du terrain pour une intervention rapide dans l'ensemble de la zone métropolitaine."
  },
  {
    title: "Standard International",
    description:
      "Équipements de dernière génération et solutions de nettoyage certifiées respectueuses de vos surfaces et de l'environnement."
  }
];

export const faqs: FaqItem[] = [
  {
    question: "Intervenez-vous dans toutes les zones de Rufisque ?",
    answer:
      "Oui, nous couvrons Rufisque Ville, Diamniadio, ainsi que toutes les zones industrielles environnantes."
  },
  {
    question: "Quelle est la flexibilité pour les contrats entreprises ?",
    answer:
      "Totale. Nous créons des plannings sur-mesure (quotidien, hebdomadaire, nuit) adaptés à vos flux opérationnels."
  },
  {
    question: "Comment fonctionne la collecte de linge pour le pressing ?",
    answer:
      "Simple et efficace. Un appel ou WhatsApp, nous collectons vos textiles et vous les livrons impeccables sous 24h ou 48h selon votre urgence."
  }
];
