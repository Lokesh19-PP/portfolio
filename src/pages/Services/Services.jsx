import "./Services.css";

const timelineItems = [
  {
    type: "EDUCATION",
    year: "2025",
    period: "AUG 2022 – MAY 2025",
    role: "Diploma in Computer Technology",
    org: "Government Polytechnic Nashik",
    location: "Nashik, Maharashtra",
    grade: "Score: 93%",
    points: [
      "Completed 3-year Diploma in Computer Technology with Distinction (93%).",
      "Built strong fundamentals in C, C++, Java, Web Technologies, Database Systems, and Object-Oriented Programming.",
      "Developed multiple academic and practical software projects.",
    ],
    accent: "yellow",
  },
  {
    type: "EXPERIENCE",
    year: "2025",
    period: "JAN 2025 – JUL 2025",
    role: "Python with Data Science & AI/ML Intern",
    org: "Sumago Infotech Pvt Ltd",
    location: "Nashik, Maharashtra",
    points: [
      "Completed intensive hands-on training in Python, Data Science, and Machine Learning.",
      "Performed end-to-end data analysis and visualization using NumPy, Pandas, and Matplotlib.",
      "Developed interactive analytics dashboards and reports using Power BI to generate key business insights.",
      "Executed database design, schema optimization, and query management using MySQL Workbench.",
      "Implemented end-to-end ML workflows including data preprocessing, feature engineering, and model experimentation.",
    ],
    cert: `${import.meta.env.BASE_URL}Intern_certificate.pdf`,
    certLabel: "VIEW CERTIFICATE →",
    accent: "red",
  },
  {
    type: "EDUCATION",
    year: "2028",
    period: "AUG 2025 – 2028 (PRESENT)",
    role: "B.E. in Computer Engineering",
    org: "Dr. D. Y. Patil Institute of Technology, Pimpri",
    location: "Pune, India",
    grade: "CGPA: 9.50",
    points: [
      "Pursuing Bachelor of Engineering in Computer Engineering with an outstanding 9.50 CGPA.",
      "Core focus on Data Structures, Algorithms, Operating Systems, DBMS, and Advanced Software Architecture.",
      "Building full-stack web applications and AI/ML-driven developer tools.",
    ],
    accent: "blue",
  },
];

/* Social links for the Connect section */
const socialLinks = [
  {
    label: "GITHUB",
    sublabel: "View my code & projects",
    href: "https://github.com/Lokesh19-PP",
    accent: "red",
    id: "connect-github",
  },
  {
    label: "LINKEDIN",
    sublabel: "Connect professionally",
    href: "https://linkedin.com/in/lokesh-pawar-4b834a312/",
    accent: "blue",
    id: "connect-linkedin",
  },
  {
    label: "LEETCODE",
    sublabel: "See my problem solving",
    href: "https://leetcode.com/u/lokesh191005/",
    accent: "yellow",
    id: "connect-leetcode",
  },
  {
    label: "EMAIL",
    sublabel: "lokeshpawar1910@gmail.com",
    href: "mailto:lokeshpawar1910@gmail.com",
    accent: "red",
    id: "connect-email",
  },
];

export default function Services() {
  return (
    <>
      {/* ── Journey / Experience Timeline ── */}
      <section className="journey-section" id="experience" aria-labelledby="journey-heading">

        <div className="journey-max">
          <p className="section-label">04 / JOURNEY</p>
          <h2 id="journey-heading" className="journey-headline reveal">
            WHERE I'VE<br />
            <span className="journey-accent">BEEN.</span>
          </h2>

          <div className="journey-timeline">
            {timelineItems.map((item, i) => (
              <article
                key={i}
                className={`journey-item reveal delay-${i * 100}`}
                aria-labelledby={`journey-role-${i}`}
              >
                {/* Left: Year + Type */}
                <div className="journey-year-col">
                  <span className={`journey-type-badge badge-${item.accent}`}>{item.type}</span>
                  <p className="journey-year">{item.year}</p>
                  <p className="journey-period">{item.period}</p>
                </div>

                {/* Right: Content */}
                <div className="journey-content-col">
                  <div className="journey-card">
                    <div className="journey-card-header">
                      <div>
                        <h3 id={`journey-role-${i}`} className="journey-role">{item.role}</h3>
                        <p className="journey-org">{item.org} · {item.location}</p>
                      </div>
                      {item.grade && (
                        <span className="journey-grade-badge">{item.grade}</span>
                      )}
                    </div>

                    <ul className="journey-points">
                      {item.points.map((pt, pi) => (
                        <li key={pi}>{pt}</li>
                      ))}
                    </ul>

                    {item.cert && (
                      <div className="journey-cert">
                        <a
                          href={item.cert}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-brut-outline"
                          id={`journey-cert-${i}`}
                        >
                          {item.certLabel}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── LET'S CONNECT — Developer Social Links ── */}
      <section className="connect-section" aria-labelledby="connect-heading">
        <div className="connect-max">

          {/* Heading row */}
          <div className="connect-header reveal-left">
            <p className="section-label connect-section-label">05 / LET'S CONNECT</p>
            <h2 id="connect-heading" className="connect-headline">
              FIND ME<br />
              <span className="connect-accent">ONLINE.</span>
            </h2>
            <p className="connect-sub">
              I'm always open to interesting projects,<br />
              collaborations, and conversations.
            </p>
          </div>

          {/* Large link blocks */}
          <div className="connect-links">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                className={`connect-link-block connect-${link.accent} reveal`}
                style={{ transitionDelay: `${i * 0.07}s` }}
                id={link.id}
                aria-label={`${link.label} — ${link.sublabel}`}
              >
                <div className="connect-link-content">
                  <span className="connect-link-label">{link.label}</span>
                  <span className="connect-link-sub">{link.sublabel}</span>
                </div>
                <span className="connect-link-arrow">↗</span>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}