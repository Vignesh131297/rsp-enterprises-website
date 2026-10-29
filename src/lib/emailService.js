// Sends quote requests by email through EmailJS (https://www.emailjs.com), which works from a
// static site with no server of our own. The email layout lives in email-templates/.
// Configure with the VITE_EMAILJS_* variables (see .env.example); without them email is off and
// the form falls back to WhatsApp.

const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export function emailConfig() {
  const env = import.meta.env;
  const config = {
    serviceId: env.VITE_EMAILJS_SERVICE_ID,
    templateId: env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
  };
  return Object.values(config).every(Boolean) ? config : null;
}

// Resolves to { ok: true } or { ok: false, reason: 'not-configured' | 'rejected' | 'network' }.
export async function sendEnquiryEmail(templateParams) {
  const config = emailConfig();
  if (!config) return { ok: false, reason: 'not-configured' };
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        template_params: templateParams,
      }),
    });
    if (response.ok) return { ok: true };
    return { ok: false, reason: 'rejected', detail: await response.text() };
  } catch (error) {
    return { ok: false, reason: 'network', detail: String(error) };
  }
}
