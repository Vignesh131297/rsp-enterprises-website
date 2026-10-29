import { img } from '../lib/assets';

// Full-bleed hero photo. Files live in public/img/hero/<name>-<width>.jpg; the browser picks
// the smallest one that is sharp enough for the screen.
export default function HeroImage({ name, widths, alt, position = '50% 50%' }) {
  const src = (w) => img(`hero/${name}-${w}.jpg`);
  return (
    <img
      src={src(Math.max(...widths))}
      srcSet={widths.map((w) => `${src(w)} ${w}w`).join(', ')}
      sizes="100vw"
      fetchPriority="high"
      alt={alt}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: position,
        filter: 'brightness(1.12) saturate(1.05)',
      }}
    />
  );
}
