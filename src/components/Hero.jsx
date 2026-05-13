import EditorialImage from './EditorialImage';
import SearchCard from './SearchCard';

export default function Hero({ onSearch }) {
  const today = new Date();
  const issueNum = String(((today.getMonth() + 1) % 99)).padStart(2, '0');
  const dateLabel = today
    .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .toUpperCase();

  return (
    <section className="hero container">
      <div className="hero-meta">
        <div className="meta-cell">
          <span className="label">Issue</span>
          <span className="val">N° {issueNum} / 26</span>
        </div>
        <div className="meta-cell">
          <span className="label">Edition</span>
          <span className="val">Spring · Karakoram</span>
        </div>
        <div className="meta-cell">
          <span className="label">Date</span>
          <span className="val">{dateLabel}</span>
        </div>
        <div className="meta-cell" style={{ textAlign: 'right' }}>
          <span className="label">Latitude</span>
          <span className="val">33.6844° N</span>
        </div>
      </div>

      <div className="hero-headline">
        <span className="eyebrow">— A travel atelier from Islamabad</span>
        <h1 className="display">
          Quiet journeys <em>across</em><br />
          the north of Pakistan.
        </h1>
        <p className="lede" style={{ marginTop: 12 }}>
          Twenty years of slow itineraries through the Karakoram, the Hindu Kush, and
          the old Mughal cities. Chauffeured cars, licensed guides, and rooms that look
          out at the right mountain.
        </p>
      </div>

      <div className="hero-image-wrap">
        <EditorialImage
          src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1800&auto=format&fit=crop&q=80"
          alt="Hunza valley"
          label="Hunza"
          sublabel="Cover · Karakoram"
          hue={28}
        />
        <div className="hero-caption">
          <span className="label">Cover · Hunza</span>
          <span className="place">Karimabad, 2,438 m</span>
        </div>
      </div>

      <SearchCard onSearch={onSearch} />
    </section>
  );
}
