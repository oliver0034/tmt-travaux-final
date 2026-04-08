import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";
import ShapeHeroTitle from "@/components/ui/shape-hero-title";

export const metadata: Metadata = {
  title: "Maçonnerie Générale Hérault (34) | Gros Œuvre & Rénovation | TMT Travaux",
  description:
    "Expert maçon dans le 34. Extension, ouverture de mur porteur et maçonnerie paysagère à Montpellier, Béziers et Sète. Garantie décennale. Devis gratuit.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/maconnerie",
  },
};

const prestations = [
  {
    title: "Gros Œuvre",
    description:
      "Construction de la structure porteuse du bâtiment : fondations, élévation des murs, planchers et charpente béton. L'ensemble de nos ouvrages respecte les règles Eurocodes et les Documents Techniques Unifiés (DTU) applicables.",
    details: ["Fondations béton armé", "Élévation murs porteurs", "Planchers poutrelles-hourdis", "Chaînages et linteaux"],
  },
  {
    title: "Béton Armé",
    description:
      "Réalisation de structures en béton armé : poteaux, poutres, voiles, dalles et escaliers. Ferraillage conforme aux plans du bureau d'études structure, coulage et vibration selon les règles de l'art.",
    details: ["Poteaux et poutres BA", "Voiles béton armé", "Dalles portées", "Escaliers béton"],
  },
  {
    title: "Murs de Clôture",
    description:
      "Construction de murs de clôture en parpaing, pierre ou béton banché. Fondation adaptée à la nature du sol, élévation avec chaînages intermédiaires et couronnement soigné.",
    details: ["Mur parpaing enduit", "Mur en pierre", "Béton banché", "Piliers et couronnement"],
  },
  {
    title: "Taille de Pierre",
    description:
      "Travail de la pierre naturelle locale pour encadrements, arcs, chaînes d'angle et éléments décoratifs. Respect des techniques traditionnelles et du patrimoine architectural héraultais.",
    details: ["Encadrements de baies", "Arcs et voûtes", "Chaînes d'angle", "Restauration pierre"],
  },
  {
    title: "Dallage & Chape",
    description:
      "Réalisation de dallages sur terre-plein (DTU 13.3) et de chapes flottantes ou adhérentes. Mise en œuvre du treillis soudé, joints de dilatation et traitement de surface adaptés à l'usage.",
    details: ["Dallage sur terre-plein", "Chape flottante", "Chape adhérente", "Joints de dilatation"],
  },
  {
    title: "Ouvrages Spéciaux",
    description:
      "Construction de piscines en béton armé, cuves, regards techniques et ouvrages enterrés. Étanchéité intégrée et conformité aux normes spécifiques à chaque type d'ouvrage.",
    details: ["Piscine béton armé", "Cuves et réservoirs", "Regards techniques", "Ouvrages enterrés"],
  },
];

export default function MaconneriePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black-deep">
        <ShapeHeroTitle
          badge="Maçonnerie — Hérault (34)"
          line1="Entreprise de Maçonnerie Générale"
          line2="dans l'Hérault (34)"
          description="Spécialiste de la maçonnerie générale dans l'Hérault, TMT Travaux accompagne les particuliers et les professionnels dans tous leurs projets de construction et de rénovation. Extension de maison, réfection de façade en pierre, travaux de structure lourde — nous intervenons de Montpellier à Béziers en passant par Sète."
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Devis Maçonnerie Gratuit" />
            <AnimatedButton href="/travaux-renovation" variant="dark" label="Voir Travaux & Rénovation" />
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
              Vos travaux de gros œuvre et second œuvre à Montpellier et Béziers
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

      {/* Pourquoi TMT */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Engagements
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Pourquoi confier votre maçonnerie à TMT Travaux Hérault ?
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "La Garantie Décennale",
                desc: "Tous nos ouvrages de maçonnerie sont couverts pendant 10 ans. Fondations, murs porteurs, extensions : votre investissement est protégé conformément à l'article L.241-1 du Code des assurances.",
              },
              {
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "La Propreté du Chantier",
                desc: "Site propre et sécurisé à chaque fin de journée. Protection des abords, évacuation régulière des déchets en filières agréées, remise en état complète à la réception.",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Le Respect des Délais",
                desc: "Planification rigoureuse de chaque phase de chantier. Devis détaillé avec planning prévisionnel remis sous 48 heures. Intervention rapide dans tout l'Hérault.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-premium">
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Maçonnerie générale dans l&apos;Hérault : gros œuvre, second œuvre et maçonnerie paysagère
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              Le <strong>gros œuvre</strong> est la colonne vertébrale de votre habitation. Chez TMT Travaux,
              nous maîtrisons l&apos;ensemble des techniques constructives pour garantir la pérennité
              de votre bâti. Chaque chantier est mené dans le respect strict des normes <strong>RT2020</strong>{" "}
              et des règles de l&apos;art, de Montpellier à Béziers en passant par Sète et Clermont-l&apos;Hérault.
            </p>
            <ul className="space-y-3 mt-4">
              {[
                { label: "Ouverture de murs porteurs", detail: "Pose d'IPN pour créer des espaces de vie ouverts et lumineux en toute sécurité. Note de calcul bureau d'études fournie." },
                { label: "Extensions et surélévations", detail: "Agrandissement de votre surface habitable avec une intégration parfaite à l'existant. Étude structurelle préalable systématique." },
                { label: "Maçonnerie paysagère", detail: "Construction de murets, piliers de portail et terrasses en béton désactivé ou carrelées. Finitions soignées intégrées au paysage." },
                { label: "Rénovation de bâti ancien", detail: "Travail de la pierre et enduits traditionnels pour préserver le charme de l'architecture héraultaise. Mortiers de chaux NHL compatibles." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{item.label}</strong> : {item.detail}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              Le département de l&apos;Hérault est classé en <strong>zone sismique 2 à 3</strong> (arrêté du
              22 octobre 2010). Toutes nos réalisations intègrent les dispositions constructives parasismiques
              requises par l&apos;Eurocode 8 (NF EN 1998) : armatures de chaînage, dimensions minimales des
              sections, ancrage des armatures. Votre sécurité est notre priorité absolue.
            </p>
            <p>
              La construction de <strong>murs de clôture à Montpellier, Béziers ou Sète</strong> est une
              demande récurrente. Nous réalisons vos clôtures en parpaing enduit, béton banché ou pierre
              calcaire locale avec des fondations adaptées à chaque nature de sol. En terrain argileux —
              fréquent dans la plaine héraultaise — nous prenons en compte l&apos;aléa retrait-gonflement
              et dimensionnons les semelles en conséquence.
            </p>
            <p>
              Notre expertise en <strong>taille de pierre et maçonnerie traditionnelle</strong> nous distingue
              dans l&apos;Hérault. Encadrements de baies, arcs, chaînes d&apos;angle, restauration de mas en
              pierres sèches : nous maîtrisons les techniques ancestrales qui font la singularité du bâti
              languedocien. Nos mortiers de chaux naturelle hydraulique (NHL) garantissent la compatibilité
              et la respirabilité des maçonneries anciennes.
            </p>
            <p>
              Pour tout projet de <strong>maçonnerie dans l&apos;Hérault</strong> — à Montpellier, Béziers,
              Sète, Mèze, Agde ou Clermont-l&apos;Hérault —{" "}
              <strong>contactez TMT Travaux pour un devis détaillé sous 48 heures</strong> après visite
              technique gratuite. Tous nos ouvrages sont couverts par une garantie décennale.
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
              Maçonnerie en images
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maçons en chantier de gros œuvre — construction maison individuelle Hérault (34)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Gros œuvre & structure</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travaux de dallage et béton — maçonnerie artisanale à Paulhan, Pézenas, Lodève"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Dallage & béton</p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-premium group">
              <Image
                src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction de maison individuelle et murs en maçonnerie — TMT Travaux Hérault"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Construction & élévation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de <span className="text-gradient-gold">maçonnerie</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Obtenez un devis détaillé sous 48 heures après visite technique.
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
            name: "Maçonnerie Générale Hérault — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
              telephone: "+33748157160",
              email: "tmt.travaux34@gmail.com",
            },
            description:
              "Expert maçon dans le 34. Extension, ouverture de mur porteur, maçonnerie paysagère à Montpellier, Béziers, Sète. Normes RT2020, Eurocodes. Garantie décennale.",
            areaServed: [
              { "@type": "City", name: "Montpellier" },
              { "@type": "City", name: "Béziers" },
              { "@type": "City", name: "Sète" },
              { "@type": "City", name: "Paulhan" },
              { "@type": "City", name: "Clermont-l'Hérault" },
              { "@type": "City", name: "Pézenas" },
              { "@type": "City", name: "Lodève" },
              { "@type": "City", name: "Gignac" },
            ],
            serviceType: "Maçonnerie Générale",
          }),
        }}
      />
    </>
  );
}
