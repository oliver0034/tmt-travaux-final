'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedButton from '@/components/ui/animated-button';
import { BASE_PATH } from '@/lib/config';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Terrassement', href: '/terrassement' },
  { name: 'Maçonnerie', href: '/maconnerie' },
  { name: 'Travaux & Rénovation', href: '/travaux-renovation' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fermer le menu si on passe en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloquer le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold/15" style={{ backgroundColor: '#020202' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 -ml-2" onClick={() => setMenuOpen(false)}>
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

            {/* Bouton hamburger mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-12 h-12 cursor-pointer rounded-lg gap-1.5"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <span
                className="block w-6 h-0.5 bg-white-warm transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'rotate(45deg) translate(2px, 8px)' : 'none' }}
              />
              <span
                className="block w-6 h-0.5 bg-white-warm transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }}
              />
              <span
                className="block w-6 h-0.5 bg-white-warm transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'rotate(-45deg) translate(2px, -8px)' : 'none' }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay sombre */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu mobile — panneau qui glisse depuis le haut, HORS du header */}
      <div
        className="fixed left-0 right-0 z-50 lg:hidden"
        style={{
          top: '128px', // hauteur du header (h-32 = 8rem = 128px)
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.3s ease-in-out',
          backgroundColor: '#0A0A0A',
          borderBottom: '1px solid rgba(201,162,39,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3.5 text-base font-medium text-white-warm hover:text-gold hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm text-black-deep"
              style={{ background: 'linear-gradient(135deg, #C9A227, #D4B94E)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Devis Gratuit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
