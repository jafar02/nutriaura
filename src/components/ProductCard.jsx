import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState(false);

  const isInCart = cart.some((item) => item.id === product.id);

  // 🎨 One solid accent color per product
  const accent = product.accent || "#2e7d32";

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (isInCart) return;

    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const discountedPrice = product.discount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: `0 10px 26px ${accent}22`,
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = `0 18px 36px ${accent}33`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = `0 10px 26px ${accent}22`;
        }}
      >
        {/* IMAGE AREA */}
        <div
          style={{
            position: "relative",
            background: "#fafafa",
            height: "150px",                 // 🔥 FIXED HEIGHT (NO BLANK SPACE)
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            const img = e.currentTarget.querySelector("img");
            if (img) img.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            const img = e.currentTarget.querySelector("img");
            if (img) img.style.transform = "scale(1)";
          }}
        >
          {product.discount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                background: accent,
                color: "#fff",
                fontSize: "12px",
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: "999px",
              }}
            >
              {product.discount}% OFF
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              transition: "transform 0.35s ease",
            }}
          />
        </div>

        {/* CONTENT */}
        <div style={{ padding: "14px" }}>
          <h3 style={{ fontSize: "15px", marginBottom: "4px" }}>
            {product.name}
          </h3>

          {/* RATING */}
          <div style={{ fontSize: "13px", color: "#777", marginBottom: "6px" }}>
            ⭐ {product.rating || "4.5"}
          </div>

          {/* PRICE */}
          <div style={{ marginBottom: "10px" }}>
            <strong style={{ fontSize: "17px", color: accent }}>
              ₹{discountedPrice}
            </strong>
            {product.discount > 0 && (
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: "line-through",
                  color: "#999",
                  fontSize: "13px",
                }}
              >
                ₹{product.price}
              </span>
            )}
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "14px",
              borderRadius: "14px",
              border: "none",
              fontWeight: 600,
              cursor: isInCart ? "default" : "pointer",
              color: "#fff",
              background: isInCart ? "#4caf50" : accent,
            }}
          >
            {isInCart ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
