import React from 'react';
import { useState } from "react";
import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import productsData from "./data/data.json";
import WorkflowSection from './components/WorkflowSection';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Already added!");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart!");
  };

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    toast.error("Removed from cart!");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Cart is empty!");
      return;
    }

    setCart([]);
    toast.info("Checkout successful!");
  };

  return (
    <>
      {/* ✅ UPDATED */}
      <Navbar
        cartCount={cart.length}
        setActiveTab={setActiveTab}
      />

      <Banner />
      <Stats />

      <ToggleSection
        products={productsData}
        cart={cart}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleAddToCart={handleAddToCart}
        handleRemove={handleRemove}
        handleCheckout={handleCheckout}
      />

      <Steps />
      <Pricing />
      <WorkflowSection />
      <Footer />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;