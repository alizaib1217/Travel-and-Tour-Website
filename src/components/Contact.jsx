import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section container" id="contact">
      <div className="section-head">
        <div className="title-block">
          <span className="eyebrow">— 04 / Contact</span>
          <h2 className="h-xl">Plan something <em>by post</em>, by phone.</h2>
        </div>
        <div className="meta-block">
          <span className="mono-cap">Reply within 4 hours</span>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-block">
            <div className="k">Studio</div>
            <div className="v">Office 4, Aabpara Market,<br />Islamabad 44000, Pakistan</div>
          </div>
          <div className="contact-block">
            <div className="k">Telephone</div>
            <div className="v">
              <a href="tel:+923329271420">+92 332 927 1420</a>
              <a href="tel:+923005169585">+92 300 516 9585</a>
              <a href="tel:+923369227443">+92 336 922 7443</a>
            </div>
          </div>
          <div className="contact-block">
            <div className="k">Correspondence</div>
            <div className="v"><a href="mailto:studio@usmantravels.pk">studio@usmantravels.pk</a></div>
          </div>
          <div className="contact-block">
            <div className="k">Hours</div>
            <div className="v">Daily &middot; 07:00 — 23:00 PKT</div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 2400);
            e.target.reset();
          }}
        >
          <div className="field">
            <label className="label">Your name</label>
            <input type="text" placeholder="Full name" required />
          </div>
          <div className="field">
            <label className="label">Email address</label>
            <input type="email" placeholder="hello@example.com" required />
          </div>
          <div className="field full">
            <label className="label">Tell us about the trip</label>
            <textarea placeholder="Where, when, with how many guests..." required />
          </div>
          <div className="actions">
            <span className="note">No spam &middot; replies within 4 hours</span>
            <button type="submit" className="btn btn-primary">
              {sent ? 'Sent — thank you' : 'Send enquiry'} <span className="btn-arrow" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
