import { SERVICES } from '../data';

export default function Services() {
  return (
    <section className="section container" id="services">
      <div className="section-head">
        <div className="title-block">
          <span className="eyebrow">— 02 / Services</span>
          <h2 className="h-xl">Six ways <em>to travel</em>.</h2>
        </div>
        <div className="meta-block">
          <span className="mono-cap">Bookable year-round</span>
        </div>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <article className="service-card" key={s.num}>
            <span className="num">{s.num}</span>
            <h3 className="name">{s.name}</h3>
            <p className="desc">{s.desc}</p>
            <span className="arrow">Enquire <span className="btn-arrow" /></span>
          </article>
        ))}
      </div>
    </section>
  );
}
