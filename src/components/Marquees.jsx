const NAME_STYLES = [
  { color: 'transparent', WebkitTextStroke: '1.5px #F2A35E' },
  { color: '#F6F3EE' },
  { color: 'transparent', WebkitTextStroke: '1.5px #F2A35E' },
  { color: '#F6F3EE' },
];
const SERVICES = [
  'Excavation',
  'Shoring Works',
  'Rock Breaking',
  'Demolition',
  'Debris Clearing',
  'Building & Land Development',
  'Water Supply',
  'Ambulance Service',
  '25 Years Experience',
];

// Decorative scrolling strips above the footer. Each list is doubled so the loop is seamless.
export default function Marquees() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{ background: '#1C1B19', overflow: 'hidden', padding: '30px 0 24px', borderTop: '1px solid #2E2C29' }}
      >
        <div
          className="mqr"
          style={{
            display: 'flex',
            width: 'max-content',
            gap: '56px',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: '700',
            fontSize: '120px',
            lineHeight: '1',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {NAME_STYLES.flatMap((style, i) => [
            <span key={`n${i}`} style={style}>
              RSP Enterprises
            </span>,
            <span key={`s${i}`} style={{ color: '#E8731A' }}>
              ✱
            </span>,
          ])}
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{ background: '#E8731A', color: '#1C1B19', overflow: 'hidden', padding: '16px 0' }}
      >
        <div
          className="mq"
          style={{
            display: 'flex',
            width: 'max-content',
            gap: '36px',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: '700',
            fontSize: '30px',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {[...SERVICES, ...SERVICES].flatMap((s, i) => [<span key={`t${i}`}>{s}</span>, <span key={`s${i}`}>✱</span>])}
        </div>
      </div>
    </>
  );
}
