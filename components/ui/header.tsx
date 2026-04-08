'use client';

import { useState } from 'react';
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

  return (
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

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 bg-white-warm transition-transform duration-300"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 bg-white-warm transition-opacity duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white-warm transition-transform duration-300"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 bg-black-deep border-t border-gold/10"
        style={{ maxHeight: menuOpen ? '400px' : '0px' }}
      >
        <div className="px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-white-warm/90 hover:text-gold hover:bg-white/5 rounded transition-colors uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <AnimatedButton
              href="/contact"
              variant="gold"
              label="Devis Gratuit"
              className="w-full justify-center px-6 py-3"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
