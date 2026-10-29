import { Link } from 'react-router-dom';
import { img } from '../lib/assets';

export default function Header() {
  return (
    <header style={{ background: "#1C1B19", color: "#F6F3EE" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "14px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 32px" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#F6F3EE" }}>
          <img src={img("67ebfff0b3df75da59b5433e3e12d3f2.jpg")} alt="RSP Enterprises logo" style={{ width: "54px", height: "54px", objectFit: "cover", background: "#FFFFFF", borderRadius: "50%" }} />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "24px", letterSpacing: "0.5px" }}>RSP ENTERPRISES</span>
            <span style={{ fontSize: "12px", color: "#C9C2B8", letterSpacing: "1.5px" }}>SINCE 2000 · EXCAVATION · DEMOLITION · DEVELOPMENT</span>
          </span>
        </Link>
        <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 26px", fontWeight: "500", fontSize: "16px" }}>
          <Link to="/" style={{ color: "#F2A35E", textDecoration: "none", padding: "10px 0" }}>Home</Link>
          <Link to="/about" style={{ color: "#F6F3EE", textDecoration: "none", padding: "10px 0" }}>About</Link>
          <Link to="/services" style={{ color: "#F6F3EE", textDecoration: "none", padding: "10px 0" }}>Services</Link>
          <Link to="/projects" style={{ color: "#F6F3EE", textDecoration: "none", padding: "10px 0" }}>Projects</Link>
          <Link to="/contact" style={{ color: "#F6F3EE", textDecoration: "none", padding: "10px 0" }}>Contact</Link>
          <Link to="/contact" style={{ background: "#E8731A", color: "#1C1B19", textDecoration: "none", padding: "11px 20px", borderRadius: "4px", fontWeight: "600" }}>Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
