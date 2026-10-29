import { Link } from 'react-router-dom';
import { img } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';

export default function About() {
  usePageTitle("About & Safety");
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "#1C1B19" }}>
        <img src={img("983395cd5db3ee65ebc0a7562b9859e1.jpg")} alt="Excavator loading red earth into a tipper" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 45%", filter: "brightness(1.12) saturate(1.15)" }} />
        <div className="hero-scrim hero-scrim--about" style={{ position: "absolute", inset: "0" }} />
        <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "120px 24px 130px", color: "#FFFFFF" }}>
          <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>ABOUT US · SINCE 2000</div>
          <h1 style={{ margin: "8px 0 0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", textTransform: "uppercase", maxWidth: "560px" }}>25 years of moving earth for India's builders</h1>
        </div>
        <div style={{ position: "absolute", right: "24px", bottom: "24px", background: "rgba(20,18,16,0.82)", color: "#FFFFFF", borderRadius: "999px", padding: "9px 16px", fontSize: "14px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E8731A" }} />Excavator loading a tipper during basement excavation</div>
      </section>
      <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
          <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1.05", textTransform: "uppercase" }}>A full-service engineering &amp; construction firm</h2>
          <p style={{ margin: "0", fontSize: "19px" }}>RSP Enterprises is a full-service engineering and construction firm with 25 years of experience, specialising in excavation.</p>
          <p style={{ margin: "0", color: "#57534E" }}>Operating across Bangalore and Hosur, we deliver basement and bulk excavation, shoring, hydraulic rock breaking, controlled blasting, demolition, debris clearing and building &amp; land development for corporate campuses, residential towers and private clients.</p>
          <p style={{ margin: "0", color: "#57534E" }}>With a highly skilled team and our own fleet of 22 machines and vehicles, we deliver precise solutions tailored to each site and manage complex projects seamlessly, from the first dig to the finished building. Our water tankers and on-call ambulances keep every site supplied and supported, so clients work with one dependable partner from start to finish.</p>
          <p style={{ margin: "0", fontWeight: "600" }}>Quality is never compromised – every project meets the standard our clients trust.</p>
          <img src={img("7b6c3cfec821c243587191783614b5ca.jpg")} alt="Multiple excavators working a rock excavation site" style={{ width: "100%", height: "340px", objectFit: "cover", borderRadius: "6px", marginTop: "8px" }} />
        </div>
        <div style={{ flex: "1 1 340px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", padding: "32px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <h3 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Core work</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#E8731A", borderRadius: "2px", flex: "none" }} />Excavation &amp; demolition</div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#E8731A", borderRadius: "2px", flex: "none" }} />Shoring works</div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#E8731A", borderRadius: "2px", flex: "none" }} />Rock breaking &amp; blasting</div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#E8731A", borderRadius: "2px", flex: "none" }} />Building &amp; land development</div>
          </div>
          <h3 style={{ margin: "8px 0 0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", textTransform: "uppercase" }}>Other services</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#1C1B19", borderRadius: "2px", flex: "none" }} />Water supply</div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#1C1B19", borderRadius: "2px", flex: "none" }} />Debris clearing</div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#1C1B19", borderRadius: "2px", flex: "none" }} />Ambulance service</div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", background: "#1C1B19", borderRadius: "2px", flex: "none" }} />Layout development</div>
          </div>
          <Link to="/services" style={{ fontWeight: "600", padding: "10px 0" }}>See services &amp; fleet →</Link>
        </div>
      </section>
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2DDD5", borderBottom: "1px solid #E2DDD5" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ color: "#A84A12", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>KEY CLIENTS</div>
          <h2 style={{ margin: "8px 0 8px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", textTransform: "uppercase" }}>25+ clients who trust us</h2>
          <p style={{ margin: "0 0 32px", color: "#57534E" }}>Leading developers, contractors, architects and businesses trust RSP with their sites.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px" }}>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("f24036b3ba9f1ae13bdca9d217aba95b.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Biocon</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("b03179c894b50414a40e85951912bf30.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Navayuga</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("b80ba600ed58dd580195ada0e8b1300b.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Vidya Infrastructure</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("df07d4641a49d024fa24bce32823993c.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Prestige Group</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("6dec478f690e79b43cbd1d22e0bfee79.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>L&amp;T Construction</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("c74c406e58c513d81e895e9b907b5c3c.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Shapoorji Pallonji</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("d18193bcbe761c2df0ba6f123f41d47f.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>KEC International</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("dca71e13a647e94915ab714e34ec4202.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Godrej</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("17a082eac507edda15aa40ecc776a8d5.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>UrbanUp</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("bd14b7dc379509167f7ea0a026a91495.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Embassy</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("062cf288e124232c57df5c1cddfbfbae.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>JMC Projects</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("21a26f5e9b6d46f4cf76a3a05bbc7be3.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>RMZ Corp</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("f0755d458cd0e7e328c0e2879cf7a52d.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Simplex Infrastructures</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("9f490da1a98ff62d44dfebb98b4cc8dd.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>CBRE</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("afaea553197c881b8cf7e53a31c6fb7f.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Pachaiyappas Silks</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("376b5967e98685e8791dc0610b7cb747.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Hical Technologies</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("ffd945f2057077248f7f953cadcf4882.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Ascent Circuits</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("6893f257111b4b8731e8cd546fd2a38b.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>Amar Architect</span>
            </div>
            <div style={{ border: "1px solid #E2DDD5", borderRadius: "8px", background: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <img src={img("aa0f6bfe576250e2dc5db126feb5cf27.png")} alt="" style={{ width: "100%", height: "76px", objectFit: "contain" }} />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#57534E", textAlign: "center" }}>CRN Architect</span>
            </div>
            <div style={{ borderRadius: "8px", background: "#1C1B19", color: "#FFFFFF", padding: "18px 16px 14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "48px", lineHeight: "1", color: "#F2A35E" }}>25+</span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>clients and counting</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px" }}>
        <div style={{ color: "#A84A12", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>OUR TEAM</div>
        <h2 style={{ margin: "8px 0 12px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "44px", textTransform: "uppercase" }}>A 60-strong team</h2>
        <p style={{ margin: "0 0 28px", maxWidth: "760px", color: "#57534E" }}>Our management brings 25 years of hands-on excavation experience and stays involved in every project, from planning to handover. On site, trained operators and drivers run our own machines, guided by site engineers, foremen and supervisors, with a dedicated Safety In-charge on every job.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px", marginBottom: "56px" }}>
          <div style={{ background: "#1C1B19", color: "#FFFFFF", borderRadius: "6px", padding: "22px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", color: "#F2A35E" }}>60</div>
            <div style={{ fontWeight: "600" }}>Total team</div>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", padding: "22px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", color: "#A84A12" }}>3</div>
            <div style={{ fontWeight: "600" }}>Management</div>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", padding: "22px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", color: "#A84A12" }}>6</div>
            <div style={{ fontWeight: "600" }}>Engineers &amp; supervisors</div>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", padding: "22px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", color: "#A84A12" }}>43</div>
            <div style={{ fontWeight: "600" }}>Operators &amp; drivers</div>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", padding: "22px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", color: "#A84A12" }}>8</div>
            <div style={{ fontWeight: "600" }}>Site crew</div>
          </div>
        </div>
        <h3 style={{ margin: "0 0 32px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "30px", textTransform: "uppercase" }}>Organisation</h3>
        <div style={{ overflowX: "auto", paddingBottom: "8px" }}>
          <div style={{ minWidth: "980px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 260px)", columnGap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", background: "#1C1B19", color: "#FFFFFF", borderRadius: "6px", padding: "18px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>PARTNER</div>
                  <div style={{ fontWeight: "600", fontSize: "19px" }}>ABC</div>
                  <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #3A3733", fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>HEAD OF OPERATIONS</div>
                  <div style={{ fontWeight: "600" }}>ABC</div>
                </div>
                <div style={{ width: "2px", height: "24px", background: "#8F877B" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", boxSizing: "border-box", background: "#1C1B19", color: "#FFFFFF", borderRadius: "6px", padding: "18px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>PARTNER</div>
                  <div style={{ fontWeight: "600", fontSize: "19px" }}>ABC</div>
                  <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #3A3733", fontSize: "13px", letterSpacing: "1.5px", color: "#F2A35E", fontWeight: "600" }}>HEAD OF FINANCE</div>
                  <div style={{ fontWeight: "600" }}>ABC</div>
                </div>
                <div style={{ width: "2px", height: "24px", background: "#8F877B" }} />
              </div>
            </div>
            <div style={{ width: "286px", height: "2px", background: "#8F877B" }} />
            <div style={{ width: "2px", height: "28px", background: "#8F877B" }} />
            <div style={{ width: "260px", boxSizing: "border-box", background: "#E8731A", color: "#1C1B19", borderRadius: "6px", padding: "16px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "13px", letterSpacing: "1.5px", fontWeight: "600" }}>GENERAL MANAGER</div>
              <div style={{ fontWeight: "600", fontSize: "19px" }}>ABC</div>
            </div>
            <div style={{ width: "2px", height: "28px", background: "#8F877B" }} />
            <div style={{ width: "260px", boxSizing: "border-box", background: "#FFFFFF", border: "2px solid #1C1B19", borderRadius: "6px", padding: "14px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#A84A12", fontWeight: "600" }}>PROJECT MANAGER</div>
              <div style={{ fontWeight: "600", fontSize: "19px" }}>ABC</div>
            </div>
            <div style={{ width: "2px", height: "28px", background: "#8F877B" }} />
            <div style={{ width: "502px", height: "2px", background: "#8F877B" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 460px)", columnGap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "2px", height: "24px", background: "#8F877B" }} />
                <div style={{ width: "220px", boxSizing: "border-box", background: "#FFFFFF", border: "1px solid #D6CFC4", borderRadius: "6px", padding: "14px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#A84A12", fontWeight: "600" }}>SITE ENGINEER</div>
                  <div style={{ fontWeight: "600" }}>ABC</div>
                </div>
                <div style={{ width: "2px", height: "24px", background: "#8F877B" }} />
                <div style={{ width: "202px", height: "2px", background: "#8F877B" }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 180px)", columnGap: "20px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "2px", height: "20px", background: "#8F877B" }} />
                    <div style={{ width: "100%", boxSizing: "border-box", background: "#EFEAE2", borderRadius: "6px", padding: "12px 14px", textAlign: "center" }}>
                      <div style={{ fontSize: "13px", color: "#57534E" }}>Blasting Foreman</div>
                      <div style={{ fontWeight: "600" }}>ABC</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "2px", height: "20px", background: "#8F877B" }} />
                    <div style={{ width: "100%", boxSizing: "border-box", background: "#EFEAE2", borderRadius: "6px", padding: "12px 14px", textAlign: "center" }}>
                      <div style={{ fontSize: "13px", color: "#57534E" }}>Excavation Foreman</div>
                      <div style={{ fontWeight: "600" }}>ABC</div>
                    </div>
                    <div style={{ width: "2px", height: "20px", background: "#8F877B" }} />
                    <div style={{ width: "100%", boxSizing: "border-box", background: "#EFEAE2", borderRadius: "6px", padding: "12px 14px", textAlign: "center" }}>
                      <div style={{ fontSize: "13px", color: "#57534E" }}>Supervisor</div>
                      <div style={{ fontWeight: "600" }}>ABC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "2px", height: "24px", background: "#8F877B" }} />
                <div style={{ width: "220px", boxSizing: "border-box", background: "#FFFFFF", border: "1px solid #D6CFC4", borderRadius: "6px", padding: "14px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#A84A12", fontWeight: "600" }}>SAFETY IN-CHARGE</div>
                  <div style={{ fontWeight: "600" }}>ABC</div>
                </div>
                <div style={{ width: "2px", height: "46px", background: "#8F877B" }} />
                <div style={{ width: "180px", boxSizing: "border-box", background: "#EFEAE2", borderRadius: "6px", padding: "12px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: "13px", color: "#57534E" }}>Supervisor</div>
                  <div style={{ fontWeight: "600" }}>ABC</div>
                </div>
                <div style={{ width: "2px", height: "20px", background: "#8F877B" }} />
                <div style={{ width: "180px", boxSizing: "border-box", background: "#EFEAE2", borderRadius: "6px", padding: "12px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: "13px", color: "#57534E" }}>Site crew</div>
                  <div style={{ fontWeight: "600" }}>Labour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="safety" style={{ background: "#1C1B19", color: "#F6F3EE" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-end", marginBottom: "40px" }}>
            <div style={{ flex: "1 1 460px", minWidth: "0" }}>
              <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>SAFETY MEASURES</div>
              <h2 style={{ margin: "8px 0 0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1.05", textTransform: "uppercase" }}>Safety is not just a priority — it's the foundation</h2>
            </div>
            <p style={{ flex: "1 1 380px", minWidth: "0", margin: "0", color: "#D6D0C6" }}>Every project begins with a commitment to protecting lives, because a safe environment is key to achieving excellence.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            <div style={{ border: "1px solid #3A3733", borderRadius: "6px", padding: "22px" }}>
              <div style={{ fontWeight: "600", color: "#FFFFFF" }}>Helmets &amp; hi-vis</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>PPE for every operator, driver and worker on site</div>
            </div>
            <div style={{ border: "1px solid #3A3733", borderRadius: "6px", padding: "22px" }}>
              <div style={{ fontWeight: "600", color: "#FFFFFF" }}>Site signage</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>Safety boards, no-tobacco rules and 10 km/h speed limits</div>
            </div>
            <div style={{ border: "1px solid #3A3733", borderRadius: "6px", padding: "22px" }}>
              <div style={{ fontWeight: "600", color: "#FFFFFF" }}>Barricaded pits</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>Edge protection around excavations</div>
            </div>
            <div style={{ border: "1px solid #3A3733", borderRadius: "6px", padding: "22px" }}>
              <div style={{ fontWeight: "600", color: "#FFFFFF" }}>Ambulance on call</div>
              <div style={{ fontSize: "15px", color: "#C9C2B8" }}>Our own 3 ambulances for emergencies</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            <img src={img("80ae2cbc4f05fbe74fdc80ac2a95d5e5.jpg")} alt="Excavator operator in helmet and vest" style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "6px" }} />
            <img src={img("5e9d61e4cbe79fad6a5f93f490a47b37.jpg")} alt="Drilling crew wearing helmets and vests" style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "6px" }} />
            <img src={img("89cde561fcb81f6dc970ce2faf514b7a.jpg")} alt="Site team lined up in safety gear" style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "6px" }} />
          </div>
        </div>
      </section>
    </>
  );
}
