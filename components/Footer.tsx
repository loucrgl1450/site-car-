import Logo from './Logo';

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0B] pt-20 text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 90% 0%, rgba(14,137,186,.12), transparent 60%)' }}
      />
      <div className="relative mx-auto grid max-w-[1240px] gap-11 border-b border-white/10 px-6 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#hero" aria-label="Retour à l'accueil" className="mb-4 inline-block">
            <Logo height={44} />
          </a>
          <p className="mb-5 text-sm leading-relaxed text-silver-dim">
            Detailing automobile premium. La référence pour sublimer votre véhicule, pour particuliers et
            professionnels.
          </p>
          <div className="flex gap-2.5">
            {[
              { label: 'Instagram', short: 'IG' },
              { label: 'Facebook', short: 'FB' },
              { label: 'TikTok', short: 'TT' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[11px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary-glow"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Navigation pied de page">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-silver">Navigation</h4>
          {[
            ['À propos', '#apropos'],
            ['Prestations', '#prestations'],
            ['Options', '#options'],
            ['Réservation', '#reservation'],
            ['Avant / Après', '#avantapres'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="mb-3 block text-sm text-silver-dim transition-colors hover:text-primary-glow">
              {label}
            </a>
          ))}
        </nav>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-silver">Contact</h4>
          <p className="mb-2.5 text-sm leading-relaxed text-silver-dim">
            Boris Corniere
            <br />
            72 Route de Beaupuy
            <br />
            85000 Mouilleron-le-Captif
          </p>
          <a href="tel:+33662291553" className="mb-2.5 block text-sm text-silver-dim transition-colors hover:text-primary-glow">
            06 62 29 15 53
          </a>
          <a
            href="mailto:boriscorniere9@gmail.com"
            className="block break-all text-sm text-silver-dim transition-colors hover:text-primary-glow"
          >
            boriscorniere9@gmail.com
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-silver">Horaires</h4>
          <p className="mb-2.5 text-sm leading-relaxed text-silver-dim">
            Lundi – Samedi
            <br />
            09h00 – 19h00
          </p>
          <p className="text-sm text-silver-dim">Dimanche : Fermé</p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-6">
        <details className="mb-3 text-xs text-silver-dim">
          <summary className="cursor-pointer font-semibold transition-colors hover:text-primary-glow">
            Mentions légales
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed">
            Éditeur : Speed &amp; Clean — Boris Corniere, 72 Route de Beaupuy, 85000 Mouilleron-le-Captif —
            Tél. : 06 62 29 15 53 — Email : boriscorniere9@gmail.com. Hébergement : GitHub Pages (GitHub, Inc., 88
            Colin P. Kelly Jr. St., San Francisco, CA 94107, USA). Les informations présentées sur ce site sont
            fournies à titre indicatif et ne constituent pas un engagement contractuel.
          </p>
        </details>
        <div className="flex flex-wrap justify-between gap-2 text-xs text-silver-dim">
          <span>© {YEAR} Speed &amp; Clean. Tous droits réservés.</span>
          <span>Detailing automobile premium</span>
        </div>
      </div>
    </footer>
  );
}
