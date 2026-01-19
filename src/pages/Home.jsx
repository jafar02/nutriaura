import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

import products from "../data/products";
import categories from "../data/categories";

const Home = () => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 8);
  const newArrivals = products.filter(p => p.isNew).slice(0, 8);
  const dealOfTheDay = products.find(p => p.discount > 0);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "24px" }}>

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* TRUST STRIP */}
 <section
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    background: "linear-gradient(135deg,#faf3ff,#f5f9ff)",
    padding: "14px 18px",
    borderRadius: "28px",
    margin: "32px auto 56px",
    maxWidth: "900px",
    fontSize: "13px",
  }}
>
  {[
    "Clinically Backed",
    "Low GI Foods",
    "No Preservatives",
    "Trusted by Families",
  ].map((text) => (
    <div
      key={text}
      style={{
        background: "#fff",
        padding: "8px 14px",
        borderRadius: "999px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      ✔ {text}
    </div>
  ))}
</section>



      {/* SHOP BY HEALTH GOAL */}
      <section style={{ marginBottom: "72px" }}>
        <h2 style={sectionTitle}>Shop by Health Goal</h2>

        <div style={gridStyle}>
          {categories.map(cat => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section style={{ marginBottom: "72px" }}>
        <h2 style={sectionTitle}>🔥 Best Sellers</h2>

        <div style={gridStyle}>
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* DEAL OF THE DAY */}
      {dealOfTheDay && (
        <section style={{ marginBottom: "72px", textAlign: "center" }}>
          <h2 style={sectionTitle}>⚡ Deal of the Day</h2>
          <div style={{ maxWidth: "320px", margin: "auto" }}>
            <ProductCard product={dealOfTheDay} />
          </div>
        </section>
      )}

      {/* NEW ARRIVALS */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={sectionTitle}>🆕 New Arrivals</h2>

        <div style={gridStyle}>
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* WHY NUTRIAURA */}
      <section
        style={{
          backgroundColor: "#fafafa",
          padding: "48px",
          borderRadius: "28px",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Why NutriAura?</h2>
        <ul style={{ lineHeight: "1.9", paddingLeft: "20px", color: "#555" }}>
          <li>Clinically backed nutrition</li>
          <li>Low GI & diabetic-friendly foods</li>
          <li>No artificial preservatives</li>
          <li>Trusted by thousands of families</li>
        </ul>
      </section>
    </div>
  );
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "24px",
  fontSize: "26px",
  background: "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "24px",
};

export default Home;
