import type { Metadata } from "next";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Travaux & Maçonnerie à Mèze (34) — TMT Travaux Hérault",
  description:
    "TMT Travaux réalise vos travaux de maçonnerie, terrassement et rénovation à Mèze et autour du Bassin de Thau. Gros œuvre, fondations, extension, rénovation de mas. Devis gratuit, garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/travaux-meze",
  },
  keywords: [
    "travaux Mèze",
    "maçonnerie Mèze",
    "terrassement Mèze",
    "rénovation Mèze 34",
    "extension maison Mèze",
    "entreprise bâtiment Mèze",
    "gros œuvre Bassin de Thau",
    "rénovation mas Hérault",
  ],
};

const services = [
  {
    title: "Maçonnerie Générale",
    desc: "Gros œuvre, béton armé, murs porteurs, murs de clôture, dallage. Interventions conformes DTU et Eurocodes autour du Bassin de Thau.",
  },
  {
    title: "Terrassement & VRD",
    desc: "Décaissement, fondations, tranchées réseaux, assainissement. Maîtrise des sols lagunaires et argileux du pourtour de l'étang de Thau.",
  },
  {
    title: "Rénovation de Mas",
    desc: "Restauration de mas héraultais, réfection de murs en pierre calcaire, rejointoiement chaux, remplacement de planchers bois. Respect du bâti traditionnel.",
  },
  {
    title: "Extension de Maison",
    desc: "Agrandissement par extension latérale ou surélévation. Étude structurelle préalable, respect des PLU locaux.",
  },
  {
    title: "Rénovation de Façades",
    desc: "Ravalement, enduit chaux naturelle ou monocouche, traitement des fissures et reprises en sous-œuvre.",
  },
  {
    title: "Pose d'IPN & Ouvertures",
    desc: "Création d'ouvertures dans murs porteurs avec profilés métalliques dimensionnés par bureau d'études. Note de calcul fournie.",
  },
];

export default function TravauxMezePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-black-deep overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(201,162,39,0.08) 40px, rgba(201,162,39,0.08) 41px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                Mèze & Bassin de Thau — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Travaux &amp; Maçonnerie{" "}
              <span className="text-gradient-gold">à Mèze (34)</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux, entreprise de maçonnerie et terrassement basée à Saint-Pargoire (34230),
              intervient à Mèze et dans toute la zone du Bassin de Thau pour vos travaux de construction,
              rénovation de mas et extension. Garantie décennale. Devis gratuit sous 48 heures.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Gratuit à Mèze" />
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
              Nos Interventions à Mèze
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Maçonnerie &amp; rénovation autour de l&apos;étang de Thau
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
            Entreprise de maçonnerie et rénovation à Mèze
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              Mèze, commune viticole et ostréicole du Bassin de Thau, est un territoire où le bâti
              traditionnel héraultais est particulièrement présent. Mas en pierre calcaire, bastides
              viticoles, caves coopératives reconverties : la demande en <strong>rénovation de bâti
              ancien</strong> et en <strong>maçonnerie traditionnelle</strong> y est forte et exigeante.
              TMT Travaux intervient régulièrement à Mèze et dans les communes voisines (Loupian,
              Villeveyrac, Pinet, Montagnac) pour des chantiers de restauration et de réhabilitation.
            </p>
            <p>
              La <strong>rénovation de mas à Mèze</strong> et dans les campagnes du Bassin de Thau
              constitue l&apos;une des spécialités de TMT Travaux. Ces bâtisses agricoles du XVIIIe et
              XIXe siècle présentent des caractéristiques constructives spécifiques : murs épais en
              moellons calcaires liés à la chaux, voûtes appareillées, planchers bois sur solives,
              fondations peu profondes sur sol argileux. Leur réhabilitation nécessite une parfaite
              connaissance des matériaux et techniques traditionnels, ainsi qu&apos;une évaluation
              structurelle préalable pour identifier les désordres éventuels (tassements différentiels,
              fissurations, humidité ascensionnelle).
            </p>
            <p>
              Les <strong>sols du pourtour de l&apos;étang de Thau</strong> sont caractérisés par leur
              nature argilo-limoneuse et leur sensibilité aux variations de nappe phréatique. Ces
              terrains, classés en zone d&apos;aléa retrait-gonflement des argiles, imposent des
              dispositions constructives particulières : fondations profondes sur semelles filantes
              ou puits, drainage périphérique, joints de rupture. TMT Travaux prend en compte
              systématiquement ces contraintes géotechniques dans ses études et devis.
            </p>
            <p>
              L&apos;<strong>extension de maison à Mèze</strong> est soumise aux dispositions du PLU
              de la commune, qui régit notamment les retraits par rapport aux limites séparatives,
              l&apos;emprise au sol maximale et les hauteurs de construction. À proximité de l&apos;étang,
              certaines parcelles sont également soumises aux prescriptions de la loi Littoral
              ou du PPRI (Plan de Prévention des Risques d&apos;Inondation). TMT Travaux s&apos;assure
              de la conformité réglementaire de chaque projet avant le démarrage du chantier.
            </p>
            <p>
              Basée à Saint-Pargoire, TMT Travaux est géographiquement très proche de Mèze et
              peut mobiliser ses équipes rapidement sur cette zone. Notre implantation au cœur du
              département de l&apos;Hérault nous permet d&apos;intervenir efficacement sur l&apos;ensemble
              du Bassin de Thau, de Sète à Marseillan en passant par Mèze, Loupian et Bouzigues.
            </p>
            <p>
              Pour vos <strong>travaux à Mèze</strong> — terrassement, fondations, gros œuvre,
              rénovation de mas ou extension — TMT Travaux vous propose une visite technique
              gratuite et un devis détaillé poste par poste sous 48 heures. Tous nos ouvrages
              sont couverts par une <strong>garantie décennale</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Un projet de travaux <span className="text-gradient-gold">à Mèze</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Visite technique gratuite et devis détaillé sous 48 heures autour du Bassin de Thau.
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
            {["Mèze", "Loupian", "Villeveyrac", "Bouzigues", "Pinet", "Montagnac", "Marseillan", "Gigean"].map((c) => (
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
            name: "Travaux & Maçonnerie à Mèze — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
              telephone: "+33748157160",
            },
            description:
              "Maçonnerie, terrassement et rénovation à Mèze et dans le Bassin de Thau. Rénovation de mas, fondations, extension de maison. Garantie décennale.",
            areaServed: { "@type": "City", name: "Mèze" },
            serviceType: "Maçonnerie et Travaux",
          }),
        }}
      />
    </>
  );
}
