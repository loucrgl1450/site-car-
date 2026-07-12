'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import BookingCalendar from './BookingCalendar';
import BookingCard from './BookingCard';

export const SERVICES = [
  'Nettoyage intérieur',
  'Nettoyage extérieur',
  'Déstickage',
  'Lustrage',
  "Rénovation d'optiques",
  'Detailing automobile',
];

export const SLOTS = ['09:00', '10:30', '14:00', '15:30', '17:00'];

export default function Booking() {
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  const selectDate = (d: Date | null) => {
    setDate(d);
    setSlot(null);
  };

  return (
    <section id="reservation" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Réservation
          </span>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Choisissez votre créneau
          </h2>
          <p className="text-ink-mute">
            Sélectionnez une date disponible et un horaire : nous confirmons votre rendez-vous sous 24h.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal>
            <BookingCalendar selectedDate={date} onSelectDate={selectDate} selectedSlot={slot} onSelectSlot={setSlot} />
          </Reveal>
          <Reveal delay={0.1}>
            <BookingCard service={service} onServiceChange={setService} date={date} slot={slot} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
