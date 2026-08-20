import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="nb-footer" role="contentinfo">

      {/* Top strip */}
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">LP</span>
          <div className="footer-brand-text">
            <p className="footer-name">LOKESH PAWAR</p>
            <p className="footer-role">FULL STACK DEVELOPER</p>
          </div>
        </div>

        <div className="footer-social" aria-label="Social links">
          <a
            href="https://github.com/Lokesh19-PP"
            target="_blank"
            rel="noreferrer"
            className="footer-social-icon"
            aria-label="GitHub profile"
            id="footer-github"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/lokesh-pawar-4b834a312/"
            target="_blank"
            rel="noreferrer"
            className="footer-social-icon"
            aria-label="LinkedIn profile"
            id="footer-linkedin"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="mailto:lokeshpawar1910@gmail.com"
            className="footer-social-icon"
            aria-label="Send email"
            id="footer-email"
          >
            <MdEmail aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">LOKESH © {year}</p>
        <p className="footer-tagline">BUILT WITH CODE + COFFEE ☕</p>
        <p className="footer-made">DESIGNED &amp; DEVELOPED BY LOKESH PAWAR</p>
      </div>
    </footer>
  );
}

export default Footer;