import "./About.css";

function About() {
  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div className="photo-card">
          <div className="photo-animate">
            <img src="public/lokesh.png" alt="Lokesh profile" />
          </div>
        </div>

        <div className="text-about">
          <p>
            I am an aspiring software developer with a strong foundation in Python, web
            development, and data structures and algorithms. Currently pursuing B.E. in Computer
            Engineering, I have hands-on experience in building full-stack web applications using
            Django, MySQL, and modern frontend technologies. I completed an internship in Python,
            Data Science, and AI/ML, where I worked on data analysis, visualization, and machine
            learning workflows. I am passionate about solving real-world problems through efficient
            and scalable solutions, and I continuously strive to improve my coding skills while
            exploring new technologies.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;