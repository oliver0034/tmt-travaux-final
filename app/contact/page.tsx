"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";
import AnimatedButton from "@/components/ui/animated-button";

const contactMetadata = {
  title: "Contact — Devis Gratuit Maçonnerie & Terrassement | TMT Travaux Hérault",
  description:
    "Contactez TMT Travaux pour un devis gratuit : maçonnerie, terrassement, rénovation dans l'Hérault (34). Paulhan, Clermont-l'Hérault, Pézenas, Lodève, Gignac. Réponse sous 48h.",
};

const serviceOptions = [
  "Terrassement",
  "Maçonnerie / Gros œuvre",
  "Fondations",
  "VRD — Voirie & Réseaux",
  "Extension de maison",
  "Pose d'IPN / Ouverture mur porteur",
  "Rénovation de façade",
  "Mur de clôture",
  "Démolition",
  "Autre",
];

type FormData = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  commune: string;
  service: string;
  message: string;
  rgpd: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.nom.trim()) errors.nom = "Le nom est requis.";
  if (!data.prenom.trim()) errors.prenom = "Le prénom est requis.";

  if (!data.email.trim()) {
    errors.email = "L'adresse e-mail est requise.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Veuillez saisir une adresse e-mail valide.";
  }

  if (!data.telephone.trim()) {
    errors.telephone = "Le numéro de téléphone est requis.";
  } else if (!/^(?:\+33|0)\s?[1-9](?:[\s.-]?\d{2}){4}$/.test(data.telephone.replace(/\s/g, ""))) {
    errors.telephone = "Veuillez saisir un numéro de téléphone français valide.";
  }

  if (!data.commune.trim()) errors.commune = "La commune est requise.";
  if (!data.service) errors.service = "Veuillez sélectionner un service.";
  if (!data.message.trim()) errors.message = "Veuillez décrire votre projet.";
  if (data.message.trim().length > 0 && data.message.trim().length < 20) {
    errors.message = "Veuillez décrire votre projet plus en détail (20 caractères minimum).";
  }

  if (!data.rgpd) {
    errors.rgpd = "Vous devez accepter la politique de confidentialité pour envoyer le formulaire.";
  }

  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    commune: "",
    service: "",
    message: "",
    rgpd: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
    if (errors[target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [target.name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      {/* Head metadata via generateMetadata won't work in client component, so we use head tag */}
      <title>{contactMetadata.title}</title>
      <meta name="description" content={contactMetadata.description} />
      <link rel="canonical" href="https://tmt-travaux-herault.fr/contact" />

      {/* Hero */}
      <section className="relative py-24 bg-black-deep overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                Contact — Devis Gratuit
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Demandez votre{" "}
              <span className="text-gradient-gold">devis gratuit</span>
            </h1>
            <p className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl">
              Décrivez votre projet et recevez une étude technique personnalisée sous 48 heures.
              TMT Travaux intervient dans tout l&apos;Hérault (34).
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <svg className="w-16 h-16 mx-auto text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-charcoal mb-3">Message envoyé</h2>
                  <p className="text-[var(--text-secondary)]">
                    Votre demande a bien été transmise. TMT Travaux vous recontactera sous 48
                    heures pour organiser une visite technique.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-2">Vos coordonnées</h2>
                    <div className="divider-gold mb-8" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-semibold text-charcoal mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.nom ? "border-red-400 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors`}
                        placeholder="Votre nom"
                        autoComplete="family-name"
                      />
                      {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom}</p>}
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-semibold text-charcoal mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.prenom ? "border-red-400 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors`}
                        placeholder="Votre prénom"
                        autoComplete="given-name"
                      />
                      {errors.prenom && <p className="mt-1 text-sm text-red-500">{errors.prenom}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                        Adresse e-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors`}
                        placeholder="votre@email.fr"
                        autoComplete="email"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-semibold text-charcoal mb-2">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.telephone ? "border-red-400 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors`}
                        placeholder="07 48 15 71 60"
                        autoComplete="tel"
                      />
                      {errors.telephone && <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-2 mt-4">Votre projet</h2>
                    <div className="divider-gold mb-8" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="commune" className="block text-sm font-semibold text-charcoal mb-2">
                        Commune du chantier <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="commune"
                        name="commune"
                        value={formData.commune}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.commune ? "border-red-400 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors`}
                        placeholder="Ex : Paulhan, Clermont-l'Hérault..."
                      />
                      {errors.commune && <p className="mt-1 text-sm text-red-500">{errors.commune}</p>}
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">
                        Type de prestation <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.service ? "border-red-400 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white`}
                      >
                        <option value="">— Sélectionnez —</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                      Description du projet <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-y`}
                      placeholder="Décrivez votre projet : nature des travaux, surface, contraintes particulières..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  {/* RGPD Consent */}
                  <div className="bg-bg-light rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="rgpd"
                        name="rgpd"
                        checked={formData.rgpd}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold/50 accent-[var(--gold)]"
                      />
                      <label htmlFor="rgpd" className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        En soumettant ce formulaire, j&apos;accepte que les données saisies soient
                        traitées par TMT Travaux dans le cadre de ma demande de devis, conformément
                        au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).
                        Ces données ne seront ni cédées ni transmises à des tiers. Vous disposez
                        d&apos;un droit d&apos;accès, de rectification et de suppression de vos données
                        en contactant{" "}
                        <a
                          href="mailto:boutieres.j@laposte.net"
                          className="text-gold hover:underline"
                        >
                          boutieres.j@laposte.net
                        </a>
                        . <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.rgpd && <p className="mt-2 text-sm text-red-500">{errors.rgpd}</p>}
                  </div>

                  <AnimatedButton
                    type="submit"
                    variant="gold"
                    label="Envoyer ma Demande de Devis"
                    className="w-full sm:w-auto px-12"
                  />
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <div className="bg-bg-light rounded-2xl p-8">
                <h3 className="text-lg font-bold text-charcoal mb-4">Coordonnées</h3>
                <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-charcoal">Téléphone</p>
                      <a href="tel:+33748157160" className="hover:text-gold transition-colors">
                        07 48 15 71 60
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-charcoal">E-mail</p>
                      <a href="mailto:boutieres.j@laposte.net" className="hover:text-gold transition-colors break-all">
                        boutieres.j@laposte.net
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-charcoal">Adresse</p>
                      <p>Lafon de Lacan, 34230 Saint-Pargoire</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-light rounded-2xl p-8">
                <h3 className="text-lg font-bold text-charcoal mb-4">Zone d&apos;intervention</h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {["Paulhan", "Clermont-l'Hérault", "Pézenas", "Lodève", "Gignac"].map(
                    (city) => (
                      <li key={city} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {city}
                      </li>
                    )
                  )}
                  <li className="text-[var(--text-muted)] text-xs mt-2">
                    & tout le département de l&apos;Hérault (34)
                  </li>
                </ul>
              </div>

              <div className="bg-black-deep rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gold mb-3">Engagement qualité</h3>
                <ul className="space-y-3 text-sm text-white-warm/70">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Garantie décennale
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Devis détaillé sous 48h
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Visite technique gratuite
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Conformité DTU & Eurocodes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact — TMT Travaux",
            url: "https://tmt-travaux-herault.fr/contact",
            mainEntity: {
              "@type": "HomeAndConstructionBusiness",
              name: "TMT Travaux",
              telephone: "+33748157160",
              email: "boutieres.j@laposte.net",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lafon de Lacan",
                addressLocality: "Saint-Pargoire",
                postalCode: "34230",
                addressCountry: "FR",
              },
            },
          }),
        }}
      />
    </>
  );
}
