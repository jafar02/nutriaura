import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState(false);

  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
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
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
          transition: "transform 0.25s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-6px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "none")
        }
      >
        {/* IMAGE */}
        <div
          style={{
            position: "relative",
            background: "#fafafa",
            padding: "20px",
            textAlign: "center",
          }}
        >
          {product.discount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background:
                  "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: "14px",
              }}
            >
              {product.discount}% OFF
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            style={{
              height: "180px",
              objectFit: "contain",
              transition: "transform 0.3s ease",
            }}
          />
        </div>

        {/* CONTENT */}
        <div style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "6px" }}>
            {product.name}
          </h3>

          {/* RATING */}
          <div style={{ fontSize: "13px", color: "#777", marginBottom: "6px" }}>
            ⭐ {product.rating || "4.5"}
          </div>

          {/* PRICE */}
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ fontSize: "18px" }}>
              ₹{discountedPrice}
            </strong>
            {product.discount > 0 && (
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: "line-through",
                  color: "#999",
                  fontSize: "14px",
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
    padding: "14px",        // 👈 here
    fontSize: "15px",       // 👈 here
    borderRadius: "16px",
    border: "none",
    fontWeight: 600,
    cursor: isInCart ? "default" : "pointer",
    color: "#fff",
    background: isInCart
      ? "#4caf50"
      : "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
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
