import {ContactInfo} from './ContactInfo';
import {ContactForm} from './ContactForm';

/**
 * Full contact section pairing info cards with interactive form
 */
export function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-layout">
        <ContactInfo />
        <div className="contact-form-container">
          <h2>Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

