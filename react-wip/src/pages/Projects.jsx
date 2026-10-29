import { Link } from 'react-router-dom';
import { img } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';
import ProjectGrid from '../components/ProjectGrid';
import RockToReadySlider from '../components/RockToReadySlider';
import ProjectMap from '../components/ProjectMap';

export default function Projects() {
  usePageTitle("Projects");
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "#1C1B19", color: "#FFFFFF" }}>
        <div style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "3px", background: "#1C1B19" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={img("12a1ce080e916a5cdfcdc177847236dd.jpg")} alt="Excavation at Embassy East Avenue" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={img("f5a1026250525d0c53915267b6276777.jpg")} alt="Bulk excavation at Embassy Varde I" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={img("d351cb372a1dc5a83fb3cdec7b930be5.jpg")} alt="Finished RMZ underpass" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <span style={{ position: "absolute", left: "14px", bottom: "14px", background: "rgba(20,18,16,0.82)", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", padding: "6px 12px", borderRadius: "999px" }}>RMZ Underpass</span>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={img("fff8009cb604d0f5ab64edea30bbadc2.jpg")} alt="Concrete paving at Tuticorin Airport" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <span style={{ position: "absolute", left: "14px", bottom: "14px", background: "rgba(20,18,16,0.82)", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", padding: "6px 12px", borderRadius: "999px" }}>Tuticorin Airport</span>
          </div>
        </div>
        <div className="hero-scrim hero-scrim--projects" style={{ position: "absolute", inset: "0" }} />
        <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "130px 24px 140px" }}>
          <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>PROJECTS</div>
          <h1 style={{ margin: "8px 0 0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", textTransform: "uppercase", maxWidth: "560px" }}>Work on the ground, from Bangalore to Tuticorin</h1>
          <p style={{ margin: "16px 0 0", maxWidth: "440px", color: "#E7E2DA", fontSize: "18px" }}>Excavation, civil works and buildings for Embassy, RMZ, Hical, UrbanUp and more — 4 sites running now, 11 delivered.</p>
        </div>
      </section>
      <ProjectGrid />
      <RockToReadySlider />
      <ProjectMap />
      <section style={{ background: "#E8731A", color: "#1C1B19" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
          <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1.05", textTransform: "uppercase", maxWidth: "680px" }}>Your project could be next</h2>
          <Link to="/contact" style={{ background: "#1C1B19", color: "#FFFFFF", textDecoration: "none", padding: "16px 26px", borderRadius: "4px", fontWeight: "600" }}>Discuss your site</Link>
        </div>
      </section>
    </>
  );
}
