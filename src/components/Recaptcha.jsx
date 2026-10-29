import { useEffect, useRef } from 'react';
import { loadRecaptcha } from '../lib/recaptcha';

const TOKEN_TIMEOUT_MS = 120000;

// Invisible reCAPTCHA v2: no tick box. When the form is sent, getToken() runs the check (Google
// shows a picture puzzle only if it is unsure) and resolves with the token, or '' if it fails.
// Hands the parent { getToken, reset } once ready; `onReady` must be stable (useCallback).
export default function Recaptcha({ siteKey, onReady }) {
  const box = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let pending = null;
    const settle = (token) => {
      pending?.(token);
      pending = null;
    };

    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !box.current || box.current.childElementCount) return;
        const id = grecaptcha.render(box.current, {
          sitekey: siteKey,
          size: 'invisible',
          badge: 'inline',
          callback: (token) => settle(token),
          'error-callback': () => settle(''),
          'expired-callback': () => settle(''),
        });
        onReady({
          getToken: () =>
            new Promise((resolve) => {
              pending = resolve;
              setTimeout(() => settle(''), TOKEN_TIMEOUT_MS);
              grecaptcha.execute(id);
            }),
          reset: () => grecaptcha.reset(id),
        });
      })
      .catch(() => onReady(null));

    return () => {
      cancelled = true;
    };
  }, [siteKey, onReady]);

  return <div ref={box} className="recaptcha" />;
}
