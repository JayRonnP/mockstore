import {useState} from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    topic: 'general',
    message: '',
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form-success">
        <span className="success-icon">✓</span>
        <h3>Thank you for reaching out!</h3>
        <p>
          We&apos;ve received your inquiry and our bike specialist team will reply to{' '}
          <strong>{formData.email}</strong> within 24 hours.
        </p>
        <button
          type="button"
          className="secondary-button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              orderNumber: '',
              topic: 'general',
              message: '',
            });
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="contact-name">Full Name *</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Alex Rider"
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email Address *</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-order">Order Number (optional)</label>
        <input
          id="contact-order"
          name="orderNumber"
          type="text"
          value={formData.orderNumber}
          onChange={handleChange}
          placeholder="e.g. #1042"
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-topic">Topic / Department</label>
        <select
          id="contact-topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
        >
          <option value="general">General Inquiry</option>
          <option value="compatibility">Bike Parts & Compatibility Help</option>
          <option value="orders">Orders & Delivery Tracking</option>
          <option value="warranty">Returns & Warranty Claim</option>
          <option value="workshop">Custom Bike Build & Workshop Service</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your bike or how we can assist you..."
        />
      </div>

      <button type="submit" className="primary-button contact-submit-button">
        Send Message
      </button>
    </form>
  );
}

