'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = () => setOpen(false);

  const menuPortal = mounted && open ? createPortal(
    <>
      {/* Overlay cliquable */}
      <div
        onClick={close}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99998,
          backgroundColor: 'rgba(0,0,0,0.55)',
          WebkitTapHighlightColor: 'transparent',
        }}
      />

      {/* Panneau menu */}
      <div
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          zIndex: 99999,
          backgroundColor: '#0d0d0d',
          borderBottom: '2px solid rgba(201,162,39,0.3)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.8)',
          padding: '10px 16px 18px',
        }}
      >
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={close}
            style={{
              display: 'block',
              padding: '14px 18px',
              color: '#F5F0E8',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {item.name}
          </a>
        ))}

        <a
          href="/contact"
          onClick={close}
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: '12px',
            padding: '15px',
            background: 'linear-gradient(135deg, #C9A227, #D4B94E)',
            color: '#020202',
            fontWeight: 700,
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderRadius: '10px',
            textDecoration: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          Devis Gratuit
        </a>
      </div>
    </>,
    document.body
  ) : null;

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#020202',
          borderBottom: '1px solid rgba(201,162,39,0.15)',
        }}
      >
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
          <a href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src={`${BASE_PATH}/logo-tmt.png`}
              alt="TMT Travaux"
              width={220}
              height={73}
              style={{ height: '64px', width: 'auto' }}
              priority
            />
          </a>

          {/* Liens desktop (cachés sur mobile via style tag) */}
          <nav id="desktop-nav">
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
            id="mobile-burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
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
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#F5F0E8', borderRadius: '2px', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(0px, 7px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#F5F0E8', borderRadius: '2px', transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#F5F0E8', borderRadius: '2px', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(0px, -7px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Menu injecté dans document.body via portal */}
      {menuPortal}

      <style>{`
        #desktop-nav { display: none; }
        #mobile-burger { display: flex; }
        @media (min-width: 1024px) {
          #desktop-nav { display: flex; align-items: center; gap: 4px; }
          #mobile-burger { display: none !important; }
        }
      `}</style>
    </>
  );
}
