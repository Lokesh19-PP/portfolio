import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { SiLeetcode } from "react-icons/si"
import { FaSun, FaMoon } from "react-icons/fa"

function Header({ theme, toggleTheme }) {

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1><span>L</span>okesh</h1>
            </div>

            <div className="header-actions">
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>
            </div>

            <div className={menuOpen ? "nav-wrap open" : "nav-wrap"}>
                <ul className="links">
                    <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                    <li><a href="#project" onClick={() => setMenuOpen(false)}>Project</a></li>
                    <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>

                <ul className="icons">
                    <li><a href="https://github.com/Lokesh19-PP" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://leetcode.com/u/lokesh191005/" target="_blank" rel="noreferrer"><SiLeetcode /></a></li>
                    <li><a href="https://linkedin.com/in/lokesh-pawar-4b834a312/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/lokesh_pawar_19/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>

                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </header>
    )
}

export default Header