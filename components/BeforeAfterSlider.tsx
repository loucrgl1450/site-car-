'use client';

import { useCallback, useRef, useState } from 'react';
import Reveal from './Reveal';

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 2));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 2));
  };

  return (
    <section id="avantapres" className="bg-[#F4F6F9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Avant / Après
          </span>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            La transformation en un geste
          </h2>
          <p className="text-ink-mute">Faites glisser le curseur pour révéler le résultat.</p>
        </Reveal>

        <Reveal>
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="relative aspect-[16/8] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-3xl border border-ink/10 shadow-[0_30px_60px_-30px_rgba(0,123,255,.3)]"
          >
            {/* Après */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: 'linear-gradient(150deg,#007BFF 0%,#020204 100%)' }}
            >
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    'linear-gradient(115deg, transparent 30%, rgba(234,244,255,.5) 46%, rgba(234,244,255,.75) 50%, rgba(234,244,255,.5) 54%, transparent 70%)',
                }}
              />
            </div>

            {/* Avant */}
            <div aria-hidden className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <div
                className="absolute inset-y-0 left-0 w-[80vw] max-w-[1192px]"
                style={{ background: 'linear-gradient(150deg,#2a2a2e 0%,#050505 100%)' }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      'repeating-radial-gradient(circle at 35% 40%, transparent 0 26px, rgba(255,255,255,.05) 26px 28px)',
                  }}
                />
              </div>
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
              Avant
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Après
            </span>

            {/* Poignée */}
            <div
              role="slider"
              tabIndex={0}
              aria-label="Comparer avant et après"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              onKeyDown={onKeyDown}
              className="absolute inset-y-0 z-10 -translate-x-1/2 outline-none"
              style={{ left: `${pos}%` }}
            >
              <span aria-hidden className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(255,255,255,.6)]" />
              <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-offset-2 transition-shadow focus-visible:ring-2 focus-visible:ring-primary">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path d="M8 5l-6 7 6 7M16 5l6 7-6 7" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
