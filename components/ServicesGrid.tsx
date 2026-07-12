import Reveal from './Reveal';

type Service = {
  title: string;
  tagline: string;
  description: string;
  price: string;
  duration: string;
  gradient: string;
  featured?: boolean;
  icon: JSX.Element;
};

const stroke = { stroke: '#C0C0C0', strokeWidth: 1.6 };

const SERVICES: Service[] = [
  {
    title: 'Nettoyage intérieur',
    tagline: "L'essentiel pour un habitacle propre",
    description: 'Aspiration complète, sièges, plastiques, désinfection et traitement des surfaces.',
    price: '49€',
    duration: '1h - 1h30',
    gradient: 'linear-gradient(150deg,#0063CC 0%,#020204 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 17V9a2 2 0 012-2h12a2 2 0 012 2v8" {...stroke} />
        <path d="M2 17h20v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z" {...stroke} />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" {...stroke} />
      </svg>
    ),
  },
  {
    title: 'Nettoyage extérieur',
    tagline: 'Une finition carrosserie impeccable',
    description: 'Prélavage, lavage carrosserie, jantes, séchage professionnel et protection de finition.',
    price: '39€',
    duration: '45min - 1h',
    gradient: 'linear-gradient(150deg,#007BFF 0%,#020204 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12l2-5a3 3 0 013-2h8a3 3 0 013 2l2 5" {...stroke} />
        <rect x="2" y="12" width="20" height="6" rx="2" {...stroke} />
        <circle cx="7" cy="18" r="1.6" fill="#C0C0C0" />
        <circle cx="17" cy="18" r="1.6" fill="#C0C0C0" />
      </svg>
    ),
  },
  {
    title: 'Déstickage',
    tagline: 'Retrait propre, sans trace ni dommage',
    description: 'Suppression de stickers et adhésifs, retrait de colle, nettoyage des traces, finition.',
    price: '59€',
    duration: '1h - 2h',
    gradient: 'linear-gradient(150deg,#1a3a66 0%,#020204 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 20L14 10" {...stroke} strokeLinecap="round" />
        <path d="M13 4l7 7-3 3-7-7 1.5-1.5" {...stroke} strokeLinejoin="round" />
        <path d="M4 20l2-6 4 4-6 2z" {...stroke} strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Lustrage',
    tagline: 'Profondeur et brillance retrouvées',
    description: 'Correction légère des défauts, ravivage de la couleur, brillance longue durée.',
    price: '89€',
    duration: '2h - 3h',
    gradient: 'linear-gradient(150deg,#2E8FE0 0%,#020204 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" {...stroke} />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" {...stroke} strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" fill="#C0C0C0" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Rénovation d'optiques",
    tagline: 'Transparence et visibilité restaurées',
    description: 'Ponçage professionnel, polissage et protection UV de vos phares.',
    price: '45€',
    duration: '45min - 1h',
    gradient: 'linear-gradient(150deg,#3D9CFF 0%,#020204 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" {...stroke} />
        <circle cx="12" cy="12" r="3" {...stroke} />
      </svg>
    ),
  },
  {
    title: 'Detailing automobile',
    tagline: 'La prestation ultime pour passionnés',
    description: 'Nettoyage minutieux, correction peinture, protection carrosserie, finition premium.',
    price: '149€',
    duration: '3h - 5h',
    gradient: 'linear-gradient(150deg,#007BFF 0%,#000000 100%)',
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"
          stroke="#7CC0FF"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="#007BFF"
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="prestations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Nos prestations
          </span>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Une expertise complète pour votre véhicule
          </h2>
          <p className="text-ink-mute">Six univers de savoir-faire, une seule exigence : la perfection.</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <article
                className={`group h-full overflow-hidden rounded-2xl border bg-white shadow-card transition-all duration-500 ease-premium hover:-translate-y-2 hover:border-primary/50 hover:shadow-card-hover ${
                  s.featured ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-white' : 'border-ink/10'
                }`}
              >
                <div className="relative h-[150px] overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-105"
                    style={{ background: s.gradient }}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85" />
                  {s.featured && (
                    <span className="absolute right-3.5 top-3.5 z-10 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Premium
                    </span>
                  )}
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-silver/40 bg-white/10 backdrop-blur transition-transform duration-500 ease-premium group-hover:scale-110 [&>svg]:h-[26px] [&>svg]:w-[26px]">
                      {s.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{s.title}</h3>
                      <p className="text-[12.5px] text-white/75">{s.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-4">
                    <span className="text-sm text-ink-soft">
                      À partir de <strong className="text-lg font-extrabold text-primary-dark">{s.price}</strong>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-mute">
                      <svg viewBox="0 0 24 24" fill="none" className="h-[15px] w-[15px]" aria-hidden>
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {s.duration}
                    </span>
                  </div>
                  <p className="mb-6 text-sm text-ink-soft">{s.description}</p>
                  <a
                    href="#reservation"
                    className="flex items-center justify-center gap-2 rounded-xl border border-ink/15 bg-[#F4F6F9] px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10"
                  >
                    Choisir cette formule
                    <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
