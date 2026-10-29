import { Link } from 'react-router-dom';

export default function Footer() {
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
          <a href="tel:+919901039765" style={{ color: "#F2A35E" }}>+91 99010 39765</a>
          <a href="tel:+919524580969" style={{ color: "#F2A35E" }}>+91 95245 80969</a>
          <a href="mailto:sales@rspenterprises.net" style={{ color: "#F2A35E" }}>sales@rspenterprises.net</a>
          <a href="mailto:rspenterprises2013@gmail.com" style={{ color: "#F2A35E" }}>rspenterprises2013@gmail.com</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ color: "#FFFFFF", fontWeight: "600" }}>Pages</div>
          <Link to="/about" style={{ color: "#C9C2B8" }}>About &amp; Safety</Link>
          <Link to="/services" style={{ color: "#C9C2B8" }}>Services &amp; Fleet</Link>
          <Link to="/projects" style={{ color: "#C9C2B8" }}>Projects</Link>
          <Link to="/contact" style={{ color: "#C9C2B8" }}>Contact</Link>
        </div>
      </div>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "18px 24px 28px", borderTop: "1px solid #2E2C29", fontSize: "14px" }}>© RSP Enterprises · www.rspenterprises.net · GSTIN: 29BWOPS8261A2Z1</div>
    </footer>
  );
}
