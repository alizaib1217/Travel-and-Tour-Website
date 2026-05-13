import { useState, useEffect, useMemo } from 'react';
import { VEHICLES, CITIES, formatPKR, daysBetween } from '../data';
import EditorialImage from './EditorialImage';

function VehiclePlaceholder({ name, make, tier, hue = 200 }) {
  const stripe = `hsl(${hue}, 18%, 88%)`;
  const stripeAlt = `hsl(${hue}, 18%, 92%)`;
  const inkCol = `hsl(${hue}, 22%, 28%)`;
  return (
    <svg className="vehicle-svg" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={`p-${hue}-${name.replace(/\s+/g,'')}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="14" height="14" fill={stripeAlt} />
          <rect width="7" height="14" fill={stripe} />
        </pattern>
      </defs>
      <rect width="320" height="220" fill={`url(#p-${hue}-${name.replace(/\s+/g,'')})`} />
      <rect x="20" y="20" width="120" height="22" fill={inkCol} opacity="0.08" />
      <text x="30" y="36" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill={inkCol} opacity="0.7">
        {(tier || '').toUpperCase()}
      </text>
      <text x="160" y="118" fontFamily="Instrument Serif, serif" fontSize="26" textAnchor="middle" fill={inkCol}>
        {name}
      </text>
      <text x="160" y="142" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2.4" textAnchor="middle" fill={inkCol} opacity="0.6">
        — {(make || '').toUpperCase()} —
      </text>
      <text x="20" y="200" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.6" fill={inkCol} opacity="0.4">
        PLACEHOLDER · DROP-IN PHOTO
      </text>
      <text x="300" y="200" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.6" textAnchor="end" fill={inkCol} opacity="0.4">
        16:11
      </text>
    </svg>
  );
}

function VehicleCard({ v, onOpen }) {
  return (
    <article className="vehicle-card" onClick={() => onOpen(v)}>
      <div className="vehicle-thumb">
        <EditorialImage src={v.img} alt={v.name} label={v.name} sublabel={v.tier} hue={v.hue} />
        <span className={`badge${v.tier === 'Luxury' ? ' luxury' : ''}`}>{v.tier}</span>
      </div>
      <div className="vehicle-body">
        <div className="top">
          <div>
            <h3 className="name">{v.name}</h3>
            <div className="make">{v.make} &middot; {v.year}</div>
          </div>
        </div>
        <div className="specs">
          <div className="spec"><span className="k">Seats</span><span className="v">{v.seats}</span></div>
          <div className="spec"><span className="k">Transmission</span><span className="v">{v.transmission}</span></div>
          <div className="spec"><span className="k">Driver</span><span className="v">Included</span></div>
        </div>
        <div className="price-row">
          <div>
            <div className="from">From / day</div>
            <span className="amount">{formatPKR(v.local)}</span>
          </div>
          <span className="per">local rate</span>
        </div>
      </div>
    </article>
  );
}

export function BookingDrawer({ vehicle, open, onClose, onConfirm }) {
  const today = new Date().toISOString().slice(0, 10);
  const [location, setLocation] = useState('');
  const [pickup, setPickup] = useState(today);
  const [ret, setRet] = useState('');
  const [scope, setScope] = useState('local');
  const [driver, setDriver] = useState('Chauffeured');

  useEffect(() => {
    if (open) {
      setLocation('');
      setPickup(today);
      setRet('');
      setScope('local');
      setDriver('Chauffeured');
    }
  }, [open, vehicle?.id]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!vehicle) return null;

  const days = daysBetween(pickup, ret);
  const rate = scope === 'local' ? vehicle.local : vehicle.outstation;
  const subtotal = rate * (days || 1);
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  return (
    <>
      <div className={`drawer-shade${open ? ' open' : ''}`} onClick={onClose} />
      <aside className={`drawer${open ? ' open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-head">
          <span className="crumb">Booking &middot; {vehicle.tier}</span>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          <div className="drawer-hero">
            <EditorialImage src={vehicle.img} alt={vehicle.name} label={vehicle.name} sublabel={vehicle.tier} hue={vehicle.hue} />
          </div>

          <div className="drawer-title">
            <span className="make">{vehicle.make} &middot; {vehicle.year}</span>
            <h3 className="name">{vehicle.name}</h3>
          </div>

          <div className="drawer-specs">
            <div className="cell"><div className="k">Seats</div><div className="v">{vehicle.seats} passengers</div></div>
            <div className="cell"><div className="k">Transmission</div><div className="v">{vehicle.transmission}</div></div>
            <div className="cell"><div className="k">Colour options</div><div className="v">{vehicle.color}</div></div>
            <div className="cell"><div className="k">Mode</div><div className="v">Chauffeured only</div></div>
          </div>

          <div className="drawer-form">
            <div className="field">
              <label className="label">Pick-up location</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">Select city</option>
                {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="row">
              <div className="field">
                <label className="label">Pick-up</label>
                <input type="date" value={pickup} min={today} onChange={(e) => setPickup(e.target.value)} />
              </div>
              <div className="field">
                <label className="label">Return</label>
                <input type="date" value={ret} min={pickup || today} onChange={(e) => setRet(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label className="label">Scope</label>
                <select value={scope} onChange={(e) => setScope(e.target.value)}>
                  <option value="local">Local — {formatPKR(vehicle.local)}/day</option>
                  <option value="outstation">Outstation — {formatPKR(vehicle.outstation)}/day</option>
                </select>
              </div>
              <div className="field">
                <label className="label">Service</label>
                <select value={driver} onChange={(e) => setDriver(e.target.value)}>
                  <option>Chauffeured</option>
                  <option>Chauffeured + guide</option>
                </select>
              </div>
            </div>
          </div>

          <div className="drawer-summary">
            <div className="breakdown">
              {formatPKR(rate)} × {days || 1} day{(days || 1) === 1 ? '' : 's'} · {scope === 'local' ? 'Local' : 'Outstation'} · {driver}
            </div>
            <div className="total-row">
              <span className="label">Estimated total</span>
              <span className="amt">{formatPKR(total)}</span>
            </div>
            <div className="breakdown">Includes {formatPKR(tax)} taxes · payable at pickup</div>
            <button
              className="confirm-btn"
              onClick={() => onConfirm({ vehicle, location, pickup, ret, scope, driver, total })}
            >
              Confirm reservation <span className="btn-arrow" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function Vehicles({ onBook, filterInitial }) {
  const [tier, setTier] = useState('All');

  const tiers = useMemo(() => ['All', ...new Set(VEHICLES.map((v) => v.tier))], []);

  useEffect(() => {
    if (filterInitial?.type) setTier(filterInitial.type);
  }, [filterInitial]);

  const tierCounts = useMemo(() => {
    const m = { All: VEHICLES.length };
    for (const v of VEHICLES) m[v.tier] = (m[v.tier] || 0) + 1;
    return m;
  }, []);

  const filtered = useMemo(
    () => (tier === 'All' ? VEHICLES : VEHICLES.filter((v) => v.tier === tier)),
    [tier]
  );

  return (
    <section className="section container" id="vehicles">
      <div className="section-head">
        <div className="title-block">
          <span className="eyebrow">— 02 / The Fleet</span>
          <h2 className="h-xl">Two hundred and fifty cars, <em>quietly maintained.</em></h2>
        </div>
        <div className="meta-block">
          <span className="mono-cap">{filtered.length} of {VEHICLES.length} shown</span>
        </div>
      </div>

      <div className="vehicle-filters">
        {tiers.map((t) => (
          <button
            key={t}
            className={`chip${tier === t ? ' active' : ''}`}
            onClick={() => setTier(t)}
          >
            {t} <span className="count">{tierCounts[t]}</span>
          </button>
        ))}
      </div>

      <div className="vehicles-grid">
        {filtered.map((v) => (
          <VehicleCard key={v.id} v={v} onOpen={onBook} />
        ))}
      </div>
    </section>
  );
}
