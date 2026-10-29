import { useState } from 'react';
import { CITIES, PROJECTS, cityOf } from '../data/projects';

export default function ProjectMap() {
  const [city, setCity] = useState('blr');
  const selected = CITIES.find((c) => c.id === city);
  const list = PROJECTS.filter((p) => cityOf(p) === city);
  const live = list.filter((p) => p.status === 'Ongoing').length;

  return (
    <section style={{ background: "#1C1B19", color: "#F6F3EE" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px" }}>
        <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>WHERE WE WORK</div>
        <h2 style={{ margin: "8px 0 12px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1.05", textTransform: "uppercase" }}>From our Bangalore base to Tuticorin</h2>
        <p style={{ margin: "0 0 40px", maxWidth: "620px", color: "#D6D0C6" }}>Tap a city to see the projects we've worked on there.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 400px", minWidth: "0", maxWidth: "520px", position: "relative", aspectRatio: "7 / 10", border: "1px solid #3A3733", borderRadius: "6px", backgroundColor: "#211F1C", backgroundImage: "linear-gradient(#2A2825 1px, transparent 1px), linear-gradient(90deg, #2A2825 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}>
              <g stroke="#46413C" strokeWidth="1" fill="none">
                <line x1="0" y1="8" x2="100" y2="8" vectorEffect="non-scaling-stroke" />
                <line x1="0" y1="48" x2="100" y2="48" vectorEffect="non-scaling-stroke" />
                <line x1="0" y1="88" x2="100" y2="88" vectorEffect="non-scaling-stroke" />
                <line x1="27.8" y1="0" x2="27.8" y2="100" vectorEffect="non-scaling-stroke" />
                <line x1="83.3" y1="0" x2="83.3" y2="100" vectorEffect="non-scaling-stroke" />
              </g>
              <g stroke="#E8731A" strokeWidth="1.5" strokeDasharray="5 6" fill="none" opacity="0.75">
                {CITIES.filter((c) => c.id !== 'blr').map((c) => (
                  <line key={c.id} x1={CITIES[0].x} y1={CITIES[0].y} x2={c.x} y2={c.y} vectorEffect="non-scaling-stroke" />
                ))}
              </g>
            </svg>
            <span aria-hidden="true" style={{ position: "absolute", left: "6px", top: "8%", transform: "translateY(-120%)", fontSize: "11px", color: "#8F877B" }}>13°N</span>
            <span aria-hidden="true" style={{ position: "absolute", left: "6px", top: "48%", transform: "translateY(-120%)", fontSize: "11px", color: "#8F877B" }}>11°N</span>
            <span aria-hidden="true" style={{ position: "absolute", left: "6px", top: "88%", transform: "translateY(-120%)", fontSize: "11px", color: "#8F877B" }}>9°N</span>
            <span aria-hidden="true" style={{ position: "absolute", left: "27.8%", bottom: "6px", transform: "translateX(6px)", fontSize: "11px", color: "#8F877B" }}>78°E</span>
            <span aria-hidden="true" style={{ position: "absolute", left: "83.3%", bottom: "6px", transform: "translateX(6px)", fontSize: "11px", color: "#8F877B" }}>80°E</span>
            <span aria-hidden="true" style={{ position: "absolute", left: "4%", top: "24%", fontSize: "11px", letterSpacing: "3px", fontWeight: "600", color: "#6F6862" }}>KARNATAKA</span>
            <span aria-hidden="true" style={{ position: "absolute", left: "42%", top: "50%", fontSize: "11px", letterSpacing: "3px", fontWeight: "600", color: "#6F6862" }}>TAMIL NADU</span>
            {CITIES.map((c) => {
              const count = PROJECTS.filter((p) => cityOf(p) === c.id).length;
              const on = c.id === city;
              return [
                <button
                  key={c.id}
                  type="button"
                  className="pin"
                  aria-pressed={on}
                  aria-label={`${c.name}, ${count} ${count === 1 ? 'project' : 'projects'}`}
                  onClick={() => setCity(c.id)}
                  style={{ left: `${c.x}%`, top: `${c.y}%`, transform: c.pin, width: `${c.size}px`, height: `${c.size}px` }}
                >
                  {count}
                </button>,
                <span key={`${c.id}-label`} aria-hidden="true" className={on ? 'pin-label on' : 'pin-label'} style={{ left: `${c.x}%`, top: `${c.y}%`, transform: c.label }}>
                  {c.name}
                </span>,
              ];
            })}
          </div>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "72px", lineHeight: "1", color: "#F2A35E" }}>{list.length}</span>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "36px", lineHeight: "1", textTransform: "uppercase" }}>{selected.name}</div>
                <div style={{ marginTop: "6px", color: "#C9C2B8", fontSize: "15px" }}>{live} ongoing · {list.length - live} completed</div>
              </div>
            </div>
            <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", borderTop: "1px solid #34312D" }}>
              {list.map((p) => {
                const on = p.status === 'Ongoing';
                return (
                  <li key={p.name} style={{ padding: "14px 0", borderBottom: "1px solid #34312D", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                    <span>
                      <span style={{ display: "block", fontWeight: "600", color: "#FFFFFF" }}>{p.name}</span>
                      <span style={{ display: "block", fontSize: "13px", letterSpacing: "1px", color: "#B9B0A2" }}>{p.type}</span>
                    </span>
                    <span style={{ flex: "none", fontSize: "12px", letterSpacing: "1.5px", fontWeight: "700", padding: "5px 10px", borderRadius: "3px", ...(on ? { background: "#E8731A", color: "#1C1B19" } : { border: "1px solid #5E5953", color: "#C9C2B8" }) }}>
                      {on ? 'ONGOING' : 'COMPLETED'}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
