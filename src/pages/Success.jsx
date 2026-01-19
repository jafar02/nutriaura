import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #fdf2f8, #f3e8ff, #eef2ff)",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "48px 40px",
          borderRadius: "28px",
          textAlign: "center",
          maxWidth: "460px",
          width: "100%",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
        }}
      >
        {/* CHECK ICON */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            margin: "0 auto 20px",
            background:
              "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          ✓
        </div>

        {/* TITLE */}
        <h1
          style={{
            marginBottom: "12px",
            background:
              "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Order Confirmed
        </h1>

        {/* MESSAGE */}
        <p style={{ color: "#555", fontSize: "15px" }}>
          Thank you for choosing <strong>NutriAura</strong>.  
          Your payment was processed successfully and your order is confirmed.
        </p>

        {/* INFO CARD */}
        <div
          style={{
            marginTop: "22px",
            backgroundColor: "#fafafa",
            padding: "16px",
            borderRadius: "16px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          You will receive your order details and tracking information shortly.
        </div>

        {/* ACTION */}
        <Link to="/">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 28px",
              borderRadius: "22px",
              border: "none",
              fontSize: "16px",
              fontWeight: 600,
              color: "#fff",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
            }}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
