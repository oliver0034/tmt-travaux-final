import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";
import ShapeHeroTitle from "@/components/ui/shape-hero-title";

export const metadata: Metadata = {
  title: "Nos Réalisations | Chantiers Terrassement, Maçonnerie & Rénovation | TMT Travaux",
  description:
    "Découvrez les réalisations de TMT Travaux dans l'Hérault (34) : terrassement, maçonnerie, rénovation et aménagements extérieurs à Montpellier, Béziers et Clermont-l'Hérault. Photos avant/après.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/realisations",
  },
  keywords: [
    "réalisations travaux Hérault",
    "chantiers terrassement Montpellier",
    "photos avant après rénovation 34",
    "portfolio maçonnerie Béziers",
    "aménagement extérieur Clermont-l'Hérault",
    "entreprise BTP Hérault réalisations",
    "travaux rénovation Sète",
  ],
};

const categories = [
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Terrassement & VRD",
    count: "30+",
    description:
      "Fouilles, viabilisation, enrochement et préparation de terrain pour constructions neuves et extensions dans tout le département 34.",
  },
  {
    icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z",
    title: "Maçonnerie & Gros Œuvre",
    count: "25+",
    description:
      "Fondations, élévations de murs, dalles béton, ouvertures et reprises en sous-œuvre pour maisons individuelles et bâtiments professionnels.",
  },
  {
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    title: "Rénovation Intérieure & Extérieure",
    count: "20+",
    description:
      "Rénovation complète de maisons anciennes, extensions, aménagements de combles et mise aux normes pour particuliers et professionnels.",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Aménagements Extérieurs",
    count: "15+",
    description:
      "Clôtures, murets, terrasses, allées carrossables et aménagements paysagers pour sublimer vos espaces extérieurs.",
  },
];

const etapesMetallerie = [
  {
    step: "01",
    titre: "Fabrication en Atelier",
    description:
      "Conception et fabrication sur mesure de la structure en acier robuste : plateforme, garde-corps à lisses horizontales et escalier droit. Travail de soudure de précision en atelier.",
    image: "/images/realisations/fabrication-plateforme-metallique-sur-mesure.jpg",
    alt: "Fabrication sur mesure d'une plateforme métallique et garde-corps en atelier par TMT Travaux Hérault.",
  },
  {
    step: "02",
    titre: "Structure & Pose",
    description:
      "Pose de la structure métallique autoportée sur la façade. Fixations lourdes en façade et poteaux de soutien pour une stabilité parfaite de la plateforme suspendue.",
    image: "/images/realisations/pose-structure-metallique-facade-herault.jpg",
    alt: "Pose d'une structure métallique autoportée sur façade de maison pour création de terrasse suspendue.",
  },
  {
    step: "03",
    titre: "Escalier & Finition",
    description:
      "Installation de l'escalier droit avec marches en caillebotis antidérapant pour une évacuation optimale des eaux de pluie. Garde-corps sécurisé conforme aux normes.",
    image: "/images/realisations/escalier-metallique-exterieur-caillebotis-tmt.jpg",
    alt: "Escalier métallique extérieur droit avec marches en caillebotis antidérapant et garde-corps sécurisé.",
  },
];

const etapesPiscine = [
  {
    step: "01",
    titre: "Fondations & Radier",
    description:
      "Coulage du radier en béton armé avec ferraillage et film d'étanchéité polyane. Préparation rigoureuse du sol et mise en place des armatures conformes aux normes.",
    image: "/images/realisations/construction-piscine-beton-st-pargoire-fondations.jpg",
    alt: "Coulage du radier en béton armé pour piscine 14x4m à Saint-Pargoire par TMT Travaux Hérault. On voit le ferraillage et le film d'étanchéité.",
  },
  {
    step: "02",
    titre: "Élévation des Murs",
    description:
      "Montage des murs en blocs de béton sur toute la périphérie du bassin. Élévation soignée avec blocs d'angle et chaînages horizontaux pour une structure solide et durable.",
    image: "/images/realisations/maconnerie-murs-piscine-blocs-beton.jpg",
    alt: "Élévation des murs de la piscine en blocs de béton de 14x4 mètres. Chantier de gros œuvre réalisé par TMT Travaux.",
  },
  {
    step: "03",
    titre: "Structure & Filtration",
    description:
      "Mise en place du système de filtration complet : skimmers, buses de refoulement et bonde de fond. Application de l'enduit d'étanchéité gris sur les parois intérieures.",
    image: "/images/realisations/structure-piscine-beton-escalier-st-pargoire.jpg",
    alt: "Vue de la structure montée de la piscine béton avec création de l'escalier intérieur. Chantier TMT Travaux Hérault.",
  },
  {
    step: "04",
    titre: "Finition & Mise en Eau",
    description:
      "Finition grise moderne et mise en eau du bassin. Vérification de l'étanchéité, réglage du système de filtration et livraison d'une piscine prête à l'emploi.",
    image: "/images/realisations/piscine-beton-14x4m-finie-mise-en-eau.jpg",
    alt: "Piscine en béton 14x4 mètres finie et mise en eau à Saint-Pargoire. Finition grise moderne, système d'éclairage et filtration visible. Réalisation TMT Travaux.",
  },
];

const chiffres = [
  { valeur: "100+", label: "Chantiers réalisés" },
  { valeur: "15 ans", label: "D'expérience terrain" },
  { valeur: "98%", label: "Clients satisfaits" },
  { valeur: "48h", label: "Délai devis gratuit" },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black-deep">
        <ShapeHeroTitle
          badge="Portfolio — Hérault (34)"
          line1="Nos Réalisations"
          line2="dans l'Hérault (34)"
          description="Chaque chantier est unique. Découvrez une sélection de nos réalisations en terrassement, maçonnerie et rénovation dans l'Hérault. Des projets menés avec rigueur, du devis à la réception, pour des clients particuliers et professionnels."
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander un Devis Gratuit" />
            <AnimatedButton
              href="tel:+33748157160"
              variant="dark"
              label="07 48 15 71 60"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Terrassement", "Maçonnerie", "Rénovation", "VRD", "Aménagement Extérieur"].map((n) => (
              <span
                key={n}
                className="text-xs font-semibold text-gold/80 border border-gold/20 bg-gold/5 px-3 py-1 rounded-full"
              >
                {n}
              </span>
            ))}
          </div>
        </ShapeHeroTitle>
      </section>

      {/* Chiffres Clés */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {chiffres.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient-gold">{item.valeur}</div>
                <p className="mt-2 text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'intervention */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">Nos Domaines</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Des compétences complètes en travaux et BTP
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              TMT Travaux intervient sur l&apos;ensemble des métiers du bâtiment et des travaux publics,
              de la préparation de terrain à la finition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((item) => (
              <div
                key={item.title}
                className="card-3d bg-white border border-gray-100 rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-black-deep"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div className="text-2xl font-extrabold text-gradient-gold mb-2">{item.count}</div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étude de Cas : Piscine Béton Saint-Pargoire */}
      <section className="py-12 sm:py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête du projet */}
          <div className="text-center mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">Étude de Cas</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Nos chantiers en images
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          {/* Carte projet principale */}
          <div className="mt-10 bg-white rounded-3xl shadow-premium-lg overflow-hidden">
            {/* Header du projet */}
            <div className="bg-black-deep px-6 sm:px-10 py-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-black-deep bg-gold/90 px-3 py-1 rounded-full uppercase tracking-wider">
                  Maçonnerie & Gros Œuvre
                </span>
                <span className="text-xs font-medium text-white-warm/60 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Saint-Pargoire (34)
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white-warm">
                Construction d&apos;une Piscine en Béton 14x4m{" "}
                <span className="text-gradient-gold">à Saint-Pargoire (34)</span>
              </h3>
            </div>

            {/* Contenu du projet */}
            <div className="px-6 sm:px-10 py-10">
              {/* Description technique */}
              <div className="max-w-3xl mb-8">
                <h4 className="text-lg font-bold text-charcoal mb-4">
                  Du gros œuvre à la mise en eau : l&apos;expertise TMT Travaux
                </h4>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <strong className="text-charcoal">Défi technique —</strong> Le projet consistait
                    à réaliser une piscine de <strong>14 mètres de long sur 4 mètres de large</strong>,
                    incluant un escalier intérieur, sur un terrain de l&apos;Hérault nécessitant une
                    préparation de sol rigoureuse.
                  </p>
                  <p>
                    <strong className="text-charcoal">Solution TMT Travaux —</strong> Notre équipe a
                    géré l&apos;intégralité du gros œuvre : décaissement, coulage du radier en béton
                    armé, élévation des murs en blocs béton, installation du système de filtration
                    (skimmers, buses de refoulement, bonde de fond) et finition grise moderne pour
                    une étanchéité parfaite. Le chantier a été mené dans le respect strict des normes
                    de sécurité et de la <strong>Garantie Décennale</strong>.
                  </p>
                </div>
              </div>

              {/* Timeline des étapes avec photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {etapesPiscine.map((etape) => (
                  <div key={etape.step} className="group">
                    {/* Photo avec animation hover */}
                    <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-premium cursor-pointer">
                      <Image
                        src={etape.image}
                        alt={etape.alt}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                      />
                      {/* Overlay gradient qui s'allège au hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                      {/* Numéro d'étape */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full gradient-gold flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-sm font-extrabold text-black-deep">{etape.step}</span>
                      </div>
                      {/* Titre sur la photo */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white font-bold text-lg transition-transform duration-500 group-hover:translate-y-[-4px]">
                          {etape.titre}
                        </p>
                      </div>
                      {/* Bordure dorée qui apparaît au hover */}
                      <div className="absolute inset-0 rounded-2xl ring-0 ring-gold/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-gold/50" />
                    </div>
                    {/* Description sous la photo */}
                    <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {etape.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA du projet */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-charcoal font-bold">Vous avez un projet similaire ?</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    Piscine béton, terrassement, maçonnerie — nous étudions votre projet gratuitement.
                  </p>
                </div>
                <AnimatedButton href="/contact" variant="gold" label="Demander mon étude personnalisée" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étude de Cas : Plateforme Métallique Saint-Pargoire */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-premium-lg overflow-hidden border border-gray-100">
            {/* Header du projet */}
            <div className="bg-black-deep px-6 sm:px-10 py-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-black-deep bg-gold/90 px-3 py-1 rounded-full uppercase tracking-wider">
                  Métallerie & Serrurerie
                </span>
                <span className="text-xs font-medium text-white-warm/60 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Saint-Pargoire (34)
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white-warm">
                Création d&apos;une Plateforme Métallique et Escalier Extérieur sur Mesure{" "}
                <span className="text-gradient-gold">à Saint-Pargoire</span>
              </h3>
            </div>

            {/* Contenu du projet */}
            <div className="px-6 sm:px-10 py-10">
              {/* Description technique */}
              <div className="max-w-3xl mb-8">
                <h4 className="text-lg font-bold text-charcoal mb-4">
                  Optimisation d&apos;accès et aménagement métallique design
                </h4>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <strong className="text-charcoal">Le projet —</strong> Nos clients souhaitaient
                    créer un accès direct depuis l&apos;étage vers le jardin. Nous avons conçu, fabriqué
                    et installé une <strong>plateforme métallique sur mesure</strong> avec un escalier
                    droit sécurisé.
                  </p>
                  <p>
                    <strong className="text-charcoal">Expertise TMT Travaux —</strong> Fabrication
                    d&apos;une plateforme en acier sur mesure, pose d&apos;un escalier droit à marches
                    caillebotis antidérapantes et garde-corps conformes aux normes de sécurité.
                    Travail de soudure et d&apos;ancrage de précision pour garantir la pérennité
                    de l&apos;ouvrage sous <strong>Garantie Décennale</strong>.
                  </p>
                  <p>
                    <strong className="text-charcoal">Résultat —</strong> Un ouvrage moderne, durable
                    et fonctionnel qui valorise l&apos;esthétique du bâtiment tout en offrant un nouvel
                    accès fluide et sécurisé à l&apos;extérieur.
                  </p>
                </div>
                {/* Points techniques */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Conception sur mesure", desc: "Structure en acier adaptée à la façade" },
                    { label: "Sécurité & Normes", desc: "Garde-corps à lisses, caillebotis antidérapant" },
                    { label: "Ancrage & Solidité", desc: "Fixations lourdes et poteaux de soutien" },
                  ].map((point) => (
                    <div key={point.label} className="bg-bg-light rounded-xl p-4">
                      <p className="text-sm font-bold text-charcoal">{point.label}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-1">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photos du projet */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {etapesMetallerie.map((etape) => (
                  <div key={etape.step} className="group">
                    <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-premium cursor-pointer">
                      <Image
                        src={etape.image}
                        alt={etape.alt}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full gradient-gold flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-sm font-extrabold text-black-deep">{etape.step}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white font-bold text-lg transition-transform duration-500 group-hover:translate-y-[-4px]">
                          {etape.titre}
                        </p>
                      </div>
                      <div className="absolute inset-0 rounded-2xl ring-0 ring-gold/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-gold/50" />
                    </div>
                    <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {etape.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA du projet */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-charcoal font-bold">Un projet de métallerie ou de structure métallique ?</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    Plateforme, escalier, garde-corps — nous étudions votre projet gratuitement.
                  </p>
                </div>
                <AnimatedButton href="/contact" variant="gold" label="Demander mon étude personnalisée" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi TMT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">Nos Engagements</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Pourquoi nos clients nous font confiance
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Garantie Décennale",
                desc: "L'ensemble de nos ouvrages — fondations, murs, terrassement, VRD — sont couverts par notre assurance responsabilité civile décennale pendant 10 ans, conformément au Code des assurances.",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Respect des Délais",
                desc: "Un planning détaillé est établi dès le départ. Nous nous engageons sur les dates de livraison et assurons un suivi de chantier rigoureux avec des points d'avancement réguliers.",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Interlocuteur Unique",
                desc: "Un seul chef de chantier vous accompagne du devis à la réception. Il coordonne l'ensemble des corps de métier et reste votre contact privilégié tout au long du projet.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg-light rounded-2xl p-8 shadow-premium">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-black-deep"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Local Content */}
      <section className="py-12 sm:py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Nos réalisations dans l&apos;Hérault : un savoir-faire ancré dans le territoire
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              Depuis plus de 15 ans, <strong>TMT Travaux</strong> réalise des chantiers de{" "}
              <strong>terrassement, maçonnerie et rénovation</strong> dans tout le département de
              l&apos;Hérault (34). Notre portfolio illustre la diversité de nos interventions : des
              fouilles de fondation pour villa neuve à <strong>Montpellier</strong> aux rénovations
              complètes de maisons de village à <strong>Pézenas</strong>, en passant par les
              enrochements en zone de garrigue à <strong>Lodève</strong>.
            </p>
            <p>
              Chaque projet commence par une <strong>visite technique gratuite</strong> qui nous
              permet d&apos;évaluer les contraintes spécifiques du terrain : nature du sol, accès
              chantier, réseaux existants, mitoyenneté. Cette analyse préalable est la clé d&apos;un
              chantier maîtrisé, sans mauvaises surprises pour le client. Nos devis détaillés poste
              par poste sont remis <strong>sous 48 heures</strong>.
            </p>
            <p>
              À <strong>Béziers</strong> et dans le Biterrois, nous intervenons régulièrement sur des
              projets de <strong>viabilisation de terrain</strong> et de création de plateformes pour
              constructions neuves. Dans la vallée de l&apos;Hérault — <strong>Gignac</strong>,{" "}
              <strong>Clermont-l&apos;Hérault</strong>, <strong>Paulhan</strong> — nos équipes
              maîtrisent les contraintes géotechniques locales (sols argilo-calcaires, zones de
              retrait-gonflement des argiles) pour des ouvrages pérennes.
            </p>
            <p>
              Sur le littoral — <strong>Sète</strong>, <strong>Mèze</strong>, <strong>Agde</strong> — nous
              adaptons nos techniques aux spécificités des sols sablonneux et à la proximité de la nappe
              phréatique. Terrasses, murets, clôtures : nos <strong>aménagements extérieurs</strong>{" "}
              valorisent votre propriété tout en résistant aux conditions climatiques méditerranéennes.
            </p>
            <p>
              Tous nos chantiers sont couverts par notre <strong>garantie décennale</strong>. Nous
              travaillons dans le strict respect des <strong>DTU en vigueur</strong> et des normes
              de sécurité applicables. Nos photos de réalisations témoignent de notre engagement
              qualité et de la satisfaction de nos clients dans l&apos;Hérault.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Votre projet mérite le <span className="text-gradient-gold">meilleur</span>
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Confiez-nous votre chantier — visite technique gratuite et devis détaillé sous 48 heures dans tout
            l&apos;Hérault.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander mon devis gratuit sous 48h" className="px-8" />
            <AnimatedButton
              href="tel:+33748157160"
              variant="dark"
              label="07 48 15 71 60"
              className="px-8"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-white-warm/40">
            {[
              "Montpellier",
              "Béziers",
              "Sète",
              "Clermont-l'Hérault",
              "Pézenas",
              "Lodève",
              "Gignac",
              "Paulhan",
              "Mèze",
              "Agde",
            ].map((c) => (
              <span key={c} className="border border-white/10 px-3 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Réalisations TMT Travaux — Chantiers dans l'Hérault (34)",
            description:
              "Portfolio des réalisations de TMT Travaux : terrassement, maçonnerie, rénovation et aménagements extérieurs dans l'Hérault. Photos de chantiers à Montpellier, Béziers et Clermont-l'Hérault.",
            url: "https://tmt-travaux-herault.fr/realisations",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: 2,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "CreativeWork",
                    name: "Construction d'une Piscine en Béton 14x4m à Saint-Pargoire (34)",
                    description:
                      "Réalisation complète d'une piscine en béton de 14x4 mètres : coulage du radier en béton armé, élévation des murs en blocs béton, installation du système de filtration et finition grise moderne. Garantie Décennale.",
                    locationCreated: {
                      "@type": "Place",
                      name: "Saint-Pargoire",
                      address: {
                        "@type": "PostalAddress",
                        addressLocality: "Saint-Pargoire",
                        postalCode: "34230",
                        addressRegion: "Hérault",
                        addressCountry: "FR",
                      },
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "CreativeWork",
                    name: "Création d'une Plateforme Métallique et Escalier Extérieur sur Mesure à Saint-Pargoire",
                    description:
                      "Conception, fabrication et pose d'une plateforme métallique sur mesure avec escalier droit à marches caillebotis antidérapantes et garde-corps sécurisé. Travail de soudure et d'ancrage de précision. Garantie Décennale.",
                    locationCreated: {
                      "@type": "Place",
                      name: "Saint-Pargoire",
                      address: {
                        "@type": "PostalAddress",
                        addressLocality: "Saint-Pargoire",
                        postalCode: "34230",
                        addressRegion: "Hérault",
                        addressCountry: "FR",
                      },
                    },
                  },
                },
              ],
            },
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
              telephone: "+33748157160",
              email: "tmt.travaux34@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lafon de Lacan",
                addressLocality: "Saint-Pargoire",
                postalCode: "34230",
                addressCountry: "FR",
              },
            },
          }),
        }}
      />
    </>
  );
}
