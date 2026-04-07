import type { Metadata } from "next";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Travaux & Maçonnerie à Béziers (34) — TMT Travaux Hérault",
  description:
    "TMT Travaux réalise vos travaux de maçonnerie, terrassement et rénovation à Béziers et dans le Biterrois. Gros œuvre, fondations, extension, VRD. Devis gratuit, garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/travaux-beziers",
  },
  keywords: [
    "travaux Béziers",
    "maçonnerie Béziers",
    "terrassement Béziers",
    "rénovation Béziers 34",
    "extension maison Béziers",
    "entreprise bâtiment Béziers",
    "gros œuvre Biterrois",
  ],
};

const services = [
  {
    title: "Maçonnerie Générale",
    desc: "Gros œuvre, béton armé, murs porteurs, murs de clôture, dallage. Interventions conformes DTU et Eurocodes dans le Biterrois.",
  },
  {
    title: "Terrassement & VRD",
    desc: "Décaissement, fondations, tranchées réseaux, assainissement. Connaissance des sols alluvionnaires de la plaine de l'Hérault.",
  },
  {
    title: "Extension de Bâtiment",
    desc: "Agrandissement par extension latérale, surélévation ou aménagement de combles. Étude structurelle systématique.",
  },
  {
    title: "Rénovation de Façades",
    desc: "Ravalement, enduit chaux ou monocouche, traitement de fissures. Restauration du bâti biterrois en pierre calcaire.",
  },
  {
    title: "Pose d'IPN & Ouvertures",
    desc: "Ouverture de murs porteurs avec profilés HEA/HEB dimensionnés. Note de calcul bureau d'études fournie.",
  },
  {
    title: "Réhabilitation Patrimoniale",
    desc: "Restauration de bâti ancien, rejointoiement chaux, taille de pierre. Respect du patrimoine architectural biterrois.",
  },
];

export default function TravauxBeziersPage() {
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
                Béziers &amp; Biterrois — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Travaux &amp; Maçonnerie{" "}
              <span className="text-gradient-gold">à Béziers (34)</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux, entreprise de maçonnerie et terrassement dans l&apos;Hérault, intervient
              à Béziers et dans tout le Biterrois pour vos projets de construction, rénovation et
              extension. Garantie décennale. Devis gratuit sous 48 heures.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Gratuit à Béziers" />
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
              Nos Interventions à Béziers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Maçonnerie &amp; travaux dans le Biterrois
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
            Entreprise de maçonnerie et terrassement à Béziers
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              Béziers, deuxième ville de l&apos;Hérault, et son arrière-pays biterrois concentrent
              un tissu dense de propriétaires souhaitant rénover, agrandir ou construire. Entre
              les maisons de village des communes viticoles (Murviel-lès-Béziers, Puissalicon,
              Abeilhan) et les pavillons des zones périurbaines (Villeneuve-lès-Béziers,
              Sérignan, Vias), la demande en <strong>maçonnerie générale</strong> et en{" "}
              <strong>rénovation de bâti ancien</strong> est soutenue.
            </p>
            <p>
              TMT Travaux intervient régulièrement dans le <strong>Biterrois</strong> pour des
              chantiers de terrassement, de fondations et de gros œuvre. Notre connaissance des
              sols de la plaine alluviale de l&apos;Hérault et de l&apos;Orb — sols souvent peu portants
              et sensibles aux variations de nappe phréatique — nous permet d&apos;adapter
              systématiquement nos techniques de fondation aux contraintes géotechniques locales.
            </p>
            <p>
              Les <strong>maisons vigneronnes du XIXe siècle</strong>, caractéristiques du
              Biterrois, présentent des spécificités constructives importantes : murs porteurs
              en moellons calcaires, planchers en bois, fondations peu profondes. Leur rénovation
              exige une expertise en maçonnerie traditionnelle, maîtrise des mortiers de chaux
              hydraulique et des techniques de rejointoiement à pierres vues que TMT Travaux a
              développées au fil de nombreux chantiers dans la région.
            </p>
            <p>
              L&apos;<strong>extension de maison à Béziers</strong> et dans les communes voisines
              répond à des règles d&apos;urbanisme qui varient selon les PLU locaux. TMT Travaux
              accompagne ses clients dans la lecture du règlement applicable à leur parcelle et
              réalise les travaux d&apos;extension dans le respect des contraintes d&apos;implantation,
              de hauteur et d&apos;emprise au sol définies par le permis de construire ou la
              déclaration préalable.
            </p>
            <p>
              Pour vos <strong>travaux de maçonnerie à Béziers</strong> — terrassement,
              fondations, gros œuvre, extension ou rénovation — TMT Travaux vous propose une
              visite technique gratuite et un devis détaillé poste par poste sous 48 heures.
              Tous nos ouvrages sont couverts par une <strong>garantie décennale</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de travaux <span className="text-gradient-gold">à Béziers</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Visite technique gratuite et devis détaillé sous 48 heures dans tout le Biterrois.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander un Devis Gratuit" className="px-10" />
            <AnimatedButton href="tel:+33748157160" variant="dark" label="07 48 15 71 60" className="px-10"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white-warm/40">
            {["Béziers", "Villeneuve-lès-Béziers", "Sérignan", "Vias", "Murviel-lès-Béziers", "Abeilhan", "Pézenas", "Agde"].map((c) => (
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
            name: "Travaux & Maçonnerie à Béziers — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
              telephone: "+33748157160",
            },
            description:
              "Maçonnerie, terrassement et rénovation à Béziers et dans le Biterrois. Gros œuvre, fondations, extension de maison. Garantie décennale.",
            areaServed: { "@type": "City", name: "Béziers" },
            serviceType: "Maçonnerie et Travaux",
          }),
        }}
      />
    </>
  );
}
