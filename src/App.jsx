import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Stats from './components/Stats';
import Vehicles, { BookingDrawer } from './components/Vehicles';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DESTINATIONS } from './data';

export default function App() {
  const [page, setPage] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState(null);
  const [toast, setToast] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [vehicleFilter, setVehicleFilter] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  }

  function openBooking(vehicle) {
    setActiveVehicle(vehicle);
    setDrawerOpen(true);
  }

  function handleConfirm() {
    setDrawerOpen(false);
    setTimeout(() => {
      showToast("Reservation requested — we'll be in touch within 4 hours.");
    }, 250);
  }

  function handleSearch(payload) {
    if (payload.mode === 'rent') {
      setSearchResult(payload);
      setVehicleFilter({ type: payload.type });
      setPage('vehicles');
      showToast(
        'Showing ' + (payload.type || 'all') + ' vehicles' +
        (payload.location ? ' in ' + payload.location : '') + '.'
      );
    } else {
      const dest = DESTINATIONS.find((d) => d.id === payload.destination);
      showToast(dest ? ('Planning ' + dest.name + " itinerary — we'll be in touch.") : 'Holiday request received.');
    }
  }

  return (
    <>
      <Nav page={page} setPage={setPage} onBook={() => setPage('vehicles')} />

      {page === 'home' && (
        <>
          <Hero onSearch={handleSearch} />
          <Destinations onPick={(d) => showToast('Opening ' + d.name + ' itinerary…')} />
          <Stats />
          <Vehicles onBook={openBooking} filterInitial={vehicleFilter} />
          <Services />
          <About />
          <Contact />
        </>
      )}

      {page === 'vehicles' && (
        <>
          <div style={{ height: 96 }} />
          <section className="container">
            <div className="section-head" style={{ marginTop: 16 }}>
              <div className="title-block">
                <span className="eyebrow">— The Fleet</span>
                <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 112px)' }}>
                  The <em>cars</em>.
                </h1>
                <p className="lede" style={{ marginTop: 8 }}>
                  Seventeen models across five tiers — chauffeured, maintained, and ready
                  for the long drive north or a quiet afternoon in the city.
                </p>
              </div>
              <div className="meta-block">
                <span className="mono-cap">Fleet · Updated weekly</span>
              </div>
            </div>

            {searchResult && (
              <div className="results-banner">
                <div className="left">
                  <span className="k">Showing results for</span>
                  <span className="v">
                    {searchResult.type || 'Any class'}
                    {searchResult.location ? ' · ' + searchResult.location : ''}
                    {searchResult.pickup ? ' · ' + searchResult.pickup : ''}
                    {searchResult.ret ? ' → ' + searchResult.ret : ''}
                  </span>
                </div>
                <button
                  className="clear"
                  onClick={() => { setSearchResult(null); setVehicleFilter(null); }}
                >
                  Clear filter
                </button>
              </div>
            )}
          </section>
          <Vehicles onBook={openBooking} filterInitial={vehicleFilter} />
        </>
      )}

      {page === 'services' && (
        <>
          <div style={{ height: 96 }} />
          <section className="container">
            <div className="section-head" style={{ marginTop: 16 }}>
              <div className="title-block">
                <span className="eyebrow">— Services</span>
                <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 112px)' }}>
                  What we <em>do</em>.
                </h1>
                <p className="lede" style={{ marginTop: 8 }}>
                  Six practices — from a single chauffeured afternoon to a month-long
                  corporate lease — held together by the same insistence on quiet,
                  well-maintained service.
                </p>
              </div>
            </div>
          </section>
          <Services />
          <Stats />
        </>
      )}

      {page === 'about' && (
        <>
          <div style={{ height: 96 }} />
          <About />
          <Stats />
        </>
      )}

      {page === 'contact' && (
        <>
          <div style={{ height: 96 }} />
          <Contact />
        </>
      )}

      <Footer setPage={setPage} />

      <BookingDrawer
        vehicle={activeVehicle}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onConfirm={handleConfirm}
      />

      <div className={`toast${toast ? ' show' : ''}`}>
        <span className="dot" />
        <span>{toast}</span>
      </div>
    </>
  );
}
