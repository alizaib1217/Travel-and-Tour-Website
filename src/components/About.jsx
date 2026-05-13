import EditorialImage from './EditorialImage';

export default function About() {
  return (
    <section className="section container" id="about">
      <div className="section-head">
        <div className="title-block">
          <span className="eyebrow">— 03 / About</span>
          <h2 className="h-xl">A small studio, <em>two decades</em> on the road.</h2>
        </div>
        <div className="meta-block">
          <span className="mono-cap">Founded 2006 · Islamabad</span>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-image">
          <EditorialImage
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=80"
            alt="Open road"
            label="The road"
            sublabel="Studio · Founded 2006"
            hue={40}
          />
        </div>
        <div className="about-text">
          <p className="lede">
            Usman Tour &amp; Travels began as a single chauffeured car in a corner of
            Rawalpindi. Twenty years later, the studio runs a quiet fleet of two hundred
            and fifty vehicles, a licensed guides bureau, and a slow itinerary practice
            that takes guests from the Mughal courtyards of Lahore to the apricot
            orchards of Hunza.
          </p>
          <blockquote className="pull">
            We&rsquo;d rather drive one guest twice <em>than two guests once.</em>
          </blockquote>
          <p className="body-text">
            Every car in the fleet is maintained to a standard that lets us promise
            close-to-zero incidents — three decades of HSE practice, cost-efficient
            transport, and a guides bureau who actually know the country. We work with
            corporates on long-term leases, with families on holiday itineraries, and
            with travellers who simply want a clean car and a quiet driver for the long
            road north.
          </p>
          <div className="fact-row">
            <div className="fact"><div className="k">Founded</div><div className="v">2006</div></div>
            <div className="fact"><div className="k">Headcount</div><div className="v">84 staff</div></div>
            <div className="fact"><div className="k">HSE rating</div><div className="v">A · 0.03</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
