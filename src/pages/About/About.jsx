import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">

      {/* Section top border */}
      <div className="about-top-rule" aria-hidden="true"></div>

      {/* Section label */}
      <p className="section-label">01 / ABOUT ME</p>

      <div className="about-inner">

        {/* ── LEFT: Large statement ── */}
        <div className="about-left reveal-left">
          <h2 id="about-heading" className="about-headline">
            I TURN<br />
            IDEAS<br />
            <span className="about-arrow">→</span><br />
            REAL<br />
            <span className="about-accent">PRODUCTS.</span>
          </h2>
        </div>

        {/* ── RIGHT: Bio + Info blocks ── */}
        <div className="about-right reveal">

          <div className="about-bio-card">
            <p className="about-bio">
              I'm an aspiring software developer with a strong foundation in{" "}
              <mark>Python</mark>, web development, and{" "}
              <mark>data structures & algorithms</mark>. Currently pursuing{" "}
              B.E. in Computer Engineering, I've built full-stack web applications
              using <mark>Django, MySQL</mark>, and modern frontend technologies.
            </p>
            <p className="about-bio">
              I completed an internship in{" "}
              <mark>Python, Data Science & AI/ML</mark>, working on data analysis,
              visualization, and machine learning workflows. I'm passionate about
              solving real-world problems through efficient, scalable solutions —
              and I never stop learning.
            </p>
          </div>

          {/* Info blocks */}
          <div className="about-info-grid">
            <div className="about-info-block">
              <span className="info-label">LOCATION</span>
              <span className="info-value">Pune, India</span>
            </div>
            <div className="about-info-block">
              <span className="info-label">ROLE</span>
              <span className="info-value">Full Stack Dev</span>
            </div>
            <div className="about-info-block">
              <span className="info-label">STATUS</span>
              <span className="info-value info-open">Open to Work ✦</span>
            </div>
            <div className="about-info-block">
              <span className="info-label">FOCUS</span>
              <span className="info-value">Web Development</span>
            </div>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <a
              href="/Lokesh_Pawar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-brut-outline"
              id="about-resume-btn"
            >
              RESUME →
            </a>
            <a
              href="https://github.com/Lokesh19-PP"
              target="_blank"
              rel="noreferrer"
              className="btn-brut"
              id="about-github-link"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}