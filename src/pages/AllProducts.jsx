import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const ITEMS_PER_LOAD = 8;

const AllProducts = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "auto" }}>
      <h1>All Products</h1>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginTop: "24px",
        }}
      >
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* LOAD MORE */}
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() =>
              setVisibleCount((prev) => prev + ITEMS_PER_LOAD)
            }
            style={{
              padding: "12px 28px",
              borderRadius: "24px",
              border: "none",
              fontWeight: 600,
              color: "#fff",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
