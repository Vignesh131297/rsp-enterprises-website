import { Link } from 'react-router-dom';
import { img } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';
import RockBreaker from '../components/RockBreaker';
import BasementPlanner from '../components/BasementPlanner';
import ClientMarquee from '../components/ClientMarquee';
import HeroImage from '../components/HeroImage';
import { PHONE, whatsappLink } from '../data/contact';

export default function Home() {
  usePageTitle('Home');
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', background: '#1C1B19' }}>
        <HeroImage
          name="home"
          widths={[960, 1536, 3072]}
          position="65% 55%"
          alt="Excavators breaking granite in a deep basement excavation at sunset"
        />
        <div className="hero-scrim" style={{ position: 'absolute', inset: '0' }} />
        <div
          style={{
            position: 'relative',
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '120px 24px 110px',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            gap: '26px',
          }}
        >
          <span
            style={{
              alignSelf: 'flex-start',
              background: '#E8731A',
              color: '#1C1B19',
              fontWeight: '600',
              fontSize: '14px',
              letterSpacing: '1.5px',
              padding: '6px 14px',
              borderRadius: '3px',
            }}
          >
            SINCE 2000 · 25 YEARS · BANGALORE – HOSUR
          </span>
          <h1
            style={{
              margin: '0',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(40px, 5.2vw, 72px)',
              lineHeight: '1.0',
              maxWidth: '620px',
              textTransform: 'uppercase',
            }}
          >
            Excavation, rock breaking &amp; site development done right.
          </h1>
          <p style={{ margin: '0', maxWidth: '540px', fontSize: '20px', color: '#E7E2DA' }}>
            A full-service engineering and construction firm specialising in excavation — trusted by Embassy, Prestige,
            L&amp;T, RMZ and Godrej to prepare their sites safely and on schedule.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '8px' }}>
            <Link
              to="/contact"
              style={{
                background: '#E8731A',
                color: '#1C1B19',
                textDecoration: 'none',
                padding: '16px 28px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '17px',
              }}
            >
              Request a site visit
            </Link>
            <a
              href={whatsappLink()}
              style={{
                border: '2px solid #FFFFFF',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '14px 26px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '17px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z" />
              </svg>
              WhatsApp {PHONE.primary.short}
            </a>
          </div>
        </div>
      </section>
      <section style={{ background: '#E8731A', color: '#1C1B19' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '34px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '54px',
                lineHeight: '1',
              }}
            >
              25+
            </div>
            <div style={{ fontWeight: '600' }}>Years in excavation</div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '54px',
                lineHeight: '1',
              }}
            >
              22
            </div>
            <div style={{ fontWeight: '600' }}>Machines &amp; vehicles owned</div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '54px',
                lineHeight: '1',
              }}
            >
              25+
            </div>
            <div style={{ fontWeight: '600' }}>Clients served</div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '54px',
                lineHeight: '1',
              }}
            >
              4
            </div>
            <div style={{ fontWeight: '600' }}>Projects running now</div>
          </div>
        </div>
      </section>
      <RockBreaker />
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 24px 40px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div className="eyebrow">WHAT WE DO</div>
            <h2 className="section-title">From the first dig to the finished building</h2>
          </div>
          <Link to="/services" style={{ fontWeight: '600', padding: '10px 0' }}>
            All services →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <Link
            to="/services"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2DDD5',
              borderRadius: '6px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: '#1C1B19',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={img('site/rock-breaker.jpg')}
              alt="Excavator with rock breaker"
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 className="card-title">Excavation &amp; Rock Breaking</h3>
              <p className="text-muted">
                Basement and bulk excavation, shoring, hard-rock breaking and controlled blasting for commercial and
                residential sites.
              </p>
            </div>
          </Link>
          <Link
            to="/services"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2DDD5',
              borderRadius: '6px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: '#1C1B19',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={img('site/demolition-rubble.jpg')}
              alt="Demolished structure with debris"
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 className="card-title">Demolition &amp; Debris Clearing</h3>
              <p className="text-muted">
                Safe demolition of old structures and complete removal of debris with our own tippers.
              </p>
            </div>
          </Link>
          <Link
            to="/services"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2DDD5',
              borderRadius: '6px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: '#1C1B19',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={img('projects/private-pg-building.jpg')}
              alt="G+5 building under construction"
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 className="card-title">Building &amp; Land Development</h3>
              <p className="text-muted">
                Private buildings, G+5 structures, compound walls, drains and layout development.
              </p>
            </div>
          </Link>
        </div>
        <div
          style={{
            marginTop: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          <div
            style={{
              background: '#1C1B19',
              color: '#F6F3EE',
              borderRadius: '6px',
              padding: '22px 24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F2A35E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2.7 6.3 9.3a7 7 0 1 0 11.4 0z" />
            </svg>
            <div>
              <div style={{ fontWeight: '600' }}>Water Supply</div>
              <div style={{ fontSize: '15px', color: '#C9C2B8' }}>Fleet of 5 water tankers</div>
            </div>
          </div>
          <div
            style={{
              background: '#1C1B19',
              color: '#F6F3EE',
              borderRadius: '6px',
              padding: '22px 24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F2A35E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 7h12v10H3zM15 10h4l2 3v4h-6" />
              <circle cx="7" cy="18" r="1.6" />
              <circle cx="18" cy="18" r="1.6" />
            </svg>
            <div>
              <div style={{ fontWeight: '600' }}>Debris Clearing</div>
              <div style={{ fontSize: '15px', color: '#C9C2B8' }}>8 tippers for haulage</div>
            </div>
          </div>
          <div
            style={{
              background: '#1C1B19',
              color: '#F6F3EE',
              borderRadius: '6px',
              padding: '22px 24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F2A35E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 6v12M6 12h12" />
              <rect x="3" y="3" width="18" height="18" rx="3" />
            </svg>
            <div>
              <div style={{ fontWeight: '600' }}>Ambulance Service</div>
              <div style={{ fontSize: '15px', color: '#C9C2B8' }}>3 ambulances on call</div>
            </div>
          </div>
          <div
            style={{
              background: '#1C1B19',
              color: '#F6F3EE',
              borderRadius: '6px',
              padding: '22px 24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F2A35E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 21h18M6 21V4M18 21V4M6 9h12M6 15h12" />
            </svg>
            <div>
              <div style={{ fontWeight: '600' }}>Shoring Works</div>
              <div style={{ fontSize: '15px', color: '#C9C2B8' }}>Deep basements &amp; trenches</div>
            </div>
          </div>
        </div>
      </section>
      <BasementPlanner />
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '56px 24px' }}>
        <div
          style={{ textAlign: 'center', color: '#A84A12', fontWeight: '600', letterSpacing: '2px', fontSize: '14px' }}
        >
          TRUSTED BY
        </div>
        <h2
          style={{
            margin: '8px 0 32px',
            textAlign: 'center',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: '700',
            fontSize: '40px',
            textTransform: 'uppercase',
          }}
        >
          Leading developers, contractors &amp; architects
        </h2>
        <ClientMarquee />
        <p style={{ margin: '18px 0 0', textAlign: 'center', fontSize: '15px', color: '#57534E' }}>
          <Link to="/about">See all 25+ clients</Link>
        </p>
      </section>
      <section className="band--dark">
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 24px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '20px',
              marginBottom: '40px',
            }}
          >
            <div>
              <div className="eyebrow eyebrow--light">ON SITE NOW</div>
              <h2 className="section-title">Current projects</h2>
            </div>
            <Link to="/projects" style={{ color: '#F2A35E', fontWeight: '600', padding: '10px 0' }}>
              View all projects →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <img
                src={img('projects/embassy-greenshore.jpg')}
                alt="Survey team setting out levels at Embassy Greenshore"
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <div className="label label--light">IN PROGRESS · SITE WORKS</div>
              <h3 className="card-title">Embassy Greenshore</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <img
                src={img('projects/embassy-varde-2.jpg')}
                alt="Excavator and tippers working a deep cut at Embassy Varde II"
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <div className="label label--light">IN PROGRESS · EXCAVATION</div>
              <h3 className="card-title">Embassy Varde II</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <img
                src={img('projects/hical-technologies.jpg')}
                alt="Excavator loading broken rock into a tipper at Hical Technologies, Hosur"
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <div className="label label--light">IN PROGRESS · EXCAVATION</div>
              <h3 className="card-title">Hical Technologies, Hosur</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <img
                src={img('projects/ascent-circuits.jpg')}
                alt="Rock excavation at Ascent Circuits, Hosur"
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <div className="label label--light">IN PROGRESS · ROCK EXCAVATION</div>
              <h3 className="card-title">Ascent Circuits, Hosur</h3>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '96px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <img
          src={img('site/team-safety-gear.jpg')}
          alt="RSP site team in helmets and safety vests"
          style={{
            flex: '1 1 440px',
            minWidth: '0',
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '6px',
          }}
        />
        <div style={{ flex: '1 1 420px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div className="eyebrow">SAFETY FIRST</div>
          <h2
            style={{
              margin: '0',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: '48px',
              lineHeight: '1.05',
              textTransform: 'uppercase',
            }}
          >
            Safety is the foundation we build on
          </h2>
          <p className="text-muted">
            Every project begins with a commitment to protecting lives. Our crews work in helmets and high-visibility
            vests, sites are barricaded and signposted, speed limits are enforced, and a dedicated Safety In-charge
            oversees every site.
          </p>
          <p style={{ margin: '0', fontWeight: '600' }}>
            Quality is never compromised – every project meets the standard our clients trust.
          </p>
          <Link to="/about" style={{ fontWeight: '600', padding: '10px 0' }}>
            Our safety practices →
          </Link>
        </div>
      </section>
      <section style={{ background: '#E8731A', color: '#1C1B19' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '56px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <h2
            style={{
              margin: '0',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: '44px',
              lineHeight: '1.05',
              textTransform: 'uppercase',
              maxWidth: '680px',
            }}
          >
            Planning a basement or site clearance? Let's talk.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a className="btn btn--dark" href={PHONE.primary.tel}>
              Call {PHONE.primary.short}
            </a>
            <a className="btn btn--dark" href={PHONE.secondary.tel}>
              Call {PHONE.secondary.short}
            </a>
            <Link
              to="/contact"
              style={{
                border: '2px solid #1C1B19',
                color: '#1C1B19',
                textDecoration: 'none',
                padding: '14px 24px',
                borderRadius: '4px',
                fontWeight: '600',
              }}
            >
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
