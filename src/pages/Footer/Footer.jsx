import "./Footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Lokesh Pawar</p>
        <p>Designed & Developed by Lokesh Pawar</p>

        <div className="social-icons">

          <a href="https://github.com/Lokesh19-PP" target="_blank" rel="noreferrer"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/lokesh-pawar-4b834a312/" target="_blank" rel="noreferrer"><FaLinkedin/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;