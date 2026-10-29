import { Link, useLocation } from 'react-router-dom';
import { EMAIL, PHONE } from '../data/contact';
import { PAGES } from '../data/pages';

const LEGAL = '© RSP Enterprises · www.rspenterprises.net · GSTIN: 29BWOPS8261A2Z1';

function CompactFooter() {
  return (
    <footer style={{ background: "#141311", color: "#C9C2B8", fontSize: "15px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "32px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px" }}>
        <div>{LEGAL}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {PAGES.filter((p) => p.to !== '/contact').map((p) => (
            <Link key={p.to} to={p.to} style={{ color: "#C9C2B8" }}>{p.nav}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return <CompactFooter />;
  return (
    <footer style={{ background: "#141311", color: "#C9C2B8", fontSize: "15px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "24px", color: "#FFFFFF" }}>RSP ENTERPRISES</div>
          <div>Excavation, demolition and building &amp; land development across Bangalore and Hosur, since 2000.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ color: "#FFFFFF", fontWeight: "600" }}>Office</div>
          <div>No. 17, Diya Bhavan, 4th Main, Annapoorneshwari Layout, Near Mother Theresa School, Varanasi, Bangalore – 560036, Karnataka</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ color: "#FFFFFF", fontWeight: "600" }}>Contact</div>
          <div>R. Saravanaperumal</div>
          <a href={PHONE.primary.tel} style={{ color: "#F2A35E" }}>{PHONE.primary.display}</a>
          <a href={PHONE.secondary.tel} style={{ color: "#F2A35E" }}>{PHONE.secondary.display}</a>
          <a href={`mailto:${EMAIL.sales}`} style={{ color: "#F2A35E" }}>{EMAIL.sales}</a>
          <a href={`mailto:${EMAIL.gmail}`} style={{ color: "#F2A35E" }}>{EMAIL.gmail}</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ color: "#FFFFFF", fontWeight: "600" }}>Pages</div>
          {PAGES.filter((p) => p.to !== pathname).map((p) => (
            <Link key={p.to} to={p.to} style={{ color: "#C9C2B8" }}>{p.footer}</Link>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "18px 24px 28px", borderTop: "1px solid #2E2C29", fontSize: "14px" }}>{LEGAL}</div>
    </footer>
  );
}
