'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SLOTS } from './Booking';

type Props = {
  selectedDate: Date | null;
  onSelectDate: (d: Date | null) => void;
  selectedSlot: string | null;
  onSelectSlot: (s: string | null) => void;
};

const WEEKDAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

/* Deterministic demo availability: Sundays closed, some days fully booked. */
const isFullyBooked = (d: Date) => (d.getDate() * 7 + d.getMonth() * 3) % 9 === 0;
const isSlotTaken = (d: Date, idx: number) => (d.getDate() + idx * 2) % 5 === 0;

export default function BookingCalendar({ selectedDate, onSelectDate, selectedSlot, onSelectSlot }: Props) {
  const [today, setToday] = useState<Date | null>(null);
  const [month, setMonth] = useState<Date | null>(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now);
    setMonth(new Date(now.getFullYear(), now.getMonth(), 1));
  }, []);

  const cells = useMemo(() => {
    if (!month) return [];
    const firstWeekday = (month.getDay() + 6) % 7; // Monday-first
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const list: (Date | null)[] = Array.from({ length: firstWeekday }, () => null);
    for (let d = 1; d <= daysInMonth; d++) list.push(new Date(month.getFullYear(), month.getMonth(), d));
    return list;
  }, [month]);

  if (!today || !month) {
    return (
      <div className="h-[480px] animate-pulse rounded-3xl border border-ink/10 bg-[#F4F6F9]" aria-hidden />
    );
  }

  const monthLabel = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(month);
  const isCurrentMonth = month.getFullYear() === today.getFullYear() && month.getMonth() === today.getMonth();

  const changeMonth = (delta: number) => {
    setDirection(delta);
    setMonth(new Date(month.getFullYear(), month.getMonth() + delta, 1));
  };

  const dayState = (d: Date): 'past' | 'closed' | 'full' | 'open' => {
    if (d < today) return 'past';
    if (d.getDay() === 0) return 'closed';
    if (isFullyBooked(d)) return 'full';
    return 'open';
  };

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => changeMonth(-1)}
          disabled={isCurrentMonth}
          aria-label="Mois précédent"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/15 text-ink transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
        >
          ←
        </button>
        <AnimatePresence mode="wait">
          <motion.p
            key={monthLabel}
            initial={{ opacity: 0, x: 14 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 * direction }}
            transition={{ duration: 0.25 }}
            className="text-lg font-bold capitalize text-ink"
          >
            {monthLabel}
          </motion.p>
        </AnimatePresence>
        <button
          onClick={() => changeMonth(1)}
          aria-label="Mois suivant"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/15 text-ink transition-colors hover:border-primary hover:text-primary"
        >
          →
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 text-center text-xs font-semibold uppercase tracking-wider text-ink-mute">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-2">
            {w}
          </span>
        ))}
      </div>

      <div role="grid" aria-label={`Disponibilités ${monthLabel}`} className="grid grid-cols-7 gap-1.5">
        {cells.map((d, i) => {
          if (!d) return <span key={`e-${i}`} aria-hidden />;
          const state = dayState(d);
          const selected = selectedDate ? sameDay(d, selectedDate) : false;
          const disabled = state !== 'open';
          return (
            <button
              key={d.toISOString()}
              onClick={() => onSelectDate(selected ? null : d)}
              disabled={disabled}
              aria-pressed={selected}
              aria-label={`${d.getDate()} ${monthLabel}${state === 'closed' ? ' — fermé' : state === 'full' ? ' — complet' : state === 'past' ? ' — passé' : ''}`}
              className={`relative aspect-square rounded-xl text-sm font-semibold transition-all duration-200 ${
                selected
                  ? 'bg-gradient-to-br from-primary to-primary-light text-white shadow-cta'
                  : disabled
                    ? 'cursor-not-allowed text-ink/25'
                    : 'text-ink hover:bg-primary/10 hover:text-primary-dark'
              }`}
            >
              {d.getDate()}
              {state === 'full' && (
                <span aria-hidden className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-400" />
              )}
              {state === 'open' && !selected && (
                <span aria-hidden className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary/50" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-ink/10 pt-5 text-xs text-ink-mute">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60" /> Disponible
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Complet
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ink/20" /> Fermé (dimanche)
        </span>
      </div>

      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 0.84, 0.44, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-6 mb-3 text-sm font-semibold text-ink">
              Créneaux du{' '}
              {new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(selectedDate)}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SLOTS.map((s, idx) => {
                const taken = isSlotTaken(selectedDate, idx);
                const active = selectedSlot === s;
                return (
                  <button
                    key={s}
                    onClick={() => onSelectSlot(active ? null : s)}
                    disabled={taken}
                    aria-pressed={active}
                    className={`rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      active
                        ? 'border-primary bg-primary text-white shadow-cta'
                        : taken
                          ? 'cursor-not-allowed border-ink/10 text-ink/25 line-through'
                          : 'border-ink/15 text-ink hover:border-primary hover:text-primary-dark'
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
