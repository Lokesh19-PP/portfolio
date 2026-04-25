import "./Project.css";

import img1 from "../../assets/images/travel-planner.png";
import img2 from "../../assets/images/bookbazzar.png";
import img3 from "../../assets/images/nutrihurb.png";

const projects = [
  {
    title: "Travel Planner Web Application",
    img: img1,
    desc: "A full-stack travel management platform where users can create personalized trip plans, organize day-wise itineraries, and monitor estimated budgets. It includes preference-based travel suggestions, clean UI flows, and a robust backend for handling user sessions and destination data.",
    skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "Sqlite"],
    github: "https://github.com/Lokesh19-PP/Travel-Planner-Webapp",
    liveDemo: "https://travel-planner-webapp.onrender.com/",
  },

  {
    title: "NutriHerb",
    img: img3,
    desc: "🌿 A premium full-stack wellness platform built with Django & REST Framework. Features a modern glassmorphic UI for exploring superfoods, nutrition-dense recipes, and personalized health goals bu suggesting Recipes, with user authentication and dynamic favoriting.",
    skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "SqLite"],
    github: "https://github.com/Lokesh19-PP/Nutriherb/",
    liveDemo: "https://nutriherb-scx2-five.vercel.app/",
  },

  {
    title: "Book Bazaar",
    img: img2,
    desc: "A full-stack online bookstore platform for buying and selling new or used books and streamlined navigation. The system includes listing management, book detail views, and user-focused workflows for discovery, cart actions, and overall smooth purchasing experience.",
    skills: ["PHP", "MySQL", "HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Lokesh19-PP/BookBazaar-Platform",
    hideLiveDemo: true,
  },
];

export default function Project() {
  return (
    <section className="project reveal" id="project">
      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className={`project-item ${index % 2 === 0 ? 'row' : 'row-reverse'}`} key={index}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="image-overlay"></div>
            </div>

            <div className="project-details">
              <span className="project-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="skills">
                {project.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>

              {(project.github || project.liveDemo) && (
                <div className="btns">
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}

                  {!project.hideLiveDemo && project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <a href="https://github.com/Lokesh19-PP" target="_blank" rel="noreferrer" className="btn-secondary">
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
