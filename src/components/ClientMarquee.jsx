import { img } from '../lib/assets';
import { CLIENTS } from '../data/clients';

const ROWS = [CLIENTS.slice(0, 9), CLIENTS.slice(9)];

// Two logo rows scrolling in opposite directions. Each row is rendered twice so the loop is
// seamless; the second copy is hidden from screen readers.
export default function ClientMarquee() {
  return (
    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {ROWS.map((row, r) => (
        <div key={r} className={r === 0 ? 'mq' : 'mqr'} style={{ display: 'flex', width: 'max-content', gap: '14px' }}>
          {[...row, ...row].map((client, i) => (
            <span key={i} className="logo-tile logo-tile--strip" aria-hidden={i >= row.length || undefined}>
              <img src={img(client.logo)} alt="" />
              <span>{client.name}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
