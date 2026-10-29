import { img } from '../lib/assets';
import { CLIENTS } from '../data/clients';

export default function ClientGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px' }}>
      {CLIENTS.map((client) => (
        <div key={client.name} className="logo-tile logo-tile--grid">
          <img src={img(client.logo)} alt="" />
          <span>{client.name}</span>
        </div>
      ))}
      <div
        style={{
          borderRadius: '8px',
          background: '#1C1B19',
          color: '#FFFFFF',
          padding: '18px 16px 14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: '700',
            fontSize: '48px',
            lineHeight: '1',
            color: '#F2A35E',
          }}
        >
          25+
        </span>
        <span style={{ fontSize: '14px', fontWeight: '600' }}>clients and counting</span>
      </div>
    </div>
  );
}
