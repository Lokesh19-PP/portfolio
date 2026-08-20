import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero" aria-label="Hero">

      {/* Decorative dot-grid & watermark background */}
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-watermark" aria-hidden="true">FULLSTACK</div>

      {/* Brutalist corner registration marks */}
      <div className="hero-corner-mark mark-tl" aria-hidden="true">+</div>
      <div className="hero-corner-mark mark-tr" aria-hidden="true">+</div>
      <div className="hero-corner-mark mark-bl" aria-hidden="true">+</div>
      <div className="hero-corner-mark mark-br" aria-hidden="true">+</div>

      <div className="hero-inner">

        {/* ── LEFT: Text & Editorial Content Column ── */}
        <div className="hero-content">

          {/* Top Badge Strip */}
          <div className="hero-badge-strip">
            <div className="hero-status-pill">
              <span className="pill-pulse-dot"></span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            <div className="hero-coord-tag">
              <span>PUNE, IN 📍 18.52° N</span>
            </div>
          </div>

          {/* Eyebrow Label */}
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-accent">//</span> FULL STACK DEVELOPER &amp; BUILDER
          </p>

          {/* Main Headline */}
          <h1 className="hero-headline">
            HEY, I'M<br />
            <span className="hero-name-accent">LOKESH</span>{" "}
            <span className="hero-name-outline">PAWAR.</span>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline">
            Crafting high-impact web applications, scalable backend systems,
            and intelligent AI/ML tools that are{" "}
            <mark className="hero-highlight">functional, fast</mark> and impossible to ignore.
          </p>

          {/* Core Tech Stack Row */}
          <div className="hero-tech-pills" aria-label="Primary tech stack">
            <span className="hero-tech-pill">
              <span className="pill-icon">🐍</span> PYTHON
            </span>
            <span className="hero-tech-pill">
              <span className="pill-icon">⚛</span> REACT
            </span>
            <span className="hero-tech-pill">
              <span className="pill-icon">🎸</span> DJANGO
            </span>
            <span className="hero-tech-pill">
              <span className="pill-icon">JS</span> JAVASCRIPT
            </span>
            <span className="hero-tech-pill">
              <span className="pill-icon">🗄</span> MYSQL
            </span>
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#project" className="btn-brut btn-accent hero-cta-main" id="hero-view-work">
              VIEW MY WORK →
            </a>
            <a href="#contact" className="btn-brut-outline hero-cta-sub" id="hero-lets-connect">
              LET'S CONNECT ↗
            </a>
          </div>

          {/* Quick Metrics / Key Highlights Grid */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <span className="stat-value">04+</span>
              <span className="stat-label">PROJECTS BUILT</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-value">FULL STACK</span>
              <span className="stat-label">&amp; AI/ML WORKFLOWS</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-value">B.E. COMP</span>
              <span className="stat-label">ENGG (2025–2028)</span>
            </div>
          </div>

        </div>

        {/* ── RIGHT: Large Physical Hanging Developer ID Badge ── */}
        <div className="hero-visual" aria-label="Developer ID badge">

          {/* Ceiling Hanging Lanyard System */}
          <div className="id-hanging-system" aria-hidden="true">
            {/* Top Ceiling / Header Anchor */}
            <div className="id-ceiling-anchor">
              <div className="id-ceiling-bar"></div>
              <div className="id-ceiling-pin"></div>
            </div>

            {/* Realistic Lanyard Straps extending from top */}
            <div className="id-lanyard-straps">
              <div className="id-strap id-strap-left">
                <div className="id-strap-texture"></div>
              </div>
              <div className="id-strap id-strap-right">
                <div className="id-strap-texture"></div>
              </div>
            </div>

            {/* Heavy-duty Swivel Clasp Assembly */}
            <div className="id-swivel-clasp">
              <div className="id-clasp-dring"></div>
              <div className="id-clasp-carabiner"></div>
            </div>
          </div>

          {/* ID Badge Assembly */}
          <div className="id-badge-wrap">
            {/* Hard Offset Shadow */}
            <div className="id-badge-shadow" aria-hidden="true"></div>

            {/* Physical ID Badge */}
            <div className="id-badge-card">

              {/* Top Header Strip with Slot Punch */}
              <div className="id-badge-top">
                <div className="id-slot-punch"></div>
                <div className="id-top-bar-labels">
                  <span className="id-pass-title">DEVELOPER PASS // 2026</span>
                  <span className="id-live-status">
                    <span className="status-dot"></span>
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Profile Photo Container */}
              <div className="id-photo-frame">
                <img
                  src="/lokesh.png"
                  alt="Lokesh Pawar — Full Stack Developer"
                  className="id-profile-img"
                />
                <div className="id-photo-corner-tag">LP // ACCESS 01</div>
              </div>

              {/* Identity Details Block */}
              <div className="id-badge-details">
                <div className="id-name-row">
                  <div>
                    <span className="id-micro-label">FULL NAME</span>
                    <h2 className="id-display-name">LOKESH PAWAR</h2>
                  </div>
                  <span className="id-tag-core">CORE DEV</span>
                </div>

                <div className="id-role-row">
                  <span className="id-micro-label">SPECIALIZATION</span>
                  <p className="id-role-text">FULL STACK DEVELOPER</p>
                </div>

                {/* Footer Strip with Barcode */}
                <div className="id-badge-footer">
                  <div className="id-barcode-container">
                    <span className="id-barcode-graphic">|||| | ||||| || | |||| |||</span>
                    <span className="id-barcode-text">ID: #8767-PUNE-IN</span>
                  </div>
                  <div className="id-badge-seal">✦</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>SCROLL DOWN</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
