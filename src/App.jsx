import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NutriBot from "./components/NutriBot";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import AllProducts from "./pages/AllProducts";
import Wishlist from "./pages/Wishlist";
import CategoryProducts from "./pages/CategoryProducts";
// Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ShippingPolicy from "./pages/ShippingPolicy";

function App() {
  // 🔹 Single source of truth for chatbot
  const [botOpen, setBotOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <Navbar onBotClick={() => setBotOpen(true)} />

      {/* CHATBOT */}
      <NutriBot
        open={botOpen}
        onClose={() => setBotOpen(false)}
      />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        {/* POLICIES */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
      </Routes>

      {/* FOOTER (GLOBAL) */}
      <Footer />
    </>
  );
}

export default App;
