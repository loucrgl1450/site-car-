import Reveal from './Reveal';

type Option = { name: string; price: string; text: string; icon: JSX.Element };

const s = { stroke: 'currentColor', strokeWidth: 1.6 };

const OPTIONS: Option[] = [
  {
    name: 'Shampoing sièges',
    price: '+25€',
    text: 'Nettoyage en profondeur des tissus par injection-extraction.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 18V8a3 3 0 013-3h0a3 3 0 013 3v10" {...s} strokeLinecap="round" />
        <path d="M5 18h12a2 2 0 012 2v1H5a2 2 0 01-2-2v-9" {...s} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Traitement cuir',
    price: '+35€',
    text: 'Nettoyage doux, nutrition et protection des cuirs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 8c0-2 2-4 4-4h8c2 0 4 2 4 4v8c0 2-2 4-4 4H8c-2 0-4-2-4-4V8z" {...s} />
        <path d="M4 12h16M12 4v16" {...s} opacity=".5" />
      </svg>
    ),
  },
  {
    name: 'Protection céramique',
    price: '+120€',
    text: 'Bouclier hydrophobe longue durée pour la carrosserie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" {...s} strokeLinejoin="round" />
        <path d="M12 8l1.2 3L16 12l-2.8 1L12 16l-1.2-3L8 12l2.8-1L12 8z" fill="currentColor" opacity=".4" />
      </svg>
    ),
  },
  {
    name: 'Décontamination ferreuse',
    price: '+30€',
    text: 'Élimination des particules incrustées avant lustrage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" {...s} />
        <path d="M8 12h8M12 8v8" {...s} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Rénovation plastiques',
    price: '+20€',
    text: 'Ravivage des plastiques extérieurs ternis par le temps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="6" width="16" height="12" rx="3" {...s} />
        <path d="M8 10h8M8 14h5" {...s} strokeLinecap="round" opacity=".6" />
      </svg>
    ),
  },
  {
    name: 'Désodorisation ozone',
    price: '+25€',
    text: 'Neutralisation des odeurs tenaces (tabac, animaux…).',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 15a4 4 0 014-4 5 5 0 019.6 1.5A3.5 3.5 0 0117 19H7a4 4 0 01-2-4z" {...s} strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Protection jantes',
    price: '+25€',
    text: 'Traitement anti-poussière de frein, entretien facilité.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8.5" {...s} />
        <circle cx="12" cy="12" r="2.5" {...s} />
        <path d="M12 3.5v6M12 14.5v6M3.5 12h6M14.5 12h6" {...s} opacity=".6" />
      </svg>
    ),
  },
  {
    name: 'Pressing tapis & moquettes',
    price: '+15€',
    text: 'Lavage et séchage des tapis pour un sol impeccable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" {...s} />
        <path d="M7 8l10 8M7 16L17 8" {...s} opacity=".5" />
      </svg>
    ),
  },
];

export default function OptionsGrid() {
  return (
    <section id="options" className="bg-[#F4F4F3] py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Options
          </span>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Personnalisez votre prestation
          </h2>
          <p className="text-ink-mute">Des options à la carte pour aller encore plus loin dans le détail.</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OPTIONS.map((o, i) => (
            <Reveal key={o.name} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition-all duration-400 ease-premium hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card-hover">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-dark transition-transform duration-300 ease-premium group-hover:scale-110 [&>svg]:h-6 [&>svg]:w-6">
                    {o.icon}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[13px] font-bold text-primary-dark">
                    {o.price}
                  </span>
                </div>
                <p className="mb-1.5 font-bold text-ink">{o.name}</p>
                <p className="text-[13.5px] text-ink-mute">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
