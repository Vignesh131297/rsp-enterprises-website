import { useState } from 'react';
import { img } from '../lib/assets';
import { PROJECTS } from '../data/projects';

const ongoing = PROJECTS.filter((p) => p.status === 'Ongoing').length;
const FILTERS = [
  { id: 'all', label: `All projects (${PROJECTS.length})` },
  { id: 'Ongoing', label: `Ongoing (${ongoing})` },
  { id: 'Completed', label: `Completed (${PROJECTS.length - ongoing})` },
];

function ProjectCard({ project }) {
  const on = project.status === 'Ongoing';
  return (
    <article style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative" }}>
        {project.img ? (
          <img src={img(project.img)} alt={project.alt} loading="lazy" style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ height: "250px", background: "#1C1B19", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", color: "#C9C2B8", fontSize: "13px", letterSpacing: "1.5px", fontWeight: "600" }}>
            <img src={img('67ebfff0b3df75da59b5433e3e12d3f2.jpg')} alt="" style={{ width: "76px", height: "76px", objectFit: "cover", borderRadius: "50%", background: "#FFFFFF" }} />
            SITE PHOTOS COMING SOON
          </div>
        )}
        <span style={{ position: "absolute", top: "14px", left: "14px", fontSize: "12px", letterSpacing: "1.5px", fontWeight: "600", padding: "5px 10px", borderRadius: "3px", ...(on ? { background: "#E8731A", color: "#1C1B19" } : { background: "#1C1B19", color: "#FFFFFF" }) }}>
          {on ? 'IN PROGRESS' : 'COMPLETED'}
        </span>
      </div>
      <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#A84A12", fontWeight: "600" }}>{project.type}</div>
        <h2 style={{ margin: "0", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "30px", lineHeight: "1.1", textTransform: "uppercase" }}>{project.name}</h2>
        <div style={{ color: "#57534E", fontSize: "15px" }}>{project.place}</div>
      </div>
    </article>
  );
}

export default function ProjectGrid() {
  const [filter, setFilter] = useState('all');
  const shown = PROJECTS.filter((p) => filter === 'all' || p.status === filter);
  return (
    <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 24px 96px" }}>
      <div role="group" aria-label="Filter projects" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
        {FILTERS.map((f) => (
          <button key={f.id} type="button" className="filter-btn" aria-pressed={f.id === filter} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "28px" }}>
        {shown.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
