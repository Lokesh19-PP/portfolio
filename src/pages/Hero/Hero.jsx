import "./Hero.css";
import { FaReact, FaPython, FaDatabase, FaCode } from "react-icons/fa";
import { SiDjango, SiMysql, SiJavascript } from "react-icons/si";

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
        <div className="hypercube-matrix">
          <div className="hypercube">
            <div className="prism-core"></div>
            <div className="face f-front"></div>
            <div className="face f-back"></div>
            <div className="face f-right"></div>
            <div className="face f-left"></div>
            <div className="face f-top"></div>
            <div className="face f-bottom"></div>
            
            <div className="inner-cube">
              <div className="face f-front"></div>
              <div className="face f-back"></div>
              <div className="face f-right"></div>
              <div className="face f-left"></div>
              <div className="face f-top"></div>
              <div className="face f-bottom"></div>
            </div>
          </div>

          {/* Kinetic Shell Rings */}
          <div className="shell-ring r-1"></div>
          <div className="shell-ring r-2"></div>
          <div className="shell-ring r-3"></div>

          <div className="energy-field">
            {[...Array(50)].map((_, i) => (
              <div key={i} className={`nano-bot n-${i+1}`}></div>
            ))}
          </div>

          <div className="grid-warp"></div>
          <div className="scanline-v"></div>
          <div className="glitch-overlay"></div>
        </div>
      </div>
    </section>
  );
}
