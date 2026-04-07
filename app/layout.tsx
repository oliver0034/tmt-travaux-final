import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";
import { BASE_PATH } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tmt-travaux-herault.fr"),
  title: {
    default: "TMT Travaux | Maçonnerie & Terrassement à Paulhan, Clermont-l'Hérault (34)",
    template: "%s | TMT Travaux — Hérault (34)",
  },
  description:
    "TMT Travaux : entreprise de maçonnerie, terrassement et rénovation dans l'Hérault (34). Gros œuvre, fondations, VRD, extension. Intervention à Paulhan, Clermont-l'Hérault, Pézenas, Lodève, Gignac. Garantie décennale.",
  keywords: [
    "maçonnerie Hérault",
    "terrassement Paulhan",
    "travaux Clermont-l'Hérault",
    "gros œuvre 34",
    "VRD Pézenas",
    "rénovation Lodève",
    "fondations Gignac",
    "entreprise maçonnerie 34",
    "terrassement Hérault",
    "béton armé Hérault",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tmt-travaux-herault.fr",
    siteName: "TMT Travaux",
    title: "TMT Travaux | Maçonnerie & Terrassement — Hérault (34)",
    description:
      "Entreprise de maçonnerie, terrassement et rénovation dans l'Hérault. Garantie décennale. Devis gratuit.",
    images: [
      {
        url: "/logo-tmt.png",
        width: 1200,
        height: 630,
        alt: "TMT Travaux — Terrassement, Maçonnerie, Travaux dans l'Hérault",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tmt-travaux-herault.fr",
  },
};

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Terrassement", href: "/terrassement" },
  { name: "Maçonnerie", href: "/maconnerie" },
  { name: "Travaux & Rénovation", href: "/travaux-renovation" },
  { name: "Contact", href: "/contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15" style={{ backgroundColor: '#020202' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 -ml-2">
            <Image
              src={`${BASE_PATH}/logo-tmt.png`}
              alt="TMT Travaux — Terrassement Maçonnerie Travaux"
              width={400}
              height={133}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="link-underline px-4 py-2 text-sm font-medium tracking-wide text-white-warm/90 hover:text-gold transition-colors uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <AnimatedButton
              href="/contact"
              variant="gold"
              label="Devis Gratuit"
              className="px-6 py-3"
            />
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
}

function MobileMenuButton() {
  return (
    <label
      htmlFor="mobile-menu-toggle"
      className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2"
      aria-label="Ouvrir le menu"
    >
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
      <span className="block w-6 h-0.5 bg-white-warm transition-transform peer-checked:rotate-45 peer-checked:translate-y-2" />
      <span className="block w-6 h-0.5 bg-white-warm transition-opacity peer-checked:opacity-0" />
      <span className="block w-6 h-0.5 bg-white-warm transition-transform peer-checked:-rotate-45 peer-checked:-translate-y-2" />
    </label>
  );
}

function MobileMenu() {
  return (
    <div className="lg:hidden max-h-0 overflow-hidden has-[#mobile-menu-toggle:checked]:max-h-96 transition-all duration-300 bg-black-deep border-t border-gold/10">
      <div className="px-4 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-3 text-sm font-medium text-white-warm/90 hover:text-gold hover:bg-white/5 rounded transition-colors uppercase tracking-wide"
          >
            {item.name}
          </Link>
        ))}
        <AnimatedButton
          href="/contact"
          variant="gold"
          label="Devis Gratuit"
          className="mt-3 w-full justify-center px-6 py-3"
        />
      </div>
    </div>
  );
}

function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black-deep/97 backdrop-blur-md border-t border-gold/25 px-4 py-3 flex gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
      <a
        href="/contact"
        className="flex-1 gradient-gold text-black-deep font-bold text-sm uppercase tracking-wider rounded-xl py-3 flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Devis Gratuit
      </a>
      <a
        href="tel:+33748157160"
        className="border-2 border-gold/40 text-white-warm font-semibold text-sm uppercase tracking-wider rounded-xl py-3 px-5 flex items-center justify-center gap-2 hover:border-gold/70 hover:text-gold transition-colors"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Appeler
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black-deep text-white-warm/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src={`${BASE_PATH}/logo-tmt.png`}
              alt="TMT Travaux"
              width={160}
              height={53}
              className="h-12 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed text-white-warm/60">
              Des fondations solides, des projets durables. Entreprise de
              maçonnerie, terrassement et rénovation dans l&apos;Hérault (34).
            </p>
            <p className="mt-4 text-xs text-gold/80 font-medium uppercase tracking-wider">
              Garantie Décennale
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              Nos Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terrassement" className="text-sm hover:text-gold transition-colors">
                  Terrassement & VRD
                </Link>
              </li>
              <li>
                <Link href="/maconnerie" className="text-sm hover:text-gold transition-colors">
                  Maçonnerie & Gros Œuvre
                </Link>
              </li>
              <li>
                <Link href="/travaux-renovation" className="text-sm hover:text-gold transition-colors">
                  Travaux & Rénovation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-gold transition-colors">
                  Demande de Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              Zone d&apos;Intervention
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Paulhan</li>
              <li>Clermont-l&apos;Hérault</li>
              <li>Pézenas</li>
              <li>Lodève</li>
              <li>Gignac</li>
              <li className="text-white-warm/40">& tout l&apos;Hérault (34)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33748157160" className="hover:text-gold transition-colors">
                  07 48 15 71 60
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:boutieres.j@laposte.net" className="hover:text-gold transition-colors break-all">
                  boutieres.j@laposte.net
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lafon de Lacan, 34230 Saint-Pargoire</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white-warm/40">
            © {new Date().getFullYear()} TMT Travaux — Terrassement, Maçonnerie, Travaux. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-white-warm/40">
            <Link href="/mentions-legales" className="hover:text-gold transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-gold transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>

      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "TMT Travaux",
            description:
              "Entreprise de maçonnerie, terrassement et rénovation dans l'Hérault (34). Gros œuvre, fondations, VRD, extension. Garantie décennale.",
            url: "https://tmt-travaux-herault.fr",
            logo: "https://tmt-travaux-herault.fr/logo-tmt.png",
            image: "https://tmt-travaux-herault.fr/logo-tmt.png",
            telephone: "+33748157160",
            email: "boutieres.j@laposte.net",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Lafon de Lacan",
              addressLocality: "Saint-Pargoire",
              addressRegion: "Hérault",
              postalCode: "34230",
              addressCountry: "FR",
            },
            areaServed: [
              { "@type": "City", name: "Paulhan" },
              { "@type": "City", name: "Clermont-l'Hérault" },
              { "@type": "City", name: "Pézenas" },
              { "@type": "City", name: "Lodève" },
              { "@type": "City", name: "Gignac" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services TMT Travaux",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Terrassement",
                    description: "Préparation de terrain, nivellement, fondations, VRD",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Maçonnerie",
                    description: "Gros œuvre, béton armé, murs de clôture, taille de pierre",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Travaux & Rénovation",
                    description: "Extension, pose d'IPN, rénovation de façades, aménagement",
                  },
                },
              ],
            },
            priceRange: "Sur devis",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "14",
              bestRating: "5",
              worstRating: "1",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
            ],
          }),
        }}
      />
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pb-[68px] lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
