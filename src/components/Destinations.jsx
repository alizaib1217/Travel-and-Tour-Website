import EditorialImage from './EditorialImage';
import { DESTINATIONS, formatPKR } from '../data';

const LAYOUT = [
  { id: 'hunza', span: 'span-7', shape: 'wide' },
  { id: 'skardu', span: 'span-5', shape: 'tall' },
  { id: 'lahore', span: 'span-4', shape: '' },
  { id: 'naran', span: 'span-4', shape: '' },
  { id: 'islamabad', span: 'span-4', shape: '' },
  { id: 'rawalpindi', span: 'span-12', shape: 'wide' },
];

export default function Destinations({ onPick }) {
  return (
    <section className="section container" id="destinations">
      <div className="section-head">
        <div className="title-block">
          <span className="eyebrow">— 01 / Destinations</span>
          <h2 className="h-xl">Where to <em>wander</em> next.</h2>
        </div>
        <div className="meta-block">
          <span className="mono-cap">Six routes &middot; 24 itineraries</span>
        </div>
      </div>

      <div className="dest-grid">
        {LAYOUT.map((l, i) => {
          const d = DESTINATIONS.find((x) => x.id === l.id);
          if (!d) return null;
          return (
            <article
              key={d.id}
              className={`dest-card ${l.span} ${l.shape}`}
              onClick={() => onPick(d)}
            >
              <div className="dest-img">
                <EditorialImage src={d.img} alt={d.name} label={d.name} sublabel={d.tag} hue={d.hue || 200} />
              </div>
              <div className="dest-meta">
                <span className="name">{d.name} <em>— {d.tag}</em></span>
                <span className="index">N° {String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="blurb">
                {d.desc}<br />
                <span className="price">From {formatPKR(d.from)} · {d.nights} nights</span>
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
