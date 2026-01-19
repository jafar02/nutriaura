import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Categories = () => {
  const { category } = useParams();

  // Filter products based on category slug
  const filteredProducts = products.filter(
    (product) => product.categorySlug === category
  );

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "auto" }}>
      {/* Category Title */}
      <h1 style={{ marginBottom: "8px" }}>
        {category.replace(/-/g, " ").toUpperCase()}
      </h1>

      <p style={{ color: "#555", marginBottom: "24px" }}>
        Products curated for this health goal
      </p>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductCard
                name={product.name}
                benefit={product.benefit}
                icons={product.icons}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
