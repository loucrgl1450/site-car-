import { useId } from 'react';

type LogoProps = {
  size?: number;
  wordmarkClass?: string;
  showWordmark?: boolean;
};

export default function Logo({ size = 54, wordmarkClass = 'text-ink', showWordmark = true }: LogoProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo Speed & Clean"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={`b-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4FA8FF" />
            <stop offset="55%" stopColor="#007BFF" />
            <stop offset="100%" stopColor="#0A4D9E" />
          </linearGradient>
          <linearGradient id={`s-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fafafa" />
            <stop offset="45%" stopColor="#c3c3c8" />
            <stop offset="100%" stopColor="#75757a" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="47" fill="#0B0B0D" />
        <path d="M50 5 A45 45 0 0 1 93 40" fill="none" stroke={`url(#b-${id})`} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M50 8 A42 42 0 0 1 88 40" fill="none" stroke={`url(#b-${id})`} strokeWidth="1" opacity=".5" strokeLinecap="round" />
        <path d="M93 60 A45 45 0 0 1 53 95" fill="none" stroke={`url(#s-${id})`} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M88 60 A42 42 0 0 1 55 92" fill="none" stroke={`url(#s-${id})`} strokeWidth="1" opacity=".5" strokeLinecap="round" />
        <g transform="translate(50,52) skewX(-8) translate(-50,-52)">
          <path
            d="M62,26 C50,17 30,19 25,30 C21,40 34,44 49,48 C65,52 71,60 66,71 C61,81 42,85 30,77"
            fill="none"
            stroke={`url(#b-${id})`}
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path d="M78,32 A23,23 0 1,0 78,72" fill="none" stroke={`url(#s-${id})`} strokeWidth="15" />
        </g>
      </svg>
      {showWordmark && (
        <span className={`whitespace-nowrap font-extrabold tracking-tight text-[19px] ${wordmarkClass}`}>
          SPEED<span className="text-primary mx-0.5">&</span>CLEAN
        </span>
      )}
    </span>
  );
}
