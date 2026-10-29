import { Link } from 'react-router-dom';
import { img } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';
import FleetBoard from '../components/FleetBoard';
import HeroImage from '../components/HeroImage';
import { PHONE } from '../data/contact';

export default function Services() {
  usePageTitle('Services & Fleet');
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', background: '#1C1B19', color: '#FFFFFF' }}>
        <HeroImage
          name="services"
          widths={[960, 1536, 3072]}
          position="55% 60%"
          alt="Excavator, backhoe loader, tipper and water tanker lined up on a cleared site"
        />
        <div className="hero-scrim" style={{ position: 'absolute', inset: '0' }} />
        <div
          style={{
            position: 'relative',
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '120px 24px 130px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div className="eyebrow eyebrow--light">SERVICES</div>
          <h1
            style={{
              margin: '0',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(40px, 5vw, 66px)',
              lineHeight: '1',
              textTransform: 'uppercase',
              maxWidth: '560px',
            }}
          >
            Everything your site needs, with our own machines
          </h1>
          <p style={{ margin: '0', maxWidth: '440px', color: '#E7E2DA', fontSize: '18px' }}>
            Because we own our fleet of 22 machines and vehicles, we mobilise fast across Bangalore and Hosur – and keep
            excavation, shoring, haulage, water and emergency support under one contract.
          </p>
        </div>
      </section>
      <section
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '88px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '72px',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
          <img
            src={img('site/rock-breaker.jpg')}
            alt="Excavator with hydraulic breaker on rock"
            style={{
              flex: '1 1 480px',
              minWidth: '0',
              width: '100%',
              height: '360px',
              objectFit: 'cover',
              borderRadius: '6px',
            }}
          />
          <div style={{ flex: '1 1 420px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '22px',
                color: '#A84A12',
              }}
            >
              01
            </div>
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: '1.05',
                textTransform: 'uppercase',
              }}
            >
              Excavation, shoring &amp; rock breaking
            </h2>
            <p className="text-muted">
              Our speciality for 25 years. Basement and bulk earth excavation, shoring for deep basements and trenches,
              hard-rock breaking with hydraulic breakers, and controlled blasting led by our own blasting foreman.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="chip">Basement excavation</span>
              <span className="chip">Shoring works</span>
              <span className="chip">Rock breaking</span>
              <span className="chip">Controlled blasting</span>
              <span className="chip">Earth haulage</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '48px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 420px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '22px',
                color: '#A84A12',
              }}
            >
              02
            </div>
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: '1.05',
                textTransform: 'uppercase',
              }}
            >
              Demolition &amp; debris clearing
            </h2>
            <p className="text-muted">
              Machine demolition of old buildings and structures, followed by complete debris removal using our fleet of
              tippers — leaving a clean, level site ready for construction.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="chip">Building demolition</span>
              <span className="chip">Debris clearing</span>
              <span className="chip">Site levelling</span>
            </div>
          </div>
          <img
            src={img('site/demolition-rubble.jpg')}
            alt="Rubble from a demolished building with an excavator"
            style={{
              flex: '1 1 480px',
              minWidth: '0',
              width: '100%',
              height: '360px',
              objectFit: 'cover',
              borderRadius: '6px',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
          <div
            style={{
              flex: '1 1 480px',
              minWidth: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '12px',
            }}
          >
            <img
              src={img('site/private-residence.jpg')}
              alt="Completed private residential building"
              style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <img
              src={img('projects/glowwell-compound-wall.jpg')}
              alt="Block compound wall under construction"
              style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '6px' }}
            />
          </div>
          <div style={{ flex: '1 1 420px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '22px',
                color: '#A84A12',
              }}
            >
              03
            </div>
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: '1.05',
                textTransform: 'uppercase',
              }}
            >
              Building &amp; land development
            </h2>
            <p className="text-muted">
              Private homes and G+3 to G+5 buildings, compound walls, storm-water drains, underpass works and layout
              development for plotted land.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="chip">Private buildings</span>
              <span className="chip">Compound walls</span>
              <span className="chip">Drain works</span>
              <span className="chip">Layout development</span>
            </div>
          </div>
        </div>
      </section>
      <section className="band--white">
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 24px' }}>
          <div className="eyebrow">SUPPORT SERVICES</div>
          <h2
            style={{
              margin: '8px 0 32px',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: '44px',
              textTransform: 'uppercase',
            }}
          >
            Water, haulage &amp; emergency cover
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div
              style={{
                background: '#F6F3EE',
                borderRadius: '6px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <h3 className="card-title">Water supply</h3>
              <p className="text-muted">Tanker water for construction sites, curing and dust control.</p>
            </div>
            <div
              style={{
                background: '#F6F3EE',
                borderRadius: '6px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <h3 className="card-title">Debris clearing</h3>
              <p className="text-muted">Loading and disposal of construction and demolition waste.</p>
            </div>
            <div
              style={{
                background: '#F6F3EE',
                borderRadius: '6px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <h3 className="card-title">Ambulance service</h3>
              <p className="text-muted">Ambulances available for site emergencies and medical transfers.</p>
            </div>
            <div
              style={{
                background: '#F6F3EE',
                borderRadius: '6px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <h3 className="card-title">Layout development</h3>
              <p className="text-muted">Clearing, levelling and preparing land for plotted layouts.</p>
            </div>
          </div>
        </div>
      </section>
      <FleetBoard />
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
            Need machines on site this week?
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
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
