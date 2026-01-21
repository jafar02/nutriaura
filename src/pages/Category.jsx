import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

const Category = () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");
  const [showBest, setShowBest] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1000);


  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [slug]);

  const filtered = products.filter((p) => {
    if (p.categorySlug !== slug) return false;
    if (showBest && !p.isBestSeller) return false;
    if (showNew && !p.isNew) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  const sortedProducts = [...filtered].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "32px" }}>
      {/* TITLE */}
      <h1 style={{ textTransform: "capitalize", marginBottom: "6px" }}>
        {slug.replace("-", " ")}
      </h1>

      <p style={{ color: "#777", marginBottom: "20px" }}>
        {sortedProducts.length} products found
      </p>

      {/* FILTER BAR */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "28px",
          background: "#fafafa",
          padding: "16px",
          borderRadius: "16px",
          position: "sticky",
          top: "90px",
          zIndex: 2,
        }}
      >
        {/* SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={control}
        >
          <option value="default">Sort</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
        </select>

        {/* PRICE */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <span style={{ fontSize: "13px" }}>Up to ₹{maxPrice}</span>
        </div>

        {/* TOGGLES */}
        <label>
          <input
            type="checkbox"
            checked={showBest}
            onChange={() => setShowBest(!showBest)}
          />{" "}
          Best Seller
        </label>

        <label>
          <input
            type="checkbox"
            checked={showNew}
            onChange={() => setShowNew(!showNew)}
          />{" "}
          New Arrival
        </label>

        {/* CLEAR */}
        <button
          onClick={() => {
            setSort("default");
            setShowBest(false);
            setShowNew(false);
            setMaxPrice(1000);
          }}
          style={clearBtn}
        >
          Clear
        </button>
      </div>

      {/* PRODUCTS */}
      {loading ? (
        <div style={gridStyle}>
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : sortedProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px" }}>
          <h3>No products found</h3>
          <p style={{ color: "#777" }}>
            Try adjusting filters or explore another category
          </p>
        </div>
      ) : (
        <div style={gridStyle}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const control = {
  padding: "10px",
  borderRadius: "12px",
  border: "1px solid #ddd",
};

const clearBtn = {
  padding: "8px 16px",
  borderRadius: "14px",
  border: "none",
  background: "#eee",
  cursor: "pointer",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px", 
};

export default Category;
