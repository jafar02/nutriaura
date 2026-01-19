import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div style={emptyWrap}>
        <h2>Your cart is empty 🛒</h2>
        <p style={{ color: "#666", marginBottom: "24px" }}>
          Looks like you haven’t added anything yet.
        </p>
        <Link to="/products">
          <button style={primaryBtn}>Browse Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={pageWrap}>
      {/* LEFT: CART ITEMS */}
      <div style={{ flex: 2 }}>
        <h2 style={{ marginBottom: "24px" }}>
          Shopping Cart ({cart.length})
        </h2>

        {cart.map((item) => (
          <div key={item.id} style={itemRow}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
            />

            <div style={{ flex: 1 }}>
              <h4 style={{ marginBottom: "6px" }}>{item.name}</h4>
              <p style={{ color: "#777", fontSize: "14px" }}>
                ₹{item.price}
              </p>

              {/* QTY CONTROLS */}
              <div style={qtyWrap}>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                  style={qtyBtn}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  style={qtyBtn}
                >
                  +
                </button>
              </div>
            </div>

            {/* PRICE + REMOVE */}
            <div style={{ textAlign: "right" }}>
              <strong>
                ₹{item.price * item.quantity}
              </strong>
              <br />
              <button
                onClick={() => removeFromCart(item.id)}
                style={removeBtn}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT: SUMMARY */}
      <div style={summaryBox}>
        <h3>Order Summary</h3>

        <div style={summaryRow}>
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div style={summaryRow}>
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr style={{ margin: "12px 0" }} />

        <div style={summaryRow}>
          <strong>Total</strong>
          <strong>₹{subtotal}</strong>
        </div>

        <button
          style={{ ...primaryBtn, width: "100%", marginTop: "16px" }}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const pageWrap = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "24px 16px",
  display: "flex",
  gap: "32px",
  flexWrap: "wrap", 
};


const itemRow = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  background: "#fff",
  padding: "16px",
  borderRadius: "16px",
  marginBottom: "16px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const qtyWrap = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
  marginTop: "8px",
};

const qtyBtn = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};

const removeBtn = {
  marginTop: "8px",
  background: "none",
  border: "none",
  color: "#d32f2f",
  cursor: "pointer",
  fontSize: "13px",
};

const summaryBox = {
  flex: "1 1 100%",
  background: "#fafafa",
  padding: "24px",
  borderRadius: "20px",
};


const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const primaryBtn = {
  padding: "12px 24px",
  borderRadius: "24px",
  border: "none",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  background:
    "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
};

const emptyWrap = {
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export default Cart;
