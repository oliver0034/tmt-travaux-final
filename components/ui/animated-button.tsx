'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { type ReactNode } from 'react';

export type ButtonVariant = 'gold' | 'dark' | 'light';

export interface AnimatedButtonProps {
  href?: string;
  variant?: ButtonVariant;
  label: string;
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export default function AnimatedButton({
  href,
  variant = 'gold',
  label,
  icon,
  className,
  type = 'button',
  onClick,
  disabled,
}: AnimatedButtonProps) {
  const letters = Array.from(label).map((ch, i) => (
    <span
      key={i}
      className={clsx(
        'anim-letter',
        variant === 'gold' && 'anim-letter-gold',
        variant === 'dark' && 'anim-letter-dark',
        variant === 'light' && 'anim-letter-light',
      )}
      style={{ animationDelay: `${i * 0.07}s` }}
    >
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ));

  const content = (
    <>
      {icon && (
        <span className="mr-2 shrink-0 anim-icon flex items-center">
          {icon}
        </span>
      )}
      <span className="inline-flex">{letters}</span>
    </>
  );

  const cls = clsx(
    'anim-cta',
    variant === 'gold' && 'anim-cta-gold gradient-gold text-black-deep font-bold',
    variant === 'dark' && 'anim-cta-dark border-2 border-gold/40 text-white-warm font-semibold',
    variant === 'light' && 'anim-cta-light border-2 border-charcoal/20 text-charcoal font-semibold',
    'inline-flex items-center justify-center text-sm tracking-wider px-8 py-4 rounded uppercase',
    disabled && 'opacity-60 cursor-not-allowed',
    className,
  );

  if (href) {
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a href={href} className={cls}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
