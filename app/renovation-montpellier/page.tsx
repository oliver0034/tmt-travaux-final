import type { Metadata } from "next";
import Link from "next/link";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Rénovation & Maçonnerie à Montpellier (34) — TMT Travaux",
  description:
    "TMT Travaux intervient à Montpellier et sa métropole pour vos travaux de rénovation, maçonnerie et terrassement. Extension de maison, pose d'IPN, gros œuvre. Devis gratuit, garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/renovation-montpellier",
  },
  keywords: [
    "rénovation Montpellier",
    "maçonnerie Montpellier",
    "terrassement Montpellier",
    "extension maison Montpellier",
    "travaux Montpellier 34",
    "gros œuvre Montpellier",
    "entreprise bâtiment Montpellier",
  ],
};

const services = [
  {
    title: "Terrassement & Fondations",
    desc: "Préparation de terrain, fouilles, fondations pour constructions neuves ou extensions dans la métropole montpelliéraine.",
  },
  {
    title: "Maçonnerie & Gros Œuvre",
    desc: "Élévation de murs porteurs, béton armé, murs de clôture, dallage. Conformité DTU et Eurocodes.",
  },
  {
    title: "Extension de Maison",
    desc: "Agrandissement par extension latérale ou surélévation. Étude structurelle préalable sur chaque projet.",
  },
  {
    title: "Pose d'IPN & Ouvertures",
    desc: "Création d'ouvertures dans murs porteurs avec profilés métalliques dimensionnés par bureau d'études.",
  },
  {
    title: "Rénovation de Façades",
    desc: "Ravalement, enduit chaux ou monocouche, traitement des fissures. Conformité DTU 26.1.",
  },
  {
    title: "VRD — Voirie & Réseaux",
    desc: "Tranchées, canalisations, regards de visite, raccordements aux réseaux publics.",
  },
];

export default function RenovationMontpellierPage() {
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
                Montpellier & Métropole — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Rénovation &amp; Maçonnerie{" "}
              <span className="text-gradient-gold">à Montpellier (34)</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux intervient à Montpellier et dans toute sa métropole pour vos travaux
              de rénovation, maçonnerie, terrassement et extension. Entreprise locale de l&apos;Hérault,
              couverte par une garantie décennale. Devis gratuit sous 48 heures.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Gratuit à Montpellier" />
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
              Nos Interventions à Montpellier
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Tous corps d&apos;état du bâtiment
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

      {/* Contenu SEO riche */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Entreprise de rénovation et maçonnerie à Montpellier
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              Montpellier et sa métropole concentrent une activité de construction et de rénovation
              intense. Entre les quartiers historiques du centre-ville, les zones pavillonnaires de
              Castelnau-le-Lez, Mauguio ou Clapiers, et les communes rurales de la périphérie,
              les besoins en <strong>maçonnerie générale</strong>, <strong>terrassement</strong> et{" "}
              <strong>rénovation de bâti ancien</strong> sont considérables.
            </p>
            <p>
              TMT Travaux, basée à Saint-Pargoire (34230), intervient régulièrement dans la
              métropole de Montpellier pour des chantiers de gros œuvre, d&apos;extension de maison
              et de rénovation structurelle. Notre implantation dans le cœur de l&apos;Hérault
              nous permet de mobiliser rapidement nos équipes et nos engins sur tout chantier
              montpelliérain.
            </p>
            <p>
              Les <strong>extensions de maison à Montpellier</strong> constituent l&apos;une de nos
              spécialités. Face à la hausse des prix immobiliers dans la métropole, nombreux sont
              les propriétaires qui choisissent d&apos;agrandir plutôt que de déménager. TMT Travaux
              réalise vos extensions latérales, vos surélévations et vos aménagements de combles
              avec une rigueur technique irréprochable : étude de sol préalable, dimensionnement
              des fondations, respect des règles parasismiques de la zone 3 de la métropole.
            </p>
            <p>
              La <strong>rénovation de maisons de village</strong> dans les communes de la
              métropole (Saint-Gély-du-Fesc, Grabels, Jacou, Vendargues…) est un domaine dans
              lequel notre expertise locale fait la différence. Nous maîtrisons les contraintes
              des PLU (Plans Locaux d&apos;Urbanisme) locaux, les matériaux traditionnels (pierre
              calcaire, mortier de chaux) et les techniques de restauration compatibles avec
              le bâti existant.
            </p>
            <p>
              Pour tout projet de <strong>travaux à Montpellier</strong> — rénovation, extension,
              maçonnerie, terrassement — TMT Travaux vous propose une visite technique gratuite
              et un devis détaillé poste par poste remis sous 48 heures. Garantie décennale sur
              l&apos;ensemble des ouvrages réalisés.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de travaux <span className="text-gradient-gold">à Montpellier</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Contactez TMT Travaux pour une étude technique gratuite et un devis sous 48 heures.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Demander un Devis Gratuit" className="px-10" />
            <AnimatedButton href="tel:+33748157160" variant="dark" label="07 48 15 71 60" className="px-10"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white-warm/40">
            {["Montpellier", "Castelnau-le-Lez", "Mauguio", "Saint-Gély-du-Fesc", "Grabels", "Jacou", "Vendargues", "Clapiers"].map((c) => (
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
            name: "Rénovation & Maçonnerie à Montpellier — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
              telephone: "+33748157160",
            },
            description:
              "Rénovation, maçonnerie et terrassement à Montpellier et sa métropole. Extension de maison, pose d'IPN, gros œuvre. Garantie décennale.",
            areaServed: { "@type": "City", name: "Montpellier" },
            serviceType: "Rénovation et Maçonnerie",
          }),
        }}
      />
    </>
  );
}
