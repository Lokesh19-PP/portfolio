import "./Services.css"
import { FaBriefcase } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="experience">

      <div className="title">
        <h2>Experience</h2>
      </div>

      <div className="experience-container">
        <div className="experience-card">
          <FaBriefcase className="service-icon"/>
          <h3>Python Data Science & AI/ML Intern</h3>
          <p className="experience-meta">Sumago Infotech Pvt Ltd | Jan 2025 - Jul 2025</p>
          <ul>
            <li>Completed intensive training in Python, Data Science, and Machine Learning.</li>
            <li>Performed data analysis and visualization using NumPy, Pandas, and Matplotlib.</li>
            <li>Built interactive dashboards and reports using Power BI to generate business insights.</li>
            <li>Designed and managed databases using MySQL Workbench.</li>
            <li>Implemented machine learning workflows, including data preprocessing and model experimentation.</li>
            <li>Gained hands-on experience in solving real-world problems using AI/ML techniques.</li>
          </ul>

          <div className="certification-block">
            <h4>Certification</h4>
            <div className="certification-links">
              <a
                href={`${import.meta.env.BASE_URL}Intern_certificate.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Python Data Science & AI/ML Certificate
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default Services;