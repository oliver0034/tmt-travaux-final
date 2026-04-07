import type { Metadata } from "next";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Travaux & Maçonnerie à Agde (34) — TMT Travaux Hérault",
  description:
    "TMT Travaux réalise vos travaux de maçonnerie, terrassement et rénovation à Agde, Cap d'Agde et Vias. Gros œuvre, fondations, extension, rénovation bâti volcanique. Devis gratuit, garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/travaux-agde",
  },
  keywords: [
    "travaux Agde",
    "maçonnerie Agde",
    "terrassement Agde",
    "rénovation Agde 34",
    "extension maison Cap d'Agde",
    "entreprise bâtiment Agde",
    "gros œuvre Agde",
    "maçonnerie Vias",
  ],
};

const services = [
  {
    title: "Maçonnerie Générale",
    desc: "Gros œuvre, béton armé, murs porteurs, murs de clôture, dallage. Maîtrise des matériaux locaux dont le basalte volcanique caractéristique d'Agde.",
  },
  {
    title: "Terrassement & Fondations",
    desc: "Décaissement, fouilles, fondations adaptées aux sols sableux du littoral agathois. Connaissance des contraintes géotechniques des zones dunaires.",
  },
  {
    title: "Extension de Maison",
    desc: "Agrandissement par extension latérale ou surélévation. Étude structurelle préalable, respect des PLU locaux et de la loi Littoral.",
  },
  {
    title: "Rénovation de Façades",
    desc: "Ravalement, enduit sur maçonnerie basaltique ou calcaire, traitement des fissures. Techniques adaptées aux matériaux volcaniques d'Agde.",
  },
  {
    title: "Pose d'IPN & Ouvertures",
    desc: "Ouverture de murs porteurs avec profilés HEA/HEB dimensionnés. Note de calcul bureau d'études fournie.",
  },
  {
    title: "VRD — Voirie & Réseaux",
    desc: "Tranchées, canalisations, regards, raccordements réseaux publics. Gestion des contraintes littorales et des zones de protection hydraulique.",
  },
];

export default function TravauxAgdePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-black-deep overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,162,39,0.08) 40px, rgba(201,162,39,0.08) 41px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                Agde, Cap d&apos;Agde & Vias — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Travaux &amp; Maçonnerie{" "}
              <span className="text-gradient-gold">à Agde (34)</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux, entreprise de maçonnerie et terrassement dans l&apos;Hérault, intervient
              à Agde, au Cap d&apos;Agde et à Vias pour vos projets de construction, rénovation et
              extension. Garantie décennale. Devis gratuit sous 48 heures.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Gratuit à Agde" />
              <AnimatedButton href="tel:+33748157160" variant="dark" label="07 48 15 71 60" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Interventions à Agde
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Maçonnerie &amp; travaux dans le pays agathois
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-premium">
                <h3 className="text-lg font-bold text-charcoal mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu SEO */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Entreprise de maçonnerie et terrassement à Agde
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              Agde est une ville d&apos;exception dans le paysage héraultais, construite en grande partie
              sur une coulée volcanique basaltique vieille de plusieurs millions d&apos;années. Ce matériau
              sombre et dur, qui donne à la vieille ville son caractère si particulier, constitue
              une spécificité constructive que TMT Travaux connaît parfaitement. La <strong>maçonnerie
              en basalte</strong> requiert des outils et des techniques adaptés, notamment pour
              le forage, la taille et l&apos;assemblage de ces pierres aux arêtes vives.
            </p>
            <p>
              Le territoire de la commune d&apos;Agde est d&apos;une grande diversité géologique et
              géographique : le vieux centre-ville sur socle volcanique, les quartiers résidentiels
              sur terrains alluviaux de l&apos;Hérault, les zones sableuses dunaires du Cap d&apos;Agde
              et les plaines agricoles de Vias. Chacun de ces secteurs présente des caractéristiques
              de sol différentes qui influencent directement les techniques de <strong>fondation
              et de terrassement</strong>. TMT Travaux réalise une étude préalable systématique
              pour adapter les solutions à chaque configuration.
            </p>
            <p>
              La <strong>rénovation de façades à Agde</strong> sur les maisons en basalte nécessite
              des compétences particulières. Le basalte, imperméable et dur, ne se traite pas comme
              la pierre calcaire. Les enduits, les reprises de joints et les traitements d&apos;imperméabilisation
              doivent être sélectionnés pour leur compatibilité avec ce support minéral spécifique.
              TMT Travaux maîtrise les techniques de jointoiement et de rejointoiement adaptées
              au bâti agathois, qu&apos;il soit en basalte ou en calcaire.
            </p>
            <p>
              Les <strong>extensions de maison au Cap d&apos;Agde et à Vias</strong> sont soumises
              à des contraintes réglementaires fortes : loi Littoral pour les parcelles situées
              à moins de 2 km du rivage, PPRI de l&apos;Hérault pour les zones inondables, PLU
              communal pour l&apos;ensemble du territoire. TMT Travaux vérifie systématiquement la
              faisabilité réglementaire de chaque projet d&apos;extension avant de s&apos;engager,
              et accompagne ses clients dans les démarches de permis de construire.
            </p>
            <p>
              Le <strong>terrassement dans les zones sableuses</strong> du Cap d&apos;Agde et de Vias
              requiert une attention particulière à la stabilité des fouilles et à la tenue des
              parois de tranchée en terrain meuble. Nos équipes utilisent des techniques de
              blindage et d&apos;étaiement adaptées, conformément aux règles de sécurité des chantiers
              de terrassement (décret du 8 janvier 1965, normes NF P 94-500).
            </p>
            <p>
              Pour vos <strong>travaux de maçonnerie à Agde</strong>, au Cap d&apos;Agde ou à Vias —
              terrassement, fondations, gros œuvre, rénovation de façade ou extension — TMT Travaux
              vous propose une visite technique gratuite et un devis détaillé poste par poste sous
              48 heures. Tous nos ouvrages sont couverts par une <strong>garantie décennale</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de travaux <span className="text-gradient-gold">à Agde</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Visite technique gratuite et devis détaillé sous 48 heures dans tout le pays agathois.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander un Devis Gratuit" className="px-10" />
            <AnimatedButton
              href="tel:+33748157160"
              variant="dark"
              label="07 48 15 71 60"
              className="px-10"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white-warm/40">
            {["Agde", "Cap d'Agde", "Vias", "Portiragnes", "Bessan", "Florensac", "Pézenas", "Marseillan"].map((c) => (
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
            name: "Travaux & Maçonnerie à Agde — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
              telephone: "+33748157160",
            },
            description:
              "Maçonnerie, terrassement et rénovation à Agde, Cap d'Agde et Vias. Maçonnerie basaltique, fondations, extension de maison. Garantie décennale.",
            areaServed: { "@type": "City", name: "Agde" },
            serviceType: "Maçonnerie et Travaux",
          }),
        }}
      />
    </>
  );
}
