import { Link } from 'react-router-dom';
import { img } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';
import RockBreaker from '../components/RockBreaker';
import BasementPlanner from '../components/BasementPlanner';

export default function Home() {
  usePageTitle("Home");
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "#1C1B19" }}>
        <img src={img("home-hero-2740.jpg")} srcSet={`${img("home-hero-1280.jpg")} 1280w, ${img("home-hero-2740.jpg")} 2740w`} sizes="100vw" fetchPriority="high" alt="Sany and XCMG excavators breaking granite on a basement site in Bangalore" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 55%" }} />
        <div className="hero-scrim hero-scrim--home" style={{ position: "absolute", inset: "0" }} />
        <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "120px 24px 110px", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "26px" }}>
          <span style={{ alignSelf: "flex-start", background: "#E8731A", color: "#1C1B19", fontWeight: "600", fontSize: "14px", letterSpacing: "1.5px", padding: "6px 14px", borderRadius: "3px" }}>SINCE 2000 · 25 YEARS · BANGALORE – HOSUR</span>
          <h1 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "clamp(40px, 5.2vw, 72px)", lineHeight: "1.0", maxWidth: "620px", textTransform: "uppercase" }}>Excavation, rock breaking &amp; site development done right.</h1>
          <p style={{ margin: "0", maxWidth: "540px", fontSize: "20px", color: "#E7E2DA" }}>A full-service engineering and construction firm specialising in excavation — trusted by Embassy, Prestige, L&amp;T, RMZ and Godrej to prepare their sites safely and on schedule.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "8px" }}>
            <Link to="/contact" style={{ background: "#E8731A", color: "#1C1B19", textDecoration: "none", padding: "16px 28px", borderRadius: "4px", fontWeight: "600", fontSize: "17px" }}>Request a site visit</Link>
            <a href="https://wa.me/919901039765" style={{ border: "2px solid #FFFFFF", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "4px", fontWeight: "600", fontSize: "17px", display: "flex", alignItems: "center", gap: "10px" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z" />
</svg>WhatsApp 99010 39765</a>
          </div>
        </div>
        <div style={{ position: "absolute", right: "24px", bottom: "24px", background: "rgba(20,18,16,0.82)", color: "#FFFFFF", borderRadius: "999px", padding: "9px 16px", fontSize: "14px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E8731A" }} />Hydraulic rock breaking on a Bangalore basement site</div>
      </section>
      <section style={{ background: "#E8731A", color: "#1C1B19" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "34px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "54px", lineHeight: "1" }}>25+</div>
            <div style={{ fontWeight: "600" }}>Years in excavation</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "54px", lineHeight: "1" }}>22</div>
            <div style={{ fontWeight: "600" }}>Machines &amp; vehicles owned</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "54px", lineHeight: "1" }}>25+</div>
            <div style={{ fontWeight: "600" }}>Clients served</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "54px", lineHeight: "1" }}>4</div>
            <div style={{ fontWeight: "600" }}>Projects running now</div>
          </div>
        </div>
      </section>
      <RockBreaker />
      <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px 40px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "40px" }}>
          <div style={{ maxWidth: "640px" }}>
            <div style={{ color: "#A84A12", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>WHAT WE DO</div>
            <h2 style={{ margin: "8px 0 0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1.05", textTransform: "uppercase" }}>From the first dig to the finished building</h2>
          </div>
          <Link to="/services" style={{ fontWeight: "600", padding: "10px 0" }}>All services →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          <Link to="/services" style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", overflow: "hidden", textDecoration: "none", color: "#1C1B19", display: "flex", flexDirection: "column" }}>
            <img src={img("7fa5c4101137db581804ac0c67669620.jpg")} alt="Excavator with rock breaker" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Excavation &amp; Rock Breaking</h3>
              <p style={{ margin: "0", color: "#57534E" }}>Basement and bulk excavation, shoring, hard-rock breaking and controlled blasting for commercial and residential sites.</p>
            </div>
          </Link>
          <Link to="/services" style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", overflow: "hidden", textDecoration: "none", color: "#1C1B19", display: "flex", flexDirection: "column" }}>
            <img src={img("39dc002823cae7eb3dabd9483a65940e.jpg")} alt="Demolished structure with debris" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Demolition &amp; Debris Clearing</h3>
              <p style={{ margin: "0", color: "#57534E" }}>Safe demolition of old structures and complete removal of debris with our own tippers.</p>
            </div>
          </Link>
          <Link to="/services" style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", overflow: "hidden", textDecoration: "none", color: "#1C1B19", display: "flex", flexDirection: "column" }}>
            <img src={img("750d745b8ec72cb368664aff8b79a582.jpg")} alt="G+5 building under construction" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Building &amp; Land Development</h3>
              <p style={{ margin: "0", color: "#57534E" }}>Private buildings, G+5 structures, compound walls, drains and layout development.</p>
            </div>
          </Link>
        </div>
        <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          <div style={{ background: "#1C1B19", color: "#F6F3EE", borderRadius: "6px", padding: "22px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F2A35E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2.7 6.3 9.3a7 7 0 1 0 11.4 0z" />
            </svg>
            <div>
              <div style={{ fontWeight: "600" }}>Water Supply</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>Fleet of 5 water tankers</div>
            </div>
          </div>
          <div style={{ background: "#1C1B19", color: "#F6F3EE", borderRadius: "6px", padding: "22px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F2A35E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 7h12v10H3zM15 10h4l2 3v4h-6" />
              <circle cx="7" cy="18" r="1.6" />
              <circle cx="18" cy="18" r="1.6" />
            </svg>
            <div>
              <div style={{ fontWeight: "600" }}>Debris Clearing</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>8 tippers for haulage</div>
            </div>
          </div>
          <div style={{ background: "#1C1B19", color: "#F6F3EE", borderRadius: "6px", padding: "22px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F2A35E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 6v12M6 12h12" />
              <rect x="3" y="3" width="18" height="18" rx="3" />
            </svg>
            <div>
              <div style={{ fontWeight: "600" }}>Ambulance Service</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>3 ambulances on call</div>
            </div>
          </div>
          <div style={{ background: "#1C1B19", color: "#F6F3EE", borderRadius: "6px", padding: "22px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F2A35E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 21h18M6 21V4M18 21V4M6 9h12M6 15h12" />
            </svg>
            <div>
              <div style={{ fontWeight: "600" }}>Shoring Works</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>Deep basements &amp; trenches</div>
            </div>
          </div>
        </div>
      </section>
      <BasementPlanner />
      <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px" }}>
        <div style={{ textAlign: "center", color: "#A84A12", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>TRUSTED BY</div>
        <h2 style={{ margin: "8px 0 32px", textAlign: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "40px", textTransform: "uppercase" }}>Leading developers, contractors &amp; architects</h2>
        <div style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div className="mq" style={{ display: "flex", width: "max-content", gap: "14px" }}>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("bd14b7dc379509167f7ea0a026a91495.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Embassy</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("df07d4641a49d024fa24bce32823993c.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Prestige Group</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("6dec478f690e79b43cbd1d22e0bfee79.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>L&amp;T Construction</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("c74c406e58c513d81e895e9b907b5c3c.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Shapoorji Pallonji</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("21a26f5e9b6d46f4cf76a3a05bbc7be3.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>RMZ Corp</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("dca71e13a647e94915ab714e34ec4202.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Godrej</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("f24036b3ba9f1ae13bdca9d217aba95b.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Biocon</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("afaea553197c881b8cf7e53a31c6fb7f.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Pachaiyappas Silks</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("376b5967e98685e8791dc0610b7cb747.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Hical Technologies</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("bd14b7dc379509167f7ea0a026a91495.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Embassy</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("df07d4641a49d024fa24bce32823993c.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Prestige Group</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("6dec478f690e79b43cbd1d22e0bfee79.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>L&amp;T Construction</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("c74c406e58c513d81e895e9b907b5c3c.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Shapoorji Pallonji</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("21a26f5e9b6d46f4cf76a3a05bbc7be3.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>RMZ Corp</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("dca71e13a647e94915ab714e34ec4202.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Godrej</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("f24036b3ba9f1ae13bdca9d217aba95b.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Biocon</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("afaea553197c881b8cf7e53a31c6fb7f.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Pachaiyappas Silks</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("376b5967e98685e8791dc0610b7cb747.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Hical Technologies</span>
            </span>
          </div>
          <div className="mqr" style={{ display: "flex", width: "max-content", gap: "14px" }}>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("9f490da1a98ff62d44dfebb98b4cc8dd.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>CBRE</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("d18193bcbe761c2df0ba6f123f41d47f.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>KEC International</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("062cf288e124232c57df5c1cddfbfbae.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>JMC Projects</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("f0755d458cd0e7e328c0e2879cf7a52d.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Simplex Infrastructures</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("b03179c894b50414a40e85951912bf30.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Navayuga</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("b80ba600ed58dd580195ada0e8b1300b.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Vidya Infrastructure</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("17a082eac507edda15aa40ecc776a8d5.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>UrbanUp</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("ffd945f2057077248f7f953cadcf4882.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Ascent Circuits</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("6893f257111b4b8731e8cd546fd2a38b.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Amar Architect</span>
            </span>
            <span style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("aa0f6bfe576250e2dc5db126feb5cf27.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>CRN Architect</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("9f490da1a98ff62d44dfebb98b4cc8dd.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>CBRE</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("d18193bcbe761c2df0ba6f123f41d47f.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>KEC International</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("062cf288e124232c57df5c1cddfbfbae.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>JMC Projects</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("f0755d458cd0e7e328c0e2879cf7a52d.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Simplex Infrastructures</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("b03179c894b50414a40e85951912bf30.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Navayuga</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("b80ba600ed58dd580195ada0e8b1300b.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Vidya Infrastructure</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("17a082eac507edda15aa40ecc776a8d5.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>UrbanUp</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("ffd945f2057077248f7f953cadcf4882.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Ascent Circuits</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("6893f257111b4b8731e8cd546fd2a38b.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>Amar Architect</span>
            </span>
            <span aria-hidden="true" style={{ flex: "none", width: "200px", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <img src={img("aa0f6bfe576250e2dc5db126feb5cf27.png")} alt="" style={{ width: "100%", height: "64px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E" }}>CRN Architect</span>
            </span>
          </div>
        </div>
        <p style={{ margin: "18px 0 0", textAlign: "center", fontSize: "15px", color: "#57534E" }}>
          <Link to="/about">See all 25+ clients</Link>
        </p>
      </section>
      <section style={{ background: "#1C1B19", color: "#F6F3EE" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "40px" }}>
            <div>
              <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>ON SITE NOW</div>
              <h2 style={{ margin: "8px 0 0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1.05", textTransform: "uppercase" }}>Current projects</h2>
            </div>
            <Link to="/projects" style={{ color: "#F2A35E", fontWeight: "600", padding: "10px 0" }}>View all projects →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src={img("47a4a02731a59c2b3fd8b837d76b33b6.jpg")} alt="Survey team setting out levels at Embassy Greenshore" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "6px" }} />
              <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>IN PROGRESS · SITE WORKS</div>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Embassy Greenshore</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src={img("2d53399c188f71f2031614a5261cad28.jpg")} alt="Excavator and tippers working a deep cut at Embassy Varde II" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "6px" }} />
              <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>IN PROGRESS · EXCAVATION</div>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Embassy Varde II</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src={img("6aff9b0ac9104620de49770576f20b3b.jpg")} alt="Excavator loading broken rock into a tipper at Hical Technologies, Hosur" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "6px" }} />
              <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>IN PROGRESS · EXCAVATION</div>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Hical Technologies, Hosur</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src={img("ae10a5dc589f3ec5d936e1b33a65db28.jpg")} alt="Rock excavation at Ascent Circuits, Hosur" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "6px" }} />
              <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>IN PROGRESS · ROCK EXCAVATION</div>
              <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Ascent Circuits, Hosur</h3>
            </div>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
        <img src={img("89cde561fcb81f6dc970ce2faf514b7a.jpg")} alt="RSP site team in helmets and safety vests" style={{ flex: "1 1 440px", minWidth: "0", width: "100%", height: "400px", objectFit: "cover", borderRadius: "6px" }} />
        <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ color: "#A84A12", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>SAFETY FIRST</div>
          <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "48px", lineHeight: "1.05", textTransform: "uppercase" }}>Safety is the foundation we build on</h2>
          <p style={{ margin: "0", color: "#57534E" }}>Every project begins with a commitment to protecting lives. Our crews work in helmets and high-visibility vests, sites are barricaded and signposted, speed limits are enforced, and a dedicated Safety In-charge oversees every site.</p>
          <p style={{ margin: "0", fontWeight: "600" }}>Quality is never compromised – every project meets the standard our clients trust.</p>
          <Link to="/about" style={{ fontWeight: "600", padding: "10px 0" }}>Our safety practices →</Link>
        </div>
      </section>
      <section style={{ background: "#E8731A", color: "#1C1B19" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
          <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1.05", textTransform: "uppercase", maxWidth: "680px" }}>Planning a basement or site clearance? Let's talk.</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href="tel:+919901039765" style={{ background: "#1C1B19", color: "#FFFFFF", textDecoration: "none", padding: "16px 26px", borderRadius: "4px", fontWeight: "600" }}>Call 99010 39765</a>
            <a href="tel:+919524580969" style={{ background: "#1C1B19", color: "#FFFFFF", textDecoration: "none", padding: "16px 26px", borderRadius: "4px", fontWeight: "600" }}>Call 95245 80969</a>
            <Link to="/contact" style={{ border: "2px solid #1C1B19", color: "#1C1B19", textDecoration: "none", padding: "14px 24px", borderRadius: "4px", fontWeight: "600" }}>Send an enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
