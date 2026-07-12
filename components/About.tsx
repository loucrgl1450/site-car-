'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  return (
    <span ref={ref} className="text-4xl font-black text-ink">
      {value >= target && target >= 500 ? '+' : ''}
      {value}
      <span className="ml-0.5 text-2xl font-extrabold text-primary-dark">{suffix}</span>
    </span>
  );
}

const VALUES = [
  {
    title: 'Produits professionnels',
    text: 'Des gammes haut de gamme, efficaces et sans risque pour vos matériaux.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Travail minutieux',
    text: 'Chaque détail est traité avec précision, du premier rinçage à la finition.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="apropos" className="bg-[#F4F6F9] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div
            role="img"
            aria-label="Préparation esthétique d'un intérieur automobile, mousse et vapeur"
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 shadow-card"
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <defs>
                <linearGradient id="aboutBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0A4D9E" />
                  <stop offset="55%" stopColor="#0a0d12" />
                  <stop offset="100%" stopColor="#000" />
                </linearGradient>
                <radialGradient id="aboutFoam" cx="30%" cy="25%" r="60%">
                  <stop offset="0%" stopColor="#eaf4ff" stopOpacity=".5" />
                  <stop offset="100%" stopColor="#eaf4ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="480" height="360" fill="url(#aboutBg)" />
              <rect width="480" height="360" fill="url(#aboutFoam)" />
              <g fill="#eaf4ff" opacity=".85">
                <circle cx="90" cy="80" r="4" />
                <circle cx="130" cy="60" r="2.5" />
                <circle cx="170" cy="95" r="3" />
                <circle cx="220" cy="70" r="2" />
                <circle cx="320" cy="120" r="2.5" />
                <circle cx="380" cy="90" r="3.5" />
                <circle cx="270" cy="150" r="2" />
              </g>
              <path d="M0 300 C120 260, 240 260, 480 310 L480 360 L0 360 Z" fill="#007BFF" opacity=".25" />
              <path d="M0 320 C140 285, 280 285, 480 330 L480 360 L0 360 Z" fill="#3D9CFF" opacity=".2" />
            </svg>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-bold text-white">L&apos;atelier Speed &amp; Clean</p>
              <p className="text-[13px] text-white/65">Mouilleron-le-Captif · Vendée</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-primary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />À propos
            </span>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              La passion du détail, l&apos;exigence du résultat
            </h2>
            <p className="mb-4 text-ink-mute">
              Speed &amp; Clean, c&apos;est plus de dix ans d&apos;expérience dans la préparation esthétique automobile, au
              service des particuliers comme des professionnels.
            </p>
            <p className="mb-10 text-ink-mute">
              Chaque véhicule est traité comme une pièce unique : produits professionnels, gestes précis et finitions
              dignes d&apos;un showroom.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-primary/25 bg-white p-6 shadow-card">
                <Counter target={500} suffix="" />
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-mute">Véhicules traités</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-primary/25 bg-white p-6 shadow-card">
                <Counter target={100} suffix="%" />
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-mute">Satisfaction client</p>
              </div>
            </Reveal>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.15 + i * 0.05}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                    {v.icon}
                  </span>
                  <p className="font-bold text-ink">{v.title}</p>
                  <p className="mt-1 text-sm text-ink-mute">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
