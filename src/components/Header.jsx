import { Link, NavLink } from 'react-router-dom';
import { img } from '../lib/assets';
import { PAGES } from '../data/pages';

export default function Header() {
  return (
    <header className="band--dark">
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px 32px',
        }}
      >
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#F6F3EE' }}
        >
          <img
            src={img('brand/logo.jpg')}
            alt="RSP Enterprises logo"
            style={{ width: '54px', height: '54px', objectFit: 'cover', background: '#FFFFFF', borderRadius: '50%' }}
          />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '24px',
                letterSpacing: '0.5px',
              }}
            >
              RSP ENTERPRISES
            </span>
            <span style={{ fontSize: '12px', color: '#C9C2B8', letterSpacing: '1.5px' }}>
              SINCE 2000 · EXCAVATION · DEMOLITION · DEVELOPMENT
            </span>
          </span>
        </Link>
        <nav
          aria-label="Main"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '4px 26px',
            fontWeight: '500',
            fontSize: '16px',
          }}
        >
          {PAGES.filter((p) => p.inMenu).map((p) => (
            <NavLink key={p.to} to={p.to} end={p.to === '/'} className="nav-link">
              {p.nav}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta">
            Get a Quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
