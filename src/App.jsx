import { useEffect } from "react"
import Header from "./components/Header"
import Hero from "./pages/Hero/Hero"
import Marquee from "./pages/Hero/Marquee"
import About from "./pages/About/About"
import Skills from "./pages/About/Skills"
import Project from "./pages/Project/Project"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Project />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;