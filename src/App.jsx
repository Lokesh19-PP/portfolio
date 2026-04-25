import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./pages/Hero/Hero"
import About from "./pages/About/About"
import Skills from "./pages/About/Skills"
import Project from "./pages/Project/Project"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="bg-gradient-orb orb-primary"></div>
      <div className="bg-gradient-orb orb-secondary"></div>
      <div className="bg-gradient-orb orb-accent"></div>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Hero />
      <About />
      <Skills />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App