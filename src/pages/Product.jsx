import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <p style={{ padding: "40px", textAlign: "center" }}>
        Product not found
      </p>
    );
  }

  const discountedPrice = product.discount
    ? Math.round(
        product.price - (product.price * product.discount) / 100
      )
    : product.price;

  return (
    <div style={pageWrap}>
      {/* IMAGE */}
      <div style={imageWrap}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: "420px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* DETAILS */}
      <div style={detailsWrap}>
        <h1 style={{ marginBottom: "8px" }}>{product.name}</h1>

        {/* RATING */}
        <div style={{ marginBottom: "12px", color: "#fbc02d" }}>
          {"★".repeat(Math.round(product.rating || 4))}
          <span style={{ color: "#777", marginLeft: "6px" }}>
            ({product.rating || 4})
          </span>
        </div>

        {/* PRICE */}
        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "22px", fontWeight: 700 }}>
            ₹{discountedPrice}
          </span>

          {product.discount > 0 && (
            <>
              <span
                style={{
                  marginLeft: "10px",
                  textDecoration: "line-through",
                  color: "#999",
                }}
              >
                ₹{product.price}
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  color: "#d32f2f",
                  fontWeight: 600,
                }}
              >
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* BENEFIT */}
        <p style={{ marginBottom: "16px", color: "#555" }}>
          {product.benefit}
        </p>

        {/* TAGS */}
        {product.tags?.length > 0 && (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {product.tags.map((tag) => (
              <span key={tag} style={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ADD TO CART */}
        <button
          onClick={() => addToCart(product)}
          style={addBtn}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const pageWrap = {
  maxWidth: "1100px",
  margin: "auto",
  padding: "40px 16px",
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
};

const imageWrap = {
  flex: "1 1 360px",
  background: "#fafafa",
  padding: "24px",
  borderRadius: "24px",
  display: "flex",
  justifyContent: "center",
};

const detailsWrap = {
  flex: "1 1 420px",
};

const tagStyle = {
  fontSize: "12px",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "#f3e5f5",
  color: "#6a1b9a",
  fontWeight: 600,
};

const addBtn = {
  marginTop: "24px",
  padding: "14px 28px",
  borderRadius: "24px",
  border: "none",
  color: "#fff",
  fontWeight: 600,
  fontSize: "15px",
  cursor: "pointer",
  background:
    "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
};

export default Product;
