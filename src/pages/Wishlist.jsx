import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ marginBottom: "24px" }}>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        // EMPTY STATE (VERY IMPORTANT)
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            backgroundColor: "#fafafa",
            borderRadius: "24px",
          }}
        >
          <h3>Your wishlist is empty</h3>
          <p style={{ color: "#666", marginBottom: "24px" }}>
            Save your favourite products and find them here anytime.
          </p>

          <Link to="/products">
            <button
              style={{
                padding: "12px 24px",
                borderRadius: "20px",
                border: "none",
                fontWeight: 600,
                color: "#fff",
                background:
                  "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
                cursor: "pointer",
              }}
            >
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        // WISHLIST GRID
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
