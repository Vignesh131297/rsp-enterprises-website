import { img } from '../lib/assets';
import { AVAILABLE_THIS_WEEK, FLEET, UPDATED_ON } from '../data/fleet';
import { whatsappLink } from '../data/contact';

function FleetCard({ machine }) {
  const n = AVAILABLE_THIS_WEEK[machine.key];
  const set = n !== null && n !== undefined;
  const tone = !set
    ? { background: '#EFEAE2', color: '#1C1B19' }
    : n === 0
      ? { background: '#1C1B19', color: '#FFFFFF' }
      : { background: '#E8731A', color: '#1C1B19' };
  const badge = !set ? 'Ask for this week' : n === 0 ? 'Booked this week' : `${n} of ${machine.total} free`;
  const week = n === 0 ? 'next week' : 'this week';
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E2DDD5',
        borderRadius: '6px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={img(machine.img)}
        alt={machine.alt}
        loading="lazy"
        style={{ width: '100%', height: '160px', objectFit: machine.fit, background: '#FFFFFF' }}
      />
      <div
        style={{
          padding: '18px 18px 8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '10px',
        }}
      >
        <span style={{ fontWeight: '600' }}>{machine.name}</span>
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: '700',
            fontSize: '40px',
            color: '#A84A12',
          }}
        >
          {machine.total}
        </span>
      </div>
      <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: '1' }}>
        <span
          style={{
            alignSelf: 'flex-start',
            fontSize: '13px',
            letterSpacing: '1px',
            fontWeight: '700',
            padding: '6px 10px',
            borderRadius: '3px',
            ...tone,
          }}
        >
          {badge}
        </span>
        <a
          href={whatsappLink(`Hi RSP, is ${machine.one} available ${week}? Site location: `)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 'auto', fontWeight: '600', fontSize: '15px' }}
        >
          {n === 0 ? 'Book for next week →' : 'Check on WhatsApp →'}
        </a>
      </div>
    </div>
  );
}

export default function FleetBoard() {
  return (
    <section className="container section-pad">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '36px',
        }}
      >
        <div>
          <div className="eyebrow">OUR FLEET</div>
          <h2 className="section-title">22 machines &amp; vehicles, owned</h2>
        </div>
        <p style={{ margin: '0', maxWidth: '380px', color: '#57534E' }}>
          Excavators, tippers, backhoe loaders, water tankers and ambulances — ready to mobilise.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px 20px',
          background: '#1C1B19',
          color: '#FFFFFF',
          borderRadius: '6px',
          padding: '14px 20px',
          marginBottom: '16px',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '600',
            letterSpacing: '1.5px',
            fontSize: '14px',
          }}
        >
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E8731A' }} />
          AVAILABLE THIS WEEK
        </span>
        <span style={{ fontSize: '14px', color: '#C9C2B8' }}>
          {UPDATED_ON ? `Updated ${UPDATED_ON}` : 'Message us to book a machine for your site'}
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
        {FLEET.map((m) => (
          <FleetCard key={m.key} machine={m} />
        ))}
      </div>
    </section>
  );
}
