import { useState, useEffect } from 'react';
import Brand from './Brand';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'vehicles', label: 'Vehicles' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ page, setPage, onBook }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`nav-shell${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav">
        <Brand onClick={() => setPage('home')} />
        <nav className="nav-links">
          {NAV_ITEMS.map((it) => (
            <button
              key={it.id}
              className={page === it.id ? 'active' : ''}
              onClick={() => setPage(it.id)}
            >
              {it.label}
            </button>
          ))}
        </nav>
        <button className="btn btn-primary" onClick={onBook}>
          Book Now <span className="btn-arrow" />
        </button>
      </div>
    </div>
  );
}
