import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";
import ShapeHeroTitle from "@/components/ui/shape-hero-title";

export const metadata: Metadata = {
  title: "Terrassement & VRD Hérault (34) | Viabilisation & Enrochement | TMT Travaux",
  description:
    "Expert en terrassement et VRD dans l'Hérault. Fouilles, viabilisation et enrochement à Montpellier, Béziers et Clermont-l'Hérault. Devis gratuit sous 48h.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/terrassement",
  },
  keywords: [
    "terrassement Hérault",
    "VRD Montpellier",
    "terrassement Béziers",
    "viabilisation Hérault 34",
    "fouilles fondations Clermont-l'Hérault",
    "enrochement soutènement Hérault",
    "entreprise terrassement 34",
  ],
};

const prestations = [
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Terrassement de Masse & Fouilles",
    description:
      "Tranchées et rigoles pour fondations et semelles filantes. Terrassement en pleine masse ou localisé conformément aux DTU 11.1 et DTU 12. Contrôle altimétrique tout au long du chantier.",
    details: ["Semelles filantes DTU 13.11", "Fouilles isolées DTU 13.12", "Contrôle altimétrique", "Évacuation des déblais"],
  },
  {
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    title: "Viabilisation & VRD",
    description:
      "Raccordements techniques complets : eau potable, électricité, télécoms, assainissement. Coordination avec les concessionnaires (SDEI, Enedis, Orange) pour des branchements conformes aux exigences du réseau public.",
    details: ["Réseau eau potable", "Électricité & télécoms", "Assainissement collectif", "Coordination concessionnaires"],
  },
  {
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Décaissement & Nivellement",
    description:
      "Préparation de plateformes pour villas, piscines et aménagements extérieurs. Gestion des pentes pluviales, compactage des fonds de forme et réglage fin pour réception de dallage ou d'enrobé.",
    details: ["Terrassement piscine", "Plateforme villa", "Gestion des pentes pluviales", "Compactage fonds de forme"],
  },
  {
    icon: "M3 21h18M9 21V9l-3 3V21M15 21V9l3 3V21M12 21V3l-3 3v15M12 3l3 3v15",
    title: "Enrochement & Soutènement",
    description:
      "Pose de blocs naturels pour la retenue de terre et l'esthétique paysagère. Dimensionnement adapté aux contraintes géotechniques : enrochements calcaires locaux, gabions métalliques ou murs de soutènement en béton.",
    details: ["Blocs calcaires locaux", "Gabions métalliques", "Murs de soutènement", "Stabilisation de talus"],
  },
  {
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Assainissement Non Collectif",
    description:
      "Dimensionnement et installation de systèmes d'assainissement individuel conformes aux préconisations du SPANC de votre commune. Fosse septique toutes eaux, micro-station, filtre à sable.",
    details: ["Fosse septique", "Micro-station épuration", "Filtre à sable vertical", "Conformité SPANC"],
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Mini-Pelle & Accès Difficiles",
    description:
      "Interventions en milieu contraint avec mini-pelles à gabarit réduit. Villages médiévaux du centre-héraultais, jardins sans accès chariot, terrains en pente : nous adaptons notre matériel à chaque configuration.",
    details: ["Mini-pelle 0,8 à 3T", "Accès jardin étroit", "Villages médiévaux", "Terrain en pente"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Visite Technique Gratuite",
    desc: "Relevé topographique du terrain, analyse des contraintes d'accès et prise en compte de l'étude de sol (mission G2 si disponible). Identification des réseaux existants.",
  },
  {
    step: "02",
    title: "Étude & Devis 48h",
    desc: "Chiffrage détaillé poste par poste : terrassement, évacuation des déblais, compactage, remblai, VRD. Devis transparent remis sous 48 heures.",
  },
  {
    step: "03",
    title: "Exécution Maîtrisée",
    desc: "Mobilisation des engins adaptés (mini-pelle, pelle mécanique, compacteur, camion benne). Suivi altimétrique continu et coordination des intervenants.",
  },
  {
    step: "04",
    title: "Réception & Livraison",
    desc: "Contrôle de conformité des niveaux, compacité et portance du sol. Évacuation des déchets vers centres de tri agréés du 34. Terrain livré propre et prêt à bâtir.",
  },
];

export default function TerrassementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black-deep">
        <ShapeHeroTitle
          badge="Terrassement & VRD — Hérault (34)"
          line1="Terrassement, VRD & Aménagement de Terrain"
          line2="dans l'Hérault (34)"
          description="Le terrassement est l'étape cruciale qui garantit la stabilité et la pérennité de tout ouvrage de bâtiment. Spécialiste du terrassement dans l'Hérault, TMT Travaux accompagne les projets de construction neuve, d'extension et d'aménagement. De Paulhan à Gignac, nous maîtrisons les contraintes géologiques locales pour une préparation de sol irréprochable."
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Devis Terrassement Gratuit" />
            <AnimatedButton href="tel:+33748157160" variant="dark" label="07 48 15 71 60"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["DTU 11.1", "DTU 12", "DTU 13.11", "DTU 13.12", "Garantie Décennale"].map((n) => (
              <span key={n} className="text-xs font-semibold text-gold/80 border border-gold/20 bg-gold/5 px-3 py-1 rounded-full">
                {n}
              </span>
            ))}
          </div>
        </ShapeHeroTitle>
      </section>

      {/* Prestations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Prestations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Travaux de terrassement de précision à Montpellier, Béziers et Clermont-l&apos;Hérault
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Nos interventions couvrent l&apos;intégralité du cycle de préparation de terrain,
              dans le strict respect des DTU 11.1 et DTU 12 en vigueur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prestations.map((item) => (
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

      {/* Processus */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Méthodologie
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Notre processus d&apos;intervention
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-8 shadow-premium">
                <div className="text-4xl font-extrabold text-gold/15 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi TMT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Garanties
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Pourquoi confier votre terrassement à TMT Travaux ?
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                title: "Étude de Sol Préalable",
                desc: "Analyse des points de niveau et des contraintes géotechniques pour un terrassement optimisé. Prise en compte des rapports G1 à G4 et des zonages PPR (retrait-gonflement des argiles) du département.",
              },
              {
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
                title: "Gestion Responsable des Déchets",
                desc: "Évacuation des gravats et déblais vers des centres de tri agréés du 34. Tri sélectif des matériaux sur chantier. Aucun dépôt sauvage — respect strict de la réglementation environnementale.",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Garantie Décennale",
                desc: "Vos ouvrages de VRD et de terrassement (fondations, soutènements, réseaux) sont protégés pendant 10 ans par notre assurance responsabilité civile décennale, conformément à l'article L.241-1 du Code des assurances.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg-light rounded-2xl p-8 shadow-premium">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <section className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Terrassement dans l&apos;Hérault : expertise géologique locale et maîtrise technique
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              La géologie du département de l&apos;Hérault présente une diversité de sols — calcaires,
              argilo-calcaires, alluvionnaires, lagunaires — qui impose une connaissance approfondie des
              conditions géotechniques locales. TMT Travaux intervient à <strong>Montpellier</strong>,{" "}
              <strong>Béziers</strong>, <strong>Clermont-l&apos;Hérault</strong>, <strong>Pézenas</strong>,{" "}
              <strong>Sète</strong> et <strong>Gignac</strong> avec une maîtrise des spécificités de chaque
              secteur géologique. Nos interventions de terrassement respectent strictement les{" "}
              <strong>DTU 11.1</strong> (sondages et reconnaissance des sols) et <strong>DTU 12</strong>{" "}
              (terrassement pour bâtiment).
            </p>
            <p>
              En zone argileuse — fréquente dans la plaine de l&apos;Hérault et du Biterrois — le{" "}
              <strong>retrait-gonflement des argiles</strong> constitue un aléa majeur pour la pérennité
              des ouvrages. Nos opérations de terrassement intègrent systématiquement les recommandations
              issues des études de sol (missions G1 à G4) et les prescriptions du PPR applicable à chaque
              commune. Dans les zones classées en aléa fort, nous préconisons des fondations profondes
              sur puits ou micropieux.
            </p>
            <p>
              La <strong>viabilisation de terrain</strong> est une étape indispensable avant toute
              construction. TMT Travaux coordonne l&apos;ensemble des raccordements aux réseaux publics :
              branchement eau potable (SDEI), raccordement électrique (Enedis), passage télécoms (Orange /
              opérateurs fibre), assainissement collectif ou installation d&apos;un système non collectif
              conforme aux exigences du <strong>SPANC</strong>. Chaque tranchée est réalisée aux profondeurs
              réglementaires et avec les grillages avertisseurs de couleur correspondant au réseau.
            </p>
            <p>
              Le <strong>terrassement de piscine</strong> à Montpellier, Béziers ou dans le Bassin de Thau
              requiert une attention particulière à la nappe phréatique, parfois très superficielle dans
              les zones littorales. TMT Travaux adapte ses techniques en conséquence : blindage de fouille
              si nécessaire, batardeau, et dimensionnement du radier en tenant compte de la poussée
              hydrostatique.
            </p>
            <p>
              L&apos;<strong>enrochement et le soutènement</strong> sont des solutions esthétiques et durables
              pour les terrains en pente, nombreux dans les garrigues et les piémonts héraultais
              (Lodève, Saint-Guilhem-le-Désert, Pic Saint-Loup). Les blocs calcaires locaux s&apos;intègrent
              naturellement au paysage méditerranéen tout en assurant une retenue de terre efficace
              sur le long terme.
            </p>
            <p>
              Pour vos <strong>travaux de terrassement dans l&apos;Hérault</strong> — préparation de terrain,
              fouilles, VRD, assainissement, enrochement — TMT Travaux vous propose une <strong>visite
              technique gratuite et un devis détaillé sous 48 heures</strong>. Garantie décennale sur
              l&apos;ensemble des ouvrages réalisés.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Réalisations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Terrassement &amp; VRD en images
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/6245621/pexels-photo-6245621.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engin de terrassement pour fondations maison individuelle Hérault — TMT Travaux"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Terrassement & fouilles</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pose de canalisations VRD et raccordement réseau assainissement Hérault (34)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">VRD & réseaux</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enrochement et soutènement de terrain en pente — aménagement paysager Hérault"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Enrochement & soutènement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de <span className="text-gradient-gold">terrassement</span> dans l&apos;Hérault ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Visite technique gratuite et devis détaillé sous 48 heures — intervention sur tout le département 34.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander mon devis gratuit sous 48h" className="px-8" />
            <AnimatedButton
              href="tel:+33748157160"
              variant="dark"
              label="07 48 15 71 60"
              className="px-8"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-white-warm/40">
            {["Montpellier", "Béziers", "Sète", "Clermont-l'Hérault", "Pézenas", "Lodève", "Gignac", "Paulhan", "Mèze", "Agde"].map((c) => (
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
            name: "Terrassement & VRD dans l'Hérault — TMT Travaux",
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
              "Expert en terrassement et VRD dans l'Hérault. Fouilles, viabilisation et enrochement à Montpellier, Béziers et Clermont-l'Hérault. Normes DTU 11.1 et DTU 12. Garantie décennale.",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Hérault",
              containsPlace: [
                { "@type": "City", name: "Montpellier" },
                { "@type": "City", name: "Béziers" },
                { "@type": "City", name: "Sète" },
                { "@type": "City", name: "Clermont-l'Hérault" },
                { "@type": "City", name: "Pézenas" },
                { "@type": "City", name: "Lodève" },
                { "@type": "City", name: "Gignac" },
                { "@type": "City", name: "Paulhan" },
              ],
            },
            serviceType: "Terrassement et VRD",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Prestations Terrassement TMT Travaux",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terrassement de masse et fouilles", description: "Tranchées et rigoles pour fondations et semelles filantes — DTU 11.1 et DTU 12" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Viabilisation et VRD", description: "Raccordements eau, électricité, télécoms, assainissement" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enrochement et soutènement", description: "Pose de blocs naturels pour retenue de terre et esthétique paysagère" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assainissement non collectif", description: "Fosse septique, micro-station — conformité SPANC" } },
              ],
            },
          }),
        }}
      />
    </>
  );
}
