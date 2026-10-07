export function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-header">
        <h2>Get in touch</h2>
        <p>
          Have questions about bike parts compatibility, sizing, or an existing
          order? Our expert team is here to help you keep rolling.
        </p>
      </div>

      <div className="contact-info-cards">
        <div className="contact-card">
          <span className="contact-card-icon" aria-hidden="true">📍</span>
          <div>
            <h3>Workshop & Store</h3>
            <p>Ron Bike Parts HQ</p>
            <p>123 Velocity Way, Cycle District</p>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-card-icon" aria-hidden="true">✉️</span>
          <div>
            <h3>Email Support</h3>
            <p>support@ronbikeparts.com</p>
            <small>Typical response within 24 hours</small>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-card-icon" aria-hidden="true">📞</span>
          <div>
            <h3>Phone & Hotline</h3>
            <p>+1 (800) 555-BIKE (2453)</p>
            <small>Mon - Fri: 8:00 AM - 6:00 PM</small>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-card-icon" aria-hidden="true">🕒</span>
          <div>
            <h3>Workshop Hours</h3>
            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p>Sun: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

