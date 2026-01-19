import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";

const CategoryProducts = () => {
  const { slug } = useParams();

  const category = categories.find((c) => c.slug === slug);

  // 🔹 FILTER STATE
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [tag, setTag] = useState("");

  const filteredProducts = products.filter((p) => {
    if (p.categorySlug !== slug) return false;
    if (minPrice && p.price < minPrice) return false;
    if (maxPrice && p.price > maxPrice) return false;
    if (minRating && p.rating < minRating) return false;
    if (tag && !p.tags?.includes(tag)) return false;
    return true;
  });

  // Collect unique tags for filter dropdown
  const availableTags = [
    ...new Set(
      products
        .filter((p) => p.categorySlug === slug)
        .flatMap((p) => p.tags || [])
    ),
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "32px 24px",
      }}
    >
      {/* 🔗 BREADCRUMBS */}
      <div style={{ fontSize: "14px", marginBottom: "16px" }}>
        <Link to="/" style={{ color: "#666" }}>Home</Link>
        <span style={{ margin: "0 6px" }}>/</span>
        <span style={{ fontWeight: 600 }}>
          {category?.title || "Category"}
        </span>
      </div>

      <h1>{category?.title}</h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        {category?.description}
      </p>

      {/* 🎛️ FILTERS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "32px",
          background: "#fafafa",
          padding: "16px",
          borderRadius: "16px",
        }}
      >
        <input
          type="number"
          placeholder="Min ₹"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ddd" }}
        />

        <input
          type="number"
          placeholder="Max ₹"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ddd" }}
        />

        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          style={{ padding: "8px", borderRadius: "8px" }}
        >
          <option value="">Min Rating</option>
          <option value="4">4★ & up</option>
          <option value="4.5">4.5★ & up</option>
        </select>

        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          style={{ padding: "8px", borderRadius: "8px" }}
        >
          <option value="">All Tags</option>
          {availableTags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* CLEAR FILTERS */}
        <button
          onClick={() => {
            setMinPrice("");
            setMaxPrice("");
            setMinRating("");
            setTag("");
          }}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#eee",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      {/* 🛍️ PRODUCT GRID */}
      {filteredProducts.length === 0 ? (
        <p>No products match your filters.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
