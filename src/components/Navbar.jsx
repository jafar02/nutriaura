import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const FONT =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const Navbar = () => {
  const { cart } = useCart();
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div style={styles.announcementBar}>
        <div className="announcement-scroll" style={styles.announcementText}>
          🌿 Clean Functional Nutrition by NutriAura &nbsp;|&nbsp;
          💸 Get 10% OFF above ₹3000 — Code <strong>NAU3000</strong>
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          {/* BRAND */}
          <Link to="/" style={styles.brand}>
           
            NutriAura
          </Link>

          {/* SEARCH */}
          <input placeholder="Search products" style={styles.search} />

          {/* CENTER MENU */}
          <div style={styles.centerMenu}>
            <Dropdown
              label="Shop by Concern"
              open={openMenu === "concern"}
              onOpen={() => setOpenMenu("concern")}
              onClose={() => setOpenMenu(null)}
              items={[
                { label: "Diabetes", icon: <DropIcon />, link: "/categories/diabetes" },
                { label: "PCOS", icon: <HeartIcon />, link: "/categories/pcos" },
                { label: "Obesity", icon: <ScaleIcon />, link: "/categories/obesity" },
              ]}
            />

            <NavText to="/combo-deals">Combo Deals</NavText>

            <Dropdown
              label="Shop by Category"
              open={openMenu === "category"}
              onOpen={() => setOpenMenu("category")}
              onClose={() => setOpenMenu(null)}
              items={[
                { label: "Protein", icon: <BoltIcon />, link: "/categories/protein" },
                { label: "Snacks", icon: <SnackIcon />, link: "/categories/snacks" },
                { label: "Health Mix", icon: <LeafIcon />, link: "/categories/health-mix" },
                { label: "Smoothies", icon: <GlassIcon />, link: "/categories/smoothies" },
                { label: "Spreads", icon: <JarIcon />, link: "/categories/spreads" },
              ]}
            />
          </div>

          {/* RIGHT ICONS */}
          <div style={styles.iconGroup}>
            <NavIcon to="/wishlist" title="Wishlist">
              <HeartIcon />
            </NavIcon>

            <NavIcon to="/account" title="Account">
              <UserIcon />
            </NavIcon>

            <NavIcon to="/cart" title="Cart">
              <CartIcon />
              {cart.length > 0 && (
                <span style={styles.cartBadge}>{cart.length}</span>
              )}
            </NavIcon>
          </div>
        </div>
      </nav>

      {/* SCROLL ANIMATION */}
      <style>{`
        @keyframes scrollText {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .announcement-scroll {
          animation: scrollText 18s linear infinite;
        }
        .announcement-scroll:hover {
          animation-play-state: paused;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

/* ---------- COMPONENTS ---------- */

const NavText = ({ to, children }) => (
  <Link
    to={to}
    style={{
      fontFamily: FONT,
      fontSize: "15px",
      fontWeight: 600,
      letterSpacing: "0.2px",
      color: "#1f2937",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      height: "32px",
      lineHeight: "1",
    }}
  >
    {children}
  </Link>
);

const Dropdown = ({ label, items, open, onOpen, onClose }) => (
  <div
    style={{ position: "relative" }}
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <div style={styles.dropdownLabel}>
      {label}
      <span
        style={{
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          transform: open ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.2s ease",
        }}
      >
        ▼
      </span>
    </div>

    {open && (
      <div style={styles.dropdown}>
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.link}
            style={styles.dropdownItem}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const NavIcon = ({ to, children, title }) => (
  <Link to={to} title={title} style={styles.iconButton}>
    {children}
  </Link>
);

/* ---------- SVG ICONS ---------- */

const iconStyle = { width: 16, height: 16, stroke: "#2f4b1e" };

const DropIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <path d="M12 2s-7 8-7 13a7 7 0 0014 0c0-5-7-13-7-13z" strokeWidth="1.5" />
  </svg>
);
const HeartIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <path d="M20 8a5 5 0 00-8-4 5 5 0 00-8 4c0 7 8 12 8 12s8-5 8-12z" strokeWidth="1.5" />
  </svg>
);
const ScaleIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <path d="M12 3v18M4 7h16M6 7l-2 6h6l-2-6zm12 0l-2 6h6l-2-6z" strokeWidth="1.5" />
  </svg>
);
const BoltIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeWidth="1.5" />
  </svg>
);
const LeafIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <path d="M5 21c14-2 14-16 14-16S7 5 5 21z" strokeWidth="1.5" />
  </svg>
);
const SnackIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="1.5" />
  </svg>
);
const GlassIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <path d="M4 2h16l-2 14H6L4 2zM10 16v6h4v-6" strokeWidth="1.5" />
  </svg>
);
const JarIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <rect x="6" y="7" width="12" height="14" rx="2" strokeWidth="1.5" />
    <path d="M8 3h8v4H8z" strokeWidth="1.5" />
  </svg>
);
const UserIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
    <path d="M4 22c0-4 4-6 8-6s8 2 8 6" strokeWidth="1.5" />
  </svg>
);
const CartIcon = () => (
  <svg {...iconStyle} fill="none" viewBox="0 0 24 24">
    <path d="M3 3h2l3 13h10l3-8H7" strokeWidth="1.5" />
    <circle cx="10" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
  </svg>
);

/* ---------- STYLES ---------- */

const styles = {
  announcementBar: {
    background: "#2f4b1e",
    color: "#fff",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  announcementText: {
    display: "inline-block",
    padding: "6px 0",
    fontFamily: FONT,
    fontSize: "14px",
  },
  nav: {
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "14px 24px",
    display: "grid",
    gridTemplateColumns: "auto auto 1fr auto",
    alignItems: "center",
    gap: 24,
  },
  brand: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontFamily: FONT,
    fontSize: 26,
    fontWeight: 800,
    color: "#2f4b1e",
    textDecoration: "none",
  },
  search: {
    width: 220,
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #ccc",
    background: "#fafafa",
    fontFamily: FONT,
    fontSize: 14,
  },
  centerMenu: {
    display: "flex",
    alignItems: "center", // 🔑 alignment fix
    gap: 32,
    justifyContent: "center",
  },
  dropdownLabel: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    fontFamily: FONT,
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: "0.2px",
    color: "#1f2937",
    height: "32px",
    lineHeight: "1",
  },
  dropdown: {
    position: "absolute",
    top: 34,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    minWidth: 200,
    padding: 8,
  },
  dropdownItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    fontFamily: FONT,
    fontSize: 14,
    fontWeight: 500,
    color: "#1f2937",
    textDecoration: "none",
    borderRadius: 8,
  },
  iconGroup: {
    display: "flex",
    gap: 14,
  },
  iconButton: {
    position: "relative",
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "#f3f7f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },
  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    background: "#2f4b1e",
    color: "#fff",
    borderRadius: "50%",
    width: 18,
    height: 18,
    fontSize: 11,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FONT,
    fontWeight: 600,
  },
};

export default Navbar;