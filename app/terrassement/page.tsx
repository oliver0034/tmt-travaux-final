import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Terrassement dans l'Hérault (34) — Paulhan, Clermont-l'Hérault, Pézenas",
  description:
    "TMT Travaux réalise vos travaux de terrassement dans l'Hérault : préparation de terrain, nivellement, décaissement, fondations, VRD. Intervention à Paulhan, Clermont-l'Hérault, Pézenas, Lodève, Gignac. Devis gratuit.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/terrassement",
  },
};

const prestations = [
  {
    title: "Préparation de Terrain",
    description:
      "Décapage de la terre végétale, débroussaillage mécanique et mise à niveau du terrain naturel. Chaque intervention débute par une analyse topographique pour garantir une assise stable et homogène.",
    details: ["Décapage terre végétale", "Débroussaillage mécanique", "Analyse topographique", "Évacuation des déblais"],
  },
  {
    title: "Nivellement & Décaissement",
    description:
      "Opérations de terrassement en pleine masse ou en rigole, avec contrôle altimétrique précis. Le nivellement assure la planéité requise pour la réception des fondations ou des dallages.",
    details: ["Terrassement pleine masse", "Terrassement en rigole", "Contrôle altimétrique", "Compactage des fonds de forme"],
  },
  {
    title: "Fondations",
    description:
      "Réalisation de fouilles en tranchée pour semelles filantes ou isolées, conformément aux préconisations de l'étude de sol (G2). Ferraillage et coulage béton selon les normes DTU 13.11 et DTU 13.12.",
    details: ["Semelles filantes", "Semelles isolées", "Longrines béton armé", "Respect DTU 13.11 / 13.12"],
  },
  {
    title: "VRD — Voirie & Réseaux Divers",
    description:
      "Création de tranchées pour le passage des réseaux (eau potable, eaux usées, électricité, télécommunications). Pose de canalisations, regards de visite et raccordements conformes aux exigences des concessionnaires.",
    details: ["Tranchées réseaux", "Pose canalisations", "Regards de visite", "Raccordement concessionnaires"],
  },
  {
    title: "Assainissement",
    description:
      "Installation de systèmes d'assainissement individuel (fosse septique, micro-station) ou raccordement au réseau collectif. Dimensionnement conforme à l'étude de sol et aux préconisations du SPANC.",
    details: ["Fosse septique", "Micro-station", "Raccordement collectif", "Conformité SPANC"],
  },
  {
    title: "Enrochement & Soutènement",
    description:
      "Mise en place d'enrochements paysagers ou de soutènement pour la stabilisation des terrains en pente. Dimensionnement adapté aux contraintes géotechniques du site.",
    details: ["Enrochement paysager", "Murs de soutènement", "Stabilisation de talus", "Gabions"],
  },
];

export default function TerrassementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-black-deep overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent, transparent 50px, rgba(201,162,39,0.08) 50px, rgba(201,162,39,0.08) 51px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                Terrassement — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Terrassement &amp; VRD{" "}
              <span className="text-gradient-gold">dans l&apos;Hérault (34)</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux assure l&apos;ensemble des opérations de terrassement nécessaires à la
              construction ou à l&apos;aménagement de votre terrain. De l&apos;étude préalable au
              compactage final, chaque phase est exécutée avec une précision technique conforme aux
              normes en vigueur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Terrassement Gratuit" />
              <AnimatedButton href="/maconnerie" variant="dark" label="Voir Maçonnerie" />
            </div>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Prestations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Terrassement : de la fouille à la finition
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prestations.map((item) => (
              <div
                key={item.title}
                className="card-3d bg-white border border-gray-100 rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition-all"
              >
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Visite Technique", desc: "Relevé topographique et analyse des contraintes du terrain. Prise en compte de l'étude de sol (G2) si disponible." },
              { step: "02", title: "Chiffrage Détaillé", desc: "Devis poste par poste : terrassement, évacuation, compactage, remblai. Remis sous 48 heures." },
              { step: "03", title: "Exécution", desc: "Mobilisation des engins adaptés (mini-pelle, pelle mécanique, compacteur). Suivi altimétrique tout au long du chantier." },
              { step: "04", title: "Réception", desc: "Contrôle de conformité des niveaux, compacité et portance du sol. Remise du terrain prêt à bâtir." },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-8 shadow-premium">
                <div className="text-4xl font-extrabold text-gold/15 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Local Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Terrassement dans l&apos;Hérault : expertise locale et technique
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              La géologie du département de l&apos;Hérault présente une diversité de sols — calcaires,
              argilo-calcaires, alluvionnaires — qui impose une connaissance approfondie des
              conditions géotechniques locales. TMT Travaux intervient à <strong>Paulhan</strong>,{" "}
              <strong>Clermont-l&apos;Hérault</strong>, <strong>Pézenas</strong>,{" "}
              <strong>Lodève</strong> et <strong>Gignac</strong> avec une maîtrise des
              spécificités de chaque secteur géologique.
            </p>
            <p>
              En zone argileuse — fréquente dans le bassin de l&apos;Hérault — le retrait-gonflement
              des sols constitue un aléa majeur pour la pérennité des ouvrages. Nos opérations de
              terrassement intègrent systématiquement les recommandations issues des études de sol
              (missions G1 à G4) et les prescriptions du Plan de Prévention des Risques (PPR)
              applicables à chaque commune du département.
            </p>
            <p>
              Préparation de terrain pour maison individuelle, <strong>terrassement de piscine</strong>,
              aménagement de terrain constructible, viabilisation de parcelle… Les interventions de
              terrassement dans l&apos;Hérault couvrent un large spectre. TMT Travaux maîtrise chacune
              de ces prestations : de la simple mise à niveau d&apos;un terrain agricole à la réalisation
              complète de fouilles et fondations pour une construction neuve à Paulhan, Lodève ou Gignac.
            </p>
            <p>
              Le terrassement manuel ou mécanisé est adapté aux contraintes d&apos;accès de chaque site.
              Dans les villages médiévaux du centre-héraultais, où les engins de grande taille ne peuvent
              accéder, nous utilisons des <strong>mini-pelles</strong> dont le gabarit réduit permet
              d&apos;intervenir en milieu contraint sans altérer les propriétés voisines.
            </p>
            <p>
              Les travaux de <strong>VRD — Voirie et Réseaux Divers</strong> — constituent un aspect
              crucial de tout projet de construction ou d&apos;aménagement. TMT Travaux réalise la pose
              des canalisations d&apos;eau potable, les tranchées pour réseaux électriques et télécom,
              les branchements d&apos;assainissement et la création de voiries privées. Chaque intervention
              est réalisée en coordination avec les concessionnaires (SDEI, Enedis, Orange) pour
              garantir la conformité des raccordements.
            </p>
            <p>
              La réalisation de <strong>fondations</strong> est une étape déterminante pour la pérennité
              de tout ouvrage. Nos équipes réalisent les fouilles en pleine masse ou en tranchée, le
              ferraillage selon les plans du bureau d&apos;études structure, et le coulage béton
              conformément aux normes DTU 13.11 (semelles filantes) et DTU 13.12 (semelles isolées).
              Une attention particulière est portée à la portance du sol et au respect des cotes
              altimétriques définies par l&apos;architecte ou le maître d&apos;ouvrage.
            </p>
            <p>
              L&apos;assainissement individuel est une problématique récurrente dans les communes rurales
              de l&apos;Hérault. TMT Travaux dimensionne et installe vos systèmes d&apos;assainissement
              non collectif (fosse septique, micro-station d&apos;épuration) en conformité avec les
              préconisations du <strong>SPANC</strong> (Service Public d&apos;Assainissement Non
              Collectif) de votre commune, garantissant la conformité de votre installation lors de
              toute transaction immobilière.
            </p>
            <p>
              Que votre projet concerne la construction d&apos;une maison individuelle, l&apos;aménagement
              d&apos;un terrain viabilisé ou la création d&apos;un accès, notre équipe dispose des engins
              et de l&apos;expertise nécessaires pour mener à bien chaque phase du terrassement dans
              le respect des délais et du budget définis. <strong>Devis gratuit sous 48 heures</strong>{" "}
              après visite technique sur votre terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Réalisations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Terrassement en images
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/6245621/pexels-photo-6245621.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pelle mécanique sur chantier de terrassement à Paulhan, Hérault (34) — TMT Travaux"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Terrassement en pleine masse</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApGB-S-Yi_J6TUvApt4lqZhSICjKe8WzvRwMBXPlB2XSObEcBxsacNoQsf0HhmjWkGqsiK04B_nLo_33uk0HqvE1ZHraouFTdDfNUko71-kk4dQ8nTff0pLS4Ug-uzuz4YNIfLxnPf_QUJaO72oMMA0D3N9BIG05oT5MdwZk6i8JeVKazfXStle_5yeeYgrCQ4HB5CzEUIKPtg4TZHUG4O3E51maBOeNG-DSWBY-2VPkAiyv7OoeImzOCFfF0W9MomnF8zsOqM3Ylb"
                alt="Fouille de fondations et ferraillage béton armé — terrassement maison individuelle Hérault"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Fouille & fondations béton armé</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4-wv2OQyChifeYXD7eI7gfZ7_s5xMUqPa6h3dTHTGPkI7aWoMwNNlnS61aZxlZ-q_lFYPb9mA88ithPe9zKGZaMQlMk8q8mqeLdnB2Op7KOzDZPRm4m3CJ-Ouywufw1BN18Jd_pGCDYd0R_uRs7X7BMKSDSHJ7BwTl92ROe0y9bITn1IYIcqFaqlGCVjjZ6PUCaPPQQesEHZIJWpJdvkcnTatZ2uSjTD6wZcrPSAUOBGzT03Hh_rv4YqFIhI81qBq1rwaRe9rbn58"
                alt="Compactage et nivellement de terrain — préparation de sol artisan terrassier Clermont-l'Hérault"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Nivellement & compactage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de <span className="text-gradient-gold">terrassement</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Contactez TMT Travaux pour une visite technique gratuite et un devis détaillé.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander un Devis" className="px-10" />
            <AnimatedButton
              href="tel:+33748157160"
              variant="dark"
              label="07 48 15 71 60"
              className="px-10"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Terrassement — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
            },
            description:
              "Travaux de terrassement dans l'Hérault : préparation de terrain, nivellement, fondations, VRD, assainissement. Intervention à Paulhan, Clermont-l'Hérault, Pézenas.",
            areaServed: [
              { "@type": "City", name: "Paulhan" },
              { "@type": "City", name: "Clermont-l'Hérault" },
              { "@type": "City", name: "Pézenas" },
              { "@type": "City", name: "Lodève" },
              { "@type": "City", name: "Gignac" },
            ],
            serviceType: "Terrassement",
          }),
        }}
      />
    </>
  );
}
