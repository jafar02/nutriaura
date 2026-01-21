import { Link } from "react-router-dom";
import { useState } from "react";

/* ================= HOVER TEXT ================= */

const HoverText = ({ children, baseColor = "#e5e5e5" }) => {
  const [hover, setHover] = useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: "pointer",
        color: hover ? "#f5c518" : baseColor,
        textDecoration: hover ? "underline" : "none",
        transition: "all 0.25s ease",
      }}
    >
      {children}
    </span>
  );
};

/* ================= SOCIAL ICON ================= */

const SocialIcon = ({ children }) => {
  const [hover, setHover] = useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
        background: hover ? "#2a2a2a" : "transparent",
        transform: hover ? "translateY(-1px)" : "translateY(0)",
        opacity: hover ? 1 : 0.75,
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
    >
      {children}
    </span>
  );
};

/* ================= PAYMENT CARD ================= */

const PaymentCard = ({ children }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover(true)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setTimeout(() => setHover(false), 800)}
      style={{
        width: "56px",
        height: "32px",
        background: "#fff",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hover
          ? "0 3px 8px rgba(0,0,0,0.5)"
          : "0 1px 4px rgba(0,0,0,0.4)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

/* ================= FOOTER ================= */

const Footer = () => {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer style={footerStyle}>
        <div style={footerGrid}>
          {/* OUR POLICIES */}
          <div style={column}>
            <h4 style={heading}>OUR POLICIES</h4>
            <ul style={list}>
              <li><Link to="/terms" style={link} onClick={scrollTop}><HoverText>Terms & Conditions</HoverText></Link></li>
              <li><Link to="/privacy-policy" style={link} onClick={scrollTop}><HoverText>Privacy Policy</HoverText></Link></li>
              <li><Link to="/refund" style={link} onClick={scrollTop}><HoverText>Refund Policy</HoverText></Link></li>
              <li><Link to="/shipping" style={link} onClick={scrollTop}><HoverText>Shipping Policy</HoverText></Link></li>
            </ul>
            <span style={verticalDivider} />
          </div>

          {/* COMPANY INFO */}
          <div style={column}>
            <h4 style={heading}>TWINS DIGITAL SERVICES INDIA PVT LTD.</h4>
            <p style={text}>
              Millenia Business Park – Phase 2,<br />
              Symbiont Smart Spaces Campus 5,<br />
              Chennai – 600096
            </p>

            <p style={text}>
              <strong>Email:</strong> <HoverText>tellus@nutriaura.in</HoverText><br />
              <strong>Mobile:</strong> <HoverText>+91 8925691113</HoverText>
            </p>

            <div style={socials}>
              <SocialIcon><Instagram /></SocialIcon>
              <SocialIcon><Facebook /></SocialIcon>
              <SocialIcon><LinkedIn /></SocialIcon>
              <SocialIcon><YouTube /></SocialIcon>
            </div>

            <span style={verticalDivider} />
          </div>

          {/* QUOTE */}
          <div style={quoteBox}>
            “Transform your health with the world's first technology-enabled,
            scientifically-validated Twin Precision Treatment. Achieve a
            healthier metabolism ensuring holistic health, reduce medication
            dependence, and minimize risk of heart attack, stroke, and other
            complications.”
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div style={bottomBar}>
        <div style={bottomLeft}>
          <HoverText>🎁 Gift Cards</HoverText>
          <HoverText>❓ Help Center</HoverText>
        </div>

        <HoverText baseColor="#bdbdbd">
          © 2007–{new Date().getFullYear()} NutriAura.com
        </HoverText>

        <div style={paymentIcons}>
          <PaymentCard><Visa /></PaymentCard>
          <PaymentCard><MasterCard /></PaymentCard>
          <PaymentCard><Discover /></PaymentCard>
          <PaymentCard><RuPay /></PaymentCard>
          <PaymentCard><NetBanking /></PaymentCard>
          <PaymentCard><COD /></PaymentCard>
          <PaymentCard><EMI /></PaymentCard>
        </div>
      </div>
    </>
  );
};

/* ================= STYLES ================= */

const footerStyle = {
  background: "#1b1b1b",
  padding: "64px 24px",
  color: "#fff",
};

const footerGrid = {
  maxWidth: "1200px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "48px",
};

const column = {
  position: "relative",
  paddingRight: "48px",
};

const verticalDivider = {
  position: "absolute",
  top: "10%",
  right: "0",
  width: "2px",
  height: "80%",
  background:
    "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent)",
};

const heading = {
  fontSize: "18px",
  fontWeight: "700",
  marginBottom: "18px",
};

const list = {
  listStyle: "none",
  padding: 0,
  lineHeight: "2.2",
};

const link = {
  textDecoration: "none",
  display: "inline-block",
  lineHeight: "1.6",
};

const text = {
  fontSize: "14px",
  lineHeight: "1.9",
  color: "#d0d0d0",
};

const socials = {
  display: "flex",
  gap: "12px",
  marginTop: "18px",
};

const quoteBox = {
  background: "#262626",
  padding: "28px",
  borderRadius: "14px",
  lineHeight: "2",
  fontStyle: "italic",
};

/* ================= BOTTOM BAR ================= */

const bottomBar = {
  background: "#0f0f0f",
  padding: "14px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "13px",
};

const bottomLeft = {
  display: "flex",
  gap: "28px",
};

const paymentIcons = {
  display: "flex",
  gap: "8px",
};

/* ================= ICONS ================= */

const Visa = () => <svg width="32" height="14"><text x="0" y="12" fontSize="12" fontWeight="700" fill="#1A1F71">VISA</text></svg>;
const MasterCard = () => <svg width="28" height="14"><circle cx="10" cy="7" r="6" fill="#EB001B" /><circle cx="18" cy="7" r="6" fill="#F79E1B" /></svg>;
const Discover = () => <svg width="36" height="14"><text x="0" y="12" fontSize="10" fontWeight="700">DISC</text><text x="22" y="12" fontSize="10" fontWeight="700">VER</text><circle cx="19" cy="10" r="3" fill="#FF6000" /></svg>;
const RuPay = () => <svg width="32" height="14"><text x="0" y="12" fontSize="11" fontWeight="700">RuPay</text></svg>;
const NetBanking = () => <svg width="22" height="14" stroke="#000" fill="none" strokeWidth="2"><rect x="2" y="3" width="18" height="8" /><line x1="2" y1="7" x2="20" y2="7" /></svg>;
const COD = () => <svg width="26" height="14"><text x="0" y="12" fontSize="9" fontWeight="700">₹ COD</text></svg>;
const EMI = () => <svg width="22" height="14"><rect x="1" y="3" width="20" height="8" fill="none" stroke="#000" strokeWidth="2" /><text x="5" y="11" fontSize="9" fontWeight="700">EMI</text></svg>;

const Instagram = () => <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2"><rect x="1" y="1" width="12" height="12" rx="3" /><circle cx="7" cy="7" r="2.5" /></svg>;
const Facebook = () => <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2"><path d="M8 2h2V0H8a3 3 0 00-3 3v2H3v3h2v6h3V8h2.2l.4-3H8V3a1 1 0 011-1z" /></svg>;
const LinkedIn = () => <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2"><rect x="1" y="1" width="12" height="12" rx="2" /><line x1="4" y1="6" x2="4" y2="11" /><circle cx="4" cy="4" r="0.8" fill="white" /><path d="M7 11V8a1.5 1.5 0 013 0v3" /></svg>;
const YouTube = () => <svg width="16" height="12" fill="none" stroke="white" strokeWidth="2"><rect x="1" y="1" width="14" height="10" rx="2" /><polygon points="6,4 10,6 6,8" fill="white" /></svg>;

export default Footer;