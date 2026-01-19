import { Link } from "react-router-dom";

const CategoryCard = ({ title, description }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/category/${slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "20px",
          border: "1px solid #eee",
          boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
        }}
      >
        <h3 style={gradientText}>{title}</h3>
        <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
        <span style={gradientTextSmall}>Explore →</span>
      </div>
    </Link>
  );
};

const gradientText = {
  marginBottom: "8px",
  background: "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const gradientTextSmall = {
  marginTop: "12px",
  display: "inline-block",
  fontSize: "13px",
  fontWeight: 600,
  background: "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default CategoryCard;
