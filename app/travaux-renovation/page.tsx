import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Travaux & Rénovation dans l'Hérault (34) — Extension, IPN, Façades",
  description:
    "TMT Travaux réalise vos travaux de rénovation dans l'Hérault : extension de maison, pose d'IPN, rénovation de façades, aménagement global. Paulhan, Clermont-l'Hérault, Pézenas. Garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/travaux-renovation",
  },
};

const prestations = [
  {
    title: "Extension de Bâti",
    description:
      "Agrandissement de la surface habitable par extension latérale, surélévation ou aménagement de combles. Chaque projet fait l'objet d'une étude structurelle préalable pour vérifier la capacité portante des fondations et murs existants.",
    details: ["Extension latérale", "Surélévation", "Aménagement de combles", "Étude structurelle préalable"],
  },
  {
    title: "Pose d'IPN & Ouverture de Murs",
    description:
      "Création d'ouvertures dans les murs porteurs avec pose de profilés métalliques (IPN, HEA, HEB) dimensionnés par un bureau d'études structure. Étaiement provisoire, découpe, pose et scellement réalisés selon les règles de l'art.",
    details: ["IPN / HEA / HEB", "Ouverture mur porteur", "Étaiement provisoire", "Note de calcul BE"],
  },
  {
    title: "Rénovation de Façades",
    description:
      "Ravalement, enduit traditionnel à la chaux ou enduit monocouche. Traitement des fissures structurelles ou de retrait, reprise de joints et nettoyage haute pression. Intervention conforme au DTU 26.1.",
    details: ["Ravalement façade", "Enduit chaux / monocouche", "Traitement fissures", "Nettoyage haute pression"],
  },
  {
    title: "Aménagement Global",
    description:
      "Coordination de l'ensemble des corps d'état pour vos projets d'aménagement intérieur et extérieur : cloisonnement, création de pièces, ouvertures, reprises structurelles et finitions.",
    details: ["Cloisonnement intérieur", "Création de pièces", "Reprises structurelles", "Coordination corps d'état"],
  },
  {
    title: "Démolition & Déconstruction",
    description:
      "Démolition sélective ou totale de structures existantes. Gestion des déchets de chantier selon la réglementation en vigueur (tri, évacuation en filières agréées). Désamiantage confié à des opérateurs certifiés si nécessaire.",
    details: ["Démolition sélective", "Démolition totale", "Gestion déchets chantier", "Évacuation filières agréées"],
  },
  {
    title: "Réhabilitation Patrimoniale",
    description:
      "Rénovation de bâtis anciens en pierre : reprise de maçonnerie, rejointoiement à la chaux, confortement structurel. Respect du caractère architectural du patrimoine héraultais tout en assurant la mise aux normes.",
    details: ["Reprise maçonnerie ancienne", "Rejointoiement chaux", "Confortement structurel", "Mise aux normes"],
  },
];

export default function TravauxRenovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-black-deep overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(60deg, transparent, transparent 45px, rgba(201,162,39,0.06) 45px, rgba(201,162,39,0.06) 46px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                Travaux & Rénovation — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Travaux &{" "}
              <span className="text-gradient-gold">Rénovation</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux prend en charge vos projets de rénovation et d&apos;aménagement dans
              l&apos;Hérault. Extension, pose d&apos;IPN, réfection de façades : chaque
              intervention est précédée d&apos;une analyse structurelle garantissant la pérennité de
              l&apos;ouvrage.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Rénovation Gratuit" />
              <AnimatedButton href="/terrassement" variant="dark" label="Voir Terrassement" />
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
              Rénovation & aménagement : une approche globale
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

      {/* Pourquoi rénover */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                Expertise
              </p>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Pourquoi confier vos travaux à TMT ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Diagnostic structurel préalable",
                    desc: "Avant toute intervention, un relevé de l'existant est réalisé pour identifier les éléments porteurs, les pathologies éventuelles et les contraintes techniques du bâti.",
                  },
                  {
                    title: "Coordination maîtrisée",
                    desc: "TMT Travaux assure la coordination des différents corps de métier nécessaires à votre projet : maçonnerie, charpente, couverture, VRD.",
                  },
                  {
                    title: "Respect des normes",
                    desc: "Chaque ouvrage est exécuté conformément aux DTU, Eurocodes et réglementations thermiques en vigueur. Garantie décennale sur tous nos travaux.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center shrink-0 mt-1">
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

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Années d'expérience" },
                { value: "100%", label: "Garantie décennale" },
                { value: "48h", label: "Devis sous 48h" },
                { value: "34", label: "Département couvert" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-8 shadow-premium text-center">
                  <div className="text-3xl font-extrabold text-gradient-gold">{stat.value}</div>
                  <div className="text-sm text-[var(--text-muted)] mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Local Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Rénovation dans l&apos;Hérault : préserver et transformer
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)]">
            <p>
              L&apos;Hérault possède un patrimoine bâti riche et diversifié : mas en pierre calcaire,
              maisons de village médiévales, bâtisses vigneronnes du XIXe siècle. La rénovation de
              ces édifices exige une connaissance approfondie des techniques constructives anciennes
              combinée à la maîtrise des normes actuelles.
            </p>
            <p>
              TMT Travaux intervient à <strong>Paulhan</strong>, <strong>Clermont-l&apos;Hérault</strong>,{" "}
              <strong>Pézenas</strong>, <strong>Lodève</strong> et <strong>Gignac</strong> pour
              tous vos projets de rénovation. Que votre bâtiment nécessite une extension, la création
              d&apos;ouvertures avec pose d&apos;IPN, un ravalement de façade ou une réhabilitation
              complète, notre équipe assure une exécution rigoureuse de chaque phase du chantier.
            </p>
            <p>
              La pose d&apos;IPN pour l&apos;ouverture de murs porteurs constitue une intervention
              structurelle critique. Elle nécessite impérativement une note de calcul établie par un
              bureau d&apos;études structure, un étaiement provisoire conforme et une mise en œuvre par
              des professionnels qualifiés. TMT Travaux garantit le respect de cette chaîne de
              compétences sur chaque chantier.
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
              Travaux & rénovation en images
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/5691593/pexels-photo-5691593.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pose d'enduit et finition murale intérieure — travaux de rénovation Hérault (34)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Enduit & finition murale</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chantier de rénovation intérieure — aménagement et cloisonnement Clermont-l'Hérault"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Rénovation intérieure</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rénovation et extension de maison individuelle — TMT Travaux, artisan Hérault"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Extension & rénovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de <span className="text-gradient-gold">rénovation</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            De l&apos;étude technique au chantier terminé, TMT Travaux vous accompagne.
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

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Travaux & Rénovation — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
            },
            description:
              "Travaux de rénovation dans l'Hérault : extension, pose d'IPN, rénovation de façades, aménagement global. Garantie décennale.",
            areaServed: [
              { "@type": "City", name: "Paulhan" },
              { "@type": "City", name: "Clermont-l'Hérault" },
              { "@type": "City", name: "Pézenas" },
              { "@type": "City", name: "Lodève" },
              { "@type": "City", name: "Gignac" },
            ],
            serviceType: "Travaux et Rénovation",
          }),
        }}
      />
    </>
  );
}
