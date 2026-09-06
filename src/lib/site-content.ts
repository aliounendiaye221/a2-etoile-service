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
  slogan: "L'Excellence au cours de nos agissements",
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
  { href: "/devis", label: "Devis Gratuit" },
  { href: "/contact", label: "Contact" }
] as const;

export const services: ServiceItem[] = [
  {
    id: "pressing-luxe",
    title: "Pressing & Soin Textile Haute-Couture",
    description:
      "Le luxe s'invite dans votre dressing avec A2 Étoile Service. Notre pressing premium traite vos textiles les plus délicats avec une expertise artisanale. Collecte et livraison soignées à Dakar et Rufisque.",
    benefit: "L'élégance signée A2 Étoile Service.",
    image: "/pressing_laverie.webp"
  },
  {
    id: "nettoyage-residentiel",
    title: "Le Sanctuaire de votre Villa",
    description:
      "Plus qu'un simple nettoyage, A2 Étoile Service assure la préservation de votre patrimoine résidentiel. Brillance miroir des sols, vitrerie parfaite et discrétion absolue pour votre confort.",
    benefit: "Le gardien du prestige de votre foyer.",
    image: "/hero-villa.webp"
  },
  {
    id: "nettoyage-professionnel",
    title: "Hygiène & Image Corporative",
    description:
      "Faites de vos locaux un moteur de performance. A2 Étoile Service accompagne les entreprises de Dakar et Rufisque avec des solutions d'entretien rigoureuses qui renforcent votre image de marque.",
    benefit: "La propreté au service de votre business.",
    image: "/office-clean.webp"
  },
  {
    id: "gravure-marbre",
    title: "Gravure sur Marbre & Pierres Nobles",
    description:
      "Gravure d'art et lettrage de haute précision sur marbres et granits d'exception. Plaques commémoratives, frontons prestigieux et signalétique ornementale taillés avec une finesse remarquable.",
    benefit: "La noblesse et la pérennité de la pierre d'exception.",
    image: "/service_gravure_marbre.jpg"
  },
  {
    id: "gravure-plexiglas",
    title: "Gravure sur Plexiglas & Acrylique",
    description:
      "Usinage et gravure laser haute fidélité sur plexiglas transparent, givré ou teinté. Plaques professionnelles modernes, signalétique murale sur entretoises inox et enseignes rétro-éclairées épurées.",
    benefit: "Clarté cristalline et modernité architecturale.",
    image: "/service_gravure_plexiglas.jpg"
  },
  {
    id: "gravure-aluminium",
    title: "Gravure sur Aluminium Brossé",
    description:
      "Conception et gravure industrielle de précision sur plaques d'aluminium anodisé et brossé. Finition biseautée ultra-nette, résistance extrême aux intempéries pour façades d'entreprises et sièges sociaux.",
    benefit: "Finition technique impeccable et durabilité absolue.",
    image: "/service_gravure_aluminium.jpg"
  },
  {
    id: "gravure-laiton",
    title: "Gravure sur Laiton & Métaux Précieux",
    description:
      "L'élégance intemporelle du laiton poli miroir avec gravure profonde et émaillage de prestige. Idéal pour cabinets juridiques, notaires, réceptions d'hôtels de luxe et résidences d'ambassadeurs.",
    benefit: "Le rayonnement prestigieux du métal doré.",
    image: "/service_gravure_laiton.jpg"
  },
  {
    id: "lavage-tapis-monobrosse",
    title: "Lavage de Tapis & Moquettes à la Monobrosse",
    description:
      "Traitement mécanique intensif par monobrosse rotative et émulsion moussante active. Élimination totale des taches rebelles, redressement des fibres textiles et désinfection thermique en profondeur.",
    benefit: "Une rénovation textile intégrale et un éclat restauré.",
    image: "/service_lavage_tapis_monobrosse.jpg"
  },
  {
    id: "deratisation",
    title: "Dératisation & Lutte Anti-Rongeurs",
    description:
      "Éradication préventive et curative complète par les experts A2 Étoile Service pour protéger vos stocks, vos locaux et vos villas. Des solutions discrètes et hautement efficaces.",
    benefit: "Un environnement sain et parfaitement sécurisé.",
    image: "/deratisation.webp"
  },
  {
    id: "remise-en-etat",
    title: "Excellence Fin de Chantier",
    description:
      "La touche finale à vos investissements par les équipes A2 Étoile Service. Remise en état méticuleuse après travaux pour une intégration immédiate dans des locaux impeccables et sains.",
    benefit: "Vos nouveaux locaux, livrés avec éclat par nos experts.",
    image: "/fin_chantier.webp"
  },
  {
    id: "traitement-sols",
    title: "Restauration de Sols d'Exception",
    description:
      "Redonnez vie à vos marbres et granits. Les techniques de cristallisation et polissage de A2 Étoile Service restaurent la profondeur et la brillance originelle de vos surfaces les plus nobles.",
    benefit: "Révélez la beauté cachée de vos sols avec notre équipe.",
    image: "/restauration_sol.webp"
  },
  {
    id: "desinsectisation",
    title: "Désinsectisation Premium",
    description:
      "Une protection absolue pour vos espaces. A2 Étoile Service déploie des protocoles d'éradication ciblés, éliminant tout nuisible sans compromettre l'intégrité de vos intérieurs prestigieux.",
    benefit: "La sérénité d'un environnement maîtrisé.",
    image: "/desinsectisation.webp"
  },
  {
    id: "lavage-haute-pression",
    title: "Lavage Haute-Pression & Vitrerie",
    description:
      "La perfection de l'extérieur vers l'intérieur. Les agents spécialisés de A2 Étoile Service restaurent l'éclat originel de vos façades, terrasses et immenses baies vitrées avec une précision millimétrée.",
    benefit: "Une façade sublimée, un prestige affirmé.",
    image: "/lavage.webp"
  },
  {
    id: "shampouinage",
    title: "Soin & Shampouinage Textile",
    description:
      "L'art de raviver l'exceptionnel avec l'expertise d'A2 Étoile Service. Par notre technique d'extraction en profondeur, vos moquettes privées et canapés prestigieux retrouvent leur panache du premier jour.",
    benefit: "L'élégance de vos tissus immaculés garantie par nos soins.",
    image: "/pressing_shampoing.webp"
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
