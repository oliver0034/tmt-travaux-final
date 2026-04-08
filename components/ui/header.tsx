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
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 9000, backgroundColor: '#020202', borderBottom: '1px solid rgba(201,162,39,0.15)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '88px' }}>

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={`${BASE_PATH}/logo-tmt.png`}
              alt="TMT Travaux"
              width={260}
              height={87}
              style={{ height: '72px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'none' }} className="lg-nav">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} style={{ padding: '8px 16px', color: '#F5F0E8', textDecoration: 'none', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bouton hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '44px',
              height: '44px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <span style={{
              display: 'block', width: '24px', height: '2px', backgroundColor: '#F5F0E8',
              transition: 'transform 0.2s',
              transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px', backgroundColor: '#F5F0E8',
              transition: 'opacity 0.2s',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px', backgroundColor: '#F5F0E8',
              transition: 'transform 0.2s',
              transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Menu mobile — rendu conditionnel pur, affiché uniquement si open */}
      {open && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9001,
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}
          />

          {/* Panneau de navigation */}
          <div style={{
            position: 'fixed',
            top: '88px',
            left: 0,
            right: 0,
            zIndex: 9002,
            backgroundColor: '#0A0A0A',
            borderBottom: '1px solid rgba(201,162,39,0.25)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
            padding: '12px 16px 20px',
          }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 16px',
                  color: '#F5F0E8',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderRadius: '8px',
                  marginBottom: '4px',
                }}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA devis */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '12px',
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
        </>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .lg-nav { display: flex !important; align-items: center; gap: 4px; }
          button[aria-label="Menu"] { display: none !important; }
        }
      `}</style>
    </>
  );
}
