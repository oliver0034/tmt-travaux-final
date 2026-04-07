import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Maçonnerie dans l'Hérault (34) — Gros Œuvre, Béton Armé, Pierre",
  description:
    "TMT Travaux : maçonnerie générale et gros œuvre dans l'Hérault (34). Béton armé, murs porteurs, murs de clôture, taille de pierre. Intervention à Paulhan, Clermont-l'Hérault, Pézenas, Lodève. Garantie décennale.",
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
      <section className="relative py-24 bg-black-deep overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(139,139,139,0.08) 40px, rgba(139,139,139,0.08) 41px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                Maçonnerie — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Maçonnerie &{" "}
              <span className="text-gradient-gold">Gros Œuvre</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux exécute l&apos;ensemble des travaux de maçonnerie nécessaires à la
              construction et à la rénovation de bâtiments dans l&apos;Hérault. Du béton armé
              structurel à la taille de pierre traditionnelle, chaque ouvrage est réalisé dans le
              respect des normes Eurocodes et DTU.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Maçonnerie Gratuit" />
              <AnimatedButton href="/travaux-renovation" variant="dark" label="Voir Travaux & Rénovation" />
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
              Maçonnerie : du gros œuvre à la finition
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

      {/* Matériaux */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Matériaux & Techniques
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Une maîtrise technique complète
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Parpaing & Brique",
                desc: "Maçonnerie d'élévation en blocs béton (B40, B60, B80) ou briques terre cuite. Choix du matériau adapté aux exigences thermiques et structurelles du projet.",
              },
              {
                title: "Pierre Naturelle",
                desc: "Mise en œuvre de la pierre calcaire locale, taillée ou éclatée. Mortiers de chaux formulés pour assurer la compatibilité avec les maçonneries anciennes.",
              },
              {
                title: "Béton Banché",
                desc: "Coffrage et coulage de murs en béton banché pour structures porteuses, murs de soutènement ou clôtures. Finition brute, lissée ou désactivée selon le projet.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-premium">
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
            Maçonnerie dans l&apos;Hérault : un savoir-faire structurel
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)]">
            <p>
              Le patrimoine bâti de l&apos;Hérault — des mas en pierre des garrigues aux constructions
              contemporaines — requiert une double compétence : la maîtrise des techniques modernes
              (béton armé, Eurocodes) et la connaissance des méthodes traditionnelles (maçonnerie de
              pierre, mortier de chaux).
            </p>
            <p>
              TMT Travaux intervient à <strong>Paulhan</strong>, <strong>Clermont-l&apos;Hérault</strong>,{" "}
              <strong>Pézenas</strong>, <strong>Lodève</strong> et <strong>Gignac</strong> pour tous
              travaux de maçonnerie : construction neuve, extension, surélévation ou réhabilitation.
              L&apos;entreprise est couverte par une <strong>assurance décennale</strong> garantissant la
              solidité des ouvrages réalisés.
            </p>
            <p>
              En zone sismique — le département de l&apos;Hérault est classé en zone 2 (sismicité
              faible) à 3 (sismicité modérée) selon l&apos;arrêté du 22 octobre 2010 — nos
              réalisations intègrent les dispositions constructives parasismiques requises par les
              règles Eurocode 8 (NF EN 1998).
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
            name: "Maçonnerie — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
            },
            description:
              "Maçonnerie générale et gros œuvre dans l'Hérault : béton armé, murs porteurs, murs de clôture, taille de pierre. Garantie décennale.",
            areaServed: [
              { "@type": "City", name: "Paulhan" },
              { "@type": "City", name: "Clermont-l'Hérault" },
              { "@type": "City", name: "Pézenas" },
              { "@type": "City", name: "Lodève" },
              { "@type": "City", name: "Gignac" },
            ],
            serviceType: "Maçonnerie",
          }),
        }}
      />
    </>
  );
}
