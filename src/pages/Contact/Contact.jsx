import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to collaborate on web development or AI/ML ideas,
            feel free to reach out.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>lokeshpawar1910@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+91 8767043855</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Pune, Maharashtra, India</span>
          </div>

          <div className="info-item">
            <FaWhatsapp className="contact-icon"/>
            <a href="https://wa.me/918767043855" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form
          className="contact-form"
          action="https://formsubmit.co/lokeshpawar1910@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );

}

export default Contact;