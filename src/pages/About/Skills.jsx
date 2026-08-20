import "./Skills.css";

const skillCategories = [
  {
    name: "LANGUAGES",
    accent: "red",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "JS" },
      { name: "PHP", icon: "🐘" },
      { name: "HTML", icon: "◈" },
      { name: "CSS", icon: "✦" },
    ],
  },
  {
    name: "FRONTEND",
    accent: "yellow",
    skills: [
      { name: "React", icon: "⚛" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Bootstrap", icon: "B" },
      { name: "JavaScript", icon: "JS" },
      { name: "HTML / CSS", icon: "◈" },
    ],
  },
  {
    name: "BACKEND",
    accent: "blue",
    skills: [
      { name: "Django", icon: "🎸" },
      { name: "REST Framework", icon: "⚡" },
      { name: "FastAPI", icon: "🚀" },
      { name: "PHP", icon: "🐘" },
    ],
  },
  {
    name: "DATABASE",
    accent: "red",
    skills: [
      { name: "MySQL", icon: "🗄" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQLite", icon: "◼" },
      { name: "Neo4j", icon: "◉" },
    ],
  },
  {
    name: "TOOLS",
    accent: "yellow",
    skills: [
      { name: "Git", icon: "⎇" },
      { name: "GitHub", icon: "⊛" },
      { name: "VS Code", icon: "◧" },
      { name: "Power BI", icon: "📊" },
      { name: "Celery", icon: "⚙" },
      { name: "Redis", icon: "◈" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">

      <div className="skills-max">
        {/* Header */}
        <div className="skills-header">
          <div>
            <p className="section-label skills-section-label">02 / SKILLS</p>
            <h2 id="skills-heading" className="skills-headline reveal">
              TECH STACK.
            </h2>
          </div>
          <p className="skills-sub reveal">
            Technologies and tools I use to build scalable products.
          </p>
        </div>

        {/* Clean Neo-Brutalist Skill Wall */}
        <div className="skills-wall-clean">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.name}
              className={`skill-cat-row accent-row-${cat.accent} reveal`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Category Label */}
              <div className="skill-cat-label-col">
                <span className={`cat-badge badge-${cat.accent}`}>{cat.name}</span>
              </div>

              {/* Skill Badges */}
              <div className="skill-tags-group">
                {cat.skills.map((skill, si) => (
                  <div
                    key={si}
                    className={`skill-pill hover-${cat.accent}`}
                    role="listitem"
                    aria-label={skill.name}
                  >
                    <span className="pill-icon" aria-hidden="true">{skill.icon}</span>
                    <span className="pill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}