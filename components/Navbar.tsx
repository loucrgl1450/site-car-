'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';

const LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#prestations', label: 'Prestations' },
  { href: '#options', label: 'Options' },
  { href: '#reservation', label: 'Réservation' },
  { href: '#localisation', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const textClass = scrolled ? 'text-white' : 'text-ink';
  const linkClass = scrolled ? 'text-silver hover:text-white' : 'text-ink-soft hover:text-ink';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-500 ease-premium border-b ${
        scrolled
          ? 'bg-[#0B0B0B]/85 backdrop-blur-xl border-white/10 shadow-[0_12px_30px_-18px_rgba(0,0,0,.6)] py-2.5'
          : 'bg-white/55 backdrop-blur-md border-silver/25 py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6">
        <a href="#hero" aria-label="Retour à l'accueil Speed & Clean" className="shrink-0">
          <Logo size={scrolled ? 46 : 54} wordmarkClass={textClass} />
        </a>

        <nav aria-label="Navigation principale" className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`group relative whitespace-nowrap text-sm font-medium transition-colors ${linkClass}`}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 ease-premium group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#reservation"
          className="hidden shrink-0 rounded-lg bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 text-sm font-semibold text-white shadow-cta transition-transform duration-300 ease-premium hover:-translate-y-0.5 lg:inline-flex"
        >
          Prendre rendez-vous
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="relative z-[1100] flex w-7 flex-col gap-[5px] lg:hidden"
        >
          <span
            className={`h-0.5 w-full transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45 bg-ink' : scrolled ? 'bg-white' : 'bg-ink'}`}
          />
          <span className={`h-0.5 w-full transition-all duration-300 ${open ? 'opacity-0' : scrolled ? 'bg-white' : 'bg-ink'}`} />
          <span
            className={`h-0.5 w-full transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45 bg-ink' : scrolled ? 'bg-white' : 'bg-ink'}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Navigation mobile"
            className="fixed inset-0 z-[1050] flex flex-col items-center justify-center gap-7 bg-white/[.98] backdrop-blur-md lg:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                className="text-2xl font-semibold text-ink-soft hover:text-ink"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#reservation"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="mt-2 rounded-lg bg-gradient-to-r from-primary to-primary-light px-8 py-3.5 font-semibold text-white shadow-cta"
            >
              Prendre rendez-vous
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
