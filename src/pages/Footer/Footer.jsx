import "./Footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2><span>L</span>okesh</h2>
          <p>Full Stack Developer specializing in building exceptional digital experiences.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/Lokesh19-PP" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/lokesh-pawar-4b834a312/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Lokesh Pawar. All rights reserved.</p>
      </div>
    </footer>

  )

}

export default Footer;