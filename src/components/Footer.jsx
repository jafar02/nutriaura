import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "80px",
        backgroundColor: "#111",
        color: "#eee",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
        }}
      >
        {/* BRAND */}
        <div>
          <h3 style={{ marginBottom: "12px" }}>NutriAura</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#bbb" }}>
            Functional nutrition designed to support diabetes care, gut health,
            and everyday wellness.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h4 style={{ marginBottom: "12px" }}>Shop</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><Link to="/products" style={{ color: "#bbb" }}>All Products</Link></li>
            <li><Link to="/wishlist" style={{ color: "#bbb" }}>Wishlist</Link></li>
            <li><Link to="/cart" style={{ color: "#bbb" }}>Cart</Link></li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h4 style={{ marginBottom: "12px" }}>Policies</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><Link to="/privacy-policy" style={{ color: "#bbb" }}>Privacy Policy</Link></li>
            <li><Link to="/terms" style={{ color: "#bbb" }}>Terms & Conditions</Link></li>
            <li><Link to="/shipping" style={{ color: "#bbb" }}>Shipping Policy</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={{ marginBottom: "12px" }}>Contact</h4>
          <p style={{ fontSize: "14px", color: "#bbb" }}>
            Email: support@nutriaura.in<br />
            Phone: +91 90000 00000
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "13px",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} NutriAura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
