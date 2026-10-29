import { useState } from 'react';
import { PHONE } from '../data/contact';

const MESSAGES = [
  'Tap the boulder to start breaking',
  'Hit 1 of 3 – cracks are forming',
  'Hit 2 of 3 – one more',
  'Rock broken. Yours is next.',
];

export default function RockBreaker() {
  const [hits, setHits] = useState(0);
  const broken = hits >= 3;
  // Alternating class names restart the CSS animation on every hit.
  const hammerClass = hits === 0 ? 'hammer-idle' : hits % 2 ? 'hammer-a' : 'hammer-b';
  const shakeClass = hits === 0 ? undefined : hits % 2 ? 'shake-a' : 'shake-b';
  const fade = (on) => (on ? 'fade on' : 'fade');

  return (
    <section style={{ background: "#1C1B19", color: "#F6F3EE" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ color: "#F2A35E", fontWeight: "600", letterSpacing: "2px", fontSize: "14px" }}>ROCK BREAKING</div>
          <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1.02", textTransform: "uppercase" }}>Got rock on your site? Give it a hit.</h2>
          <p style={{ margin: "0", maxWidth: "460px", color: "#D6D0C6" }}>Tap the boulder. Our hydraulic breakers and in-house blasting foreman turn hard granite into rubble that's ready to haul.</p>
          <div aria-hidden="true" style={{ display: "flex", gap: "8px" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} className={i < hits ? 'hit-bar on' : 'hit-bar'} />
            ))}
          </div>
          <div role="status" aria-live="polite" style={{ fontWeight: "600", fontSize: "19px" }}>{MESSAGES[hits]}</div>
          {broken && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "4px" }}>
              <a href={PHONE.primary.tel} style={{ background: "#E8731A", color: "#1C1B19", textDecoration: "none", padding: "14px 24px", borderRadius: "4px", fontWeight: "600" }}>Call {PHONE.primary.short}</a>
              <button type="button" onClick={() => setHits(0)} style={{ background: "transparent", color: "#F6F3EE", border: "2px solid #F6F3EE", padding: "12px 22px", borderRadius: "4px", fontFamily: "inherit", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}>Break another</button>
            </div>
          )}
        </div>
        <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <button
            type="button"
            className="rock-btn"
            onClick={() => setHits((h) => Math.min(3, h + 1))}
            aria-label={broken ? 'Boulder broken' : 'Hit the boulder with the breaker'}
            style={{ display: "block", width: "100%", maxWidth: "560px", padding: "0", border: "none", background: "transparent", cursor: "pointer" }}
          >
            <svg viewBox="0 0 520 360" aria-hidden="true" style={{ display: "block", width: "100%", height: "auto" }}>
              <rect x="0" y="300" width="520" height="60" fill="#2A2724" />
              <path d="M0 300 H520" stroke="#4A4540" strokeWidth="2" />
              <g className={shakeClass}>
                <g className={broken ? 'rock-half split-left' : 'rock-half'}>
                  <path d="M262 127 L270 165 L255 200 L272 240 L258 275 L266 300 L120 300 L105 250 L130 190 L185 145 Z" fill="#77716B" />
                  <path d="M140 205 L185 157 L245 138 L236 176 L172 210 Z" fill="#938D86" />
                  <path d="M118 292 L130 255 L160 262 L150 296 Z" fill="#5F5A55" />
                </g>
                <g className={broken ? 'rock-half split-right' : 'rock-half'}>
                  <path d="M262 127 L320 132 L380 160 L415 215 L420 265 L405 300 L266 300 L258 275 L272 240 L255 200 L270 165 Z" fill="#86807A" />
                  <path d="M298 142 L360 166 L396 212 L338 192 Z" fill="#A19B94" />
                  <path d="M340 296 L372 258 L410 270 L400 298 Z" fill="#6C6762" />
                </g>
              </g>
              <path d="M262 127 L270 165 L255 200" fill="none" stroke="#1C1B19" strokeWidth="3.5" strokeLinejoin="round" className={fade(hits >= 1 && !broken)} />
              <path d="M255 200 L272 240 L258 275 L266 300 M270 165 L302 182 L326 174 M255 200 L222 214 L204 208" fill="none" stroke="#1C1B19" strokeWidth="3" strokeLinejoin="round" className={fade(hits === 2)} />
              <g fill="#938D86" className={fade(hits >= 2)}>
                <path d="M196 300 L204 286 L214 300 Z" />
                <path d="M318 300 L326 290 L336 300 Z" />
              </g>
              <g fill="#A19B94" className={fade(broken)}>
                <path d="M150 300 L160 284 L172 300 Z" />
                <path d="M372 300 L382 282 L394 300 Z" />
                <path d="M248 300 L256 290 L262 300 Z" />
                <circle cx="110" cy="286" r="10" fill="#4A4540" opacity="0.6" />
                <circle cx="430" cy="284" r="12" fill="#4A4540" opacity="0.6" />
              </g>
              <g className={hammerClass}>
                <rect x="236" y="0" width="52" height="58" rx="6" fill="#E8731A" />
                <rect x="236" y="38" width="52" height="8" fill="#A84A12" />
                <rect x="250" y="58" width="24" height="30" fill="#3A3733" />
                <path d="M254 88 H270 L265 116 H259 Z" fill="#C9C2B8" />
              </g>
            </svg>
          </button>
          <div aria-hidden="true" style={{ fontSize: "13px", letterSpacing: "2px", color: "#8F877B", fontWeight: "600" }}>TAP THE BOULDER</div>
        </div>
      </div>
    </section>
  );
}
