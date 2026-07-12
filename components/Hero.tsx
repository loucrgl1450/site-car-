'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -right-32 -top-44 h-[520px] w-[520px] rounded-full bg-primary opacity-20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-24 h-[400px] w-[400px] rounded-full bg-primary-light opacity-[.14] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-primary-dark"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(14,137,186,.6)]" />
            Detailing automobile premium
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 0.84, 0.44, 1] }}
            className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[58px]"
          >
            Redonnez à votre véhicule{' '}
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-deep bg-clip-text text-transparent">
              son éclat d&apos;origine
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 0.84, 0.44, 1] }}
            className="mb-9 max-w-[520px] text-lg text-ink-mute"
          >
            Expert en nettoyage automobile premium, rénovation et detailing professionnel.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 0.84, 0.44, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#reservation"
              className="rounded-lg bg-gradient-to-r from-primary to-primary-light px-8 py-4 font-semibold text-white shadow-cta transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-[0_14px_36px_-8px_rgba(14,137,186,.75)]"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#prestations"
              className="rounded-lg border border-ink/25 bg-white/60 px-8 py-4 font-semibold text-ink backdrop-blur transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary hover:bg-primary/5"
            >
              Voir nos prestations
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 34, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 0.84, 0.44, 1] }}
          style={{ y: yVisual }}
          className="mx-auto w-full max-w-[460px]"
        >
          <div
            role="img"
            aria-label="Carrosserie noire lustrée avec reflet lumineux, résultat d'un detailing Speed & Clean"
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10 shadow-[0_40px_80px_-30px_rgba(14,137,186,.35)]"
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <defs>
                <linearGradient id="heroBody" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1c1e22" />
                  <stop offset="45%" stopColor="#08090b" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <linearGradient id="heroSweep" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3FB4E6" stopOpacity="0" />
                  <stop offset="45%" stopColor="#bfe4f2" stopOpacity=".65" />
                  <stop offset="55%" stopColor="#eaf6fb" stopOpacity=".85" />
                  <stop offset="65%" stopColor="#bfe4f2" stopOpacity=".65" />
                  <stop offset="100%" stopColor="#3FB4E6" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="heroRim" cx="100%" cy="0%" r="75%">
                  <stop offset="0%" stopColor="#0E89BA" stopOpacity=".5" />
                  <stop offset="100%" stopColor="#0E89BA" stopOpacity="0" />
                </radialGradient>
                <filter id="heroBlur" x="-150%" y="-150%" width="400%" height="400%">
                  <feGaussianBlur stdDeviation="12" />
                </filter>
              </defs>
              <rect width="420" height="420" fill="url(#heroBody)" />
              <rect width="420" height="420" fill="url(#heroRim)" />
              <path
                d="M-60 260 C 60 160, 160 140, 260 90 C 320 60, 380 40, 470 10 L470 60 C 380 90, 320 110, 260 140 C 160 190, 60 210, -60 310 Z"
                fill="none"
                stroke="#1f2126"
                strokeWidth="1"
                opacity=".6"
              />
              <path d="M-80 330 L260 -40 L300 -40 L-40 330 Z" fill="url(#heroSweep)" opacity=".35" filter="url(#heroBlur)" />
              <path d="M-40 300 L230 -20 L255 -20 L-15 300 Z" fill="url(#heroSweep)" filter="url(#heroBlur)" />
              <path d="M-20 285 L245 -10 L253 -10 L-12 285 Z" fill="#ffffff" opacity=".5" />
              <g opacity=".8" fill="#eaf6fb">
                <circle cx="120" cy="150" r="3" />
                <circle cx="150" cy="210" r="2" />
                <circle cx="245" cy="120" r="2.5" />
                <circle cx="300" cy="180" r="1.8" />
                <circle cx="85" cy="240" r="1.6" />
                <circle cx="330" cy="260" r="2" />
              </g>
            </svg>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/85" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-lg font-bold text-white">Boris Corniere</p>
              <p className="text-[13px] text-white/65">+10 ans d&apos;expérience · Particulier &amp; Professionnel</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
