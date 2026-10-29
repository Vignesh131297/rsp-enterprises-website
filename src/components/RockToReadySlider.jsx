import { useState } from 'react';
import { img } from '../lib/assets';

export default function RockToReadySlider() {
  const [pos, setPos] = useState(50);
  return (
    <section className="band--white">
      <div className="container section-pad">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '16px 32px',
            marginBottom: '32px',
          }}
        >
          <div>
            <div className="eyebrow">FROM ROCK TO READY</div>
            <h2 className="section-title">Drag to see the job move</h2>
          </div>
          <p style={{ margin: '0', maxWidth: '420px', color: '#57534E' }}>
            Two stages of our work: breaking granite on a Bangalore basement site, then clearing and hauling the earth
            with our own tippers.
          </p>
        </div>
        <div
          className="ba-box"
          style={{
            position: 'relative',
            aspectRatio: '16 / 9',
            borderRadius: '6px',
            overflow: 'hidden',
            background: '#1C1B19',
          }}
        >
          <img
            src={img('site/granite-breaking.jpg')}
            alt="Excavators breaking granite on a basement site in Bangalore"
            style={{
              position: 'absolute',
              inset: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 60%',
            }}
          />
          <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <img
              src={img('site/rsp-tippers-loading.jpg')}
              alt="RSP tippers being loaded with excavated red earth"
              style={{
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 45%',
              }}
            />
          </div>
          <span
            style={{
              position: 'absolute',
              left: '16px',
              top: '16px',
              background: 'rgba(20,18,16,0.86)',
              color: '#FFFFFF',
              fontSize: '13px',
              letterSpacing: '1.5px',
              fontWeight: '600',
              padding: '6px 12px',
              borderRadius: '3px',
            }}
          >
            1 · BREAKING ROCK
          </span>
          <span
            style={{
              position: 'absolute',
              right: '16px',
              top: '16px',
              background: '#E8731A',
              color: '#1C1B19',
              fontSize: '13px',
              letterSpacing: '1.5px',
              fontWeight: '600',
              padding: '6px 12px',
              borderRadius: '3px',
            }}
          >
            2 · CLEARING &amp; HAULING
          </span>
          <div aria-hidden="true" className="ba-handle" style={{ left: `${pos}%` }}>
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '52px',
                height: '52px',
                boxSizing: 'border-box',
                borderRadius: '50%',
                background: '#E8731A',
                border: '3px solid #FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1C1B19"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
              </svg>
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Slide between rock breaking and hauling"
            style={{
              position: 'absolute',
              inset: '0',
              width: '100%',
              height: '100%',
              margin: '0',
              opacity: '0',
              cursor: 'ew-resize',
            }}
          />
        </div>
      </div>
    </section>
  );
}
