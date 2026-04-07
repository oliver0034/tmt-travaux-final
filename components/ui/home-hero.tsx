'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import AnimatedButton from '@/components/ui/animated-button';
import { BASE_PATH } from '@/lib/config';

export default function HomeHero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={`${BASE_PATH}/logo-tmt.png`}
      bgImageSrc="https://images.pexels.com/photos/6245621/pexels-photo-6245621.jpeg?auto=compress&cs=tinysrgb&w=1920"
      title="Maçonnerie & Terrassement"
      date="Hérault (34) — Garantie Décennale"
      scrollToExpand="Scrollez pour découvrir"
      textBlend
    >
      {/* Content revealed after expansion */}
      <div className="max-w-4xl mx-auto text-center py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal leading-tight mb-6">
          Entreprise de Maçonnerie &amp; Terrassement dans l&apos;Hérault —{' '}
          <span className="text-gradient-gold">TMT Travaux</span>
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-10">
          TMT Travaux réalise vos projets de maçonnerie, terrassement et rénovation dans l&apos;Hérault (34).
          Fondations, gros œuvre, VRD, extension de maison : chaque intervention repose sur une expertise
          technique rigoureuse, une garantie décennale et une exécution conforme aux normes DTU.
          Devis gratuit sous 48h — intervention à Paulhan, Clermont-l&apos;Hérault, Pézenas, Lodève, Gignac.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <AnimatedButton href="/contact" variant="gold" label="Demander un Devis Gratuit" />
          <AnimatedButton href="/terrassement" variant="light" label="Nos Prestations" />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Assurance décennale
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Devis gratuit sous 48h
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Intervention rapide
          </div>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
