import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", maxWidth: "1100px", margin: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            backgroundColor: "#f8f8f8",
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", maxHeight: "360px", objectFit: "contain" }}
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1>{product.name}</h1>

          <p style={{ color: "#666", marginBottom: "12px" }}>
            {product.benefit}
          </p>

          {/* ⭐ RATING */}
          <div style={{ fontSize: "16px", marginBottom: "12px" }}>
            {"★".repeat(Math.round(product.rating || 0))}
            <span style={{ color: "#777" }}>
              {" "}
              ({product.rating || "N/A"})
            </span>
          </div>

          {/* PRICE */}
          <h2>₹{product.price}</h2>

          {/* TAGS */}
          {product.tags && (
            <div style={{ margin: "16px 0" }}>
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    marginRight: "8px",
                    padding: "6px 12px",
                    backgroundColor: "#eee",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(product)}
            style={{
              marginTop: "24px",
              padding: "14px 28px",
              borderRadius: "20px",
              border: "none",
              fontWeight: 600,
              color: "#fff",
              background:
                "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
