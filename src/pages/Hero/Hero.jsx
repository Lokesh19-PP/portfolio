import "./Hero.css";
import { FaReact, FaPython, FaDatabase, FaCode } from "react-icons/fa";
import { SiDjango, SiMysql, SiJavascript } from "react-icons/si";

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Lokesh_Pawar_Resume.pdf`;

  return (
    <section className="hero" id="hero">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="floating-icons" aria-hidden="true">
        <span className="float-icon icon-1"><FaReact /></span>
        <span className="float-icon icon-2"><SiDjango /></span>
        <span className="float-icon icon-3"><FaPython /></span>
        <span className="float-icon icon-4"><SiMysql /></span>
        <span className="float-icon icon-5"><SiJavascript /></span>
        <span className="float-icon icon-6"><FaDatabase /></span>
        <span className="float-icon icon-7"><FaCode /></span>
      </div>
      <div className="hero-overlay"></div>
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
          <a href="#project">View Projects</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-ring ring-a"></div>
        <div className="visual-ring ring-b"></div>
        <div className="orbit orbit-outer">
          <span className="orbit-item" style={{ "--angle": "10deg" }}><FaReact /></span>
          <span className="orbit-item" style={{ "--angle": "100deg" }}><SiJavascript /></span>
          <span className="orbit-item" style={{ "--angle": "190deg" }}><FaPython /></span>
          <span className="orbit-item" style={{ "--angle": "280deg" }}><SiMysql /></span>
        </div>
        <div className="orbit orbit-inner">
          <span className="orbit-item" style={{ "--angle": "35deg" }}><SiDjango /></span>
          <span className="orbit-item" style={{ "--angle": "145deg" }}><FaDatabase /></span>
          <span className="orbit-item" style={{ "--angle": "255deg" }}><FaCode /></span>
        </div>
        <div className="visual-core"></div>
      </div>
    </section>
  );
}
