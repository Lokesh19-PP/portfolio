import "./Header.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nb-header${scrolled ? " scrolled" : ""}`} role="banner">
      {/* Logo */}
      <a href="#hero" className="nb-logo" aria-label="Go to top">
        <span className="nb-logo-mark">LP</span>
        <span className="nb-logo-name">LOKESH</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="nb-nav" aria-label="Main navigation">
        <ul className="nb-nav-links">
          <li><a href="#hero" className="nb-nav-link">Home</a></li>
          <li><a href="#about" className="nb-nav-link">About</a></li>
          <li><a href="#skills" className="nb-nav-link">Skills</a></li>
          <li><a href="#project" className="nb-nav-link">Projects</a></li>
          <li><a href="#experience" className="nb-nav-link">Journey</a></li>
          <li><a href="#contact" className="nb-nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Right side: hamburger + completely static decorative mark */}
      <div className="nb-header-right">
        <button
          className={`nb-hamburger${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        {/* Completely static decorative corner symbol — no link, no href, non-clickable */}
        <div className="nb-corner-symbol" aria-hidden="true" title="Creative Developer">
          <span className="nb-symbol-spark">✦</span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`nb-mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="nb-mobile-links">
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#project" onClick={closeMenu}>Projects</a></li>
            <li><a href="#experience" onClick={closeMenu}>Journey</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
        <div className="nb-mobile-footer">
          <a href="https://github.com/Lokesh19-PP" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://linkedin.com/in/lokesh-pawar-4b834a312/" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="mailto:lokeshpawar1910@gmail.com">EMAIL</a>
        </div>
      </div>
    </header>
  );
}

export default Header;