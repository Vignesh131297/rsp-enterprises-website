import { Link } from 'react-router-dom';
import { img } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';
import ProjectGrid from '../components/ProjectGrid';
import RockToReadySlider from '../components/RockToReadySlider';
import ProjectMap from '../components/ProjectMap';

export default function Projects() {
  usePageTitle('Projects');
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', background: '#1C1B19', color: '#FFFFFF' }}>
        <div
          style={{
            position: 'absolute',
            inset: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '3px',
            background: '#1C1B19',
          }}
        >
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={img('projects/embassy-east-avenue.jpg')}
              alt="Excavation at Embassy East Avenue"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={img('projects/embassy-varde-1.jpg')}
              alt="Bulk excavation at Embassy Varde I"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={img('projects/rmz-underpass.jpg')}
              alt="Finished RMZ underpass"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              style={{
                position: 'absolute',
                left: '14px',
                bottom: '14px',
                background: 'rgba(20,18,16,0.82)',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                padding: '6px 12px',
                borderRadius: '999px',
              }}
            >
              RMZ Underpass
            </span>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={img('projects/tuticorin-airport.jpg')}
              alt="Concrete paving at Tuticorin Airport"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              style={{
                position: 'absolute',
                left: '14px',
                bottom: '14px',
                background: 'rgba(20,18,16,0.82)',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                padding: '6px 12px',
                borderRadius: '999px',
              }}
            >
              Tuticorin Airport
            </span>
          </div>
        </div>
        <div className="hero-scrim hero-scrim--projects" style={{ position: 'absolute', inset: '0' }} />
        <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', padding: '130px 24px 140px' }}>
          <div className="eyebrow eyebrow--light">PROJECTS</div>
          <h1
            style={{
              margin: '8px 0 0',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(40px, 5vw, 66px)',
              lineHeight: '1',
              textTransform: 'uppercase',
              maxWidth: '560px',
            }}
          >
            Work on the ground, from Bangalore to Tuticorin
          </h1>
          <p style={{ margin: '16px 0 0', maxWidth: '440px', color: '#E7E2DA', fontSize: '18px' }}>
            Excavation, civil works and buildings for Embassy, RMZ, Hical, UrbanUp and more — 4 sites running now, 11
            delivered.
          </p>
        </div>
      </section>
      <ProjectGrid />
      <RockToReadySlider />
      <ProjectMap />
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
            Your project could be next
          </h2>
          <Link className="btn btn--dark" to="/contact">
            Discuss your site
          </Link>
        </div>
      </section>
    </>
  );
}
