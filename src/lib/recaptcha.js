// Google reCAPTCHA v2 Invisible. Needed because the EmailJS template has reCAPTCHA verification
// switched on. Turned on by VITE_RECAPTCHA_SITE_KEY: the *site* key of a v2 Invisible key pair
// (the matching secret key goes into the EmailJS template settings).

const SCRIPT_URL = 'https://www.google.com/recaptcha/api.js?render=explicit&onload=__rspRecaptchaReady';
let loading;

export const recaptchaSiteKey = () => import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

export function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      window.__rspRecaptchaReady = () => resolve(window.grecaptcha);
      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;
      script.onerror = () => {
        loading = undefined;
        reject(new Error('reCAPTCHA failed to load'));
      };
      document.head.appendChild(script);
    });
  }
  return loading;
}
