import "./Hero.css";
import OrbitCanvas from "../../components/OrbitCanvas";

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Lokesh_Pawar_Resume.pdf`;

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <p className="hero-tag">Hello, I am</p>
        <h1>Lokesh Prashant Pawar</h1>
        <h2 className="hero-role">Full Stack Developer | AI/ML Enthusiast</h2>
        <p>
          Building scalable web applications with AI-driven solutions and practical problem
          solving.
        </p>
        <div className="hero-stats">
          <span>B.E. Computer Engineering</span>
          <span>Pune, India</span>
        </div>
        <div className="buttn">
          <a href="#project" className="btn-primary">View Projects</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <OrbitCanvas />
      </div>
    </section>
  );
}
