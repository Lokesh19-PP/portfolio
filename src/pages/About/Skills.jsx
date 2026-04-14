import "./Skills.css";
import {
FaHtml5,
FaCss3Alt,
FaJs,
FaGitAlt,
FaGithub,
FaLaptopCode,
FaChartBar
} from "react-icons/fa";

import {
SiTailwindcss,
SiMysql,
SiPhp,
SiDjango,
SiPython,
SiSqlite,
SiBootstrap
} from "react-icons/si";

function Skills(){
const levelWidth = {
  Beginner: "42%",
  Intermediate: "68%",
  Advanced: "90%",
};

const skillLevels = [
  { category: "Frontend", skills: [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
  ]},
  { category: "Backend & Database", skills: [
    { name: "Python", level: "Advanced" },
    { name: "Django", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "SQLite", level: "Intermediate" },
  ]},
  { category: "Tools & Concepts", skills: [
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "VS Code", level: "Advanced" },
    { name: "Power BI", level: "Intermediate" },
    { name: "OOP & DSA", level: "Intermediate" },
    { name: "Problem Solving", level: "Advanced" },
  ]},
];

return(
<section className="skills-section" id="skills">
  <div className="title">
    <h2>Skills</h2>
  </div>

  <div className="skills-slider">
    <div className="skills-track">
      <FaHtml5/><FaCss3Alt/><FaJs/><SiBootstrap/><SiTailwindcss/>
      <SiPython/><SiDjango/><SiPhp/><SiMysql/><SiSqlite/>
      <FaGitAlt/><FaGithub/><FaLaptopCode/><FaChartBar/>

      <FaHtml5/><FaCss3Alt/><FaJs/><SiBootstrap/><SiTailwindcss/>
      <SiPython/><SiDjango/><SiPhp/><SiMysql/><SiSqlite/>
      <FaGitAlt/><FaGithub/><FaLaptopCode/><FaChartBar/>
    </div>
  </div>

  <div className="levels-grid">
    {skillLevels.map((group) => (
      <div className="level-card" key={group.category}>
        <h3>{group.category}</h3>
        {group.skills.map((skill) => (
          <div className="skill-level-item" key={skill.name}>
            <div className="skill-level-head">
              <span>{skill.name}</span>
              <span className="level-tag">{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: levelWidth[skill.level] }}></div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
</section>

)

}

export default Skills;