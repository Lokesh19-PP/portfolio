import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">

      {/* Section label */}
      <p className="section-label">06 / GET IN TOUCH</p>

      {/* Big CTA heading */}
      <div className="contact-cta-heading reveal">
        <h2 id="contact-heading" className="contact-headline">
          HAVE AN IDEA?<br />
          LET'S BUILD<br />
          <span className="contact-accent">SOMETHING.</span>
        </h2>
        <p className="contact-sub">
          Open to internships, freelance projects, collaborations,<br />
          and full-time opportunities.
        </p>
      </div>

      {/* Two column: info + form */}
      <div className="contact-grid">

        {/* ── LEFT: Info ── */}
        <div className="contact-info reveal-left">

          <div className="contact-info-cards">
            <a href="mailto:lokeshpawar1910@gmail.com" className="contact-info-card" id="contact-email-link">
              <FaEnvelope className="contact-icon" aria-hidden="true" />
              <div>
                <span className="contact-info-label">EMAIL</span>
                <span className="contact-info-value">lokeshpawar1910@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918767043855" className="contact-info-card" id="contact-phone-link">
              <FaPhone className="contact-icon" aria-hidden="true" />
              <div>
                <span className="contact-info-label">PHONE</span>
                <span className="contact-info-value">+91 8767043855</span>
              </div>
            </a>

            <div className="contact-info-card static">
              <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
              <div>
                <span className="contact-info-label">LOCATION</span>
                <span className="contact-info-value">Pune, Maharashtra, India</span>
              </div>
            </div>

            <a
              href="https://wa.me/918767043855"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card contact-whatsapp"
              id="contact-whatsapp-link"
            >
              <FaWhatsapp className="contact-icon" aria-hidden="true" />
              <div>
                <span className="contact-info-label">WHATSAPP</span>
                <span className="contact-info-value">Chat on WhatsApp →</span>
              </div>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="contact-form-wrap reveal">
          <form
            className="contact-form"
            action="https://formsubmit.co/lokeshpawar1910@gmail.com"
            method="POST"
            aria-label="Contact form"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">YOUR NAME *</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Ravi Kumar"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">YOUR EMAIL *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-input"
                placeholder="ravi@example.com"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">YOUR MESSAGE *</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project or idea..."
                rows="4"
                required
                aria-required="true"
              ></textarea>
            </div>

            <button type="submit" className="btn-brut btn-accent form-submit" id="contact-submit">
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>

    </section>
  );
}

export default Contact;