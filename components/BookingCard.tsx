'use client';

import { SERVICES } from './Booking';

type Props = {
  service: string;
  onServiceChange: (s: string) => void;
  date: Date | null;
  slot: string | null;
};

const PHONE = '06 62 29 15 53';
const PHONE_INTL = '+33662291553';
const EMAIL = 'boriscorniere9@gmail.com';

export default function BookingCard({ service, onServiceChange, date, slot }: Props) {
  const dateLabel = date
    ? new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(date)
    : null;

  const ready = Boolean(service && date && slot);

  const mailtoBooking = () => {
    const subject = encodeURIComponent(`Réservation — ${service}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite réserver la prestation suivante :\n\n• Prestation : ${service}\n• Date : ${dateLabel}\n• Heure : ${slot}\n\nMerci de me confirmer ce créneau.\n\nCordialement`,
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const mailtoQuote = `mailto:${EMAIL}?subject=${encodeURIComponent('Demande de devis')}`;

  return (
    <aside className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-8 lg:sticky lg:top-28">
      <h3 className="mb-6 text-lg font-bold text-ink">Récapitulatif</h3>

      <label htmlFor="booking-service" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-mute">
        Prestation
      </label>
      <select
        id="booking-service"
        value={service}
        onChange={(e) => onServiceChange(e.target.value)}
        className="mb-5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-ink transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>
          Sélectionnez une prestation
        </option>
        {SERVICES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <dl className="mb-6 space-y-3 border-y border-ink/10 py-5">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-sm text-ink-mute">Date</dt>
          <dd className={`text-right text-sm font-semibold capitalize ${date ? 'text-ink' : 'text-ink/35'}`}>
            {dateLabel ?? 'À sélectionner'}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-sm text-ink-mute">Heure</dt>
          <dd className={`text-right text-sm font-semibold ${slot ? 'text-ink' : 'text-ink/35'}`}>
            {slot ?? 'À sélectionner'}
          </dd>
        </div>
      </dl>

      <a
        href={ready ? mailtoBooking() : undefined}
        aria-disabled={!ready}
        className={`mb-3 flex items-center justify-center rounded-xl px-6 py-4 font-semibold transition-all duration-300 ease-premium ${
          ready
            ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-cta hover:-translate-y-0.5'
            : 'cursor-not-allowed bg-ink/5 text-ink/35'
        }`}
      >
        Réserver ce créneau
      </a>
      <a
        href={mailtoQuote}
        className="flex items-center justify-center rounded-xl border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary-dark"
      >
        Demander un devis
      </a>

      <div className="mt-6 space-y-2.5 text-sm">
        <a href={`tel:${PHONE_INTL}`} className="flex items-center gap-3 text-ink-soft transition-colors hover:text-primary-dark">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-dark" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
              <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {PHONE}
        </a>
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all text-ink-soft transition-colors hover:text-primary-dark">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-dark" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </span>
          {EMAIL}
        </a>
      </div>
    </aside>
  );
}
