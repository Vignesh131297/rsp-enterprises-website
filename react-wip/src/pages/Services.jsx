import { Link } from 'react-router-dom';
import { img } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';
import FleetBoard from '../components/FleetBoard';

export default function Services() {
  usePageTitle("Services & Fleet");
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "#1C1B19", color: "#FFFFFF" }}>
        <img src={img("79f082296ff77c66729953f796ca6271.jpg")} alt="Sany, XCMG and Volvo excavators breaking granite on a basement site in Bangalore" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 55%" }} />
        <div className="hero-scrim hero-scrim--services" style={{ position: "absolute", inset: "0" }} />
        <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "120px 24px 130px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>SERVICES</div>
          <h1 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", textTransform: "uppercase", maxWidth: "560px" }}>Everything your site needs, with our own machines</h1>
          <p style={{ margin: "0", maxWidth: "440px", color: "#E7E2DA", fontSize: "18px" }}>Because we own our fleet of 22 machines and vehicles, we mobilise fast across Bangalore and Hosur – and keep excavation, shoring, haulage, water and emergency support under one contract.</p>
        </div>
        <div style={{ position: "absolute", right: "24px", bottom: "24px", background: "rgba(20,18,16,0.82)", color: "#FFFFFF", borderRadius: "999px", padding: "9px 16px", fontSize: "14px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E8731A" }} />Excavators breaking granite for a basement in Bangalore</div>
      </section>
      <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "72px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          <img src={img("7fa5c4101137db581804ac0c67669620.jpg")} alt="Excavator with hydraulic breaker on rock" style={{ flex: "1 1 480px", minWidth: "0", width: "100%", height: "360px", objectFit: "cover", borderRadius: "6px" }} />
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "22px", color: "#A84A12" }}>01</div>
            <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1.05", textTransform: "uppercase" }}>Excavation, shoring &amp; rock breaking</h2>
            <p style={{ margin: "0", color: "#57534E" }}>Our speciality for 25 years. Basement and bulk earth excavation, shoring for deep basements and trenches, hard-rock breaking with hydraulic breakers, and controlled blasting led by our own blasting foreman.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Basement excavation</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Shoring works</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Rock breaking</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Controlled blasting</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Earth haulage</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "22px", color: "#A84A12" }}>02</div>
            <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1.05", textTransform: "uppercase" }}>Demolition &amp; debris clearing</h2>
            <p style={{ margin: "0", color: "#57534E" }}>Machine demolition of old buildings and structures, followed by complete debris removal using our fleet of tippers — leaving a clean, level site ready for construction.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Building demolition</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Debris clearing</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Site levelling</span>
            </div>
          </div>
          <img src={img("39dc002823cae7eb3dabd9483a65940e.jpg")} alt="Rubble from a demolished building with an excavator" style={{ flex: "1 1 480px", minWidth: "0", width: "100%", height: "360px", objectFit: "cover", borderRadius: "6px" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 480px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
            <img src={img("da523630d73069a2a7ec0b272293b39e.jpg")} alt="Completed private residential building" style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "6px" }} />
            <img src={img("36b1e20be6980584370771179695f332.jpg")} alt="Block compound wall under construction" style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "6px" }} />
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "22px", color: "#A84A12" }}>03</div>
            <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1.05", textTransform: "uppercase" }}>Building &amp; land development</h2>
            <p style={{ margin: "0", color: "#57534E" }}>Private homes and G+3 to G+5 buildings, compound walls, storm-water drains, underpass works and layout development for plotted land.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Private buildings</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Compound walls</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Drain works</span>
              <span style={{ background: "#EFEAE2", padding: "6px 12px", borderRadius: "3px", fontSize: "15px" }}>Layout development</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2DDD5", borderBottom: "1px solid #E2DDD5" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ color: "#A84A12", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>SUPPORT SERVICES</div>
          <h2 style={{ margin: "8px 0 32px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", textTransform: "uppercase" }}>Water, haulage &amp; emergency cover</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#F6F3EE", borderRadius: "6px", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Water supply</h3>
              <p style={{ margin: "0", color: "#57534E" }}>Tanker water for construction sites, curing and dust control.</p>
            </div>
            <div style={{ background: "#F6F3EE", borderRadius: "6px", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Debris clearing</h3>
              <p style={{ margin: "0", color: "#57534E" }}>Loading and disposal of construction and demolition waste.</p>
            </div>
            <div style={{ background: "#F6F3EE", borderRadius: "6px", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Ambulance service</h3>
              <p style={{ margin: "0", color: "#57534E" }}>Ambulances available for site emergencies and medical transfers.</p>
            </div>
            <div style={{ background: "#F6F3EE", borderRadius: "6px", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Layout development</h3>
              <p style={{ margin: "0", color: "#57534E" }}>Clearing, levelling and preparing land for plotted layouts.</p>
            </div>
          </div>
        </div>
      </section>
      <FleetBoard />
      <section style={{ background: "#E8731A", color: "#1C1B19" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
          <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1.05", textTransform: "uppercase", maxWidth: "680px" }}>Need machines on site this week?</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href="tel:+919901039765" style={{ background: "#1C1B19", color: "#FFFFFF", textDecoration: "none", padding: "16px 26px", borderRadius: "4px", fontWeight: "600" }}>Call 99010 39765</a>
            <a href="tel:+919524580969" style={{ background: "#1C1B19", color: "#FFFFFF", textDecoration: "none", padding: "16px 26px", borderRadius: "4px", fontWeight: "600" }}>Call 95245 80969</a>
            <Link to="/contact" style={{ border: "2px solid #1C1B19", color: "#1C1B19", textDecoration: "none", padding: "14px 24px", borderRadius: "4px", fontWeight: "600" }}>Request a quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
