import { Link } from 'react-router-dom';

export default function FooterCompact() {
  return (
    <footer style={{ background: "#141311", color: "#C9C2B8", fontSize: "15px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "32px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px" }}>
        <div>© RSP Enterprises · www.rspenterprises.net · GSTIN: 29BWOPS8261A2Z1</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <Link to="/" style={{ color: "#C9C2B8" }}>Home</Link>
          <Link to="/about" style={{ color: "#C9C2B8" }}>About</Link>
          <Link to="/services" style={{ color: "#C9C2B8" }}>Services</Link>
          <Link to="/projects" style={{ color: "#C9C2B8" }}>Projects</Link>
        </div>
      </div>
    </footer>
  );
}
