const baseProducts = [
  // ===== DIABETES CARE =====
  {
    id: 1,
    name: "Foxtail Millet Cookies",
    price: 199,
    discount: 20,
    rating: 4.6,
    tags: ["Low GI", "High Fiber"],
    image: "/products/foxtail-cookies.png",
    benefit: "Supports steady blood sugar levels",
    categorySlug: "diabetes-care",
    isBestSeller: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Ragi Health Cookies",
    price: 189,
    discount: 15,
    rating: 4.4,
    tags: ["Low GI", "No Sugar"],
    image: "/products/foxtail-cookies.png",
    benefit: "Helps manage sugar naturally",
    categorySlug: "diabetes-care",
    isBestSeller: true,
    isNew: false,
  },
  {
    id: 3,
    name: "Little Millet Snack Bites",
    price: 179,
    discount: 0,
    rating: 4.3,
    tags: ["Gluten Free"],
    image: "/products/foxtail-cookies.png",
    benefit: "Light and diabetic-friendly snack",
    categorySlug: "diabetes-care",
    isBestSeller: false,
    isNew: true,
  },

  // ===== HIGH PROTEIN =====
  {
    id: 4,
    name: "High Protein Health Mix",
    price: 349,
    discount: 25,
    rating: 4.7,
    tags: ["High Protein"],
    image: "/products/protein-mix.png",
    benefit: "Improves muscle strength",
    categorySlug: "high-protein",
    isBestSeller: true,
    isNew: false,
  },
  {
    id: 5,
    name: "Plant Protein Plus",
    price: 399,
    discount: 10,
    rating: 4.5,
    tags: ["Plant Protein"],
    image: "/products/protein-mix.png",
    benefit: "Daily protein nutrition",
    categorySlug: "high-protein",
    isBestSeller: false,
    isNew: true,
  },

  // ===== GUT HEALTH =====
  {
    id: 6,
    name: "Little Millet Dosa Mix",
    price: 179,
    discount: 0,
    rating: 4.4,
    tags: ["Easy Digest"],
    image: "/products/dosa-mix.png",
    benefit: "Healthy breakfast alternative",
    categorySlug: "gut-health",
    isBestSeller: true,
    isNew: true,
  },
  {
    id: 7,
    name: "Multi Millet Idli Mix",
    price: 169,
    discount: 5,
    rating: 4.3,
    tags: ["Gluten Free"],
    image: "/products/dosa-mix.png",
    benefit: "Soft, nutritious idlis",
    categorySlug: "gut-health",
    isBestSeller: true,
    isNew: false,
  },

  // ===== KIDS NUTRITION =====
  {
    id: 8,
    name: "Kids Nutrition Health Drink",
    price: 299,
    discount: 20,
    rating: 4.6,
    tags: ["Kids", "Immunity"],
    image: "/products/kids-drink.png",
    benefit: "Supports growth & immunity",
    categorySlug: "kids-nutrition",
    isBestSeller: true,
    isNew: false,
  },
  {
    id: 9,
    name: "Kids Millet Choco Mix",
    price: 279,
    discount: 10,
    rating: 4.5,
    tags: ["Kids"],
    image: "/products/kids-drink.png",
    benefit: "Tasty & nutritious",
    categorySlug: "kids-nutrition",
    isBestSeller: false,
    isNew: true,
  },
];

// ===== EXPAND TO 30 PRODUCTS (SAFE DUPLICATION) =====
const products = [...baseProducts];
let nextId = baseProducts.length + 1;

while (products.length < 30) {
  const source = baseProducts[products.length % baseProducts.length];

  products.push({
    ...source,
    id: nextId++,
    isNew: Math.random() > 0.6,
    isBestSeller: Math.random() > 0.7,
  });
}

export default products;
