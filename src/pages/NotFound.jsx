import { Link } from 'react-router-dom';
import usePageTitle from '../lib/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section style={{ background: "#1C1B19", color: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 24px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>404</div>
        <h1 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", textTransform: "uppercase" }}>We couldn&apos;t find that page</h1>
        <Link to="/" style={{ background: "#E8731A", color: "#1C1B19", textDecoration: "none", padding: "16px 28px", borderRadius: "4px", fontWeight: "600" }}>Back to home</Link>
      </div>
    </section>
  );
}
