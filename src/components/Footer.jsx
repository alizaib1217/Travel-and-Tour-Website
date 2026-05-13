import Brand from './Brand';
import { DESTINATIONS } from '../data';

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand-block">
            <Brand onClick={() => setPage('home')} />
            <p className="tagline">
              A travel atelier from Islamabad. Chauffeured cars, licensed guides, and slow
              itineraries through the north of Pakistan since 2006.
            </p>
          </div>
          <div className="footer-col">
            <h6>Pages</h6>
            <ul>
              {['home', 'vehicles', 'services', 'about', 'contact'].map((p) => (
                <li key={p}><a onClick={() => setPage(p)}>{p.charAt(0).toUpperCase() + p.slice(1)}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h6>Destinations</h6>
            <ul>
              {DESTINATIONS.map((d) => (
                <li key={d.id}><a>{d.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h6>Studio</h6>
            <ul>
              <li><a>+92 332 927 1420</a></li>
              <li><a>studio@usmantravels.pk</a></li>
              <li><a>Aabpara, Islamabad</a></li>
              <li><a>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span className="left">© {new Date().getFullYear()} Usman Tour &amp; Travels · All rights reserved</span>
          <span className="right">
            <a>Privacy</a>
            <a>Terms</a>
            <a>PKR</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
