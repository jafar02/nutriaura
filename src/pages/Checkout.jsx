import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div style={centerWrap}>
        <h2>No items to checkout</h2>
        <button onClick={() => navigate("/products")} style={primaryBtn}>
          Go to Shop
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    alert("Payment gateway will be integrated here");
    navigate("/success");
  };

  return (
    <div style={pageWrap}>
      <h2 style={{ marginBottom: "24px" }}>Checkout</h2>

      {/* ORDER SUMMARY */}
      <div style={card}>
        <h3 style={{ marginBottom: "12px" }}>Order Summary</h3>

        {cart.map((item) => (
          <div key={item.id} style={row}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr style={{ margin: "16px 0" }} />

        <div style={row}>
          <strong>Total</strong>
          <strong>₹{total}</strong>
        </div>
      </div>

      {/* ACTIONS */}
      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <button onClick={() => navigate("/cart")} style={secondaryBtn}>
          Back to Cart
        </button>

        <button onClick={handlePayment} style={primaryBtn}>
          Pay ₹{total}
        </button>
      </div>
    </div>
  );
};

/* ============ STYLES ============ */

const pageWrap = {
  maxWidth: "600px",
  margin: "auto",
  padding: "32px 16px",
};

const card = {
  background: "#fff",
  padding: "24px",
  borderRadius: "20px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
};

const primaryBtn = {
  flex: 1,
  padding: "14px",
  borderRadius: "24px",
  border: "none",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  background: "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
};

const secondaryBtn = {
  flex: 1,
  padding: "14px",
  borderRadius: "24px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};

const centerWrap = {
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default Checkout;
