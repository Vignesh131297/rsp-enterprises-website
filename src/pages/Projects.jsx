import { Link } from 'react-router-dom';
import usePageTitle from '../lib/usePageTitle';
import HeroImage from '../components/HeroImage';
import ProjectGrid from '../components/ProjectGrid';
import ProjectMap from '../components/ProjectMap';

export default function Projects() {
  usePageTitle('Projects');
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', background: '#1C1B19', color: '#FFFFFF' }}>
        <HeroImage
          name="projects"
          widths={[960, 1536, 3072]}
          position="55% 50%"
          alt="Aerial view of a deep basement excavation in the city"
        />
        <div className="hero-scrim" style={{ position: 'absolute', inset: '0' }} />
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
