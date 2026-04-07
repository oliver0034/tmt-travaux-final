import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales — TMT Travaux, Maçonnerie & Terrassement Hérault",
  description:
    "Mentions légales du site TMT Travaux : éditeur, hébergement, propriété intellectuelle, responsabilité. Entreprise de maçonnerie et terrassement dans l'Hérault (34).",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/mentions-legales",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-black-deep overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                Informations légales
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Mentions Légales
            </h1>
            <p className="mt-4 text-base text-white-warm/60">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance
              en l&apos;économie numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Éditeur */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p><strong className="text-charcoal">Dénomination sociale :</strong> TMT Travaux</p>
              <p><strong className="text-charcoal">Forme juridique :</strong> Entreprise individuelle</p>
              <p><strong className="text-charcoal">Activité :</strong> Maçonnerie générale, terrassement et travaux de rénovation</p>
              <p><strong className="text-charcoal">Adresse :</strong> Lafon de Lacan, 34230 Saint-Pargoire</p>
              <p><strong className="text-charcoal">Téléphone :</strong>{" "}
                <a href="tel:+33748157160" className="text-gold hover:underline">07 48 15 71 60</a>
              </p>
              <p><strong className="text-charcoal">E-mail :</strong>{" "}
                <a href="mailto:tmt-travaux34@gmail.com" className="text-gold hover:underline">
                  tmt-travaux34@gmail.com
                </a>
              </p>
              <p><strong className="text-charcoal">SIRET :</strong> [À compléter]</p>
              <p><strong className="text-charcoal">Code APE / NAF :</strong> [À compléter]</p>
              <p>
                <strong className="text-charcoal">Assurance décennale :</strong> TMT Travaux est couvert par une
                assurance de responsabilité civile décennale conformément à la loi du 4 janvier 1978
                (loi Spinetta). Les références de contrat d&apos;assurance sont communicables sur demande.
              </p>
              <p><strong className="text-charcoal">Directeur de la publication :</strong> Gérant de TMT Travaux</p>
            </div>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              2. Hébergement
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-2">
              <p>
                Le site <strong>tmt-travaux-herault.fr</strong> est hébergé par :
              </p>
              <p><strong className="text-charcoal">GitHub Pages</strong> (service d&apos;hébergement statique)</p>
              <p>GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</p>
              <p>
                <a
                  href="https://pages.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  https://pages.github.com
                </a>
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              3. Propriété intellectuelle
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la
                propriété exclusive de TMT Travaux ou de ses partenaires et est protégé par la
                législation française et internationale relative à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, diffusion ou rediffusion, en tout ou partie, du
                contenu de ce site sur quelque support ou par tout procédé que ce soit, est interdite
                sans autorisation préalable et écrite de TMT Travaux.
              </p>
              <p>
                Le non-respect de cette interdiction constitue une contrefaçon susceptible d&apos;engager
                la responsabilité civile et pénale du contrefacteur (articles L.335-2 et suivants du
                Code de la Propriété Intellectuelle).
              </p>
            </div>
          </div>

          {/* Limitation de responsabilité */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              4. Limitation de responsabilité
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                TMT Travaux s&apos;efforce de maintenir les informations de ce site à jour et exactes.
                Toutefois, elle ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des
                informations diffusées sur ce site.
              </p>
              <p>
                TMT Travaux décline toute responsabilité pour les dommages directs ou indirects
                résultant de l&apos;utilisation de ce site ou de l&apos;impossibilité d&apos;y accéder.
              </p>
              <p>
                Les informations tarifaires, délais et zones d&apos;intervention sont données à titre
                indicatif et sont susceptibles d&apos;évoluer. Seul un devis établi après visite
                technique fait foi.
              </p>
            </div>
          </div>

          {/* Liens hypertextes */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              5. Liens hypertextes
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                Ce site peut contenir des liens vers des sites externes. TMT Travaux ne contrôle pas
                ces sites et décline toute responsabilité quant à leur contenu ou à leur
                disponibilité.
              </p>
              <p>
                La création de liens hypertextes vers ce site est autorisée, sous réserve de ne pas
                nuire à l&apos;image de TMT Travaux et de ne pas induire l&apos;utilisateur en erreur sur
                l&apos;origine des informations.
              </p>
            </div>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              6. Données personnelles
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                Les informations recueillies via le formulaire de contact sont traitées par TMT
                Travaux dans le cadre exclusif du traitement de votre demande de devis. Elles ne
                sont ni cédées, ni louées à des tiers.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement
                UE 2016/679), vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité
                et d&apos;effacement de vos données personnelles.
              </p>
              <p>
                Pour exercer ces droits, contactez-nous à :{" "}
                <a href="mailto:tmt-travaux34@gmail.com" className="text-gold hover:underline">
                  tmt-travaux34@gmail.com
                </a>
              </p>
              <p>
                Pour en savoir plus sur la gestion de vos données, consultez notre{" "}
                <Link href="/politique-confidentialite" className="text-gold hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              7. Cookies
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                Ce site est un site statique. Il n&apos;utilise pas de cookies de traçage ou d&apos;analyse
                d&apos;audience. Seuls des cookies techniques strictement nécessaires au fonctionnement
                peuvent être générés par le service d&apos;hébergement (GitHub Pages).
              </p>
            </div>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              8. Droit applicable et juridiction
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige
                relatif à l&apos;interprétation ou à l&apos;exécution de celles-ci, les tribunaux français
                seront seuls compétents.
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
