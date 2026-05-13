import { useState, useEffect } from 'react';
import { CITIES, DESTINATIONS } from '../data';

export default function SearchCard({ mode = 'rent', onMode, onSearch, initial }) {
  const [tab, setTab] = useState(mode);
  const [location, setLocation] = useState(initial?.location || '');
  const [pickup, setPickup] = useState(initial?.pickup || '');
  const [ret, setRet] = useState(initial?.ret || '');
  const [type, setType] = useState(initial?.type || '');

  useEffect(() => { setTab(mode); }, [mode]);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <div className="search-tabs">
        <button
          className={tab === 'rent' ? 'active' : ''}
          onClick={() => { setTab('rent'); onMode?.('rent'); }}
        >
          Rent a Vehicle
        </button>
        <button
          className={tab === 'holiday' ? 'active' : ''}
          onClick={() => { setTab('holiday'); onMode?.('holiday'); }}
        >
          Holiday Planning
        </button>
      </div>

      {tab === 'rent' ? (
        <div className="search-card">
          <div className="search-field">
            <label className="label">Pick-up location</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Select city</option>
              {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="search-field">
            <label className="label">Pick-up date</label>
            <input type="date" value={pickup} min={today} onChange={(e) => setPickup(e.target.value)} />
          </div>
          <div className="search-field">
            <label className="label">Return date</label>
            <input type="date" value={ret} min={pickup || today} onChange={(e) => setRet(e.target.value)} />
          </div>
          <div className="search-field">
            <label className="label">Vehicle class</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Any class</option>
              <option value="Standard">Standard</option>
              <option value="Comfort">Comfort</option>
              <option value="Family">Family / Van</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          <div className="search-submit">
            <button onClick={() => onSearch({ mode: 'rent', location, pickup, ret, type })}>
              Search Fleet <span className="btn-arrow" />
            </button>
          </div>
        </div>
      ) : (
        <div className="search-card">
          <div className="search-field">
            <label className="label">From</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Departure city</option>
              {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="search-field">
            <label className="label">Destination</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Pick a place</option>
              {DESTINATIONS.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div className="search-field">
            <label className="label">Start</label>
            <input type="date" value={pickup} min={today} onChange={(e) => setPickup(e.target.value)} />
          </div>
          <div className="search-field">
            <label className="label">Return</label>
            <input type="date" value={ret} min={pickup || today} onChange={(e) => setRet(e.target.value)} />
          </div>
          <div className="search-submit">
            <button onClick={() => onSearch({ mode: 'holiday', location, pickup, ret, destination: type })}>
              Plan Holiday <span className="btn-arrow" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
