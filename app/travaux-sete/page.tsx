import type { Metadata } from "next";
import AnimatedButton from "@/components/ui/animated-button";

export const metadata: Metadata = {
  title: "Travaux & Maçonnerie à Sète (34) — TMT Travaux Hérault",
  description:
    "TMT Travaux réalise vos travaux de maçonnerie, terrassement et rénovation à Sète et dans le Bassin de Thau. Gros œuvre, fondations, extension, VRD. Devis gratuit, garantie décennale.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/travaux-sete",
  },
  keywords: [
    "travaux Sète",
    "maçonnerie Sète",
    "terrassement Sète",
    "rénovation Sète 34",
    "extension maison Sète",
    "entreprise bâtiment Sète",
    "gros œuvre Bassin de Thau",
    "maçonnerie Frontignan",
  ],
};

const services = [
  {
    title: "Maçonnerie Générale",
    desc: "Gros œuvre, béton armé, murs porteurs, murs de clôture, dallage. Interventions conformes DTU et Eurocodes dans le Bassin de Thau.",
  },
  {
    title: "Terrassement & Fondations",
    desc: "Décaissement, fouilles, fondations adaptées aux sols littoraux et lagunaires de la région sétoise. Connaissance des contraintes géotechniques locales.",
  },
  {
    title: "Extension de Maison",
    desc: "Agrandissement par extension latérale ou surélévation. Étude structurelle préalable, respect des règles parasismiques et des PLU locaux.",
  },
  {
    title: "Rénovation de Façades",
    desc: "Ravalement, enduit chaux ou monocouche, traitement des fissures. Protection renforcée contre l'humidité et l'air marin en milieu littoral.",
  },
  {
    title: "Pose d'IPN & Ouvertures",
    desc: "Ouverture de murs porteurs avec profilés HEA/HEB dimensionnés. Note de calcul bureau d'études fournie.",
  },
  {
    title: "VRD — Voirie & Réseaux",
    desc: "Tranchées, canalisations, regards de visite, raccordements aux réseaux publics. Gestion des contraintes liées à la proximité de la nappe phréatique.",
  },
];

export default function TravauxSetePage() {
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
                Sète & Bassin de Thau — Hérault (34)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Travaux &amp; Maçonnerie{" "}
              <span className="text-gradient-gold">à Sète (34)</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              TMT Travaux, entreprise de maçonnerie et terrassement dans l&apos;Hérault, intervient
              à Sète et dans tout le Bassin de Thau pour vos projets de construction, rénovation et
              extension. Garantie décennale. Devis gratuit sous 48 heures.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="/contact" variant="gold" label="Devis Gratuit à Sète" />
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
              Nos Interventions à Sète
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Maçonnerie &amp; travaux dans le Bassin de Thau
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
            Entreprise de maçonnerie et terrassement à Sète
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              Sète, ville singulière construite sur un isthme entre la mer Méditerranée et l&apos;étang de Thau,
              présente des contraintes géotechniques parmi les plus spécifiques du littoral héraultais.
              Les sols sableux, l&apos;omniprésence de la nappe phréatique et la proximité de la lagune
              imposent des techniques de fondation adaptées que TMT Travaux maîtrise parfaitement.
              Notre expérience sur les chantiers du Bassin de Thau nous permet de dimensionner
              des fondations fiables sur ces terrains à faible portance.
            </p>
            <p>
              Le bâti sétois est marqué par sa diversité : maisons de pêcheurs du centre historique,
              pavillons des quartiers résidentiels de la Corniche et du Mont Saint-Clair, immeubles
              des quartiers portuaires. La <strong>rénovation de façades à Sète</strong> requiert une
              attention particulière aux effets de l&apos;air marin sur les enduits et les matériaux.
              TMT Travaux utilise des enduits et traitements hydrofuges adaptés au climat littoral
              méditerranéen, garantissant la durabilité des ouvrages face aux embruns et à l&apos;humidité.
            </p>
            <p>
              Les <strong>travaux de terrassement à Sète</strong> et dans les communes riveraines du
              Bassin de Thau (Frontignan, Balaruc-les-Bains, Marseillan) nécessitent une connaissance
              approfondie des nappes superficielles et des horizons argileux limoneux qui caractérisent
              ces terrains lagunaires. Nos équipes réalisent systématiquement une reconnaissance
              préliminaire des sols avant tout engagement sur les fondations, conformément aux
              préconisations des normes DTU 13.11 et DTU 13.12.
            </p>
            <p>
              L&apos;<strong>extension de maison à Sète</strong> est soumise aux règles d&apos;urbanisme
              spécifiques d&apos;une commune littorale classée. La loi Littoral et le PLU sétois encadrent
              strictement les possibilités d&apos;extension, d&apos;emprise au sol et de hauteur. TMT Travaux
              accompagne ses clients dans l&apos;analyse du règlement applicable à leur parcelle et réalise
              les travaux dans le strict respect du permis de construire ou de la déclaration préalable
              obtenue.
            </p>
            <p>
              La <strong>pose d&apos;IPN et la création d&apos;ouvertures</strong> dans les murs porteurs
              constituent une demande fréquente à Sète, où de nombreux propriétaires souhaitent
              ouvrir et moderniser l&apos;intérieur de maisons anciennes tout en préservant les volumes
              extérieurs. TMT Travaux réalise ces interventions délicates avec la rigueur qu&apos;elles
              imposent : étaiement préalable, dimensionnement des profilés métalliques par bureau
              d&apos;études, coulage des appuis béton armé.
            </p>
            <p>
              Pour vos <strong>travaux de maçonnerie à Sète</strong> et dans le Bassin de Thau —
              terrassement, fondations, gros œuvre, extension ou rénovation de façade — TMT Travaux
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
            Un projet de travaux <span className="text-gradient-gold">à Sète</span> ?
          </h2>
          <p className="mt-4 text-lg text-white-warm/60">
            Visite technique gratuite et devis détaillé sous 48 heures dans tout le Bassin de Thau.
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
            {["Sète", "Frontignan", "Balaruc-les-Bains", "Balaruc-le-Vieux", "Marseillan", "Mèze", "Gigean", "Mireval"].map((c) => (
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
            name: "Travaux & Maçonnerie à Sète — TMT Travaux",
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              url: "https://tmt-travaux-herault.fr",
              telephone: "+33748157160",
            },
            description:
              "Maçonnerie, terrassement et rénovation à Sète et dans le Bassin de Thau. Gros œuvre, fondations, extension de maison. Garantie décennale.",
            areaServed: { "@type": "City", name: "Sète" },
            serviceType: "Maçonnerie et Travaux",
          }),
        }}
      />
    </>
  );
}
