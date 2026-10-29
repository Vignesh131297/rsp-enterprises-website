import EnquiryForm from './EnquiryForm';
import { EMAIL, PHONE, whatsappLink } from '../data/contact';

// Contact page body: the quote form plus phone, email, office and map details.
export default function ContactPanel() {
  return (
    <section
      style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '72px 24px 96px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'flex-start',
      }}
    >
      <EnquiryForm />
      <div style={{ flex: '1 1 360px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            background: '#1C1B19',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '26px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div className="label label--light">HEAD OF OPERATIONS</div>
          <div style={{ fontWeight: '600', fontSize: '20px' }}>R. Saravanaperumal</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
            <a
              href={PHONE.primary.tel}
              style={{
                background: '#E8731A',
                color: '#1C1B19',
                textDecoration: 'none',
                padding: '11px 16px',
                borderRadius: '4px',
                fontWeight: '600',
              }}
            >
              Call {PHONE.primary.short}
            </a>
            <a
              href={PHONE.secondary.tel}
              style={{
                background: '#E8731A',
                color: '#1C1B19',
                textDecoration: 'none',
                padding: '11px 16px',
                borderRadius: '4px',
                fontWeight: '600',
              }}
            >
              Call {PHONE.secondary.short}
            </a>
            <a
              href={whatsappLink()}
              style={{
                border: '1px solid #F6F3EE',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '4px',
                fontWeight: '600',
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2DDD5',
            borderRadius: '6px',
            padding: '26px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div>
            <div style={{ fontWeight: '600' }}>Email</div>
            <a href={`mailto:${EMAIL.enquiries}`} style={{ display: 'block' }}>
              {EMAIL.enquiries}
            </a>
            <a href={`mailto:${EMAIL.gmail}`} style={{ display: 'block' }}>
              {EMAIL.gmail}
            </a>
          </div>
          <div>
            <div style={{ fontWeight: '600' }}>Office</div>
            <div style={{ color: '#57534E' }}>
              No. 17, Diya Bhavan, 4th Main, Annapoorneshwari Layout, Near Mother Theresa School, Varanasi, Bangalore –
              560036, Karnataka
            </div>
          </div>
          <div>
            <div style={{ fontWeight: '600' }}>Website</div>
            <a href="https://www.rspenterprises.net">www.rspenterprises.net</a>
          </div>
          <div>
            <div style={{ fontWeight: '600' }}>GSTIN</div>
            <div style={{ color: '#57534E' }}>29BWOPS8261A2Z1</div>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid #D6CFC4',
            backgroundColor: '#E9E4DA',
            backgroundImage:
              'linear-gradient(#D9D2C6 2px, transparent 2px), linear-gradient(90deg, #D9D2C6 2px, transparent 2px), linear-gradient(35deg, transparent 47%, #FFFFFF 47%, #FFFFFF 53%, transparent 53%)',
            backgroundSize: '46px 46px, 46px 46px, 100% 100%',
            minHeight: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: '34%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="#E8731A"
              stroke="#1C1B19"
              strokeWidth="1.4"
              strokeLinejoin="round"
            >
              <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
              <circle cx="12" cy="10" r="2.6" fill="#1C1B19" stroke="none" />
            </svg>
            <span
              style={{
                marginTop: '4px',
                background: '#1C1B19',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              RSP Enterprises
            </span>
          </div>
          <div
            style={{
              position: 'relative',
              background: '#FFFFFF',
              borderTop: '1px solid #D6CFC4',
              padding: '14px 16px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '14px', color: '#57534E' }}>
              Diya Bhavan, Annapoorneshwari Layout, Varanasi, Bangalore 560036
            </span>
            <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Diya+Bhavan+4th+Main+Annapoorneshwari+Layout+Near+Mother+Theresa+School+Bangalore+560036"
                style={{
                  background: '#1C1B19',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                Open in Google Maps
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Diya+Bhavan+4th+Main+Annapoorneshwari+Layout+Near+Mother+Theresa+School+Bangalore+560036"
                style={{
                  background: '#E8731A',
                  color: '#1C1B19',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                Get directions
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
