/**
 * Official brand asset — single source of truth: public/logo-speed-clean.svg.
 * Intrinsic ratio 1000x200 (5:1); never stretch it.
 * basePath must be prefixed manually: next/image skips it with `unoptimized` + static export.
 */
const BASE_PATH = '/site-car-';

export default function Logo({ height = 48, priority = false }: { height?: number; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${BASE_PATH}/logo-speed-clean.svg`}
      alt="Speed & Clean — Esthétique automobile"
      width={height * 5}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      style={{ height, width: 'auto' }}
    />
  );
}
