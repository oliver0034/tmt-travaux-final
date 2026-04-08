import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/ui/animated-button";
import ShapeHeroTitle from "@/components/ui/shape-hero-title";

export const metadata: Metadata = {
  title: "Rénovation Immobilière Hérault (34) | Salle de Bain & Travaux | TMT Travaux",
  description:
    "Spécialiste de la rénovation complète dans l'Hérault. Salle de bain, électricité, plomberie et finitions à Montpellier et Béziers. Devis gratuit et garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/travaux-renovation",
  },
  keywords: [
    "rénovation immobilière Hérault",
    "rénovation salle de bain Montpellier",
    "rénovation intérieure Béziers",
    "travaux rénovation 34",
    "plomberie chauffage Hérault",
    "électricité mise en conformité Hérault",
    "extension maison Hérault",
    "pose IPN mur porteur Hérault",
  ],
};

const secondOeuvre = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Rénovation de Salle de Bain",
    description:
      "Installation de douches à l'italienne, pose de faïence grand format, robinetterie encastrée et étanchéité garantie. Création d'espaces salle de bain modernes et fonctionnels.",
    details: ["Douche à l'italienne", "Faïence & carrelage", "Robinetterie encastrée", "Étanchéité garantie"],
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "Pose de Revêtements",
    description:
      "Carrelage grand format, parquets stratifiés ou massifs, sols souples pour une finition impeccable. Choix des matériaux, pose soignée et résultat premium dans les délais convenus.",
    details: ["Carrelage grand format", "Parquet massif / stratifié", "Sols souples & vinyle", "Finitions soignées"],
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Plâtrerie & Isolation",
    description:
      "Création de cloisons, faux plafonds et isolation thermique pour optimiser votre confort. Doublage des murs, correction thermique et acoustique selon les normes RE2020.",
    details: ["Cloisons placo", "Faux plafonds", "Isolation thermique RE2020", "Correction acoustique"],
  },
  {
    icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
    title: "Rénovation de Cuisine",
    description:
      "Démolition et refonte complète, pose de meubles, plan de travail, crédence et électroménager encastré. Création de cuisines ouvertes avec ouverture de cloison ou pose d'IPN si nécessaire.",
    details: ["Pose meubles cuisine", "Plan de travail", "Crédence & faïence", "Ouverture cloison / IPN"],
  },
  {
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    title: "Extension & Gros Œuvre",
    description:
      "Agrandissement par extension latérale ou surélévation. Ouverture de murs porteurs avec pose d'IPN dimensionnés par bureau d'études. Étude structurelle préalable systématique.",
    details: ["Extension latérale", "Surélévation", "Pose d'IPN / HEA / HEB", "Note de calcul BE"],
  },
  {
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    title: "Réhabilitation Patrimoniale",
    description:
      "Rénovation de mas héraultais et bâti ancien : rejointoiement chaux, confortement structurel, reprise de maçonnerie en pierre. Respect du caractère architectural languedocien.",
    details: ["Reprise maçonnerie pierre", "Rejointoiement chaux NHL", "Confortement structurel", "Mise aux normes"],
  },
];

const installations = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Électricité",
    description: "Mise en conformité des tableaux électriques aux normes NF C 15-100. Installation de prises, interrupteurs, et éclairage LED basse consommation. Domotique et automatismes.",
    details: ["Tableau électrique NF C 15-100", "Prises & éclairage LED", "Domotique", "Mise en conformité"],
  },
  {
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    title: "Plomberie & Chauffage",
    description: "Remplacement de colonnes d'eau, installation de chauffe-eau thermodynamiques et chaudières à condensation. Plancher chauffant hydraulique et radiateurs à inertie.",
    details: ["Chauffe-eau thermodynamique", "Plancher chauffant", "Remplacement colonnes", "Chaudière condensation"],
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Climatisation Réversible",
    description: "Installation de systèmes de climatisation réversible (PAC air/air) pour votre confort été comme hiver. Marques certifiées, installation aux normes, entretien annuel proposé.",
    details: ["PAC air/air réversible", "Multi-split", "Certification RGE", "Entretien annuel"],
  },
  {
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    title: "Menuiseries & Vitrages",
    description: "Remplacement de fenêtres et baies vitrées double ou triple vitrage pour une meilleure performance énergétique (RE2020). PVC, aluminium ou bois selon votre projet.",
    details: ["Double/triple vitrage", "PVC, aluminium, bois", "Volets roulants", "Performance RE2020"],
  },
];

export default function TravauxRenovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black-deep">
        <ShapeHeroTitle
          badge="Rénovation — Hérault (34)"
          line1="Entreprise de Rénovation Immobilière"
          line2="dans l'Hérault (34)"
          description="Vous souhaitez transformer votre habitat ou rénover un bien immobilier dans l'Hérault ? TMT Travaux est votre partenaire unique pour tous vos projets de rénovation intérieure et extérieure. De la réfection complète d'appartement à la modernisation de maisons de village, nous intervenons avec réactivité à Paulhan, Pézenas et sur l'ensemble du département."
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander mon étude personnalisée" />
            <AnimatedButton href="tel:+33748157160" variant="dark" label="07 48 15 71 60"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Clés en main", "RE2020", "NF C 15-100", "Garantie Décennale", "Devis 48h"].map((n) => (
              <span key={n} className="text-xs font-semibold text-gold/80 border border-gold/20 bg-gold/5 px-3 py-1 rounded-full">
                {n}
              </span>
              ))}
            </div>
        </ShapeHeroTitle>
      </section>

      {/* Section 1 : Second Œuvre */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Second Œuvre & Aménagement
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Rénovation intérieure, Salles de bain et Cuisine à Montpellier et Béziers
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Nous redonnons vie à vos espaces de vie grâce à une maîtrise complète des métiers du second
              œuvre — de la salle de bain à la cuisine en passant par les revêtements et l&apos;isolation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondOeuvre.map((item) => (
              <div
                key={item.title}
                className="card-3d bg-white border border-gray-100 rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 : Installations Techniques */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Installations Techniques
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Plomberie, Électricité et Climatisation : une expertise tout-en-un
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Une rénovation réussie repose sur des installations aux normes. TMT Travaux coordonne
              tous les corps d&apos;état techniques pour un résultat clés en main.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {installations.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-premium group hover:shadow-premium-lg transition-all">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 : Gestion de Projet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                Interlocuteur Unique
              </p>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Votre projet de rénovation de A à Z avec TMT Travaux
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Confier vos travaux à TMT Travaux, c&apos;est l&apos;assurance d&apos;un interlocuteur unique
                pour coordonner tous les corps d&apos;état. Nous garantissons la propreté de nos chantiers,
                le respect rigoureux de votre budget et la livraison dans les délais convenus.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Diagnostic & Étude Personnalisée",
                    desc: "Visite technique gratuite, relevé précis et remise d'un devis détaillé poste par poste sous 48 heures. Pas de mauvaise surprise en cours de chantier.",
                  },
                  {
                    title: "Coordination Tous Corps d'État",
                    desc: "Maçonnerie, plomberie, électricité, carrelage, menuiserie — TMT Travaux pilote l'ensemble des intervenants pour une exécution fluide et sans chevauchement.",
                  },
                  {
                    title: "Garantie Décennale & Assurance",
                    desc: "Tous nos ouvrages sont couverts pendant 10 ans. Assurance responsabilité civile décennale conforme à l'article L.241-1 du Code des assurances.",
                  },
                  {
                    title: "Chantier Propre & Sécurisé",
                    desc: "Protection systématique des sols et meubles, bâche de chantier, évacuation quotidienne des déchets. Votre logement reste habitable pendant les travaux.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-black-deep" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Ans d'expérience" },
                { value: "100%", label: "Garantie décennale" },
                { value: "48h", label: "Devis remis" },
                { value: "34", label: "Département couvert" },
              ].map((stat) => (
                <div key={stat.label} className="bg-bg-light rounded-2xl p-8 shadow-premium text-center">
                  <div className="text-3xl font-extrabold text-gradient-gold">{stat.value}</div>
                  <div className="text-sm text-[var(--text-muted)] mt-2">{stat.label}</div>
                </div>
              ))}
              {/* CTA Card */}
              <div className="col-span-2 bg-black-deep rounded-2xl p-8 shadow-premium text-center">
                <p className="text-white-warm/70 text-sm mb-4">Prêt à démarrer votre projet ?</p>
                <AnimatedButton href="/contact" variant="gold" label="Demander mon étude personnalisée" className="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Rénovation immobilière dans l&apos;Hérault : du bâti ancien à la construction moderne
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              L&apos;Hérault concentre un parc immobilier d&apos;une grande diversité : mas en pierre calcaire
              des garrigues à rénover, appartements des centres-villes de <strong>Montpellier</strong> et{" "}
              <strong>Béziers</strong> à moderniser, pavillons des années 80-90 à réhabiliter, maisons
              de village à <strong>Pézenas</strong>, <strong>Clermont-l&apos;Hérault</strong> ou{" "}
              <strong>Paulhan</strong> à transformer. Chaque projet est unique et nécessite une approche
              personnalisée que TMT Travaux développe depuis plus de 10 ans dans le département.
            </p>
            <p>
              La <strong>rénovation de salle de bain à Montpellier et Béziers</strong> est l&apos;une de nos
              prestations les plus demandées. L&apos;installation d&apos;une douche à l&apos;italienne nécessite une
              étanchéité irréprochable (système d&apos;étanchéité sous carrelage) et une évacuation correctement
              dimensionnée. Nous utilisons des systèmes de receveurs extra-plats et des siphons de sol certifiés
              pour une finition moderne et durable. Chaque réalisation est garantie contre les infiltrations.
            </p>
            <p>
              La <strong>mise en conformité électrique</strong> est obligatoire lors de toute vente
              immobilière si le diagnostic révèle des anomalies. Dans de nombreuses maisons héraultaises
              construites avant 1990, les tableaux électriques ne respectent pas la norme{" "}
              <strong>NF C 15-100</strong> : absence de différentiel 30mA, circuits non protégés,
              absence de liaisons équipotentielles dans les salles de bain. TMT Travaux réalise ces
              mises en conformité avec des électriciens qualifiés.
            </p>
            <p>
              Face à la hausse des prix immobiliers dans la métropole de Montpellier, de nombreux
              propriétaires optent pour l&apos;<strong>extension de maison</strong> plutôt que le déménagement.
              TMT Travaux réalise vos extensions latérales et surélévations avec une rigueur structurelle
              irréprochable : étude de sol préalable, dimensionnement des fondations, respect des règles
              parasismiques de la zone 3 et conformité aux règles d&apos;urbanisme (PLU, permis de construire).
            </p>
            <p>
              L&apos;installation d&apos;une <strong>climatisation réversible</strong> dans l&apos;Hérault est devenue
              essentielle face aux étés de plus en plus chauds. Les systèmes PAC air/air de dernière
              génération offrent un COP (Coefficient de Performance) supérieur à 4, soit 4 kWh de
              chaleur ou froid produits pour 1 kWh consommé. TMT Travaux installe des marques certifiées
              avec garantie pièces et main d&apos;œuvre.
            </p>
            <p>
              Pour votre <strong>rénovation immobilière dans l&apos;Hérault</strong> — salle de bain, cuisine,
              extension, mise en conformité ou réhabilitation complète — TMT Travaux vous propose une{" "}
              <strong>étude personnalisée gratuite et un devis détaillé sous 48 heures</strong>.
              Nous intervenons à Montpellier, Béziers, Sète, Pézenas, Clermont-l&apos;Hérault et dans
              l&apos;ensemble du département 34. Garantie décennale sur tous les ouvrages.
            </p>
          </div>

          {/* Maillage interne */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/maconnerie" className="group flex items-center gap-4 bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all border border-gray-100 hover:border-gold/30">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-charcoal text-sm group-hover:text-gold transition-colors">Maçonnerie & Gros Œuvre</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Murs porteurs, béton armé, taille de pierre</p>
              </div>
              <svg className="w-4 h-4 text-gold ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/terrassement" className="group flex items-center gap-4 bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all border border-gray-100 hover:border-gold/30">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-charcoal text-sm group-hover:text-gold transition-colors">Terrassement & VRD</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Fondations, viabilisation, enrochement</p>
              </div>
              <svg className="w-4 h-4 text-gold ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Réalisations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Rénovation en images
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/5691593/pexels-photo-5691593.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rénovation complète salle de bain moderne Montpellier Hérault — douche italienne carrelage"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Rénovation salle de bain</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travaux d'extension et rénovation intérieure maison individuelle Hérault — TMT Travaux"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Extension & aménagement</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Réhabilitation mas en pierre héraultais — rénovation bâti ancien Pézenas Clermont-l'Hérault"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Réhabilitation bâti ancien</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de <span className="text-gradient-gold">rénovation</span> dans l&apos;Hérault ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Étude personnalisée gratuite et devis détaillé sous 48 heures. Interlocuteur unique, chantier clés en main.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander mon étude personnalisée" className="px-8" />
            <AnimatedButton
              href="tel:+33748157160"
              variant="dark"
              label="07 48 15 71 60"
              className="px-8"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-white-warm/40">
            {["Montpellier", "Béziers", "Sète", "Pézenas", "Clermont-l'Hérault", "Paulhan", "Lodève", "Gignac", "Mèze", "Agde"].map((c) => (
              <span key={c} className="border border-white/10 px-3 py-1 rounded-full">{c}</span>
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
            "@type": "Service",
            name: "Rénovation Immobilière Hérault — TMT Travaux",
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
            description:
              "Spécialiste de la rénovation complète dans l'Hérault. Salle de bain, électricité, plomberie et finitions à Montpellier et Béziers. Devis gratuit et garantie décennale.",
            knowsAbout: ["Plomberie", "Électricité", "Rénovation", "Maçonnerie", "Extension de maison", "Isolation thermique", "Climatisation"],
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Hérault",
              containsPlace: [
                { "@type": "City", name: "Montpellier" },
                { "@type": "City", name: "Béziers" },
                { "@type": "City", name: "Sète" },
                { "@type": "City", name: "Pézenas" },
                { "@type": "City", name: "Clermont-l'Hérault" },
                { "@type": "City", name: "Paulhan" },
                { "@type": "City", name: "Lodève" },
                { "@type": "City", name: "Gignac" },
              ],
            },
            serviceType: "Rénovation Immobilière",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Prestations Rénovation TMT Travaux",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation salle de bain", description: "Douche italienne, faïence, robinetterie encastrée, étanchéité" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Électricité mise en conformité", description: "Tableau NF C 15-100, prises, éclairage LED" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plomberie et chauffage", description: "Chauffe-eau thermodynamique, plancher chauffant" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extension de maison", description: "Extension latérale, surélévation, pose IPN" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Climatisation réversible", description: "PAC air/air, multi-split, installation certifiée" } },
              ],
            },
          }),
        }}
      />
    </>
  );
}
