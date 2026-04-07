import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — TMT Travaux Hérault",
  description:
    "Politique de confidentialité et protection des données personnelles de TMT Travaux. Traitement des données RGPD, droits des utilisateurs.",
  alternates: {
    canonical: "https://tmt-travaux-herault.fr/politique-confidentialite",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-black-deep overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                RGPD — Protection des données
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Politique de Confidentialité
            </h1>
            <p className="mt-4 text-base text-white-warm/60">
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679)
              et à la loi Informatique et Libertés modifiée.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Responsable du traitement */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              1. Responsable du traitement
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-2">
              <p>
                Le responsable du traitement des données à caractère personnel collectées sur ce
                site est :
              </p>
              <p><strong className="text-charcoal">TMT Travaux</strong></p>
              <p>Lafon de Lacan, 34230 Saint-Pargoire</p>
              <p>
                E-mail :{" "}
                <a href="mailto:boutieres.j@laposte.net" className="text-gold hover:underline">
                  boutieres.j@laposte.net
                </a>
              </p>
              <p>
                Téléphone :{" "}
                <a href="tel:+33748157160" className="text-gold hover:underline">
                  07 48 15 71 60
                </a>
              </p>
            </div>
          </div>

          {/* Données collectées */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              2. Données personnelles collectées
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                TMT Travaux collecte uniquement les données strictement nécessaires au traitement
                de vos demandes de devis, via le formulaire de contact de ce site :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Commune du chantier</li>
                <li>Description du projet</li>
              </ul>
              <p>
                Ce site ne collecte aucune donnée de navigation (cookies analytiques, traceurs
                publicitaires). Le site est de nature statique et n&apos;intègre pas de système de
                suivi d&apos;audience tiers.
              </p>
            </div>
          </div>

          {/* Finalités */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              3. Finalités du traitement
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>Les données collectées sont traitées aux fins suivantes :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Traitement et suivi de votre demande de devis</li>
                <li>Organisation d&apos;une visite technique</li>
                <li>Communication relative à votre projet de travaux</li>
              </ul>
              <p>
                <strong className="text-charcoal">Base légale :</strong> Exécution de mesures
                précontractuelles prises à la demande de la personne concernée (article 6.1.b du
                RGPD).
              </p>
            </div>
          </div>

          {/* Durée de conservation */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              4. Durée de conservation
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                Les données relatives à une demande de devis sans suite commerciale sont conservées
                pendant <strong className="text-charcoal">3 ans</strong> à compter du dernier
                contact, conformément aux recommandations de la CNIL.
              </p>
              <p>
                En cas de relation commerciale établie, les données sont conservées pendant la
                durée légale applicable aux obligations comptables et contractuelles (10 ans au
                titre de la garantie décennale).
              </p>
            </div>
          </div>

          {/* Destinataires */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              5. Destinataires des données
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                Les données collectées sont destinées exclusivement à TMT Travaux et ne sont en
                aucun cas cédées, louées ou vendues à des tiers à des fins commerciales.
              </p>
              <p>
                Elles peuvent être communiquées, le cas échéant, aux prestataires techniques
                impliqués dans la réalisation du projet (bureau d&apos;études, sous-traitants), dans
                la stricte mesure nécessaire à l&apos;exécution du contrat.
              </p>
            </div>
          </div>

          {/* Vos droits */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              6. Vos droits
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-3">
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
                suivants sur vos données personnelles :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Droit d&apos;accès (art. 15 RGPD) :</strong>{" "}
                  obtenir une copie des données vous concernant
                </li>
                <li>
                  <strong className="text-charcoal">Droit de rectification (art. 16 RGPD) :</strong>{" "}
                  corriger des données inexactes ou incomplètes
                </li>
                <li>
                  <strong className="text-charcoal">Droit à l&apos;effacement (art. 17 RGPD) :</strong>{" "}
                  demander la suppression de vos données
                </li>
                <li>
                  <strong className="text-charcoal">Droit à la portabilité (art. 20 RGPD) :</strong>{" "}
                  recevoir vos données dans un format structuré
                </li>
                <li>
                  <strong className="text-charcoal">Droit d&apos;opposition (art. 21 RGPD) :</strong>{" "}
                  vous opposer au traitement de vos données
                </li>
                <li>
                  <strong className="text-charcoal">Droit à la limitation (art. 18 RGPD) :</strong>{" "}
                  demander la suspension du traitement
                </li>
              </ul>
              <p>
                Pour exercer ces droits, adressez votre demande par e-mail à :{" "}
                <a href="mailto:boutieres.j@laposte.net" className="text-gold hover:underline">
                  boutieres.j@laposte.net
                </a>
                , en précisant votre identité. Nous nous engageons à vous répondre dans un délai
                d&apos;un mois.
              </p>
              <p>
                En cas de réclamation non résolue, vous pouvez saisir la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Commission Nationale de l&apos;Informatique et des Libertés (CNIL)
                </a>
                .
              </p>
            </div>
          </div>

          {/* Sécurité */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              7. Sécurité des données
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                TMT Travaux met en œuvre les mesures techniques et organisationnelles appropriées
                pour garantir la sécurité et la confidentialité de vos données personnelles, et
                prévenir notamment leur altération, perte ou accès par des tiers non autorisés.
              </p>
            </div>
          </div>

          {/* Mise à jour */}
          <div>
            <h2 className="text-xl font-bold text-charcoal mb-4 pb-2 border-b border-gold/20">
              8. Mise à jour de cette politique
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                La présente politique de confidentialité peut être modifiée à tout moment pour
                tenir compte des évolutions légales ou des changements dans nos pratiques. La date
                de dernière mise à jour est indiquée ci-dessous.
              </p>
              <p className="mt-2 text-[var(--text-muted)]">
                Dernière mise à jour : Avril 2026
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="pt-4 flex gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/mentions-legales"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-gold transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
