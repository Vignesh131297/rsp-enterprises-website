import usePageTitle from '../lib/usePageTitle';
import ContactPanel from '../components/ContactPanel';

export default function Contact() {
  usePageTitle('Contact');
  return (
    <>
      <section style={{ background: '#1C1B19', color: '#FFFFFF', borderTop: '1px solid #2E2C29' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 24px 64px' }}>
          <div className="eyebrow eyebrow--light">CONTACT</div>
          <h1
            style={{
              margin: '8px 0 0',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(42px, 5.6vw, 72px)',
              lineHeight: '1',
              textTransform: 'uppercase',
              maxWidth: '860px',
            }}
          >
            Tell us about your site
          </h1>
          <p style={{ margin: '16px 0 0', maxWidth: '600px', color: '#D6D0C6' }}>
            Share the location, scope and timeline. We'll call you back to arrange a site visit and quote.
          </p>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}
