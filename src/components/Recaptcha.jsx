import { useEffect, useRef } from 'react';
import { loadRecaptcha } from '../lib/recaptcha';

// Renders the reCAPTCHA checkbox and hands the parent { getToken, reset } once it is ready.
// `onReady` must be stable (wrap it in useCallback).
export default function Recaptcha({ siteKey, onReady }) {
  const box = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !box.current || box.current.childElementCount) return;
        const id = grecaptcha.render(box.current, { sitekey: siteKey });
        onReady({ getToken: () => grecaptcha.getResponse(id), reset: () => grecaptcha.reset(id) });
      })
      .catch(() => onReady(null));
    return () => {
      cancelled = true;
    };
  }, [siteKey, onReady]);

  return <div ref={box} className="recaptcha" />;
}
