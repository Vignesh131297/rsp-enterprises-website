import { useCallback, useEffect, useRef, useState } from 'react';
import { PHONE, mailtoLink, whatsappLink } from '../data/contact';
import { SERVICES, buildEnquiry, emailTemplateParams, enquirySubject, enquiryText } from '../lib/enquiry';
import { emailConfig, sendEnquiryEmail } from '../lib/emailService';
import { recaptchaSiteKey } from '../lib/recaptcha';
import Recaptcha from './Recaptcha';

// idle → sending → sent (email delivered) | whatsapp (email not set up) | failed (email error)
export default function EnquiryForm() {
  const [status, setStatus] = useState('idle');
  const [enquiry, setEnquiry] = useState(null);
  const noticeRef = useRef(null);
  const captcha = useRef(null);
  const siteKey = recaptchaSiteKey();
  const handleCaptchaReady = useCallback((api) => {
    captcha.current = api;
  }, []);

  // The confirmation sits above the form, out of view after pressing Send, so scroll to it.
  useEffect(() => {
    if (status !== 'idle' && status !== 'sending') {
      noticeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [status]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const next = buildEnquiry(fields);
    setEnquiry(next);
    // Hidden "website" field: people never see it, spam bots fill it in.
    if (fields.website) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    const params = emailTemplateParams(next);
    // The EmailJS template checks reCAPTCHA, so the token from the invisible check goes with the email.
    // If the check cannot run (script blocked, puzzle closed), the visitor gets the WhatsApp / call fallback.
    if (siteKey && emailConfig()) {
      const token = (await captcha.current?.getToken()) || '';
      captcha.current?.reset();
      if (!token) {
        setStatus('failed');
        return;
      }
      params['g-recaptcha-response'] = token;
    }
    const result = await sendEnquiryEmail(params);
    if (result.ok) {
      setStatus('sent');
      form.reset();
    } else {
      setStatus(result.reason === 'not-configured' ? 'whatsapp' : 'failed');
    }
  }

  const whatsappHref = enquiry ? whatsappLink(enquiryText(enquiry)) : undefined;
  const emailHref = enquiry ? mailtoLink(enquirySubject(enquiry), enquiryText(enquiry)) : undefined;

  return (
    <form onSubmit={handleSubmit} aria-label="Enquiry form" className="enquiry-form">
      <div role="status" aria-live="polite" ref={noticeRef}>
        {status === 'sent' && enquiry && (
          <div className="notice notice--success">
            <strong>Thank you, {enquiry.name}.</strong> Your enquiry has been emailed to our team. We'll call you on{' '}
            {enquiry.phone} shortly.
            <div className="notice-actions">
              <a className="btn btn--whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Also send on WhatsApp
              </a>
            </div>
          </div>
        )}
        {status === 'whatsapp' && enquiry && (
          <div className="notice notice--info">
            Your enquiry is ready. Tap below to send it to us on WhatsApp.
            <div className="notice-actions">
              <a className="btn btn--whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Send on WhatsApp
              </a>
              <a href={emailHref}>Or send it by email</a>
            </div>
          </div>
        )}
        {status === 'failed' && enquiry && (
          <div className="notice notice--warning">
            We couldn't send your enquiry by email just now. Please send it on WhatsApp or call {PHONE.primary.short}.
            <div className="notice-actions">
              <a className="btn btn--whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Send on WhatsApp
              </a>
              <a href={PHONE.primary.tel}>Call {PHONE.primary.short}</a>
            </div>
          </div>
        )}
      </div>
      <h2 className="form-title">Request a quote</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div className="form-field">
          <label htmlFor="f-name" className="form-label">
            Full name
          </label>
          <input id="f-name" name="name" type="text" required autoComplete="name" className="form-input" />
        </div>
        <div className="form-field">
          <label htmlFor="f-company" className="form-label">
            Company
          </label>
          <input id="f-company" name="company" type="text" autoComplete="organization" className="form-input" />
        </div>
        <div className="form-field">
          <label htmlFor="f-phone" className="form-label">
            Phone / WhatsApp
          </label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9+\s\-]{10,16}"
            title="A 10-digit mobile number, e.g. 98450 12345"
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="f-email" className="form-label">
            Email
          </label>
          <input id="f-email" name="email" type="email" autoComplete="email" className="form-input" />
        </div>
        <div className="form-field">
          <label htmlFor="f-service" className="form-label">
            Service needed
          </label>
          <select id="f-service" name="service" className="form-input">
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="f-loc" className="form-label">
            Site location
          </label>
          <input id="f-loc" name="location" type="text" className="form-input" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="f-msg" className="form-label">
          Project details
        </label>
        <textarea id="f-msg" name="details" rows="5" className="form-input" />
      </div>
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="f-website">Leave this empty</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {siteKey && <Recaptcha siteKey={siteKey} onReady={handleCaptchaReady} />}
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  );
}
