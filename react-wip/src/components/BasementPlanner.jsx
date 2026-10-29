import { useState } from 'react';
import { SOILS, estimateBasement, formatIN } from '../lib/planner';
import { whatsappLink } from '../data/contact';

const LEVEL_PX = 58;

export default function BasementPlanner() {
  const [area, setArea] = useState(6000);
  const [levels, setLevels] = useState(2);
  const [soil, setSoil] = useState('soil');
  const est = estimateBasement({ area, levels, soil });
  const message =
    `Hi RSP, I used the Basement Planner on your website.\nPlot area: ${formatIN(area)} sq ft\nBasement levels: ${levels}` +
    `\nGround: ${SOILS[soil].label}\nEstimate: about ${formatIN(est.volume)} cubic metres, ${formatIN(est.loads)} truckloads, ` +
    `${est.days} working days.\nPlease share an exact quote. Site location: `;

  return (
    <section id="planner" style={{ background: "#FFFFFF", borderTop: "1px solid #E2DDD5", borderBottom: "1px solid #E2DDD5" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px", marginBottom: "36px" }}>
          <div style={{ maxWidth: "640px" }}>
            <div style={{ color: "#A84A12", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>BASEMENT PLANNER</div>
            <h2 style={{ margin: "8px 0 0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1.05", textTransform: "uppercase" }}>How big is your dig?</h2>
          </div>
          <p style={{ margin: "0", maxWidth: "420px", color: "#57534E" }}>Set your plot size, basement levels and ground type to see a rough excavation estimate in seconds.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "stretch" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", background: "#F6F3EE", borderRadius: "6px", padding: "28px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                <label htmlFor="plan-area" style={{ fontWeight: "600" }}>Plot area</label>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "30px" }}>{formatIN(area)} sq ft</span>
              </div>
              <input
                id="plan-area"
                type="range"
                min="1000"
                max="60000"
                step="500"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                style={{ width: "100%", height: "28px", margin: "0", accentColor: "#E8731A", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#57534E" }}>
                <span>1,000 sq ft</span>
                <span>60,000 sq ft</span>
              </div>
            </div>
            <div role="group" aria-label="Basement levels" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600" }}>Basement levels</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[1, 2, 3].map((n) => (
                  <button key={n} type="button" className="pill" aria-pressed={n === levels} onClick={() => setLevels(n)}>
                    {n === 1 ? '1 level' : `${n} levels`}
                  </button>
                ))}
              </div>
            </div>
            <div role="group" aria-label="Ground type" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600" }}>Ground type</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {Object.entries(SOILS).map(([key, s]) => (
                  <button key={key} type="button" className="pill" aria-pressed={key === soil} onClick={() => setSoil(key)}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div style={{ flex: "1.3 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <div aria-hidden="true" className="ground" data-soil={soil}>
              <div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "16px", background: "#5E4A2E" }} />
              <div className="pit" style={{ height: `${levels * LEVEL_PX + 12}px` }}>
                {Array.from({ length: levels }, (_, i) => (
                  <span key={i} className="pit-level" style={{ top: `${i * LEVEL_PX}px` }}>B{i + 1}</span>
                ))}
              </div>
              <span style={{ position: "absolute", right: "12px", bottom: "10px", background: "rgba(28,27,25,0.86)", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", padding: "5px 10px", borderRadius: "3px" }}>About {est.depth.toFixed(1)} m deep</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
              <div style={{ border: "1px solid #E2DDD5", borderRadius: "6px", padding: "16px" }}>
                <div style={{ fontSize: "13px", letterSpacing: "1px", color: "#57534E", fontWeight: "600" }}>EARTH TO REMOVE</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1" }} data-testid="plan-volume">{formatIN(est.volume)} m³</div>
                <div style={{ fontSize: "13px", color: "#57534E" }}>in the ground</div>
              </div>
              <div style={{ border: "1px solid #E2DDD5", borderRadius: "6px", padding: "16px" }}>
                <div style={{ fontSize: "13px", letterSpacing: "1px", color: "#57534E", fontWeight: "600" }}>TRUCKLOADS</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1" }} data-testid="plan-loads">{formatIN(est.loads)}</div>
                <div style={{ fontSize: "13px", color: "#57534E" }}>16 m³ tipper loads</div>
              </div>
              <div style={{ border: "1px solid #E2DDD5", borderRadius: "6px", padding: "16px" }}>
                <div style={{ fontSize: "13px", letterSpacing: "1px", color: "#57534E", fontWeight: "600" }}>MACHINES</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1" }}>{est.excavators} + {est.tippers}</div>
                <div style={{ fontSize: "13px", color: "#57534E" }}>{soil === 'soil' ? 'excavators + tippers' : 'excavators + tippers, with breakers'}</div>
              </div>
              <div style={{ border: "1px solid #E2DDD5", borderRadius: "6px", padding: "16px", background: "#1C1B19", color: "#FFFFFF" }}>
                <div style={{ fontSize: "13px", letterSpacing: "1px", color: "#F2A35E", fontWeight: "600" }}>TIME ON SITE</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1" }} data-testid="plan-days">{est.days} days</div>
                <div style={{ fontSize: "13px", color: "#C9C2B8" }}>working days, approx.</div>
              </div>
            </div>
            {est.needsShoring && (
              <div style={{ background: "#EFEAE2", borderRadius: "6px", padding: "14px 16px", fontSize: "15px" }}><strong>Shoring advised.</strong> Cuts this deep usually need shoring to protect neighbouring buildings – we do that in-house too.</div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px" }}>
              <a href={whatsappLink(message)} target="_blank" rel="noopener" style={{ background: "#E8731A", color: "#1C1B19", textDecoration: "none", padding: "15px 24px", borderRadius: "4px", fontWeight: "600" }}>Get an exact quote on WhatsApp</a>
              <span style={{ fontSize: "14px", color: "#57534E", maxWidth: "380px" }}>Rough planning estimate only. Exact quantities come after a site visit and soil check.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
