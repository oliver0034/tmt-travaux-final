import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/ui/home-hero";
import AnimatedButton from "@/components/ui/animated-button";
import ZoneMap from "@/components/ui/zone-map";

export const metadata: Metadata = {
  title: "TMT Travaux | Maçonnerie & Terrassement à Paulhan, Clermont-l'Hérault (34)",
  description:
    "TMT Travaux, entreprise spécialisée en maçonnerie, terrassement et rénovation dans l'Hérault (34). Intervention à Paulhan, Clermont-l'Hérault, Pézenas, Lodève, Gignac. Devis gratuit. Garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr",
  },
};

const services = [
  {
    title: "Terrassement",
    href: "/terrassement",
    description:
      "Préparation de terrain, nivellement, décaissement, fondations et travaux de Voirie et Réseaux Divers (VRD). Étude de sol préalable et respect des normes DTU.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 21V9l-3 3V21M15 21V9l3 3V21M12 21V3l-3 3v15M12 3l3 3v15" />
      </svg>
    ),
  },
  {
    title: "Maçonnerie",
    href: "/maconnerie",
    description:
      "Gros œuvre, béton armé, élévation de murs porteurs, murs de clôture et taille de pierre. Réalisation structurelle conforme aux règles parasismiques en vigueur.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M4 20V10l8-6 8 6v10M9 20v-4h6v4" />
      </svg>
    ),
  },
  {
    title: "Travaux & Rénovation",
    href: "/travaux-renovation",
    description:
      "Extension de bâti, pose d'IPN, rénovation de façades et aménagement global. Interventions respectant l'intégrité structurelle du bâti existant.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.43-5.17L4 12l8 8 8-8-1.99-1.99-5.59 5.16zM4 4h16v2H4V4zm0 4h16v2H4V8z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Jean-Marc D.",
    city: "Clermont-l'Hérault",
    service: "Terrassement & Fondations",
    rating: 5,
    text: "Excellent travail pour les fondations de notre extension. Équipe sérieuse, ponctuelle et très professionnelle. Le devis était clair et le chantier impeccablement tenu. Je recommande vivement TMT Travaux.",
    date: "2024-11-15",
    dateDisplay: "Novembre 2024",
  },
  {
    name: "Sophie M.",
    city: "Pézenas",
    service: "Maçonnerie & Mur de clôture",
    rating: 5,
    text: "TMT Travaux a réalisé notre mur de clôture en pierre calcaire. Rendu magnifique, parfaitement intégré au paysage héraultais. Respect des délais, équipe soigneuse et excellent rapport qualité-prix.",
    date: "2024-09-20",
    dateDisplay: "Septembre 2024",
  },
  {
    name: "Patrick B.",
    city: "Paulhan",
    service: "Rénovation — Ouverture IPN",
    rating: 5,
    text: "Ouverture d'un mur porteur avec pose d'IPN pour agrandir notre salon. Travail très soigné, étaiement parfait, finitions propres. Suivi rigoureux et communication claire du début à la fin du chantier.",
    date: "2025-01-08",
    dateDisplay: "Janvier 2025",
  },
];

const cities = [
  { name: "Paulhan", code: "34230" },
  { name: "Clermont-l'Hérault", code: "34800" },
  { name: "Pézenas", code: "34120" },
  { name: "Lodève", code: "34700" },
  { name: "Gignac", code: "34150" },
];

const strengths = [
  {
    title: "Garantie Décennale",
    description: "Assurance responsabilité civile décennale couvrant l'ensemble de nos interventions structurelles.",
  },
  {
    title: "Étude Technique",
    description: "Analyse préalable du terrain et diagnostic structurel avant toute intervention de gros œuvre.",
  },
  {
    title: "Normes DTU",
    description: "Exécution conforme aux Documents Techniques Unifiés et aux réglementations en vigueur.",
  },
  {
    title: "Devis Détaillé",
    description: "Chiffrage transparent, poste par poste, remis sous 48 heures après visite technique.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO — Scroll Expansion ==================== */}
      <HomeHero />

      {/* ==================== SERVICES ==================== */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Expertises
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Des prestations complètes pour vos projets
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              De la préparation du terrain à la finition, TMT Travaux intervient sur l&apos;ensemble
              des corps de métier liés au bâtiment et aux travaux publics dans l&apos;Hérault.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-3d group block bg-white border border-gray-100 rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition-all"
              >
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center text-black-deep mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ENGAGEMENTS ==================== */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Nos Engagements
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Rigueur technique & transparence
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className="relative bg-white rounded-2xl p-8 shadow-premium group hover:shadow-premium-lg transition-all"
              >
                <div className="text-5xl font-extrabold text-gold/10 absolute top-4 right-6">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AVIS CLIENTS ==================== */}
      <section className="py-24 bg-white" id="avis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Avis Clients
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Ce que disent nos clients
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            {/* Aggregate rating display */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-6 h-6 text-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-extrabold text-charcoal">5,0</span>
              <span className="text-sm text-[var(--text-muted)]">/ 5 — 14 avis vérifiés</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-premium flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-bold text-charcoal text-sm">{t.name}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{t.city} · {t.service}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{t.dateDisplay}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schema.org AggregateRating + Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "14",
                bestRating: "5",
                worstRating: "1",
              },
              review: testimonials.map((t) => ({
                "@type": "Review",
                author: { "@type": "Person", name: t.name },
                datePublished: t.date,
                reviewBody: t.text,
                name: t.service,
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: t.rating,
                  bestRating: "5",
                  worstRating: "1",
                },
              })),
            }),
          }}
        />
      </section>

      {/* ==================== ZONE D'INTERVENTION ==================== */}
      <section className="py-24 bg-black-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Zone d&apos;Intervention
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Maçonnerie & terrassement dans tout l&apos;Hérault
            </h2>
            <div className="divider-gold mx-auto mt-6" />
            <p className="mt-6 text-lg text-white-warm/60 max-w-2xl mx-auto">
              Basés à Saint-Pargoire (34230), nous intervenons dans un rayon de 40 km couvrant les
              principales communes du cœur de l&apos;Hérault.
            </p>
          </div>

          {/* Carte interactive */}
          <ZoneMap />

          {/* Badges villes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            {cities.map((city) => (
              <div
                key={city.name}
                className="text-center p-4 rounded-xl border border-gold/15 bg-white/[0.03] hover:bg-gold/5 hover:border-gold/30 transition-all"
              >
                <svg className="w-5 h-5 mx-auto text-gold mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="font-semibold text-white text-sm">{city.name}</p>
                <p className="text-xs text-white-warm/40 mt-1">{city.code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Votre projet mérite une{" "}
            <span className="text-gradient-gold">expertise solide</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Contactez TMT Travaux pour une étude technique gratuite et un devis détaillé sous 48
            heures. Intervention dans tout l&apos;Hérault.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedButton href="/contact" variant="gold" label="Obtenir un Devis Gratuit" className="px-10" />
            <AnimatedButton
              href="tel:+33748157160"
              variant="light"
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
    </>
  );
}
