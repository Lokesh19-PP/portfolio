import "./Marquee.css";

const items = [
  "BUILDING DIGITAL PRODUCTS",
  "FULL STACK DEVELOPMENT",
  "PYTHON",
  "JAVASCRIPT",
  "REACT",
  "DJANGO",
  "MYSQL",
  "POSTGRESQL",
  "GIT & GITHUB",
  "AI/ML",
  "PROBLEM SOLVING",
  "OPEN TO WORK",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-strip" aria-label="Skills and focus areas">
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
