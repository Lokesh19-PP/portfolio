import "./Project.css";

import img0 from "../../assets/images/reposense.png";
import img1 from "../../assets/images/travel-planner.png";
import img2 from "../../assets/images/bookbazzar.png";
import img3 from "../../assets/images/nutrihurb.png";

const projects = [
  {
    number: "01",
    title: "RepoSensei",
    subtitle: "DEVELOPER INTELLIGENCE PLATFORM",
    desc: "A full-stack developer intelligence platform built for DevClash Hackathon by Team Vanar Sena. Ingests any public GitHub repository and generates interactive 3D/2D dependency graphs, AI-written file summaries, and natural language querying — replacing slow, manual codebase exploration.",
    skills: ["React", "TypeScript", "FastAPI", "Neo4j", "Tree-sitter", "Celery", "Redis", "PostgreSQL", "Groq"],
    github: "https://github.com/Lokesh19-PP/RepoSensei",
    liveDemo: "https://youtu.be/QCqJbYiYElo",
    img: img0,
    accent: "red",
    layout: "horizontal",
  },
  {
    number: "02",
    title: "Travel Planner",
    subtitle: "FULL-STACK TRAVEL MANAGEMENT",
    desc: "A full-stack travel management platform where users create personalized trip plans, organize day-wise itineraries, and monitor estimated budgets. Features preference-based suggestions and a robust backend for sessions and destination data.",
    skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    github: "https://github.com/Lokesh19-PP/Travel-Planner-Webapp",
    liveDemo: "https://travel-planner-webapp.onrender.com/",
    img: img1,
    accent: "blue",
    layout: "reverse",
  },
  {
    number: "03",
    title: "NutriHerb",
    subtitle: "WELLNESS & NUTRITION PLATFORM",
    desc: "A premium full-stack wellness platform built with Django & REST Framework. Features a modern UI for exploring superfoods, nutrition-dense recipes, and personalized health goals with user authentication and dynamic favouriting.",
    skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    github: "https://github.com/Lokesh19-PP/Nutriherb/",
    liveDemo: "https://nutriherb-scx2-five.vercel.app/",
    img: img3,
    accent: "yellow",
    layout: "horizontal",
  },
  {
    number: "04",
    title: "Book Bazaar",
    subtitle: "SECOND-HAND BOOK MARKETPLACE",
    desc: "A full-stack online bookstore for buying and selling new or used books with streamlined navigation. Includes listing management, book detail views, cart actions, and user-focused workflows for smooth purchasing.",
    skills: ["PHP", "MySQL", "HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Lokesh19-PP/BookBazaar-Platform",
    hideLiveDemo: true,
    img: img2,
    accent: "red",
    layout: "reverse",
  },
];

export default function Project() {
  return (
    <section className="projects-section" id="project" aria-labelledby="projects-heading">

      {/* Header */}
      <div className="projects-header">
        <p className="section-label">03 / SELECTED WORK</p>
        <h2 id="projects-heading" className="projects-headline reveal">
          THINGS I'VE<br />
          <span className="projects-headline-accent">BUILT.</span>
        </h2>
      </div>

      {/* Project list */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`project-card project-${project.layout} accent-${project.accent} reveal`}
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            {/* Image */}
            <div className="project-img-wrap">
              <img
                src={project.img}
                alt={`${project.title} preview`}
                className="project-img"
                loading="lazy"
              />
              <div className="project-img-overlay" aria-hidden="true">
                <span className="project-big-num">{project.number}</span>
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-top">
                <span className="project-num-small">{project.number}</span>
                <span className={`project-accent-tag tag-${project.accent}`}>{project.subtitle}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              {/* Tech tags */}
              <div className="project-tags" aria-label="Technologies used">
                {project.skills.map((skill, i) => (
                  <span key={i} className="project-tag">{skill}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brut"
                    aria-label={`View ${project.title} on GitHub`}
                    id={`project-github-${index}`}
                  >
                    GITHUB →
                  </a>
                )}
                {!project.hideLiveDemo && project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brut-outline"
                    aria-label={`View ${project.title} live demo`}
                    id={`project-live-${index}`}
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="projects-github-cta reveal">
        <p className="github-cta-text">MORE PROJECTS ON GITHUB →</p>
        <a
          href="https://github.com/Lokesh19-PP"
          target="_blank"
          rel="noreferrer"
          className="btn-brut"
          id="projects-view-all"
        >
          VIEW ALL WORK ↗
        </a>
      </div>
    </section>
  );
}
