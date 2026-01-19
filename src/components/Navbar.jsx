import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = ({ onBotClick }) => {
  const { cart } = useCart();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO + NAME */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"  
            alt="NutriAura"
            style={{ width: "36px", height: "36px" }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              background:
                "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NutriAura
          </span>
        </Link>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/products">Shop</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart 🛒 
({cart.length})</Link>

          <button
            onClick={onBotClick}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              color: "#fff",
              fontWeight: 600,
              background:
                "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
              cursor: "pointer",
            }}
          >
            Talk to NutriBot
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
