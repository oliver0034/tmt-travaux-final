'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BASE_PATH } from '@/lib/config';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Terrassement', href: '/terrassement' },
  { name: 'Maçonnerie', href: '/maconnerie' },
  { name: 'Travaux & Rénovation', href: '/travaux-renovation' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#020202',
        borderBottom: '1px solid rgba(201,162,39,0.15)',
      }}
    >
      {/* Barre principale */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src={`${BASE_PATH}/logo-tmt.png`}
            alt="TMT Travaux"
            width={220}
            height={73}
            style={{ height: '64px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Liens desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                padding: '8px 14px',
                color: '#F5F0E8',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              marginLeft: '8px',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #C9A227, #D4B94E)',
              color: '#020202',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '8px',
            }}
          >
            Devis Gratuit
          </Link>
        </nav>

        {/* Bouton hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="mobile-btn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '48px',
            height: '48px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(201,162,39,0.3)',
            borderRadius: '8px',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#F5F0E8', borderRadius: '2px', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(0px, 7px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#F5F0E8', borderRadius: '2px', transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#F5F0E8', borderRadius: '2px', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(0px, -7px)' : 'none' }} />
        </button>
      </div>

      {/* Menu déroulant — à l'intérieur du header sticky, pas de problème de positionnement */}
      {open && (
        <div
          style={{
            backgroundColor: '#0d0d0d',
            borderTop: '1px solid rgba(201,162,39,0.2)',
            padding: '8px 12px 16px',
          }}
          className="mobile-menu"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '13px 16px',
                color: '#F5F0E8',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRadius: '8px',
                marginBottom: '2px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              textAlign: 'center',
              marginTop: '10px',
              padding: '14px',
              background: 'linear-gradient(135deg, #C9A227, #D4B94E)',
              color: '#020202',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: '10px',
              textDecoration: 'none',
            }}
          >
            Devis Gratuit
          </Link>
        </div>
      )}

      <style>{`
        .desktop-nav { display: none !important; }
        .mobile-btn { display: flex !important; }
        .mobile-menu { display: block; }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
