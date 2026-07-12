import Reveal from './Reveal';

const ADDRESS = '72 Route de Beaupuy, 85000 Mouilleron-le-Captif';
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

export default function MapSection() {
  return (
    <section id="localisation" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Localisation
          </span>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Où nous trouver</h2>
          <p className="text-ink-mute">{ADDRESS}</p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 shadow-card">
            <iframe
              src={MAP_EMBED}
              title="Carte Google Maps — Speed & Clean, 72 Route de Beaupuy, Mouilleron-le-Captif"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
            <a
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-6 py-3.5 font-semibold text-white shadow-cta transition-transform duration-300 ease-premium hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                <path
                  d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Itinéraire GPS
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
